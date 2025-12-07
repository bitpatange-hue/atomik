import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/drone_spraying_crops_aerial_shot.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-primary-foreground/90">Trusted agri-tech ecosystem for modern India</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Precision Farming.{" "}
              <span className="text-accent">Delivered</span> to Your Field.
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Atomik connects farmers with certified drone pilots through a unified platform—bringing speed, safety, and accuracy to every farm operation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/book">
                  Book a Drone Spray
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/pilots">Join as a Drone Pilot</Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Drone illustration placeholder - geometric shape */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-3xl rotate-6 blur-xl" />
                <div className="relative bg-primary-foreground/10 backdrop-blur-xl rounded-3xl border border-primary-foreground/20 p-8 transform hover:scale-[1.02] transition-transform duration-500">
                  <div className="space-y-6">
                    {/* Stats preview */}
                    {[
                      { label: "Acres Sprayed Today", value: "2,450" },
                      { label: "Active Pilots", value: "127" },
                      { label: "Farmers Served", value: "3,200+" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between p-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10"
                      >
                        <span className="text-primary-foreground/70 text-sm">{stat.label}</span>
                        <span className="text-primary-foreground font-bold text-xl">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}