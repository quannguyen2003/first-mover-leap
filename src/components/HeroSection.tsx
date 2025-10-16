import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          filter: 'blur(2px) brightness(0.4)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-lg px-6 mx-auto">
        <div className="backdrop-blur-sm bg-black/40 p-12 rounded-2xl border border-white/10">
          {/* Logo/Title */}
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground text-center mb-16 tracking-tight">
            FIRST MOVER<br />VIETNAM
          </h1>
          
          {/* Email Form */}
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="me@email.com"
                className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground h-12 focus:ring-primary"
              />
            </div>
            
            <Button 
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base transition-smooth"
            >
              Get Started
            </Button>
          </div>
          
          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-muted-foreground text-sm">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          
          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="h-12 bg-secondary/50 border-border hover:bg-secondary text-foreground transition-smooth"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-12 bg-secondary/50 border-border hover:bg-secondary text-foreground transition-smooth"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Button>
          </div>
          
          {/* Terms */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            By clicking continue, you agree to our{' '}
            <a href="/terms" className="underline hover:text-foreground transition-smooth">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="underline hover:text-foreground transition-smooth">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
