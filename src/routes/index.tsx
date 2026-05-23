import { createFileRoute } from "@tanstack/react-router";
import { Heart, Gem, Camera, Calendar, Mail } from "lucide-react";
import romanticBg from "@/assets/romantic-bg.jpg";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import { FloatingHearts, Sparkles } from "@/components/FloatingHearts";
import { Countdown } from "@/components/Countdown";
import { MusicToggle } from "@/components/MusicToggle";
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

const memories = [
  { src: memory1, caption: "Every rose remembers your name." },
  { src: memory2, caption: "Two hearts, one sky." },
  { src: memory3, caption: "A promise that sparkles forever." },
  { src: memory4, caption: "Make a wish, my love." },
];

const storyChapters = [
  {
    title: "The first glance",
    text:
      "From the moment you smiled, my world found its rhythm. Every ordinary day became a love letter waiting to be written.",
  },
  {
    title: "The quiet certainty",
    text:
      "In your laughter I found home, in your eyes I found tomorrow. You are the prayer I didn't know I was whispering.",
  },
  {
    title: "The forever I choose",
    text:
      "Today, on your birthday, I am not only celebrating the day you were born — I am celebrating the day my forever began.",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <MusicToggle />
      <FloatingHearts />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center px-6 py-20 text-center">
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

        <div className="relative z-10 mx-auto max-w-4xl animate-fade-up">
          <p className="font-serif-display tracking-[0.5em] text-sm uppercase text-gold text-glow-gold">
            A Birthday Proposal
          </p>
          <h1 className="mt-6 font-script text-7xl leading-tight text-glow md:text-9xl">
            <span className="text-gradient-romance">Rashii Ammu</span>
          </h1>
          <div className="my-4 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <Heart className="h-6 w-6 animate-heartbeat fill-rose text-rose" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h2 className="font-script text-6xl text-glow-gold md:text-8xl">
            <span className="animate-shimmer">Nithin</span>
          </h2>

          <p className="mt-10 font-serif-display text-xl italic text-blush md:text-2xl">
            Happy Birthday, my love. <br className="md:hidden" />
            Today the world celebrates you — and so do I.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {quotes.slice(0, 3).map((q) => (
              <span
                key={q}
                className="glass-card rounded-full px-5 py-2 font-display text-sm text-blush md:text-base"
              >
                {q}
              </span>
            ))}
          </div>

          <a
            href="#story"
            className="btn-romance mt-12 inline-flex rounded-full px-8 py-3 font-display text-lg"
          >
            Begin our story
          </a>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Calendar className="mx-auto mb-4 h-8 w-8 text-gold" />
          <h3 className="font-script text-5xl text-gradient-romance md:text-6xl">
            Counting every heartbeat
          </h3>
          <p className="mt-3 font-serif-display italic text-muted-foreground">
            Until I see you smile again…
          </p>
          <div className="mt-10">
            <Countdown />
          </div>
        </div>
      </section>

      {/* LOVE STORY */}
      <section id="story" className="relative px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="font-serif-display tracking-[0.4em] text-xs uppercase text-gold">
              Our Story
            </p>
            <h3 className="mt-3 font-script text-5xl text-gradient-romance md:text-7xl">
              How my heart learned your name
            </h3>
          </div>
          <div className="space-y-10">
            {storyChapters.map((c, i) => (
              <div
                key={c.title}
                className={`glass-card rounded-3xl p-8 md:p-12 ${
                  i % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-script text-3xl text-gold">{i + 1}</span>
                  <h4 className="font-display text-2xl text-blush md:text-3xl">
                    {c.title}
                  </h4>
                </div>
                <p className="font-serif-display text-lg leading-relaxed text-foreground/85 md:text-xl">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Camera className="mx-auto mb-3 h-7 w-7 text-gold" />
            <h3 className="font-script text-5xl text-gradient-romance md:text-6xl">
              Memories I keep
            </h3>
            <p className="mt-3 font-serif-display italic text-muted-foreground">
              Every frame, a heartbeat saved.
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

      {/* LOVE QUOTES */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-10 text-center font-script text-4xl text-gradient-romance md:text-5xl">
            Little whispers
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {quotes.map((q, i) => (
              <span
                key={q}
                className="glass-card rounded-full px-6 py-3 font-display text-lg text-blush transition hover:scale-105 md:text-xl"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Heart className="mr-2 inline h-4 w-4 fill-rose text-rose" />
                {q}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROPOSAL INTRO */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Mail className="mx-auto mb-4 h-8 w-8 text-gold" />
          <h3 className="font-script text-5xl text-gradient-romance md:text-7xl">
            A letter, just for you
          </h3>
          <div className="glass-card mt-10 rounded-3xl p-8 text-left md:p-12">
            <p className="font-serif-display text-lg italic leading-relaxed text-foreground/90 md:text-xl">
              My dearest Rashii Ammu,
              <br />
              <br />
              If love had a face, it would wear your smile. If it had a sound, it would be your
              laughter. I have spent so many nights writing this letter inside my heart — and today,
              on your birthday, I finally have the courage to say it out loud.
              <br />
              <br />
              You are my favorite reason. My quiet miracle. The one I want to grow old beside. Every
              dream I dream has your name written in the corner.
              <br />
              <br />
              So I'm not just wishing you a happy birthday today — I'm asking for every birthday
              after this one, too.
            </p>
            <p className="mt-8 text-right font-script text-3xl text-gold text-glow-gold md:text-4xl">
              — forever yours, Nithin
            </p>
          </div>
        </div>
      </section>

      {/* FINAL PROPOSAL */}
      <section className="relative overflow-hidden px-6 py-32">
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
