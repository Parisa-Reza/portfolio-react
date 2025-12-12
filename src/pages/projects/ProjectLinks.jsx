export default function ProjectLinks({ project }) {
  if (!project) return null;

  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-3">
      {/* GitHub Link */}
      <a
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 px-6 py-3 bg-gray-600 text-white font-semibold  border border-gray-200 hover:border-gray-600  transition-colors flex items-center justify-center gap-2"
      >
        <span>→</span> View on GitHub
      </a>

      {/* Homepage Link */}
      {project.homepage && (
        <a
          href={project.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-6 py-3 bg-gray-600 text-white font-semibold  border border-gray-200 hover:border-gray-600 transition-colors flex items-center justify-center gap-2"
        >
          <span>→</span> Live Demo
        </a>
      )}
    </div>
  );
}
