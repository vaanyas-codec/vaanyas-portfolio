import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import AsciiMorphText from '../AsciiMorphText';
import TypewriterCarousel from '../TypewriterCarousel';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors, withAlpha } from '../../hooks/useThemeColors';
import { aboutPhoto, stickers as stickerImages } from '../../assets';

const FULL_ASCII_ART = `⠀⠀⠀⣠⡶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠶⢶⣄⠀⠀⠀
⠠⡦⢸⡏⢕⢕⣵⣵⣵⣵⣵⣵⣵⣵⣵⣵⣵⣵⣵⣕⢕⢕⢹⡇⠀⠀
⠀⠀⢸⡇⢕⢽⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣗⢕⢸⡇⢀⠀
⠀⠀⢸⡇⢕⢽⡇⠀⠀⣿⠀⠀⠀⣤⠀⠀⣿⠀⠀⢸⣗⢕⢸⡇⠙⠁
⠀⠀⢸⡇⢕⢽⡇⠀⠀⠛⠀⠀⣀⣿⠀⠀⠛⠀⠀⢸⣗⢕⢸⡇⠀⠀
⠀⠀⢸⡇⢕⢽⡇⠀⠀⣀⠀⠀⠉⠉⠀⠀⣀⠀⠀⢸⣗⢕⢸⡇⠀⠀
⠀⠀⢸⡇⢕⢽⡇⠀⠀⠙⠳⢦⣤⣤⡴⠞⠋⠀⠀⢸⣗⢕⢸⡇⠀⠀
⠀⠀⢸⡇⢕⢝⢷⢶⢶⢶⢶⢶⢶⢶⢶⢶⢶⢶⢶⢞⢕⢕⢸⡇⠀⠀
⠀⠀⢸⡇⢕⠕⠅⠅⠅⢅⢅⠅⠅⠅⠅⠅⠅⠅⠅⠅⠕⠕⢸⡇⠀⠀
⠀⢀⢸⡇⢕⠅⠰⠶⠆⢐⢕⠅⠀⠶⠶⠶⠶⠶⠶⠶⠶⠀⢸⡇⠀⠀
⠀⠙⠙⢷⣕⣅⣄⣄⣄⣔⣕⣅⣄⣄⣄⣄⣄⣄⣄⣄⣄⣤⡾⠃⠀⠀
⠀⠀⠀⠀⠉⠉⡭⡭⡭⡭⡭⡭⡭⡭⡭⡭⡭⡭⡭⣭⠉⠉⠀⠀⠀⠀
⠀⠀⠀⢠⠒⠒⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠒⠒⡄⠀⠀⠀
⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀`;

const ROLES = [
  'AI/ML Engineer',
  'Full-Stack Developer',
  'Computer Vision Enthusiast',
  'Data Scientist',
  'Undergraduate at MIT World Peace University',
];

const ABOUT_INTRO =
  "I'm a Computer Science student who likes exploring ideas and turning them into something tangible. Over time, I've found myself drawn to different areas of technology, from software development and AI to working on projects that bring hardware and software together. I also enjoy being involved in communities and initiatives beyond the classroom.";

const HIGHLIGHTS: { num: string; title: string; role?: string; text: string }[] = [
  {
    num: '01.',
    title: 'Synapse AI Club',
    role: 'President',
    text: "Started as a Technical Team Member in 2024, later served as Treasurer, and currently lead the club's activities, workshops and initiatives.",
  },
  {
    num: '02.',
    title: 'E-Cell MIT-WPU',
    role: 'Thrive Head',
    text: 'Been part of E-Cell through MahaSummit, RIDE and various entrepreneurship initiatives, taking on different responsibilities along the way.',
  },
  {
    num: '03.',
    title: 'RIDE & IIC',
    role: 'Secretary, RIDE Division 1',
    text: "Involved in organising RIDE and contributing to student innovation and entrepreneurship initiatives through the Institution's Innovation Council.",
  },
  {
    num: '04.',
    title: 'Accodyn Technologies',
    role: 'Intern | 2025',
    text: 'Worked on frontend development for NBFC products before moving into project coordination, collaborating with teams across different workstreams.',
  },
  {
    num: '05.',
    title: 'Research & Experimentation',
    text: 'Worked on fraud detection, exploring model evaluation and imbalanced datasets, with a manuscript currently under review at the Journal of Young Investigators. Also explored ensemble learning through classifier comparisons and performance evaluation across datasets.',
  },
  {
    num: '06.',
    title: 'Projects & Development',
    role: 'Software | AI | IoT',
    text: 'Worked on projects across software development, machine learning, computer vision and IoT, exploring different technologies and approaches to problem-solving.',
  },
];

// The content sits in a compact centre column; stickers fill the space on both sides.
// side: which side. top: % down the block. f: 0-1, how far from the screen edge toward the
// content (0 = outer edge). rot: resting rotation (deg). spin: extra rotation while flying out.
// drift: vertical px of scroll parallax.
const CONTENT_MAX = 720;
const STICKER_SIZE = 60;
const STICKER_OPACITY = 0.88; // keep the stickers quiet; lower = more subtle
const INTRO_TRANSITION = 'transform 0.95s cubic-bezier(0.2, 0.9, 0.3, 1.25), opacity 0.6s ease-out';
const SCROLL_TRANSITION = 'transform 0.18s ease-out, opacity 0.18s ease-out';

const STICKERS: { side: 'l' | 'r'; top: number; f: number; rot: number; spin: number; drift: number }[] = [
  { side: 'l', top: 2, f: 0.55, rot: -12, spin: -220, drift: 50 },
  { side: 'r', top: 6, f: 0.1, rot: 10, spin: 240, drift: -44 },
  { side: 'l', top: 14, f: 0.05, rot: 8, spin: 200, drift: -42 },
  { side: 'r', top: 17, f: 0.6, rot: -8, spin: -260, drift: 48 },
  { side: 'l', top: 26, f: 0.7, rot: -6, spin: -180, drift: 44 },
  { side: 'r', top: 30, f: 0.2, rot: 14, spin: 230, drift: -50 },
  { side: 'l', top: 38, f: 0.25, rot: 12, spin: 210, drift: -38 },
  { side: 'r', top: 42, f: 0.75, rot: -10, spin: -240, drift: 42 },
  { side: 'l', top: 50, f: 0.6, rot: -14, spin: -200, drift: 48 },
  { side: 'r', top: 55, f: 0.05, rot: 6, spin: 250, drift: -46 },
  { side: 'l', top: 62, f: 0.1, rot: 9, spin: 190, drift: -44 },
  { side: 'r', top: 67, f: 0.55, rot: -12, spin: -230, drift: 50 },
  { side: 'l', top: 74, f: 0.75, rot: -9, spin: -210, drift: 40 },
  { side: 'r', top: 79, f: 0.3, rot: 11, spin: 220, drift: -48 },
  { side: 'l', top: 86, f: 0.3, rot: 7, spin: 200, drift: -36 },
  { side: 'r', top: 91, f: 0.7, rot: -7, spin: -250, drift: 42 },
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (x: number) => x * x * (3 - 2 * x);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickerScopeRef = useRef<HTMLDivElement>(null);
  const stickerLayerRef = useRef<HTMLDivElement>(null);
  const stickerEls = useRef<(HTMLImageElement | null)[]>([]);
  const asciiRef = useRef<HTMLPreElement>(null);
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  // Typewriter effect for the ASCII art. Writes straight to the DOM so the
  // component does not re-render once per character.
  useEffect(() => {
    const el = asciiRef.current;
    if (!el) return;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const type = () => {
      if (i < FULL_ASCII_ART.length) {
        i += 1;
        el.textContent = FULL_ASCII_ART.substring(0, i);
        timer = setTimeout(type, 3);
      }
    };
    const start = setTimeout(type, 500);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, []);

  // Stickers burst out from behind the content when the About block scrolls into view,
  // keep drifting and spinning while you scroll through it, and tuck back in as it leaves.
  // All of it is written straight to the DOM, so nothing re-renders while scrolling.
  useEffect(() => {
    const scope = stickerScopeRef.current;
    const layer = stickerLayerRef.current;
    if (!scope) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = stickerEls.current;
    let raf = 0;
    let collapsed = !reduceMotion; // first frame: everything tucked behind the content
    const timers: ReturnType<typeof setTimeout>[] = [];

    const draw = () => {
      raf = 0;
      const rect = scope.getBoundingClientRect();
      const vh = window.innerHeight;
      const enter = clamp01((vh - rect.top) / vh);
      const leave = clamp01(rect.bottom / (0.7 * vh));
      const q = collapsed ? 0 : reduceMotion ? 1 : smooth(Math.min(enter, leave));
      const t = reduceMotion ? 0.5 : clamp01((vh * 0.5 - rect.top) / rect.height);
      scope.style.setProperty('--q', q.toFixed(3));
      scope.style.setProperty('--t', t.toFixed(3));

      if (!layer || layer.offsetParent === null) return; // side stickers are hidden below the lg breakpoint
      const w = layer.clientWidth;
      const h = layer.clientHeight;
      const half = Math.min(CONTENT_MAX / 2, w / 2);
      const slack = Math.max(0, w / 2 - half - STICKER_SIZE * 1.2 - 8);
      const cx = w / 2;
      const cy = h / 2;

      STICKERS.forEach((st, i) => {
        const el = els[i];
        if (!el) return;
        const fx = st.side === 'l' ? slack * st.f + STICKER_SIZE * 0.6 : w - slack * st.f - STICKER_SIZE * 0.6;
        const fy = (h * st.top) / 100 + STICKER_SIZE / 2;
        const x = cx + (fx - cx) * q;
        const y = fy + (cy - fy) * (1 - q) * 0.6 + (t - 0.5) * st.drift * 2 * q;
        const rot = st.rot + (1 - q) * st.spin + (t - 0.5) * Math.sign(st.drift) * 50;
        const scale = 0.35 + 0.7 * q;
        el.style.transform = `translate3d(${(x - STICKER_SIZE / 2).toFixed(1)}px, ${(y - STICKER_SIZE / 2).toFixed(1)}px, 0) rotate(${rot.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
        el.style.opacity = String(STICKER_OPACITY * clamp01(q * 1.6));
      });
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    // Paint once tucked in with no transition, then let them burst out.
    els.forEach((el) => {
      if (el) el.style.transition = 'none';
    });
    draw();
    if (reduceMotion) {
      collapsed = false;
      draw();
    } else {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          els.forEach((el, i) => {
            if (!el) return;
            el.style.transition = INTRO_TRANSITION;
            el.style.transitionDelay = `${i * 40}ms`;
          });
          collapsed = false;
          draw();
          timers.push(
            setTimeout(() => {
              els.forEach((el) => {
                if (!el) return;
                el.style.transition = SCROLL_TRANSITION;
                el.style.transitionDelay = '0ms';
              });
            }, 1300),
          );
        }),
      );
    }

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (raf) cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, []);

  const heroTextClass = isDarkMode ? 'hero-subtitle-dark' : 'hero-subtitle-light';

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen"
      style={{
        background: themeColors.background.sections?.about || themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'clip',
        contain: 'layout style',
      }}
    >
      {/* Hero */}
      <div className="py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto gap-8">
            <div className="text-left w-full md:w-auto">
              <div className="ascii-container justify-start text-3xl md:text-4xl lg:text-5xl">
                <AsciiMorphText text="Hi, I'm Vaanya" />
              </div>
              <div className="hero-subtitle justify-start text-base md:text-lg lg:text-xl mt-2">
                <div className="flex flex-wrap items-center justify-start">
                  <span className={heroTextClass}>I am a&nbsp;</span>
                  <TypewriterCarousel roles={ROLES} className={heroTextClass} />
                </div>
              </div>
              <div className="hero-buttons flex justify-start gap-3 mt-4">
                <button
                  className="hero-action-btn text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Resume →
                </button>
                <Link
                  to="/contact"
                  className="hero-action-btn text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5"
                >
                  Contact →
                </Link>
              </div>
            </div>
            <div
              className="hidden md:block"
              aria-hidden="true"
              style={{
                fontSize: '0.8rem',
                lineHeight: '1',
                fontFamily: 'monospace',
                minHeight: '11.5rem',
                color: isDarkMode ? '#F2A0BD' : themeColors.colors.pink[500],
                textShadow: isDarkMode ? '0 0 12px rgba(242, 160, 189, 0.35)' : 'none',
              }}
            >
              <pre ref={asciiRef} />
            </div>
          </div>
        </div>
      </div>

      {/* About me */}
      <div
        className="py-8 md:py-12"
        style={{
          background: isDarkMode
            ? 'transparent'
            : `linear-gradient(180deg, transparent 0%, ${withAlpha(themeColors.colors.pink[50], 0.5)} 50%, ${themeColors.colors.pink[25]} 100%)`,
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div ref={stickerScopeRef} className="relative" style={{ '--q': 1, '--t': 0.5 } as CSSProperties}>
            {/* Large screens: stickers fill the space on both sides of the content column */}
            <div
              ref={stickerLayerRef}
              aria-hidden="true"
              className="hidden lg:block absolute inset-0 pointer-events-none z-10"
            >
              {STICKERS.map((_, i) => (
                <img
                  key={i}
                  ref={(el) => {
                    stickerEls.current[i] = el;
                  }}
                  src={stickerImages[i]}
                  alt=""
                  className="absolute left-0 top-0 select-none opacity-0"
                  style={{
                    width: STICKER_SIZE,
                    height: STICKER_SIZE,
                    willChange: 'transform, opacity',
                  }}
                  decoding="async"
                  width={STICKER_SIZE}
                  height={STICKER_SIZE}
                />
              ))}
            </div>

            <div className="relative z-20 mx-auto w-full" style={{ maxWidth: CONTENT_MAX }}>
              {/* Smaller screens: a short sticker row above the heading instead */}
              <div aria-hidden="true" className="lg:hidden flex flex-wrap justify-center gap-3 mb-6">
                {stickerImages.slice(0, 8).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-10 h-10 sm:w-12 sm:h-12 select-none"
                    style={{
                      transform: `rotate(calc(${i % 2 ? 10 : -10}deg + (1 - var(--q)) * ${i % 2 ? -160 : 160}deg)) scale(calc(0.5 + 0.5 * var(--q)))`,
                      transition: 'transform 0.18s ease-out',
                      opacity: STICKER_OPACITY,
                    }}
                    loading="lazy"
                    decoding="async"
                    width={48}
                    height={48}
                  />
                ))}
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-8"
                style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}
              >
                About Me
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-6 sm:gap-8 items-center">
                {/* Photo */}
                <figure className="mx-auto w-full max-w-[220px] sm:max-w-none m-0">
                  <div
                    style={{
                      transform: 'rotate(-2deg)',
                      padding: '8px',
                      borderRadius: '18px',
                      backgroundColor: themeColors.card.background,
                      border: `1px solid ${themeColors.card.border}`,
                      boxShadow: `0 10px 26px ${themeColors.effects.dropShadow}`,
                    }}
                  >
                    <img
                      src={aboutPhoto}
                      alt="Vaanya on a panel at RIDE '25"
                      width={800}
                      height={986}
                      className="w-full h-auto block rounded-xl"
                      style={{ aspectRatio: '800 / 986', objectFit: 'cover' }}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                  </div>
                  <figcaption className="text-center text-xs mt-3" style={{ color: themeColors.text.tertiary }}>
                    At RIDE '25, E-Cell MIT-WPU
                  </figcaption>
                </figure>

                {/* Bio */}
                <p
                  className="text-base md:text-lg leading-relaxed m-0"
                  style={{ color: themeColors.text.secondary }}
                >
                  {ABOUT_INTRO}
                </p>
              </div>

              {/* Everything I'm up to */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 list-none p-0">
                {HIGHLIGHTS.map(({ num, title, role, text }) => (
                  <li
                    key={num}
                    className="rounded-lg p-4 shadow-md"
                    style={{
                      backgroundColor: themeColors.card.background,
                      border: `1px solid ${themeColors.card.border}`,
                    }}
                  >
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-xs font-semibold tracking-wider flex-shrink-0"
                        style={{ color: themeColors.text.accent }}
                      >
                        {num}
                      </span>
                      <h3 className="font-semibold text-sm md:text-base m-0" style={{ color: themeColors.text.primary }}>
                        {title}
                      </h3>
                    </div>
                    {role && (
                      <p className="text-xs md:text-sm font-medium mt-1 mb-0" style={{ color: themeColors.text.pink }}>
                        {role}
                      </p>
                    )}
                    <p className="text-xs md:text-sm leading-relaxed mt-2 mb-0" style={{ color: themeColors.text.secondary }}>
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
