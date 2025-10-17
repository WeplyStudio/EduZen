'use server';

/**
 * @fileOverview AI-powered research summarization tool.
 *
 * - summarizeResearch - A function that summarizes research articles and texts.
 * - SummarizeResearchInput - The input type for the summarizeResearch function.
 * - SummarizeResearchOutput - The return type for the summarizeResearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeResearchInputSchema = z.object({
  text: z.string().describe('The research article or text to summarize.'),
});
export type SummarizeResearchInput = z.infer<typeof SummarizeResearchInputSchema>;

const SummarizeResearchOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the research article or text.'),
});
export type SummarizeResearchOutput = z.infer<typeof SummarizeResearchOutputSchema>;

export async function summarizeResearch(input: SummarizeResearchInput): Promise<SummarizeResearchOutput> {
  return summarizeResearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeResearchPrompt',
  input: {schema: SummarizeResearchInputSchema},
  output: {schema: SummarizeResearchOutputSchema},
  prompt: `You are an expert research assistant. Your task is to summarize the following research article or text in a concise and informative manner.\n\nText: {{{text}}}`,
});

const summarizeResearchFlow = ai.defineFlow(
  {
    name: 'summarizeResearchFlow',
    inputSchema: SummarizeResearchInputSchema,
    outputSchema: SummarizeResearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
