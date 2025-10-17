"use server";

import { researchAssistant } from "@/ai/flows/research-assistant";
import { z } from "zod";

const ResearchSchema = z.object({
  prompt: z.string().min(10, { message: "Prompt must be at least 10 characters long." }),
});

type ResearchState = {
  data?: string;
  error?: string;
}

export async function getResearch(prevState: ResearchState, formData: FormData): Promise<ResearchState> {
  const validatedFields = ResearchSchema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.prompt?.[0] || "Invalid prompt provided.",
    };
  }

  try {
    const result = await researchAssistant({ prompt: validatedFields.data.prompt });
    if(result?.results) {
        return { data: result.results };
    }
    return { error: "The AI returned an empty result. Please try a different prompt." };
  } catch (e) {
    console.error(e);
    return {
      error: "Something went wrong with the AI research. Please try again later.",
    };
  }
}
