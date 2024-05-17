import emailjs from "@emailjs/browser";
import { useState, useRef, FormEvent } from "react";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [fault, setFault] = useState<boolean>(false);
  const [sendMessage, setSendMessage] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    if (!name || !email || !message) {
      setFault(true);
      return;
    }
    emailjs
      .sendForm(
        "service_kxno5k8",
        "template_e2od2cn",
        form.current,
        "aI9SKgrMXbwiOmIgT"
      )
      .then(
        () => {
          setFault(false);
          setSendMessage(true);
          setName("");
          setMessage("");
          setEmail("");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="container flex flex-col h-full justify-center items-center px-4 lg:px-0 py-10 md:py-24"
    >
      <div className="flex flex-col mb-10 md:mb-14 w-full">
        <h1 className="text-titleColor text-3xl md:text-4xl font-semibold text-center">
          Contact
        </h1>
        <h4 className="text-textColor text-center md:mt-2 font-medium">
          Write me
        </h4>
      </div>
      <form
        className="flex flex-col space-y-8 md:space-y-12 w-full md:w-2/3"
        ref={form}
        onSubmit={(e) => sendEmail(e)}
      >
        <div className="flex flex-col relative items-center">
          <label className="absolute -top-3 left-6 text-sm font-medium bg-bodyColor w-16 text-center">
            Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Mert Ünver"
            className={
              fault
                ? "text-sm md:text-base w-full inline-block bg-containerColor text-titleColor placeholder:text-textColor py-2 md:py-3 px-4 rounded-xl outline-none border-2 border-red-500"
                : "text-sm md:text-base w-full inline-block bg-containerColor text-titleColor placeholder:text-textColor py-2 md:py-3 px-4 rounded-xl outline-none border-2 border-textColor"
            }
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col relative items-center">
          <label className="absolute -top-3 left-6 text-sm font-medium bg-bodyColor w-14 text-center">
            Mail
          </label>
          <input
            name="mail"
            type="email" // "mail" yerine "email" kullanın
            placeholder="mertunverrr@gmail.com"
            className={
              fault
                ? "text-sm md:text-base w-full inline-block bg-containerColor text-titleColor placeholder:text-textColor py-2 md:py-3 px-4 rounded-xl outline-none border-red-500 border-2"
                : "text-sm md:text-base w-full inline-block bg-containerColor text-titleColor placeholder:text-textColor py-2 md:py-3 px-4 rounded-xl outline-none border-textColor border-2"
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col relative  items-center">
          <label className="absolute -top-3 left-6 text-sm font-medium bg-bodyColor w-24 text-center">
            Message
          </label>
          <textarea
            name="message"
            className={
              fault
                ? "text-sm md:text-base w-full h-48 md:h-40 inline-block bg-containerColor text-titleColor placeholder:text-textColor py-2 md:py-3 px-4 rounded-xl outline-none border-red-500 border-2"
                : "text-sm md:text-base w-full h-48 md:h-40 inline-block bg-containerColor text-titleColor placeholder:text-textColor py-2 md:py-3 px-4 rounded-xl outline-none border-textColor border-2"
            }
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <button
            className="md:w-60 flex justify-center text-sm md:text-base py-4 md-py-5 mt-2 md:mt-0"
            type="submit"
          >
            Send Message
            <div className="-rotate-30">
              <i className="uil uil-message ml-2"></i>
            </div>
          </button>
          {sendMessage ? (
            <p className=" text-green-500 font-medium md:text-base text-sm -mt-2">
              Thanks for your messsage.
            </p>
          ) : (
            ""
          )}
        </div>
      </form>
    </section>
  );
}

export default Contact;
