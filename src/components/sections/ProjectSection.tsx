"use client";

import {
  Calendar,
  ExternalLink,
  Github,
  ChevronDown,
  Zap,
  Filter,
  Code2,
  Shield,
  Database,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { FolderKanban } from "lucide-react";

export function ProjectSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const techStack = [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "TanStack Query",
    "Tailwind CSS",
    "ASP.NET Core 8",
    "SQL Server",
    "@dnd-kit",
  ];

  const detailedFeatures = [
    {
      title: "Geavanceerde Drag & Drop Interface",
      description:
        "Een volledig interactief Kanban board gebouwd met dnd-kit. De interface reageert direct dankzij optimistic updates, wat zorgt voor een soepele gebruikerservaring zonder wachttijden bij het verplaatsen van taken.",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Dynamisch & Deelbaar Filtersysteem",
      description:
        "Complexe filter- en zoekstatussen worden slim beheerd en direct gesynchroniseerd met de URL-parameters. Dit maakt specifieke views niet alleen deelbaar, maar zorgt er ook voor dat de state behouden blijft bij het herladen van de pagina.",
      icon: Filter,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Schaalbare Feature-Architectuur",
      description:
        "De codebase is modulair opgezet volgens een feature-based structuur. Elke functionaliteit (auth, workspaces, tasks) is geïsoleerd, wat de code overzichtelijk, onderhoudbaar en makkelijk uitbreidbaar maakt",
      icon: Code2,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "End-to-End Type Safety",
      description:
        "Van de frontend (met Zod en React Hook Form) tot aan de C# backend met strongly-typed DTOs is de hele applicatie type-veilig. Dit minimaliseert runtime errors en verhoogt de betrouwbaarheid van de code aanzienlijk.",
      icon: Shield,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Robuuste .NET Backend API",
      description:
        "Alle data-mutaties worden afgehandeld door een zelfgebouwde ASP.NET Core API met Clean Architecture. Dit zorgt voor een veilige en efficiënte communicatie met de database, waarbij client-state management (via TanStack Query) de UI automatisch en intelligent bijwerkt.",
      icon: Database,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Badge variant="outline" className="shimmer-badge w-fit">
          <FolderKanban className="w-4 h-4" />
          Uitgelicht Project
        </Badge>
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">
            Mijn Reis naar Full-Stack Development
          </h2>
          <p className="text-muted-foreground text-base">
            Een project dat mijn groei als developer weergeeft
          </p>
        </div>
      </div>

      <Card className="group relative overflow-hidden border-border/30 hover:border-border/50 transition-all duration-300 hover:shadow-xl">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        <CardContent className="p-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Project Management Dashboard
              </h3>

              <p className="text-muted-foreground text-base leading-relaxed">
                Vanuit mijn ervaring als ondernemer weet ik hoe cruciaal
                efficiënt projectmanagement is. Dit domein was de perfecte arena
                om mijn technische vaardigheden toe te passen op een complex en
                realistisch business probleem. Het resultaat is een volledige full-stack applicatie
                die van de grond af is opgebouwd, met een focus op een naadloze
                gebruikerservaring en een schaalbare architectuur.
              </p>

              {isExpanded && (
                <div className="space-y-6 animate-in slide-in-from-top-2 duration-300 ease-out">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                      Hieronder licht ik enkele van de technische keuzes en
                      implementaties toe waar ik trots op ben:
                    </h4>
                    <div className="flex flex-col gap-3">
                      {detailedFeatures.map((feature) => {
                        const Icon = feature.icon;
                        return (
                          <div
                            key={feature.title}
                            className="flex flex-col gap-2 p-5 rounded-xl bg-muted/40 border border-border/30 hover:bg-muted/50 transition-colors duration-200"
                          >
                            <div className="flex items-start gap-4">
                              <div
                                className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${feature.gradient} p-1.5`}
                              >
                                <Icon className="w-full h-full text-white" />
                              </div>

                              <div className="flex flex-col gap-2">
                                <h5 className="font-semibold text-foreground text-sm">
                                  {feature.title}
                                </h5>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-fit text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 -ml-2"
              >
                {isExpanded ? "Minder details" : "Lees het volledige verhaal"}
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-border/30">
              <h4 className="text-sm font-semibold text-foreground">
                Gebruikte Technologieën:
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between pt-4 border-t border-border/30">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Voltooid in September 2025</span>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="group" asChild>
                  <Link
                    href="https://github.com/MahdiIsse/project-management-v2"
                    target="_blank"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Bekijk Code
                  </Link>
                </Button>
                <Button size="sm" className="group" asChild>
                  <Link href="https://app.bymahdi.nl" target="_blank">
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}