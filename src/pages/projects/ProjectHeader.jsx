export default function ProjectHeader({ project }) {
  if (!project) return null;

  return (
    <div className="mb-8 border-b border-gray-500 pb-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-md text-[rgb(10,228,217)] ">
              {project.name}
            </h1>
            {project.fork && (
              <span className="px-3 py-1 text-xs font-medium text-gray-200 border border-gray-700 rounded-full">
                Fork
              </span>
            )}
          </div>
          
          {project.description && (
            <p className="text-gray-200 text-sm leading-relaxed">
              {project.description}
            </p>
          )}
        </div>
      </div>

      {project.topics && project.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.topics.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-900 rounded-full border border-gray-800 hover:border-gray-600 transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
