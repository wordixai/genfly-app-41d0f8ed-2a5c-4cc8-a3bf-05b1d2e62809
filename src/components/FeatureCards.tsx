import { ExternalLink, Layout, BarChart3, Lock, TrendingUp } from "lucide-react";

export default function FeatureCards() {
  const features = [
    {
      title: "One API for Any Model",
      description: "Access all major models through a single, unified interface. OpenAI SDK works out of the box.",
      link: "Browse all",
      href: "/models",
      visual: <FloatingProviders />
    },
    {
      title: "Higher Availability", 
      description: "Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.",
      link: "Learn more",
      href: "/docs/features/uptime-optimization",
      visual: <RoutingDiagram />
    },
    {
      title: "Price and Performance",
      description: "Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.",
      link: "Learn more", 
      href: "/docs/features/provider-routing#provider-sorting",
      visual: <PerformanceChart />
    },
    {
      title: "Custom Data Policies",
      description: "Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.",
      link: "View docs",
      href: "/docs/features/privacy-and-logging",
      visual: <DataPolicyIcon />
    }
  ];

  return (
    <div className="space-y-4 md:space-y-8">
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ 
  title, 
  description, 
  link, 
  href, 
  visual 
}: {
  title: string;
  description: string;
  link: string;
  href: string;
  visual: React.ReactNode;
}) {
  return (
    <a className="h-full" href={href}>
      <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
        <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
          <div className="absolute inset-0">
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30"></div>
            </div>
            {visual}
          </div>
        </div>
        
        <div className="flex flex-col gap-2 px-6 py-4 h-full">
          <div className="flex flex-col gap-2 h-full">
            <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <span className="text-primary group-hover/card:underline">
            {link}
            <ExternalLink className="ml-1 inline-block w-4" />
          </span>
        </div>
      </div>
    </a>
  );
}

function FloatingProviders() {
  const providers = [
    { name: "Microsoft", src: "https://openrouter.ai/images/icons/Microsoft.svg" },
    { name: "Perplexity", src: "https://openrouter.ai/images/icons/Perplexity.svg" },
    { name: "MiniMax", src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://minimaxi.com/&size=256" },
    { name: "Qwen", src: "https://openrouter.ai/images/icons/Qwen.png" },
    { name: "Allen AI", src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://allenai.org/&size=256" },
    { name: "OpenAI", src: "https://openrouter.ai/images/icons/OpenAI.svg", invert: true },
    { name: "Google", src: "https://openrouter.ai/images/icons/GoogleGemini.svg" },
    { name: "Anthropic", src: "https://openrouter.ai/images/icons/Anthropic.svg" },
  ];

  return (
    <div className="absolute inset-[1rem] grid grid-cols-5 gap-x-3 gap-y-1 scale-105 z-10">
      {providers.slice(0, 25).map((provider, index) => (
        <div 
          key={index}
          className="size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out"
          style={{
            animation: `4s ease-in-out ${index * 150}ms infinite normal none running float${index % 6}`,
            opacity: 0.85,
            transform: index % 5 >= 3 ? 'translateX(36px)' : ''
          }}
        >
          <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
            <div className={`overflow-hidden rounded-full ${provider.invert ? 'dark:invert' : ''}`}>
              <img 
                width="256" 
                height="256" 
                alt={`${provider.name} favicon`}
                className="h-full w-full object-cover" 
                src={provider.src}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RoutingDiagram() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
        <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">
          anthropic/claude-3.7-sonnet
        </div>
        
        <svg width="100%" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground/60">
          <title>Model routing visualization</title>
          <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75" />
          <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75" />
          <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75" />
        </svg>
        
        <div className="flex justify-between w-full">
          <ProviderIcon src="https://openrouter.ai/images/icons/GoogleGemini.svg" alt="Google" />
          <ProviderIcon src="https://openrouter.ai/images/icons/Anthropic.svg" alt="Anthropic" />
          <ProviderIcon src="https://openrouter.ai/images/icons/Bedrock.svg" alt="Amazon" />
        </div>
      </div>
    </div>
  );
}

function ProviderIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
      <div className="overflow-hidden rounded-full">
        <img width="256" height="256" alt={alt} className="h-full w-full object-cover" src={src} />
      </div>
    </div>
  );
}

function PerformanceChart() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute inset-0 z-10">
        <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-t via-transparent opacity-20"></div>
        <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-r via-transparent opacity-20"></div>
      </div>
      {/* Placeholder for performance chart */}
      <div className="w-full h-full bg-muted/20 rounded flex items-center justify-center">
        <TrendingUp className="w-16 h-16 text-muted-foreground/40" />
      </div>
    </div>
  );
}

function DataPolicyIcon() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-52">
        <div className="flex justify-between items-end w-full px-[45px] -mb-2">
          <Lock className="size-4 text-muted-foreground" />
          <div className="w-7 h-7 rounded-full bg-green-3 flex items-center justify-center">
            <div className="size-5 text-green-9 font-bold">✓</div>
          </div>
          <Lock className="size-4 text-muted-foreground" />
        </div>
        
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="0.3" 
          stroke="currentColor" 
          className="size-32 text-muted-foreground/60"
        >
          <title>Data policy visualization</title>
          <path d="M12 2.7A12 12 0 0 1 3.6 6 12 12 0 0 0 3 9.7a12 12 0 0 0 9 11.7A12 12 0 0 0 20.4 6h-.1A12 12 0 0 1 12 2.7Z" />
          <path strokeWidth=".4" d="M14.2 14.5a3.6 3.6 0 0 0 1.5-.2 1.2 1.2 0 0 0-1.9-1m.4 1.2v.3a4.8 4.8 0 0 1-2.4.6c-.9 0-1.7-.2-2.4-.6a2.4 2.4 0 0 1 0-.3m4.8 0a2.4 2.4 0 0 0-.4-1.3m0 0a2.4 2.4 0 0 0-2-1.1 2.4 2.4 0 0 0-2 1.1m0 0a1.2 1.2 0 0 0-1.9 1.1 3.6 3.6 0 0 0 1.5.2m.4-1.3a2.4 2.4 0 0 0-.4 1.3M13 9.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm2.4 1.2a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm-5.4 0a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z" />
        </svg>
      </div>
    </div>
  );
}