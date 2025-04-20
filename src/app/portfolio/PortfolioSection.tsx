import Title from "@/components/Title";
import {FaGithub} from "react-icons/fa";
import {FiExternalLink} from "react-icons/fi";

const PortfolioSection = () => {
  return (
    <section className="w-full">
      <Title title="Portfolio"/>

      <div className="p-6 text-left space-y-6">
        {/* 프로젝트 이름 및 한줄 설명 */}
        <div>
          <h4 className="text-base font-semibold text-gray-900">Work-or-A</h4>
          <p className="text-sm text-gray-700 mt-1">
            그룹웨어 스타일의 실시간 채팅 및 일정 공유 플랫폼
          </p>
        </div>

        {/* 주요 설명 */}
        <p className="text-sm text-gray-700 leading-relaxed">
          기업용 협업 시스템을 목표로 개발된 데스크탑 중심의 웹 애플리케이션입니다.
          채팅, 파일 공유, 일정 관리 등의 기능을 통합하여 업무 효율을 높이는 것을 목적으로 했으며,
          데스크탑 해상도를 기준으로 설계되었으나 기본적인 반응형 구조도 고려하여 구현되었습니다.
        </p>

        {/* 스크린샷 위치 여기! */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img src="/images/workora-dashboard.png" alt="Work-or-A 대시보드" className="rounded shadow"/>
          <img src="/images/workora-chat.png" alt="Work-or-A 채팅" className="rounded shadow"/>
        </div>

        {/* 기능 리스트 */}
        <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
          <li>Jotai + TanStack Query로 전역 상태 및 서버 상태 관리</li>
          <li>Socket.IO 기반 실시간 채팅 및 채널 알림 구현</li>
          <li>JWT 인증 + 쿠키 기반 로그인, CSRF 보호</li>
          <li>EC2 + S3 + CloudFront + Nginx 구성으로 AWS 인프라 배포</li>
        </ul>

        {/* 기술 스택 및 링크 */}
        <div className="text-xs text-gray-600 space-y-1 pt-4 border-t border-gray-200">
          <p><strong>Frontend:</strong> React, TypeScript, Jotai, TanStack Query, Tailwind CSS, Vite</p>
          <p><strong>Backend:</strong> Node.js, Express, MySQL, Knex, Passport-JWT, Redis, Socket.IO</p>
          <p><strong>Infra:</strong> AWS EC2, S3, CloudFront, Nginx, Docker</p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://work-or-a.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-600 underline underline-offset-4 hover:underline hover:text-gray-800 transition"
            >
              <FiExternalLink className="size-4"/>
              <span>Live</span>
            </a>
            <a
              href="https://github.com/kwonyoung0508/work-or-a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-600 underline underline-offset-4 hover:underline hover:text-gray-800 transition"
            >
              <FaGithub className="size-4"/>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PortfolioSection;
