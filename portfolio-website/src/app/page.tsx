import Header from "../components/Header";
import AboutSection from "../components/About";
import ProjectSection from "../components/Project";
import ResumeSection from "../components/Resume";
import ContentSection from "../components/Content";

export default function Home() {
  return (
    <div>
      <Header />
      <div id="home">
        <AboutSection />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
      <div id="resume">
        <ResumeSection />
      </div>
      <div id="content">
        <ContentSection />
      </div>
    </div>
  );
}
