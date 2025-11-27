import ProjectCard from "./ProjectCard";

function Projects({ projectRepos, hideProjects }) {
  return (
    <div className="flex flex-col mt-10 items-center max-h[60vh] overflow-y-auto gap-6">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-2xl text-[rgb(10,228,217)]  font-normal mb-4">
          My Github Projects
        </h2>

        <button
          onClick={hideProjects}
          className="bg-[rgb(10,228,217)] font-medium px-2 py-2 "
        >
          Hide All Projects
        </button>
      </div>

      {projectRepos.length === 0 ? (
        <p>No repo :(</p>
      ) : (
        <div className="flex gap-4 flex-wrap justify-center">
          {/* App.jsx->projectRepo list -> Projects.jsx -> for every repo (mapping) prop is passing ->ProjectCard.jsx */}
          {projectRepos.map((projectRepo) => {
            return <ProjectCard key={projectRepo.id} project={projectRepo} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Projects;
