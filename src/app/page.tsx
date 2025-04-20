"use client";


import SkillSection from "@/app/skill/SkillSection";
import AboutSection from "@/app/about/AboutSection";
import ProfileSection from "@/app/profile/ProfileSection";
import DevelopmentSection from "@/app/experience/DevelopmentSection";
import EducationSection from "@/app/Education/EducationSection";
import CertificateSection from "@/app/certificate/CertificateSection";
import ArrowTop from "@/components/ArrowTop";
import PortfolioSection from "@/app/portfolio/PortfolioSection";

export default function Home() {

  return (
    <div id="home" className="flex items-center justify-center min-h-screen relative bg-white text-gray-900">
      <div className="absolute top-20 w-full max-w-[80rem]">
        <div className="bg-teal-200 w-full h-80 rounded-xl max-w-[100rem]"/>
      </div>
      <div className="w-full max-w-4xl px-6 py-5">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-black">Resume</h1>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center text-center w-full">
          {/* 내 프사 */}
          <div className="mb-16 relative w-full h-[22rem]">
            <img
              src="/jangkwonyoung.jpg"
              alt="장권영 프로필"
              className="size-52 rounded-full object-cover shadow-md border-10 border-white
               absolute -bottom-14 z-[1] left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0"
            />
            <h2
              className="absolute bottom-40 sm:bottom-1 sm:right-7 right-1/2 translate-x-1/2 sm:translate-x-0 text-xl text-gray-800 flex flex-col sm:flex-row items-center sm:items-end gap-1">
              <strong className="sm:border-r sm:pr-3 sm:mr-3 border-none">장 권영</strong>
              <span className="border-l border-gray-300 pl-6">프론트엔드 개발자</span>
            </h2>
          </div>

          {/* 내 소개글 */}
          <p className="text-left my-5">
            끈질기게 문제를 해결하고, 코드의 본질을 고민하는 프론트엔드 개발자 장권영입니다.<br/>
            개발 과정에서 얻은 인사이트를 팀원과 공유하고 함께 성장하는 개발 문화를 지향합니다.<br/>
            말보다 행동으로 보여주는 끈기와 태도, 그리고 코드를 통해 문제를 풀어나가는 개발자다운 개발자가 되고자 합니다.
          </p>

          {/* 내 정보 */}
          <div className="space-y-3">
            <ProfileSection/>
            <AboutSection/>
            <DevelopmentSection/>
            <EducationSection/>
            <CertificateSection/>
            <PortfolioSection/>
            <SkillSection/>
          </div>
        </main>

        <footer className="mt-10 text-sm text-gray-500 text-right">
          <p>&copy; 2025 장권영. All rights reserved.</p>
          <p className="mt-1">Made with Next.js & TailwindCSS</p>
          <p className="mt-1">
            Contact: <a href="mailto:kwonyoung0508@gmail.com"
                        className="text-blue-500 hover:underline">kwonyoung0508@gmail.com</a>
          </p>
        </footer>
      </div>
      <ArrowTop/>
    </div>
  );
}
