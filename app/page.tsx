import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import { ArrowRightIcon, CodeBracketIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/20/solid'
import { ArrowUpRightIcon, CodeBracketSquareIcon, BeakerIcon } from '@heroicons/react/24/outline' // Use this as GitHub icon


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
              src="/images/photo 3.jpeg"  // Replace with your image path
              alt="Rohit Tiwari"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            {/* <span className="text-neutral-900 dark:text-white">Hello, I'm </span> */}
            <span className="text-blue-600 dark:text-blue-400">Rohit Tiwari</span>
          </h1>
          <p className="text-xl italic text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            "Systems Engineer and Applied ML Researcher"
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="about mb-20">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="max-w-4xl">
            <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300">
              I am a systems engineer and applied machine learning researcher working
              across embedded connectivity, developer tooling, and resource-efficient
              language technologies.
            </p>

            <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
              My interests center on reliable systems, applied research, and
              communicating complex engineering decisions with precision.
            </p>
          </div>

          {/* Current role — intentionally high level */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <BriefcaseIcon className="h-6 w-6 shrink-0 text-blue-600 dark:text-blue-400" />

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Member of Technical Staff — Silicon Labs
                  </h3>

                  <span className="shrink-0 text-sm text-neutral-500">
                    2026–Present
                  </span>
                </div>

                <p className="mt-1 text-sm text-neutral-500">
                  Wi-Fi SDK · Hyderabad, India
                </p>

                <p className="mt-4 max-w-3xl leading-7 text-neutral-700 dark:text-neutral-300">
                  Working on developer tooling and AI-assisted engineering workflows
                  for embedded connectivity platforms.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Embedded Wi-Fi",
                    "SDK Tooling",
                    "Applied AI",
                    "Developer Experience",
                  ].map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-white px-3 py-1 text-xs text-neutral-600 ring-1 ring-neutral-200 dark:bg-neutral-950 dark:text-neutral-300 dark:ring-neutral-800"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured research — full width */}
          <article className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <BeakerIcon className="mt-1 h-6 w-6 shrink-0 text-blue-600 dark:text-blue-400" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Featured Research
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">
                    Low-Resource Hindi Language Modeling
                  </h3>
                </div>
              </div>

              <a
                href="https://github.com/rohitkrtiwari/Low-Resource-NLP-Indian-Language-LLMs"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-neutral-500 transition hover:text-blue-500"
                aria-label="View Low-Resource Hindi Language Modeling on GitHub"
              >
                <ArrowUpRightIcon className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-6 max-w-4xl">
              <p className="font-medium leading-7 text-neutral-800 dark:text-neutral-200">
                Can linguistically informed tokenization improve language modeling
                for morphologically rich, low-resource languages?
              </p>

              <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                Compared BPE and morpheme-based tokenization using comparable GPT-2
                configurations trained on a 100 MB Hindi corpus. The experiment
                evaluated how linguistic decomposition affects perplexity and
                vocabulary coverage under limited computational resources.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900">
                <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  18.7
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                  Morpheme-model perplexity
                </p>
              </div>

              <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900">
                <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  24.3
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                  BPE-model perplexity
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/30">
                <p className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                  23%
                </p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  Lower perplexity in the evaluated setup
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "PyTorch",
                "Transformers",
                "Hindi NLP",
                "Tokenization",
                "Experimental Evaluation",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>

          {/* Equal-width supporting sections */}
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            {/* Engineering projects */}
            <div className="h-full rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
              <h3 className="flex items-center text-xl font-semibold text-neutral-900 dark:text-white">
                <CodeBracketIcon className="mr-2 h-5 w-5" />
                Selected Engineering
              </h3>

              <div className="mt-6 divide-y divide-neutral-200 dark:divide-neutral-800">
                <article className="pb-6">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-semibold text-neutral-900 dark:text-white">
                      Real-Time Vehicle Tracking System
                    </h4>

                    <a
                      href="https://github.com/rohitkrtiwari/real-time-vehicle-tracking-system"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-neutral-500 transition hover:text-blue-500"
                      aria-label="View Vehicle Tracking System on GitHub"
                    >
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    Designed an end-to-end GPS tracking platform integrating
                    embedded hardware, cellular communication, location history,
                    geofencing, and map-based visualization.
                  </p>
                </article>

                <article className="py-6">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-semibold text-neutral-900 dark:text-white">
                      ISSAT — ISRO Satellite Tracker
                    </h4>

                    <a
                      href="https://github.com/rohitkrtiwari/ISSAT-ISRO-Satellite-Tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-neutral-500 transition hover:text-blue-500"
                      aria-label="View ISSAT on GitHub"
                    >
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    Built a real-time ISRO satellite-tracking application with
                    orbital visualization and external satellite-data integration.
                  </p>
                </article>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                View all projects
                <ArrowRightIcon className="ml-1 h-3 w-3" />
              </Link>
            </div>

            {/* Education */}
            <div className="h-full rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
              <h3 className="flex items-center text-xl font-semibold text-neutral-900 dark:text-white">
                <AcademicCapIcon className="mr-2 h-5 w-5" />
                Education &amp; Teaching
              </h3>

              <div className="mt-6 divide-y divide-neutral-200 dark:divide-neutral-800">
                <div className="pb-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-semibold text-neutral-900 dark:text-white">
                      M.Tech, Computer Science
                    </h4>

                    <span className="shrink-0 text-sm text-neutral-500">
                      2024–Present
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Indian Institute of Technology Jammu
                  </p>

                  <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    Specialization in Data Science and Machine Learning. Teaching
                    Assistant for the DBMS Laboratory.
                  </p>
                </div>

                <div className="py-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-semibold text-neutral-900 dark:text-white">
                      B.Tech, Computer Science
                    </h4>

                    <span className="shrink-0 text-sm text-neutral-500">
                      2021–2024
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Institute of Engineering &amp; Technology, Lucknow
                  </p>
                </div>

                <div className="py-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-semibold text-neutral-900 dark:text-white">
                      Diploma, Electronics &amp; Communication
                    </h4>

                    <span className="shrink-0 text-sm text-neutral-500">
                      2018–2021
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Pusa Institute of Technology, Delhi
                  </p>
                </div>
              </div>

              <a
                href="https://drive.google.com/file/d/1ik8ypcKdwgFqjrOZMNL6YA2KbkWWA3_P/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                Resume / CV
                <ArrowUpRightIcon className="ml-1 h-3 w-3" />
              </a>
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