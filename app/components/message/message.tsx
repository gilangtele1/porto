"use client";

import { useState } from "react";
import { ThreeDCardDemo } from "../Card3d/card3dWrapper";
import { useTonConnect } from "../../context/TonConnectContext";

export default function TwoColumnLayout() {
  const [message, setMessage] = useState("");
  const { sendTransaction, connected } = useTonConnect();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) {
      alert("Pesan tidak boleh kosong.");
      return;
    }
    sendTransaction(message);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-8">
      {/* Left: 3D Card */}
      <div className="w-full md:w-1/2 bg-white p-6">
        <ThreeDCardDemo />
      </div>

      {/* Right: Message Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="message" className="text-m text-gray-700">
              Your Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleChange}
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
              placeholder="Type your message here"
              disabled={!connected}
            />
          </div>

          <button
            type="submit"
            disabled={!connected || message.trim() === ""}
            className={`w-full py-2 px-6 rounded-lg transition 
              ${
                connected
                  ? "bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
                  : "bg-orange-600 text-white cursor-not-allowed"
              }`}
          >
            {connected ? "Send 0.02 TON" : "Connect your wallet to get started"}
          </button>
        </form>
      </div>
    </div>
  );
}
