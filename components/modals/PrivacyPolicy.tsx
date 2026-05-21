import { XIcon } from "lucide-react";

export default function PrivacyPolicy({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-2xl text-left shadow-xl flex flex-col">
                <div className="flex items-center justify-between p-6 pb-4 border-b shrink-0">
                    <h3 className="text-xl font-semibold">Privacy Policy</h3>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>

                <div className="overflow-y-auto max-h-[70vh] p-6 space-y-6">
                    <p className="text-xs text-muted-foreground">Last updated: May 2025</p>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">1. Information We Collect</h4>
                        <p className="text-sm text-muted-foreground">
                            When you create a Vortix account we collect your name, email address, and profile information you choose to provide. During normal use we collect usage data such as features accessed and session duration, as well as device and browser information used for diagnostics and service improvements.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">2. How We Use Your Information</h4>
                        <p className="text-sm text-muted-foreground">
                            We use your information to provide and improve the Vortix service, send transactional emails (account confirmations, security alerts), and respond to support requests. We do not sell, rent, or share your personal data with third parties for marketing purposes.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">3. Data Security</h4>
                        <p className="text-sm text-muted-foreground">
                            All messages sent through Vortix are end-to-end encrypted. Data stored on our servers is encrypted at rest using AES-256, and all data in transit is protected with TLS 1.3. Our infrastructure is hosted on SOC 2 Type II certified providers.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">4. Data Retention</h4>
                        <p className="text-sm text-muted-foreground">
                            Your account data is retained for as long as your account remains active. Upon account deletion, all personal data is permanently removed from our systems within 30 days. Message history retention settings can be configured in your account Settings.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">5. Your Rights</h4>
                        <p className="text-sm text-muted-foreground">
                            You have the right to access, correct, export, or delete your personal data at any time through your account settings. Vortix is compliant with GDPR and CCPA. To submit a formal data request, contact us at{" "}
                            <a href="mailto:privacy@vortix.app" className="text-primary hover:underline">
                                privacy@vortix.app
                            </a>.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">6. Cookies</h4>
                        <p className="text-sm text-muted-foreground">
                            Vortix uses session cookies strictly necessary for authentication and core functionality. We do not use third-party tracking cookies or advertising cookies. You can opt out of non-essential cookies via your browser settings without affecting core service functionality.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">7. Contact Us</h4>
                        <p className="text-sm text-muted-foreground">
                            For privacy-related questions or requests, please reach out to our privacy team at{" "}
                            <a href="mailto:privacy@vortix.app" className="text-primary hover:underline">
                                privacy@vortix.app
                            </a>. We aim to respond within 72 hours.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
