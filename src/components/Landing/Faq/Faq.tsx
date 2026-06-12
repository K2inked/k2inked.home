import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { FaqList } from "@/components/Faq/FaqList";
import { homeFaqData } from "@/app/faq/data";
import { STATIC_ROUTES } from "@/routes";

// Skrócone FAQ na stronie głównej (6 pytań). Pełna lista -> /faq.
export const Faq = () => (
  <PageLayout
    variant="light"
    headingName="Najczęstsze pytania"
    tabDeskClassName="tablet:w-180 desktop:w-180"
  >
    <div className="tablet:max-w-3xl w-full">
      <FaqList items={homeFaqData} />
      <div className="mt-10 flex justify-center">
        <Link
          href={STATIC_ROUTES.FAQ}
          className="link-hover text-sm tracking-[0.15em] uppercase underline underline-offset-4"
        >
          Zobacz wszystkie pytania
        </Link>
      </div>
    </div>
  </PageLayout>
);
