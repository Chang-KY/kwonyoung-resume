import Title from "@/components/Title";

const ProfileSection = () => {
  return (
    <section className="w-full">
      <Title title="Profile"/>

      <div className="bg-white p-6 text-left text-sm text-gray-800 space-y-2">
        <div className="flex gap-4">
          <p className="text-base font-semibold text-gray-900 min-w-20">이름</p>
          <p>장 권영 （張 権栄）</p>
        </div>

        <div className="flex gap-4">
          <p className="text-base font-semibold text-gray-900 min-w-20">출생</p>
          <p>1993년 5월 8일 (남자)</p>
        </div>

        <div className="flex gap-4">
          <p className="text-base font-semibold text-gray-900 min-w-20">학위</p>
          <p>일본 전자 전문 학교 (전문사)</p>
        </div>

        <div className="flex gap-4">
          <p className="text-base font-semibold text-gray-900 min-w-20">거주</p>
          <p>서울특별시 은평구 불광동</p>
        </div>

        <div className="flex gap-4">
          <p className="text-base font-semibold text-gray-900 min-w-20">병역</p>
          <p>군필 (육군 병장 만기전역)</p>
        </div>

        {/*<div className="flex gap-4">*/}
        {/*  <p className="text-base font-semibold text-gray-900 w-20">전화</p>*/}
        {/*  <p>+81 080-2128-6017 (jp)</p>*/}
        {/*</div>*/}

        <div className="flex gap-4 items-start">
          <p className="text-base font-semibold text-gray-900 min-w-20">메일</p>
          <div className="space-y-1">
            <p>pzxcvp0508@gmail.com</p>
            <p>kwonyoung0508@gmail.com</p>
          </div>
        </div>

        <div className="flex gap-4">
          <p className="text-base font-semibold text-gray-900 min-w-20">취미</p>
          <p>영화 감상, 소설책 만화책 읽기, 여행</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
