import { useState } from "react";

function Qualification() {
  const [change, setChange] = useState<boolean>(true);

  return (
    <section
      id="qualification"
      className="container flex flex-col px-4 lg:px-0 py-10 md:py-24 justify-center"
    >
      <div className="flex flex-col mb-8 md:mb-16">
        <h1 className="text-titleColor text-3xl md:text-4xl font-semibold text-center">
          Qualification
        </h1>
        <h4 className="text-textColor text-center md:mt-2 font-medium">
          My personal journey
        </h4>
      </div>
      <div className="flex justify-center mb-10 md:mb-14">
        <h2
          className="flex justify-center text-lg md:text-xl text-color font-medium cursor-pointer hover:text-titleDarkColor"
          onClick={() => setChange(true)}
        >
          <i className="uil uil-graduation-cap mr-1"></i>
          Education
        </h2>
        <span className="text-lg md:text-xl text-textColor font-medium mx-6">
          |
        </span>
        <h2
          className="flex justify-center text-lg md:text-xl text-textColor font-medium cursor-pointer hover:text-titleDarkColor"
          onClick={() => setChange(false)}
        >
          <i className="uil uil-briefcase mr-1"></i>
          Experiences
        </h2>
      </div>
      {change ? (
        <div className="relative flex flex-col md:flex-row md:space-x-10 justify-center ml-10 md:ml-0">
          <div className="flex ">
            <div className="flex flex-col">
              <h3 className="text-titleColor text-base md:text-lg font-medium">
                TOKI High School
              </h3>
              <span className="font-medium text-sm">89 / 100</span>
              <span className="text-xs md:text-md mt-1 md:mt-3">
                <i className="uil uil-calender"></i> 2015-2019
              </span>
            </div>
          </div>
          <div className="flex -left-6 md:left-0 top-1.5 absolute md:relative">
            <span className="w-3 h-3 bg-textColor rounded-full absolute -left-1.25"></span>
            <span className="w-3 h-3 bg-textColor rounded-full absolute top-23 -left-1.25"></span>
            <span className="w-0.25 h-38 md:h-full bg-titleColor rounded-lg"></span>
          </div>
          <div className="flex mt-7 md:mt-20">
            <div className="flex flex-col">
              <h3 className="text-titleColor text-base md:text-lg font-medium">
                Ankara University
              </h3>
              <span className="font-medium text-sm">89 / 100</span>
              <span className="text-xs md:text-sm mt-1 md:mt-3">
                <i className="uil uil-calender"></i> 2015-2019
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col md-flex-row md:space-x-10 md:items-center w-full">
          <div className="flex md:w-1/2 md:space-x-10 ml-10 md:ml-0 relative">
            <div className="flex flex-col">
              <h3 className="text-titleColor text-base md:text-lg font-medium">
                Stratek Stratejik AR-GE
              </h3>
              <span className="font-medium text-sm">
                Intern Frontend Developer
              </span>
              <span className="text-xs md:text-sm mt-1 md:mt-3">
                <i className="uil uil-calender"></i> 2022 (30 iş günü)
              </span>
            </div>
            <div className="flex absolute md:relative -left-6 md:left-0 top-2">
              <span className="w-3 h-3 bg-textColor rounded-full absolute -left-1.25"></span>
              <span className="w-0.25 h-14 md:h-full bg-titleColor rounded-lg"></span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Qualification;
