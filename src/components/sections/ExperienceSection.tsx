import { Briefcase, Calendar } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function ExperienceSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Badge variant="outline" className="shimmer-badge w-fit">
          <Briefcase className="w-4 h-4" />
          Werkervaring
        </Badge>
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Mijn Loopbaan</h2>
          <p className="text-muted-foreground text-lg">
            Van ondernemer naar developer. Mijn pad naar tech
          </p>
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full flex flex-col gap-4"
      >
        <AccordionItem
          value="item-1"
          className="border border-border/30 rounded-lg overflow-hidden hover:border-border/50 transition-all duration-300 hover:shadow-md"
        >
          <AccordionTrigger className="px-6 py-4 hover:bg-accent/30 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-orange-500/15 [&[data-state=open]]:to-red-500/15 [&[data-state=open]]:text-orange-700 [&[data-state=open]]:dark:text-orange-300 transition-colors">
            <div className="flex w-full justify-between items-center">
              <div className="text-left">
                <h3 className="text-lg font-bold">
                  Volledige Focus op Software Development
                </h3>
                <p className="text-muted-foreground">
                  Intensieve Full-Stack Traject
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Apr 2025 - Aug 2025</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-2 pb-6 bg-accent/10 leading-relaxed">
            <p className="mb-4">
              Na mijn ervaringen bij AutomationLabs was de keuze helder: mijn
              toekomst ligt in het bouwen van software. Ik heb mijn
              ondernemersactiviteiten bewust beëindigd om me met 100% focus en
              toewijding op deze nieuwe carrière te storten.
            </p>
            <p className="mb-4">
              De afgelopen maanden heb ik mijzelf ondergedompeld in de wereld
              van full-stack development. Niet via een bootcamp, maar via een
              bewuste keuze voor diepgaande zelfstudie. Ik wilde niet alleen
              weten <em>hoe</em> iets werkt, maar vooral <em>waarom</em> het zo
              werkt, van de architectuur van een applicatie tot de kleinste
              details in de code.
            </p>
            <p className="mb-4">
              Mijn filosofie is{" "}
              <strong>&apos;learning by building&apos;</strong>. Elk nieuw
              concept heb ik direct toegepast in mijn Project Management
              Dashboard, wat resulteerde in een robuuste, full-stack applicatie.
            </p>
            <strong className="text-foreground">
              Technologieën waar ik mee werk:
            </strong>
            <ul className="list-disc list-inside my-3 space-y-1 text-muted-foreground">
              <li>
                <strong className="text-foreground">Frontend:</strong>{" "}
                JavaScript (ES6+), TypeScript, React, Next.js, Tailwind CSS
              </li>
              <li>
                <strong className="text-foreground">State Management:</strong>{" "}
                Zustand, TanStack Query, Redux
              </li>
              <li>
                <strong className="text-foreground">Backend & Database:</strong>{" "}
                Supabase, PostgreSQL
              </li>
              <li>
                <strong className="text-foreground">Tools:</strong> Git, VS
                Code, Figma
              </li>
            </ul>
            <p>
              Deze periode van intense focus heeft mijn passie bevestigd en me
              klaargestoomd voor een technische rol waarin ik direct waarde kan
              toevoegen.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border border-border/30 rounded-lg overflow-hidden hover:border-border/50 transition-all duration-300 hover:shadow-md"
        >
          <AccordionTrigger className="px-6 py-4 hover:bg-accent/30 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-purple-500/15 [&[data-state=open]]:to-violet-500/15 [&[data-state=open]]:text-purple-700 [&[data-state=open]]:dark:text-purple-300 transition-colors">
            <div className="flex w-full justify-between items-center">
              <div className="text-left">
                <h3 className="text-lg font-bold">AutomationLabs</h3>
                <p className="text-muted-foreground">
                  Mede-oprichter & Automation Specialist
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Feb 2024 - Apr 2025</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-2 pb-6 bg-accent/10 leading-relaxed">
            <p className="mb-4">
              Na de verkoop van Avalue wilde ik de technische kant van
              bedrijfsgroei doorgronden. Met AutomationLabs hielp ik bedrijven
              hun processen te optimaliseren met slimme automatisering en
              API-integraties.
            </p>
            <p className="mb-4">
              Ik ontwierp en implementeerde complexe, data-gedreven workflows,
              maar merkte al snel dat ik tegen de limieten van no-code/low-code
              platforms aanliep. Mijn nieuwsgierigheid verschoof van het{" "}
              <em>gebruiken</em> van tools naar de wens om zelf robuustere,
              schaalbare en op maat gemaakte oplossingen te <em>bouwen</em>.
            </p>
            <strong className="text-foreground">
              Hier werd mijn passie voor development geboren:
            </strong>
            <ul className="list-disc list-inside my-3 space-y-1 text-muted-foreground">
              <li>
                <strong className="text-foreground">API-integraties:</strong>{" "}
                Het ontwerpen en implementeren van datastromen om systemen
                naadloos te laten communiceren.
              </li>
              <li>
                <strong className="text-foreground">
                  Technische Probleemanalyse:
                </strong>{" "}
                Vanuit een business-perspectief technische knelpunten analyseren
                en de architectuur voor een oplossing uitdenken.
              </li>
              <li>
                <strong className="text-foreground">AI-implementatie:</strong>{" "}
                Praktische toepassing van AI-modellen om repetitieve taken te
                automatiseren en data te verrijken.
              </li>
              <li>
                <strong className="text-foreground">
                  Proces-architectuur:
                </strong>{" "}
                Het in kaart brengen en herbouwen van bedrijfskritische
                processen met technologie als kern.
              </li>
            </ul>
            <p>
              AutomationLabs was de vonk. Het bevestigde dat mijn drive niet
              alleen ligt in het identificeren van een probleem, maar vooral in
              het creëren van de technische oplossing. Dit was het moment dat ik
              de knoop doorhakte om vol voor software development te gaan.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="border border-border/30 rounded-lg overflow-hidden hover:border-border/50 transition-all duration-300 hover:shadow-md"
        >
          <AccordionTrigger className="px-6 py-4 hover:bg-accent/30 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-indigo-500/15 [&[data-state=open]]:to-blue-600/15 [&[data-state=open]]:text-indigo-700 [&[data-state=open]]:dark:text-indigo-300 transition-colors">
            <div className="flex w-full justify-between items-center">
              <div className="text-left">
                <h3 className="text-lg font-bold">Avalue B.V.</h3>
                <p className="text-muted-foreground">Oprichter & Eigenaar</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Nov 2019 - Jan 2024</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-2 pb-6 bg-accent/10 leading-relaxed">
            <p className="mb-4">
              Op 18-jarige leeftijd, nog tijdens mijn studie, richtte ik Avalue
              B.V. op: een e-commercebedrijf gespecialiseerd in de verkoop van
              private label consumentenelektronica. Vanuit het niets bouwde ik
              dit op tot een onderneming met een team van 5 medewerkers en een
              totale omzet van meer dan €3 miljoen, die ik begin 2024 succesvol
              heb verkocht.
            </p>
            <p className="mb-4">
              Als oprichter was ik verantwoordelijk voor het volledige proces:
              van data-gedreven marktanalyse en productselectie tot het opzetten
              van de technische infrastructuur en het aansturen van een
              internationaal team.
            </p>
            <strong className="text-foreground">
              Kernvaardigheden die ik als developer meeneem:
            </strong>
            <ul className="list-disc list-inside my-3 space-y-1 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Data-Gedreven Besluitvorming:
                </strong>{" "}
                Het analyseren van marktdata en verkoopcijfers om
                productstrategieën te bepalen en voorraad te optimaliseren.
              </li>
              <li>
                <strong className="text-foreground">
                  Schaalbare Systemen Bouwen:
                </strong>{" "}
                Het ontwerpen en implementeren van efficiënte processen voor
                logistiek, klantenservice en marketing die de groei van het
                bedrijf konden dragen.
              </li>
              <li>
                <strong className="text-foreground">
                  Pragmatisch Probleemoplossen:
                </strong>{" "}
                Met beperkte middelen creatieve en effectieve oplossingen vinden
                voor complexe uitdagingen, van supply chain-problemen tot
                technische integraties.
              </li>
              <li>
                <strong className="text-foreground">
                  Eigenaarschap & Resultaatgerichtheid:
                </strong>{" "}
                De discipline om een project van begin tot eind te leiden en
                volledige verantwoordelijkheid te nemen voor het eindresultaat.
              </li>
            </ul>
            <p>
              Avalue was mijn leerschool in het bouwen van een succesvol systeem
              van A tot Z. Deze ervaring in systematisch denken en het creëren
              van waarde is de fundering waarop ik nu mijn technische carrière
              bouw.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="border border-border/30 rounded-lg overflow-hidden hover:border-border/50 transition-all duration-300 hover:shadow-md"
        >
          <AccordionTrigger className="px-6 py-4 hover:bg-accent/30 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-sky-500/15 [&[data-state=open]]:to-blue-500/15 [&[data-state=open]]:text-sky-700 [&[data-state=open]]:dark:text-sky-300 transition-colors">
            <div className="flex w-full justify-between items-center">
              <div className="text-left">
                <h3 className="text-lg font-bold">Albert Heijn</h3>
                <p className="text-muted-foreground">Operations Teamleider</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Apr 2016 - Feb 2020</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-2 pb-6 bg-accent/10 leading-relaxed">
            <p className="mb-4">
              Mijn professionele reis begon op 15-jarige leeftijd bij een van de
              grootste Albert Heijn-filialen. Gedreven door de wens om te
              groeien, ontwikkelde ik me van medewerker tot (de destijds
              jongste) teamleider. Hier kreeg ik op jonge leeftijd de
              verantwoordelijkheid over de dagelijkse operatie en een team van
              25+ medewerkers.
            </p>
            <p className="mb-4">
              In deze snelle, dynamische omgeving leerde ik voor het eerst
              denken in systemen. Ik was niet alleen bezig met het aansturen van
              een team, maar ook met het optimaliseren van processen: van
              voorraadbeheer en personeelsplanning tot het stroomlijnen van de
              winkeloperatie.
            </p>
            <strong className="text-foreground">
              Fundamentele lessen die mijn carrière hebben gevormd:
            </strong>
            <ul className="list-disc list-inside my-3 space-y-1 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Procesoptimalisatie:
                </strong>{" "}
                Het analyseren van complexe workflows en het doorvoeren van
                incrementele verbeteringen voor maximale efficiëntie.
              </li>
              <li>
                <strong className="text-foreground">
                  Leiderschap onder druk:
                </strong>{" "}
                Een team motiveren, kalm blijven en effectieve beslissingen
                nemen tijdens piekuren en onverwachte situaties.
              </li>
              <li>
                <strong className="text-foreground">
                  Aandacht voor Detail:
                </strong>{" "}
                Begrijpen dat in een complex systeem (zoals een winkel of een
                codebase) kleine fouten grote, onverwachte gevolgen kunnen
                hebben.
              </li>
              <li>
                <strong className="text-foreground">
                  Vroeg Eigenaarschap:
                </strong>{" "}
                De mentaliteit om volledige verantwoordelijkheid te nemen voor
                mijn domein en altijd te streven naar het beste resultaat.
              </li>
            </ul>
            <p>
              Deze ervaring was cruciaal voor mijn persoonlijke ontwikkeling.
              Het gaf me het zelfvertrouwen en de discipline die de basis
              vormden voor mijn latere stappen als ondernemer en nu als software
              developer.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
