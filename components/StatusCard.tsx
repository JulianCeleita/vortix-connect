import React from "react";

interface StatusCardProps {
    title: string;
    description?: string;
    action?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
}

export const StatusCard = ({
    title,
    description,
    action,
    className = "",
    children,
}: StatusCardProps) => {
    return (
        <div
            className={`flex items-center justify-center min-h-[400px] ${className}`}
        >
            <div className="text-center space-y-4 max-w-md w-full mx-4">
                {children}
                <div className="text-xl font-semibold">{title}</div>
                {description && <div className="text-sm">{description}</div>}
                {action && <div className="mt-4">{action}</div>}
            </div>
        </div>
    );
};
