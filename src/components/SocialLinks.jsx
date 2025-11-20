function SocialLink() {
  return (
   
      <ul className="flex gap-4">
        <li>
          <a
            href="https://github.com/Parisa-Reza"
            target="_blank"
            rel="nooperner noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Github
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/parisa-reza/"
            target="_blank"
            rel="nooperner noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Linkedin
          </a>
        </li>

        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rezaparisa5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Gmail
          </a>
        </li>
      </ul>
    
  );
}

export default SocialLink