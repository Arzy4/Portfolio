
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover & Plan",
    description:
      "Understanding the problem, identifying requirements, and planning the application's architecture before development.",
  },
  {
    number: "02",
    title: "Develop & Test",
    description:
      "Building responsive interfaces and secure APIs while testing functionality, debugging issues, and validating results.",
  },
  {
    number: "03",
    title: "Refine & Deliver",
    description:
      "Improving usability, performance, and code quality to create reliable applications ready for real-world use.",
  },
];

export default function MyProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0A1628] py-20 text-[#F8FAFC] sm:py-28"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4196CE] shadow-[0_0_15px_#4196CE]" />

          <p className="text-xs uppercase tracking-[0.3em] text-[#4196CE] font-inter font-[500]">
            02 / My Process
          </p>
        </div>

        {/* Section heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="font-space-grotesk font-[700] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            HERE&apos;S HOW{" "}
            <span className="text-[#4196CE]">I BUILD.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#C6CDD5] font-outfit font-[400]">
            Every project starts with a problem. Here&apos;s how I turn
            ideas into functional software solutions.
          </p>
        </div>

        {/* Process cards */}
        <div className="relative mx-auto max-w-[1150px]">

          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4196CE]/10 blur-[100px]"
          />

          {/* Connecting curves - desktop */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full lg:block"
            viewBox="0 0 1150 520"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M300 100 C360 -20, 470 -10, 510 20"
              stroke="#4196CE"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <circle
              cx="300"
              cy="100"
              r="8"
              stroke="#4196CE"
              strokeWidth="2.5"
            />

            <circle
              cx="510"
              cy="20"
              r="8"
              stroke="#4196CE"
              strokeWidth="2.5"
            />

            <path
              d="M700 250 C840 190, 885 235, 845 335 C815 405, 950 390, 920 315"
              stroke="#4196CE"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <circle
              cx="700"
              cy="250"
              r="8"
              stroke="#4196CE"
              strokeWidth="2.5"
            />

            <circle
              cx="920"
              cy="315"
              r="8"
              stroke="#4196CE"
              strokeWidth="2.5"
            />
          </svg>

          <div className="relative grid gap-6 lg:h-[520px] lg:grid-cols-3 lg:gap-4">

            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`
                  group relative z-10 flex min-h-[380px] flex-col
                  rounded-[24px] border border-[#3562A2]/60
                  bg-[#10253D] p-8
                  shadow-[0_0_40px_rgba(65,150,206,0.2)]
                  sm:min-h-[420px] sm:p-10
                  lg:absolute lg:w-[35%]
                  ${
                    index === 0
                      ? "lg:left-0 lg:top-[75px] lg:-rotate-[5deg]"
                      : index === 1
                      ? "lg:left-[32.5%] lg:top-0 lg:rotate-[4deg]"
                      : "lg:right-0 lg:top-[75px] lg:-rotate-[4deg]"
                  }
                `}
              >
                {/* Step number */}
                <span className="font-space-grotesk font-[300] text-7xl tracking-tight text-[#4196CE] sm:text-8xl">
                  {step.number}
                </span>

                {/* Card content */}
                <div className="mt-auto">
                  <div className="mb-5 h-[2px] w-12 bg-[#4196CE] transition-all duration-500 group-hover:w-20" />

                  <h3 className="font-space-grotesk font-[600] text-2xl text-white sm:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#C6CDD5] sm:text-base font-outfit font-[400]">
                    {step.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <ArrowUpRight
                  aria-hidden="true"
                  size={22}
                  className="absolute right-8 top-8 text-[#4196CE]/50 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#4196CE]"
                />
              </article>
            ))}

          </div>
        </div>

        {/* Bottom caption */}
        <p className="mx-auto mt-16 max-w-2xl text-center text-sm leading-7 text-[#C6CDD5] font-outfit font-[400]">
          A thoughtful process, continuous learning, and attention to detail
          are at the heart of how I approach software development.
        </p>

      </div>
    </section>
  );
}
