"use client";

import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

function Header() {

    const pathname = usePathname();
    const isDashboard = pathname.startsWith("/dashboard");

    return (
        <header className="flex items-center justify-between px-4 h-15 sm:px-6">
            <Link
                href="/dashboard"
                className="font-medium cursor-pointer hover:scale-110 transition-all flex items-center gap-2 uppercase tracking-widest"
            >
                <Image
                    src={"/logo.png"}
                    alt="vortix logo"
                    width={40}
                    height={40}
                />
                <span>Vortix</span>
            </Link>
            <div className="flex items-center gap-2">
                <Authenticated>
                    {!isDashboard && (
                        <Link href="/dashboard">
                            <Button variant="outline">Dashboard</Button>
                        </Link>
                    )}
                    <UserButton />
                </Authenticated>

                <Unauthenticated>
                    <SignInButton
                        mode="modal"
                        forceRedirectUrl="/dashboard"
                        signUpForceRedirectUrl="/dashboard"
                    >
                        <Button variant="outline">Sign In</Button>
                    </SignInButton>
                </Unauthenticated>
            </div>
        </header>
    );
}

export default Header;
