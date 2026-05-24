import { useEffect, useState } from "react";
import { Heart, Sparkles as SparklesIcon } from "lucide-react";

function FallingHearts() {
  const [pieces, setPieces] = useState<Array<{id:number;left:number;delay:number;duration:number;size:number;color:string}>>([]);
  useEffect(() => {
    setPieces(
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2.5,
        duration: 3 + Math.random() * 4,
        size: 10 + Math.random() * 14,
        color: ["#ff3d6e", "#ff8fb1", "#ffc857", "#ffffff"][i % 4],
      })),
    );
  }, []);
  return (
    <div className="pointer-events-none absolute inset-0 z-[60] overflow-hidden">
      {pieces.map((p) => (
        <Heart
          key={p.id}
          className="absolute -top-6"
          fill={p.color}
          color={p.color}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `float-heart ${p.duration}s linear ${p.delay}s forwards`,
            filter: `drop-shadow(0 0 6px ${p.color})`,
          }}
        />
      ))}
    </div>
  );
}

export function ProposalFinale() {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (accepted) {
      const t = setTimeout(() => setShake(false), 800);
      return () => clearTimeout(t);
    }
  }, [accepted]);

  const dodgeNo = () => {
    setNoPos({
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 120,
    });
  };

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      {accepted && <FallingHearts />}
      <div className="mb-6 flex justify-center">
        <Heart className="h-14 w-14 animate-heartbeat fill-rose text-rose drop-shadow-[0_0_30px_oklch(0.72_0.18_5/0.8)]" />
      </div>

      {!accepted ? (
        <>
          <p className="font-script text-5xl md:text-7xl text-glow text-gradient-romance">
            ನನ್ನನ್ನು ಮದುವೆಯಾಗುತ್ತೀಯಾ?
          </p>
          <p className="mt-6 font-serif-display text-lg italic text-blush md:text-xl">
            ನನ್ನ ರಶಿ ಅಮ್ಮು… ನಿನ್ನ "ಹೌದು" ಜೊತೆ ನಮ್ಮ ಶಾಶ್ವತತೆ ಆರಂಭವಾಗುತ್ತದೆ. 💍
          </p>
          <div className="relative mt-12 flex items-center justify-center gap-6">
            <button
              onClick={() => setAccepted(true)}
              className="btn-romance group rounded-full px-10 py-4 font-display text-2xl"
            >
              <span className="inline-flex items-center gap-2">
                ಹೌದು <Heart className="h-5 w-5 fill-current transition group-hover:animate-heartbeat" />
              </span>
            </button>
            <button
              onMouseEnter={dodgeNo}
              onClick={dodgeNo}
              onTouchStart={dodgeNo}
              style={{
                transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                transition: "transform 0.25s cubic-bezier(.5,1.7,.4,1)",
              }}
              className="glass-card rounded-full px-6 py-3 font-display text-lg text-muted-foreground"
            >
              ಇಲ್ಲ
            </button>
          </div>
          <p className="mt-8 text-sm italic text-muted-foreground">
            ("ಇಲ್ಲ" ಸ್ವಲ್ಪ ನಾಚಿಕೆಪಡುತ್ತಿರಬಹುದು… 💕)
          </p>
        </>
      ) : (
        <div className="animate-fade-up">
          <SparklesIcon className="mx-auto mb-4 h-10 w-10 text-gold animate-pulse" />
          <p className="font-script text-6xl text-glow-gold animate-shimmer md:text-8xl">
            ಅವಳು ಹೌದು ಎಂದಳು!
          </p>
          <p className="mt-6 font-serif-display text-xl italic text-blush md:text-2xl">
            ರಶಿ ಅಮ್ಮು <span className="text-rose">❤</span> ನಿಥಿನ್ — ಸದಾಕಾಲ, ಸದಾಕಾಲ.
          </p>
          <p className="mt-3 font-display text-2xl text-gradient-romance md:text-3xl">
            "ಎರಡು ಹೃದಯಗಳು, ಒಂದು ವಚನ."
          </p>
        </div>
      )}
    </div>
  );
}