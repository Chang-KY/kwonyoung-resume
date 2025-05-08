import Title from "@/components/Title";
import {projects} from "@/data/Portfolio";
import ProjectList from "@/components/portfolio/PortfolioList";

const PortfolioSection = () => {

  return (
    <section className="w-full">
      <Title title="Portfolio"/>

      {projects.map((value, index) => (
        <ProjectList project={value} key={index}/>
      ))}
    </section>

  );
};

export default PortfolioSection;
