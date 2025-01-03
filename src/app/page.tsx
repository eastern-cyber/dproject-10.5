"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { chain } from "./chain";
import { inAppWallet } from "thirdweb/wallets";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Resources } from "@/components/resources/Resources";
import { useActiveAccount } from "thirdweb/react";

export default function Home() {
  
  const account = useActiveAccount();

  if (!account) {

    return (
      <main className="p-4 pb-10 min-h-[100vh] flex flex-col items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-5">
        <Header />
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
      }}>
        <h1 style={{ marginBottom: "20px"}}> Connect Web3 with E-Mail </h1>
          <ConnectButton
            client={client}
            chain={chain}
            wallets={[ 
              inAppWallet({
                  auth: {
                      options: [
                          "email",
                          // "passkey",
                      ]
                  }
              }) 
            ]}
          />
        <div className="flex justify-center mb-20">
          <h1 style={{ 
            marginBottom: "20px",
            marginTop: "20px",
            }}>
            ล็อกอินด้วยอีเมลล์
          </h1>
        </div>
      </div>
      </main>
    );
  }

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex flex-col items-center justify-center container max-w-screen-lg mx-auto">

      <div className="py-20">
        <Header />
      </div>
      <div className="py-25">
        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            chain={chain}
            wallets={[ 
              inAppWallet({
                  auth: {
                      options: [
                          "email",
                          // "passkey",
                      ]
                  }
              }) 
          ]}
          />
        </div>

        <div className="py-5">
        <Resources />
        </div>

        <div className="py-5">
        <Footer />
        </div>
        
      </div>
    </main>
  );
}