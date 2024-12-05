"use client";

import Image from "next/image";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import dProjectIcon from "@public/Logo_DProject.svg";
import { client } from "./client";
import { chain } from "./chain";
import { inAppWallet } from "thirdweb/wallets";

export default function Home() {

  const account = useActiveAccount();

  if (!account) {

    return (
      
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
        <h1 style={{ marginBottom: "20px"}}> Web3 Blockchain Credential Login </h1>
          <ConnectButton
            client={client}
            chain={chain}
            wallets={[ 
              inAppWallet({
                  auth: {
                      options: [
                          "phone",
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
            ล็อกอินด้วยเบอร์โทรศัพท์มือถือ
          </h1>
        </div>
      </div>
    )

  }

  return (
    <div 
      style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      }}
    >
      <ConnectButton
        client={client}
        chain={chain}
        wallets={[ 
          inAppWallet({
              auth: {
                  options: [
                      "phone",
                      // "passkey",
                  ]
              }
          }) 
      ]}
      />
    </div>
  )

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Header />

        <div 
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <ConnectButton
            client={client}
            chain={chain}
            wallets={[ 
              inAppWallet({
                  auth: {
                      options: [
                          "phone",
                          // "passkey",
                      ]
                  }
              }) 
          ]}
          />
        </div>

        <ThirdwebResources />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={dProjectIcon}
        alt=""
        className="size-[150px] md:size-[150px] mb-[35px] md:mb-[20px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        <span className="inline-block text-blue-500"> dProject </span>
        &nbsp;&nbsp;
        <span className="inline-block -skew-x-6"> Login </span>
        &nbsp;&nbsp;
        <span className="text-zinc-300 inline-block mx-1"> + </span>
        &nbsp;&nbsp;
        <span className="inline-block -skew-x-6"> Register </span>
      </h1>

      <p className="text-zinc-300 text-base">
        ใช้เบอร์โทรศัทพ์มือถือรับ{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          OTP
        </code>เพื่อเข้าใช้งาน{" "}
        
      </p>
    </header>
  );
}

function ThirdwebResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="Documents"
        href="https://portal.thirdweb.com/typescript/v5"
        description="SDK documentation"
      />

      <ArticleCard
        title="Components"
        href="https://portal.thirdweb.com/typescript/v5/react"
        description="React components and hooks in SDK"
      />

      <ArticleCard
        title="Dashboard"
        href="https://thirdweb.com/dashboard"
        description="Deploy, configure, and manage."
      />
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href + "?utm_source=next-template"}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
