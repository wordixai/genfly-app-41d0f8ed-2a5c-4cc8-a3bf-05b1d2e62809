import { ArrowRight, Layout, BarChart3 } from "lucide-react";

export default function BottomSection() {
  return (
    <div className="w-full max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-8">
        
        {/* Left Side - Quick Links */}
        <div className="flex flex-col gap-4 h-full md:col-span-2 md:justify-between">
          <QuickLinkCard
            icon={<Layout className="size-5" />}
            title="Browse All Models"
            description="Discover AI models across our collection, from all major labs and providers."
            linkText="View models"
            href="/models"
          />
          
          <QuickLinkCard
            icon={<BarChart3 className="size-5" />}
            title="Model & App Rankings"
            description="Explore token usage across models, labs, and public applications."
            linkText="View rankings"
            href="/rankings"
          />
        </div>

        {/* Right Side - Announcements */}
        <div className="md:col-span-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Recent Announcements</h3>
              <a className="text-slate-10 group inline-flex text-sm" href="/announcements">
                <span className="inline-flex items-center gap-1">
                  <span>View all</span>
                  <ArrowRight className="inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>
            
            <div className="flex flex-col gap-6">
              <AnnouncementCard
                title="Introducing Presets: Manage LLM Configs from Your Dashboard!"
                description="Centralize your LLM logic, iterate faster, and clean up your code—Presets are now live on OpenRouter."
                date="6/25/2025"
                isNew
                href="/announcements/introducing-presets-manage-llm-configs-from-your-dashboard"
              />
              
              <AnnouncementCard
                title="Dev & BYOK Updates: Uptime API + Smarter Key Management"
                description="Track model uptime via API and get more control over your BYOK setup—including usage limits and testable keys."
                date="6/24/2025"
                isNew
                href="/announcements/dev-and-byok-updates-uptime-api-smarter-key-management"
              />
              
              <AnnouncementCard
                title="Simplifying Our Platform Fee"
                description="We're rolling out a simpler and more transparent platform fee structure:"
                date="6/8/2025"
                href="/announcements/simplifying-our-platform-fee"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

function QuickLinkCard({
  icon,
  title,
  description,
  linkText,
  href
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  href: string;
}) {
  return (
    <a className="flex-1" href={href}>
      <div className="group/card text-card-foreground rounded-xl duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm flex flex-col h-full justify-between overflow-hidden hover:shadow-md transition-shadow group mb-4">
        <div className="flex flex-col gap-2 px-6 py-4 h-full">
          <div className="flex flex-col gap-2 h-full">
            <h3 className="group-hover/card:text-slate-12 duration-200 text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
              {icon}
              <span>{title}</span>
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <span className="text-primary inline-flex items-center">
            {linkText}
            <ArrowRight className="ml-1 inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </a>
  );
}

function AnnouncementCard({
  title,
  description,
  date,
  isNew,
  href
}: {
  title: string;
  description: string;
  date: string;
  isNew?: boolean;
  href: string;
}) {
  return (
    <a className="group" href={href}>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-slate-10 text-sm line-clamp-2">{description}</p>
        <div className="flex items-center text-slate-8 text-xs">
          <time>{date}</time>
          {isNew && (
            <span className="bg-muted text-muted-foreground ml-2 rounded-sm px-1.5 py-0.5 text-[10px]">
              New
            </span>
          )}
        </div>
      </div>
    </a>
  );
}