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
      className="container flex flex-col h-full justify-center items-center py-24"
    >
      <div className="flex flex-col mb-14 w-full">
        <h1 className="text-titleColor text-4xl font-semibold text-center">
          Contact
        </h1>
        <h4 className="text-textColor text-center mt-2 font-medium">
          Write me
        </h4>
      </div>
      <form
        className="flex flex-col space-y-12  w-2/3"
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
                ? "w-full inline-block bg-containerColor text-titleColor placeholder:text-textColor py-3 px-4 rounded-xl outline-none border-2 border-red-500"
                : "w-full inline-block bg-containerColor text-titleColor placeholder:text-textColor py-3 px-4 rounded-xl outline-none border-2 border-textColor"
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
                ? "w-full inline-block bg-containerColor text-titleColor placeholder:text-textColor py-3 px-4 rounded-xl outline-none border-red-500 border-2"
                : "w-full inline-block bg-containerColor text-titleColor placeholder:text-textColor py-3 px-4 rounded-xl outline-none border-textColor border-2"
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
                ? "w-full h-40 inline-block bg-containerColor text-titleColor placeholder:text-textColor py-3 px-4 rounded-xl outline-none border-red-500 border-2"
                : "w-full h-40 inline-block bg-containerColor text-titleColor placeholder:text-textColor py-3 px-4 rounded-xl outline-none border-textColor border-2"
            }
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <button className="w-60 flex justify-center" type="submit">
            Send Message
            <div className="-rotate-30">
              <i className="uil uil-message ml-2"></i>
            </div>
          </button>
          {sendMessage ? (
            <p className=" text-green-500 font-medium">
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
