import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Gem, Camera, Calendar, Mail, ChevronLeft, ChevronRight, Crown } from "lucide-react";
import romanticBg from "@/assets/romantic-bg.jpg";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import birthdayToys from "@/assets/birthday-toys.png";
import { FloatingHearts, Sparkles } from "@/components/FloatingHearts";
import { Countdown } from "@/components/Countdown";
import { ProposalFinale } from "@/components/ProposalFinale";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rashii Ammu ❤ Nithin — A Birthday Proposal" },
      {
        name: "description",
        content:
          "A cinematic birthday surprise and heartfelt marriage proposal for Rashii Ammu, from Nithin — with love.",
      },
    ],
  }),
});

const quotes = [
  "Forever yours.",
  "My heartbeat.",
  "Always you.",
  "My moonlight.",
  "Endlessly loved.",
  "Mine, always.",
];

const quotesKn = [
  "ಸದಾ ನಿನ್ನವನು.",
  "ನನ್ನ ಹೃದಯಬಡಿತ.",
  "ಯಾವಾಗಲೂ ನೀನು.",
  "ನನ್ನ ಚಂದ್ರಪ್ರಕಾಶ.",
  "ಅಂತ್ಯವಿಲ್ಲದ ಪ್ರೀತಿ.",
  "ನನ್ನವಳು, ಸದಾ.",
];

const memories = [
  { src: memory1, caption: "ಪ್ರತಿ ಗುಲಾಬಿಗೂ ನಿನ್ನ ಹೆಸರು ನೆನಪಿದೆ." },
  { src: memory2, caption: "ಎರಡು ಹೃದಯ, ಒಂದೇ ಆಕಾಶ." },
  { src: memory3, caption: "ಸದಾ ಹೊಳೆಯುವ ಒಂದು ವಚನ." },
  { src: memory4, caption: "ಒಂದು ಆಸೆ ಮಾಡು, ನನ್ನ ಪ್ರಿಯೆ." },
];

const storyChapters = [
  {
    title: "ಮೊದಲ ನೋಟ",
    text:
      "ನೀನು ನಗಿದ ಆ ಕ್ಷಣದಿಂದಲೇ, ನನ್ನ ಪ್ರಪಂಚ ತನ್ನ ಲಯವನ್ನು ಕಂಡುಕೊಂಡಿತು. ಪ್ರತಿಯೊಂದು ಸಾಮಾನ್ಯ ದಿನವೂ ಬರೆಯಲು ಕಾಯುತ್ತಿರುವ ಪ್ರೇಮಪತ್ರವಾಯಿತು.",
  },
  {
    title: "ಮೌನ ನಂಬಿಕೆ",
    text:
      "ನಿನ್ನ ನಗುವಿನಲ್ಲಿ ನಾನು ಮನೆಯನ್ನು ಕಂಡೆ, ನಿನ್ನ ಕಣ್ಣುಗಳಲ್ಲಿ ನಾಳೆಯನ್ನು ಕಂಡೆ. ನಾನು ಪಿಸುಗುಡುತ್ತಿರುವ ತಿಳಿಯದ ಪ್ರಾರ್ಥನೆಯೇ ನೀನು.",
  },
  {
    title: "ನಾನು ಆರಿಸಿಕೊಂಡ ಶಾಶ್ವತತೆ",
    text:
      "ಇಂದು, ನಿನ್ನ ಹುಟ್ಟುಹಬ್ಬದಂದು, ನಾನು ನೀನು ಹುಟ್ಟಿದ ದಿನವನ್ನು ಮಾತ್ರ ಆಚರಿಸುತ್ತಿಲ್ಲ — ನನ್ನ ಶಾಶ್ವತತೆ ಆರಂಭವಾದ ದಿನವನ್ನು ಸಹ ಆಚರಿಸುತ್ತಿದ್ದೇನೆ.",
  },
];

const TOTAL_STEPS = 6;

function Index() {
  const [step, setStep] = useState(0);
  const go = (n: number) => {
    setStep(n);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />

      {/* STEP 0 — HERO */}
      {step === 0 && (
        <section className="relative flex min-h-screen flex-col items-center justify-start px-6 pt-20 pb-0 text-center">
          <div className="absolute inset-0 -z-10">
            <img
              src={romanticBg}
              alt=""
              width={1920}
              height={1280}
              className="h-full w-full animate-slow-zoom object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          </div>

          {/* Side hearts with RN */}
          <div className="pointer-events-none absolute inset-y-0 left-4 z-0 hidden items-center md:flex">
            <div className="relative h-32 w-32 animate-spin-slow md:h-40 md:w-40">
              <Heart
                className="h-full w-full fill-rose/25 text-rose/60"
                style={{ filter: "drop-shadow(0 0 24px oklch(0.72 0.18 5 / 0.7))" }}
                strokeWidth={1.2}
              />
              <span className="absolute inset-0 flex items-center justify-center font-script text-3xl text-blush text-glow md:text-4xl">
                RN
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-4 z-0 hidden items-center md:flex">
            <div className="relative h-32 w-32 animate-spin-slow md:h-40 md:w-40">
              <Heart
                className="h-full w-full fill-rose/25 text-rose/60"
                style={{ filter: "drop-shadow(0 0 24px oklch(0.72 0.18 5 / 0.7))" }}
                strokeWidth={1.2}
              />
              <span className="absolute inset-0 flex items-center justify-center font-script text-3xl text-blush text-glow md:text-4xl">
                RN
              </span>
            </div>
          </div>
          <Sparkles count={40} />

          {/* Top-right small static RN heart (replaces music button) */}
          <div className="pointer-events-none absolute right-4 top-4 z-40 md:right-6 md:top-6">
            <div className="relative h-14 w-14 md:h-16 md:w-16">
              <Heart
                className="h-full w-full fill-rose text-rose"
                style={{ filter: "drop-shadow(0 0 14px oklch(0.72 0.18 5 / 0.85))" }}
                strokeWidth={1.2}
              />
              <span
                className="absolute inset-0 flex items-center justify-center font-script text-xl text-glow md:text-2xl"
                style={{ color: "oklch(0.99 0.02 85)" }}
              >
                RN
              </span>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl animate-fade-up">
            <p className="font-serif-display tracking-[0.5em] text-sm uppercase text-gold text-glow-gold">
              A Birthday Proposal
            </p>
            <h1 className="mt-6 font-script text-6xl leading-tight text-glow md:text-9xl">
              <span className="text-gradient-romance">
                <span className="relative inline-block">
                  <Crown
                    className="absolute -top-8 left-1/2 h-8 w-8 -translate-x-1/2 -rotate-12 fill-emerald-400 text-emerald-500 md:-top-12 md:h-12 md:w-12"
                    style={{ filter: "drop-shadow(0 0 16px oklch(0.7 0.18 150 / 0.85))" }}
                    strokeWidth={1.5}
                  />
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.78 0.18 150), oklch(0.6 0.2 145))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 0 18px oklch(0.7 0.18 150 / 0.6))",
                    }}
                  >
                    R
                  </span>
                </span>
                ashii Ammu
              </span>
            </h1>
            <div className="my-4 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
              <Heart className="h-6 w-6 animate-heartbeat fill-rose text-rose" />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <h2 className="font-script text-5xl text-glow-gold md:text-8xl">
              <span className="animate-shimmer">Nithin</span>
            </h2>

            <p className="mt-8 font-serif-display text-lg italic text-blush md:text-2xl">
              Happy Birthday, my love. <br className="md:hidden" />
              Today the world celebrates you — and so do I.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {quotes.slice(0, 3).map((q) => (
                <span
                  key={q}
                  className="glass-card rounded-full px-5 py-2 font-display text-sm text-blush md:text-base"
                >
                  {q}
                </span>
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="btn-romance mt-8 inline-flex rounded-full px-8 py-3 font-display text-lg"
            >
              Begin our story
            </button>
          </div>

          {/* Birthday toys with banner — bottom of hero */}
          <div className="relative z-10 mt-10 w-full max-w-3xl">
            <div className="relative">
              <div className="mx-auto mb-[-1.25rem] w-fit md:mb-[-1.5rem]">
                <div
                  className="relative rounded-2xl border-2 border-gold/70 px-6 py-2 shadow-2xl md:px-10 md:py-3"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.18 5 / 0.95), oklch(0.85 0.1 15 / 0.95))",
                    boxShadow: "0 10px 40px -10px oklch(0.72 0.18 5 / 0.8)",
                  }}
                >
                  <span
                    className="font-script text-2xl md:text-4xl"
                    style={{
                      color: "oklch(0.99 0.02 85)",
                      textShadow: "0 2px 12px oklch(0.4 0.1 5 / 0.6)",
                    }}
                  >
                    Yippee Birthday Ammu
                  </span>
                  <Heart className="absolute -left-3 -top-3 h-6 w-6 animate-heartbeat fill-rose text-rose" />
                  <Heart className="absolute -right-3 -top-3 h-6 w-6 animate-heartbeat fill-rose text-rose" />
                </div>
              </div>
              <img
                src={birthdayToys}
                alt="Cute plush toys holding a birthday banner"
                width={1536}
                height={1024}
                className="mx-auto w-full max-w-xl object-contain drop-shadow-[0_20px_30px_oklch(0.72_0.18_5_/_0.4)] md:max-w-2xl"
              />
            </div>
          </div>
        </section>
      )}

      {/* STEP 1 — COUNTDOWN */}
      {step === 1 && (
        <section className="relative flex min-h-screen items-center px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Calendar className="mx-auto mb-4 h-8 w-8 text-gold" />
            <h3 className="font-script text-5xl text-gradient-romance md:text-6xl">
              ಪ್ರತಿ ಹೃದಯಬಡಿತವನ್ನು ಎಣಿಸುತ್ತಿದ್ದೇನೆ
            </h3>
            <p className="mt-3 font-serif-display italic text-muted-foreground">
              ನಿನ್ನ ನಗುವನ್ನು ಮತ್ತೆ ಕಾಣುವವರೆಗೆ…
            </p>
            <div className="mt-10">
              <Countdown />
            </div>
          </div>
        </section>
      )}

      {/* STEP 2 — LOVE STORY */}
      {step === 2 && (
        <section className="relative min-h-screen px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="font-serif-display tracking-[0.4em] text-xs uppercase text-gold">
                ನಮ್ಮ ಕಥೆ
              </p>
              <h3 className="mt-3 font-script text-5xl text-gradient-romance md:text-7xl">
                ನನ್ನ ಹೃದಯ ನಿನ್ನ ಹೆಸರನ್ನು ಹೇಗೆ ಕಲಿಯಿತು
              </h3>
            </div>
            <div className="space-y-8">
              {storyChapters.map((c, i) => (
                <div
                  key={c.title}
                  className={`glass-card rounded-3xl p-8 md:p-10 ${
                    i % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-script text-3xl text-gold">{i + 1}</span>
                    <h4 className="font-display text-2xl text-blush md:text-3xl">{c.title}</h4>
                  </div>
                  <p className="font-serif-display text-lg leading-relaxed text-foreground/85 md:text-xl">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STEP 3 — GALLERY */}
      {step === 3 && (
        <section className="relative min-h-screen px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Camera className="mx-auto mb-3 h-7 w-7 text-gold" />
              <h3 className="font-script text-5xl text-gradient-romance md:text-6xl">
                ನಾನು ಕಾಪಾಡಿಕೊಂಡ ನೆನಪುಗಳು
              </h3>
              <p className="mt-3 font-serif-display italic text-muted-foreground">
                ಪ್ರತಿ ಚಿತ್ರವೂ, ಒಂದು ಹೃದಯಬಡಿತ.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {memories.map((m, i) => (
                <figure
                  key={i}
                  className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-border"
                  style={{ boxShadow: "0 20px 60px -20px oklch(0.72 0.18 5 / 0.4)" }}
                >
                  <img
                    src={m.src}
                    alt={m.caption}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 font-display text-sm text-blush md:text-base">
                    {m.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STEP 4 — WHISPERS + LETTER */}
      {step === 4 && (
        <section className="relative min-h-screen px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h3 className="mb-10 text-center font-script text-4xl text-gradient-romance md:text-5xl">
              ಪುಟ್ಟ ಪಿಸುಮಾತುಗಳು
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {quotesKn.map((q) => (
                <span
                  key={q}
                  className="glass-card rounded-full px-6 py-3 font-display text-lg text-blush transition hover:scale-105 md:text-xl"
                >
                  <Heart className="mr-2 inline h-4 w-4 fill-rose text-rose" />
                  {q}
                </span>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <Mail className="mx-auto mb-4 h-8 w-8 text-gold" />
            <h3 className="font-script text-5xl text-gradient-romance md:text-7xl">
              ನಿನಗಾಗಿಯೇ ಒಂದು ಪತ್ರ
            </h3>
            <div className="glass-card mt-10 rounded-3xl p-8 text-left md:p-12">
              <p className="font-serif-display text-lg italic leading-relaxed text-foreground/90 md:text-xl">
                ನನ್ನ ಪ್ರೀತಿಯ ರಶಿ ಅಮ್ಮು,
                <br />
                <br />
                ಪ್ರೀತಿಗೆ ಮುಖವಿದ್ದರೆ, ಅದು ನಿನ್ನ ನಗುವನ್ನು ಧರಿಸಿರುತ್ತಿತ್ತು. ಶಬ್ದವಿದ್ದರೆ, ಅದು ನಿನ್ನ ನಗುವಿನ ಧ್ವನಿಯಾಗಿರುತ್ತಿತ್ತು. ಎಷ್ಟೋ ರಾತ್ರಿಗಳು ಈ ಪತ್ರವನ್ನು ನಾನು ನನ್ನ ಹೃದಯದೊಳಗೆ ಬರೆದಿದ್ದೇನೆ — ಮತ್ತು ಇಂದು, ನಿನ್ನ ಹುಟ್ಟುಹಬ್ಬದಂದು, ಅದನ್ನು ಗಟ್ಟಿಯಾಗಿ ಹೇಳುವ ಧೈರ್ಯ ನನಗೆ ಕೊನೆಗೂ ಬಂದಿದೆ.
                <br />
                <br />
                ನೀನು ನನ್ನ ಅತ್ಯಂತ ಪ್ರಿಯ ಕಾರಣ. ನನ್ನ ಮೌನ ಅದ್ಭುತ. ನಾನು ಜೊತೆಗೆ ವೃದ್ಧಾಪ್ಯ ಕಳೆಯಲು ಬಯಸುವವಳು ನೀನೇ. ನಾನು ಕಾಣುವ ಪ್ರತಿ ಕನಸಿನ ಮೂಲೆಯಲ್ಲೂ ನಿನ್ನ ಹೆಸರು ಬರೆಯಲ್ಪಟ್ಟಿದೆ.
                <br />
                <br />
                ಆದ್ದರಿಂದ ನಾನು ಇಂದು ನಿನಗೆ ಕೇವಲ ಒಂದು ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯ ಹೇಳುತ್ತಿಲ್ಲ — ಇನ್ನು ಮುಂದಿನ ಪ್ರತಿಯೊಂದು ಹುಟ್ಟುಹಬ್ಬವನ್ನೂ ನಿನ್ನೊಂದಿಗೆ ಕೇಳುತ್ತಿದ್ದೇನೆ.
              </p>
              <p className="mt-8 text-right font-script text-3xl text-gold text-glow-gold md:text-4xl">
                — Forever yours, Nithin
              </p>
            </div>
          </div>
        </section>
      )}

      {/* STEP 5 — FINAL PROPOSAL */}
      {step === 5 && (
        <section className="relative min-h-screen overflow-hidden px-6 py-24">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, oklch(0.4 0.18 5 / 0.5), transparent 60%)",
              }}
            />
          </div>
          <Sparkles count={60} />
          <Gem className="mx-auto mb-6 h-10 w-10 text-gold drop-shadow-[0_0_20px_oklch(0.82_0.13_85/0.8)]" />
          <ProposalFinale />
        </section>
      )}

      {/* NAVIGATION CONTROLS */}
      {step > 0 && (
        <div className="sticky bottom-6 z-30 mx-auto flex max-w-md items-center justify-between gap-4 px-6">
          <button
            onClick={() => go(step - 1)}
            className="glass-card flex items-center gap-2 rounded-full px-5 py-2 font-display text-sm text-blush transition hover:scale-105"
          >
            <ChevronLeft className="h-4 w-4" /> ಹಿಂದೆ
          </button>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === step ? "w-6 bg-rose" : "w-2 bg-blush/40"
                }`}
              />
            ))}
          </div>
          {step < TOTAL_STEPS - 1 ? (
            <button
              onClick={() => go(step + 1)}
              className="btn-romance flex items-center gap-2 rounded-full px-5 py-2 font-display text-sm"
            >
              ಮುಂದೆ <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => go(0)}
              className="glass-card flex items-center gap-2 rounded-full px-5 py-2 font-display text-sm text-blush"
            >
              <Heart className="h-4 w-4 fill-rose text-rose" /> ಮೊದಲಿಗೆ
            </button>
          )}
        </div>
      )}

      {/* FOOTER */}
      <footer className="relative px-6 py-12 text-center">
        <p className="font-script text-2xl text-gradient-romance md:text-3xl">
          Rashii Ammu <Heart className="inline h-5 w-5 fill-rose text-rose" /> Nithin
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Made with love — for the one
        </p>
      </footer>
    </main>
  );
}