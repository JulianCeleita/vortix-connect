import { Button } from "@/components/ui/button";

export default function Support({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 max-w-lg w-[90%] text-left shadow-xl relative">
                <h3 className="text-xl font-semibold mb-4">Support</h3>
                <div className="text-sm text-muted-foreground space-y-3">
                    <p>
                        Need help? Our support team is available 24/7 to assist you. You can
                        reach us via:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Email: support@vortix.app</li>
                        <li>Live chat: available in your dashboard.</li>
                    </ul>
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
