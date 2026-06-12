import { notFound } from "next/navigation";
import { isArtistSlug, RESERVED_SLUGS, ARTIST_SLUGS } from "@/routes";
import { PageLayout } from "@/components/PageLayout";
import { TEAM_BY_SLUG, TEAM } from "@/data/teamData";
import { InstagramMember } from "@/components/Socialmedia/InstagramMember";
import Image from "next/image";
import { ArtistGallery } from "./components/ArtistGallery";
import { Metadata } from "next";

type ArtistParams = { artist: string };
type ArtistPageProps = { params: Promise<ArtistParams> };

export const dynamicParams = false;
export const generateStaticParams = (): ArtistParams[] =>
  ARTIST_SLUGS.filter((slug) => !RESERVED_SLUGS.has(slug)).map((artist) => ({
    artist,
  }));

const ArtistPage = async ({ params }: ArtistPageProps) => {
  const { artist } = await params;
  if (!isArtistSlug(artist) || RESERVED_SLUGS.has(artist)) notFound();
  const member = TEAM_BY_SLUG[artist];
  if (!member) notFound();

  if (!member) {
    notFound();
  }

  return (
    <PageLayout
      variant="light"
      headingName={member.name}
      tabDeskClassName="w-140"
    >
      <section className="tablet:flex-row tablet:items-start tablet:gap-30 mb-20 flex flex-col items-center gap-6">
        <div className="tablet:h-125 tablet:w-95 tablet:mb-0 relative mb-9 h-90 w-70 overflow-hidden rounded-3xl drop-shadow-lg/30">
          <Image
            alt={member.name}
            src={member.imgSrc}
            sizes="(min-width:1280px) 25rem, (min-width:768px) 22rem, 90vw"
            quality={90}
            fill
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="tablet:flex-col-reverse tablet:items-start flex max-w-3xl flex-col items-center gap-8">
          <InstagramMember
            username={member.instagramUsername || "k2inked"}
            className="tablet:size-10 size-7.5"
          />
          <article className="tablet:text-base tablet:max-w-110 space-y-4 text-sm">
            {member.paragraph.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>
        </div>
      </section>
      <ArtistGallery images={member.gallery || []} name={member.name} />
    </PageLayout>
  );
};

export default ArtistPage;

export async function generateMetadata({
  params,
}: ArtistPageProps): Promise<Metadata> {
  const { artist } = await params;

  const member = TEAM[artist as keyof typeof TEAM];
  if (!member) return notFound();

  const seo = member.seo ?? {};
  const isEmi = member.name.toLowerCase() === "emi";

  const title =
    seo.title ??
    (isEmi
      ? "Emi — piercing | K2inked"
      : `${member.name} — portfolio tatuaży | K2inked`);

  const description =
    seo.description ??
    (isEmi
      ? "Emi — profesjonalne przekłucia w K2inked w Warszawie. Higiena, precyzja i doradztwo w doborze biżuterii."
      : `Tatuaże autorstwa ${member.name} w K2inked Warszawa. Zobacz portfolio i umów wizytę.`);

  const keywords =
    seo.keywords ??
    (isEmi
      ? ["piercing Warszawa", "studio piercingu", "przekłucia", "Emi K2"]
      : ["tatuaż Warszawa", "studio tatuażu", member.name]);

  const ogImage = seo.ogImage ?? member.imgSrc;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/${artist}` },
    openGraph: {
      title,
      description,
      url: `https://www.k2inked.pl/${artist}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: member.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
