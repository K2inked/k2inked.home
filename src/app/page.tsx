import { ContactLanding } from "@/components/Landing/ContactLanding";
import { Hero } from "@/components/Landing/Hero";
import { Sentinel } from "@/components/Sentinel";
import { Studio } from "@/components/Landing/Studio/Studio";
import { DividerImage } from "@/components/DividerImage/DividerImage";
import { Team } from "@/components/Landing/Team/Team";
import { GalleryLanding } from "@/components/Landing/GalleryLanding/GalleryLanding";
import { Opinions } from "@/components/Landing/Opinions/Opinions";

export default function Home() {
  return (
    <>
      <Hero />
      <Sentinel />
      <Studio />
      <DividerImage  id="divider1"/>
      <Team />
      <DividerImage  id="divider2"/>
      <GalleryLanding />
      <DividerImage  id="divider3"/>
      <Opinions />
      <ContactLanding />
    </>
  );
}
