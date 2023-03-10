import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_vb74nol",
        "template_lmcqeut",
        {
          from_name: form.name,
          to_name: "Roqeebah Abdulganiy",
          from_email: form.email,
          to_email: "abdulganiy1624demilade@gmail.com",
          message: form.message,
        },
        "8YTEx27CoW1D86Ksm"
      )
      .then(
        () => {
          setLoading(false);
          toast("Thank you. I will get back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast("Something went wrong");
        }
      );
  };
  return (
    <div className="flex xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween")}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <ToastContainer theme="dark" />
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outlined-none placeholder:text-secondary border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email Address
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="What's your email?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 text-white rounded-lg outlined-none placeholder:text-secondary border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Mesage</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              placeholder="What do you want to say?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 text-white rounded-lg outlined-none placeholder:text-secondary border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
