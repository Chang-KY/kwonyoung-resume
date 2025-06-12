export const projects: projects[] = [
  {
    notionUrl: 'https://sore-croissant-30e.notion.site/ebd/1ecefa0a7f7580f19018e43a53cf43fa',
    id: "workora",
    title: "Work-or-A",
    summary: "그룹웨어 스타일의 실시간 채팅 및 일정 공유 플랫폼",
    description: `
      기업용 협업 시스템을 목표로 개발된 데스크탑 중심의 웹 애플리케이션입니다.
      채팅, 파일 공유, 일정 관리 등의 기능을 통합하여 업무 효율을 높이는 것을 목적으로 했으며,
      데스크탑 해상도를 기준으로 설계되었으나 기본적인 반응형 구조도 고려하여 구현되었습니다.
    `,
    images: ["/portfolio/work-or-a-signin.png", "/portfolio/work-or-a-chat.png"],
    features: [
      "Jotai + TanStack Query로 전역 상태 및 서버 상태 관리",
      "Socket.IO 기반 실시간 채팅 및 채널 알림 구현",
      "JWT 인증 + 쿠키 기반 로그인, CSRF 보호",
      "EC2 + S3 + CloudFront + Nginx 구성으로 AWS 인프라 배포"
    ],
    frontend: "React, TypeScript, Jotai, TanStack Query, Tailwind CSS, Vite",
    backend: "Node.js, Express, MySQL, Knex, Passport-JWT, Redis, Socket.IO",
    infra: "AWS EC2, S3, CloudFront, Nginx, Docker",
    liveUrl: "https://work-or-a.com",
    githubUrl: "https://github.com/Chang-KY/work-or-a"
  },
]

export type projects = {
  notionUrl: string;
  id: string,
  title: string,
  summary: string,
  description: string,
  images: string[],
  features: string[],
  frontend: string,
  backend: string,
  infra: string,
  liveUrl: string,
  githubUrl: string,
};
