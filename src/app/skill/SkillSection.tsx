'use client';

import {frontEnd, backEnd, devOps} from "@/data/Skills";
import Title from "@/components/Title";

const renderSkillGroup = (title: string, skills: typeof frontEnd) => (
  <article className="space-y-3">
    <h4 className="text-sm font-semibold text-gray-700">{title}</h4>
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <li
          key={i}
          className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition rounded-md px-3 py-1 text-sm shadow-sm border border-gray-100"
        >
          <span className="text-base">{skill.icon}</span>
          <span className="text-gray-800">{skill.skillTitle}</span>
        </li>
      ))}
    </ul>
  </article>
);

const SkillsSection = () => {
  return (
    <section className="w-full">
      <Title title="Skills"/>
      <div className="p-6 space-y-5 text-left">
        {renderSkillGroup("Frontend", frontEnd)}
        {renderSkillGroup("Backend", backEnd)}
        {renderSkillGroup("DevOps & Infra", devOps)}
      </div>
    </section>
  );
};

export default SkillsSection;
