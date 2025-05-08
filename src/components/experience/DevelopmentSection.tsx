import Title from "@/components/Title";

const DevelopmentSection = () => {
  return (
    <section className="w-full">
      <Title title="Development Experience"/>

      <div className="p-6 space-y-10 text-left text-sm text-gray-800">
        {/* NAMUTECH */}
        <article>
          <h4 className="text-base font-bold text-gray-900">
            NAMUTECH JAPAN (Japan)
            <span className="ml-2 text-xs text-gray-500">2023.06.01 ~ 2025.05.15</span>
          </h4>
          <p className="text-gray-600 text-sm mt-1">Web & System Development Projects</p>

          <ul className="list-disc pl-5 mt-3 space-y-2">
            {[
              {
                title: "Statistics Tool 개발・유지 보수",
                desc: "SA/MVNO 서버로부터 수집되는 로그 데이터를 시각화하고 관리하는 웹 툴을 개발했습니다. Go와 Wails로 데스크탑 앱을 구성하고, React와 Tailwind로 UI를 설계했습니다.",
              },
              {
                title: "TMS(Task Management System) 개발・유지 보수",
                desc: "사내 영업 이력 및 업무 태스크 관리 시스템을 React, Express, Tailwind 기반으로 구현하고 PostgreSQL과 연동하여 데이터 흐름을 구성했습니다.",
              },
              {
                title: "나무 테크 재팬 공식 홈페이지 개발・유지 보수",
                desc: "NAMUTECH JAPAN 공식 홈페이지를 반응형 웹으로 새롭게 제작하였으며, Tailwind 기반 그리드 UI로 크로스 브라우징과 접근성을 개선했습니다.",
              },
              {
                title: "CRM(Customer Relationship Management) 개발・유지 보수",
                desc: "Angular + NestJS 기반 내부 고객 및 프로젝트 관리 시스템 기능을 개발하고, Docker/Kubernetes 기반의 배포 환경을 경험했습니다.",
              },
              {
                title: "Namutech Expense System 개발・유지 보수",
                desc: "사내 교육비 및 출장비 등 경비 신청 → 결재 → 정산 흐름을 관리하는 시스템을 Angular + NestJS 기반으로 구현했습니다. 정산 완료 시 자동 메일 알림 기능도 포함되어 있습니다.",
              },
              {
                title: "SKPACK 유지보수",
                desc: "Angular 구조 기반의 프론트엔드 기능 개선과 함께, NestJS API 비동기 처리 로직을 최적화했습니다.",
              },
              {
                title: "로그 분석 도구 개발・유지 보수",
                desc: "Go로 CLI 기반의 로그 수집 도구를 개발하고, Bash 및 Shell 스크립트를 활용한 자동화 환경을 구축했습니다.",
              }
            ].map((item, i) => (
              <li key={i} className="space-y-1">
                <p className="text-[15px] font-semibold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>

          <div className="mt-4 space-y-1 text-xs text-gray-600">
            <p><strong>Technologies:</strong> TypeScript, JavaScript, Go, React, Angular, NestJS, Express, Tailwind</p>
            <p><strong>Database:</strong> PostgreSQL, MySQL</p>
            <p><strong>Environment:</strong> Windows, Linux, WebStorm, GoLand</p>
          </div>
        </article>

        {/* W2 Solution */}
        <article>
          <h4 className="text-base font-bold text-gray-900">
            W2 Solution (Japan)
            <span className="ml-2 text-xs text-gray-500">2022.04.01 ~ 2023.05.01</span>
          </h4>
          <p className="text-gray-600 text-sm mt-1">Web Application Maintenance (SaaS Product)</p>

          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li>UI/UX 버그 수정 및 SaaS 기능 유지보수 담당</li>
            <li>프론트 수정, 데이터 가공, 테스트 수행</li>
            <li>고객 피드백 반영, 안정성 중심의 개선</li>
            <li>요건 정의 → 테스트 → 운영까지 전체 단계 참여</li>
          </ul>

          <div className="mt-4 space-y-1 text-xs text-gray-600">
            <p><strong>Technologies:</strong> C#, JavaScript, Asp.net, jQuery</p>
            <p><strong>Database:</strong> MSSQL</p>
            <p><strong>Environment:</strong> Windows, Visual Studio</p>
          </div>
        </article>
      </div>
    </section>

  );
};

export default DevelopmentSection;
