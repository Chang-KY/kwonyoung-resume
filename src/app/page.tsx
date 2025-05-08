import ArrowTop from "@/components/ArrowTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileSection from "@/components/profile/ProfileSection";
import AboutSection from "@/components/about/AboutSection";
import DevelopmentSection from "@/components/experience/DevelopmentSection";
import EducationSection from "@/components/education/EducationSection";
import CertificateSection from "@/components/certificate/CertificateSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import SkillSection from "@/components/skill/SkillSection";

export default function Home() {

  return (
    <div id="home" className="flex items-center justify-center min-h-screen relative bg-white text-gray-900">
      <div className="absolute top-20 w-full max-w-[80rem]">
        <div className="bg-teal-200 w-full h-80 rounded-xl max-w-[100rem]"/>
      </div>
      <div className="w-full max-w-4xl px-6 py-5">
        {/* Header */}
        <Header/>

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
              <span className="sm:border-l sm:border-gray-300 sm:pl-6">프론트엔드 개발자</span>
            </h2>
          </div>

          {/* 내 소개글 */}
          <p className="text-left my-5 leading-relaxed text-gray-800 text-sm sm:text-base">
            문제를 끝까지 파고들고, 코드의 본질을 고민하는 프론트엔드 개발자 <strong className="text-black">장권영</strong>입니다.<br/>
            개발 과정에서 얻은 인사이트를 팀원과 적극적으로 공유하며, 함께 성장하는 개발 문화를 추구합니다.<br/>
            말보다 행동으로 실력을 증명하고, 끊임없는 개선과 배움을 통해 더 나은 사용자 경험을 만드는 개발자가 되고자 합니다.
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

        <Footer/>
      </div>
      <ArrowTop/>
    </div>
  );
}
