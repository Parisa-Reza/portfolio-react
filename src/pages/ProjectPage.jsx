import { useParams, useNavigate } from "react-router";
import { useProjectContext } from "../hooks";
import {
  ProjectHeader,
  ProjectStats,
  ProjectDescription,
  ProjectLinks,
  ProjectFooter,
} from "./projects";

export default function ProjectPage() {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const { projectRepos, showLoading } = useProjectContext();

  // Find the project by name
  const project = projectRepos.find((repo) => repo.name === projectName);
  const projectIndex = projectRepos.findIndex((repo) => repo.name === projectName);

  // Loading state
  if (showLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-[rgb(25,26,25)] to-[rgb(92,121,118)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-gray-800 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading project...</p>
        </div>
      </div>
    );
  }

  
  // 404 state
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-[rgb(25,26,25)] to-[rgb(92,121,118)] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold text-white mb-2">404</h1>
          <p className="text-gray-400 mb-6">
            Project "{projectName}" not found.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[rgb(25,26,25)] to-[rgb(92,121,118)] text-white">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 text-gray-200 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
        >
          ← Back
        </button>

        {/* Project Header */}
        <ProjectHeader project={project} />

        {/* Project Stats */}
        <ProjectStats project={project} />

        {/* Project Description */}
        <ProjectDescription project={project} />

        {/* Project Links */}
        <ProjectLinks project={project} />

        {/* Project Footer */}
        <ProjectFooter
          project={project}
          projectIndex={projectIndex}
          projectRepos={projectRepos}
        />
      </div>
    </div>
  );
}
