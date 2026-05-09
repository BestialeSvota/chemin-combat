import React from "react";

const iconPaths = {
  home: "M3 11.5 12 4l9 7.5V21a1 1 0 0 1-1 1h-5v-6H8v6H4a1 1 0 0 1-1-1v-9.5Z",
  sword: "M14.5 3 21 9.5l-2 2L12.5 5 14.5 3Zm-3.4 3.4 6.5 6.5-7.8 7.8-2.2-2.2 7.8-7.8-4.3-4.3ZM5 18l2 2-2.5 2.5L2.5 20 5 18Z",
  shield: "M12 2 20 5v6c0 5.2-3.4 9.1-8 11-4.6-1.9-8-5.8-8-11V5l8-3Z",
  waves: "M2 16c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2",
  mountain: "M3 20h18L14 6l-4 8-2-4-5 10Z",
  target: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  plane: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z",
  timer: "M10 2h4M12 14l3-3M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
  wallet: "M3 6a2 2 0 0 1 2-2h14v4H5a2 2 0 0 0 0 4h16v8H5a2 2 0 0 1-2-2V6Zm15 7h3v4h-3a2 2 0 0 1 0-4Z",
  pin: "M12 22s7-6.1 7-13a7 7 0 1 0-14 0c0 6.9 7 13 7 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
};

const stages = [
  {
    country: "Costa Rica",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
    role: "Base principale",
    icon: "home",
    duration: "Ancrage long terme",
    budget: "Terrain + maison : 140k–330k€",
    focus: "Mer, stabilité, récupération, construction personnelle",
    disciplines: ["Vie au calme", "Travail à distance", "Récupération", "Préparation physique"],
    text: "Le Costa Rica n'est pas le lieu où tu vas chercher la guerre intérieure. C'est le lieu où tu poses ton royaume : terrain, maison, mer, silence, stabilité politique et liberté de mouvement. C'est la base depuis laquelle tu pars apprendre et où tu reviens intégrer."
  },
  {
    country: "Thaïlande",
    image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1600&auto=format&fit=crop",
    role: "Impact + armes",
    icon: "sword",
    duration: "6 à 9 mois",
    budget: "900–1 300€/mois",
    focus: "Muay Thai + Krabi-Krabong",
    disciplines: ["Muay Thai", "Clinch", "Coudes / genoux", "Sabre thaï", "Conditionnement"],
    text: "Premier bloc offensif. La Thaïlande construit ton corps de frappe : tibias, hanches, rythme, douleur, pression. Le Krabi-Krabong ajoute la logique des armes et du sabre. Ici, tu ne cherches pas l'élégance : tu construis l'impact."
  },
  {
    country: "Russie",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1600&auto=format&fit=crop",
    role: "Pression + domination physique",
    icon: "shield",
    duration: "6 mois",
    budget: "1 000–1 800€/mois",
    focus: "Lutte + Sambo",
    disciplines: ["Lutte", "Sambo", "Projections", "Contrôle", "Pression constante"],
    text: "Deuxième bloc : apprendre à imposer ton poids, ton axe, ton rythme. La Russie t'apporte la dureté, la pression et le grappling agressif. Objectif : ne plus seulement frapper, mais imposer où le combat se déroule."
  },
  {
    country: "Brésil",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1600&auto=format&fit=crop",
    role: "Sol + soumission",
    icon: "target",
    duration: "9 à 12 mois",
    budget: "900–1 400€/mois",
    focus: "Jiu-Jitsu Brésilien",
    disciplines: ["Contrôle au sol", "Étranglements", "Clés", "Survie", "Patience"],
    text: "Troisième bloc : enlever la panique du sol. Le Brésil t'apprend à survivre, contrôler, attendre, finir. Ce n'est pas spectaculaire. C'est chirurgical. Là où un autre s'agite, tu respires et tu verrouilles."
  },
  {
    country: "Japon",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
    role: "Précision + sabre pur",
    icon: "sword",
    duration: "3 à 6 mois",
    budget: "1 500–2 500€/mois",
    focus: "Kendo + Iaido",
    disciplines: ["Kendo", "Iaido", "Timing", "Distance", "Discipline"],
    text: "Quatrième bloc : raffinement. Le Japon ne sert pas à te rendre brutal. Il sert à rendre ta brutalité précise. Distance, silence, coupe, posture, timing. Le sabre devient une école de décision."
  },
  {
    country: "États-Unis",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    role: "Fusion finale",
    icon: "mountain",
    duration: "6 mois",
    budget: "1 800–3 000€/mois",
    focus: "MMA complet",
    disciplines: ["Boxe", "Wrestling", "MMA", "Cage", "Transitions"],
    text: "Dernier bloc : vérifier que tout fonctionne ensemble. Debout, clinch, projection, sol, relevée, pression. Les États-Unis servent de laboratoire final : plus de style isolé, seulement l'efficacité sous opposition complète."
  }
];

const principles = [
  "Une base fixe. Des voyages ciblés.",
  "Chaque pays a une fonction précise.",
  "Pas de folklore : seulement ce qui transforme le corps.",
  "Retour au Costa Rica après chaque bloc pour intégrer.",
  "L'objectif n'est pas collectionner les arts martiaux. L'objectif est devenir complet."
];

const timelineItems = stages.map((stage, index) => ({
  id: createStageId(stage.country),
  step: String(index + 1).padStart(2, "0"),
  country: stage.country,
  role: stage.role,
  duration: stage.duration
}));

const tests = [
  {
    name: "le parcours contient une base Costa Rica",
    pass: stages.some((stage) => stage.country === "Costa Rica" && stage.role.includes("Base"))
  },
  {
    name: "le parcours contient la Thaïlande avec Muay Thai et sabre",
    pass: stages.some((stage) => stage.country === "Thaïlande" && stage.focus.includes("Muay Thai") && stage.focus.includes("Krabi-Krabong"))
  },
  {
    name: "chaque bloc possède une durée, un budget et au moins une discipline",
    pass: stages.every((stage) => stage.duration && stage.budget && stage.disciplines.length > 0)
  },
  {
    name: "toutes les icônes utilisées existent localement",
    pass: stages.every((stage) => Boolean(iconPaths[stage.icon]))
  },
  {
    name: "chaque bloc possède une image",
    pass: stages.every((stage) => Boolean(stage.image))
  },
  {
    name: "la timeline possède autant d'étapes que le parcours",
    pass: timelineItems.length === stages.length
  },
  {
    name: "chaque étape possède un identifiant de navigation",
    pass: timelineItems.every((item) => Boolean(item.id))
  }
];

export default function PersonalPathSite() {
  const failedTests = tests.filter((test) => !test.pass);

  return (
    <div className="min-h-screen bg-[#090806] text-[#f3eadc] selection:bg-[#b89b6a] selection:text-black">
      {failedTests.length > 0 && <TestWarning failedTests={failedTests} />}

      <section className="relative overflow-hidden border-b border-[#3b3022]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4b3824_0%,#15110c_42%,#090806_100%)] opacity-80" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c5aa78]">Chemin personnel</p>
            <h1 className="text-4xl font-light leading-tight md:text-7xl">
              Construire la base. Voyager pour incorporer. Revenir plus dense.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#cdbfa9] md:text-lg">
              Une carte de progression personnelle : Costa Rica comme ancrage, puis des blocs d'apprentissage par pays pour intégrer le combat debout, la lutte, le sol, les armes et la fusion complète.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Badge icon="waves" text="Mer & stabilité" />
              <Badge icon="sword" text="Combat & sabre" />
              <Badge icon="plane" text="Voyages ciblés" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b89b6a]">Structure</p>
            <h2 className="mt-4 text-3xl font-light md:text-5xl">La logique du plan</h2>
          </div>
          <div className="grid gap-4">
            {principles.map((item, index) => (
              <div key={item} className="border border-[#3b3022] bg-[#120f0b]/70 p-5 text-[#d8cbb7]">
                <span className="mr-4 text-[#b89b6a]">0{index + 1}</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-[#3b3022] pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b89b6a]">Itinéraire</p>
            <h2 className="mt-4 text-3xl font-light md:text-5xl">Les blocs par pays</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-6 text-[#a89981] md:block">
            Chaque étape doit avoir une fonction. Si une destination ne transforme pas ton corps ou ton axe de vie, elle sort du plan.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-6">
          {stages.map((stage, index) => (
            <article
              id={createStageId(stage.country)}
              key={stage.country}
              className="group grid gap-6 border border-[#3b3022] bg-[#0f0c09] p-6 transition duration-300 hover:border-[#6d5638] md:grid-cols-[0.45fr_1fr] md:p-8"
            >
              <div className="border-b border-[#3b3022] pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm text-[#b89b6a]">Bloc {index + 1}</span>
                  <Icon name={stage.icon} className="h-6 w-6 text-[#b89b6a]" />
                </div>
                <h3 className="text-3xl font-light md:text-4xl">{stage.country}</h3>
                <p className="mt-3 text-[#c5aa78]">{stage.role}</p>
                <div className="mt-8 space-y-3 text-sm text-[#bfb09b]">
                  <Info icon="timer" text={stage.duration} />
                  <Info icon="wallet" text={stage.budget} />
                  <Info icon="pin" text={stage.focus} />
                </div>
              </div>

              <div>
                <div className="mb-6 overflow-hidden border border-[#3b3022]">
                  <img
                    src={stage.image}
                    alt={stage.country}
                    className="h-64 w-full object-cover grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                  />
                </div>
                <p className="text-base leading-8 text-[#d8cbb7]">{stage.text}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {stage.disciplines.map((discipline) => (
                    <span key={discipline} className="border border-[#4a3b29] px-3 py-2 text-xs uppercase tracking-widest text-[#cdbfa9]">
                      {discipline}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}          </div>

          <Timeline items={timelineItems} />
        </div>
      </section>

      <section className="border-y border-[#3b3022] bg-[#120f0b]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
          <Metric label="Base" value="Costa Rica" detail="Terrain, maison, mer, stabilité" />
          <Metric label="Formation" value="30–42 mois" detail="Blocs intensifs + retours d'intégration" />
          <Metric label="Capital cible" value="180k–370k€" detail="Maison + voyages + marge de sécurité" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b89b6a]">Phrase directrice</p>
          <h2 className="mt-5 text-3xl font-light leading-tight md:text-5xl">
            Ne pas fuir le monde. Construire une base, puis aller chercher les disciplines là où elles sont nées fortes.
          </h2>
        </div>
      </section>
    </div>
  );
}

function createStageId(country) {
  return `bloc-${country
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

function Timeline({ items }) {
  return (
    <aside className="lg:sticky lg:top-8 lg:self-start">
      <div className="mb-5 flex items-center justify-between border-b border-[#3b3022] pb-4 lg:block lg:border-b-0 lg:pb-0">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#b89b6a]">Progression</p>
          <h3 className="mt-3 text-2xl font-light text-[#f3eadc]">Ligne temporelle</h3>
        </div>
        <span className="hidden text-xs uppercase tracking-[0.25em] text-[#6d5638] lg:block">vivante</span>
      </div>

      <nav className="relative overflow-x-auto border border-[#3b3022] bg-[#0f0c09]/95 p-4 lg:overflow-visible lg:p-6">
        <div className="flex min-w-max gap-4 lg:min-w-0 lg:flex-col lg:gap-0">
          {items.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative flex w-56 gap-4 rounded-sm p-3 transition duration-300 hover:bg-[#1a140e] lg:w-auto lg:pb-7"
            >
              <div className="relative flex flex-col items-center">
                <span className="relative z-10 flex h-9 w-9 items-center justify-center border border-[#6d5638] bg-[#090806] text-xs text-[#c5aa78] transition duration-300 group-hover:border-[#c5aa78] group-hover:text-[#f3eadc]">
                  {item.step}
                </span>
                {index !== items.length - 1 && (
                  <span className="absolute top-9 hidden h-[calc(100%+28px)] w-px bg-gradient-to-b from-[#6d5638] via-[#3b3022] to-transparent lg:block" />
                )}
              </div>

              <div className="min-w-0">
                <p className="text-sm uppercase tracking-[0.18em] text-[#f3eadc] transition duration-300 group-hover:text-[#c5aa78]">
                  {item.country}
                </p>
                <p className="mt-1 text-xs text-[#a89981]">{item.role}</p>
                <p className="mt-3 text-xs text-[#6d5638] transition duration-300 group-hover:text-[#b89b6a]">{item.duration}</p>
              </div>
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}

function Icon({ name, className = "h-5 w-5" }) {
  const path = iconPaths[name] || iconPaths.target;

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function Badge({ icon, text }) {
  return (
    <div className="flex items-center gap-2 border border-[#4a3b29] bg-black/20 px-4 py-3 text-sm text-[#d8cbb7]">
      <Icon name={icon} className="h-4 w-4 text-[#b89b6a]" />
      {text}
    </div>
  );
}

function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <Icon name={icon} className="h-4 w-4 text-[#b89b6a]" />
      <span>{text}</span>
    </div>
  );
}

function Metric({ label, value, detail }) {
  return (
    <div className="border border-[#3b3022] p-6">
      <p className="text-xs uppercase tracking-[0.25em] text-[#b89b6a]">{label}</p>
      <p className="mt-4 text-3xl font-light">{value}</p>
      <p className="mt-3 text-sm leading-6 text-[#a89981]">{detail}</p>
    </div>
  );
}

function TestWarning({ failedTests }) {
  return (
    <div className="border-b border-red-900 bg-red-950 px-6 py-3 text-sm text-red-100">
      Tests échoués : {failedTests.map((test) => test.name).join(", ")}
    </div>
  );
}
