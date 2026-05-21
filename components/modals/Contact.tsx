"use client";

import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

export default function Contact({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-2xl text-left shadow-xl flex flex-col">
                <div className="flex items-center justify-between p-6 pb-4 border-b shrink-0">
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>

                <div className="overflow-y-auto max-h-[70vh] p-6 space-y-6">
                    <p className="text-sm text-muted-foreground">
                        Have a question, feedback, or just want to say hi? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </p>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-foreground">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-foreground">Email</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-foreground">Subject</label>
                            <input
                                type="text"
                                placeholder="What is your message about?"
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-foreground">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Tell us how we can help..."
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                            />
                        </div>

                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                    </form>

                    <div className="border-t pt-4 space-y-2">
                        <p className="text-sm font-medium text-foreground">Or reach us directly:</p>
                        <p className="text-sm text-muted-foreground">
                            Email:{" "}
                            <a href="mailto:support@vortix.app" className="text-primary hover:underline">
                                support@vortix.app
                            </a>
                        </p>
                        <p className="text-sm text-muted-foreground">We typically respond within 24 hours on business days.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
