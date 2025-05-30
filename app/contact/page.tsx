import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Contact() {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Let's collaborate on embedded systems, IoT, or ML projects
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:shadow-lg transition-all">
            <EnvelopeIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Me</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Reach out for project inquiries or technical discussions
            </p>
            <Link
              href="mailto:rohitkrtiwari2002@gmail.com"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              rohitkrtiwari2002@gmail.com
            </Link>
          </div>

          {/* Social Links Card */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-8 h-8 text-[#2867B2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <h3 className="text-xl font-semibold">Connect</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://linkedin.com/in/rohitkrtiwari"
                target="_blank"
                className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/rohitkrtiwari"
                target="_blank"
                className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                GitHub
              </Link>
              <Link
                href="https://x.com/RohitTi15563830"
                target="_blank"
                className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Twitter
              </Link>
              <Link
                href="https://www.instagram.com/rohitt___tiwari/"
                target="_blank"
                className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Instagram
              </Link>
              <Link
                href="https://www.quora.com/profile/Rohit-Tiwari-646/"
                target="_blank"
                className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Quora
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-6" action="https://formspree.io/f/meqnpwap" method='POST'>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

    </main>
  );
}