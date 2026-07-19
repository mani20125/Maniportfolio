import { useState } from "react";
import GradientText from "./GradientText";
import ShinyText from "./ShinyText";
import Galaxy from "./Galaxy";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);
      setSuccess("");
      setError("");

      const response = await fetch(
        "https://maniportfolio-r44t.onrender.com/api/Contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      setSuccess(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      setError("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  return (

    <section
      id="contact"
      className="relative min-h-screen flex items-center py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Galaxy />
      </div>
      <div className="absolute inset-0 bg-transparent z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto ">

        {/* Heading */}

        <div className="text-center mb-16">

          <GradientText
            colors={["#a855f7", "#c084fc", "#ffffff", "#a855f7"]}
            animationSpeed={4}
            showBorder={false}
            className="font-semibold mb-4 text-lg"
          >
            CONTACT
          </GradientText>

          <ShinyText
            text="Let’s Work Together"
            className="font-bold mb-6 text-4xl md:text-5xl"
            color="#a855f7"
            shineColor="#ffffff"
            speed={3.5}
          />


          <p className="text-gray-400 text-lg">
            Have a project idea or opportunity? Feel free to contact me.
          </p>

        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="grid gap-6">

          {/* Name */}

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-[#111827] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500"
          />

          {/* Email */}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full bg-[#111827] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500"
          />

          {/* Message */}

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full bg-[#111827] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 resize-none"
          ></textarea>

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl w-fit disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-500 mt-4">
              {success}
            </p>
          )}

          {error && (
            <p className="text-red-500 mt-4">
              {error}
            </p>
          )}

        </form>

      </div>

    </section>

  )
}

export default Contact