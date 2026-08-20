function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white dark:bg-black transition-colors duration-500"
    >

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-pink-500 font-semibold">
          CONTACT ME
        </p>

        <h2 className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">
          Let's Work{" "}
          <span className="text-pink-500">
            Together
          </span>
        </h2>

        <p className="text-slate-600 dark:text-gray-400 mt-5">
          Have a project or idea? Feel free to contact me.
        </p>

        <form className="mt-10 grid gap-5 text-left">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 border border-pink-200 dark:border-pink-500/30 rounded-xl px-5 py-4 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 border border-pink-200 dark:border-pink-500/30 rounded-xl px-5 py-4 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 border border-pink-200 dark:border-pink-500/30 rounded-xl px-5 py-4 outline-none resize-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
          />

          <button
            type="submit"
            className="bg-pink-500 text-white py-4 rounded-xl font-semibold hover:bg-purple-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;