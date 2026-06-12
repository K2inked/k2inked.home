import { path, type ArtistPath, type ArtistSlug } from "@/routes";

type BaseTeamMember = {
  name: string;
  imgSrc: string;
  hoverImgSrc?: string;
  style: string;
  paragraph: string[];
  gallery?: string[];
  instagramUsername?: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string; // optional; gdy brak, generateMetadata używa zdjęcia artysty (member.imgSrc)
  };
};

export const buildGallery = (slug: string, count: number) =>
  Array.from(
    { length: count },
    (_, i) =>
      `/images/artists/${slug}/image${String(i + 1).padStart(5, "0")}.jpeg`,
  );

export const TEAM = {
  klaudia: {
    name: "Klaudia",
    imgSrc: "/images/team/image00006.jpeg",
    hoverImgSrc: "/images/team/image00005.jpeg",
    style: "fineline / single needle",
    paragraph: [
      "Hej! Mam na imię Klaudia, ale wszyscy mówią do mnie śmietanka :)",
      "Jestem tą czarniejszą połową K².inked, jeśli ktoś woli - coownerem.",
      "Tatuażem zajmuję się od 2019 roku. Od samego początku wiedziałam w jakim stylu chcę pracować. Fineline oraz singleneedle to mój świat. W duszy jestem oldschoolem, więc wszystkie prace wykonuję odręcznie moim cienkim i ostrym jak szabla ołóweczkiem. Lubię dopracowywać wszystkie szczegóły i detale do perfekcji. Moje prace na ciele również oddają ołówkowy charakter. Lubię wykonywać małe, delikatne dziarki, ale też jak każda kobieta jestem zmienna i od czasu do czasu mam ochotę na większy projekt. W dużych tatuażach lubię pobawić się w szczegóły i detale, co na koniec daje wspaniały efekt.",
      "Poza tatuowaniem rysuję grafiki. Jestem też ogromną fanką jedzenia :b. Jeśli można mnie czymś przekupić to właśnie tym. Lubię czytać nowinki z zakresu biohackingu, diety, dbania o swoje ciało i zdrowie. Poza studiem można spotkać mnie na siłowni, bo skoro lubię jeść to wiecie... :). I tak na koniec z moich zainteresowań to tak jak każdy oczywiście uwielbiam podróżować, jeśli czas na to pozwala. Przecież trzeba eksplorować lokalne kuchnie prawda?",
      "To chyba tyle o mnie, wpadajcie i poznajcie mnie na żywo!",
    ],
    gallery: buildGallery("klaudia", 18),
    instagramUsername: "klaudiasmietanka",
    seo: {
      title: "Klaudia — tatuaże fineline i single needle | K2inked",
      description:
        "Klaudia z K2inked w Warszawie tworzy tatuaże w stylu fineline i single needle. Zobacz jej portfolio i umów wizytę.",
      keywords: ["tatuaż fineline Warszawa", "fineline tattoo", "Klaudia K2"],
      ogImage: "/og/klaudia-og.jpg",
    },
  },
  kari: {
    name: "Kari",
    imgSrc: "/images/team/image00009.jpeg",
    hoverImgSrc: "/images/team/image00010.jpeg",
    style: "blackwork / realism",
    paragraph: [
      "Karina, ale każdy mówi mi Kari. Jestem tą jedną z dwóch głów założycielek K2, Klaudia twierdzi, że tą jasną stroną mocy, ale podsumowałabym to tak: ona jest Hayao Miyazaki, a ja Junji Ito 🙂",
      "Jestem całkowitym samoukiem, rysuję od dziecka, a wiedziałam, że chce zostać tatuatorką odkąd obejrzałam Miami Ink jako dzieciak.",
      "Jedno słowo opisujące mnie? Dualizm. Kocham wszystko co różowe i czarne, puchate i przerażające, jednorożce i potwory. Świetnie czuje się w mrocznej, czarno białej tematyce jak i w kolorowych portretach Waszych ukochanych zwierzątek.",
      "Na sesjach stawiam na komfortową atmosferę, jak chcesz pogadać to chętnie wciągnę się w rozmowę z Tobą, a jak wolisz pobyć w ciszy - odpocząć od świata to czuj się równie dobrze.  Domowa atmosfera w profesjonalnych warunkach - wpadaj! 🤍",
    ],
    gallery: buildGallery("kari", 30),
    instagramUsername: "karrchar",
    seo: {
      title: "Kari — tatuaże blackwork i realizm | K2inked",
      description:
        "Kari z K2inked w Warszawie tworzy tatuaże w stylu blackwork i realizmu. Zobacz jej portfolio i umów wizytę.",
      keywords: ["tatuaż blackwork Warszawa", "blackwork tattoo", "Kari K2"],
      ogImage: "/og/kari-og.jpg",
    },
  },
  sonia: {
    name: "Sonia",
    imgSrc: "/images/team/image00003.jpeg",
    hoverImgSrc: "/images/team/image00004.jpeg",
    style: "ornaments / fineline",
    paragraph: [
      "Z wykształcenia graficzka, a od 4 lat tatuatorka. Rozwijam swój warsztat traktując tatuaż nie tylko jako sztukę, ale też sposób na podkreślenie piękna i wyjątkowości każdej osoby.",
      "Moją największą pasją są delikatne i zdobne wzory – kwiaty, ornamenty w stylu secesyjnym i wszelkie detale, które sprawiają, że tatuaż nabiera wyjątkowego charakteru. Moim celem jest to by projekt idealnie pasował do osoby, która go nosi. W pracy stawiam na elegancję i estetykę, ale też na przyjazną atmosferę.",
      "Tworząc, dbam o to, by w studiu panowała atmosfera luzu i zaufania – tak, aby każdy mógł czuć się komfortowo i wyjść z tatuażem, który będzie miał dla niego prawdziwe znaczenie.",
      "W wolnym czasie maluję obrazy i spaceruję po lesie z moim psem, o którym na pewno nie raz wspomnę podczas tatuowania. Mam też słabość do starych hitów z lat 80 i bardzo suchych żartów.",
    ],
    gallery: buildGallery("sonia", 9),
    instagramUsername: "ink.sonique",
    seo: {
      title: "Sonia — tatuaże fine line i ornamenty | K2inked",
      description:
        "Sonia z K2inked w Warszawie tworzy tatuaże w stylu fine line i ornamentów. Zobacz jej portfolio i umów wizytę.",
      keywords: ["tatuaż fine line Warszawa", "fine line tattoo", "Sonia K2"],
      ogImage: "/og/sonia-og.jpg",
    },
  },
  ewelina: {
    name: "Ewelina",
    imgSrc: "/images/team/image00011.jpeg",
    hoverImgSrc: "/images/team/image00012.jpeg",
    style: "dotwork",
    paragraph: [
      "Hej, nazywam się Ewelina – w sieci znajdziecie mnie jako @limerencja.tattoo",
      "Od dziecka byłam zanurzona w procesie twórczym – malowałam, szyłam i eksperymentowałam z różnymi formami sztuki. W 2020 roku sięgnęłam po maszynkę do tatuażu (na własne ryzyko moich znajomych 😉). Zaczynałam od oldschoolowych projektów, ale z czasem moja kreska ewoluowała w stronę fineline, by w końcu przerodzić się w soft dotwork.",
      "Projekty tworzę ręcznie, zanim przeniosę go na skórę. Dzięki temu moje tatuaże są lekkie, organiczne i zbudowane z tysięcy drobnych harmonijnych kropeczek.",
      "Prywatnie kocham modę, sport, operę, antyki, muzykę techno, a także francuskie komedie i skandynawskie kryminały. Jedyną rzeczą, której szczerze nienawidzę, jest… masło. (tak, wiem – dziwny wybór, ale mam z nim wieczną wojnę). ",
      "Jeśli chcesz poznać moją twórczość bliżej – zapraszam do świata kropek, subtelnych linii i projektów, które powstają z serca.",
    ],
    gallery: buildGallery("ewelina", 11),
    instagramUsername: "limerencja.tattoo",
    seo: {
      title: "Ewelina — tatuaże dotwork | K2inked",
      description:
        "Ewelina z K2inked w Warszawie tworzy tatuaże w stylu dotwork. Zobacz jej portfolio i umów wizytę.",
      keywords: ["tatuaż dotwork Warszawa", "dotwork tattoo", "Ewelina K2"],
      ogImage: "/og/ewelina-og.jpg",
    },
  },
  mirella: {
    name: "Mirella",
    imgSrc: "/images/team/image00007.jpeg",
    hoverImgSrc: "/images/team/image00008.jpeg",
    style: "fineline / microrealism",
    paragraph: [
      "Tatuaż to moja pasja od 2016 roku.",
      "Od lat rozwijam swój warsztat, eksperymentując z różnymi stylami, by z czasem odnaleźć swoją prawdziwą estetykę: fineline i microrealizm – to właśnie w nich czuję się najlepiej i w pełni mogę oddać dbałość o każdy detal.",
      "Mam za sobą setki godzin pracy, tysiące igieł i ogromne doświadczenie, które przekłada się nie tylko na jakość tatuażu, ale też komfort moich klientów. Tatuuję delikatnie – tak, że niektórzy… po prostu zasypiają.",
      "Jeśli szukasz lekkiej, subtelnej kreski, realistycznych detali i atmosfery, w której można się po prostu zrelaksować – zapraszam do mnie.",
    ],
    gallery: buildGallery("mirella", 24),
    instagramUsername: "mirella.tattoo",
    seo: {
      title: "Mirella — tatuaże fine line i microrealism | K2inked",
      description:
        "Mirella z K2inked w Warszawie tworzy tatuaże w stylu fine line i microrealism. Zobacz jej portfolio i umów wizytę.",
      keywords: ["tatuaż fine line Warszawa", "fine line tattoo", "Mirella K2"],
      ogImage: "/og/mirella-og.jpg",
    },
  },
  emi: {
    name: "Emi",
    imgSrc: "/images/team/image00001.jpeg",
    hoverImgSrc: "/images/team/image00002.jpeg",
    style: "piercing",
    paragraph: [
      "Emilia to pełna pasji i zaangażowania certyfikowana piercerka, która swoim doświadczeniem i profesjonalizmem szybko zdobyła uznanie w świecie modyfikacji ciała.",
      "Wielokrotnie występowała też na scenie, robiąc pokazy playpiercing oraz needleplay gdzie w performatywny sposób bada granicę bólu i przybliża świat piercingu szerszej publiczności.",
      "Jednocześnie to przemiły, ciepły człowiek o indywidualnym podejściu do klienta pięknym fokusie swojej pracy 🤍",
      "Jeśli marzysz o nietuzinkowym, eleganckim a przede wszystkim bezpiecznym i profesjonalnym piercingu to Emi będzie idealnym wyborem 🫶🏽",
    ],
    gallery: buildGallery("emi", 17),
    instagramUsername: "black.peony.piercing",
    seo: {
      title: "Emi — profesjonalny piercing | K2inked",
      description:
        "Emi z K2inked w Warszawie specjalizuje się w profesjonalnym piercingu. Zobacz jej portfolio i umów wizytę.",
      keywords: ["piercing Warszawa", "professional piercing", "Emi K2"],
      ogImage: "/og/emi-og.jpg",
    },
  },
  kuba: {
    name: "Kuba",
    imgSrc: "/images/team/image00013.jpeg",
    hoverImgSrc: "/images/team/image00014.jpeg",
    style: "ryciny / blackwork / lettering",
    paragraph: [
      "Jakub ma w sobie ogromne pokłady pozytywnej energii, zaskoczy Cię niejedną ciekawostką m.i. o kosmosie czy układzie pokarmowym Koali!",
      "Zgodnie z ideałami jakie reprezentuje w tatuowaniu, uważa że nie ma nic lepszego niż stworzenie czegoś super indywidualnego z motywów przyniesionych przez klienta. Projekty są rysowane prosto z głowy, nieraz odręcznie na papierze.",
      "Najbardziej lubi projekty wielkoformatowe dopasowane do anatomii, fascynuje go słowiańska mitologia i inne „nerdowskie odklejki” - czyli projekty ze znanych serii „Władcy Pierścieni”, „Star Wars” czy „Wiedźmin” i serii anime!",
      "Tatuuje w stylach takich jak blackwork, średniowieczne ryciny pomieszane z newschoolowym sznytem, oraz lettering w mocniejszych fontach - gotyckich, germańskich i autorskich, ale nie ogranicza się tylko do nich.",
    ],
    gallery: buildGallery("kuba", 10),
    instagramUsername: "krzywy_mir_tattoo",
    seo: {
      title: "Kuba — tatuaż blackwork, ryciny, lettering | K2inked",
      description:
        "Kuba z K2inked w Warszawie tworzy tatuaże w stylu blackwork, rycin i letteringu. Zobacz jego portfolio i umów wizytę.",
      keywords: ["tatuaż Warszawa", "tattoo Warsaw", "Kuba K2"],
      ogImage: "/og/kuba-og.jpg",
    },
  },
  kinia: {
    name: "Kinia",
    imgSrc: "/images/team/image00015.jpeg",
    hoverImgSrc: "/images/team/image00016.jpeg",
    style: "realism / color / anime",
    paragraph: [
      "Kinia aka @fluffykitty.ink to nasza miłośniczka mangi i anime. Detaliczne prace to jej specjalność, ale nie boi się dużych kompozycji, koloru i realizmu!",
      "Prywatnie Kinia to człowiek złota rączka, nie tylko w tatuażu. Nie ma rzeczy, z którą sobie nie poradzi. Azja to jej drugi dom, kiedy tylko może to ucieka do Japonii.. cóż muszę przyznać, że trochę jej tego zazdrościmy 🤍🪭",
      "Masz pomysł na tatuaż z anime, ale boisz się, że Twojej wizji nie da się zobrazować? Śmiało! Kinia na pewno sobie z tym poradzi ✨",
    ],
    gallery: buildGallery("kinia", 32),
    instagramUsername: "fluffykitty.ink",
    seo: {
      title: "Kinia — tatuaż realism / color / anime | K2inked",
      description:
        "Kinia z K2inked w Warszawie specjalizuje się w tatuażach anime i kolorowych projektach. Zobacz jej portfolio i umów wizytę.",
      keywords: ["tatuaż Warszawa", "tattoo Warsaw", "Kinia K2"],
      ogImage: "/og/kinia-og.jpg",
    },
  },
  kamila: {
    name: "Kamila",
    imgSrc: "/images/team/image00017.jpeg", 
    hoverImgSrc: "/images/team/image00017.jpeg",
    style: "blackwork / organic / alien",
    paragraph: ["Kamila specjalizuje się w blackworku oraz formach organiczno-alienowych. Tworzy projekty inspirowane strukturami natury, mroczną estetyką i cyberowymi detalami, łącząc je z neotribalem. Jej prace są surowe, intensywne i pełne charakteru – często powstają w formie freehandu, dzięki czemu idealnie dopasowują się do ciała i jego naturalnych linii.", "Choć najlepiej czuje się w mocnych, wyrazistych kompozycjach, z przyjemnością wykonuje również delikatniejsze projekty.", "Prywatnie Kamila to kocia mama i prawdziwa artystyczna dusza – tworzy biżuterię z recyklingu i maluje obrazy."],
    gallery: buildGallery("kamila", 12),
    instagramUsername: "he.xod_ttt",
    seo: {
      title: "Kamila — tatuaż blackwork / organic / alien | K2inked",
      description:
        "Kamila z K2inked w Warszawie specjalizuje się w tatuażach blackwork oraz organiczno-alienowych. Zobacz jej portfolio i umów wizytę.",
      keywords: ["tatuaż Warszawa", "tattoo Warsaw", "Kamila K2"],
      ogImage: "/og/kamila-og.jpg",
    },
  },
} satisfies Record<ArtistSlug, BaseTeamMember>;

export type TeamMember = {
  id: ArtistSlug;
  route: ArtistPath;
} & BaseTeamMember;

export const TEAM_BY_SLUG: Record<ArtistSlug, TeamMember> = (
  Object.entries(TEAM) as [ArtistSlug, BaseTeamMember][]
).reduce(
  (acc, [slug, data]) => {
    acc[slug] = { id: slug, route: path.artist(slug), ...data };
    return acc;
  },
  {} as Record<ArtistSlug, TeamMember>,
);

export const TEAM_LIST: TeamMember[] = Object.values(TEAM_BY_SLUG);
