import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function HeroSection() {
  return <div className="px-[6px] flex flex-col items-center gap-24 md:gap-28 md:px-8 md:pt-8">The Unified
Interface For LLMs

Better prices, better uptime, no subscription.

Featured Models
View Trending
Gemini 2.5 Pro
by google

114.5B

Tokens/wk

2.6s

Latency

+131.79%

Weekly growth

GPT-4.1
by openai

33.3B

Tokens/wk

385ms

Latency

-11.39%

Weekly growth

Claude Sonnet 4
by anthropic

291.0B

Tokens/wk

2.2s

Latency

-13.99%

Weekly growth

Featured Models
View Trending<div className="flex w-full max-w-4xl flex-col justify-center py-8 md:py-0">
        <div className="mb-3 flex flex-col gap-2 md:-mb-48 md:gap-1">
          <h1 className="my-0 w-full py-0 text-5xl font-semibold">
            <span className="mb-1 hidden md:block">The Unified</span>
            <span className="hidden md:block">Interface For LLMs</span>
            <span className="flex flex-col gap-0.5 text-3xl md:hidden">
              <div>The Unified</div>
              <div>Interface For LLMs</div>
            </span>
          </h1>
          <p className="text-slate-11 text-md mb-4 md:mb-8 md:pt-2 md:text-xl">
            Better <a href="#" className="text-primary hover:underline">prices</a>, better{" "}
            <a href="#" className="text-primary hover:underline">uptime</a>, no subscription.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
          {/* Chat Input */}
          <div className="group/card text-card-foreground rounded-xl transition-all duration-200 hover:border-slate-7 hover:text-slate-12 border hover:shadow-lg bg-background relative w-full p-2 shadow-md md:translate-y-5">
            {/* Routing Curves - Desktop */}
            <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex">
              <svg className="h-80 w-12" viewBox="-5 0 50 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <title>Routing Curves</title>
                <g stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 150C12 150 15 75 25 65" className="origin-center transition-all duration-300 text-slate-6" />
                  <path d="M2 160C12 160 22 160 25 160" className="origin-center transition-all duration-300 text-primary" />
                  <path d="M2 170C12 170 15 255 25 255" className="origin-center transition-all duration-300 text-slate-6" />
                </g>
                <g className="text-slate-7">
                  <circle cx="35" cy="60" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
                  <circle cx="35" cy="160" r="6" fill="currentColor" className="origin-center transition-all duration-300 text-primary" />
                  <circle cx="35" cy="260" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
                </g>
              </svg>
            </div>
            
            <div className="flex w-full items-center justify-between gap-3 flex-row">
              <Input className="w-full appearance-none py-2 transition duration-150 ease-in-out placeholder:text-foreground/30 shadow-border focus:shadow-inner focus:outline-none text-muted-foreground bg-background focus:bg-background/80 h-10 flex-1 rounded-lg border-0 px-4" placeholder="Start a message..." type="text" />
              <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 bg-primary text-primary-foreground shadow hover:bg-primary/90 py-4 group aspect-square h-10 px-3 transition-colors md:aspect-auto md:flex-shrink-0">
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          {/* Featured Models Section */}
          <FeaturedModels />
        </div>
      </div>
    </div>;
}
function FeaturedModels() {
  return <div className="w-full min-w-80 space-y-3 md:w-auto">
      {/* Mobile routing curves */}
      <div className="block md:hidden">
        <svg width="100%" className="h-10" viewBox="0 0 320 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <title>Routing Curves</title>
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M155 2C160 15 60 5 60 18" className="origin-center transition-all duration-300 text-slate-6" />
            <path d="M160 2C160 12 160 15 160 18" className="origin-center transition-all duration-300 text-primary" />
            <path d="M165 2C160 15 260 5 260 18" className="origin-center transition-all duration-300 text-slate-6" />
          </g>
          <g className="text-slate-7">
            <circle cy="24" cx="60" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
            <circle cy="24" cx="160" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-primary" />
            <circle cy="24" cx="260" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
          </g>
        </svg>

        {/* Mobile provider icons */}
        <div className="grid grid-cols-3 gap-4 pb-3">
          <ProviderButton imageSrc="https://openrouter.ai/images/icons/GoogleGemini.svg" alt="Google" />
          <ProviderButton imageSrc="https://openrouter.ai/images/icons/OpenAI.svg" alt="OpenAI" invert />
          <ProviderButton imageSrc="https://openrouter.ai/images/icons/Anthropic.svg" alt="Anthropic" />
        </div>

        <ModelCard name="GPT-4.1" provider="openai" imageSrc="https://openrouter.ai/images/icons/OpenAI.svg" tokens="33.3B" latency="385ms" growth="-11.39%" growthType="negative" featured />
      </div>

      {/* Desktop models */}
      <div className="hidden space-y-3 md:block">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <Button variant="link" size="sm" className="text-primary gap-0 text-xs hover:underline">
            View Trending
            <ArrowRight className="inline-block ml-px size-3" />
          </Button>
        </div>

        <ModelCard name="Gemini 2.5 Pro" provider="google" imageSrc="https://openrouter.ai/images/icons/GoogleGemini.svg" tokens="114.5B" latency="2.6s" growth="+131.79%" growthType="positive" />

        <ModelCard name="GPT-4.1" provider="openai" imageSrc="https://openrouter.ai/images/icons/OpenAI.svg" tokens="33.3B" latency="385ms" growth="-11.39%" growthType="negative" featured />

        <ModelCard name="Claude Sonnet 4" provider="anthropic" imageSrc="https://openrouter.ai/images/icons/Anthropic.svg" tokens="291.0B" latency="2.2s" growth="-13.99%" growthType="negative" />
      </div>

      <div className="flex items-center justify-between px-2 pt-4">
        <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
        <a className="text-primary text-xs hover:underline" href="#">
          View Trending
          <ArrowRight className="inline-block ml-px size-3" />
        </a>
      </div>
    </div>;
}
function ProviderButton({
  imageSrc,
  alt,
  invert
}: {
  imageSrc: string;
  alt: string;
  invert?: boolean;
}) {
  return <button className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-11 flex items-center justify-center rounded-lg p-4">
      <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
        <div className={`overflow-hidden rounded-full ${invert ? 'dark:invert' : ''}`}>
          <img width="256" height="256" alt={alt} className="h-full w-full object-cover" src={imageSrc} />
        </div>
      </div>
    </button>;
}
function ModelCard({
  name,
  provider,
  imageSrc,
  tokens,
  latency,
  growth,
  growthType,
  featured
}: {
  name: string;
  provider: string;
  imageSrc: string;
  tokens: string;
  latency: string;
  growth: string;
  growthType: 'positive' | 'negative';
  featured?: boolean;
}) {
  return <div className={`group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${featured ? 'md:border-primary' : 'border-slate-6'}`}>
      <div className="space-y-2">
        <div>
          <a className="hover:underline" href="#">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-foreground font-medium">{name}</h3>
              </div>
              <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className="overflow-hidden rounded-full dark:invert">
                  <img width="256" height="256" alt={`${provider} icon`} className="h-full w-full object-cover" src={imageSrc} />
                </div>
              </div>
            </div>
          </a>
          <div className="flex items-center">
            <span className="text-muted-foreground text-xs">
              by <a className="text-primary hover:underline" href="#">{provider}</a>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
          <div>
            <p className="text-green-10 text-sm font-medium">{tokens}</p>
            <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
          </div>
          <div>
            <p className="text-sm font-medium">{latency}</p>
            <p className="text-muted-foreground text-[10px]">Latency</p>
          </div>
          <div>
            <p className={`text-sm font-medium ${growthType === 'positive' ? 'text-green-10' : 'text-red-10'}`}>
              {growth}
            </p>
            <p className="text-muted-foreground text-[10px]">Weekly growth</p>
          </div>
        </div>
      </div>
    </div>;
}