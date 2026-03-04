import { useState, useEffect } from "react";
import {
  Phone, ShoppingBag, User, CalendarDays,
  Star, X, Menu, ArrowRight, Award, Clock, MapPin, Utensils
} from "lucide-react";

/* ─── useWidth ──────────────────────────────────────────────── */
function useWidth() {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
}

/* ─── CONSTANTS ─────────────────────────────────────────────── */
const PRAYER = { sahar: "04:58", iftor: "19:47" };

const DUOLAR = [
  {
    type: "Iftor duosi", icon: "🌙",
    arabic: "اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    uzbek: "Allohim! Sening rizqing bilan ro'zani ochdim, Senga iymon keltirdim va Senga tavakkal qildim.",
  },
  {
    type: "Sahar duosi", icon: "⭐",
    arabic: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ",
    uzbek: "Ramazon oyida ertangi kuni ro'za tutishga niyat qildim.",
  },
];

const WEEK = [
  { day: "Du", sahar: "04:58", iftor: "19:47" },
  { day: "Se", sahar: "04:56", iftor: "19:48" },
  { day: "Ch", sahar: "04:54", iftor: "19:50" },
  { day: "Pa", sahar: "04:52", iftor: "19:51" },
  { day: "Ju", sahar: "04:50", iftor: "19:52" },
  { day: "Sh", sahar: "04:48", iftor: "19:54" },
  { day: "Ya", sahar: "04:47", iftor: "19:55" },
];

const NAV_LINKS = ["Menyu", "Zal", "Bron", "Retseptlar", "Haqimizda"];

const MENU_ITEMS = [
  {
    name: "Sushi Omakase", price: "145,000", tag: "Chef's Choice",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80",
    desc: "12 ta premium nigiri, sake & miso shorba",
  },
  {
    name: "Ramen Deluxe", price: "89,000", tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
    desc: "Tonkotsu bulyon, chashu, tamago",
  },
  {
    name: "Iftor Seti", price: "89,000", tag: "Ramazon",
    img: "https://images.unsplash.com/photo-1630093417590-24c09d80e6d0?w=600&q=80",
    desc: "Shorva, mezze, asosiy taom, shirinlik",
  },
  {
    name: "Wagyu Steak", price: "280,000", tag: "Premium A5",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
    desc: "A5 yapon wagyu, trüf yog'i, ikra",
  },
];

const PF = { fontFamily: "'Playfair Display', Georgia, serif" };
const LR = { fontFamily: "'Lora', Georgia, serif" };

/* ─── GLOBAL CSS ────────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #FDF0D5; }
  button { cursor: pointer; border: none; }
  a { text-decoration: none; }
  img { display: block; }

  @keyframes twinkle   { 0%,100%{opacity:0;transform:scale(.7)} 50%{opacity:.9;transform:scale(1.3)} }
  @keyframes fadeIn    { from{opacity:0} to{opacity:1} }
  @keyframes slideUp   { from{opacity:0;transform:translateY(18px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
  @keyframes slideDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
  @keyframes floatY    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
  @keyframes revealUp  { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
  @keyframes glowPulse { 0%,100%{box-shadow:0 8px 24px rgba(97,33,15,.2)} 50%{box-shadow:0 8px 40px rgba(97,33,15,.48)} }
  @keyframes shimmer   { 0%{transform:translateX(-100%)} 100%{transform:translateX(200%)} }
  @keyframes iconFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
  @keyframes cardIn    { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }

  .nav-lnk { position: relative; }
  .nav-lnk::after {
    content: ''; position: absolute; bottom: -3px; left: 0;
    width: 0; height: 1.5px; background: #61210F;
    border-radius: 2px; transition: width .28s ease;
  }
  .nav-lnk:hover::after { width: 100%; }

  .mc-img { transition: transform .5s cubic-bezier(.25,.46,.45,.94); }
  .mc:hover .mc-img { transform: scale(1.06); }
`;

/* ─── STARS ─────────────────────────────────────────────────── */
const STARS = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  left: `${(i * 41 + 7) % 100}%`,
  top:  `${(i * 67 + 13) % 100}%`,
  size: (i % 3) + 1,
  delay: `${((i * 0.19) % 5).toFixed(1)}s`,
  dur:   `${((i * 0.13) % 2 + 1.8).toFixed(1)}s`,
}));

function Stars() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {STARS.map(s => (
        <div key={s.id} style={{
          position: "absolute", left: s.left, top: s.top,
          width: s.size, height: s.size, borderRadius: "50%",
          background: "#FDF0D5", opacity: 0,
          animation: `twinkle ${s.dur} ease-in-out ${s.delay} infinite`,
        }} />
      ))}
    </div>
  );
}

/* ─── SVG ICONS – Ramazon only (unchanged) ──────────────────── */
function SvgMoon({ size = 38 }) {
  const id = `m${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <radialGradient id={id} cx="38%" cy="28%" r="65%">
          <stop offset="0%"   stopColor="#fffae0" />
          <stop offset="45%"  stopColor="#f5c832" />
          <stop offset="100%" stopColor="#b87208" />
        </radialGradient>
      </defs>
      <path
        d="M27.5 7C17.8 7 10 13.8 10 22s7.8 15 17.5 15c2 0 4-.3 5.8-1-4.5-.8-8-5.3-8-10.8 0-5.8 3.8-10.5 8.7-11.2C32.3 8.6 30 7 27.5 7z"
        fill={`url(#${id})`} style={{ filter: "drop-shadow(1.5px 2.5px 2px rgba(120,60,0,.45))" }}
      />
      <ellipse cx="28.5" cy="13" rx="1.8" ry="2.5" fill="rgba(255,255,255,.38)" transform="rotate(10 28.5 13)" />
    </svg>
  );
}

function SvgStar({ size = 36 }) {
  const id = `st${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id={id} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%"   stopColor="#fff8d0" />
          <stop offset="45%"  stopColor="#f5bf28" />
          <stop offset="100%" stopColor="#a86800" />
        </linearGradient>
      </defs>
      <path
        d="M20 5L23.5 14.5L34 14.5L25.8 20.5L29 30L20 24.5L11 30L14.2 20.5L6 14.5L16.5 14.5Z"
        fill={`url(#${id})`} style={{ filter: "drop-shadow(0 0 3px rgba(245,191,40,.6))" }}
      />
      <ellipse cx="15.5" cy="13" rx="2.5" ry="1.4" fill="rgba(255,255,255,.42)" transform="rotate(-18 15.5 13)" />
    </svg>
  );
}

function SvgPray({ size = 36 }) {
  const id = `pr${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#fde8cc" />
          <stop offset="100%" stopColor="#d4915a" />
        </linearGradient>
      </defs>
      <path d="M19.5 10C15 11 12 16 12.5 22L14 32L19.5 30.5L18.5 21C18 17 19.5 13 19.5 10Z"
        fill={`url(#${id})`} style={{ filter: "drop-shadow(1px 2px 1.8px rgba(97,33,15,.4))" }} />
      <path d="M20.5 10C25 11 28 16 27.5 22L26 32L20.5 30.5L21.5 21C22 17 20.5 13 20.5 10Z"
        fill={`url(#${id})`} style={{ filter: "drop-shadow(1px 2px 1.8px rgba(97,33,15,.4))" }} />
      <circle cx="20" cy="7" r="3.5"
        fill={`url(#${id})`} style={{ filter: "drop-shadow(1px 2px 1.8px rgba(97,33,15,.4))" }} />
      <ellipse cx="17" cy="10" rx="1.4" ry=".9" fill="rgba(255,255,255,.38)" transform="rotate(-25 17 10)" />
    </svg>
  );
}

/* ─── ICON BUTTON (Lucide) ──────────────────────────────────── */
function IconBtn({ icon: Icon, size = 46, onClick, label }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick} title={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: size, height: size, borderRadius: 13, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: hov
          ? "linear-gradient(145deg,#fff6e8,#f0d070)"
          : "linear-gradient(145deg,#fdf0d5,#e8c060)",
        boxShadow: hov
          ? "6px 6px 16px rgba(97,33,15,.22),-4px -4px 10px rgba(255,248,210,.95),inset 0 1px 2px rgba(255,255,255,.6)"
          : "4px 4px 10px rgba(97,33,15,.14),-3px -3px 8px rgba(255,248,210,.88),inset 0 1px 1px rgba(255,255,255,.5)",
        transform: hov ? "translateY(-4px) scale(1.1)" : "translateY(0) scale(1)",
        transition: "all .3s cubic-bezier(.34,1.56,.64,1)",
      }}
    >
      <Icon size={size * 0.44} strokeWidth={1.7} color="#61210F" />
    </button>
  );
}

/* ─── COUNTDOWN ─────────────────────────────────────────────── */
function Countdown({ target, compact = false }) {
  const [t, setT] = useState({ h: "00", m: "00", s: "00" });
  useEffect(() => {
    function calc() {
      const now = new Date(), parts = target.split(":"), end = new Date();
      end.setHours(+parts[0], +parts[1], 0, 0);
      if (end <= now) end.setDate(end.getDate() + 1);
      const d = Math.max(0, Math.floor((end - now) / 1000));
      setT({
        h: String(Math.floor(d / 3600)).padStart(2, "0"),
        m: String(Math.floor((d % 3600) / 60)).padStart(2, "0"),
        s: String(d % 60).padStart(2, "0"),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);

  const vals = [t.h, t.m, t.s];
  const labels = compact ? ["s", "d", "sn"] : ["soat", "daqiqa", "son."];
  const fs = compact ? 15 : 19;
  const pw = compact ? 32 : 42;

  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
      {vals.map((v, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
          <div style={{
            ...PF,
            background: "linear-gradient(160deg,rgba(255,255,255,.18),rgba(255,255,255,.06))",
            border: "1px solid rgba(253,240,213,.25)", borderRadius: 8,
            padding: compact ? "3px 6px" : "4px 9px",
            fontSize: fs, fontWeight: 800, color: "#FDF0D5",
            minWidth: pw, textAlign: "center", letterSpacing: 1,
          }}>
            {v}
          </div>
          <span style={{ ...LR, fontSize: 7, color: "rgba(253,240,213,.38)", textTransform: "uppercase", letterSpacing: ".1em" }}>
            {labels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RAMADAN BANNER
═══════════════════════════════════════════════════════════════ */
function RamadanBanner({ onDuoOpen }) {
  const w = useWidth();
  const isSm = w < 600;
  const isMd = w < 900;
  const [expanded, setExpanded] = useState(false);
  const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <div style={{
      position: "relative", overflow: "hidden",
      background: "linear-gradient(135deg,#180602 0%,#61210F 55%,#250b04 100%)",
      borderBottom: "1px solid rgba(253,240,213,.1)",
    }}>
      <Stars />
      {[{ r: -50, t: -50, s: 200 }, { l: -40, b: -40, s: 160 }].map((o, i) => (
        <div key={i} style={{ position: "absolute", right: o.r, top: o.t, left: o.l, bottom: o.b, width: o.s, height: o.s, borderRadius: "50%", pointerEvents: "none", border: "1px solid rgba(253,240,213,.06)" }} />
      ))}

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: isSm ? "0 14px" : "0 28px" }}>

        {!isMd && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "13px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
              <div style={{ animation: "floatY 3s ease-in-out infinite" }}><SvgMoon size={40} /></div>
              <div>
                <p style={{ ...LR, color: "rgba(253,240,213,.45)", fontSize: 9.5, letterSpacing: ".22em", textTransform: "uppercase", margin: "0 0 1px" }}>Ramazon Muborak</p>
                <p style={{ ...PF, color: "#FDF0D5", fontSize: 16, fontWeight: 700, margin: 0 }}>1446-yil ramazon oyi</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {[{ label: "Sahar", time: PRAYER.sahar, Icon: <SvgStar size={26} /> }, { label: "Iftor", time: PRAYER.iftor, Icon: <SvgMoon size={26} /> }].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, background: "rgba(253,240,213,.07)", border: "1px solid rgba(253,240,213,.12)", borderRadius: 12, padding: "9px 16px" }}>
                  <div style={{ animation: "iconFloat 4s ease-in-out infinite" }}>{item.Icon}</div>
                  <div>
                    <p style={{ ...LR, color: "rgba(253,240,213,.45)", fontSize: 8.5, letterSpacing: ".18em", textTransform: "uppercase", margin: "0 0 1px" }}>{item.label}</p>
                    <p style={{ ...PF, color: "#FDF0D5", fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: 1 }}>{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p style={{ ...LR, color: "rgba(253,240,213,.4)", fontSize: 8.5, letterSpacing: ".18em", textTransform: "uppercase", margin: "0 0 4px" }}>Iftorga qadar</p>
              <Countdown target={PRAYER.iftor} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <button onClick={onDuoOpen} style={{ ...PF, display: "flex", alignItems: "center", gap: 7, padding: "9px 16px", borderRadius: 11, border: "1px solid rgba(253,240,213,.2)", background: "rgba(253,240,213,.08)", color: "#FDF0D5", fontSize: 13, fontWeight: 600, transition: "all .25s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(253,240,213,.18)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(253,240,213,.08)"; }}>
                <SvgPray size={17} /> Duo
              </button>
              <button onClick={() => setExpanded(p => !p)} style={{ width: 36, height: 36, borderRadius: 9, border: "1px solid rgba(253,240,213,.15)", background: "rgba(253,240,213,.06)", color: "rgba(253,240,213,.6)", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform .35s ease", transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}>▾</button>
            </div>
          </div>
        )}

        {isMd && !isSm && (
          <div style={{ padding: "12px 0 8px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ animation: "floatY 3s ease-in-out infinite" }}><SvgMoon size={34} /></div>
                <div>
                  <p style={{ ...LR, color: "rgba(253,240,213,.45)", fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 1px" }}>Ramazon Muborak</p>
                  <p style={{ ...PF, color: "#FDF0D5", fontSize: 15, fontWeight: 700, margin: 0 }}>1446-yil ramazon oyi</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button onClick={onDuoOpen} style={{ ...PF, display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 10, border: "1px solid rgba(253,240,213,.2)", background: "rgba(253,240,213,.08)", color: "#FDF0D5", fontSize: 12, fontWeight: 600, transition: "background .25s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(253,240,213,.18)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(253,240,213,.08)"; }}>
                  <SvgPray size={15} /> Duo
                </button>
                <button onClick={() => setExpanded(p => !p)} style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid rgba(253,240,213,.15)", background: "rgba(253,240,213,.06)", color: "rgba(253,240,213,.6)", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform .35s ease", transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}>▾</button>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, paddingBottom: 10 }}>
              <div style={{ display: "flex", gap: 10 }}>
                {[{ label: "Sahar", time: PRAYER.sahar, Icon: <SvgStar size={22} /> }, { label: "Iftor", time: PRAYER.iftor, Icon: <SvgMoon size={22} /> }].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(253,240,213,.07)", border: "1px solid rgba(253,240,213,.12)", borderRadius: 10, padding: "7px 13px" }}>
                    <div style={{ animation: "iconFloat 4s ease-in-out infinite" }}>{item.Icon}</div>
                    <div>
                      <p style={{ ...LR, color: "rgba(253,240,213,.45)", fontSize: 8, letterSpacing: ".16em", textTransform: "uppercase", margin: "0 0 1px" }}>{item.label}</p>
                      <p style={{ ...PF, color: "#FDF0D5", fontSize: 19, fontWeight: 800, margin: 0, letterSpacing: .8 }}>{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <p style={{ ...LR, color: "rgba(253,240,213,.4)", fontSize: 8, letterSpacing: ".16em", textTransform: "uppercase", margin: "0 0 3px" }}>Iftorga qadar</p>
                <Countdown target={PRAYER.iftor} compact />
              </div>
            </div>
          </div>
        )}

        {isSm && (
          <div style={{ padding: "11px 0 8px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <SvgMoon size={28} />
                <p style={{ ...PF, color: "#FDF0D5", fontSize: 14, fontWeight: 700, margin: 0 }}>Ramazon 1446</p>
              </div>
              <div style={{ display: "flex", gap: 7 }}>
                <button onClick={onDuoOpen} style={{ ...PF, display: "flex", alignItems: "center", gap: 5, padding: "7px 12px", borderRadius: 9, border: "1px solid rgba(253,240,213,.2)", background: "rgba(253,240,213,.08)", color: "#FDF0D5", fontSize: 11.5, fontWeight: 600 }}>
                  <SvgPray size={14} /> Duo
                </button>
                <button onClick={() => setExpanded(p => !p)} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid rgba(253,240,213,.15)", background: "rgba(253,240,213,.06)", color: "rgba(253,240,213,.6)", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform .35s", transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}>▾</button>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, paddingBottom: 10 }}>
              <div style={{ display: "flex", gap: 8 }}>
                {[{ label: "Sahar", time: PRAYER.sahar }, { label: "Iftor", time: PRAYER.iftor }].map((item, i) => (
                  <div key={i} style={{ background: "rgba(253,240,213,.08)", border: "1px solid rgba(253,240,213,.12)", borderRadius: 9, padding: "6px 11px", textAlign: "center" }}>
                    <p style={{ ...LR, color: "rgba(253,240,213,.45)", fontSize: 7.5, letterSpacing: ".14em", textTransform: "uppercase", margin: "0 0 2px" }}>{item.label}</p>
                    <p style={{ ...PF, color: "#FDF0D5", fontSize: 18, fontWeight: 800, margin: 0, letterSpacing: .5 }}>{item.time}</p>
                  </div>
                ))}
              </div>
              <Countdown target={PRAYER.iftor} compact />
            </div>
          </div>
        )}

        {expanded && (
          <div style={{ paddingBottom: 14, animation: "slideDown .3s ease" }}>
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(253,240,213,.1)", background: "rgba(0,0,0,.15)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)" }}>
                {WEEK.map((d, i) => (
                  <div key={i} style={{ padding: isSm ? "6px 2px" : "7px 4px", textAlign: "center", borderRight: i < 6 ? "1px solid rgba(253,240,213,.06)" : "none", background: i === todayIdx ? "rgba(253,240,213,.12)" : "transparent" }}>
                    <p style={{ ...PF, fontSize: isSm ? 9 : 10.5, textTransform: "uppercase", margin: "0 0 4px", color: i === todayIdx ? "#FDF0D5" : "rgba(253,240,213,.38)", fontWeight: i === todayIdx ? 700 : 400 }}>
                      {d.day}
                      {i === todayIdx && <span style={{ display: "block", width: 4, height: 4, borderRadius: "50%", background: "#f5c030", margin: "2px auto 0" }} />}
                    </p>
                    <p style={{ ...LR, fontSize: isSm ? 8 : 10, color: "rgba(253,240,213,.6)", margin: "0 0 2px" }}>{d.sahar}</p>
                    <p style={{ ...LR, fontSize: isSm ? 8 : 10, color: "rgba(253,240,213,.85)", margin: 0 }}>{d.iftor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DUO MODAL
═══════════════════════════════════════════════════════════════ */
function DuoModal({ open, onClose }) {
  const [tab, setTab] = useState(0);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, background: "rgba(12,3,1,.85)", backdropFilter: "blur(16px)", animation: "fadeIn .22s ease" }}>
      <div onClick={e => e.stopPropagation()} style={{ width: "100%", maxWidth: 450, borderRadius: 24, padding: "30px 26px", background: "linear-gradient(155deg,#FDF0D5,#f5ddb0)", boxShadow: "0 32px 80px rgba(97,33,15,.48)", animation: "slideUp .3s cubic-bezier(.34,1.56,.64,1)" }}>
        <div style={{ textAlign: "center", marginBottom: 6 }}><SvgMoon size={50} /></div>
        <p style={{ ...PF, textAlign: "center", fontSize: 21, fontWeight: 700, color: "#61210F", margin: "0 0 18px" }}>Muborak Duolar</p>
        <div style={{ display: "flex", gap: 6, background: "rgba(97,33,15,.09)", borderRadius: 13, padding: 4, marginBottom: 20 }}>
          {DUOLAR.map((d, i) => (
            <button key={i} onClick={() => setTab(i)} style={{ ...PF, flex: 1, padding: "9px 0", borderRadius: 9, fontSize: 13, fontWeight: 600, background: tab === i ? "#61210F" : "transparent", color: tab === i ? "#FDF0D5" : "#61210F", transition: "all .2s ease" }}>
              {d.icon} {d.type}
            </button>
          ))}
        </div>
        <div style={{ background: "rgba(97,33,15,.05)", border: "1px solid rgba(97,33,15,.12)", borderRadius: 13, padding: "16px 14px", marginBottom: 14, textAlign: "center" }}>
          <p style={{ fontFamily: "serif", fontSize: 19, lineHeight: 2, color: "#61210F", direction: "rtl", margin: 0 }}>{DUOLAR[tab].arabic}</p>
        </div>
        <p style={{ ...LR, textAlign: "center", fontStyle: "italic", fontSize: 13.5, color: "#7a3a1a", lineHeight: 1.75, marginBottom: 20 }}>"{DUOLAR[tab].uzbek}"</p>
        <button onClick={onClose} style={{ ...PF, width: "100%", padding: "12px 0", borderRadius: 12, background: "#61210F", color: "#FDF0D5", fontSize: 14, fontWeight: 600, transition: "opacity .2s" }}
          onMouseEnter={e => { e.currentTarget.style.opacity = ".82"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}>
          Yopish ✕
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════════ */
function Navbar() {
  const w = useWidth();
  const isMob = w < 900;
  const [sc, setSc] = useState(false);
  const [mOpen, setMOpen] = useState(false);

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { if (!isMob) setMOpen(false); }, [isMob]);

  const h = isMob ? 60 : 72;

  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(24px)", transition: "all .4s ease", background: sc ? "rgba(253,240,213,.97)" : "rgba(253,240,213,.92)", borderBottom: sc ? "1px solid rgba(97,33,15,.1)" : "1px solid transparent", boxShadow: sc ? "0 4px 32px rgba(97,33,15,.07)" : "none" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: isMob ? "0 16px" : "0 32px", height: h, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div style={{ width: isMob ? 40 : 46, height: isMob ? 40 : 46, borderRadius: 13, background: "linear-gradient(145deg,#6e1a08,#9c2e14)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "4px 4px 12px rgba(97,33,15,.3),-2px -2px 6px rgba(255,228,170,.5)" }}>
              <Utensils size={isMob ? 18 : 22} color="#FDF0D5" strokeWidth={1.8} />
            </div>
            <div>
              <p style={{ ...PF, fontSize: isMob ? 18 : 21, fontWeight: 900, color: "#61210F", margin: 0, lineHeight: 1 }}>Xon Atlas</p>
              <p style={{ ...LR, fontSize: 8, color: "rgba(97,33,15,.36)", margin: 0, letterSpacing: ".25em", textTransform: "uppercase" }}>Restaurant</p>
            </div>
          </div>

          {/* Desktop nav */}
          {!isMob && (
            <nav style={{ display: "flex", gap: 32, alignItems: "center", flex: 1, justifyContent: "center" }}>
              {NAV_LINKS.map(link => (
                <a key={link} href="#" className="nav-lnk" style={{ ...LR, fontSize: 13.5, color: "rgba(97,33,15,.55)", fontWeight: 500, letterSpacing: .3, transition: "color .22s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#61210F"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(97,33,15,.55)"; }}>
                  {link}
                </a>
              ))}
            </nav>
          )}

          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: isMob ? 6 : 8, flexShrink: 0 }}>
            {!isMob && (
              <>
                <IconBtn icon={Phone}       size={46} label="Telefon" />
                <IconBtn icon={ShoppingBag} size={46} label="Buyurtma" />
                <IconBtn icon={User}        size={46} label="Profil" />
                <button style={{ ...PF, marginLeft: 6, padding: "10px 22px", borderRadius: 13, background: "linear-gradient(135deg,#61210F,#8a2a12)", color: "#FDF0D5", fontSize: 13, fontWeight: 700, letterSpacing: .4, boxShadow: "0 4px 18px rgba(97,33,15,.3)", transition: "all .26s ease", display: "flex", alignItems: "center", gap: 7, flexShrink: 0 }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 9px 28px rgba(97,33,15,.42)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 18px rgba(97,33,15,.3)"; }}>
                  <CalendarDays size={14} strokeWidth={2} /> Stol bron
                </button>
              </>
            )}
            {isMob && (
              <button onClick={() => setMOpen(p => !p)} style={{ width: 42, height: 42, borderRadius: 12, border: "1.5px solid rgba(97,33,15,.18)", background: "rgba(97,33,15,.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#61210F" }}>
                {mOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>
        </div>
      </header>

      {mOpen && (
        <div style={{ position: "fixed", top: h, left: 0, right: 0, zIndex: 99, background: "rgba(253,240,213,.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(97,33,15,.1)", boxShadow: "0 12px 40px rgba(97,33,15,.1)", padding: "10px 20px 20px", animation: "slideDown .25s ease" }}>
          {NAV_LINKS.map(link => (
            <a key={link} href="#" onClick={() => setMOpen(false)} style={{ ...LR, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 0", borderBottom: "1px solid rgba(97,33,15,.08)", fontSize: 16, color: "rgba(97,33,15,.7)", fontWeight: 500 }}>
              {link} <ArrowRight size={14} color="rgba(97,33,15,.35)" />
            </a>
          ))}
          <button style={{ ...PF, marginTop: 16, width: "100%", padding: "14px 0", borderRadius: 13, background: "linear-gradient(135deg,#61210F,#8a2a12)", color: "#FDF0D5", fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <CalendarDays size={16} /> Stol bron qilish
          </button>
        </div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MENU CARD
═══════════════════════════════════════════════════════════════ */
function MenuCard({ item, active, onClick, imgH = 160 }) {
  return (
    <div className="mc" onClick={onClick} style={{
      borderRadius: 18, overflow: "hidden", cursor: "pointer",
      border: active ? "2px solid #61210F" : "2px solid transparent",
      boxShadow: active ? "0 14px 36px rgba(97,33,15,.22)" : "0 3px 16px rgba(97,33,15,.09)",
      transform: active ? "translateY(-4px)" : "translateY(0)",
      transition: "all .3s cubic-bezier(.25,.46,.45,.94)",
      background: "#fff8ee", animation: "cardIn .5s ease both",
    }}>
      <div style={{ height: imgH, overflow: "hidden", position: "relative" }}>
        <img src={item.img} alt={item.name} className="mc-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,.5) 0%,transparent 55%)" }} />
        <span style={{ position: "absolute", top: 10, left: 10, ...LR, fontSize: 9, letterSpacing: ".12em", textTransform: "uppercase", background: active ? "#61210F" : "rgba(0,0,0,.55)", color: "#FDF0D5", padding: "3px 9px", borderRadius: 100, transition: "background .3s" }}>
          {item.tag}
        </span>
        {active && (
          <div style={{ position: "absolute", top: 10, right: 10, width: 26, height: 26, borderRadius: "50%", background: "#61210F", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Award size={13} color="#FDF0D5" strokeWidth={2.5} />
          </div>
        )}
      </div>
      <div style={{ padding: "12px 14px 14px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 6, marginBottom: 4 }}>
          <p style={{ ...PF, fontSize: 13.5, fontWeight: 700, color: "#61210F", margin: 0, lineHeight: 1.2 }}>{item.name}</p>
          <p style={{ ...PF, fontSize: 12.5, fontWeight: 700, color: "#61210F", margin: 0, whiteSpace: "nowrap", flexShrink: 0 }}>
            {item.price}<span style={{ ...LR, fontSize: 8.5, color: "rgba(97,33,15,.5)" }}> so'm</span>
          </p>
        </div>
        <p style={{ ...LR, fontSize: 11, color: "rgba(97,33,15,.55)", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════ */
function Hero() {
  const w = useWidth();
  const isSm  = w < 480;
  const isMob = w < 700;
  const isTab = w < 1100;
  const [active, setActive] = useState(0);

  const imgH = isSm ? 120 : isMob ? 140 : isTab ? 155 : 165;

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "#FDF0D5" }}>

      {!isTab && (
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "50%", background: "linear-gradient(160deg,#180502,#3d0e06,#61210F)", borderRadius: "0 64px 64px 0", zIndex: 0 }}>
          <Stars />
          <div style={{ position: "absolute", right: -70, top: "15%", width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(253,240,213,.07)", pointerEvents: "none" }} />
        </div>
      )}

      {isTab && (
        <div style={{ position: "absolute", left: 0, top: 0, right: 0, height: isSm ? "48%" : "44%", background: "linear-gradient(180deg,#1a0503,#61210F)", borderRadius: "0 0 44px 44px", zIndex: 0 }}>
          <Stars />
        </div>
      )}

      {/* ════ DESKTOP ════ */}
      {!isTab && (
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", minHeight: "92vh" }}>

          <div style={{ paddingRight: 52, paddingTop: 60, paddingBottom: 60, animation: "revealUp .8s ease both" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(253,240,213,.12)", border: "1px solid rgba(253,240,213,.22)", borderRadius: 100, padding: "5px 16px 5px 8px", marginBottom: 26 }}>
              <SvgMoon size={20} />
              <span style={{ ...LR, fontSize: 10, color: "rgba(253,240,213,.72)", letterSpacing: ".18em", textTransform: "uppercase" }}>Ramazon iftor menyu mavjud</span>
            </div>
            <h1 style={{ ...PF, fontSize: "clamp(50px,4.5vw,70px)", fontWeight: 900, color: "#FDF0D5", lineHeight: 1.05, letterSpacing: -1.5, margin: "0 0 6px" }}>Xon Atlas</h1>
            <p style={{ ...PF, fontSize: "clamp(15px,1.5vw,20px)", fontStyle: "italic", color: "rgba(253,240,213,.48)", margin: "0 0 20px", letterSpacing: .8 }}>— Har bir taom bir hikoya</p>
            <div style={{ width: 80, height: 2, background: "linear-gradient(90deg,transparent,rgba(253,240,213,.35),transparent)", margin: "0 0 22px", position: "relative", overflow: "hidden", borderRadius: 2 }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,transparent,rgba(253,240,213,.9),transparent)", animation: "shimmer 2.5s ease-in-out infinite" }} />
            </div>
            <p style={{ ...LR, fontSize: 14.5, color: "rgba(253,240,213,.58)", lineHeight: 1.9, margin: "0 0 28px", maxWidth: 370 }}>Yaponiya va O'rta Osiyo an'analarini birlashtirgan noyob ta'm olamiga xush kelibsiz.</p>
            <div style={{ display: "flex", gap: 22, marginBottom: 32 }}>
              {[{ num: "4.9", label: "Reyting", I: Star }, { num: "2400+", label: "Mijoz", I: User }, { num: "8+", label: "Tajriba", I: Clock }, { num: "3km", label: "Markaz", I: MapPin }].map((s, i) => (
                <div key={i}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
                    <s.I size={14} color="rgba(253,240,213,.5)" strokeWidth={1.8} />
                    <span style={{ ...PF, fontSize: 20, fontWeight: 800, color: "#FDF0D5" }}>{s.num}</span>
                  </div>
                  <p style={{ ...LR, fontSize: 8.5, color: "rgba(253,240,213,.36)", margin: 0, letterSpacing: ".14em", textTransform: "uppercase" }}>{s.label}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button style={{ ...PF, display: "flex", alignItems: "center", gap: 9, padding: "14px 28px", borderRadius: 14, background: "#FDF0D5", color: "#61210F", fontSize: 14, fontWeight: 700, letterSpacing: .3, boxShadow: "0 8px 28px rgba(0,0,0,.28)", transition: "all .3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,.38)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,.28)"; }}>
                <CalendarDays size={17} strokeWidth={2} /> Stol bron qilish
              </button>
              <button style={{ ...PF, display: "flex", alignItems: "center", gap: 8, padding: "14px 22px", borderRadius: 14, background: "transparent", color: "rgba(253,240,213,.72)", fontSize: 14, fontWeight: 600, border: "1.5px solid rgba(253,240,213,.24)", transition: "all .3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(253,240,213,.08)"; e.currentTarget.style.color = "#FDF0D5"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(253,240,213,.72)"; }}>
                Menyu <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div style={{ paddingLeft: 48, paddingTop: 60, paddingBottom: 60, animation: "revealUp .9s ease .15s both" }}>
            <p style={{ ...LR, fontSize: 10, color: "rgba(97,33,15,.4)", letterSpacing: ".22em", textTransform: "uppercase", margin: "0 0 12px" }}>Ommabop taomlar</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
              {MENU_ITEMS.map((item, i) => <MenuCard key={i} item={item} active={active === i} onClick={() => setActive(i)} imgH={imgH} />)}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 15px", borderRadius: 14, background: "linear-gradient(135deg,#61210F,#8a2a10)", boxShadow: "0 8px 28px rgba(97,33,15,.25)", animation: "glowPulse 3s ease-in-out infinite" }}>
              <img src={MENU_ITEMS[active].img} alt="" style={{ width: 42, height: 42, borderRadius: 9, objectFit: "cover", flexShrink: 0, border: "2px solid rgba(253,240,213,.2)" }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ ...PF, fontSize: 13.5, fontWeight: 700, color: "#FDF0D5", margin: "0 0 2px" }}>{MENU_ITEMS[active].name}</p>
                <p style={{ ...LR, fontSize: 11, color: "rgba(253,240,213,.55)", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{MENU_ITEMS[active].desc}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ ...PF, fontSize: 16, fontWeight: 800, color: "#FDF0D5", margin: 0 }}>{MENU_ITEMS[active].price}</p>
                <p style={{ ...LR, fontSize: 8.5, color: "rgba(253,240,213,.45)", margin: 0, textTransform: "uppercase" }}>so'm</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ════ MOBILE / TABLET ════ */}
      {isTab && (
        <div style={{ position: "relative", zIndex: 1, maxWidth: 680, margin: "0 auto", padding: isSm ? "0 14px" : "0 24px" }}>

          <div style={{ paddingTop: isSm ? 40 : 52, paddingBottom: isSm ? 28 : 36, textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(253,240,213,.12)", border: "1px solid rgba(253,240,213,.22)", borderRadius: 100, padding: "4px 14px 4px 7px", marginBottom: 18 }}>
              <SvgMoon size={17} />
              <span style={{ ...LR, fontSize: 9, color: "rgba(253,240,213,.72)", letterSpacing: ".16em", textTransform: "uppercase" }}>Ramazon iftor menyu mavjud</span>
            </div>
            <h1 style={{ ...PF, fontSize: isSm ? "clamp(38px,10vw,52px)" : "clamp(46px,8vw,62px)", fontWeight: 900, color: "#FDF0D5", lineHeight: 1.05, letterSpacing: -1.5, margin: "0 0 7px" }}>Xon Atlas</h1>
            <p style={{ ...PF, fontSize: isSm ? 14 : 17, fontStyle: "italic", color: "rgba(253,240,213,.48)", margin: "0 0 14px" }}>— Har bir taom bir hikoya</p>
            <p style={{ ...LR, fontSize: isSm ? 12.5 : 14, color: "rgba(253,240,213,.56)", lineHeight: 1.85, margin: "0 auto 20px", maxWidth: 460 }}>
              Yaponiya va O'rta Osiyo an'analarini birlashtirgan noyob ta'm olamiga xush kelibsiz.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: isSm ? 14 : 24, marginBottom: 22, flexWrap: "wrap" }}>
              {[{ num: "4.9", label: "Reyting", I: Star }, { num: "2400+", label: "Mijoz", I: User }, { num: "8+", label: "Tajriba", I: Clock }].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, justifyContent: "center", marginBottom: 2 }}>
                    <s.I size={13} color="rgba(253,240,213,.5)" strokeWidth={1.8} />
                    <span style={{ ...PF, fontSize: isSm ? 17 : 19, fontWeight: 800, color: "#FDF0D5" }}>{s.num}</span>
                  </div>
                  <p style={{ ...LR, fontSize: 8, color: "rgba(253,240,213,.36)", margin: 0, letterSpacing: ".14em", textTransform: "uppercase" }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <button style={{ ...PF, display: "flex", alignItems: "center", gap: 8, padding: isSm ? "12px 20px" : "13px 26px", borderRadius: 13, background: "#FDF0D5", color: "#61210F", fontSize: isSm ? 12.5 : 13.5, fontWeight: 700, boxShadow: "0 8px 28px rgba(0,0,0,.25)", transition: "all .3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
                <CalendarDays size={15} /> Stol bron qilish
              </button>
              <button style={{ ...PF, display: "flex", alignItems: "center", gap: 7, padding: isSm ? "12px 16px" : "13px 22px", borderRadius: 13, background: "transparent", color: "rgba(253,240,213,.75)", fontSize: isSm ? 12.5 : 13.5, fontWeight: 600, border: "1.5px solid rgba(253,240,213,.25)", transition: "all .3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(253,240,213,.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
                Menyu <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div style={{ paddingBottom: 48 }}>
            <p style={{ ...LR, fontSize: 9.5, color: "rgba(97,33,15,.45)", letterSpacing: ".22em", textTransform: "uppercase", margin: "0 0 12px", textAlign: "center" }}>Ommabop taomlar</p>
            <div style={{ display: "grid", gridTemplateColumns: isSm ? "1fr 1fr" : "repeat(2,1fr)", gap: isSm ? 9 : 12, marginBottom: 12 }}>
              {MENU_ITEMS.map((item, i) => (
                <MenuCard key={i} item={item} active={active === i} onClick={() => setActive(i)} imgH={imgH} />
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "12px 14px", borderRadius: 14, background: "linear-gradient(135deg,#61210F,#8a2a10)", boxShadow: "0 8px 28px rgba(97,33,15,.22)" }}>
              <img src={MENU_ITEMS[active].img} alt="" style={{ width: isSm ? 38 : 44, height: isSm ? 38 : 44, borderRadius: 9, objectFit: "cover", flexShrink: 0, border: "2px solid rgba(253,240,213,.2)" }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ ...PF, fontSize: isSm ? 12.5 : 13.5, fontWeight: 700, color: "#FDF0D5", margin: "0 0 2px" }}>{MENU_ITEMS[active].name}</p>
                <p style={{ ...LR, fontSize: 10.5, color: "rgba(253,240,213,.55)", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{MENU_ITEMS[active].desc}</p>
              </div>
              <p style={{ ...PF, fontSize: isSm ? 13 : 15, fontWeight: 800, color: "#FDF0D5", margin: 0, flexShrink: 0 }}>
                {MENU_ITEMS[active].price}
                <span style={{ ...LR, fontSize: 8.5, color: "rgba(253,240,213,.45)" }}> so'm</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════════ */
export default function InfoPage() {
  const [duoOpen, setDuoOpen] = useState(false);
  return (
    <div style={{ minHeight: "100vh", background: "#FDF0D5" }}>
      <style>{CSS}</style>
      <RamadanBanner onDuoOpen={() => setDuoOpen(true)} />
      <Navbar />
      <Hero />
      <DuoModal open={duoOpen} onClose={() => setDuoOpen(false)} />
    </div>
  );
}