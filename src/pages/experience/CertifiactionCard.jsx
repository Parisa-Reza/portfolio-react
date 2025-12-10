export const CertificationCard =({certificate})=>{
return (
    <div className="bg-[#111]  border border-gray-800 rounded-xl p-5 h-[250px] hover:border-gray-600 transition">
          <h3 className="text-lg font-medium text-gray-100 mb-2">
            {certificate.title}
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            {`${certificate.issuer} - ${certificate.date}`}
          </p>
          <p className="text-sm text-gray-500">
          {certificate.description}
          </p>
        </div>
)
}