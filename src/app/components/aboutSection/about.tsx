import Image from "next/image";
import {
  MapPin,
  CheckCircle2,
  Code2,
  Layers3,
  Wrench,
  GraduationCap,
  FolderCode,
} from "lucide-react";

const languages = [
  "HTML",
  "CSS",
  "Javascript",
];

const frontend = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
];

const backend = [
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Prisma ORM",
];

const developmentTools = [
  "Visual Studio Code",
  "Postman",
  "Swagger",
  "pgAdmin 4",
];

const projectHighlights = [
  "VOLTRA · EV Charging Platform",
  "FinTrack · Finance API",
  "RevoShop · E-commerce",
];

type InfoListProps = {
  title: string;
  items: string[];
  icon: React.ReactNode;
};

function InfoList({ title, items, icon }: InfoListProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center gap-3">
        <span className="text-[#4196CE]">{icon}</span>
        <h3 className="text-sm font-space-grotesk font-[600] uppercase tracking-wide text-white text-center">
          {title}
        </h3>
      </div>

      <div className="h-px w-full bg-[#3562A2]" />

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-[#C6CDD5] font-outfit font-[400]"
          >
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-[#4196CE]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0A1628] py-16 text-[#F8FAFC] sm:py-24 scroll-mt-24"
    >
      <div className="relative mx-auto max-w-[1440px] px-10 md:px-10 lg:px-16">

        {/* Section label */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4196CE] shadow-[0_0_15px_#4196CE]" />

          <p className="text-xs uppercase tracking-[0.3em] text-[#4196CE] font-inter font-[500]">
            04 / Who Am I
          </p>
        </div>

        {/* Introduction and portrait */}
        <div className="grid gap-4 lg:grid-cols-[430px_minmax(0,1fr)] lg:gap-4">

          {/* LEFT: Profile image */}
          <div className="relative mx-auto w-full max-w-[400px] lg:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#3562A2]/50">
              <Image
                src="/about/about-profile.jpeg"
                alt="Robby Arzy"
                fill
                sizes="(max-width: 1024px) 90vw, 430px"
                className="object-cover object-top"
              />
            </div>

            {/* Image caption */}
            <div className="mt-3 rounded-md bg-[#152D47] px-4 py-3 text-center">
              <p className="text-xs font-inter font-[600] uppercase tracking-wide text-white">
                Engineer by education. Developer by passion.
              </p>
            </div>
          </div>

          {/* RIGHT: About introduction */}
          <div className="flex h-full flex-col justify-center gap-6">

            <h2 className="font-space-grotesk font-[700] text-center text-4xl tracking-tight text-white sm:text-5xl lg:text-left">
              <span className="text-[#4196CE]">BEYOND</span> THE CODE
            </h2>

            {/* About description card */}
            <div className="mt-3 rounded-xl bg-[#152D47] p-6 sm:p-8">

              <div className="space-y-5 text-sm leading-7 text-[#C6CDD5] sm:text-base sm:leading-8">

                <p className="font-space-grotesk font-[600] text-white text-center lg:text-justify">
                  Engineering taught me how to think.
                  Software development gave me another
                  way to build.
                </p>

                <p className="text-justify font-outfit font-[400]">
                  I'm an Electrical Engineering graduate
                  currently transitioning into Software
                  Engineering. My passion for solving
                  problems led me to explore software
                  development, where I discovered a new
                  way to turn ideas into practical
                  digital solutions.
                </p>

                <p className="text-justify font-outfit font-[400]">
                  Through RevoU's Full Stack Software
                  Engineering Bootcamp and hands-on
                  projects, I've gained experience
                  building responsive web interfaces,
                  REST APIs, authentication systems,
                  and database-driven applications.
                </p>

                <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#4196CE]" />

                    <p className="text-md text-[#C6CDD5] font-inter font-[400]">
                    Surabaya, Indonesia
                    </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Skills, Tech Stack, Journey and Projects */}
        <div className="mt-20">

            <div className="mb-10 flex items-center gap-4">
                <h2 className="text-xs font-inter font-[600] uppercase tracking-[0.3em] text-[#4196CE]">
                Skills & Background
                </h2>

                <div className="h-px flex-1 bg-[#3562A2]/60" />
            </div>

            <div className="grid gap-8 lg:grid-cols-3">

                {/* LEFT: My Skills and Tech Stack */}
                <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
                    <InfoList
                        title="Programming Languages"
                        items={languages}
                        icon={<Code2 size={20} />}
                    />

                    <InfoList
                        title="Frontend Development"
                        items={frontend}
                        icon={<Layers3 size={20} />}
                    />

                    <InfoList
                        title="Backend Development"
                        items={backend}
                        icon={<Wrench size={20} />}
                    />

                    <InfoList
                        title="Development Tools"
                        items={developmentTools}
                        icon={<Wrench size={20} />}
                    />
                </div>

                {/* RIGHT: My Journey and Project Highlights */}
                <div className="rounded-xl border border-[#3562A2] bg-[#10253D]/40 p-6 sm:p-7">

                    {/* My Journey */}
                    <div>
                        <div className="mb-5 flex items-center justify-center gap-3">
                            <GraduationCap
                                size={20}
                                className="text-[#4196CE]"
                            />

                            <h3 className="text-sm font-space-grotesk font-[600] uppercase text-white">
                                My Journey
                            </h3>
                        </div>

                        {/* Divider */}
                        <div className="mb-5 h-px bg-[#3562A2]" />

                        <div className="space-y-5 text-sm text-[#C6CDD5] pb-10">
                            <div className="space-y-1">
                                <p className="font-inter font-[600] text-white">
                                RevoU
                                </p>
                                <p className="font-outfit font-[400]">Full Stack Software Engineering</p>
                                <p className="text-xs text-[#4196CE] font-inter font-[400]">
                                2026
                                </p>
                            </div>

                            <div className="space-y-1">
                                <p className="font-inter font-[600] text-white">
                                Universitas Airlangga
                                </p>
                                <p className="font-outfit font-[400]">Electrical Engineering</p>
                                <p className="text-xs text-[#4196CE] font-inter font-[400]">
                                2021–2025
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Project Highlights */}
                    <div>
                        <div className="mb-5 flex items-center justify-center gap-3">
                            <FolderCode
                                size={20}
                                className="text-[#4196CE]"
                            />

                            <h3 className="text-sm font-space-grotesk font-[600] uppercase text-white">
                                Project Highlights
                            </h3>
                        </div>

                        <div className="mb-5 h-px bg-[#3562A2]" />

                        <ul className="space-y-4">
                        {projectHighlights.map((project) => (
                            <li
                            key={project}
                            className="flex items-start gap-3 text-sm text-[#C6CDD5] font-outfit font-[500]"
                            >
                                <CheckCircle2
                                    size={16}
                                    className="mt-0.5 shrink-0 text-[#4196CE]"
                                />

                                <span>{project}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
