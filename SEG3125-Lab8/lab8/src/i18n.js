import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Welcome: "Welcome to Kulture Salon",
        "We're here for all your hair needs!":
          "We're here for all your hair needs!",
        Language: "Choose Preferred Language",
        Expertise: "Our Expertise",
        "We have highly-trained employees who are able to provide whatever hair style you need. Trained with different tools and hair types, they adapt very quickly to satisfy you hair needs.": 
            "We have highly-trained employees who are able to provide whatever hair style you need. Trained with different tools and hair types, they adapt very quickly to satisfy you hair needs.",
        Stylists: "Meet Our Hairdressers"
      }
    },

    spa: {
      translations: {
        Welcome: "Bienvenido a Kulture Salon",
        "We're here for all your hair needs!":
          "¡Estamos aquí para todas tus necesidades de cabello!",
        Language: "Elegir idioma preferido",
        Expertise: "Nuestra Experiencia",
        "We have highly-trained employees who are able to provide whatever hair style you need. Trained with different tools and hair types, they adapt very quickly to satisfy you hair needs.": 
            "Tenemos empleados altamente capacitados que pueden proporcionar cualquier estilo de cabello que necesite. Formados con diferentes herramientas y tipos de cabello, se adaptan muy rápidamente para satisfacer sus necesidades de cabello.",
        Stylists: "Conoce a nuestros peluqueros"

    }
    },

    fre: {
        translations: {
            Welcome: "Bienvenue a Kulture Salon",
            "We're here for all your hair needs!":
              "Nous sommes là pour tous vos besoins capillaires!",
            Language: "Choisissez la langue préférée",
            Expertise: "Nuestra Experiencia",
            "We have highly-trained employees who are able to provide whatever hair style you need. Trained with different tools and hair types, they adapt very quickly to satisfy you hair needs.": 
                "Nous avons des employés hautement qualifiés capables de vous fournir la coiffure dont vous avez besoin. Formés à différents outils et types de cheveux, ils s'adaptent très rapidement pour satisfaire vos besoins capillaires.",
            Stylists: "Rencontrez nos coiffeurs"
        }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
