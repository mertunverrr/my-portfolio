import Photo from "./../assets/about.jpg";
import HandEmo from "../assets/hand.svg";
import Scrool from "../assets/scroll.svg";

function Home() {
  return (
    <section
      id="home"
      className="md:container flex flex-col px-4 lg:px-0 pt-2  md:pt-56"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-around md:space-x-10 lg:space-x-32 ">
        <div className="text-titleColor text-2xl flex md:flex-col space-x-6 md:space-x-0 lg:space-y-6 mt-6 md:mt-0">
          <a href="https://www.instagram.com/mertunvrrr/" target="_blank">
            <i className="uil uil-instagram cursor-pointer hover:text-titleDarkColor"></i>
          </a>

          <a href="https://github.com/mertunverrr" target="_blank">
            <i className="uil uil-github-alt cursor-pointer hover:text-titleDarkColor"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mert-%C3%BCnver-a89807305/"
            target="_blank"
          >
            <i className="uil uil-linkedin cursor-pointer hover:text-titleDarkColor"></i>
          </a>
        </div>
        <div className="flex flex-col mt-6 md:mt-0">
          <h1 className="text-titleColor text-3xl md:text-5xl lg:text-6xl font-semibold flex justify-center md:justify-normal">
            Mert Ünver
            <img
              src={HandEmo}
              className="ml-2 md:ml-3 lg:ml-4 w-7 md:w-10 lg:w-12"
            />
          </h1>
          <div className="flex md:items-center my-1 md:my-4 lg:my-5 justify-center md:justify-normal">
            <hr className="w-16 border-textColor hidden md:flex" />
            <h3 className="text-titleDarkColor md:ml-2.5 font-medium md:font-normal text-sm md:text-lg flex ">
              Frontend Developer
            </h3>
          </div>
          <p className="mt-5 md:mt-0 text-sm md:text-base">
            I'm frontend developer based in Ankara, and i am very passionate and
            dedicated to my work.
          </p>
          <button
            className="md:w-44 mt-8 md:mt-12 text-sm md:text-base py-4 md:py-5"
            onClick={() => (window.location.href = "#contact")}
          >
            Say Hello
            <i className="uil uil-message ml-3"></i>
          </button>
        </div>
        <div>
          <img
            src={Photo}
            className="w-64 md:w-96 h-92 md:h-auto lg:w-120 border-8 border-textColor border-solid animate-profileAnim"
          />
        </div>
      </div>
      <div className="animate-bounceMouse mt-24 ml-32 lg:flex cursor-default hidden">
        <img src={Scrool} className="w-8 " />
        <span className="text-sm items-center flex ml-2 font-medium text-titleColor">
          Scroll down <i className="uil uil-arrow-down text-xl ml-0.5"></i>
        </span>
      </div>
    </section>
  );
}

export default Home;
