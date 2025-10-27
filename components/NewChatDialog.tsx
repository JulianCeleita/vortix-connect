'use client';

import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useChatContext } from "stream-chat-react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Doc } from "@/convex/_generated/dataModel";
import { useCreateNewChat } from "@/hooks/useCreateNewChat";
import UserSearch from "./UserSearch";

function NewChatDialog({ children }: { children: React.ReactNode }) {

    const [open, setOpen] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState<Doc<"users">[]>([]);
    const [groupName, setGroupName] = useState("");
    const createNewChat = useCreateNewChat();
    const { user } = useUser();
    const { setActiveChannel } = useChatContext();

    const handleSelectUser = (user: Doc<"users">) => {
        // Avoid adding the same user twice
        if (!selectedUsers.find((u) => u._id === user._id)) {
            setSelectedUsers((prev) => [...prev, user]);
        }
    };

    const removeUser = (userId: string) => {
        setSelectedUsers((prev) => prev.filter((user) => user._id !== userId));
    }

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
        if (!newOpen) {
            //Reset form when dialog closes
            setSelectedUsers([]);
            setGroupName("");
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
                <DialogHeader className="items-center">
                    <DialogTitle>Start a New Chat</DialogTitle>
                    <DialogDescription>
                        Search for users to start a conversation with
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Search component */}
                    <UserSearch onSelectUser={handleSelectUser}
                    placeholder="Search for users by name or email..."
                    className="w-full"/>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default NewChatDialog;
