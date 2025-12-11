
export const AttachmentCard = ({attachment}) => {
  return (
    <div className=" border border-white  p-5 h-[300px] hover:border-[rgb(10,228,217)] transition flex flex-col justify-between">
  <div>
    <h3 className="text-xl font-medium text-gray-100 mb-2">
      {attachment.companyName}
    </h3>
    <p className="text-md text-gray-200 mb-1">
      <span className="font-semibold">Role:</span> {attachment.role}
    </p>
    <p className="text-md text-gray-400 mb-1">
      <span className="font-semibold">Duration:</span> {attachment.duration}
    </p>
    <p className="text-md text-gray-400 mb-2">
      <span className="font-semibold">Location:</span> {attachment.location}
    </p>

    <p className="text-md text-gray-400 mb-2">
      <span className="font-semibold">Project:</span> {attachment.projectTitle}
    </p>
    <p className="text-md text-gray-400 mb-2">
      {attachment.description}
    </p>

    <p className="text-md text-gray-400 mb-2">
      <span className="font-semibold">Technologies:</span> {attachment.technologiesUsed.join(", ")}
    </p>
  </div>


  {/* Correct: only one <a> */}
{/* <Link
    to={attachment.githubLink} // can also be an internal route like "/attachments/1"
    target="_blank"
    className="text-sm text-gray-200 bg-gray-700 hover:bg-gray-600 py-1 px-3 rounded transition-colors duration-200 self-start"
  >
    GitHub
  </Link> */}
 
</div>

  )
}
