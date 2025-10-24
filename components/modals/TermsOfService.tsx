import { Button } from "@/components/ui/button";

export default function TermsOfService({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 max-w-lg w-[90%] text-left shadow-xl relative">
                <h3 className="text-xl font-semibold mb-4">Terms of Service</h3>
                <div className="text-sm text-muted-foreground space-y-3">
                    <p>
                        By using Vortix, you agree to use our platform responsibly and not
                        for any illegal or abusive activity.
                    </p>
                    <p>
                        We may update these terms periodically to improve service and ensure
                        compliance with new regulations.
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
