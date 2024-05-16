import ProfilePhoto from "../assets/about.jpg";

function About() {
  const handleDownloadCV = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    window.open("../../public/MertUnverCV.pdf", "_blank");
  };

  return (
    <section
      id="about"
      className="container flex flex-col h-screen justify-center items-center"
    >
      <div className="flex flex-col">
        <h1 className="text-titleColor text-4xl font-semibold text-center">
          About Me
        </h1>
        <h4 className="text-textColor text-center mt-2 font-medium">
          My introduction
        </h4>
      </div>
      <div className="flex justify-between mt-14 space-x-28">
        <img src={ProfilePhoto} className="w-92 rounded-3xl" />
        <div className="flex flex-col justify-around">
          <p>
            I was born on September 5, 2001. I completed my high school
            education at TOKİ Anatolian High School in Ankara. Following my high
            school graduation, I earned my degree in Computer Engineering from
            Ankara University after four years, graduating in 2023. Currently, I
            am actively seeking full-time employment as a frontend developer. I
            am highly motivated and committed to self-improvement. I am eagerly
            looking forward to working in a company where I can continuously
            learn new things and contribute effectively.
          </p>

          <button className="w-52" onClick={(e) => handleDownloadCV(e)}>
            Download CV <i className="uil uil-file-alt ml-1"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
