// src/ai/flows/research-assistant.ts
'use server';
/**
 * @fileOverview AI-powered research assistant flow.
 *
 * This file contains the Genkit flow for the ResearchAssistant feature.
 * It allows students to quickly find relevant information on a topic by providing a prompt.
 *
 * @param {string} prompt - The research prompt provided by the user.
 * @returns {Promise<string>} - A promise that resolves with the research results.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResearchAssistantInputSchema = z.object({
  prompt: z.string().describe('The research prompt provided by the user.'),
});
export type ResearchAssistantInput = z.infer<typeof ResearchAssistantInputSchema>;

const ResearchAssistantOutputSchema = z.object({
  results: z.string().describe('The research results based on the prompt.'),
});
export type ResearchAssistantOutput = z.infer<typeof ResearchAssistantOutputSchema>;

export async function researchAssistant(input: ResearchAssistantInput): Promise<ResearchAssistantOutput> {
  return researchAssistantFlow(input);
}

const researchAssistantPrompt = ai.definePrompt({
  name: 'researchAssistantPrompt',
  input: {schema: ResearchAssistantInputSchema},
  output: {schema: ResearchAssistantOutputSchema},
  prompt: `You are a research assistant helping a student find relevant information on a topic.
  Based on the prompt provided, find relevant information and summarize it.

  Prompt: {{{prompt}}}
  `,
});

const researchAssistantFlow = ai.defineFlow(
  {
    name: 'researchAssistantFlow',
    inputSchema: ResearchAssistantInputSchema,
    outputSchema: ResearchAssistantOutputSchema,
  },
  async input => {
    const {output} = await researchAssistantPrompt(input);
    return output!;
  }
);
