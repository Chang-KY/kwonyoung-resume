import Title from "@/components/Title";

const CertificateSection = () => {
  return (
    <section className="w-full">
      <Title title="Certificates"/>

      {/* Certificates Card */}
      <div className="bg-white p-6 rounded-xl text-left">
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-2">
          <li><span className="font-semibold">JLPT N1</span> – 2019년 취득</li>
          <li><span className="font-semibold">기본정보기술자 (基本情報技術者)</span> – 2021년 일본 IPA</li>
          <li><span className="font-semibold">CKAD (Certified Kubernetes Application Developer)</span> – 2023년 Linux
            Foundation
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CertificateSection;
