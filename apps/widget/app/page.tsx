"use client";
import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  } = useVapi();
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-2xl font-bold">app/widget</h1>
      <Button onClick={() => startCall()}>Start Call</Button>
      <Button onClick={() => endCall()}>End Call</Button>
      <p>isConnected: {`${isConnected}`}</p>
      <p>isSpeaking: {`${isSpeaking}`}</p>
      <p>isConnecting: {`${isConnecting}`}</p>
      <p>{JSON.stringify(transcript)}</p>
    </div>
  );
}
