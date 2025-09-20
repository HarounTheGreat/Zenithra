import React, { useEffect, useState } from "react";
import { projectsData } from "./data";
import WorkItems from "./WorkItems";
import PersonalProject from "./PersonalProject";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return (
            <WorkItems
              item={item}
              key={item.id}
              deploymentLink={item.deploymentLink}
            />
          );
        })}
      </div>
      <PersonalProject />
    </div>
  );
};

export default Works;
