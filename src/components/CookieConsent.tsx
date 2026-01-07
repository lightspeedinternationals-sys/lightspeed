"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Show banner after 1 second delay
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setShowBanner(false);
        // Initialize analytics here
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("consent", "update", {
                analytics_storage: "granted",
            });
        }
    };

    const handleReject = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background/95 backdrop-blur-lg border-t border-border shadow-2xl animate-in slide-in-from-bottom duration-500">
            <div className="container-custom max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                            🍪 We Value Your Privacy
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                            By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                            <a href="#privacy" className="text-primary hover:underline">
                                Privacy Policy
                            </a>{" "}
                            to learn more.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 w-full md:w-auto">
                        <Button
                            onClick={handleReject}
                            variant="outline"
                            className="flex-1 md:flex-none min-w-[120px]"
                        >
                            Reject
                        </Button>
                        <Button
                            onClick={handleAccept}
                            className="flex-1 md:flex-none min-w-[120px] bg-primary hover:bg-primary/90"
                        >
                            Accept All
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
