import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProjectDetailNavbar from "./project-detail/project-detail-navbar";
import ProjectDetailCarousel from "./project-detail/project-detail-carousel";
import ProjectDetailContent from "./project-detail/project-detail-content";
import OtherProject from "./project-detail/other-project";
import Footer from "@/app/components/footer";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailsPage({
  params,
}: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectDetailsLoading />}>
      <ProjectDetailsContent params={params} />
    </Suspense>
  );
}

// LOADING FALLBACK
function ProjectDetailsLoading() {
  return (
    <main className="min-h-screen bg-[#020204] px-5 py-6 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="mb-8 h-12 border-b border-[#3562A2]" />

        <div className="h-[350px] rounded-2xl border border-[#3562A2] bg-[#0A1628]" />

        <div className="mt-5 h-[400px] rounded-2xl bg-[#0A1628]" />
      </div>
    </main>
  );
}

// INNER COMPONENT
async function ProjectDetailsContent({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen text-white">
    {/* NAVBAR */}
    <ProjectDetailNavbar />

    {/* PROJECT CONTENT */}
    <div className="mx-auto max-w-[1600px] px-5 pb-12 pt-32 md:px-10 lg:px-16">
      
      {/* BACK TO HOME */}
      <Link
        href="/#projects"
        className="mb-10 inline-flex items-center gap-3 pl-15 py-3 font-inter font-[500] text-sm text-[#F8FAFC] transition-all duration-300 hover:text-[#4196CE]"
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      {/* HERO IMAGE CAROUSEL */}
      <ProjectDetailCarousel
        title={project.title}
        description={project.description}
        period={project.period}
        github={project.github}
        images={project.images}
        imageTitle={project.imageTitle}
        imageDesc={project.imageDesc}
        liveUrl={project.liveUrl}
        documentationUrl={project.documentationUrl}
      />
    </div>

    {/* PROJECT DETAILS */}
    <ProjectDetailContent
      summary={project.summary}
      scopeOfWork={project.scopeOfWork}
      toolsAndMethods={project.toolsAndMethods}
      futureImprovement={project.futureImprovement}
    />

    <OtherProject currentProjectId={project.id} />

    <Footer />
  </main>
  );
}