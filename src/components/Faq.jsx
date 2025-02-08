import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline"; // Import de l'icône Tailwind Heroicons

const faqs = [
  {
    question: "Pourquoi faire appel à une Junior-Entreprise ?",
    answer: "Faire appel à une Junior-Entreprise permet d’accéder à des prestations professionnelles à un coût réduit, tout en bénéficiant des compétences d’étudiants formés aux dernières technologies. Encadrée par un réseau national, une JE garantit un travail sérieux et innovant, tout en offrant aux entreprises une approche flexible et dynamique."
  },
  {
    question: "Qu'est-ce qu'une étude ?",
    answer: "Une étude est une mission confiée à la Junior-Entreprise pour répondre aux besoins spécifiques d’un client. Elle suit un processus structuré : analyse du projet, mise en œuvre de la solution et livraison des livrables (ex: produit final déployé, documentation technique, guide d'utilisation...). Adaptée aux exigences du marché, elle permet aux entreprises d’accéder à des services sur mesure, réalisés avec rigueur et méthodologie."
  },
  {
    question: "Comment fonctionne notre tarifiation ?",
    answer: "Notre système de tarification est structuré pour répondre à une grande variété de besoins, en divisant chaque domaine d’expertise en 5 niveaux de tarification basés sur la complexité de l'étude. Nous réalisons votre devis gratuitement."
  },
  {
    question: "Sommes-nous soumis à une obligation de résultat ?",
    answer: "Non, une Junior-Entreprise est tenue à une obligation de moyens et non de résultat. Cela signifie que nous mettons en œuvre toutes les ressources nécessaires pour mener à bien un projet, sans garantir un résultat spécifique. Toutefois, nous nous engageons à assurer un travail sérieux, encadré et conforme aux attentes définies avec le client."
  },
  {
    question: "Existe-t-il des garanties ?",
    answer: "Nous assurons une période de garantie pour corriger toute anomalie identifiée après la livraison. Elle couvre la correction des éventuels bugs identifiés après livraison et des ajustements mineurs demandés dans les premières semaines suivant la mise à disposition du livrable."
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            {/* Bouton Question avec Heroicon */}
            <button
              className="w-full text-left py-3 text-lg font-medium flex justify-between items-center text-neutral-200 focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              {faq.question}
              <ChevronDownIcon
                className={`w-6 h-6 transition-transform transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Réponse avec transition fluide */}
            <div
              className={`grid transition-all duration-300 ${
                activeIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden text-neutral-200 pb-5">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
