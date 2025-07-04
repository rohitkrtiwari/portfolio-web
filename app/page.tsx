import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import { ArrowRightIcon, CodeBracketIcon, AcademicCapIcon } from '@heroicons/react/20/solid'
import { ArrowUpRightIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline' // Use this as GitHub icon


// import { AcademicCapIcon, CodeBracketIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* Hero Section */}
      <div className="pt-16 pb-12 text-center">
        <div className="flex flex-col items-center">
          {/* Passport photo with modern framing */}
          <div className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-lg ring-2 ring-blue-500/30">
            <img
              src="/images/photo.png"  // Replace with your image path
              alt="Rohit Tiwari"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="text-neutral-900 dark:text-white">Hello, I'm </span>
            <span className="text-blue-600 dark:text-blue-400">Rohit Tiwari</span>
          </h1>
          <p className="text-xl italic text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            "Debugging code is my version of therapy—with occasional screaming."
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="about mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-6">
            {`I am an Embedded Systems Developer currently pursuing my Master's at IIT Jammu, with a passion for creating efficient, real-time solutions and exploring machine learning applications.`}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Column - Reverse Chronological */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <AcademicCapIcon className="w-5 h-5 mr-2" />
                Education
              </h3>

              <ul className="space-y-4">
                <li>
                  <div className="flex justify-between">
                    <strong>M.Tech Computer Science</strong>
                    <span className="text-sm text-neutral-500">2024-Present</span>
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    • Indian Institute of Technology, Jammu (CGPA: 8.34)
                    <br />• Specializing in Data Science and Machine Learning
                    <br />• Teaching Assistant for DBMS Lab
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <strong>B.Tech Computer Science</strong>
                    <span className="text-sm text-neutral-500">2021-2024</span>
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    • Institute of Engineering & Technology, Lucknow (CGPA: 7.81)
                    <br />• Relevant Coursework: DSA, OOP, Computer Networks
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <strong>Diploma in ECE</strong>
                    <span className="text-sm text-neutral-500">2018-2021</span>
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    • Pusa Institute of Technology, Delhi (89%)
                    <br />• Foundation in hardware/software integration
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="https://drive.google.com/file/d/1ik8ypcKdwgFqjrOZMNL6YA2KbkWWA3_P/view?usp=sharing"
                  className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Resume / CV
                  <ArrowRightIcon className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>

            {/* Projects Column - Prioritized */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CodeBracketIcon className="w-5 h-5 mr-2" />
                Featured Projects
              </h3>

              <ul className="space-y-4">
                <li>
                  <div className="flex justify-between items-start">
                    <strong>Low-Resource Hindi Language Modeling</strong>
                    <a
                      href="https://github.com/rohitkrtiwari/Low-Resource-NLP-Indian-Language-LLMs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-neutral-500 hover:text-blue-500 transition hover:underline"
                      aria-label="GitHub repository"
                    >
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    • Developed custom tokenizers for Hindi NLP tasks
                    <br />• Optimized models for limited computational resources
                    <br />• Techniques: Subword tokenization, Transformer architectures
                  </div>
                </li>

                <li>
                  <div className="flex justify-between items-start">
                    <strong>Real-Time Vehicle Tracking System</strong>
                    <a
                      href="https://github.com/rohitkrtiwari/real-time-vehicle-tracking-system"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-neutral-500 hover:text-blue-500 transition hover:underline"
                      aria-label="GitHub repository"
                    >
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    • Hardware-software integration (GPS/GSM + ESP32)
                    <br />• Web app with Mapbox visualization
                    <br />• ThingSpeak server for data analytics
                  </div>
                </li>

                <li>
                  <div className="flex justify-between items-start">
                    <strong>ISSAT - ISRO Satellite Tracker</strong>
                    <a
                      href="https://github.com/rohitkrtiwari/ISSAT-ISRO-Satellite-Tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-neutral-500 hover:text-blue-500 transition hover:underline"
                      aria-label="GitHub repository"
                    >
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    • 3D/2D visualization of satellite orbits
                    <br />• Integrated ISRO and N2YO APIs
                    <br />• Flask backend with MySQL database
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <Link
                  href="/projects"
                  className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View all projects
                  <ArrowRightIcon className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Posts Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          Latest Articles
        </h2>

        <BlogPosts limit={3} />
      </section>
    </div>
  )
}