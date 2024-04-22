import { useState } from "react";
import form from "../../form";
import ContactFormField from "./ContactFormField";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {}
    if (!name) {
      errors.name = "Please enter a name.";
    }
    if (!email) {
      errors.email = "Please enter an email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email.";
    }
    if (!message) {
      errors.message = "Please enter a message.";
    }
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
  
    const data = {
      name,
      email,
      message,
    };
    form
    .post("", data, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        toast.success("Message sent successfully!", {
          theme: "dark",
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }})
      .catch((err) => {
        console.log(err);
      }); 
      return true
  };

  return (
    <div
      name="contact"
      className=" bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            method="POST"
            
            className=" flex flex-col w-full md:w-1/2"
          >
            <ContactFormField 
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              setField={setName}
              error={error}
              setError={setError}
              />
           <ContactFormField 
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              setField={setEmail}
              error={error}
              setError={setError}
              />
              <ContactFormField 
              type="textarea"
              name="message"
              placeholder="Enter your message"
              value={message}
              setField={setMessage}
              error={error}
              setError={setError}
              />
            
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
