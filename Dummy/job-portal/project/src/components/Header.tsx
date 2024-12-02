import { BriefcaseIcon, MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BriefcaseIcon className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold font-display">JobHub</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Post a Job</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}