import { PageLayout } from "@/components/PageLayout";
import { InstagramEmbed } from "@/components/Instagram/InstagramEmbed";

const GalleryPage = () => {
  return <PageLayout variant="light" headingName="Galeria" tabDeskClassName="w-140">
    <div className="w-full">
      <InstagramEmbed
        src="https://cdn.lightwidget.com/widgets/3ce1714c155e523791f22874b46963e4.html"
        className="lightwidget-widget w-full border-0 overflow-hidden"
        title="Galeria prac K2inked na Instagramie"
        theme="light"
      />
    </div>
  </PageLayout>;
};

export default GalleryPage;
