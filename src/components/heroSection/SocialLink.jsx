export function SocialLink() {
  return (
    <ul className="flex gap-4">
      <li>
        <a
          href="https://github.com/Parisa-Reza"
          target="_blank"
          rel="nooperner noreferrer"
          className="text-gray-200 font-normal underline hover:text-[rgb(10,228,217)] "
        >
          Github
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/parisa-reza/"
          target="_blank"
          rel="nooperner noreferrer"
          className="text-gray-200  font-normal underline hover:text-[rgb(10,228,217)] "
        >
          Linkedin
        </a>
      </li>

      <li>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rezaparisa5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200  font-normal underline hover:text-[rgb(10,228,217)] "
        >
          Gmail
        </a>
      </li>
    </ul>
  );
}

