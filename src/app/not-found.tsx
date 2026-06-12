"use client";
import { Button } from "@/components/Button/Button";
import { PageLayout } from "@/components/PageLayout";
import { path } from "@/routes";

const NotFound = () => {
  return (
    <PageLayout
      variant="dark"
      headingName="404"
      isMainHeading
      tabDeskClassName="tablet:w-110 desktop:w-110"
    >
      <div className="drop-shadow-lg/40 bg-secondary tablet:mb-80 mb-24.5 flex h-fit w-[90vw] desktop:w-[1000px] flex-col tablet:leading-10 tablet:text-2xl items-center rounded-tr-3xl rounded-bl-3xl p-6.5 py-11 tablet:py-22.5 text-center leading-8 tracking-widest">
        <p className="mb-6">
          Zawróć. <br />
          Tu nic nie ma. <br />I nie chodzi o minimalizm – po prostu
          zabłądziłeś.
        </p>
        <p className="mb-13.5">
          Ale spokojnie, my się nie obrażamy. Kliknij gdzie trzeba i wróć tam,
          gdzie sztuka dzieje się naprawdę.
        </p>
        <Button
          href={path.HOME}
          variant="light"
          ariaLabel="Przejdź do strony głównej"
          as="a"
        >
          WRÓĆ NA STRONĘ GŁÓWNĄ
        </Button>
      </div>
    </PageLayout>
  );
};
export default NotFound;
