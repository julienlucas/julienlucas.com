import { ArrowDown } from "lucide-react";

/**
 * Avant / après Shootingpro : les selfies amateur fournis en entrée, puis les
 * portraits générés par le modèle. Images issues de la colonne « Creator
 * Edition » de la landing du produit. Bloc purement visuel.
 */

const sources = ["/shootingpro/src-01.jpg", "/shootingpro/src-02.jpg", "/shootingpro/src-03.jpg"];
const rendus = ["/shootingpro/gen-01.jpg", "/shootingpro/gen-02.jpg", "/shootingpro/gen-03.jpg", "/shootingpro/gen-04.jpg"];

export default function ShootingproShowcase() {
  return (
    <div className="sp">
      <div className="sp-avant">
        <span className="sp-lab">
          Avant<i>quelques selfies</i>
        </span>
        <span className="sp-thumbs">
          {sources.map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt="" aria-hidden="true" />
          ))}
        </span>
        <span className="sp-arrow" aria-hidden="true">
          <ArrowDown size={13} strokeWidth={2.2} />
        </span>
      </div>

      <span className="sp-lab sp-lab-apres">
        Après<i>portraits générés</i>
      </span>

      <div className="sp-gen">
        {rendus.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={
              i === 0
                ? "Portrait généré par Shootingpro à partir de selfies amateur"
                : ""
            }
            aria-hidden={i !== 0}
          />
        ))}
      </div>
    </div>
  );
}
