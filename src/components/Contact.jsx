import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Message from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:asmabibi9390@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="glass-card relative overflow-hidden">
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-pink-500/20 blur-3xl" />

          <div className="relative">
            <div className="text-center">
              <p className="section-label">Get In Touch</p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Let's build something
                <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  amazing together.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-200">
                Have a project or opportunity in mind? Send me a message.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 max-w-2xl space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-4 font-black text-white shadow-xl shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-pink-500/30"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>

      </div>
      
    </section>
  );
}

export default Contact;