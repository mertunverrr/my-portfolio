import ResumartPhoto from "../assets/resumart.png";
import CountriesPhoto from "../assets/countries.png";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="container flex flex-col py-24 justify-center"
    >
      <div className="flex flex-col mb-16">
        <h1 className="text-titleColor text-4xl font-semibold text-center">
          Portfolio
        </h1>
        <h4 className="text-textColor text-center mt-2 font-medium">
          My projects
        </h4>
      </div>
      <div className="grid grid-cols-2 justify-between gap-x-20 gap-y-10">
        <div className="bg-containerColor basis-1/2 pb-8 space-y-6 rounded-lg group drop-shadow-md hover:drop-shadow-lg">
          <div className="cursor-default relative">
            <img
              src={ResumartPhoto}
              alt="project"
              className="rounded-tl-lg rounded-tr-lg group-hover:brightness-50"
            />
            <div className="absolute bottom-20 w-full">
              <div className="flex flex-col text-containerColor text-xl font-medium text-center  opacity-0 group-hover:opacity-100 z-20 space-y-4">
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

          <div className="space-y-1 group-hover:brightness-50">
            <h3 className="text-titleDarkColor font-medium text-lg text-center">
              Resumart
            </h3>
            <p className=" text-textColor mx-8">
              Resumart is a resume creation website. You can create a CV for
              free with your personal information.
            </p>
          </div>
        </div>
        <div className="bg-containerColor basis-1/2 pb-8 space-y-6 rounded-lg group drop-shadow-md hover:drop-shadow-lg">
          <div className="cursor-default relative">
            <img
              src={CountriesPhoto}
              alt="project"
              className="rounded-tl-lg rounded-tr-lg group-hover:brightness-50"
            />
            <div className="absolute bottom-20 w-full">
              <div className="flex flex-col text-containerColor text-xl font-medium text-center  opacity-0 group-hover:opacity-100 z-20 space-y-4">
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

          <div className="space-y-1 group-hover:brightness-50">
            <h3 className="text-titleDarkColor font-medium text-lg text-center">
              Countries API
            </h3>
            <p className=" text-textColor mx-8">
              You can find a country either by filtering or searching.
              Alternatively, you can click on any country to display its
              details. On the details page, you can navigate to other countries
              by clicking on its neighboring states.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-12">
        <div className="bg-containerColor p-5 px-10 rounded-lg drop-shadow-md space-y-1">
          <h3 className="text-titleDarkColor font-medium text-lg text-center">
            GitHub
          </h3>
          <p>
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
