import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Header() {
  return <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-foreground mx-[10px] text-xl font-semibold">OpenRouter</div>
            
            {/* Search - Desktop */}
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search" className="pl-10 w-64 bg-muted/50" />
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm text-foreground hover:text-primary">Models</a>
            <a href="#" className="text-sm text-foreground hover:text-primary">Chat</a>
            <a href="#" className="text-sm text-foreground hover:text-primary">Rankings</a>
            <a href="#" className="text-sm text-foreground hover:text-primary">Enterprise</a>
            <a href="#" className="text-sm text-foreground hover:text-primary">Docs</a>
            <Button variant="ghost" size="sm">Sign in</Button>
          </div>

          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>;
}