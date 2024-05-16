import { useState } from "react";

function Qualification() {
  const [change, setChange] = useState<boolean>(true);

  return (
    <section
      id="qualification"
      className="container flex flex-col py-24 justify-center"
    >
      <div className="flex flex-col mb-16">
        <h1 className="text-titleColor text-4xl font-semibold text-center">
          Qualification
        </h1>
        <h4 className="text-textColor text-center mt-2 font-medium">
          My personal journey
        </h4>
      </div>
      <div className="flex justify-center mb-14">
        <h2
          className="flex justify-center text-xl text-titleColor font-medium cursor-pointer hover:text-titleDarkColor"
          onClick={() => setChange(true)}
        >
          <i className="uil uil-graduation-cap mr-1"></i>
          Education
        </h2>
        <span className="text-xl text-textColor font-medium mx-6">|</span>
        <h2
          className="flex justify-center text-xl text-titleColor font-medium cursor-pointer hover:text-titleDarkColor"
          onClick={() => setChange(false)}
        >
          <i className="uil uil-briefcase mr-1"></i>
          Experiences
        </h2>
      </div>
      {change ? (
        <div className="flex flex-row space-x-10 justify-center">
          <div className="flex ">
            <div className="flex flex-col">
              <h3 className="text-titleColor text-lg font-medium">
                TOKI High School
              </h3>
              <span className="font-medium text-sm">89 / 100</span>
              <span className="text-sm mt-3">
                <i className="uil uil-calender"></i> 2015-2019
              </span>
            </div>
          </div>
          <div className="flex relative">
            <span className="w-3 h-3 bg-textColor rounded-full absolute -left-1.25"></span>
            <span className="w-3 h-3 bg-textColor rounded-full absolute top-20 -left-1.25"></span>
            <span className="w-0.25 h-full bg-titleColor rounded-lg"></span>
          </div>
          <div className="flex mt-20">
            <div className="flex flex-col">
              <h3 className="text-titleColor text-lg font-medium">
                Ankara University
              </h3>
              <span className="font-medium text-sm">89 / 100</span>
              <span className="text-sm mt-3">
                <i className="uil uil-calender"></i> 2015-2019
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row space-x-10 justify-center w-full">
          <div className="flex w-1/2 space-x-10">
            <div className="flex flex-col">
              <h3 className="text-titleColor text-lg font-medium">
                Stratek Stratejik AR-GE
              </h3>
              <span className="font-medium text-sm">
                Intern Frontend Developer
              </span>
              <span className="text-sm mt-3">
                <i className="uil uil-calender"></i> 2022 (30 iş günü)
              </span>
            </div>
            <div className="flex relative">
              <span className="w-3 h-3 bg-textColor rounded-full absolute -left-1.25"></span>
              <span className="w-0.25 h-full bg-titleColor rounded-lg"></span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Qualification;
