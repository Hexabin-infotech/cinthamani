import type { Metadata } from "next";
import Link from "next/link";
import {
  HardDrive,
  Download,
  Scissors,
  FolderSearch,
  Archive,
  ArrowRight,
  CheckCircle,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Post-Production Solutions | Cinthamani Computers",
  description:
    "Centralized storage, high-speed ingest, professional edit suites, MAM with AI-powered metadata, and long-term archive. DDP, Harmonic, Backblaze, eMAM, Tessact, DaVinci, Adobe.",
  openGraph: {
    title: "Post-Production Solutions | Cinthamani Computers",
    description:
      "Complete post-production infrastructure from ingest to archive.",
  },
};

const storageProducts = [
  {
    name: "DDP (Avid NEXIS Alternative)",
    description:
      "High-performance shared storage with real-time multi-user editing. Direct-attached and networked configurations for Avid, Adobe, and DaVinci workflows.",
  },
  {
    name: "DDPSAN",
    description:
      "SAN-based shared storage for large post-production facilities requiring high throughput and concurrent access across dozens of edit stations.",
  },
  {
    name: "Promise Technology",
    description:
      "Thunderbolt and rackmount storage solutions optimized for Apple and Adobe workflows. Pegasus and VTrak series.",
  },
  {
    name: "Harmonic MediaGrid",
    description:
      "Software-defined shared storage purpose-built for media workflows. Scalable from small facilities to large broadcast operations.",
  },
  {
    name: "Backblaze B2 Cloud Storage",
    description:
      "Cost-effective cloud storage for backup, archive, and hybrid workflows. S3-compatible API with predictable pricing.",
  },
];

const ingestProducts = [
  {
    name: "TransMulti",
    description:
      "Multi-format ingest and transcoding engine supporting all major broadcast codecs. Automated watch-folder workflows with quality verification.",
  },
  {
    name: "TransMaster",
    description:
      "High-speed ingest at up to 5x real-time. Batch processing, format conversion, and automated delivery to edit, playout, or archive systems.",
  },
];

const editSuites = [
  {
    name: "DaVinci Resolve Studio",
    description:
      "Complete post-production in a single application -- editing, color grading, visual effects, motion graphics, and audio post. From Blackmagic Design.",
  },
  {
    name: "Adobe Creative Cloud",
    description:
      "Premiere Pro, After Effects, Audition, and the full Adobe creative suite. Team licenses, enterprise deployment, and workflow consulting.",
  },
  {
    name: "EIZO Reference Monitors",
    description:
      "Color-accurate reference monitors for grading suites and QC stations. CG Series for broadcast and ColorEdge for post-production.",
  },
];

const mamProducts = [
  {
    name: "eMAM",
    description:
      "Enterprise media asset management with proxy editing, automated workflows, and integration with all major NLEs and playout systems.",
  },
  {
    name: "Tessact AI",
    description:
      "AI-powered content analysis, metadata generation, and compliance checking. Automated ad detection, scene segmentation, and content moderation.",
  },
  {
    name: "Dalet Galaxy",
    description:
      "Newsroom and media management platform for broadcasters. Story-centric workflows with integrated planning, production, and distribution.",
  },
  {
    name: "Axle AI",
    description:
      "AI-powered media search and management for small-to-mid-size teams. Automatic tagging, transcription, and visual search.",
  },
];

const archiveProducts = [
  {
    name: "SpectraLogic",
    description:
      "Enterprise tape and disk archive solutions. LTO tape libraries with automated migration and lifecycle management for petabyte-scale archives.",
  },
  {
    name: "Archiware P5",
    description:
      "Software-defined archive, backup, and synchronization for media workflows. LTO tape, disk, and cloud archive with restore verification.",
  },
];

interface SectionProps {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  products: { name: string; description: string }[];
  variant: "white" | "light";
}

function ProductSection({
  title,
  subtitle,
  icon: Icon,
  products,
  variant,
}: SectionProps) {
  return (
    <section className={variant === "white" ? "section-white" : "section-light"}>
      <div className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="flex items-center gap-4 mb-3">
            <Icon className="w-8 h-8 text-[#CA8A04]" strokeWidth={1.5} />
            <h2>{title}</h2>
          </div>
          <p className="text-[var(--color-text-tertiary)] mb-10 max-w-2xl">
            {subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.name} className="card p-6 bg-white">
                <h4 className="font-semibold mb-2">{product.name}</h4>
                <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PostProductionPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark py-24 md:py-32">
        <div className="container-narrow text-center">
          <p className="text-sm uppercase tracking-widest text-[#CA8A04] mb-4">
            Solutions
          </p>
          <h1 className="mb-6">Post-Production Solutions</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            From high-speed ingest to long-term archive -- every layer of the
            post-production pipeline, designed for performance, reliability, and
            creative freedom.
          </p>
        </div>
      </section>

      {/* Storage */}
      <ProductSection
        title="Centralized Storage"
        subtitle="Shared storage infrastructure that lets entire teams work on the same media simultaneously -- without performance compromises."
        icon={HardDrive}
        products={storageProducts}
        variant="white"
      />

      {/* Ingest */}
      <ProductSection
        title="Ingest & Distribution"
        subtitle="Bring media into your pipeline faster with automated ingest, transcoding, and distribution workflows."
        icon={Download}
        products={ingestProducts}
        variant="light"
      />

      {/* Edit Suites */}
      <ProductSection
        title="Edit Suites"
        subtitle="Professional editing environments built around the industry's most trusted creative tools."
        icon={Scissors}
        products={editSuites}
        variant="white"
      />

      {/* MAM */}
      <ProductSection
        title="Media Asset Management"
        subtitle="Organize, search, and govern your media library with intelligent MAM platforms powered by AI and automation."
        icon={FolderSearch}
        products={mamProducts}
        variant="light"
      />

      {/* Archive */}
      <ProductSection
        title="Archive Solutions"
        subtitle="Protect your content for the long term with enterprise-grade tape, disk, and cloud archive systems."
        icon={Archive}
        products={archiveProducts}
        variant="white"
      />

      {/* Workflow Overview */}
      <section className="section-dark py-20 md:py-28">
        <div className="container-narrow">
          <h2 className="text-center mb-4">The Complete Pipeline</h2>
          <p className="text-center text-white/50 mb-12 max-w-xl mx-auto">
            Every stage of post-production, integrated and optimized.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { step: "01", label: "Ingest" },
              { step: "02", label: "Store" },
              { step: "03", label: "Edit" },
              { step: "04", label: "Manage" },
              { step: "05", label: "Archive" },
            ].map((item) => (
              <div
                key={item.step}
                className="text-center rounded-lg bg-white/5 border border-white/10 py-8 px-4"
              >
                <p className="text-[#CA8A04] text-sm font-semibold mb-2">
                  {item.step}
                </p>
                <p className="text-white text-lg font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Design Your Post-Production Facility</h2>
          <p className="text-[var(--color-text-tertiary)] max-w-xl mx-auto mb-8">
            Whether you need a single edit suite or a complete facility buildout,
            our engineers will design a solution that matches your creative
            workflow.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
