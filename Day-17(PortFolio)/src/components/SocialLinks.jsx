import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: `https://linkedin.com`,
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: `https://github.com/Kuldeepkdy`,
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: `mailto:kuldeepkdy4@gamil.com`,
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: `/Raja Fees Slip.pdf`,
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((links) => (
          <li
            key={links.id}
            className={
              `flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[10px] rounded-md duration-300` +
              " " +
              links.style
            }
          >
            <a
              href={links.href}
              className="flex justify-between items-center w-full text-white"
              download={links.download}
              target="_blank"
              rel="noreferrer"
            >
              {links.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
