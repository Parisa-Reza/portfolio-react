import { useNavigate } from "react-router";

export default function ProjectFooter({
  project,
  projectIndex,
  projectRepos,
}) {
  const navigate = useNavigate();

  if (!project) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const previousProject = projectIndex > 0 ? projectRepos[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectRepos.length - 1 ? projectRepos[projectIndex + 1] : null;

  const handlePrevious = () => {
    if (previousProject) {
      navigate(`/projects/${previousProject.name}`);
    }
  };

  const handleNext = () => {
    if (nextProject) {
      navigate(`/projects/${nextProject.name}`);
    }
  };

  return (
    <div className="border-t border-gray-800 pt-8">
      {/* Metadata */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="border border-gray-100  p-4">
          <div className="text-gray-200 text-md font-medium mb-1">
            Created
          </div>
          <div className="text-white text-sm">{formatDate(project.created_at)}</div>
        </div>

         <div className="border border-gray-100  p-4">
          <div className="text-gray-200 text-md font-medium mb-1">
            Last Updated
          </div>
          <div className="text-white text-sm">{formatDate(project.updated_at)}</div>
        </div>

        {project.license && (
           <div className="border border-gray-100  p-4">
            <div className="text-gray-500 text-md font-medium mb-1">
              License
            </div>
            <div className="text-white text-sm">{project.license.name}</div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        <button
          onClick={handlePrevious}
          disabled={!previousProject}
          className="flex-1 px-4 py-3 bg-gray-600 text-white  border border-gray-200 hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
        >
          ← Previous
        </button>

        <button
          onClick={() => navigate("/")}
          className="flex-1 px-4 py-3 bg-gray-600 text-white  border border-gray-200 hover:border-gray-600 transition-colors text-sm font-medium"
        >
          Back to Home
        </button>

        <button
          onClick={handleNext}
          disabled={!nextProject}
          className="flex-1 px-4 py-3 bg-gray-600 text-white  border border-gray-200 hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
        >
          Next →
        </button>
      </div>

      <div className="text-center text-gray-200 text-sm mt-6">
        Project {projectIndex + 1} of {projectRepos.length}
      </div>
    </div>
  );
}
