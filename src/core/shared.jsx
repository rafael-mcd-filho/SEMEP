// ── SEMEP · Shared inner-page components ────────────────────────────────────

// ── 1. CSS injection ─────────────────────────────────────────────────────────
const injectSharedStyles = () => {
  if (document.getElementById('semep-shared')) return;
  const s = document.createElement('style');
  s.id = 'semep-shared';
  s.textContent = `
    *,*::before,*::after{box-sizing:border-box}
    html{scroll-behavior:smooth;scrollbar-gutter:stable}
    body{overflow-x:hidden;font-family:"Inter",system-ui,sans-serif}
    :root{--font-serif:"Source Serif 4",Georgia,serif;--font-sans:"Inter",system-ui,sans-serif}
    .font-serif{font-family:var(--font-serif)!important}
    .font-sans{font-family:var(--font-sans)!important}

    /* Compact section rhythm */
    section.py-24{padding-top:4.5rem!important;padding-bottom:4.5rem!important}
    section.py-20{padding-top:4rem!important;padding-bottom:4rem!important}
    section.py-16{padding-top:3.25rem!important;padding-bottom:3.25rem!important}
    @media (max-width:767px){section.py-24{padding-top:3.75rem!important;padding-bottom:3.75rem!important}section.py-20{padding-top:3.5rem!important;padding-bottom:3.5rem!important}section.py-16{padding-top:3rem!important;padding-bottom:3rem!important}}

    /* Reveal */
    .reveal{opacity:0;transform:translateY(24px);transition:opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1)}
    .reveal.visible{opacity:1;transform:none}
    .reveal-d1{transition-delay:.08s}.reveal-d2{transition-delay:.16s}.reveal-d3{transition-delay:.24s}.reveal-d4{transition-delay:.32s}

    /* Accordion */
    .faq-toggle{border-radius:16px;outline:none}
    .faq-toggle:focus{outline:none}
    .faq-toggle:focus-visible{outline:2px solid rgba(110,201,224,.85);outline-offset:3px}
    .acc-body{display:grid;grid-template-rows:0fr;overflow:hidden;opacity:0;transform:translateY(-4px);transition:grid-template-rows .48s cubic-bezier(.22,1,.36,1),opacity .28s ease,transform .48s cubic-bezier(.22,1,.36,1)}
    .acc-body.open{grid-template-rows:1fr;opacity:1;transform:translateY(0)}
    .acc-panel{min-height:0;overflow:hidden}
    .acc-panel>p{margin:0;transform:translateY(-6px);transition:transform .48s cubic-bezier(.22,1,.36,1)}
    .acc-body.open .acc-panel>p{transform:translateY(0)}
    @media (prefers-reduced-motion:reduce){.acc-body,.acc-panel>p{transition:none;transform:none}}

    /* Neon button mobile active state */
    .neon-btn:active{transform:scale(0.97);opacity:.92}
    .neon-btn:active .btn-circle svg{transform:rotate(45deg)}

    /* Doctor card */
    .doc-card{transition:transform .25s ease,box-shadow .25s ease}
    .doc-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(14,42,71,.16)}

    /* Hero blobs */
    .hero-blob{border-radius:62% 38% 46% 54%/60% 44% 56% 40%;background:#0E2A47}
    .hero-blob-turq{border-radius:62% 38% 46% 54%/60% 44% 56% 40%;background:#6EC9E0}
    .hero-blob-mid{border-radius:62% 38% 46% 54%/60% 44% 56% 40%;background:#1E4976}

    /* Spec scroll */
    .spec-scroll::-webkit-scrollbar{display:none}
    .spec-scroll{-ms-overflow-style:none;scrollbar-width:none}

    /* Tubelight nav */
    .tl-nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 24px;background:rgba(255,255,255,.85);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid rgba(14,42,71,.08);transition:padding .3s,background .2s,box-shadow .2s}
    .tl-nav.scrolled{padding:8px 24px;background:rgba(255,255,255,.97);box-shadow:0 4px 24px rgba(14,42,71,.06)}
    .tl-inner{max-width:1280px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px}
    .tubelight-pill{display:none;align-items:center;gap:2px;background:rgba(14,42,71,.04);border:1px solid rgba(14,42,71,.08);padding:5px;border-radius:9999px;box-shadow:0 4px 24px rgba(14,42,71,.06)}
    @media (min-width:1280px){.tubelight-pill{display:flex}}
    .tubelight-link{position:relative;display:inline-flex;align-items:center;gap:5px;padding:7px 15px;border-radius:9999px;font-size:13px;font-weight:600;color:rgba(14,42,71,.6);text-decoration:none;transition:color .2s;font-family:"Inter",sans-serif;white-space:nowrap}
    .tubelight-link:hover{color:rgba(14,42,71,.95)}
    .tubelight-link.tl-active{color:white;background:rgba(30,73,118,.95)}
    .tubelight-link.tl-active::before{content:'';position:absolute;top:-1px;left:50%;transform:translateX(-50%);width:40px;height:3px;background:#6EC9E0;border-radius:0 0 4px 4px;box-shadow:0 0 8px 2px rgba(110,201,224,.7),0 0 20px 4px rgba(110,201,224,.35),0 0 40px 8px rgba(110,201,224,.15)}
    .tubelight-link.tl-active::after{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:80px;height:20px;background:radial-gradient(ellipse at top,rgba(110,201,224,.22) 0%,transparent 70%);border-radius:50%}
    .tl-dropdown{position:relative}
    .tl-drop-menu{position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%);background:white;border-radius:16px;box-shadow:0 8px 40px rgba(14,42,71,.14);border:1px solid rgba(14,42,71,.07);padding:6px;min-width:200px;z-index:200}
    .tl-drop-item{display:block;padding:9px 14px;font-size:13px;font-weight:500;color:#1A2937;text-decoration:none;border-radius:10px;transition:background .15s,color .15s;font-family:"Inter",sans-serif}
    .tl-drop-item:hover{background:#F4F8FB;color:#0E2A47}
    .tl-mobile-overlay{position:fixed;inset:0;background:#0E2A47;z-index:500;display:flex;flex-direction:column;padding:14px 24px 28px;overflow-y:auto;overscroll-behavior:contain;animation:menuFade .16s ease-out both}
    @keyframes menuFade{from{opacity:0}to{opacity:1}}
    .tl-mobile-link{font-family:"Source Serif 4",Georgia,serif;font-size:28px;font-weight:600;color:white;text-decoration:none;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.1);display:block;transition:color .2s}
    .tl-mobile-link:hover{color:#6EC9E0}

    /* Neon buttons */
    .neon-btn{position:relative;display:inline-flex;align-items:center;font-family:"Inter",sans-serif;font-weight:600;border-radius:9999px;border:1.5px solid transparent;cursor:pointer;text-decoration:none;white-space:nowrap;overflow:hidden;transition:padding .5s cubic-bezier(.4,0,.2,1),background .25s ease,border-color .25s ease}
    .neon-btn.neon-block{display:flex;width:100%;justify-content:center}
    .neon-btn .btn-text{position:relative;z-index:1;pointer-events:none;display:inline-flex;align-items:center;gap:7px}
    .neon-btn .btn-circle{position:absolute;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:right .5s cubic-bezier(.4,0,.2,1)}
    .neon-btn .btn-circle svg{transition:transform .5s cubic-bezier(.4,0,.2,1)}
    .neon-btn:hover .btn-circle svg{transform:rotate(45deg)}
    .neon-solid{background:#25D366;color:white;border-color:#25D366}
    .neon-solid:hover{background:#1aad5a;border-color:#1aad5a}
    .neon-solid .btn-circle{background:white;color:#25D366}
    .neon-ghost{background:transparent;border-color:rgba(14,42,71,.35);color:#0E2A47}
    .neon-ghost:hover{border-color:#0E2A47;background:rgba(14,42,71,.04)}
    .neon-ghost .btn-circle{background:#0E2A47;color:white}
    .neon-ghost-white{background:transparent;border-color:rgba(255,255,255,.5);color:white}
    .neon-ghost-white:hover{border-color:white;background:rgba(255,255,255,.1)}
    .neon-ghost-white .btn-circle{background:white;color:#0E2A47}
    .neon-default{background:#F4F8FB;border-color:#E5EBF1;color:#0E2A47}
    .neon-default:hover{background:#eaf2f8}
    .neon-default .btn-circle{background:#4FB3D9;color:white}
    .neon-md{font-size:14px;padding:9px 52px 9px 20px}
    .neon-md:hover{padding:9px 20px 9px 52px}
    .neon-md .btn-circle{width:34px;height:34px;right:6px;top:50%;transform:translateY(-50%)}
    .neon-md:hover .btn-circle{right:calc(100% - 40px)}
    .neon-md .btn-circle svg{width:13px;height:13px}
    .neon-lg{font-size:15px;padding:11px 60px 11px 26px}
    .neon-lg:hover{padding:11px 26px 11px 60px}
    .neon-lg .btn-circle{width:40px;height:40px;right:6px;top:50%;transform:translateY(-50%)}
    .neon-lg:hover .btn-circle{right:calc(100% - 46px)}
    .neon-lg .btn-circle svg{width:14px;height:14px}
    @media (max-width:640px){.neon-btn:not(.neon-block){width:100%;justify-content:center}}

    /* Indications card hover */
    .indic-card{transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease}
    .indic-card:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(14,42,71,.1)}

    /* Filter pills */
    .filter-pill{transition:all .2s ease;cursor:pointer}
    .filter-pill.active-pill{background:#0E2A47;color:white;border-color:#0E2A47}
  `;
  document.head.appendChild(s);
};
injectSharedStyles();

// ── 2. Extra icons (extend Ic from common.jsx) ───────────────────────────────
Object.assign(Ic, {
  Moon: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
  ),
  Zap: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  AlertTriangle: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
  ),
  BookOpen: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ),
  Ear: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 0 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 0 4 0"/></svg>
  ),
  Scale: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
  ),
  Pill: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="M8.5 8.5 16 16"/></svg>
  ),
  Brain: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>
  ),
  HeartPulse: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1.5-3 2 4.5 1.5-3h5.27"/></svg>
  ),
  Utensils: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
  ),
  Activity: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  ),
  CloudRain: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/></svg>
  ),
  Apple: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 20.94c1.5.95 3.5.95 5-.17 1.27-.95 1.75-2.47 1.49-3.88-.26-1.41-1.12-2.7-2.36-3.43-1.24-.73-2.72-.9-4.13-.46"/><path d="M12 20.94c-1.5.95-3.5.95-5-.17-1.27-.95-1.75-2.47-1.49-3.88.26-1.41 1.12-2.7 2.36-3.43 1.24-.73 2.72-.9 4.13-.46"/><path d="M9 6.17V4"/><path d="M14.5 6.5a3.5 3.5 0 0 0-5 0"/></svg>
  ),
  GraduationCap: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  ),
  Target: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  ),
  Eye: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  Search: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
  ),
  Puzzle: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/></svg>
  ),
  MessageSquare: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  ),
  ExternalLink: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
  ),
  UserPlus: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
  ),
  Newspaper: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
  ),
  Handshake: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
  ),
  Info: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  ),
  Shield: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  UsersRound: ({ size=20, className="" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
  ),
});

// ── 3. Active section from URL ───────────────────────────────────────────────
const getActiveFromPath = () => {
  const p = window.location.pathname.toLowerCase();
  if (/sobre/.test(p)) return 'sobre';
  if (/infantil/.test(p)) return 'atendimento';
  if (/adulto/.test(p)) return 'atendimento';
  if (/psiquiatria|psicologia|fonoaudiologia|nutricao|neuropsicologia|especialidade/.test(p)) return 'especialidades';
  if (/equipe/.test(p)) return 'equipe';
  if (/convenio/.test(p)) return 'convenios';
  if (/contato/.test(p)) return 'contato';
  return '';
};

// ── 4. SharedHeader ──────────────────────────────────────────────────────────
const SharedHeader = () => {
  const [scrolled, setScrolled]    = React.useState(false);
  const [mobileOpen, setMobileOpen]= React.useState(false);
  const activeSection = getActiveFromPath();

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  React.useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    document.body.style.paddingRight = mobileOpen && scrollbarWidth > 0 ? `${scrollbarWidth}px` : '';
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [mobileOpen]);

  const TlLink = ({ href, id, icon, children, dropdown }) => {
    const [open, setOpen] = React.useState(false);
    const timer = React.useRef(null);
    const isActive = activeSection === id;
    const onEnter = () => { clearTimeout(timer.current); setOpen(true); };
    const onLeave = () => { timer.current = setTimeout(() => setOpen(false), 220); };
    if (dropdown) {
      return (
        <div className="tl-dropdown" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <a href={href} className={`tubelight-link ${isActive ? 'tl-active' : ''}`}>
            {icon && React.createElement(icon, { size: 13 })}
            {children}
            <Ic.ChevronDown size={11} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          </a>
          {open && (
            <div className="tl-drop-menu" onMouseEnter={onEnter} onMouseLeave={onLeave}>
              {dropdown.map(d => <a key={d.href} href={d.href} className="tl-drop-item">{d.label}</a>)}
            </div>
          )}
        </div>
      );
    }
    return (
      <a href={href} className={`tubelight-link ${isActive ? 'tl-active' : ''}`}>
        {icon && React.createElement(icon, { size: 13 })}{children}
      </a>
    );
  };

  const NAV = [
    { href: '/#especialidades', id: 'especialidades', icon: Ic.Sparkles, label: 'Especialidades',
      dropdown: [
        { href: '/psiquiatria',     label: 'Psiquiatria' },
        { href: '/psicologia',      label: 'Psicologia' },
        { href: '/fonoaudiologia',  label: 'Fonoaudiologia' },
        { href: '/nutricao',        label: 'Nutrição' },
        { href: '/neuropsicologia', label: 'Neuropsicologia' },
      ] },
    { href: '/#sobre',         id: 'sobre',     icon: Ic.User,        label: 'Sobre' },
    { href: '/#atendimento',   id: 'atendimento', icon: Ic.Heart,     label: 'Atendimentos',
      dropdown: [{ href: '/atendimento-infantil', label: 'Infantil & Adolescente' }, { href: '/atendimento-adulto', label: 'Adulto' }] },
    { href: '/#convenios',     id: 'convenios', icon: Ic.CheckCircle, label: 'Convênios' },
  ];

  const MOBILE = [
    ['/','Home'], ['/#especialidades','Especialidades'],
    ['/#sobre','Sobre'], ['/#atendimento','Atendimentos'],
    ['/atendimento-infantil','↳ Infantil & Adolescente'], ['/atendimento-adulto','↳ Adulto'],
    ['/#convenios','Convênios'],
  ];

  return (
    <>
      <nav className={`tl-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="tl-inner">
          <SemepBrand href="/" />

          <div className="tubelight-pill hidden xl:flex">
            {NAV.map(n => <TlLink key={n.id} href={n.href} id={n.id} icon={n.icon} dropdown={n.dropdown}>{n.label}</TlLink>)}
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden xl:block">
              <WaButton trackingId="cabecalho-desktop__agendar" size="md" message="Olá! Vim pelo site da SEMEP e gostaria de agendar uma consulta.">Falar no WhatsApp</WaButton>
            </div>
            <button onClick={() => setMobileOpen(true)} className="xl:hidden p-2 rounded-xl text-brand hover:bg-surface transition-colors" aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="tl-mobile-overlay">
          <div className="flex items-center justify-between mb-10">
            <SemepBrand href="/" theme="dark" size="mobile" />
            <button onClick={() => setMobileOpen(false)} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div className="flex flex-col flex-1">
            {MOBILE.map(([href, label]) => (
              <a key={label} href={href} className="tl-mobile-link">{label}</a>
            ))}
          </div>
          <div className="mt-10"><WaButton trackingId="menu-mobile__agendar" size="lg" block message="Olá! Vim pelo site da SEMEP e gostaria de agendar uma consulta.">Falar no WhatsApp</WaButton></div>
        </div>
      )}
    </>
  );
};

// ── 5. SharedFooter ──────────────────────────────────────────────────────────
const SharedFooter = () => (
  <footer className="bg-brand text-white/80">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        <div className="col-span-2 lg:col-span-1">
          <SemepBrand href="/" theme="dark" size="footer" className="mb-4" />
          <div className="text-[10px] text-white/50 tracking-widest uppercase mb-5">Saúde Mental &amp; Bem-Estar</div>
          <p className="text-[13px] text-white/60 leading-relaxed mb-5">Clínica multidisciplinar de referência em João Pessoa, especializada em saúde mental para crianças, adolescentes e adultos.</p>
          <div className="text-[12px] text-white/50">Av. Alagoas, 435 · Bairro dos Estados<br />João Pessoa/PB · CEP 58030-150</div>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">Explore</div>
          <ul className="space-y-3">
            {[['/sobre','Sobre a SEMEP'],['/atendimento-infantil','Atendimento Infantil'],['/atendimento-adulto','Atendimento Adulto'],['/#convenios','Convênios']].map(([href,label]) => (
              <li key={label}><a href={href} className="text-[13px] text-white/65 hover:text-white transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">Especialidades</div>
          <ul className="space-y-3">
            {[['/psiquiatria','Psiquiatria'],['/psicologia','Psicologia'],['/fonoaudiologia','Fonoaudiologia'],['/nutricao','Nutrição'],['/neuropsicologia','Neuropsicologia']].map(([href,label]) => (
              <li key={label}><a href={href} className="text-[13px] text-white/65 hover:text-white transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">Contato</div>
          <div className="space-y-3">
            <a href={waHref("Olá! Vim pelo site da SEMEP e gostaria de atendimento.")} data-whatsapp-id="rodape__telefone-whatsapp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-wa hover:text-[#5edc9e] transition-colors"><Ic.WhatsApp size={15}/>(83) 3340-3562</a>
            <div className="text-[13px] text-white/60">(83) 3506-4224</div>
            <div className="text-[13px] text-white/60">(83) 3506-4227</div>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/semepsaudemental/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @semepsaudemental" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><Ic.Instagram size={15} className="text-white"/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
        <div className="text-[12px] text-white/40">© 2026 SEMEP — Saúde Mental &amp; Bem-Estar. Todos os direitos reservados. <span className="mx-2">·</span> Resp. Técnico: Dr. Rômulo Antônio — CRM/PB 3442</div>
        <div className="flex gap-4">{[['/politica-de-privacidade','Política de Privacidade'],['/termos-de-uso','Termos de Uso'],['/lgpd','LGPD']].map(([href,label]) => <a key={label} href={href} className="text-[12px] text-white/40 hover:text-white/70 transition-colors">{label}</a>)}</div>
      </div>
    </div>
  </footer>
);

// ── 6. Breadcrumb ────────────────────────────────────────────────────────────
const Breadcrumb = ({ items }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-[88px] pb-0">
    <nav className="flex items-center gap-2 text-[13px] text-txt-sec py-3">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="text-divider">›</span>}
          {item.href
            ? <a href={item.href} className="hover:text-brand transition-colors">{item.label}</a>
            : <span className="text-brand font-medium">{item.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  </div>
);

// ── 7. CompactHero ───────────────────────────────────────────────────────────
const CompactHero = ({ badge, h1, subtitle, minH = '50vh' }) => (
  <section style={{ minHeight: minH, paddingTop: '72px' }} className="flex items-center bg-gradient-to-b from-surface to-white">
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-20 w-full text-center">
      <Badge className="bg-brand text-white mb-6" style={{ display: 'inline-flex' }}>{badge}</Badge>
      <h1 className="font-serif text-[38px] lg:text-[52px] font-bold text-brand leading-tight mb-5" style={{ textWrap: 'pretty' }}>{h1}</h1>
      <p className="text-txt-sec text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
    </div>
  </section>
);

// ── 8. FaqItem + FaqSection ──────────────────────────────────────────────────
const SharedFaqItem = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-divider last:border-0">
    <button type="button" onClick={onToggle} aria-expanded={isOpen} className="faq-toggle w-full flex items-center justify-between gap-4 py-5 text-left group">
      <span className="font-semibold text-[15px] text-brand group-hover:text-brand-mid transition-colors">{item.q}</span>
      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand text-white rotate-45' : 'bg-surface text-brand'}`}>
        <Ic.Plus size={15}/>
      </span>
    </button>
    <div className={`acc-body ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
      <div className="acc-panel">
        <p className="text-txt-sec text-[14px] leading-relaxed pb-5">{item.a}</p>
      </div>
    </div>
  </div>
);

const SharedFaqSection = ({ badge, title, subtitle, items, bg = 'surface', waLabel, waMsg }) => {
  const [openIdx, setOpenIdx] = React.useState(0);
  const bgClass = bg === 'white' ? 'bg-white' : 'bg-surface';
  return (
    <section className={`py-24 ${bgClass}`}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="reveal">
          <SectionHeader badge={badge} title={title} subtitle={subtitle} />
        </div>
        <div className="reveal bg-white rounded-3xl border border-divider shadow-card px-4 mb-10">
          {items.map((item, i) => (
            <SharedFaqItem key={i} item={item} isOpen={openIdx === i}
                           onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
          ))}
        </div>
        {waMsg && (
          <div className="text-center reveal">
            <WaButton trackingId="faq__tirar-duvidas" size="lg" message={waMsg}>{waLabel || 'Falar no WhatsApp'}</WaButton>
          </div>
        )}
      </div>
    </section>
  );
};

// ── 9. DoctorCard ────────────────────────────────────────────────────────────
const SharedDoctorCard = ({ doc }) => (
  <div className="doc-card bg-white rounded-2xl overflow-hidden border border-divider shadow-card">
    <div className="bg-[#E8EEF4] overflow-hidden">
      <img src={`https://images.unsplash.com/${doc.img}?auto=format&fit=crop&w=400&h=440&q=82`}
           alt={doc.name} className="w-full h-52 lg:h-60 object-cover object-top" />
    </div>
    <div className="p-5">
      <div className="font-serif text-[17px] font-bold text-brand leading-snug mb-0.5">{doc.name}</div>
      <div className="text-txt-sec text-[13px] mb-2">{doc.role}</div>
      <div className="text-brand-light text-[11px] font-semibold tracking-wide uppercase">{doc.reg}</div>
    </div>
  </div>
);

// ── 10. InnerCTA ─────────────────────────────────────────────────────────────
const InnerCTA = ({ h2, subtitle, waMsg, waLabel = 'Falar no WhatsApp', ghostHref, ghostLabel, from = '#0E2A47', to = '#1E4976' }) => (
  <section style={{ background: `linear-gradient(135deg, ${from}, ${to})` }} className="py-24">
    <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
      <Badge className="bg-white/15 text-white border border-white/20 mb-6">PRÓXIMO PASSO</Badge>
      <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">{h2}</h2>
      <p className="text-white/75 text-lg mb-10 leading-relaxed">{subtitle}</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <WaButton trackingId="cta-final__falar-no-whatsapp" size="lg" message={waMsg || "Olá! Vim pelo site da SEMEP e gostaria de atendimento."}>{waLabel}</WaButton>
        {ghostHref && ghostLabel && (
          <NeonBtn href={ghostHref} variant="ghost-white" size="lg">{ghostLabel}</NeonBtn>
        )}
      </div>
    </div>
  </section>
);

// ── 11. ApproachBlock3 ───────────────────────────────────────────────────────
const ApproachBlock3 = ({ blocks, accentColor = 'brand-turq' }) => (
  <div className="flex flex-col gap-7">
    {blocks.map((b, i) => (
      <div key={i} className="flex gap-4">
        <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-turq">
          {b.icon}
        </div>
        <div>
          <div className="font-semibold text-brand text-[16px] mb-1.5">{b.title}</div>
          <p className="text-txt-sec text-[14px] leading-relaxed">{b.text}</p>
        </div>
      </div>
    ))}
  </div>
);

Object.assign(window, {
  SharedHeader, SharedFooter, Breadcrumb, CompactHero,
  SharedFaqItem, SharedFaqSection, SharedDoctorCard, InnerCTA, ApproachBlock3,
  getActiveFromPath,
});
