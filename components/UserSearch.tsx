'use client';

import { Doc } from "@/convex/_generated/dataModel";
import { useUserSearch } from "@/hooks/useUserSearch";
import { useUser } from "@clerk/clerk-react";
import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

function UserSearch({ 
    onSelectUser,
    placeholder,
    className,
} : {
    onSelectUser: (user: Doc<"users">) => void;
    placeholder?: string;
    className?: string;
}) {
    const { searchTerm, setSearchTerm, searchResults, isLoading } = useUserSearch();

    const { user } = useUser();

    // Filter out the current user from search results
    const filteredResults = searchResults.filter((searchUser) => searchUser.userId !== user?.id);

    const handleSelectUser = (user: (typeof searchResults)[0]) => {
        onSelectUser?.(user);
        setSearchTerm(""); // Clear search term after selection
    };

    const clearSearch = () => {
        setSearchTerm("");
    };

    return (
        <div className={cn("w-full max-w-2xl mx-auto", className)}>
            {/* Search Input */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
                <Input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-10 h-12 text-base"
                />
                {searchTerm && (
                    <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <X className="w-4 h-4"/>
                    </button>
                )}
            </div>
        </div>
    );
}

export default UserSearch;
