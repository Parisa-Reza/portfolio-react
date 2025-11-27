import ProjectCard from "./ProjectCard";

function Projects({ projectRepos,hideProjects}) {
  return (
    <div className="flex flex-col mt-20 items-center">

      <div>
      <h2 className="text-2xl text-[rgb(10,228,217)]  font-normal mb-4">My Github Projects</h2>
          
          <button onClick={hideProjects} className="text-2xl text-white">Hide Projects</button>
      </div>

      {projectRepos.length === 0 ? (
        <p>No repo :(</p>
      ) : (
        <div className="flex gap-4">
          {/* App.jsx->projectRepo list -> Projects.jsx -> for every repo (mapping) prop is passing ->ProjectCard.jsx */}
          {projectRepos.map((projectRepo) => {
            return <ProjectCard key={projectRepo.url} project={projectRepo} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Projects;
