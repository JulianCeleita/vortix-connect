import { LucideIcon } from "lucide-react";

function FeatureCard({
    icon: Icon,
    title,
    description,
}: {
    icon: LucideIcon,
    title: string,
    description: string
}) {
    return (
        <div className="group p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/20 w-full max-w-sm text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors mx-auto">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
}

export default FeatureCard;