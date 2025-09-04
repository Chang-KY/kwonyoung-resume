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
    githubUrl: "https://github.com/Chang-KY/work-or-a",
    testId: "test@gmail.com",
    password: "12341234"
  },
  {
    notionUrl: 'https://sore-croissant-30e.notion.site/emotion-diary-1ecefa0a7f75801d850dedf64d60160c',
    id: "emotion-diary",
    title: "Emotion Diary",
    summary: "감정을 기록하고 돌아볼 수 있는 일기 서비스. 감정 카테고리, 공유 범위, 좋아요/댓글 등 소셜 요소를 더해, 매일의 감정을 시각적으로 관리",
    description: `
      Emotion Diary는 하루하루의 감정을 기록하고, 캘린더와 차트를 통해 돌아볼 수 있는 감정 기반 일기 플랫폼입니다.
      사용자는 자신의 감정을 선택하고, 공유 범위를 설정하여 개인적으로 기록하거나 다른 사람과 나눌 수 있습니다.
      댓글과 좋아요 기능을 통해 소통할 수 있으며, 무한 스크롤과 가상화 렌더링을 적용해 많은 기록도 쾌적하게 확인할 수 있습니다.
    `,
    images: ["/portfolio/emotion-diary1.webp", "/portfolio/emotion-diary2.webp"],
    features: [
      "Calendar 기반 감정 기록",
      "감정 선택 및 시각화 (Emotion Chart)",
      "공개 범위 설정 (개인/친구(팔로워)/전체)",
      "댓글 & 좋아요 기능",
      "무한 스크롤 & 가상화 렌더링",
      "감정별 통계와 리포트"
    ],
    frontend: "React, TypeScript, Jotai, TanStack Query, Tailwind CSS, Vite",
    backend: "supabase",
    infra: "AWS S3, CloudFront",
    liveUrl: "https://d5qx4tg7av4vj.cloudfront.net",
    githubUrl: "https://github.com/Chang-KY/emotion-diary",
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
  testId?: string,
  password?: string,
};
