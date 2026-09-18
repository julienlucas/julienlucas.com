"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { Fragment, useEffect, useState } from "react";

interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

const items: NavItem[] = [
  { href: "#cover", label: "Accueil" },
  { href: "#mes-produits", label: "Produits IA" },
  { href: "#parcours", label: "Parcours" },
  { href: "#pocs", label: "Études de cas" },
  { href: "https://github.com/julienlucas", label: "GitHub", external: true },
  { href: "#contact", label: "Contact" },
];

const sections = items.filter((it) => !it.external);
const socials = items.filter((it) => it.external);

// Must match the breakpoint in globals.css where .nav-links gives way to the burger.
const MOBILE_QUERY = "(max-width: 880px)";

export default function Navigation() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [open, setOpen] = useState(false);

  // Lock the page scroll while the menu is open.
  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // Close if the viewport grows back to the desktop layout.
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = () => {
      if (!mq.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  // /links is a standalone Linktree page — no site chrome.
  if (pathname?.startsWith("/links")) return null;

  const close = () => {
    // Restart Lenis synchronously: its anchor handler runs right after this
    // click and ignores scrollTo while stopped.
    lenis?.start();
    setOpen(false);
  };

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={close}>
          <img
            src="/julienlucas.jpeg"
            alt="Julien Lucas"
            className="nav-avatar"
            width={28}
            height={28}
          />
          <span className="nav-logo-text">
            julienlucas<span className="dot">.</span>com
          </span>
        </Link>
        <div className="nav-links">
          {items.map((it, i) => (
            <Fragment key={it.href}>
              <span className="nav-slash" aria-hidden="true">
                /
              </span>
              {it.external ? (
                <a href={it.href} target="_blank" rel="noopener noreferrer">
                  {it.label}
                </a>
              ) : (
                <Link href={it.href} className={i === 0 ? "active" : undefined}>
                  {it.label}
                </Link>
              )}
            </Fragment>
          ))}
        </div>
        <button
          type="button"
          className={`nav-burger${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="nav-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div
        id="nav-mobile"
        className={`nav-mobile${open ? " is-open" : ""}`}
        inert={!open}
      >
        <ul className="nav-mobile-sections">
          {sections.map((it, i) => (
            <li key={it.href}>
              <Link href={it.href} onClick={close}>
                <span className="nav-mobile-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-mobile-socials">
          {socials.map((it) => (
            <a
              key={it.href}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              {it.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
