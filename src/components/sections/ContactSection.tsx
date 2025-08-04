"use client";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Mail } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";

export function ContactSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Badge variant="outline" className="shimmer-badge w-fit">
          <Mail className="w-4 h-4" />
          Contact
        </Badge>
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Klaar voor de volgende stap?</h2>
          <p className="text-muted-foreground text-base">
            Zoekt u een developer die verder kijkt dan de code en meedenkt met
            het product?
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-60"></div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-lg opacity-40"></div>

          <div className="absolute left-4 top-8 w-2 h-2 bg-blue-500/30 rounded-full"></div>
          <div className="absolute left-6 top-16 w-1 h-1 bg-purple-500/40 rounded-full"></div>
          <div className="absolute right-4 bottom-8 w-2 h-2 bg-purple-500/30 rounded-full"></div>
          <div className="absolute right-6 bottom-16 w-1 h-1 bg-blue-500/40 rounded-full"></div>

          <Card className="group relative overflow-hidden border-border/30 hover:border-border/50 transition-all duration-300 hover:shadow-xl max-w-2xl mx-auto">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-purple-500/5 opacity-50"></div>

            <CardContent className="relative p-8 z-10">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex flex-col gap-3 max-w-md">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    Laten we kennismaken!
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ik deel graag mijn verhaal en ben vooral benieuwd naar
                    jullie team en uitdagingen.
                  </p>
                </div>

                <Button
                  size="lg"
                  className="group/btn shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  asChild
                >
                  <Link href="mailto:mahdi.isse@outlook.com">
                    <Mail className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    mahdi.isse@outlook.com
                  </Link>
                </Button>

                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="group/social hover:border-gray-600 dark:hover:border-gray-400 transition-all duration-300 hover:shadow-md hover:scale-105"
                    asChild
                  >
                    <Link href="https://github.com/MahdiIsse" target="_blank">
                      <FaGithub className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="group/social hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:shadow-md hover:scale-105"
                    asChild
                  >
                    <Link
                      href="https://www.linkedin.com/in/mahdi-isse/"
                      target="_blank"
                    >
                      <CiLinkedin className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>📍</span>
                  <span>Delft, Nederland</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
