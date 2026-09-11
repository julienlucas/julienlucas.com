"use client";

import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname();
  // /links is a standalone Linktree page — no site chrome.
  if (pathname?.startsWith("/links")) return null;

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-giant">
          Julien
          <br />
          Lucas
          <span className="footer-cursor" aria-hidden="true">
            .
          </span>
        </div>

        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h5>À propos</h5>
            <p>
              Basé à Avignon. Cinq ans à coder pour des startups et des
              scale-ups, puis une bascule vers l&apos;IA fin 2024. Trois
              produits en production, construits seul, de bout en bout.
            </p>
          </div>

          <div className="footer-col">
            <h5>Produits</h5>
            <a href="#produit-shootingpro">Shootingpro.co</a>
            <a href="#produit-closechat">Closechat.co</a>
            <a href="#produit-prospable">Prospable.com</a>
          </div>

          <div className="footer-col">
            <h5>Explorer</h5>
            <a href="#mes-produits">Projets</a>
            <a href="#parcours">Parcours</a>
            <a href="#certifications">Certifications</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h5>Social</h5>
            <a
              href="https://www.linkedin.com/in/julien-lucas-jl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@JulienLucas"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://github.com/julienlucas"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} · Écrit à Avignon</div>
          <div>Tous droits réservés</div>
        </div>
      </div>
    </footer>
  );
}
