"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  if (!projectId || projectId === "your_project_id_here") {
    return (
      <main style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#f4f1ea",
        padding: "48px",
        fontFamily: "Arial, 'Noto Sans TC', sans-serif"
      }}>
        <div style={{
          maxWidth: "760px",
          margin: "0 auto",
          border: "1px solid rgba(244,241,234,0.14)",
          borderRadius: "28px",
          padding: "32px",
          background: "rgba(255,255,255,0.04)"
        }}>
          <p style={{
            letterSpacing: "0.18em",
            fontSize: "12px",
            opacity: 0.62,
            marginTop: 0
          }}>
            SANITY CMS SETUP REQUIRED
          </p>

          <h1 style={{
            fontSize: "42px",
            lineHeight: 1.1,
            margin: "0 0 18px"
          }}>
            後台還需要連接 Sanity Project
          </h1>

          <p style={{ lineHeight: 1.8, opacity: 0.72 }}>
            前台網站可以先正常顯示 Demo 內容。要使用後台，請先到 Sanity 建立 Project，
            再到 Vercel 的 Environment Variables 加入以下兩個變數：
          </p>

          <pre style={{
            whiteSpace: "pre-wrap",
            lineHeight: 1.7,
            background: "rgba(0,0,0,0.32)",
            border: "1px solid rgba(244,241,234,0.12)",
            padding: "18px",
            borderRadius: "18px",
            overflow: "auto"
          }}>{`NEXT_PUBLIC_SANITY_PROJECT_ID=你的ProjectID
NEXT_PUBLIC_SANITY_DATASET=production`}</pre>

          <p style={{ lineHeight: 1.8, opacity: 0.72 }}>
            設定完成後重新部署 Vercel，再回到 /studio 就可以登入後台。
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
