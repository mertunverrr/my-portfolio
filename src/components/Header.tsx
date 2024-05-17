function Header() {
  return (
    <header className="w-full top-0 left-0 hidden md:flex md:fixed z-50 bg-containerColor px-4 lg:px-0  pt-6 pb-4 text-titleColor drop-shadow-sm">
      <nav className="container flex justify-between items-center">
        <a href="index.html" className="font-semibold tracking-wider text-lg">
          Mert
        </a>
        <div>
          <ul className="flex md:space-x-6 lg:space-x-10 text-sm">
            <li>
              <a href="#home" className="font-medium hover:text-titleDarkColor">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-medium hover:text-titleDarkColor"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#qualification"
                className="font-medium hover:text-titleDarkColor"
              >
                Qualification
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="font-medium hover:text-titleDarkColor"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="font-medium hover:text-titleDarkColor"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-medium  hover:text-titleDarkColor"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
