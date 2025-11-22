import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(30_25%_10%)] text-foreground py-4 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Today Events. All rights reserved.</p>
          
          <div className="flex gap-2">
            <a href="https://www.facebook.com/todayevent.lk" className="h-7 w-7 rounded-full bg-foreground/10 hover:bg-primary transition-colors flex items-center justify-center">
              <Facebook className="h-3 w-3" />
            </a>
            <a href="https://www.instagram.com/todayevent.lk" className="h-7 w-7 rounded-full bg-foreground/10 hover:bg-primary transition-colors flex items-center justify-center">
              <Instagram className="h-3 w-3" />
            </a>
            <a href="https://twitter.com/todayevent.lk" className="h-7 w-7 rounded-full bg-foreground/10 hover:bg-primary transition-colors flex items-center justify-center">
              <Twitter className="h-3 w-3" />
            </a>
            <a href="https://www.linkedin.com/company/todayevent.lk" className="h-7 w-7 rounded-full bg-foreground/10 hover:bg-primary transition-colors flex items-center justify-center">
              <Linkedin className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
