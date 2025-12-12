export default function ProjectDescription({ project }) {
  if (!project) return null;

 
  return (
    <div className="mb-8">
      <div className=" border border-gray-100  p-6">
        <h2 className="text-lg font-semibold text-white mb-3">Overview</h2>
        <p className="text-gray-200 leading-relaxed">
          {project.description ||
            "No description available for this repository."}
        </p>

        {project.homepage && (
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="text-gray-200 text-sm mb-2">Visit Project</div>
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              {project.homepage}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
