import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description:
    "Algemene voorwaarden van Suurmond Technical Solutions — van toepassing op alle offertes, opdrachten en overeenkomsten.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://bassuurmond.nl/algemene-voorwaarden" },
};

const articles = [
  {
    title: "Artikel 1 – Definities",
    content: [
      "In deze algemene voorwaarden wordt verstaan onder:",
      "**Opdrachtnemer:** Suurmond Technical Solutions, gevestigd in Zeeland (NB), ingeschreven bij de Kamer van Koophandel onder nummer 98019791.",
      "**Opdrachtgever:** de natuurlijke persoon of rechtspersoon die met opdrachtnemer een overeenkomst aangaat of wenst aan te gaan.",
      "**Opdracht:** de tussen opdrachtgever en opdrachtnemer overeengekomen werkzaamheden, waaronder technische uitvoering, ontwerp, installatie, aanpassing en onderhoud.",
      "**Overeenkomst:** elke afspraak tussen opdrachtgever en opdrachtnemer tot het verrichten van werkzaamheden.",
    ],
  },
  {
    title: "Artikel 2 – Toepasselijkheid",
    content: [
      "Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, werkzaamheden, opdrachten en overeenkomsten tussen opdrachtnemer en opdrachtgever.",
      "Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien deze uitdrukkelijk schriftelijk zijn overeengekomen.",
      "Eventuele inkoop- of andere voorwaarden van de opdrachtgever worden uitdrukkelijk van de hand gewezen.",
      "Indien één of meerdere bepalingen in deze algemene voorwaarden nietig zijn of vernietigd worden, blijven de overige bepalingen onverminderd van toepassing.",
    ],
  },
  {
    title: "Artikel 3 – Offertes en aanbiedingen",
    content: [
      "Alle offertes en aanbiedingen zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld.",
      "Een offerte vervalt indien het aanbod niet binnen dertig (30) dagen na dagtekening is aanvaard, tenzij anders vermeld.",
      "Opdrachtnemer kan niet aan een offerte worden gehouden indien de opdrachtgever redelijkerwijs had kunnen begrijpen dat de offerte een kennelijke vergissing of verschrijving bevat.",
      "Mondelinge toezeggingen door of namens opdrachtnemer binden hem slechts nadat en voor zover deze schriftelijk zijn bevestigd.",
    ],
  },
  {
    title: "Artikel 4 – Uitvoering van de opdracht",
    content: [
      "Opdrachtnemer voert de overeengekomen werkzaamheden uit naar beste inzicht en vermogen, overeenkomstig de eisen van goed vakmanschap.",
      "Opdrachtnemer heeft het recht bepaalde werkzaamheden te laten verrichten door derden, na overleg met de opdrachtgever.",
      "De opdrachtgever draagt er zorg voor dat alle gegevens en faciliteiten die nodig zijn voor de uitvoering van de opdracht tijdig aan opdrachtnemer worden verstrekt. Bij vertraging door het ontbreken hiervan kan opdrachtnemer de overeenkomst aanpassen en eventuele extra kosten in rekening brengen.",
      "Tenzij uitdrukkelijk schriftelijk anders overeengekomen, gelden opgegeven termijnen als indicatief en niet als fatale termijn.",
    ],
  },
  {
    title: "Artikel 5 – Wijziging van de opdracht (meerwerk)",
    content: [
      "Indien tijdens de uitvoering blijkt dat voor een behoorlijke vervulling van de opdracht een wijziging of aanvulling noodzakelijk is, zullen partijen tijdig en in onderling overleg de opdracht aanpassen.",
      "Wijzigingen in de opdracht kunnen leiden tot aanpassing van de overeengekomen prijs en/of levertijd. Opdrachtnemer informeert de opdrachtgever hierover zo spoedig mogelijk.",
      "Door opdrachtnemer uitgevoerd meerwerk wordt op basis van de gebruikelijke tarieven aan de opdrachtgever in rekening gebracht.",
    ],
  },
  {
    title: "Artikel 6 – Tarieven en betaling",
    content: [
      "Alle tarieven zijn exclusief BTW en andere heffingen van overheidswege, tenzij uitdrukkelijk anders vermeld.",
      "Betaling dient te geschieden binnen veertien (14) dagen na factuurdatum, tenzij anders overeengekomen.",
      "Bij overschrijding van de betalingstermijn is de opdrachtgever van rechtswege in verzuim. Opdrachtnemer behoudt zich het recht voor de wettelijke (handels)rente in rekening te brengen over het openstaande bedrag.",
      "Indien opdrachtnemer invorderingsmaatregelen treft, komen de buitengerechtelijke kosten voor rekening van de opdrachtgever, met een minimum van € 75,–.",
      "Opdrachtnemer is gerechtigd om bij opdrachten met een looptijd van meer dan één maand, of bij een omvang boven een nader overeen te komen drempel, een vooruitbetaling of periodieke deelfactuur te verlangen.",
    ],
  },
  {
    title: "Artikel 7 – Opschorting en ontbinding",
    content: [
      "Opdrachtnemer is gerechtigd de nakoming van zijn verplichtingen op te schorten of de overeenkomst te ontbinden indien de opdrachtgever zijn verplichtingen niet, niet tijdig of niet volledig nakomt.",
      "Voorts is opdrachtnemer gerechtigd de overeenkomst te ontbinden indien zich omstandigheden voordoen die nakoming onmogelijk maken of indien redelijkerwijs niet van hem kan worden verlangd dat hij de overeenkomst verder nakomt.",
      "In geval van ontbinding zijn de vorderingen van opdrachtnemer op de opdrachtgever onmiddellijk opeisbaar.",
    ],
  },
  {
    title: "Artikel 8 – Aansprakelijkheid",
    content: [
      "Opdrachtnemer is uitsluitend aansprakelijk voor directe schade die het rechtstreekse gevolg is van een aan hem toerekenbare tekortkoming.",
      "Aansprakelijkheid voor indirecte schade, waaronder gevolgschade, gederfde winst, gemiste besparingen of bedrijfsstagnatie, is uitdrukkelijk uitgesloten.",
      "De aansprakelijkheid van opdrachtnemer is in alle gevallen beperkt tot het bedrag dat in het desbetreffende geval door zijn beroepsaansprakelijkheidsverzekering wordt uitgekeerd, dan wel — bij het ontbreken van een uitkering — tot het factuurbedrag van de betreffende opdracht met een maximum van € 5.000,–.",
      "De opdrachtgever vrijwaart opdrachtnemer voor aanspraken van derden die verband houden met door de opdrachtgever verstrekte onjuiste of onvolledige informatie.",
    ],
  },
  {
    title: "Artikel 9 – Overmacht",
    content: [
      "Opdrachtnemer is niet gehouden tot nakoming van enige verplichting indien hij daartoe verhinderd is als gevolg van overmacht.",
      "Onder overmacht wordt verstaan: elke omstandigheid buiten de macht van opdrachtnemer die nakoming tijdelijk of blijvend verhindert, waaronder ziekte, stakingen, overheidsmaatregelen, extreme weersomstandigheden en storingen in systemen van derden.",
      "Indien de overmachtsperiode langer duurt dan dertig (30) dagen, zijn beide partijen gerechtigd de overeenkomst te ontbinden, zonder dat enige verplichting tot schadevergoeding ontstaat.",
    ],
  },
  {
    title: "Artikel 10 – Intellectueel eigendom",
    content: [
      "Alle door opdrachtnemer vervaardige documenten, ontwerpen, tekeningen en andere werken zijn auteursrechtelijk beschermd en blijven eigendom van opdrachtnemer, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.",
      "Na volledige betaling verkrijgt de opdrachtgever een niet-exclusief gebruiksrecht voor het overeengekomen doel.",
      "Het is de opdrachtgever niet toegestaan de werken zonder voorafgaande schriftelijke toestemming van opdrachtnemer te verveelvoudigen, openbaar te maken of aan derden ter beschikking te stellen.",
    ],
  },
  {
    title: "Artikel 11 – Geheimhouding",
    content: [
      "Partijen verplichten zich over en weer tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de opdracht van elkaar ontvangen.",
      "Informatie geldt als vertrouwelijk indien dit door de andere partij is medegedeeld of indien dit voortvloeit uit de aard van de informatie.",
      "Deze verplichting geldt ook na beëindiging van de overeenkomst, voor een periode van twee jaar.",
    ],
  },
  {
    title: "Artikel 12 – Klachten",
    content: [
      "Klachten over de verrichte werkzaamheden dienen door de opdrachtgever schriftelijk en zo spoedig mogelijk, maar uiterlijk binnen veertien (14) dagen na ontdekking, bij opdrachtnemer te worden ingediend.",
      "Een klacht schort de betalingsverplichting van de opdrachtgever niet op.",
      "Indien een klacht gegrond is, zal opdrachtnemer naar eigen keuze de werkzaamheden verbeteren, opnieuw uitvoeren, dan wel de factuur crediteren.",
    ],
  },
  {
    title: "Artikel 13 – Toepasselijk recht en geschillen",
    content: [
      "Op alle overeenkomsten tussen opdrachtnemer en opdrachtgever is uitsluitend Nederlands recht van toepassing.",
      "Geschillen worden bij voorkeur in onderling overleg opgelost. Indien partijen er niet in slagen het geschil in der minne te schikken, is de bevoegde rechter in het arrondissement waar opdrachtnemer is gevestigd bij uitsluiting bevoegd, tenzij de wet dwingend een andere rechter aanwijst.",
    ],
  },
  {
    title: "Artikel 14 – Wijziging van de voorwaarden",
    content: [
      "Opdrachtnemer behoudt zich het recht voor deze algemene voorwaarden te wijzigen. De gewijzigde voorwaarden zijn van toepassing op nieuwe opdrachten vanaf de datum van bekendmaking.",
    ],
  },
];

export default function AlgemeneVoorwaarden() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        <div className="bg-navy-900 text-white py-14 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
              Suurmond Technical Solutions
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Algemene Voorwaarden
            </h1>
            <p className="mt-4 text-slate-300">
              Van toepassing op alle offertes, opdrachten en overeenkomsten van
              Suurmond Technical Solutions.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Versie 1.0 — mei 2025
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-10">
              Deze algemene voorwaarden zijn van toepassing op alle diensten
              verleend door <strong>Suurmond Technical Solutions</strong>,
              handelend onder de naam Suurmond Technical Solutions, gevestigd te
              Zeeland (NB), ingeschreven bij de Kamer van Koophandel onder
              nummer <strong>98019791</strong>, BTW-nummer{" "}
              <strong>NL005304618B68</strong>.
            </p>

            <div className="space-y-10">
              {articles.map((article) => (
                <section key={article.title}>
                  <h2 className="text-lg font-bold text-navy-900 mb-3">
                    {article.title}
                  </h2>
                  <ol className="list-decimal list-outside ml-5 space-y-2 text-slate-600 leading-relaxed">
                    {article.content.map((line, i) => (
                      <li key={i} className="pl-1">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: line
                              .replace(
                                /\*\*(.+?)\*\*/g,
                                "<strong>$1</strong>"
                              ),
                          }}
                        />
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500 space-y-1">
              <p>
                <strong>Suurmond Technical Solutions</strong>
              </p>
              <p>Zeeland (NB), Nederland</p>
              <p>KvK: 98019791 | BTW: NL005304618B68</p>
              <p>
                <a
                  href="mailto:sts@bassuurmond.nl"
                  className="text-brand-600 hover:underline"
                >
                  sts@bassuurmond.nl
                </a>{" "}
                |{" "}
                <a
                  href="tel:+31653790501"
                  className="text-brand-600 hover:underline"
                >
                  06 – 53 79 05 01
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
