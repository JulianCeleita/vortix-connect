'use client';

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { useUser } from "@clerk/clerk-react";
import { LogOutIcon, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Channel, ChannelHeader, MessageInput, MessageList, useChatContext, Window } from "stream-chat-react";

function Dashboard() {
  const { user } = useUser();
  const router = useRouter();
  const { channel, setActiveChannel } = useChatContext();
  const { setOpen } = useSidebar();

  const handleCall = () => {
    console.log("Calling now !...");
  }

  const handleLeaveChat = () => {
    console.log("Leaving chat !...");
  }

  return (
    <div className="flex flex-col w-full flex-1">
      {
        channel ? (
          <Channel channel={channel}>
            <Window>
              <div className="flex items-center justify-between">
                {channel.data?.member_count === 1 ? (
                  <ChannelHeader title="Everyone else has left this chat!" />
                ) : (
                  <ChannelHeader />
                )}
                <div className="flex items-center gap-2">
                  <Button variant="outline" onClick={handleCall}>
                    <VideoIcon className="w-4 h-4" />
                    Video Call
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleLeaveChat}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900"
                  >
                    <LogOutIcon className="w-4 h-4" />
                    Leave Chat
                  </Button>
                </div>
              </div>
              <MessageList />
              <div className="sticky bottom-0 w-full">
                <MessageInput />
              </div>
            </Window>
          </Channel>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-semibold text-muted-foreground mb-4">No chat selected</h2>
            <p className="text-muted-foreground">
              Select a chat from the sidebar to start a new conversation.
            </p>
          </div>
        )
      }
    </div>
  );
}

export default Dashboard;