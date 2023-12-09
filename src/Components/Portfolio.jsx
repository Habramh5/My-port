/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/1.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My activities",
    description:
      "My activity program will soon be available on this page.In the meantime you can follow me on my networks.",
    url: "",
  },
  {
    title: "Free microsoft trainings",
    description:
      "Discover the free Microsoft training courses that will help you build your journey.",
    url: "https://learn.microsoft.com/fr-fr/training/",
  },
  {
    title: "Feel free to follow my inspiring videos and my conferences on YouTube",
    description:
      "You will find on my YouTube channel several inspiring videos of my research related to nuclear technologies and education as well as videos of my conferences.",
    url: "https://www.youtube.com/channel/UC0LOmqMZwTGFnhipKEXt-eg",
  },
  {
    title: "YALI conference at Denis Sassou N'guesso University.",
    description:
      "What are the advantages for applying for YALI program and how to apply.",
    url: "https://www.facebook.com/100093009351961/posts/223269007450076/?mibextid=rS40aB7S9Ucbxw6v",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
