import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };
  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch("http://localhost:5000/api/contact", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),

    });

    const data = await response.json();

    alert(data.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {

    alert("Something went wrong");

  }

};

  return (

    <section id="contact" className="w-full py-24 px-6 bg-[#0B0F19]">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-purple-400 font-semibold mb-4">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Work Together
          </h2>

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
            className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl w-fit"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>

  )
}

export default Contact