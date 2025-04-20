'use client'

import Title from "@/components/Title";

const AboutSection = () => {
  return (
    <section className="w-full">
      <Title title="About Me"/>

      <div className="space-y-3 p-6">
        {/* 카드 1 */}
        <div className="bg-white rounded-xl text-left">
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            프론트엔드 개발자로서의 시작
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            2017년 일본 워킹홀리데이로 처음 일본에 방문했으며, 현지 생활에 큰 매력을 느껴 유학을 결심하게 되었습니다.
            원래는 목공 등 손으로 무언가를 만드는 분야에 관심이 있었지만, 일본전자전문학교 정보처리학과에 입학하며 코딩을 접하게 되었고,
            그 과정에서 문제를 해결하고 결과를 만들어내는 개발의 매력에 빠지게 되었습니다.
            <br/><br/>
            졸업 후 프론트엔드 중심의 웹 개발 경력을 쌓아왔으며, 사용자 관점에서의 경험을 우선시합니다.
            단순한 기능 구현을 넘어서 더 나은 사용성을 제공하기 위한 UI/UX 개선에 지속적인 관심을 가지고 있습니다.
          </p>
        </div>

        {/* 카드 2 */}
        <div className="bg-white rounded-xl text-left">
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            개발 철학과 학습 스타일
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            새로운 기술과 도구를 학습하는 데 적극적이며, 다양한 코드 스타일과 설계 방식에 대해 탐구하는 것을 즐깁니다.
            집중력 있게 몰입하여 문제를 해결하는 스타일이며, 실제로 기능 하나의 완성도를 높이기 위해 오랜 시간 고민한 경험도 다수 있습니다.
          </p>
        </div>

        {/* 카드 3 */}
        <div className="bg-white rounded-xl text-left">
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            디자인에 대한 관점
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            UI는 단순히 시각적인 요소를 넘어, 사용자가 어떻게 인지하고 동작하는지를 고려해야 한다고 생각합니다.
            실제 프로젝트에서도 디자인 구조와 사용성 개선을 위해 다양한 시도와 개선을 반복해왔으며, 접근성과 일관성을 중시합니다.
          </p>
        </div>

        {/* 카드 4 */}
        <div className="bg-white rounded-xl text-left">
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            책임감과 커뮤니케이션
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            다양한 현장 경험을 통해 책임감 있는 업무 수행과 유연한 커뮤니케이션의 중요성을 체득했습니다.
            역할과 상황에 맞는 소통을 중시하며, 팀 내에서 신뢰받는 구성원이 되기 위해 노력하고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
