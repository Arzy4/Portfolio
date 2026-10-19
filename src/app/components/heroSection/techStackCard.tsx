import Image from "next/image";

const technologies = [
  { name: "Next.js", src: "/techStackLogo/nextJs.png"},
  { name: "React", src: "/techStackLogo/react.png"},
  { name: "TypeScript", src: "/techStackLogo/typescript.png"},
  { name: "NestJS", src: "/techStackLogo/nestJS.png"},
  { name: "PostgreSQL", src: "/techStackLogo/postgresql.png"},
  { name: "Prisma", src: "/techStackLogo/prisma.png"},
];

export default function TechStackCard() {
  return (
    <div className="rounded-[26px] border border-[#4196CE]/30 bg-[#0C2D5A]/80 px-5 py-5 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-7">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#4196CE] shadow-[0_0_12px_#4196CE]" />

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#C6CDD5] font-inter font-[500]">
          Tech Stack
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            title={tech.name}
            className="flex h-11 w-11 items-center justify-center text-sm font-bold text-[#4196CE] transition-transform hover:-translate-y-1"
          >
            <Image
              src={tech.src}
              alt={`${tech.name} logo`}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
