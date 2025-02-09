import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

const imagePaths = [
  "/assets/partners/odoo.png",
  "/assets/partners/esgi.png",
  "/assets/partners/jaiio.png",
  "/assets/partners/haloagency.png",
  "/assets/partners/aurus.png",
];

const GlideSlider = () => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      perView: 5, // Nombre d'éléments visibles
      autoplay: 2000, // Défilement toutes les 3 secondes
      hoverpause: false, // Ne pas stopper au survol
      animationDuration: 4000, // Transition fluide
      gap: 10, // Espacement entre logos
      rewind: false, // Défilement infini
      breakpoints: {
        1024: { perView: 3 },
        768: { perView: 2 },
        480: { perView: 1 }
      }
    }).mount();
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full overflow-hidden">
      <div className="glide w-full px-4">
        <div data-glide-el="track" className="overflow-hidden">
          <ul className="glide__slides flex">
            {imagePaths.map((src, index) => (
              <li key={index} className="glide__slide">
                <img className="w-auto h-12 mx-auto" src={src} alt={`Logo ${index + 1}`} />
              </li>
            ))}
            {/* Duplication pour effet infini */}
            {imagePaths.map((src, index) => (
              <li key={`dup-${index}`} className="glide__slide">
                <img className="w-auto h-10 mx-auto" src={src} alt={`Logo ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlideSlider;
