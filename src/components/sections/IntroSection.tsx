import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Hand, MessageCircle } from "lucide-react";
import Link from "next/link";

export function IntroSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:items-stretch min-h-[400px]">
      <div className="flex flex-col gap-6 flex-1 text-center lg:text-left justify-center">
        <div className="flex flex-col gap-4">
          <Badge
            variant="outline"
            className="shimmer-badge w-fit mx-auto lg:mx-0"
          >
            <Hand className="w-4 h-4" />
            Introductie
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold">Hoi, ik ben Mahdi!</h1>
          <h3 className="text-lg lg:text-xl text-muted-foreground">
            Ondernemer met passie voor moderne webapplicaties{" "}
          </h3>
        </div>

        <p className="text-base leading-relaxed max-w-xl">
          Na het opbouwen en succesvol verkopen van mijn e-commercebedrijf,
          ontdekte ik waar mijn ware passie ligt:{" "}
          <strong>het oplossen van complexe, technische puzzels.</strong>{" "}
          Diezelfde drive en focus op resultaat zet ik nu in als software
          developer.
        </p>
        <p className="text-base leading-relaxed max-w-xl">
          De afgelopen maanden heb ik me volledig toegelegd op het bouwen van
          moderne webapplicaties met{" "}
          <strong>React, Next.js en TypeScript</strong>. Ik combineer mijn
          ondernemerservaring met technische diepgang en ben klaar om als
          ambitieuze developer waarde toe te voegen aan een team.
        </p>

        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <Button size="lg" asChild className="group">
            <Link href="#contact">
              <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Laten we praten
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex-shrink-0 flex items-center">
        <div className="relative group">
          <Image
            src="/mahdi.jpg"
            alt="Mahdi Isse"
            width={350}
            height={400}
            className="rounded-2xl border-2 border-border/50 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 object-cover"
            style={{ aspectRatio: "7/8" }}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
        </div>
      </div>
    </div>
  );
}
