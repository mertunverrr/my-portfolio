import Photo from "./../assets/about.jpg";
import HandEmo from "../assets/hand.svg";
import Scrool from "../assets/scroll.svg";

function Home() {
  return (
    <section className="container flex flex-col h-screen">
      <div className="flex items-center justify-around space-x-32 h-screen">
        <div className="text-titleColor text-2xl flex flex-col space-y-6">
          <i className="uil uil-instagram cursor-pointer hover:text-titleDarkColor"></i>
          <i className="uil uil-github-alt cursor-pointer hover:text-titleDarkColor"></i>
          <i className="uil uil-linkedin cursor-pointer hover:text-titleDarkColor"></i>
        </div>
        <div className="flex flex-col">
          <h1 className="text-titleColor text-6xl font-semibold flex">
            Mert Ünver <img src={HandEmo} className="ml-4 w-12" />
          </h1>
          <div className="flex items-center my-5">
            <hr className="w-16 border-textColor" />
            <h3 className="text-titleDarkColor ml-2.5 text-lg">
              Frontend Developer
            </h3>
          </div>
          <p className="text-base">
            I'm frontend developer based in Ankara, and i am very passionate and
            dedicated to my work.
          </p>
          <button className="w-44 mt-12">
            Say Hello
            <i className="uil uil-message ml-3"></i>
          </button>
        </div>
        <div>
          <img
            src={Photo}
            className="w-120 border-8 border-textColor border-solid animate-profileAnim"
          />
        </div>
      </div>
      <div className="animate-bounceMouse -mt-32 ml-32 flex cursor-default">
        <img src={Scrool} className="w-8 " />
        <span className="text-sm items-center flex ml-2 font-medium text-titleColor">
          Scroll down <i className="uil uil-arrow-down text-xl ml-0.5"></i>
        </span>
      </div>
    </section>
  );
}

export default Home;
