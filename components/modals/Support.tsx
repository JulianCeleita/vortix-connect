import { XIcon } from "lucide-react";

export default function Support({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-2xl text-left shadow-xl flex flex-col">
                <div className="flex items-center justify-between p-6 pb-4 border-b shrink-0">
                    <h3 className="text-xl font-semibold">Help & Support</h3>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>

                <div className="overflow-y-auto max-h-[70vh] p-6 space-y-6">
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Frequently Asked Questions</h4>

                        <div className="space-y-1">
                            <p className="text-sm font-medium text-foreground">How do I start a video call?</p>
                            <p className="text-sm text-muted-foreground">Open any chat conversation and click the video camera icon in the top bar. Make sure your browser has camera and microphone permissions granted for the site.</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-medium text-foreground">Can I use Vortix on mobile?</p>
                            <p className="text-sm text-muted-foreground">Yes — Vortix is fully responsive and works in any modern mobile browser. A dedicated mobile app is coming soon.</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-medium text-foreground">How many people can join a group call?</p>
                            <p className="text-sm text-muted-foreground">Video calls support up to 12 participants simultaneously. Group text chats have no participant limit.</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-medium text-foreground">Is my data private?</p>
                            <p className="text-sm text-muted-foreground">All messages are end-to-end encrypted and your data is never sold to third parties. See our Privacy Policy for full details.</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-medium text-foreground">How do I delete my account?</p>
                            <p className="text-sm text-muted-foreground">Go to Settings &gt; Account &gt; Delete Account. This action is permanent and all your data will be removed within 30 days.</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-medium text-foreground">Why is my video call dropping?</p>
                            <p className="text-sm text-muted-foreground">Check your internet connection — Vortix requires at least 1 Mbps for stable video. Try closing other bandwidth-heavy applications or switching to a wired connection.</p>
                        </div>
                    </div>

                    <div className="border-t pt-6 space-y-3">
                        <h4 className="font-semibold text-foreground">Contact Support</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>
                                Email:{" "}
                                <a href="mailto:support@vortix.app" className="text-primary hover:underline">
                                    support@vortix.app
                                </a>
                            </p>
                            <p>Live Chat: available in the dashboard sidebar when signed in.</p>
                            <p>Response time: typically within 24 hours on business days.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
