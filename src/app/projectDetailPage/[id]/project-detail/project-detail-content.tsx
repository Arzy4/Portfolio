import {
  FileText,
  ListChecks,
  Wrench,
  Lightbulb,
} from "lucide-react";

type ProjectDetailContentProps = {
  summary: {
    overview: string;
    challenge: string;
  };
  scopeOfWork: string[];
  toolsAndMethods: string[];
  futureImprovement: {
    title: string;
    description: string;
  }[];
};

export default function ProjectDetailContent({
  summary,
  scopeOfWork,
  toolsAndMethods,
  futureImprovement,
}: ProjectDetailContentProps) {
  const cards = [
    {
      number: "01",
      title: "Project Summary",
      icon: FileText,
      content: [],
    },
    {
      number: "02",
      title: "Scope of Work",
      icon: ListChecks,
      content: scopeOfWork,
    },
    {
      number: "03",
      title: "Tools & Methods",
      icon: Wrench,
      content: toolsAndMethods,
    },
    {
      number: "04",
      title: "Future Improvement",
      icon: Lightbulb,
      content: futureImprovement,
    },
  ];

  return (
    <section
      id="project-summary"
      className="mt-20 w-full scroll-mt-28 bg-[#0A1628] py-25 px-50"
    >
      <div className="mb-10 text-center">
        <h2 className="font-space-grotesk text-3xl font-bold text-white md:text-5xl">
          Project Details
          <span className="text-[#4196CE]">.</span>
        </h2>

        <p className="mt-4 font-outfit text-sm text-[#C6CDD5] md:text-lg">
          A closer look at the project, my contributions,
          and the development process.
        </p>
      </div>

      <div className="grid w-full grid-cols-2 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.number}
              className={`
                group flex h-full flex-col rounded-[24px]
                border border-[#3562A2] bg-[#0A1628]
                p-7 transition-all duration-300
                hover:border-[#4196CE] hover:bg-[#10213A]
                md:p-9
                ${card.number === "01" || card.number === "04"
                ? "md:col-span-2"
                : ""}
              `}
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="font-space-grotesk font-[700] text-2xl text-[#4196CE]">
                  {card.number}. <span className="text-white">{card.title}</span>
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3562A2] bg-[#13243A] text-[#4196CE]">
                  <Icon size={22} />
                </div>
              </div>

              <div className="mt-2 font-outfit text-sm leading-7 text-[#C6CDD5] md:text-base text-justify">
                {card.number === "01" ? (
                <div className="space-y-6">
                    <div>
                        <h4 className="mb-3 font-space-grotesk font-[500] text-lg text-[#4196CE]">
                            Overview
                        </h4>

                        <p className="leading-7 text-[#C6CDD5] font-outfit font-[400]">
                            {summary.overview}
                        </p>
                    </div>

                    <div className="h-px w-full bg-[#3562A2]/50" />

                    <div>
                        <h4 className="mb-3 font-space-grotesk font-[500] text-lg text-[#4196CE]">
                            Challenge
                        </h4>

                        <p className="leading-7 text-[#C6CDD5] font-outfit font-[400]">
                            {summary.challenge}
                        </p>
                    </div>
                </div>
                ) : card.number === "04" ? (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {futureImprovement.map((item, index) => (
                      <div
                        key={index}
                        className="flex min-h-[100px] items-start gap-4 rounded-xl border border-[#3562A2]/60 bg-[#13243A] p-5 transition-all duration-300 hover:border-[#4196CE] hover:bg-[#19304D]"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#4196CE]/15 font-inter text-sm font-semibold text-[#4196CE]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Title and Description */}
                        <div className="flex flex-col gap-2">
                          <h4 className="font-space-grotesk font-[500] text-lg text-white">
                            {item.title}
                          </h4>

                          <p className="font-outfit font-[400] text-sm leading-6 text-[#C6CDD5]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  ) : (
                    <ul className="space-y-3">
                      {card.content
                        .filter((item): item is string => typeof item === "string")
                        .map((item, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4196CE]" />
                          <span className="font-outfit font-[400]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
