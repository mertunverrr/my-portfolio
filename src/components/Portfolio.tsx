import ResumartPhoto from "../assets/resumart.png";
import CountriesPhoto from "../assets/countries.png";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="container flex flex-col px-4 lg:px-0 py-10 md:py-24 justify-center"
    >
      <div className="flex flex-col mb-8 md:mb-16">
        <h1 className="text-titleColor text-3xl md:text-4xl font-semibold text-center">
          Portfolio
        </h1>
        <h4 className="text-textColor text-center md:mt-2 font-medium">
          My projects
        </h4>
      </div>
      <div className="grid md:grid-cols-2 md:justify-between gap-y-8 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-10">
        <div className="bg-containerColor basis-1/2 pb-8 space-y-6 rounded-lg group drop-shadow-md hover:drop-shadow-lg">
          <div className="cursor-default relative">
            <img
              src={ResumartPhoto}
              alt="project"
              className="rounded-tl-lg rounded-tr-lg lg:group-hover:brightness-50"
            />
            <div className="absolute bottom-20 w-full">
              <div className="hidden lg:flex flex-col text-containerColor text-xl font-medium text-center  opacity-0 group-hover:opacity-100 z-20 space-y-4">
                <a
                  href="https://resumart.netlify.app/"
                  target="_blank"
                  className="underline tracking-wide underline-offset-4"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/mertunverrr/resumart"
                  target="_blank"
                  className="underline tracking-wide underline-offset-4"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-1 lg:group-hover:brightness-50">
            <h3 className="text-titleDarkColor font-medium text-base md:text-lg text-center">
              Resumart
            </h3>
            <p className=" text-textColor text-sm md:text-base mx-8">
              Resumart is a resume creation website. You can create a CV for
              free with your personal information.
            </p>
            <div className="flex flex-row justify-between lg:hidden text-textColor text-base md:text-lg font-semibold px-8 py-2 ">
              <a
                href="https://resumart.netlify.app/"
                target="_blank"
                className="underline tracking-wide underline-offset-4"
              >
                View Project
              </a>
              <a
                href="https://github.com/mertunverrr/resumart"
                target="_blank"
                className="underline tracking-wide underline-offset-4"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="bg-containerColor basis-1/2 pb-8 space-y-6 rounded-lg group drop-shadow-md hover:drop-shadow-lg">
          <div className="cursor-default relative">
            <img
              src={CountriesPhoto}
              alt="project"
              className="rounded-tl-lg rounded-tr-lg lg:group-hover:brightness-50"
            />
            <div className="absolute bottom-20 w-full">
              <div className="hidden md:flex flex-col text-containerColor text-xl font-medium text-center  opacity-0 md:group-hover:opacity-100 z-20 space-y-4">
                <a
                  href="https://findcountriesapi.netlify.app/"
                  target="_blank"
                  className="underline tracking-wide underline-offset-4"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/mertunverrr/countries-api"
                  target="_blank"
                  className="underline tracking-wide underline-offset-4"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-1 lg:group-hover:brightness-50">
            <h3 className="text-titleDarkColor font-medium text-base md:text-lg text-center">
              Countries API
            </h3>
            <p className=" text-textColor text-sm md:text-base mx-8">
              You can find a country either by filtering or searching.
              Alternatively, you can click on any country to display its
              details. On the details page, you can navigate to other countries
              by clicking on its neighboring states.
            </p>
            <div className="flex flex-row justify-between lg:hidden text-textColor text-base font-semibold px-8 py-2 ">
              <a
                href="https://findcountriesapi.netlify.app/"
                target="_blank"
                className="underline tracking-wide underline-offset-4"
              >
                View Project
              </a>
              <a
                href="https://github.com/mertunverrr/countries-api"
                target="_blank"
                className="underline tracking-wide underline-offset-4"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 md:mt-12">
        <div className="bg-containerColor p-4 md:p-5 px-8 md:px-10 rounded-lg drop-shadow-md space-y-1">
          <h3 className="text-titleDarkColor font-medium text-base md:text-lg text-center">
            GitHub
          </h3>
          <p className="text-sm md:text-base">
            You can visit my
            <a
              href="https://github.com/mertunverrr"
              target="_blank"
              className="text-titleDarkColor font-medium underline underline-offset-2 mx-1.5"
            >
              GitHub
            </a>
            profile for more.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
