import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "프론트엔드 개발자 장권영 | 포트폴리오 & 이력서",
  description: "React, TypeScript 기반의 사용자 경험 중심 웹 개발을 지향하는 프론트엔드 개발자 장권영의 포트폴리오 및 이력서입니다.",
  keywords: ["장권영", "프론트엔드", "웹 개발자", "프론트엔드 개발자",
    "포트폴리오", "이력서", "Frontend", "React", "TypeScript",
    "Next.js", "Tailwind", "웹 이력서", "프로그래머 포트폴리오"],
  authors: [{name: "장권영"}],
  verification: {
    google: "49cb83d95f56e4b8",
  },
};

export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="ko">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    {children}
    </body>
    </html>
  );
}
