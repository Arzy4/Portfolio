import ProjectCarousel from "@/app/components/projectSection/project-carousel";

type OtherProjectProps = {
  currentProjectId: string;
};

export default function OtherProject({
  currentProjectId,
}: OtherProjectProps) {
  return (
    <section
      id="other-projects"
      className="w-full bg-[#020204] py-20"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-space-grotesk text-3xl font-bold text-white md:text-5xl">
            Explore Other Projects
            <span className="text-[#4196CE]">.</span>
          </h2>

          <p className="mt-4 font-outfit text-sm text-[#C6CDD5] md:text-lg">
            Interested in more? Explore my other projects and discover
            what I have built.
          </p>
        </div>

        {/* Reuse Existing Project Carousel */}
        <ProjectCarousel 
            excludeProjectId={currentProjectId}
            layout="grid" 
        />

      </div>
    </section>
  );
}
