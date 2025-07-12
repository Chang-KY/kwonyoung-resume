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
                        2017년 일본 워킹홀리데이로 처음 일본에 방문했을 당시,
                        일본에서는 다양한 복장과 헤어스타일, 혼밥·혼술 문화와 같은 개인의 라이프 스타일을 존중하는 분위기였습니다.
                        타인의 시선을 의식하지 않고 자유롭게 생활할 수 있다는 점에 큰 매력을 느꼈습니다.
                        또한, 세심하게 무언가를 만드는 분야에 흥미가 있어, 일본전자전문학교 정보처리학과에 입학하며 코딩을 접하게 되었습니다.
                        그 과정에서 문제를 해결하고 결과를 만들어내는 개발의 매력에 빠지게 되었습니다.
                        <br/><br/>
                        졸업 후 프론트엔드 중심의 웹 개발 경력을 쌓아왔으며, 사용자 관점에서의 경험을 우선시하여 개발에 임했습니다.
                        단순한 기능 구현을 넘어서 보다 나은 사용성을 제공하기 위한 UI/UX 개선에 지속적인 관심을 가지고 있습니다.
                    </p>
                </div>

                {/* 카드 2 */}
                <div className="bg-white rounded-xl text-left">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                        개발 철학과 학습 스타일
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        새로운 기술과 도구를 학습하는 것에 대해 적극적이며, 다양한 코드 스타일과 설계 방식에 대해 관심 분야의
                        사람들과 소통 하는 것에 있어 원동력을 느낍니다.
                        문제 해결 과정에서 깊이 몰입하는 스타일이며,
                        세심함을 기반으로 기능 하나의 완성도를 높이기 위해 작은 디테일까지도 놓치지 않고 개발을 한 경험이 많습니다.
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
                        다양한 현장 경험과 책임감 있는 업무 수행을 통해 유연한 소통력이 업무에 큰 영향을 준다는 것을 느끼며 책임감을 쌓아왔습니다.
                        역할과 상황에 맞는 협력과 소통을 중시하며, 팀 내에서 신뢰받는 구성원이 되기 위해 노력합니다.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
