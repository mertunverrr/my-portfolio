import React from "react";

function Footer() {
  return (
    <footer className="h-full bg-titleDarkColor">
      <div className="flex flex-col items-center p-6 space-y-2">
        <h1 className="text-containerColor text-2xl md:text-3xl font-medium tracking-wide">
          Mert Ünver
        </h1>
        <div className="text-bodyColor space-x-4 md:space-x-6 text-lg">
          <a href="https://www.instagram.com/mertunvrrr/" target="_blank">
            <i className="uil uil-instagram hover:text-textColor duration-300"></i>
          </a>
          <a href="https://github.com/mertunverrr" target="_blank">
            <i>
              <i className="uil uil-github-alt hover:text-textColor duration-300"></i>
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/mert-%C3%BCnver-a89807305/"
            target="_blank"
          >
            <i>
              <i className="uil uil-linkedin hover:text-textColor duration-300"></i>
            </i>
          </a>
        </div>
        <span className="text-xs md:text-sm pt-4">
          © mertunverrr. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
