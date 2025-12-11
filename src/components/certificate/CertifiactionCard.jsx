export const CertificationCard =({certificate})=>{
return (
    <div className="  border border-white p-5  h-[250px] hover:border-[rgb(10,228,217)] transition">
          <h3 className="text-xl font-medium text-gray-100 mb-2">
            {certificate.title}
          </h3>
          <p className="text-md text-gray-300 mb-3">
            {`${certificate.issuer} - ${certificate.date}`}
          </p>
          <p className="text-md text-gray-300">
          {certificate.description}
          </p>
        </div>
)
}