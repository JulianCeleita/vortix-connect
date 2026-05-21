import { XIcon } from "lucide-react";

export default function TermsOfService({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-2xl text-left shadow-xl flex flex-col">
                <div className="flex items-center justify-between p-6 pb-4 border-b shrink-0">
                    <h3 className="text-xl font-semibold">Terms of Service</h3>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>

                <div className="overflow-y-auto max-h-[70vh] p-6 space-y-6">
                    <p className="text-xs text-muted-foreground">Last updated: May 2025</p>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">1. Acceptance of Terms</h4>
                        <p className="text-sm text-muted-foreground">
                            By accessing or using Vortix you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our service. These terms apply to all users, including visitors, registered users, and contributors.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">2. Use of Service</h4>
                        <p className="text-sm text-muted-foreground">
                            You must be at least 13 years old to use Vortix. You agree to provide accurate and complete registration information and to keep it up to date. Each person may maintain only one account. You are responsible for all activity that occurs under your account.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">3. User Accounts</h4>
                        <p className="text-sm text-muted-foreground">
                            You are responsible for maintaining the confidentiality of your login credentials. If you suspect unauthorized access to your account, notify us immediately at{" "}
                            <a href="mailto:support@vortix.app" className="text-primary hover:underline">
                                support@vortix.app
                            </a>. Vortix is not liable for losses resulting from unauthorized use of your credentials.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">4. Prohibited Activities</h4>
                        <p className="text-sm text-muted-foreground mb-2">You agree not to engage in any of the following:</p>
                        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                            <li>Harassment, abuse, or intimidation of other users</li>
                            <li>Sending unsolicited bulk messages (spam)</li>
                            <li>Distributing malware, viruses, or harmful code</li>
                            <li>Impersonating another person or entity</li>
                            <li>Scraping or automated data collection without permission</li>
                            <li>Sharing illegal, obscene, or harmful content</li>
                            <li>Circumventing any security or authentication measures</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">5. Intellectual Property</h4>
                        <p className="text-sm text-muted-foreground">
                            Vortix and its original content, features, and functionality are owned by Vortix Inc. and are protected by applicable intellectual property laws. Users retain ownership of content they create and share. By uploading content you grant Vortix a limited, non-exclusive license to display and transmit that content solely for the purpose of providing the service.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">6. Termination</h4>
                        <p className="text-sm text-muted-foreground">
                            Vortix reserves the right to suspend or terminate accounts that violate these Terms of Service, with or without notice. You may delete your account at any time via Settings &gt; Account &gt; Delete Account. Upon termination, your right to use the service ceases immediately.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">7. Limitation of Liability</h4>
                        <p className="text-sm text-muted-foreground">
                            The service is provided "as is" without warranties of any kind. Vortix does not guarantee uninterrupted uptime or error-free operation. To the fullest extent permitted by law, Vortix shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the fees you paid in the 12 months preceding the claim.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">8. Governing Law</h4>
                        <p className="text-sm text-muted-foreground">
                            These terms are governed by applicable law. Any disputes arising from these terms shall be resolved through binding arbitration, except where prohibited by law. You waive any right to participate in class action lawsuits against Vortix.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">9. Changes to Terms</h4>
                        <p className="text-sm text-muted-foreground">
                            Vortix may update these Terms of Service at any time. We will notify users of significant changes with at least 30 days notice via email or an in-app notice. Your continued use of the service after the notice period constitutes acceptance of the updated terms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
