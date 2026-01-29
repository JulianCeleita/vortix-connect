"use client"

import { InlineSpinner } from "@/components/LoadingSpinner";
import { StatusCard } from "@/components/StatusCard";
import { useSidebar } from "@/components/ui/sidebar";
import {
    CallControls,
    CallingState,
    SpeakerLayout,
    useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Check, Copy } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function VideoCall() {

    const { useCallCallingState, useParticipants } = useCallStateHooks();
    const callingState = useCallCallingState();
    const participants = useParticipants();
    const router = useRouter();
    const [copied, setCopied] = useState(false);
    const { setOpen } = useSidebar();

    const handleLeave = () => {
        router.push("/dashboard");
        setOpen(true);
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error("Failed to copy to clipboard:", error);
        }
    }

    if (callingState === CallingState.JOINING) {
        return (
            <StatusCard
                title="Joining call..."
                description="Please wait while we connect you to the call..."
                className="bg-gray-50 rounded-lg"
            >
                <InlineSpinner size="lg" />
            </StatusCard>
        )
    };

    if (callingState === CallingState.RECONNECTING) {
        return (
            <StatusCard
                title="Reconnecting..."
                description="Connection lost, attempting to reconnect..."
                className="bg-yellow-50 rounded-lg border border-yellow-200"
            >
                <div className="animate-pulse rounded-full h-12 w-12 bg-yellow-400 mx-auto"></div>
            </StatusCard>
        )
    }

    if (callingState === CallingState.JOINED) {
        return (
            <StatusCard
                title="Loading Call..."
                description={`Status: ${callingState}`}
                className="bg-gray-50 rounded-lg"
            >
                <div className="animate-pulse rounded-full h-12 w-12 bg-gray-400 mx-auto"></div>
            </StatusCard>
        )
    }

    return (
        <div className="flex flex-col">
            <div className="flex-1 relative">
                <SpeakerLayout />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <CallControls onLeave={handleLeave} />
            </div>

            {participants.length === 1 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl">
                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                <Copy className="w-8 h-8 text-blue-600" />
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Waiting for others to join
                                </h2>
                                <p className="text-gray-600">
                                    Share this link with others to invite them to the call
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 text-sm text-gray-700 font-mono break-all">
                                        {window.location.href}
                                    </div>
                                    <button
                                        onClick={copyToClipboard}
                                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-4 h-4" />
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4" />
                                                Copy Link
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">
                                Others will be able to join using this link
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideoCall;
