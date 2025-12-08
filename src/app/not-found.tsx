import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background flex-col gap-4 text-center p-4">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-xl text-muted-foreground">Oops! Page not found.</p>
            <Link href="/">
                <Button>Return to Home</Button>
            </Link>
        </div>
    );
}
