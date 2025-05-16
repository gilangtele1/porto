"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { TonConnectUI } from "@tonconnect/ui";
import { beginCell } from "@ton/ton";

interface TonConnectContextType {
  sendTransaction: (message: string) => Promise<void>;
  connected: boolean;
}

const TonConnectContext = createContext<TonConnectContextType | null>(null);

export const useTonConnect = () => {
  const context = useContext(TonConnectContext);
  if (!context)
    throw new Error("useTonConnect must be used within TonConnectProvider");
  return context;
};

export const TonConnectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tonConnectUIRef = useRef<TonConnectUI | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!tonConnectUIRef.current) {
      tonConnectUIRef.current = new TonConnectUI({
        manifestUrl:
          "https://4314-125-164-19-115.ngrok-free.app/tonconnect-manifest.json",
        buttonRootId: "ton-connect",
      });
    }

    const checkConnection = () => {
      setConnected(!!tonConnectUIRef.current?.wallet);
    };

    checkConnection();

    const interval = setInterval(checkConnection, 1000);

    return () => clearInterval(interval);
  }, []);

  const sendTransaction = async (message: string) => {
    if (!tonConnectUIRef.current || !connected) {
      alert("Wallet belum terhubung!");
      return;
    }

    const body = beginCell()
      .storeUint(0, 32)
      .storeStringTail(message)
      .endCell();

    const transaction = {
      validUntil: Math.floor(Date.now() / 1000) + 360,
      messages: [
        {
          address: "UQDYwb2h6aeCti27KZyLbS5cccpH5RM1pBB3omRkPUJRqFBy",
          amount: "20000000",
          payload: body.toBoc().toString("base64"),
        },
      ],
    };

    try {
      await tonConnectUIRef.current.sendTransaction(transaction);
      alert("Transaksi berhasil dikirim!");
    } catch (error) {
      console.error("Gagal kirim transaksi:", error);
    }
  };

  return (
    <TonConnectContext.Provider value={{ sendTransaction, connected }}>
      {children}
    </TonConnectContext.Provider>
  );
};
