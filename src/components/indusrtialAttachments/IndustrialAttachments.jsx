import { AttachmentCard } from "./AttachmentCard";

export const IndustrialAttachments = () => {
  const industrialAttachmentList = [
    {
      id: 1,
      companyName: "Lorem Company",
      role: "Lorem",
      duration: "Lorem ipsumt",
      location: "Lorem ipsum dolor sit amet",
      technologiesUsed: [
        "Lorem Ipsum JS",
        "Lorem Ipsum React",
        "Lorem Ipsum Node",
      ],
      projectTitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      githubLink: "https://github.com/lorem-ipsum-project1",
    },
    {
      id: 2,
      companyName: "Ipsum Company",
      role: "ipsum",
      duration: "Lorem ipsumt",
      location: "Lorem ipsum dolor sit amet",
      technologiesUsed: [
        "Lorem Ipsum JS",
        "Lorem Ipsum React",
        "Lorem Ipsum Node",
      ],
      projectTitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      githubLink: "https://github.com/lorem-ipsum-project2",
    },
  ];

  return <div>
     <div className="flex flex-col gap-20 mx-auto px-4 py-12 ">
          <h2 className="text-4xl font-semibold text-gray-200 mb-8 text-center">
         Industrial Attachments
          </h2>
          <div className="flex flex-col gap-10">
            {industrialAttachmentList.map((attachment)=>
              <AttachmentCard key={attachment.id} attachment={attachment}/>
            )}
          </div>
        </div>
  </div>;
};
