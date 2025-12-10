import { CertificationCard } from "./CertifiactionCard";

export const Certifications = () => {

 const certificateList = [
  {
    id: 1,
    title: "Certificate 1",
    issuer: "Lorem Academy",
    date: "2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
  },
  {
    id: 2,
    title: "Certificate 2",
    issuer: "Ipsum Institute",
    date: "2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam."
  },
  {
    id: 3,
    title: "Certificate 3",
    issuer: "Dolor University",
    date: "2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit."
  },
  {
    id: 4,
    title: "Certificate 4",
    issuer: "Sit Amet Center",
    date: "2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident."
  },
];


  return (
    <div className="flex flex-col mx-auto px-4 py-12 ">
      <h2 className="text-2xl font-semibold text-gray-200 mb-8 text-center">
        Certifications
      </h2>
      <div>
        {certificateList.map((certificate)=>
          <CertificationCard key={certificate.id} certificate={certificate}/>
        )}
      </div>
    </div>
  );
};



