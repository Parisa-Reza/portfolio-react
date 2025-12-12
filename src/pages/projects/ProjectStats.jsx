export default function ProjectStats({ project }) {
  if (!project) return null;

  const stats = [
    {
      icon: "★",
      label: "Stars",
      value: project.stargazers_count,
    },
    {
      icon: "⑂",
      label: "Forks",
      value: project.forks_count,
    },
    {
      icon: "○",
      label: "Issues",
      value: project.open_issues_count,
    },
    {
      icon: "◎",
      label: "Watchers",
      value: project.watchers_count,
    },
  ];

  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className=" border border-gray-200  p-4 text-center transition-colors"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-gray-200 text-xs font-medium mb-1">
              {stat.label}
            </div>
            <div className="text-2xl font-bold text-white">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {project.language && (
        <div className="mt-4 p-4  border border-gray-200 ">
          <div className="text-gray-200 text-sm mb-1">Primary Language</div>
          <div className="text-white font-medium">{project.language}</div>
        </div>
      )}
    </div>
  );
}
