import { CalendarDays, Linkedin, Mail } from "lucide-react";
import ShootingproShowcase from "./components/ui/shootingpro-showcase";
import SectionWatermark from "./components/ui/section-watermark";
import YoutubeFeed from "./components/ui/youtube-feed";

function CvLogo({ src, alt, tile }: { src: string; alt: string; tile?: boolean }) {
  return (
    <span className={tile ? "cv-logo cv-logo-tile" : "cv-logo"} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* ─────────────────────  COVER  ───────────────────── */}
      <section className="profile-cover" id="cover">
        <div className="profile-cover-head">
          <span>Développeur 5 ans d'expérience</span>
          <span>Applied AI Engineer</span>
          <span>Avignon, France</span>
        </div>

        <div className="profile-cover-stage">
          <div className="profile-cover-title">
            <h1 className="profile-h1">
              <span>Julien</span>
              <span style={{ color: "var(--accent)" }}>Lucas.</span>
            </h1>
            <ul className="profile-cover-pills">
              <li className="profile-cover-pill">Ingénierie IA appliquée</li>
              <li className="profile-cover-pill">
                Développeur front/fullstack 5 ans en startups et scaleups
              </li>
              <li className="profile-cover-pill">Produits IA</li>
            </ul>
            <p className="profile-tagline">
              Cinq ans à coder pour des startups et scaleups. Aujourd'hui je
              construis des{" "}
              <strong>
                systèmes IA de bout en bout en production (agents IA, RAG
                agentique, LLM)
              </strong>
              , trois produits IA en prod.
            </p>
            <a href="#contact" className="cover-cta">
              <span>Discuter d&apos;un projet</span>
              <span className="cover-cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
          <figure className="profile-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/julienlucas-c.jpg" alt="Julien Lucas, Avignon, 2026" />
            <figcaption>
              <span>Julien Lucas</span>
              <span>salut maman</span>
            </figcaption>
          </figure>
        </div>

        <div className="profile-cover-foot">
          <span className="cover-avail">
            <span className="cover-avail-dot" aria-hidden="true" />
            Disponible · Freelance ou CDI
          </span>
          <span>
            Basé à Avignon · Sur site 2-3 j/semaine : Aix, Marseille,
            Montpellier, Lyon, Paris
          </span>
          <span>Faites défiler ↓</span>
        </div>
      </section>

      {/* ─────────────────  I. PRESENT TENSE  ───────────────── */}
      <section
        className="profile-movement profile-tone-soft intro"
        id="aujourdhui"
      >
        <SectionWatermark>01</SectionWatermark>
        <div className="profile-inner intro-inner">
          <div className="profile-meta">
            <span>Partie I</span>
            <span>/</span>
            <span>Aujourd'hui</span>
          </div>

          <div className="intro-head">
            <div>
              <h2 className="intro-h2">
                Ce que j'ai
                <br />
                construis<span className="accent">.</span>
              </h2>
            </div>
            <div>
              <p className="intro-lede">
                Trois produits IA en production construits de bout en bout seul,
                plus une étude de cas benchmarkée sur FinanceBench. À côté,
                j'accompagne en freelance des équipes qui veulent construire un
                système IA en prod : agents, RAG, fine-tuning. Le tout depuis un
                petit appart à Avignon.
              </p>
            </div>
          </div>

          <div className="chapter-index">
            <div className="chapter-group-label">Mes produits en prod</div>
            <a href="#produit-shootingpro" className="chapter-row">
              <span className="chapter-num">01</span>
              <span className="chapter-title">
                Shootingpro.co
                <span className="chapter-sub" data-state="live">
                  SaaS · Fine-tuning LoRA Flux 1
                </span>
              </span>
              <span className="chapter-tag">Portraits IA</span>
              <span className="chapter-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#produit-closechat" className="chapter-row">
              <span className="chapter-num">02</span>
              <span className="chapter-title">
                Closechat.co
                <span className="chapter-sub" data-state="paused">
                  SaaS · En pause
                </span>
              </span>
              <span className="chapter-tag">
                Agent de qualification commerciale WhatsApp
              </span>
              <span className="chapter-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#produit-prospable" className="chapter-row">
              <span className="chapter-num">03</span>
              <span className="chapter-title">
                Prospable.com
                <span className="chapter-sub" data-state="live">
                  SaaS · Fondateurs et petites équipes B2B
                </span>
              </span>
              <span className="chapter-tag">
                Cold email IA sur signaux d'achat
              </span>
              <span className="chapter-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <div className="chapter-group-label">Le reste du temps</div>
            <a
              href="https://www.linkedin.com/in/julien-lucas-jl/"
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-row"
            >
              <span className="chapter-num">04</span>
              <span className="chapter-title">Missions freelance</span>
              <span className="chapter-tag">Agents · RAG · Fine-tuning</span>
              <span className="chapter-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#youtube" className="chapter-row">
              <span className="chapter-num">05</span>
              <span className="chapter-title">Chaîne YouTube</span>
              <span className="chapter-tag">Vulgarisation</span>
              <span className="chapter-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────  II. PRODUITS (aperçu)  ───────────────── */}
      <div className="products" id="mes-produits">
        <SectionWatermark>02</SectionWatermark>
        <div className="profile-inner-wide">
          <div className="cluster-header">
            <div className="profile-meta">
              <span>Partie II</span>
              <span>/</span>
              <span>Mes produits</span>
            </div>
            <h2 className="cluster-h2">
              Trois produits IA en prod
              <span className="accent">.</span>
            </h2>
            <p className="cluster-lede">
              Chacun est parti d'un problème que j'avais sous les yeux — modèle,
              back, front, paiement, monitoring. Construits seul, de bout en
              bout.
            </p>
          </div>

          <section className="product-section" id="produit-shootingpro">
            <span className="product-watermark" aria-hidden="true">
              01
            </span>
            <div className="product-grid">
              <div className="product-meta">
                <span className="product-eyebrow">
                  <span className="count">01</span>
                  <span className="tag">Portraits IA</span>
                </span>
                <h3 className="product-name">
                  Génération de portraits pro avec modèles Flux
                </h3>
                <p className="product-tagline">
                  Quelques selfies en entrée, une série de portraits
                  professionnels en sortie — LinkedIn, CV, presse. Modèles Flux
                  fine-tunés en LoRA, sur un pipeline d'inférence GPU.
                </p>
                <dl className="product-audience">
                  <dt>Pour qui</dt>
                  <dd>
                    Les personnes à la recherche d&apos;un shooting
                    professionnel
                  </dd>
                </dl>
                <div className="product-stats">
                  <div>
                    <div className="product-stat-value">Flux 1</div>
                    <div className="product-stat-label">
                      Fine-tuné en LoRA, un modèle par client
                    </div>
                  </div>
                  <div>
                    <div className="product-stat-value">2025</div>
                    <div className="product-stat-label">
                      Mon premier produit IA
                    </div>
                  </div>
                </div>
                <div className="product-btns">
                  <a
                    href="https://shootingpro.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-btn"
                  >
                    Visiter le site <span aria-hidden="true">→</span>
                  </a>
                  <span className="product-btn product-btn-ghost product-btn-label">
                    shootingpro.co
                  </span>
                </div>
              </div>
              <div className="product-visual product-live">
                <ShootingproShowcase />
              </div>
            </div>
          </section>

          <section className="product-section" id="produit-closechat">
            <span className="product-watermark" aria-hidden="true">
              02
            </span>
            <div className="product-grid product-grid-reversed">
              <div className="product-meta">
                <span className="product-eyebrow">
                  <span className="count">02</span>
                  <span className="tag">Agent LangGraph</span>
                </span>
                <h3 className="product-name">
                  Agent de qualification commercial WhatsApp
                </h3>
                <p className="product-tagline">
                  Un agent LangGraph/LangChain branché sur l'API Meta WhatsApp
                  qui qualifie des leads dormants, encaisse les objections et
                  pose le RDV directement dans le calendrier du commercial.
                  Uniquement quand l'intérêt est réellement établi.
                </p>
                <dl className="product-audience">
                  <dt>Pour qui</dt>
                  <dd>Les entrepreneurs ayant une audience</dd>
                </dl>
                <div className="product-stats">
                  <div>
                    <div className="product-stat-value">BANT</div>
                    <div className="product-stat-label">
                      Scoring et gates avant toute prise de RDV
                    </div>
                  </div>
                </div>
                <div className="product-btns">
                  <a
                    href="https://closechat.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-btn"
                  >
                    Visiter le site <span aria-hidden="true">→</span>
                  </a>
                  <span className="product-btn product-btn-ghost product-btn-label">
                    closechat.co
                  </span>
                </div>
              </div>
              <div className="product-visual pv-1">
                <div className="pv-num">Produit 02 · 2026</div>
                <div className="pv-name">Closechat.co</div>
                <div className="pv-foot">
                  <span>En prod</span>
                </div>
              </div>
            </div>
          </section>

          <section className="product-section" id="produit-prospable">
            <span className="product-watermark" aria-hidden="true">
              03
            </span>
            <div className="product-grid">
              <div className="product-meta">
                <span className="product-eyebrow">
                  <span className="count">03</span>
                  <span className="tag">Prospection IA et automatisée</span>
                </span>
                <h3 className="product-name">
                  Cold email et LinkedIn en autopilote
                </h3>
                <p className="product-tagline">
                  La prospection automatisée sur signaux d'intention et ICP
                  détectés sur LinkedIn, prospects enrichis, cold emails et MP
                  LinkedIn écrits selon le signal. Chauffe des boîtes en
                  continu. Achat de boîtes Google à 4,5€, domaines. Tout est là.
                </p>
                <dl className="product-audience">
                  <dt>Pour qui</dt>
                  <dd>Les fondateurs, équipes B2B et indépendants</dd>
                </dl>
                <div className="product-stats">
                  <div>
                    <div className="product-stat-value">300 / jour</div>
                    <div className="product-stat-label">
                      Emails ciblés envoyés en autopilote
                    </div>
                  </div>
                  <div>
                    <div className="product-stat-value">
                      Signaux d&apos;achat
                    </div>
                    <div className="product-stat-label">
                      Offres d&apos;emploi, nouveaux recrutements et autres
                      signaux
                    </div>
                  </div>
                </div>
                <div className="product-btns">
                  <a
                    href="https://prospable.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-btn"
                  >
                    Réserver une démo <span aria-hidden="true">→</span>
                  </a>
                  <span className="product-btn product-btn-ghost product-btn-label">
                    prospable.com
                  </span>
                </div>
              </div>
              <div className="product-visual product-live">
                <div className="product-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/prospable.jpg"
                    alt="Tableau de bord Prospable"
                    className="product-shot"
                    width={2013}
                    height={1158}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ─────────────────  II. THE FIRST LINE  ───────────────── */}
      <section className="profile-bleed profile-bleed-dark" id="parcours">
        <SectionWatermark>03</SectionWatermark>
        <div className="profile-bleed-grid">
          <div className="profile-bleed-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/jaimebien/IMG_7128.jpg" alt="Julien, hiver" />
            <div className="profile-bleed-cap">
              2026 · entre deux séssions de Claude
            </div>
          </div>
          <div className="profile-bleed-txt">
            <div className="profile-eb">Partie III / Mon CV de développeur</div>
            <h3 className="profile-h3">
              <span>Cinq startups et scaleups.</span>{" "}
              <span className="profile-em">
                Intérim disruptée, telecom, épargne, e-learning
              </span>
            </h3>
            <p>
              Avant de passer à l&apos;IA, j&apos;ai été développeur
              front/fullstack dont cinq ans en startups et scaleups.
            </p>
            <div className="bleed-cv" id="scale-ups">
              <dl className="profile-tick cv-logos cv-table-lead">
                <dt>
                  <CvLogo src="/iziwork.jpg" alt="iziwork" />
                  iziwork
                </dt>
                <dd>2020 — 2021</dd>
                <dt>
                  <CvLogo src="/reezocar.png" alt="Reezocar" tile />
                  Reezocar
                </dt>
                <dd>2021</dd>
                <dt>
                  <CvLogo src="/sewan.png" alt="Sewan Groupe" tile />
                  Sewan Groupe
                </dt>
                <dd>2021</dd>
                <dt>
                  <CvLogo src="/corum.svg" alt="Corum l'Épargne" tile />
                  Corum l&apos;Épargne
                </dt>
                <dd>2022</dd>
                <dt>
                  <CvLogo src="/smartch.jpeg" alt="Smartch" />
                  Smartch (Lead front-end)
                </dt>
                <dd>2022 — 2023</dd>
                <dt className="cv-total">Total</dt>
                <dd className="profile-accent-word">5 ans</dd>
              </dl>

              {/* Second tableau : la formation n'est pas une mission en
                  entreprise, elle a donc sa propre timeline plutot qu'une
                  ligne au milieu des scale-ups. */}
              <div className="bleed-cv-aside-table">
                <dl className="profile-tick cv-logos">
                  <dt>
                    <a
                      href="https://formation-cleanarchitecture.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Formateur Clean Architecture
                      <span className="cv-ext" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                    <span className="cv-note">40 développeurs formés</span>
                  </dt>
                  <dd>2023 — 2025</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────  FUNFACT: HOW I LEARNED IT  ───────────────── */}
      <section
        className="profile-funfact profile-funfact-split profile-tone-mid"
        id="certifications"
      >
        <SectionWatermark>04</SectionWatermark>
        <div className="profile-funfact-split-inner">
          <figure className="profile-funfact-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/jaimebien/IMG_7181.jpg"
              alt="Vue dégagée, fin de journée"
            />
            <figcaption>1 an de fondamentaux IA · 2 certifications</figcaption>
          </figure>
          <div className="profile-funfact-content">
            <div className="profile-funfact-label">
              Partie IV / Les certifications
            </div>
            <h3 className="profile-funfact-title">Deux certifications IA</h3>
            <p className="profile-funfact-body">
              J'ai eu envie d'aller plus loin que l'ingénierie logicielle. Je
              voulais comprendre les architectures d'agents, les modèles depuis
              la backprop jusqu'au RAG agentique, parce qu'on ne construit pas
              en confiance ce qu'on ne comprend pas.
            </p>
            <div className="cert-list">
              <article className="cert-item">
                <div className="cert-item-head">
                  <span className="cert-item-org">
                    Coursera × DeepLearning.AI
                  </span>
                  <span className="cert-item-date">nov. 2025 — janv. 2026</span>
                </div>
                <h4 className="cert-item-title">
                  <a
                    href="https://www.coursera.org/account/accomplishments/professional-cert/KMOYDJ75NIVJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spécialisation PyTorch pour le Deep Learning
                    <span className="cert-item-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </h4>
                <p className="cert-item-body">
                  Vision par ordinateur et architectures CNN, NLP, fine-tuning,
                  optimisation de modèles, PyTorch Lightning et Optuna,
                  déploiements ONNX et MLflow.
                </p>
              </article>
              <article className="cert-item">
                <div className="cert-item-head">
                  <span className="cert-item-org">Coursera × IBM</span>
                  <span className="cert-item-date">juin 2025 — sept. 2025</span>
                </div>
                <h4 className="cert-item-title">
                  <a
                    href="https://www.coursera.org/account/accomplishments/specialization/YHXXPPZ0KKZM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AI Engineering Professional Certificate — RAG et IA
                    agentique
                    <span className="cert-item-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </h4>
                <p className="cert-item-body">
                  Agents IA, RAG, MM-RAG, RAG agentique, et fine-tuning de
                  modèles en DPO, PPO, LoRA, QLoRA, instruction-tuning et PEFT
                  avec Hugging Face.
                </p>
              </article>
            </div>
            <div className="cert-logos">
              <span className="cert-logos-label">Certifié par</span>
              <div className="cert-logos-row">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ibm.svg"
                  alt="IBM"
                  className="cert-logo cert-logo-ibm"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/deeplearning.png"
                  alt="DeepLearning.AI"
                  className="cert-logo cert-logo-dl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────  VI. POCS / CASE STUDIES  ───────────────── */}
      <section
        className="profile-movement profile-tone-soft profile-no-dropcap"
        id="pocs"
      >
        <SectionWatermark>05</SectionWatermark>
        <div className="profile-inner-wide">
          <div className="profile-meta">
            <span>Partie V</span>
            <span>/</span>
            <span>Études de cas</span>
          </div>
          <h2 className="profile-h2 profile-h2-sm">
            Études de cas.
            <br />
            <span className="profile-em">Preuves de pratique</span>
          </h2>

          {/* Etude de cas : pas un produit commercialise, donc traite a part —
              badge « recherche appliquee », resultats benchmarkes en tete et
              demo publique plutot qu'un lien « visiter le site ». */}
          <section
            className="product-section product-section-case"
            id="etude-agentic-rag"
          >
            <span className="product-watermark" aria-hidden="true">
              01
            </span>
            <div className="product-grid product-grid-reversed">
              <div className="product-meta">
                <span className="product-eyebrow">
                  <span className="count">01</span>
                  <span className="tag">RAG sur documents</span>
                </span>
                <span className="case-badge">Étude de cas</span>
                <h3 className="product-name">RAG Agentique</h3>
                <p className="product-tagline">
                  Un multi-agent LangGraph qui répond sur des PDF longs —
                  rapports financiers, documentation technique. Plutôt que de
                  lui servir des extraits découpés à l'avance,{" "}
                  <strong>
                    j'ai développé outils de navigation que l'agent utilise
                    lui-même{" "}
                  </strong>
                  pour se déplacer dans les documents : aller à une section,
                  ouvrir un tableau, revenir en arrière. C'est ce choix qui fait
                  les trois chiffres ci-dessous.
                </p>
                <p className="case-bench">
                  Benchmarké sur <strong>un échantillon du FinanceBench</strong>{" "}
                  (échantillon seulement), un jeu de données relevé de documents
                  financiers AMD, Boeing, Intel
                </p>
                <div className="product-stats">
                  <div>
                    <div className="product-stat-value">81 %</div>
                    <div className="product-stat-label">
                      De réponses correctes
                    </div>
                  </div>
                  <div>
                    <div className="product-stat-value">&minus;40 %</div>
                    <div className="product-stat-label">
                      De tokens consommés par question
                    </div>
                  </div>
                  <div>
                    <div className="product-stat-value">÷ 2</div>
                    <div className="product-stat-label">De latence</div>
                  </div>
                </div>
                <div className="product-btns">
                  <a
                    href="https://docchat-agentic-rag.up.railway.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-btn"
                  >
                    Essayer la démo publique <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href="https://github.com/julienlucas/agentic-rag-with-tools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-btn product-btn-ghost"
                  >
                    Voir sur GitHub
                  </a>
                </div>
              </div>
              <div className="product-visual pv-2 pv-photo">
                <div className="pv-num">Étude de cas 01 · 2026</div>
                <div className="pv-name">
                  RAG
                  <br />
                  Agentique
                  <span style={{ color: "var(--accent-light)" }}>.</span>
                </div>
                <div className="pv-foot">
                  <span>Évalué sur FinanceBench</span>
                </div>
              </div>
            </div>
          </section>

          <div className="poc-layout">
            <div className="poc-layout-main">
              <div className="poc-list">
                <div className="poc-list-row">
                  <a
                    href="https://mm-rag-styleanalyzer.up.railway.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="poc-list-item"
                  >
                    <span className="poc-list-num">N° 02 · RAG Multimodal</span>
                    <div className="poc-list-body">
                      <h3 className="poc-list-title">
                        Recommandation de tenues par image
                      </h3>
                      <span className="poc-list-stack">MM-RAG + ConvNext</span>
                    </div>
                  </a>
                  <a
                    href="https://github.com/julienlucas/mm-rag-fashionstyle-analyzer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="poc-list-git"
                    aria-label="Voir sur GitHub — Recommandation de tenues par image"
                  >
                    Voir sur GitHub
                  </a>
                  <span className="poc-list-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
                <div className="poc-list-row">
                  <a
                    href="https://pneumodiag.up.railway.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="poc-list-item"
                  >
                    <span className="poc-list-num">N° 03 · DeepLearning</span>
                    <div className="poc-list-body">
                      <h3 className="poc-list-title">
                        Diagnostic de pneumonies depuis une radio
                      </h3>
                      <span className="poc-list-stack">
                        Fine-tuning PyTorch
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://github.com/julienlucas/pneumonia-diagnostic-assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="poc-list-git"
                    aria-label="Voir sur GitHub — Diagnostic de pneumonies depuis une radio"
                  >
                    Voir sur GitHub
                  </a>
                  <span className="poc-list-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
                <div className="poc-list-row">
                  <a
                    href="https://fakefinder-nanobananapro.up.railway.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="poc-list-item"
                  >
                    <span className="poc-list-num">N° 04 · DeepLearning</span>
                    <div className="poc-list-body">
                      <h3 className="poc-list-title">
                        Différenciateur images réelles vs IA (NanoBananaPro,
                        Flux, Midjourney, SD)
                      </h3>
                      <span className="poc-list-stack">
                        Fine-tuning PyTorch
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://github.com/julienlucas/fake-detector-nanobananapro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="poc-list-git"
                    aria-label="Voir sur GitHub — Différenciateur images réelles vs IA"
                  >
                    Voir sur GitHub
                  </a>
                  <span className="poc-list-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </div>
            <figure className="poc-layout-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jaimebien/IMG_7160.jpg"
                alt="Coucher de soleil dans le Vaucluse"
              />
              <figcaption>Vaucluse · fin 2024</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ─────────────────  VII. YOUTUBE  ───────────────── */}
      <section
        className="profile-movement profile-tone-paper profile-no-dropcap"
        id="youtube"
      >
        <SectionWatermark>06</SectionWatermark>
        <div className="profile-inner-wide">
          <div className="profile-meta">
            <span>Partie VI</span>
            <span>/</span>
            <span>Sur YouTube</span>
          </div>
          <h2 className="profile-h2">
            J'ai vulgarisé sur Youtube,
            <span className="profile-em">12 000 abonnés</span>
          </h2>
          <YoutubeFeed />
          <div style={{ marginTop: 32 }}>
            <a
              href="https://www.youtube.com/@JulienLucas"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              S'abonner à la chaîne →
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────  VIII. CONTACT  ───────────────── */}
      <section
        className="profile-movement profile-tone-deep profile-cta-section profile-no-dropcap"
        id="contact"
      >
        <SectionWatermark>07</SectionWatermark>
        <div className="profile-inner-wide">
          <div className="profile-meta">
            <span>Partie VII</span>
            <span>/</span>
            <span>Me contacter</span>
          </div>
          <h2 className="profile-h2">
            Un problème à résoudre&nbsp;?{" "}
            <span className="profile-em">Parlons-en.</span>
          </h2>

          <div className="li-bill">
            <div className="li-bill-num">
              13K<sup>+ abonnés sur Linkedin</sup>
            </div>
            <div className="li-bill-right">
              <span className="li-bill-eyebrow">
                Ingénieur IA · Freelance ou CDI · Disponible
              </span>
              <p className="li-bill-avail">
                Basé à Avignon, sur site 2-3 jours par semaine à
                Aix-en-Provence, Marseille, Montpellier, Lyon et Paris. Ou full
                remote.
              </p>
              <h3 className="li-bill-h">
                Agents, RAG, fine-tuning. <em>Dites-moi ce qui bloque.</em>
              </h3>

              <ul className="ct-list">
                <li>
                  <a
                    href="https://www.linkedin.com/in/julien-lucas-jl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ct-item ct-item-primary"
                  >
                    <span className="ct-ico">
                      <Linkedin size={17} strokeWidth={1.9} />
                    </span>
                    <span className="ct-body">
                      <span className="ct-chan">LinkedIn</span>
                      <span className="ct-val">in/julien-lucas-jl</span>
                      <span className="ct-note">
                        Le plus simple pour engager la conversation.
                      </span>
                    </span>
                    <span className="ct-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@julienlucas.com" className="ct-item">
                    <span className="ct-ico">
                      <Mail size={17} strokeWidth={1.9} />
                    </span>
                    <span className="ct-body">
                      <span className="ct-chan">Email</span>
                      <span className="ct-val">contact@julienlucas.com</span>
                      <span className="ct-note">
                        Pour un contexte détaillé, un cahier des charges.
                      </span>
                    </span>
                    <span className="ct-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.lemcal.com/@julienlucas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ct-item"
                  >
                    <span className="ct-ico">
                      <CalendarDays size={17} strokeWidth={1.9} />
                    </span>
                    <span className="ct-body">
                      <span className="ct-chan">Réserver un créneau</span>
                      <span className="ct-val">
                        app.lemcal.com/@julienlucas
                      </span>
                      <span className="ct-note">
                        30 minutes pour cadrer votre besoin.
                      </span>
                    </span>
                    <span className="ct-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
