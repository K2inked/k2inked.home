import type { ProseBlock } from "@/components/Prose/ProseSections";
import type { GuideSlug } from "@/routes";

export type Guide = {
  slug: GuideSlug;
  heading: string; // H1 na stronie
  metaTitle: string;
  description: string;
  excerpt: string; // skrót na liście /poradniki
  datePublished: string;
  blocks: ProseBlock[];
};

// Poradniki — treść z zaakceptowanego raportu (C2, C3). Luki bez danych klienta
// (rodzaj opatrunku, polecany krem, przeciwwskazania) sfrazowane generycznie
// z odesłaniem do instrukcji artystki / konsultacji lekarskiej.
export const guides: Guide[] = [
  {
    slug: "jak-dbac-o-tatuaz",
    heading: "Jak dbać o tatuaż — pielęgnacja krok po kroku",
    metaTitle: "Jak dbać o tatuaż — pielęgnacja krok po kroku | K2inked",
    description:
      "Jak dbać o świeży tatuaż? Pielęgnacja krok po kroku: pierwsze godziny, mycie, nawilżanie, gojenie i czego unikać — poradnik studia K2inked.",
    excerpt:
      "Pielęgnacja krok po kroku: pierwsze godziny, mycie, nawilżanie i czego unikać, by tatuaż ładnie się goił i wyglądał po latach.",
    datePublished: "2026-06-12",
    blocks: [
      {
        type: "lead",
        text: "Jak dbać o tatuaż? W skrócie: utrzymuj go w czystości, nawilżaj cienką warstwą kremu, nie zdrapuj strupków i przez pierwsze dwa tygodnie trzymaj z dala od słońca, basenu i sauny. Wierzchnia warstwa skóry goi się około dwóch tygodni, pełne wygojenie trwa do dwóch–trzech miesięcy. Poniżej rozpisujemy to krok po kroku — bo od pielęgnacji zależy, jak Twój tatuaż będzie wyglądał za rok i za dziesięć lat.",
      },
      {
        type: "p",
        text: "Jedna uwaga na start: to poradnik ogólny. Najważniejsza jest instrukcja, którą dostaniesz od swojej artystki po sesji — zna Twój tatuaż, jego rozmiar, technikę i miejsce na ciele. Jeśli jej zalecenia różnią się od tego, co czytasz poniżej, trzymaj się jej.",
      },
      { type: "h2", text: "Pierwsze godziny po sesji" },
      {
        type: "p",
        text: "Pierwszy opatrunek zostaw dokładnie tak długo, jak powiedziała Ci artystka. Studia pracują na różnych rodzajach opatrunków i każdy z nich ma inny czas noszenia — dlatego nie ma tu jednej uniwersalnej liczby godzin.",
      },
      {
        type: "p",
        text: "Po zdjęciu opatrunku umyj ręce, a dopiero potem dotykaj tatuażu. Delikatnie obmyj go letnią wodą z mydłem o neutralnym pH, spłucz i osusz czystym ręcznikiem papierowym — przykładaj go do skóry, nie pocieraj. Zwykły ręcznik z łazienki odpada: zbiera bakterie i zostawia włókna.",
      },
      {
        type: "p",
        text: "Na tym etapie tatuaż może być zaczerwieniony, lekko opuchnięty i ciepły, a z rany może sączyć się osocze zmieszane z farbą. To normalna reakcja skóry na zabieg.",
      },
      { type: "h2", text: "Mycie i nawilżanie — pierwsze dwa tygodnie" },
      { type: "h3", text: "Jak myć" },
      {
        type: "p",
        text: "Myj tatuaż jeden do dwóch razy dziennie, zawsze czystymi dłońmi, letnią wodą i mydłem o neutralnym pH. Bez gąbek, bez szorowania, bez gorącej wody. Po umyciu osusz skórę ręcznikiem papierowym i zostaw ją na chwilę, żeby odparowała, zanim nałożysz krem.",
      },
      { type: "h3", text: "Jak nawilżać" },
      {
        type: "p",
        text: "Nakładaj cienką warstwę kremu poleconego przez artystkę — tyle, żeby skóra była nawilżona, a nie błyszcząca i tłusta. Gruba warstwa zatyka skórę i utrudnia gojenie. Konkretny preparat dobiera artystka, bo to zależy od techniki i tego, jak reaguje Twoja skóra; dlatego świadomie nie podajemy tu nazw.",
      },
      { type: "h2", text: "Gojenie etapami — czego się spodziewać" },
      { type: "h3", text: "Dni 1–3" },
      {
        type: "p",
        text: "Najbardziej odczuwalny etap. Skóra jest podrażniona, zaczerwieniona, może być lekko obrzęknięta i tkliwa jak po otarciu. Tatuaż wygląda intensywnie i ostro.",
      },
      { type: "h3", text: "Dni 4–14" },
      {
        type: "p",
        text: "Zaczyna się łuszczenie i swędzenie — najtrudniejszy moment, bo tatuaż kusi, żeby go podrapać. Nie rób tego. Nie zdrapuj też płatków skóry ani strupków: schodząc przedwcześnie, potrafią zabrać ze sobą farbę i zostawić przejaśnienia, które trzeba potem poprawiać. Jeśli swędzenie doskwiera, poklep skórę przez ubranie albo nałóż cienką warstwę kremu.",
      },
      {
        type: "p",
        text: "W tym czasie tatuaż może wyglądać mętnie, jakby był pod mleczną warstwą. To normalne — to nowy naskórek. Kolory wrócą.",
      },
      { type: "h3", text: "Od 3. tygodnia do 3. miesiąca" },
      {
        type: "p",
        text: "Na oko tatuaż jest już wygojony, ale głębsze warstwy skóry regenerują się nawet do dwóch–trzech miesięcy. Dalej unikaj intensywnego słońca i nawilżaj skórę. Jeśli po pełnym wygojeniu zauważysz drobne przejaśnienia, porozmawiaj z artystką o poprawce — to normalny etap w wielu projektach, nie oznaka, że coś poszło źle.",
      },
      { type: "h2", text: "Czego unikać podczas gojenia" },
      {
        type: "ul",
        items: [
          "Słońca i solarium na świeżym tatuażu — promieniowanie UV najmocniej niszczy młody pigment.",
          "Basenu, sauny, jacuzzi, jeziora i morza oraz długiej kąpieli w wannie przez około dwa tygodnie — moczenie rozmiękcza gojącą się skórę, a woda niesie bakterie. Prysznic jest w porządku.",
          "Drapania i zdrapywania strupków.",
          "Obcisłych ubrań i szorstkich materiałów ocierających tatuaż — postaw na luźne i przewiewne.",
          "Intensywnego treningu, jeśli tatuaż jest w miejscu mocno pracującym lub obficie się pocisz — pot i tarcie podrażniają ranę. O termin powrotu na siłownię zapytaj artystkę.",
          "Golenia tatuowanego miejsca do czasu pełnego wygojenia.",
        ],
      },
      { type: "h2", text: "Najczęstsze błędy w pielęgnacji" },
      {
        type: "p",
        text: "Większość problemów z gojeniem nie bierze się z zaniedbania, tylko z nadgorliwości. Oto rzeczy, które widzimy najczęściej:",
      },
      {
        type: "ul",
        items: [
          "Zbyt gruba warstwa kremu — skóra potrzebuje oddychać, a nadmiar tłuszczu zatyka pory i wydłuża gojenie.",
          "Zbyt częste mycie „na wszelki wypadek” — dwa razy dziennie w zupełności wystarczą, częstsze wysusza i drażni.",
          "Zdrapywanie schodzącej skóry, bo „i tak już odchodzi” — to najprostszy sposób na przejaśnienia i poprawkę.",
          "Zaklejanie wygojonego tatuażu plastrem lub folią spożywczą, żeby go „chronić” — pod spodem robi się wilgotno i skóra się macera.",
          "Wakacje nad morzem tydzień po sesji — słońce, sól i piasek to najgorsza możliwa kombinacja dla świeżego tatuażu. Jeśli masz zaplanowany wyjazd, powiedz o tym artystce przed ustaleniem terminu.",
          "Ocenianie efektu w trakcie łuszczenia — tatuaż wygląda wtedy najgorzej i to nie jest moment na wnioski.",
        ],
      },
      { type: "h2", text: "Kiedy skontaktować się z lekarzem" },
      {
        type: "p",
        text: "Zdecydowana większość tatuaży goi się bez żadnych problemów, ale warto wiedzieć, co powinno zapalić lampkę. Jeśli zaczerwienienie i obrzęk nie ustępują, tylko narastają po kilku dniach, skóra wokół robi się gorąca, pojawia się silny ból, wysięk o nieprzyjemnym zapachu albo gorączka — nie czekaj i skontaktuj się z lekarzem. To samo, jeśli pojawi się wysypka lub reakcja, która Cię niepokoi.",
      },
      {
        type: "p",
        text: "Nie diagnozujemy przez internet i nie polecamy leków ani maści na własną rękę — od tego jest lekarz. Daj też znać artystce: powinna wiedzieć, jak goi się jej praca.",
      },
      { type: "h2", text: "Pielęgnacja po wygojeniu" },
      {
        type: "p",
        text: "Wygojony tatuaż ma jednego głównego wroga: słońce. Krem z filtrem na odsłonięty tatuaż to najprostszy i najskuteczniejszy sposób, żeby linie zostały ostre, a kolory intensywne przez lata. Poza tym wystarczy zwykłe nawilżanie skóry — zadbana skóra to zadbany tatuaż. Warto o tym pamiętać zwłaszcza latem i na wakacjach, bo to wtedy tatuaże blakną najszybciej. Delikatne przygasanie kolorów po latach jest naturalne i nie znaczy, że coś zrobiłaś lub zrobiłeś źle — dobrze pielęgnowany tatuaż po prostu starzeje się wolniej.",
      },
      { type: "h2", text: "Masz pytania?" },
      {
        type: "p",
        text: [
          "Jeśli coś Cię niepokoi albo nie masz pewności, czy Twój tatuaż goi się prawidłowo — ",
          { text: "napisz do nas", href: "/kontakt" },
          " albo bezpośrednio do swojej artystki. Lepiej zapytać raz za dużo niż za mało. Więcej odpowiedzi znajdziesz w ",
          { text: "często zadawanych pytaniach", href: "/faq" },
          ", a jeśli dopiero planujesz sesję, zajrzyj do poradnika o tym, ",
          {
            text: "jak przygotować się do tatuażu",
            href: "/poradniki/jak-przygotowac-sie-do-tatuazu",
          },
          ".",
        ],
      },
    ],
  },
  {
    slug: "jak-przygotowac-sie-do-tatuazu",
    heading: "Jak przygotować się do tatuażu",
    metaTitle: "Jak przygotować się do tatuażu | K2inked Warszawa",
    description:
      "Jak przygotować się do tatuażu? Co zrobić dzień przed i w dniu wizyty, co zabrać i o czym powiedzieć artystce — poradnik studia K2inked w Warszawie.",
    excerpt:
      "Co zrobić dzień przed i w dniu wizyty, co zabrać i o czym powiedzieć artystce, by sesja była wygodna, a gojenie przebiegło lepiej.",
    datePublished: "2026-06-12",
    blocks: [
      {
        type: "lead",
        text: "Jak przygotować się do tatuażu? Najkrócej: wyśpij się, zjedz porządny posiłek, nawodnij się, odpuść alkohol na minimum dobę przed sesją i ubierz się tak, żeby artystka miała swobodny dostęp do tatuowanego miejsca. Dobre przygotowanie realnie się opłaca — sesja jest wygodniejsza, łatwiej wytrzymać dłuższy siedzenie, a skóra lepiej się goi.",
      },
      { type: "h2", text: "Tydzień przed" },
      {
        type: "p",
        text: "Nie opalaj miejsca, które chcesz wytatuować — ani na słońcu, ani w solarium. Tatuowanie spalonej lub mocno opalonej skóry to zły pomysł, a poparzenie potrafi przesunąć termin sesji. Jeśli skóra w tym miejscu jest przesuszona, nawilżaj ją zwyczajnie przez kilka dni; zadbana skóra lepiej przyjmuje pigment.",
      },
      {
        type: "p",
        text: "To też dobry moment, żeby dopiąć projekt i wycenę. Jeśli jeszcze nie wiesz, od czego zależy koszt, zajrzyj na stronę z cenami — wycena jest bezpłatna i niewiążąca.",
      },
      { type: "h2", text: "Dzień przed" },
      {
        type: "ul",
        items: [
          "Wyśpij się — zmęczenie wyraźnie obniża próg bólu i odporność na dłuższą sesję.",
          "Nawadniaj się przez cały dzień, nie tylko rano.",
          "Odpuść alkohol na minimum 24 godziny — rozrzedza krew, przez co skóra mocniej krwawi, a pigment gorzej się osadza.",
          "Nie opalaj tatuowanego miejsca.",
          "Jeśli tatuaż wypada w miejscu, które golisz, dopytaj artystkę, czy chce je ogolone — zwykle robi to sama przed sesją.",
        ],
      },
      { type: "h2", text: "W dniu wizyty" },
      {
        type: "p",
        text: "Zjedz porządny posiłek przed wyjściem z domu — to najprostsza rzecz, jaką możesz zrobić dla swojego samopoczucia podczas sesji. Tatuowanie na czczo to prosta droga do osłabienia i zawrotów głowy. Weź coś do picia, a na dłuższą sesję również przekąskę.",
      },
      {
        type: "p",
        text: "Skórę zostaw czystą i nienatłuszczoną — bez balsamu, olejku czy grubej warstwy kremu w tatuowanym miejscu. Umyj się przed wyjściem, zwłaszcza jeśli tatuaż wypada w miejscu takim jak stopa czy kark.",
      },
      { type: "h3", text: "Jak się ubrać" },
      {
        type: "p",
        text: "Ubierz się luźno i wygodnie, tak żeby artystka miała swobodny dostęp do tatuowanego miejsca bez gimnastyki z Twojej strony. Tatuaż na udzie — krótkie spodenki zamiast obcisłych jeansów. Na barku czy łopatce — koszulka na szerokich ramiączkach albo taka, którą można podwinąć. Załóż też coś, czego nie żal: farba potrafi zostawić ślad na ubraniu. Po sesji ta sama zasada działa dalej — świeży tatuaż nie lubi ocierających materiałów.",
      },
      { type: "h2", text: "Co zabrać" },
      {
        type: "ul",
        items: [
          "Dokument potwierdzający pełnoletność — bez tego nie zaczniemy sesji.",
          "Wodę i przekąskę, jeśli sesja ma potrwać dłużej.",
          "Referencje i inspiracje, jeśli masz konkretny pomysł — im więcej materiału, tym łatwiej trafić w Twój gust.",
          "Słuchawki, książkę albo cokolwiek, co pomoże Ci zająć głowę podczas dłuższego siedzenia.",
          "Bluzę lub coś ciepłego — na dłuższej sesji łatwo zmarznąć od bezruchu.",
        ],
      },
      { type: "h2", text: "Ile trwa sesja i czego się spodziewać" },
      {
        type: "p",
        text: "To zależy od projektu: mały wzór potrafi zająć niecałą godzinę, rozbudowana kompozycja — kilka godzin albo kilka sesji rozłożonych w czasie. Przybliżony czas ustalisz z artystką przy wycenie, więc będziesz wiedzieć, na co się nastawić.",
      },
      {
        type: "p",
        text: "Sesja zaczyna się od rozmowy o projekcie, doboru rozmiaru i umiejscowienia oraz przeniesienia wzoru na skórę. Dopiero gdy wszystko Ci pasuje, zaczyna się tatuowanie. To jest moment na uwagi — łatwiej przesunąć szablon niż poprawiać gotowy tatuaż. W trakcie możesz poprosić o przerwę; nikt nie oczekuje, że przesiedzisz kilka godzin bez ruchu.",
      },
      { type: "h2", text: "Czego nie robić przed sesją" },
      {
        type: "ul",
        items: [
          "Nie przychodź na kacu ani po nieprzespanej nocy — to najczęstszy powód słabego samopoczucia na fotelu.",
          "Nie bierz na własną rękę środków przeciwbólowych „na zapas”. Jeśli przyjmujesz leki na stałe albo myślisz o znieczuleniu, ustal to wcześniej z artystką i z lekarzem — nie improwizuj w dniu sesji.",
          "Nie smaruj skóry balsamem ani olejkiem przed wizytą.",
          "Nie przychodź głodna ani głodny „bo stres” — to działa dokładnie odwrotnie.",
          "Nie decyduj o projekcie w ostatniej chwili, na fotelu. Tatuaż zostaje na lata; jeśli masz wątpliwości, lepiej przełożyć termin.",
        ],
      },
      { type: "h3", text: "Pierwszy tatuaż" },
      {
        type: "p",
        text: "Jeśli to Twój pierwszy raz, powiedz o tym wprost — to żaden wstyd, a artystka inaczej poprowadzi wizytę: więcej wyjaśni, częściej zapyta o samopoczucie i zaproponuje przerwę, zanim sama o nią poprosisz. Na pierwszy tatuaż warto też wybrać miejsce, które u większości osób jest łatwiejsze do przesiedzenia, na przykład przedramię czy ramię. To dobry temat do rozmowy przy wycenie.",
      },
      { type: "h2", text: "O czym powiedzieć artystce" },
      {
        type: "p",
        text: "Powiedz o uczuleniach, przyjmowanych lekach, problemach skórnych i wszystkim, co dotyczy tatuowanego miejsca — bliznach, znamionach, świeżych urazach. To nie jest wścibstwo: te informacje wpływają na to, jak i gdzie da się zrobić projekt.",
      },
      {
        type: "p",
        text: "Jeśli masz wątpliwości zdrowotne — chorujesz przewlekle, bierzesz leki na stałe, jesteś w ciąży lub karmisz — skonsultuj to wcześniej z lekarzem. Artystka nie zastąpi porady lekarskiej, a decyzję o terminie sesji lepiej podjąć przed wizytą niż na fotelu.",
      },
      { type: "h2", text: "Formalności" },
      {
        type: "p",
        text: "Tatuaże robimy wyłącznie osobom pełnoletnim i zawsze prosimy o dokument — nawet jeśli wyglądasz na swoje lata. Przed sesją podpiszesz też zgodę i potwierdzisz, że znasz zasady; to standard, który chroni obie strony. Zasady studia znajdziesz w regulaminie, a warunki rezerwacji i ewentualnego zadatku ustalisz bezpośrednio z artystką przy umawianiu terminu.",
      },
      { type: "h2", text: "Gotowa lub gotowy?" },
      {
        type: "p",
        text: [
          "Umów się z wybraną artystką przez Instagram, a jeśli nie wiesz, od czego zacząć — ",
          { text: "napisz do nas", href: "/kontakt" },
          ", pomożemy ustalić szczegóły. Zanim to zrobisz, sprawdź, ",
          { text: "od czego zależy cena", href: "/cennik" },
          ", a po sesji wróć po ",
          {
            text: "instrukcję pielęgnacji tatuażu",
            href: "/poradniki/jak-dbac-o-tatuaz",
          },
          " — od niej zależy efekt końcowy.",
        ],
      },
    ],
  },
  // TODO MSTUDIO: gdy klient poda widełki „od–do" (choćby minimum sesji lub
  // stawkę godzinową) — dosypać je w sekcjach „Ile kosztuje mały tatuaż",
  // „Cena za sesję czy za projekt" oraz na /cennik. Bez nich artykuł i tak
  // rankuje (konkurenci też mówią „wycena indywidualna"), ale z nimi będzie
  // znacznie mocniejszy. NIE zmyślać kwot.
  {
    slug: "ile-kosztuje-tatuaz-warszawa",
    heading: "Ile kosztuje tatuaż w Warszawie",
    metaTitle: "Ile kosztuje tatuaż w Warszawie? Od czego zależy cena | K2inked",
    description:
      "Ile kosztuje tatuaż w Warszawie? Wyjaśniamy, od czego zależy cena: rozmiar, miejsce na ciele, styl, czas pracy i liczba sesji — oraz jak wygląda bezpłatna wycena w K2inked.",
    excerpt:
      "Od czego naprawdę zależy cena tatuażu, czym różni się wycena małego wzoru od dużego projektu i dlaczego najtańsza oferta bywa najdroższa.",
    datePublished: "2026-07-15",
    blocks: [
      {
        type: "lead",
        text: "Ile kosztuje tatuaż w Warszawie? Uczciwa odpowiedź brzmi: to zależy — i zaraz dokładnie wyjaśnimy, od czego. Nie ma jednej ceny tatuażu, bo nie ma jednego tatuażu: mały napis na przedramieniu i rozbudowany rękaw to dwie zupełnie różne prace. Cenę kształtuje przede wszystkim czas pracy artystki, a na niego wpływają rozmiar, miejsce na ciele, styl, poziom szczegółowości i to, czy projekt powstaje od zera.",
      },
      {
        type: "p",
        text: [
          "Poniżej rozkładamy wycenę na czynniki pierwsze, żebyś wiedziała lub wiedział, za co dokładnie płacisz i czego się spodziewać. A jeśli wolisz konkret dla swojego pomysłu — ",
          { text: "napisz do nas", href: "/kontakt" },
          ", wycena jest bezpłatna i niewiążąca.",
        ],
      },
      { type: "h2", text: "Dlaczego studia nie podają sztywnego cennika" },
      {
        type: "p",
        text: "Sztywna tabela z cenami wyglądałaby uczciwie, ale w praktyce wprowadzałaby w błąd. Ten sam wzór na przedramieniu i na żebrach to inny czas pracy. Ten sam rozmiar w delikatnym fineline i w gęsto wypełnionym blackworku to inny nakład. Dlatego poważne studia — również te największe w Warszawie — wyceniają indywidualnie. To nie jest wykręt, tylko jedyny sposób, żeby cena odpowiadała realnej pracy.",
      },
      { type: "h2", text: "Od czego zależy cena tatuażu" },
      { type: "h3", text: "Rozmiar" },
      {
        type: "p",
        text: "Najbardziej oczywisty czynnik, ale nie działa liniowo. Tatuaż dwa razy większy nie kosztuje dokładnie dwa razy więcej — większa powierzchnia to nie tylko więcej pracy, ale też więcej detalu, cieniowania i często dodatkowa sesja.",
      },
      { type: "h3", text: "Umiejscowienie na ciele" },
      {
        type: "p",
        text: "Miejsce potrafi zmienić wycenę bardziej, niż się wydaje. Płaskie, łatwo dostępne powierzchnie jak przedramię czy łydka pracuje się szybciej. Miejsca krzywe, ruchome lub wrażliwe — żebra, stopa, dłoń, kark, wewnętrzna strona ramienia — wymagają wolniejszej pracy, częstszych przerw i większej precyzji. Skóra w każdym z tych miejsc inaczej przyjmuje pigment.",
      },
      { type: "h3", text: "Styl i poziom szczegółowości" },
      {
        type: "p",
        text: [
          "Minimalistyczny fineline, mocny blackwork, realizm, kolor — każdy styl to inny nakład czasu przy tej samej powierzchni. Drobne, gęste detale i płynne przejścia tonalne kosztują więcej czasu niż prosta, czysta kreska. Najlepiej zobaczyć to na pracach — zajrzyj do ",
          { text: "naszej galerii", href: "/galeria" },
          " i porównaj projekty, które Ci się podobają.",
        ],
      },
      { type: "h3", text: "Autorskość projektu" },
      {
        type: "p",
        text: "Projekt tworzony od zera pod Ciebie to praca, która dzieje się jeszcze zanim usiądziesz na fotelu: rozmowa, szkice, poprawki. Gotowy wzór do odwzorowania wymaga jej mniej. Dlatego custom wyceniamy inaczej niż realizację istniejącego projektu.",
      },
      { type: "h3", text: "Czas pracy i liczba sesji" },
      {
        type: "p",
        text: "Ostatecznie wszystkie powyższe czynniki sprowadzają się do jednego: ile godzin zajmie ta praca. Duże projekty rozkładamy na kilka sesji — nie dlatego, żeby podbić cenę, tylko dlatego, że skóra ma swoją granicę wytrzymałości, a po jej przekroczeniu efekt jest gorszy.",
      },
      { type: "h2", text: "Ile kosztuje mały tatuaż" },
      {
        type: "p",
        text: "Małe wzory — napis, symbol, drobny motyw do kilku centymetrów — są najtańszą opcją, ale i tu jest haczyk: bardzo mały tatuaż z dużą liczbą detali potrafi kosztować więcej niż większy, ale prosty. Miniaturowe elementy wymagają precyzji, a linie muszą mieć zapas na to, że z upływem lat delikatnie się rozejdą. Dlatego przy małych projektach artystka czasem zaproponuje nieco większy rozmiar — nie dla ceny, tylko po to, żeby tatuaż wyglądał dobrze również za dziesięć lat.",
      },
      {
        type: "p",
        text: "Warto też wiedzieć, że wiele studiów ma minimalną stawkę za sesję. Przygotowanie stanowiska, sterylne igły i jednorazowe materiały kosztują tyle samo przy małym i przy dużym wzorze.",
      },
      { type: "h2", text: "Ile kosztuje tatuaż na ręce" },
      {
        type: "p",
        text: "„Ręka” to bardzo pojemne słowo i dobrze pokazuje, dlaczego wycena jest indywidualna. Przedramię to jedno z najwygodniejszych miejsc do tatuowania — płaskie, łatwo dostępne, u większości osób łatwiejsze do przesiedzenia. Ramię daje dużo miejsca na rozbudowany projekt. Ale już dłoń, nadgarstek czy wewnętrzna strona ramienia to zupełnie inna historia: trudniejsza praca, wrażliwsza skóra, a w przypadku dłoni również gorsze utrzymywanie pigmentu, co często oznacza konieczność poprawek. Ta sama „ręka”, trzy różne wyceny.",
      },
      { type: "h2", text: "Cena za sesję czy za cały projekt" },
      {
        type: "p",
        text: "Spotkasz oba modele. Mniejsze i średnie tatuaże zwykle wycenia się jako całość — wiesz z góry, ile zapłacisz. Przy dużych, wielosesyjnych projektach naturalniejsze jest rozliczenie za sesję, bo trudno przewidzieć co do godziny, ile zajmie cały rękaw.",
      },
      {
        type: "p",
        text: "Niezależnie od modelu zasada jest ta sama: ustal to na etapie wyceny, zanim usiądziesz na fotelu. Dobre studio powie Ci wprost, w którym modelu pracuje i co obejmuje kwota — łącznie z tym, czy w cenie jest ewentualna poprawka po wygojeniu.",
      },
      { type: "h2", text: "Dlaczego najtańsza oferta bywa najdroższa" },
      {
        type: "p",
        text: "Tatuaż to jedna z niewielu rzeczy, które kupujesz dosłownie na całe życie. Przy wyborze wyłącznie po cenie ryzykujesz, że zapłacisz dwa razy: raz za tatuaż, drugi raz za jego poprawianie, przykrywanie albo usuwanie laserem — a to jest droższe, dłuższe i bardziej bolesne niż zrobienie go dobrze za pierwszym razem.",
      },
      {
        type: "p",
        text: "Nie chodzi o to, żeby przepłacać. Chodzi o to, żeby wiedzieć, za co płacisz: doświadczenie artystki, sterylne jednorazowe igły, certyfikowane farby, higienę stanowiska i czas poświęcony na projekt. Na tym się nie oszczędza.",
      },
      { type: "h2", text: "Co powinno wchodzić w cenę" },
      {
        type: "p",
        text: "Porównując oferty, nie patrz wyłącznie na kwotę — sprawdź, co ona obejmuje. W K2inked w cenie tatuażu dostajesz indywidualny projekt przygotowany pod Ciebie, sterylne i jednorazowe igły, certyfikowane farby oraz jasne instrukcje pielęgnacji po sesji. To są rzeczy, które powinny być standardem wszędzie, a bywają pozycją, na której najłatwiej zaoszczędzić kosztem klienta.",
      },
      {
        type: "p",
        text: "Jeśli oferta jest wyraźnie tańsza niż wszystkie inne, warto zapytać dlaczego. Czasem odpowiedź jest w porządku — na przykład artystka dopiero buduje portfolio. A czasem oszczędność siedzi w materiałach albo w czasie poświęconym na projekt, i to Ty zapłacisz za nią później.",
      },
      { type: "h2", text: "Jak przygotować budżet" },
      {
        type: "ul",
        items: [
          "Ustal wycenę przed sesją, nie w jej trakcie — unikniesz niespodzianek.",
          "Zapytaj wprost, czy kwota obejmuje projekt i ewentualną poprawkę po wygojeniu.",
          "Przy dużym projekcie zapytaj o orientacyjną liczbę sesji i odstępy między nimi — rozłożysz koszt w czasie.",
          "Doliczy zadatek, jeśli studio go pobiera — zwykle wchodzi w cenę tatuażu.",
          "Nie tnij projektu tylko po to, żeby zmieścić się w kwocie. Lepiej poczekać miesiąc i zrobić rzecz, której nie będziesz poprawiać.",
        ],
      },
      { type: "h2", text: "Jak wygląda wycena w K2inked" },
      {
        type: "p",
        text: [
          "Napisz do nas albo bezpośrednio do wybranej artystki na Instagramie i opisz pomysł: co chcesz zrobić, w jakim miejscu na ciele i mniej więcej w jakim rozmiarze. Dorzuć referencje — zdjęcia, szkice, cokolwiek, co pokazuje kierunek. Im więcej materiału, tym trafniejsza wycena. Szczegóły modelu wyceny opisaliśmy też na stronie ",
          { text: "cennika", href: "/cennik" },
          ".",
        ],
      },
      {
        type: "p",
        text: [
          "Wycena jest bezpłatna i niewiążąca — możesz zapytać, przemyśleć i wrócić za miesiąc. Gdy termin będzie ustalony, przyda się poradnik o tym, ",
          {
            text: "jak przygotować się do tatuażu",
            href: "/poradniki/jak-przygotowac-sie-do-tatuazu",
          },
          ", a po sesji — ",
          {
            text: "jak dbać o tatuaż",
            href: "/poradniki/jak-dbac-o-tatuaz",
          },
          ".",
        ],
      },
    ],
  },
];

export const getGuide = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);
