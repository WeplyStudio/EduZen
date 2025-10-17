'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { AppHeader } from '@/components/app-header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getResearch } from './actions';
import { FlaskConical, LoaderCircle, Sparkles, Wand2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Researching...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate
        </>
      )}
    </Button>
  );
}


export default function ResearchPage() {
    const initialState = {
        data: '',
        error: '',
    };
    const [state, formAction] = useFormState(getResearch, initialState);


  return (
    <div className="flex-1 flex flex-col bg-background">
      <AppHeader title="AI Research Assistant" />
      <main className="flex-1 p-4 md:p-6 lg:p-8 grid gap-8 md:grid-cols-2">
        <Card>
            <form action={formAction}>
                <CardHeader>
                    <CardTitle>Research Tool</CardTitle>
                    <CardDescription>
                        Enter a topic or question, and the AI will find and summarize relevant information for you.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="prompt">Research Prompt</Label>
                            <Textarea
                                id="prompt"
                                name="prompt"
                                placeholder="e.g., 'Explain the causes of the French Revolution' or 'Summarize the theory of relativity'"
                                className="min-h-[150px]"
                                required
                            />
                        </div>
                         {state?.error && <p className="text-sm text-destructive">{state.error}</p>}
                    </div>
                </CardContent>
                <CardFooter>
                    <SubmitButton />
                </CardFooter>
            </form>
        </Card>
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Sparkles className="text-primary"/>
                    <span>Generated Results</span>
                </CardTitle>
                <CardDescription>The AI's findings will appear below.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                 {useFormStatus().pending ? (
                     <div className="space-y-4">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <br/>
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                     </div>
                 ) : state.data ? (
                     <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
                        {state.data}
                     </div>
                 ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground p-8 bg-secondary/50 rounded-lg">
                        <FlaskConical className="h-12 w-12 mb-4" />
                        <h3 className="text-lg font-semibold text-foreground">Ready to explore?</h3>
                        <p>Your research results will be displayed here once you submit a prompt.</p>
                     </div>
                 )}
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
