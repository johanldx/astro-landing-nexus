import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration:200, // Durée de l'animation (ms)
  easing: "ease-in-out", // Type d'animation
  once: false, // Joue l'animation une seule fois
});

console.log('test');
