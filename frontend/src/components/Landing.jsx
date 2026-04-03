"use client";
import { useState } from "react";
import logo from "/logo.svg";

const Landing = () => {
  const [role, setRole] = useState(null); // 'writer' | 'reader'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!role) {
      setError("Please select whether you're a writer or a reader.");
      return;
    }
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://scriblr-backend.onrender.com/api/emails",
        {
          method: "POST",
          body: JSON.stringify({ name, email, role }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong. Try again.");
      }

      await response.json();
      setName("");
      setEmail("");
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <div className="flex">
          <img src={logo} alt="Scriblr" className="h-7 mr-1.5" />
          <h1 className="font-bold text-2xl">Scriblr</h1>
        </div>
        <span className="text-xs tracking-widest text-gray-400 uppercase">
          Coming Soon
        </span>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-900 animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-blue-900 uppercase">
            Early Access
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4 max-w-2xl">
          Where great stories find{" "}
          <span className="italic text-blue-900">their audience.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mb-10">
          Scriblr ranks books by{" "}
          <span className="text-gray-800 font-medium">
            who actually finishes them
          </span>{" "}
          — not follower count. Built for writers who deserve to be found, and
          readers who want stories worth their time.
        </p>

        {/* Role selector */}
        <div className="flex gap-3 mb-8 flex-wrap justify-center">
          <button
            type="button"
            onClick={() => setRole("writer")}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-150
              ${
                role === "writer"
                  ? "bg-blue-900 text-white border-blue-900"
                  : "bg-white text-gray-500 border-gray-200 hover:border-blue-900 hover:text-blue-900"
              }`}
          >
            ✍️ I'm a Writer
          </button>
          <button
            type="button"
            onClick={() => setRole("reader")}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-150
              ${
                role === "reader"
                  ? "bg-blue-900 text-white border-blue-900"
                  : "bg-white text-gray-500 border-gray-200 hover:border-blue-900 hover:text-blue-900"
              }`}
          >
            📖 I'm a Reader
          </button>
        </div>

        {/* Role context line */}
        <p
          className={`text-sm text-gray-400 italic mb-6 h-5 transition-opacity duration-200 ${
            role ? "opacity-100" : "opacity-0"
          }`}
        >
          {role === "writer" &&
            "Founding writers get 0% platform fees for 6 months."}
          {role === "reader" &&
            "Be the first to discover stories ranked by who actually finishes them."}
        </p>

        {/* Form / Success */}
        {success ? (
          <div className="w-full max-w-sm border border-gray-100 rounded-xl p-8 shadow-sm text-center">
            <div className="text-3xl mb-3">📬</div>
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
              You're on the list.
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We'll reach out personally when your spot is ready.
              {role === "writer" &&
                " Founding Authors get 0% platform fees for 6 months."}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm flex flex-col gap-3"
          >
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2.5 h-10 border border-gray-200 outline-none text-sm text-black placeholder:text-gray-400 shadow-sm focus:border-blue-900 transition-colors bg-white"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2.5 h-10 border border-gray-200 outline-none text-sm text-black placeholder:text-gray-400 shadow-sm focus:border-blue-900 transition-colors bg-white"
            />

            {error && (
              <p className="text-xs text-red-600 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-10 bg-blue-900 text-white text-sm font-medium px-4 mt-1 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Joining...
                </>
              ) : (
                "Join the waitlist"
              )}
            </button>

            <p className="text-xs text-gray-400 text-center">
              {role === "writer"
                ? "Founding writers get 0% fees for 6 months."
                : "No spam. We'll only email when your access is ready."}
            </p>
          </form>
        )}
      </main>

      {/* Three pillars */}
      <section className="border-t border-gray-100 px-6 py-12">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: "📖",
              title: "Merit over clout",
              body: "Books ranked by completion rate and reading speed — not follower count. Quality rises. Clickbait sinks.",
            },
            {
              icon: "✍️",
              title: "Fan fiction, built in",
              body: "Finish a book and unlock the fan-fiction universe around it. Writers earn passive royalties on every tip.",
            },
            {
              icon: "🌍",
              title: "Community translations",
              body: "Bilingual readers translate books paragraph by paragraph. Global reach, zero cost to the author.",
            },
          ].map((p) => (
            <div key={p.title} className="px-4">
              <div className="text-2xl mb-3">{p.icon}</div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                {p.title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-5 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Scriblr &nbsp;·&nbsp;
        <a
          href="https://x.com/im_telepathic"
          className="hover:text-blue-900 transition-colors"
        >
          X
        </a>
        &nbsp;·&nbsp;
        <a
          href="https://instagram.com/im_telepathic"
          className="hover:text-blue-900 transition-colors"
        >
          Instagram
        </a>
      </footer>
    </div>
  );
};

export default Landing;
