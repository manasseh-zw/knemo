import Header from "@/components/header";
import {
  InputGroup,
  InputGroupTextarea,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Item, ItemContent } from "@/components/ui/item";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpIcon, PlusIcon, UserIcon } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const SUGGESTED_TOPICS = [
  "Why do we forget dreams seconds after waking up?",
  "How do octopuses think with nine brains?",
  "What makes sourdough bread different from regular bread?",
  "Why does time feel faster as we get older?",
  "How did ancient civilizations move massive stones?",
  "What's the science behind déjà vu?",
];

function HomeComponent() {
  const [prompt, setPrompt] = useState("");

  const handleTopicClick = (topic: string) => {
    setPrompt(topic);
  };

  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-4 -mt-10">
        <div className="w-full max-w-2xl space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-2 mb-20">
            <h1 className="text-4xl font-normal">
              <span className="italic">Fastest</span> way to learn anything.
            </h1>
            <p className="text-lg text-muted-foreground">
              Type it in, and we'll make you brilliant.
            </p>
          </div>

          {/* Input Section */}
          <div className="w-full">
            <InputGroup className="rounded-2xl bg-card border shadow-sm">
              <InputGroupTextarea
                placeholder="Teach me about everything"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[60px] resize-none"
              />
              <InputGroupAddon
                align="block-end"
                className="justify-between p-3"
              >
                <div className="flex gap-2">
                  <InputGroupButton
                    variant="ghost"
                    className="rounded-full"
                    size="icon-sm"
                  >
                    <UserIcon className="w-4 h-4" />
                    <span className="sr-only">User</span>
                  </InputGroupButton>
                  <InputGroupButton
                    variant="ghost"
                    className="rounded-full"
                    size="icon-sm"
                  >
                    <PlusIcon className="w-4 h-4" />
                    <span className="sr-only">Add</span>
                  </InputGroupButton>
                </div>
                <InputGroupButton
                  variant="default"
                  className="rounded-full"
                  size="icon-sm"
                >
                  <ArrowUpIcon className="w-4 h-4" />
                  <span className="sr-only">Send</span>
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* Suggested Topics */}
          <div className="w-full space-y-3">
            {SUGGESTED_TOPICS.map((topic, index) => (
              <Item
                key={index}
                variant="outline"
                className="cursor-pointer transition-colors hover:bg-accent"
                onClick={() => handleTopicClick(topic)}
              >
                <ItemContent>
                  <p className="text-sm">{topic}</p>
                </ItemContent>
              </Item>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
