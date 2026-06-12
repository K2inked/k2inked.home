import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { ProseSections } from "@/components/Prose/ProseSections";
import { guides, getGuide } from "../data";
import { articleLd, breadcrumbLd } from "@/utils/jsonLd";
import { STATIC_ROUTES } from "@/routes";

type GuideParams = { slug: string };
type GuidePageProps = { params: Promise<GuideParams> };

export const dynamicParams = false;
export const generateStaticParams = (): GuideParams[] =>
  guides.map((g) => ({ slug: g.slug }));

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: { absolute: guide.metaTitle },
    description: guide.description,
    alternates: { canonical: `/poradniki/${slug}` },
    openGraph: {
      type: "article",
      title: guide.heading,
      description: guide.description,
      images: ["/opengraph-image"],
    },
  };
}

const GuidePage = async ({ params }: GuidePageProps) => {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <PageLayout
      variant="dark"
      headingName={guide.heading}
      isMainHeading
      tabDeskClassName="tablet:w-180 desktop:w-180"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleLd({
            headline: guide.heading,
            description: guide.description,
            slug: guide.slug,
            datePublished: guide.datePublished,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbLd([
            { name: "Strona główna", path: "/" },
            { name: "Poradniki", path: "/poradniki" },
            { name: guide.heading, path: `/poradniki/${guide.slug}` },
          ]),
        }}
      />
      <ProseSections blocks={guide.blocks} />
      <div className="mt-10 flex justify-center">
        <Link
          href={STATIC_ROUTES.GUIDES}
          className="link-hover text-sm tracking-[0.15em] uppercase underline underline-offset-4"
        >
          ← Wszystkie poradniki
        </Link>
      </div>
    </PageLayout>
  );
};

export default GuidePage;
