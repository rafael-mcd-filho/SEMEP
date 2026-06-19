// ── SEMEP · Componentes compartilhados ──────────────────────────────────────

const WaNumber = "558333403562";
const WaLink = `https://wa.me/${WaNumber}`;
const waHref = (message = "Olá! Vim pelo site da SEMEP e gostaria de atendimento.") =>
  `${WaLink}?text=${encodeURIComponent(message)}`;

// Centralized WhatsApp tracking for Google Tag Manager.
// GTM can be installed later: events are queued in window.dataLayer meanwhile.
const WhatsappTrackingEvent = "whatsapp_click";

const cleanTrackingText = (value, fallback = "nao_identificado") => {
  const normalized = String(value || "").replace(/\s+/g, " ").trim();
  return (normalized || fallback).slice(0, 100);
};

const trackingSlug = (value, fallback = "nao-identificado") => {
  const slug = cleanTrackingText(value, fallback)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || fallback;
};

const whatsappTrackingLocation = (link) => {
  const region = link.closest("[data-whatsapp-location], section, header, footer, nav, main");
  const heading = region && region.querySelector("h1, h2, h3");

  return cleanTrackingText(
    link.dataset.whatsappLocation ||
    (region && region.dataset.whatsappLocation) ||
    (region && region.id) ||
    (region && region.getAttribute("aria-label")) ||
    (heading && heading.textContent) ||
    (region && region.tagName.toLowerCase())
  );
};

if (!window.__semepWhatsappTrackingInitialized) {
  window.__semepWhatsappTrackingInitialized = true;
  window.dataLayer = window.dataLayer || [];

  document.addEventListener("click", (clickEvent) => {
    const target = clickEvent.target;
    if (!(target instanceof Element)) return;

    const link = target.closest(
      'a[href*="wa.me/"], a[href*="api.whatsapp.com/"], a[href*="whatsapp.com/send"]'
    );
    if (!link) return;

    const buttonText = cleanTrackingText(
      link.dataset.whatsappLabel || link.getAttribute("aria-label") || link.textContent
    );
    const buttonLocation = whatsappTrackingLocation(link);
    const pagePath = cleanTrackingText(window.location.pathname, "/");
    const pageName = pagePath === "/" ? "home" : trackingSlug(pagePath);
    const phone = cleanTrackingText(new URL(link.href, window.location.href).pathname.replace(/\D/g, ""));
    const explicitId = link.dataset.whatsappId;
    const explicitIdSuffix = explicitId && explicitId
      .split("__")
      .map((segment) => trackingSlug(segment))
      .filter(Boolean)
      .join("__");

    window.dataLayer.push({
      event: WhatsappTrackingEvent,
      whatsapp_click_id: (explicitIdSuffix
        ? `${pageName}__${explicitIdSuffix}`
        : [pageName, trackingSlug(buttonLocation), trackingSlug(buttonText)].join("__")
      ).slice(0, 100),
      whatsapp_button_text: buttonText,
      whatsapp_button_location: buttonLocation,
      whatsapp_page_path: pagePath,
      whatsapp_page_title: cleanTrackingText(document.title),
      whatsapp_phone: phone,
    });
  }, true);
}

const SEMEPLogoSrc = "/assets/logos/LOGOTIPO SEMEP SAÚDE.png";
const SEMEPLogoHorizontalSrc = "/assets/logos/logo-semep-horizontal.png";

const convenioKey = (name = "") =>
  name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

const CONVENIO_LOGOS = {
  unimed: {
    name: "Unimed",
    src: "/assets/logos/unimed.png",
    img: { sm: "max-h-7 max-w-[86px]", md: "max-h-11 max-w-[150px]" },
  },
  geap: {
    name: "GEAP",
    src: "/assets/logos/geap.png",
    img: { sm: "max-h-8 max-w-[78px]", md: "max-h-14 max-w-[118px]" },
  },
  sulamerica: {
    name: "SulAmérica",
    src: "/assets/logos/sulamerica.png",
    img: { sm: "max-h-7 max-w-[86px]", md: "max-h-11 max-w-[150px]" },
  },
  "bradesco saude": {
    name: "Bradesco Saúde",
    src: "/assets/logos/bradesco.png",
    img: { sm: "max-h-7 max-w-[86px]", md: "max-h-11 max-w-[150px]" },
  },
};

const convenioLogoFor = (name) => CONVENIO_LOGOS[convenioKey(name)] || null;

// ── Inline SVG icons ────────────────────────────────────────────────────────
const Ic = {
  WhatsApp: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9.869 9.869 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.113.548 4.1 1.51 5.828L.045 23.5l5.802-1.523A11.932 11.932 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 01-5.003-1.366l-.36-.213-3.44.904.92-3.348-.234-.374A9.79 9.79 0 012.182 12c0-5.422 4.396-9.818 9.818-9.818 5.422 0 9.818 4.396 9.818 9.818 0 5.422-4.396 9.818-9.818 9.818z"/>
    </svg>
  ),
  Check: ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  ChevronDown: ({ size = 13, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  Clock: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  MapPin: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Phone: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Instagram: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Facebook: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  Star: ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Plus: ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className}>
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  MessageCircle: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  ClipboardList: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      <line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/>
    </svg>
  ),
  HeartHandshake: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/>
      <path d="m18 15-2-2"/><path d="m15 18-2-2"/>
    </svg>
  ),
  /* ── Nav icons ───────────────────────────────────────────────────── */
  User: ({ size = 14, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Heart: ({ size = 14, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  Sparkles: ({ size = 14, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  ),
  Users: ({ size = 14, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  CheckCircle: ({ size = 14, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  Mail: ({ size = 14, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  /* ── Trust bar icons ─────────────────────────────────────────────── */
  Award: ({ size = 15, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
  Baby: ({ size = 15, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 12h.01"/><path d="M15 12h.01"/>
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/>
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 3"/>
    </svg>
  ),
  ShieldCheck: ({ size = 15, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  /* ── Arrow (neon button) ─────────────────────────────────────────── */
  ArrowUpRight: ({ size = 13, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7M7 7h10v10"/>
    </svg>
  ),
};

// ── Neon Button ──────────────────────────────────────────────────────────────
const NeonBtn = ({ children, variant = "ghost", size = "md", href, onClick, block = false, className = "", target, rel, trackingId, trackingLocation, trackingLabel }) => {
  const cls = `neon-btn neon-${variant} neon-${size}${block ? " neon-block" : ""} ${className}`;
  const inner = (
    <>
      <span className="btn-text">{children}</span>
      <span className="btn-circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M7 7h10v10"/>
        </svg>
      </span>
    </>
  );
  if (onClick) return <button onClick={onClick} className={cls}>{inner}</button>;
  const isExternal = href && href.startsWith("http");
  return (
    <a href={href || "#"}
       target={target || (isExternal ? "_blank" : undefined)}
       rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
       data-whatsapp-id={trackingId}
       data-whatsapp-location={trackingLocation}
       data-whatsapp-label={trackingLabel}
       className={cls}>
      {inner}
    </a>
  );
};

// ── WhatsApp Button (neon-solid wrapper) ────────────────────────────────────
// SEMEP brand mark
const SemepBrand = ({ href = "/", theme = "light", size = "nav", className = "" }) => {
  const isDark = theme === "dark";
  const heightClass = size === "footer" ? "h-12" : size === "mobile" ? "h-10" : "h-11";
  const frameClass = isDark ? "bg-white rounded-2xl px-3 py-2 shadow-card" : "";

  return (
    <a href={href} className={`inline-flex items-center flex-shrink-0 ${className}`} aria-label="SEMEP - Saúde Mental e Bem-Estar">
      <span className={`inline-flex items-center justify-center ${frameClass}`}>
        <img
          src={SEMEPLogoHorizontalSrc}
          alt="SEMEP - Saúde Mental e Bem-Estar"
          className={`${heightClass} w-auto object-contain`}
          loading="eager"
        />
      </span>
    </a>
  );
};

const ConvenioLogoCard = ({ name, size = "md", className = "" }) => {
  const logo = convenioLogoFor(name);
  if (!logo) return null;

  const frameSize = size === "sm"
    ? "h-12 w-[104px] rounded-xl px-3 py-2"
    : "h-24 w-44 rounded-2xl px-5 py-4";

  return (
    <div
      className={`flex-shrink-0 bg-white border border-divider ${frameSize} flex items-center justify-center hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 ${className}`}
      aria-label={logo.name}
    >
      <img
        src={logo.src}
        alt={`Logo ${logo.name}`}
        loading="lazy"
        className={`${logo.img[size] || logo.img.md} w-auto object-contain`}
      />
    </div>
  );
};

// WhatsApp Button (neon-solid wrapper)
const WaButton = ({ children, size = "md", block = false, className = "", href, message, trackingId, trackingLocation, trackingLabel }) => (
  <NeonBtn
    href={href || waHref(message)}
    variant="solid"
    size={size === "lg" ? "lg" : "md"}
    block={block}
    className={className}
    trackingId={trackingId}
    trackingLocation={trackingLocation}
    trackingLabel={trackingLabel || (typeof children === "string" ? children : undefined)}
  >
    <Ic.WhatsApp size={15} />{children}
  </NeonBtn>
);

// ── Badge pill ───────────────────────────────────────────────────────────────
const Badge = ({ children, className = "" }) => (
  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase ${className}`}>
    {children}
  </div>
);

// ── Section header ───────────────────────────────────────────────────────────
const SectionHeader = ({ badge, badgeClass = "bg-surface text-brand", title, subtitle, center = true }) => (
  <div className={`mb-14 ${center ? "text-center" : ""}`}>
    <Badge className={`mb-5 ${badgeClass}`}>{badge}</Badge>
    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand leading-tight mb-4">{title}</h2>
    {subtitle && (
      <p className={`text-txt-sec text-base lg:text-lg leading-relaxed ${center ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

// ── Stars ────────────────────────────────────────────────────────────────────
const Stars = ({ count = 5, size = 14 }) => (
  <div className="flex gap-0.5 text-yellow-400">
    {[...Array(count)].map((_, i) => <Ic.Star key={i} size={size} />)}
  </div>
);

// ── Scroll-reveal observer ───────────────────────────────────────────────────
const useReveal = () => {
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const attach = () => document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    const t = setTimeout(attach, 150);
    return () => { clearTimeout(t); obs.disconnect(); };
  }, []);
};

Object.assign(window, { Ic, NeonBtn, WaButton, Badge, SectionHeader, Stars, useReveal, WaNumber, WaLink, waHref, SEMEPLogoSrc, SEMEPLogoHorizontalSrc, SemepBrand, CONVENIO_LOGOS, convenioLogoFor, ConvenioLogoCard });
