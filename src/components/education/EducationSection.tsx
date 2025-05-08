import Title from "@/components/Title";

const EducationSection = () => {
  return (
    <section className="w-full">
      <Title title="Education"/>

      {/* education Card */}
      <div className="bg-white p-6 rounded-xl text-left">
        <div className="text-sm text-gray-800 space-y-1">
          <p className="text-base font-semibold text-gray-900">일본전자전문학교 고도정보처리과</p>
          <p className="text-gray-600">Japan Electronics College – Advanced Information Processing Department</p>
          <p className="text-gray-500">2019년 4월 ~ 2022년 3월</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
