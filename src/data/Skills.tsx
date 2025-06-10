import {
  FaAws, FaCss3Alt, FaDocker, FaGitAlt, FaGithub,
  FaHtml5,
  FaJsSquare, FaNodeJs, FaReact
} from "react-icons/fa";
import {
  SiAmazonec2,
  SiAmazons3,
  SiAxios, SiExpress, SiMysql, SiNestjs,
  // SiNextdotjs,
  SiPostcss,
  SiPostgresql,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  // SiVercel
} from "react-icons/si";

export const frontEnd = [
  {
    icon: <FaHtml5 className="size-5 text-orange-600"/>,
    skillTitle: "HTML5",
    desc: "시멘틱 마크업을 이해하고 있으며, 웹 접근성과 구조적인 HTML 작성이 가능합니다.",
  },
  {
    icon: <FaCss3Alt className="size-5 text-blue-600"/>,
    skillTitle: "CSS3",
    desc: "반응형 웹과 UI 구현을 위한 Flexbox, Grid, 미디어 쿼리 등을 능숙하게 다룰 수 있습니다.",
  },
  {
    icon: <FaJsSquare className="size-5 text-yellow-400"/>,
    skillTitle: "JavaScript",
    desc: "ES6+ 문법과 DOM 조작, 비동기 처리 등 전반적인 프론트엔드 로직을 구현할 수 있습니다.",
  },
  {
    icon: <SiTypescript className="size-5 text-blue-500"/>,
    skillTitle: "TypeScript",
    desc: "정적 타입 시스템을 활용해 안정적인 코드 작성이 가능합니다.",
  },
  {
    icon: <FaReact className="size-5 text-cyan-400"/>,
    skillTitle: "React",
    desc: "컴포넌트 기반 UI 설계, 상태 관리, 훅 등을 이해하고 활용합니다.",
  },
  // {
  //   icon: <SiNextdotjs className="size-5"/>,
  //   skillTitle: "Next.js",
  //   desc: "SSR, CSR, ISR 등 다양한 렌더링 방식과 파일 기반 라우팅 경험 보유",
  // },
  // {
  //   icon: <SiVercel className="size-5"/>,
  //   skillTitle: "Vercel",
  //   desc: "Next.js 앱을 Vercel에 배포 및 CDN 연동 경험 보유",
  // },
  {
    icon: <SiTailwindcss className="size-5 text-sky-400"/>,
    skillTitle: "Tailwind CSS",
    desc: "유틸리티 퍼스트 CSS 프레임워크를 사용해 빠르고 일관된 UI 구현 가능",
  },
  {
    icon: <SiPostcss className="size-5 text-pink-400"/>,
    skillTitle: "PostCSS",
    desc: "Tailwind와 함께 사용하며 CSS 전처리기와 같은 역할을 이해하고 활용",
  },
  {
    icon: <SiReactquery className="size-5 text-rose-500"/>,
    skillTitle: "TanStack Query",
    desc: "서버 상태 관리에 최적화된 React Query로 데이터 페칭, 캐싱 처리 경험",
  },
  {
    icon: <img src="https://logowik.com/content/uploads/images/jotai4420.logowik.com.webp" className="size-5"/>,
    skillTitle: "Jotai",
    desc: "간단하고 직관적인 원자 단위 상태 관리 경험",
  },
  {
    icon: <SiRedux className="size-5 text-purple-500"/>,
    skillTitle: "Redux",
    desc: "글로벌 상태 관리, 미들웨어 적용 경험 보유",
  },
  // {
  //   icon: <img src="https://tsh.io/wp-content/uploads/2023/02/zustand-react-small.png"
  //              className="size-5 text-yellow-700 rounded"/>,
  //   skillTitle: "Zustand",
  //   desc: "간단한 API 기반의 전역 상태 관리 구현 경험",
  // },
  {
    icon: <SiAxios className="size-5 text-blue-600"/>,
    skillTitle: "Axios",
    desc: "REST API와의 통신을 위한 HTTP 클라이언트 라이브러리 사용 경험",
  },
];

export const backEnd = [
  {
    icon: <SiExpress className="size-5 text-gray-600"/>,
    skillTitle: "Express",
    desc: "Node.js 기반 서버 구축 및 RESTful API 설계 경험",
  },
  {
    icon: <SiNestjs className="size-5 text-red-600"/>,
    skillTitle: "NestJS",
    desc: "모듈 기반 구조의 백엔드 프레임워크로 구조적 API 서버 구현 경험",
  },
  {
    icon: <SiMysql className="size-5 text-blue-500"/>,
    skillTitle: "MySQL",
    desc: "관계형 데이터베이스 설계 및 SQL 쿼리 작성 경험 보유",
  },
  {
    icon: <SiPostgresql className="size-5 text-indigo-500"/>,
    skillTitle: "PostgreSQL",
    desc: "정교한 쿼리 작성과 JSON 데이터 타입 활용 가능",
  },
  {
    icon: <FaNodeJs className="size-5 text-green-600"/>,
    skillTitle: "Node.js",
    desc: "JavaScript 런타임 환경 기반으로 Express 등과 함께 서버 개발에 활용합니다.",
  },
];

export const devOps = [
  {
    icon: <FaDocker className="size-5 text-sky-500"/>,
    skillTitle: "Docker",
    desc: "컨테이너 기반 개발 환경 구축 및 이미지 빌드 경험 보유",
  },
  {
    icon: <FaGitAlt className="size-5 text-orange-500"/>,
    skillTitle: "Git",
    desc: "브랜치 전략, 커밋 관리 및 협업 경험 보유",
  },
  {
    icon: <FaGithub className="size-5 text-black"/>,
    skillTitle: "GitHub",
    desc: "Git 저장소 관리 및 오픈소스 프로젝트 협업 경험",
  },
  {
    icon: <SiAmazons3 className="size-5 text-yellow-500"/>,
    skillTitle: "Amazon S3",
    desc: "정적 파일 업로드 및 이미지 관리 등 클라우드 스토리지 사용 경험",
  },
  {
    icon: <SiAmazonec2 className="size-5 text-orange-400"/>,
    skillTitle: "Amazon EC2",
    desc: "리눅스 기반 인스턴스 생성 및 보안 그룹 설정, 배포 경험",
  },
  {
    icon: <FaAws className="size-5 text-yellow-500"/>,
    skillTitle: "AWS",
    desc: "EC2, S3, RDS 등 AWS 서비스 기반 인프라 운영 및 배포 경험",
  },
];
