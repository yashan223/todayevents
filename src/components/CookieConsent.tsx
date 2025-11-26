import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after 1 second delay
      setTimeout(() => setIsVisible(true), 1000);
    } else if (consent === "accepted") {
      // Load GA if previously accepted
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Add Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-03XW3FWG7L";
    document.head.appendChild(script1);

    // Initialize gtag
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-03XW3FWG7L');
    `;
    document.head.appendChild(script2);
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    loadGoogleAnalytics();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border p-4 md:p-6 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
              Cookie Consent
            </h3>
            <p className="text-sm text-muted-foreground">
              We use cookies and analytics to improve your experience on our website. 
              By clicking "Accept", you consent to our use of cookies and Google Analytics.
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 md:flex-none text-sm h-10"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              className="flex-1 md:flex-none text-sm h-10 bg-primary hover:bg-primary/90"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
