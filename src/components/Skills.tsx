function Skills() {
  return (
    <section
      id="skills"
      className="container flex flex-col py-24 justify-center"
    >
      <div className="flex flex-col mb-16">
        <h1 className="text-titleColor text-4xl font-semibold text-center">
          Skills
        </h1>
        <h4 className="text-textColor text-center mt-2 font-medium">
          My technical level
        </h4>
      </div>
      <div className="flex flex-row space-x-12">
        <div className="basis-1/2 bg-containerColor flex flex-col py-10 px-10 rounded-md drop-shadow-sm">
          <h3 className="text-xl text-textColor font-medium tracking-wide text-center">
            Frontend developer
          </h3>

          <div className="grid grid-cols-6 gap-y-4 mt-10">
            <div className="flex space-x-2 col-start-1 col-end-3">
              <i className="bx bxs-badge-check text-titleColor text-xl"></i>
              <div>
                <h3 className="text-titleColor text-xl font-medium">HTML</h3>
                <span className="text-sm">Intermediate</span>
              </div>
            </div>

            <div className="flex space-x-2 col-start-5 col-end-7">
              <i className="bx bxs-badge-check text-titleColor text-xl"></i>
              <div>
                <h3 className="text-titleColor text-xl font-medium">CSS</h3>
                <span className="text-sm">Intermediate</span>
              </div>
            </div>

            <div className="flex space-x-2 col-start-1 col-end-3">
              <i className="bx bxs-badge-check text-titleColor text-xl"></i>
              <div>
                <h3 className="text-titleColor text-xl font-medium">
                  Tailwind
                </h3>
                <span className="text-sm">Intermediate</span>
              </div>
            </div>

            <div className="flex space-x-2 col-start-5 col-end-7">
              <i className="bx bxs-badge-check text-titleColor text-xl"></i>
              <div>
                <h3 className="text-titleColor text-xl font-medium">
                  Javascript
                </h3>
                <span className="text-sm">Intermediate</span>
              </div>
            </div>

            <div className="flex space-x-2 col-start-1 col-end-3">
              <i className="bx bxs-badge-check text-titleColor text-xl"></i>
              <div>
                <h3 className="text-titleColor text-xl font-medium">React</h3>
                <span className="text-sm">Intermediate</span>
              </div>
            </div>

            <div className="flex space-x-2 col-start-5 col-end-7">
              <i className="bx bxs-badge-check text-titleColor text-xl"></i>
              <div>
                <h3 className="text-titleColor text-xl font-medium">
                  Typescript
                </h3>
                <span className="text-sm">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 bg-containerColor flex flex-col py-10 px-10 rounded-md drop-shadow-sm">
          <h3 className="text-xl text-textColor font-medium tracking-wide text-center">
            Backend developer
          </h3>
          <span className="text-center text-xs">(in progress)</span>

          <div className="grid grid-cols-6 gap-y-4 mt-10">
            <div className="flex space-x-2 col-start-1 col-end-3">
              <i className="bx bxs-badge-check text-titleColor text-xl"></i>
              <div className="flex flex-col">
                <h3 className="text-titleColor text-xl font-medium">C#</h3>
                <span className="text-sm">Basic</span>
              </div>
            </div>

            <div className="flex space-x-2 col-start-5 col-end-7">
              <i className="bx bxs-badge-check text-titleColor text-xl"></i>
              <div className="flex flex-col">
                <h3 className="text-titleColor text-xl font-medium">Node Js</h3>
                <span className="text-sm">Basic</span>
              </div>
            </div>

            <div className="flex space-x-2 col-start-1 col-end-3">
              <i className="bx bxs-badge-check text-titleColor text-xl"></i>
              <div className="flex flex-col">
                <h3 className="text-titleColor text-xl font-medium">
                  Firebase
                </h3>
                <span className="text-sm">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
