import { PageLayout } from "@/components/PageLayout";
import { contactData } from "./data";
import { Map } from "../../components/Map";
import { Form } from "./components/Form";
import { Metadata } from "next";

const ContactPage = () => {
  return (
    <PageLayout
      variant="dark"
      headingName="Napisz do nas"
      isMainHeading
      tabDeskClassName="tablet:w-180 desktop:w-180"
    >
      <article className="tablet:text-lg mb-25 text-base leading-7.5 font-light tracking-[0.12em]">
        {contactData.map((line, i) => (
          <p className="mb-6" key={i}>
            {line}
          </p>
        ))}
      </article>

      <section className="bg-secondary drop-shadow-3xl/40 tablet:flex-row-reverse tablet:w-full mb-20 flex h-fit w-[90vw] flex-col items-center rounded-tr-3xl rounded-bl-3xl">
        <Map variant="contact" />
        <Form />
      </section>
    </PageLayout>
  );
};

export default ContactPage;


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: "Kontakt | K2inked" },
    description:
      "Skontaktuj się z K2inked, profesjonalnym studiem tatuażu w Warszawie. Zarezerwuj wizytę lub zadawaj pytania.",
    alternates: { canonical: "/kontakt" },
  };
}