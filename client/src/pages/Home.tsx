// Design philosophy: Dark Editorial Performance — one dominant idea per frame, offset composition, technical microcopy, and signal-lime interactions.
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, ChevronDown, Menu, MoveRight, Play, X } from "lucide-react";

const heroImage = "/images/creta-car.webp";
const detailImage = "/images/creta-car-front.webp";
const escapeImage = "/images/creta-car-back.webp";
const mark = "/images/creta-logo.webp";

const colors = ["#25282a", "#d7d4cc", "#c8f24a", "#9aa0a1"];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(0);
  const [showSpecs, setShowSpecs] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <main className="site-shell">
      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <button className="brand-lockup" onClick={() => go("top")} aria-label="Back to top">
          <img src={mark} alt="Creta Car mark" />
        
        </button>
        
        <button className="menu-trigger" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label="Open navigation">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </header>

      <div className={`menu-panel ${menuOpen ? "menu-panel-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-panel-inner">
          <span className="mono menu-kicker">Navigate / 00—04</span>
          {["top", "machine", "details", "escape"].map((id, i) => (
            <button key={id} onClick={() => go(id)} className="menu-link">
              <span className="mono">0{i}</span>{id === "top" ? "Home" : id === "machine" ? "The machine" : id === "details" ? "In the detail" : "Go further"}
              <ArrowUpRight size={21} />
            </button>
          ))}
         
      </div>

      <section id="top" className="hero-section">
        <img className="hero-image" src={heroImage} alt="Creta Car on a winding mountain road" />
        <div className="hero-shade" />
        <div className="hero-content">
          
          <h1>Make the<br /><em>everyday</em><br />feel engineered.</h1>
          <div className="hero-bottom">
            <p>Creta Car is a compact SUV with a larger sense of possibility. Designed to move through the city, then keep going.</p>
            <button className="round-arrow" onClick={() => go("machine")} aria-label="Explore the machine"><ArrowDownRight size={23} /></button>
          </div>
      
        <div className="hero-index mono">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section id="machine" className="statement-section section-dark">
        <div className="chapter-rail mono"><span className="rail-line" /> 02 / THE MACHINE</div>
        <div className="statement-wrap">
          <div className="ghost-number">02</div>
          <p className="eyebrow mono">BUILT FOR THE IN-BETWEEN</p>
          <h2>City sharp.<br /><span>Wild at heart.</span></h2>
          <p className="statement-copy">From the first turn of the wheel to the last light on the horizon, every surface has a reason. Creta carries presence without the noise.</p>
          <button className="text-link" onClick={() => go("details")}>Explore the details <MoveRight size={17} /></button>
        </div>
      </section>

      <section id="details" className="detail-section">
        <div className="detail-image-wrap"><img src={detailImage} alt="Close-up of Creta Car headlamp and grille" /></div>
        <div className="detail-copy">
          <div className="chapter-rail mono"><span className="rail-line" /> 03 / IN THE DETAIL</div>
          <h2>Light finds<br /><em>its edge.</em></h2>
          <p>Every contour is a decision. A signature LED line cuts through the dark. A grille tuned for the air. A cabin that keeps the signal clean.</p>
          <div className="detail-rule" />
          <div className="micro-spec mono"><span>01</span><span>LED SIGNATURE</span><span className="spec-line" /><span>VISIBLE / DAY + NIGHT</span></div>
          <div className="micro-spec mono"><span>02</span><span>SCULPTED AIRFLOW</span><span className="spec-line" /><span>QUIET / CONTROLLED</span></div>
        </div>
      </section>

      <section className="spec-section section-lime">
        <div className="spec-header">
          <div><p className="eyebrow mono">INSTRUMENT PANEL / 04</p><h2>Numbers with<br /><em>somewhere to go.</em></h2></div>
          <button className="spec-toggle mono" onClick={() => setShowSpecs((v) => !v)}>{showSpecs ? "Close sheet" : "Open spec sheet"} {showSpecs ? <ChevronDown size={15} /> : <ArrowUpRight size={15} />}</button>
        </div>
        <div className="big-stats">
          <div className="stat"><strong>160</strong><span className="mono">PS / PEAK POWER</span></div>
          <div className="stat"><strong>18<span className="unit">″</span></strong><span className="mono">ALLOY / WHEELS</span></div>
          <div className="stat"><strong>7<span className="unit">.9</span></strong><span className="mono">SEC / 0—100 KMH</span></div>
        </div>
        <div className={`spec-sheet ${showSpecs ? "spec-sheet-open" : ""}`}>
          <span>Powertrain / Turbo petrol</span><span>Drive / Intelligent all-wheel</span><span>Clearance / 190 mm</span><span>Seats / 5, considered</span>
        </div>
      </section>

      <section id="escape" className="escape-section">
        <img src={escapeImage} alt="Creta Car at a highland overlook" />
        <div className="escape-shade" />
        <div className="escape-content"><p className="eyebrow mono">THE LONG WAY HOME</p><h2>Take the<br /><em>long way.</em></h2><p>There is always another road worth finding. Creta is ready when you are.</p><button className="outline-cta" onClick={() => go("top")}>Start over <ArrowUpRight size={17} /></button></div>
        <div className="color-picker"><span className="mono">CHOOSE YOUR SIGNAL</span><div>{colors.map((color, i) => <button key={color} onClick={() => setActiveColor(i)} className={`color-swatch ${activeColor === i ? "selected" : ""}`} style={{ backgroundColor: color }} aria-label={`Select color ${i + 1}`} />)}</div></div>
      </section>

      <footer className="footer"><div className="footer-brand"><img src={mark} alt="" /><span>CRETA / CAR</span></div><p className="mono">Built for the next drive.</p><button className="mono back-top" onClick={() => go("top")}>Back to top ↑</button><span className="mono footer-meta">© 2026 / CC</span></footer>
    </main>
  );
}
