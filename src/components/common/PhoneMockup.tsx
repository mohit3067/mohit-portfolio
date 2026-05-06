import { motion } from "framer-motion";
import { Wifi, Signal, BatteryFull } from "lucide-react";
import flutterLogo from "@/assets/apps/hoora.png"; // unused placeholder swap below
import hoora from "@/assets/apps/hoora.png";
import hoorahero from "@/assets/apps/hoorahero.png";
import caard from "@/assets/apps/caard.png";
import teektask from "@/assets/apps/teektask.png";
import floment from "@/assets/apps/floment.png";
import fond from "@/assets/apps/fond.png";
import joii from "@/assets/apps/joii.png";
import khelnet from "@/assets/apps/khelnet.png";
import smartmartuser from "@/assets/apps/smartmartuser.png";
import smartmartstore from "@/assets/apps/smartmartstore.png";
import smartmartdelivery from "@/assets/apps/smartmartdelivery.png";
import smallofficer from "@/assets/apps/smallofficer.png";


void flutterLogo;

const apps = [
  { src: hoora, name: "Hoora" },
  { src: hoorahero, name: "Hero" },
  { src: caard, name: "Caard" },
  { src: teektask, name: "Teek" },
  { src: floment, name: "Floment" },
  { src: fond, name: "Fond" },
  { src: joii, name: "Joii" },
  { src: khelnet, name: "Khelnet" },
  { src: smartmartuser, name: "SM User" },
  { src: smartmartstore, name: "SM Store" },
  { src: smartmartdelivery, name: "SM Drop" },
  { src: smallofficer, name: "Officer" },

];

const time = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });

export const PhoneMockup = () => {
  return (
    <div className="relative w-full h-full grid place-items-center">
      {/* Ambient glow ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid place-items-center"
      >
        <div className="h-[420px] w-[420px] rounded-full bg-primary/20 blur-[100px]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid place-items-center"
      >
        <div className="h-[300px] w-[300px] rounded-full bg-accent/25 blur-[90px]" />
      </div>

      {/* Floating sparkles around the phone */}
      <Sparkles />

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
        style={{ perspective: 1200 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Outer gradient frame (the "edge glow") */}
          <div
            className="rounded-[3.2rem] p-[2px]"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary)/0.9), hsl(var(--accent)/0.9), hsl(var(--primary)/0.5))",
              boxShadow:
                "0 30px 80px -20px hsl(var(--primary) / 0.55), 0 10px 60px -10px hsl(var(--accent) / 0.5)",
            }}
          >
            {/* Phone body */}
            <div className="relative w-[280px] h-[570px] md:w-[300px] md:h-[610px] rounded-[3.1rem] bg-[hsl(232_30%_5%)] overflow-hidden">
              {/* Screen */}
              <div
                className="absolute inset-[6px] rounded-[2.85rem] overflow-hidden"
                style={{
                  background:
                    "radial-gradient(120% 80% at 0% 0%, hsl(230 95% 25% / 0.5), transparent 60%), radial-gradient(120% 80% at 100% 100%, hsl(270 90% 30% / 0.5), transparent 60%), linear-gradient(180deg, hsl(232 35% 8%), hsl(232 40% 5%))",
                }}
              >
                {/* Dynamic island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 h-7 w-24 rounded-full bg-black z-20" />

                {/* Status bar */}
                <div className="relative z-10 flex items-center justify-between px-7 pt-3 text-[11px] font-mono text-foreground/80">
                  <span>{time()}</span>
                  <div className="flex items-center gap-1.5 opacity-80">
                    <Signal size={11} />
                    <Wifi size={11} />
                    <BatteryFull size={13} />
                  </div>
                </div>

                {/* Greeting */}
                <div className="px-6 pt-20">
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/80">
                    Portfolio · Flutter
                  </p>
                  <h3 className="mt-1 font-display text-[22px] leading-tight font-semibold text-foreground">
                    Apps I've shipped
                  </h3>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    12+ production apps · Play Store & App Store
                  </p>
                </div>

                {/* App grid */}
                <div className="px-5 mt-5 grid grid-cols-4 gap-3">
                  {apps.map((app, i) => (
                    <motion.div
                      key={app.name}
                      initial={{ opacity: 0, y: 10, scale: 0.85 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: 0.6 + i * 0.05,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="relative h-12 w-12 rounded-[14px] overflow-hidden ring-1 ring-white/10 shadow-[0_6px_18px_-4px_rgba(0,0,0,0.6)]">
                        <img
                          src={app.src}
                          alt={app.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[8.5px] font-medium text-foreground/80 truncate max-w-[56px] text-center">
                        {app.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Glass dock */}
                <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-glow animate-pulse" />
                    <span className="text-[10px] font-mono text-foreground/80">
                      Available for hire
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-primary">↗</span>
                </div>

                {/* Subtle highlight */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[2.85rem]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.06), transparent 35%)",
                  }}
                />
              </div>

              {/* Side buttons */}
              <span className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l bg-[hsl(232_20%_15%)]" />
              <span className="absolute -left-[3px] top-40 h-12 w-[3px] rounded-l bg-[hsl(232_20%_15%)]" />
              <span className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r bg-[hsl(232_20%_15%)]" />
            </div>
          </div>
        </motion.div>

        {/* Floating "Flutter" pill */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -left-10 top-16 hidden md:flex items-center gap-2 px-3 py-2 rounded-full glass gradient-border text-xs font-mono backdrop-blur-md"
        >
          <img
            src="https://cdn.simpleicons.org/flutter/54C5F8"
            alt="Flutter"
            className="h-4 w-4"
          />
          Flutter · Dart
        </motion.div>

        {/* Floating "Firebase" pill */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-12 bottom-24 hidden md:flex items-center gap-2 px-3 py-2 rounded-full glass gradient-border text-xs font-mono backdrop-blur-md"
        >
          <img
            src="https://cdn.simpleicons.org/firebase/FFCA28"
            alt="Firebase"
            className="h-4 w-4"
          />
          Firebase · Supabase
        </motion.div>
      </motion.div>
    </div>
  );
};

const Sparkles = () => {
  const dots = Array.from({ length: 18 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const size = (i % 3) + 1;
        const delay = (i % 7) * 0.4;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.6, 1, 0.6] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, delay }}
            className="absolute rounded-full bg-primary/70"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              boxShadow: "0 0 8px hsl(var(--primary) / 0.9)",
            }}
          />
        );
      })}
    </div>
  );
};
