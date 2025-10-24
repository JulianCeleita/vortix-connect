import { Button } from "@/components/ui/button";

export default function PrivacyPolicy({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 max-w-lg w-[90%] text-left shadow-xl relative">
                <h3 className="text-xl font-semibold mb-4">Privacy Policy</h3>
                <div className="text-sm text-muted-foreground space-y-3">
                    <p>
                        We respect your privacy. Vortix does not collect or share any
                        personal data beyond what’s essential to provide our service.
                    </p>
                    <p>
                        Your information is encrypted and never sold or used for marketing
                        purposes.
                    </p>
                </div>
                <div className="mt-6 flex justify-end">
                    <Button variant="outline" onClick={onClose}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
}
