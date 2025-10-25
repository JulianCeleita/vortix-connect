import { StreamChat } from "stream-chat";

if (!process.env.NEXT_PUBLIC_STREAM_API_KEY) {
    throw new Error("NEXT_PUBLIC_STREAM_API_KEY is not set");
}

// Initialize StreamChat Client
const streamClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY);

export default streamClient;
