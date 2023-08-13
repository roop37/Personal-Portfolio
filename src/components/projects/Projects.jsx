import { useEffect, useState } from "react";
import ProjectList from "../ProjectList/ProjectList";
import "./Projects.css";

import {
  reactPortfolio,
  flutterPortfolio,
  fullstackPortfolio,
  nodePortfolio,
  uiuxPortfolio,
} from "../../data";

export default function Projects() {
  const [selected, setSelected] = useState("react");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "react",
      title: "React",
    },

    {
      id: "flutter",
      title: "Flutter",
    },
    {
      id: "fullstack",
      title: "Full-Stack",
    },

    {
      id: "node",
      title: "Node/MongoDB",
    },

    {
      id: "uiux",
      title: "UI/UX",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "react":
        setData(reactPortfolio);
        break;
      case "flutter":
        setData(flutterPortfolio);
        break;
      case "fullstack":
        setData(fullstackPortfolio);
        break;
      case "node":
        setData(nodePortfolio);
        break;
      case "uiux":
        setData(uiuxPortfolio);
        break;
      default:
        setData(reactPortfolio);
    }
  }, [selected]);

  return (
    <div className="project" id="projects">
      <h1>Projects</h1>
      <h3>Click on Each Project to visit the GitHub Repo.</h3>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a
            href={d.link}
            target="_blank"
            rel="noopener noreferrer"
            className="item"
            style={{ textDecoration: "none" }} // Add this inline style
          >
            <img src={d.img} alt="Oops. Had a problem loading the image" />
            <h2>{d.title}</h2>
            <h3>{d.subtitle}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
