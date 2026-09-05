export interface Specialty {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  pathologies: string[];
  exams: string[];
  doctors: string[]; // doctor IDs
  color: string;
}

export const specialties: Specialty[] = [
  {
    id: 'cardiology',
    slug: 'cardiologie',
    name: 'Cardiologie',
    shortDescription: 'Prise en charge complète des maladies cardiaques et vasculaires',
    fullDescription: 'Notre service de cardiologie assure la prévention, le diagnostic et le traitement de l\'ensemble des pathologies cardiaques : insuffisance cardiaque, troubles du rythme, cardiopathies ischémiques, valvulopathies et maladies de l\'aorte. Équipé des technologies les plus avancées (IRM cardiaque, coronarographie, électrophysiologie), le service pratique également la chirurgie cardiaque mini-invasive.',
    icon: 'heart-pulse',
    image: '/images/specialties/cardiology.jpg',
    pathologies: [
      'Insuffisance cardiaque',
      'Fibrillation auriculaire',
      'Infarctus du myocarde',
      'Valvulopathies',
      'Hypertension artérielle',
      'Cardiomyopathies',
      'Troubles du rythme',
      'Maladies de l\'aorte'
    ],
    exams: [
      'Échocardiographie',
      'Épreuve d\'effort',
      'Holter ECG/TA',
      'Coronarographie',
      'IRM cardiaque',
      'Scanner cardiaque',
      'Électrophysiologie',
      'Test d\'effort cardiopulmonaire'
    ],
    doctors: ['dr-martin', 'dr-dubois', 'dr-bernard'],
    color: '#E85D3A'
  },
  {
    id: 'neurology',
    slug: 'neurologie',
    name: 'Neurologie',
    shortDescription: 'Expertise dans les maladies du système nerveux central et périphérique',
    fullDescription: 'Le service de neurologie prend en charge les pathologies du cerveau, de la moelle épinière et des nerfs périphériques : accidents vasculaires cérébraux, épilepsie, sclérose en plaques, maladies neurodégénératives (Parkinson, Alzheimer), migraines chroniques, neuropathies. Une unité neurovasculaire (UNV) certifiée assure la prise en charge 24/7 des AVC.',
    icon: 'brain',
    image: '/images/specialties/neurology.jpg',
    pathologies: [
      'Accident vasculaire cérébral (AVC)',
      'Épilepsie',
      'Sclérose en plaques',
      'Maladie de Parkinson',
      'Maladie d\'Alzheimer',
      'Migraines et céphalées',
      'Neuropathies périphériques',
      'Myasthénie'
    ],
    exams: [
      'IRM cérébrale',
      'Scanner cérébral',
      'Électroencéphalogramme (EEG)',
      'Électromyogramme (EMG)',
      'Potentiels évoqués',
      'Ponction lombaire',
      'Doppler des troncs supra-aortiques',
      'Polysomnographie'
    ],
    doctors: ['dr-petit', 'dr-moreau', 'dr-laurent'],
    color: '#00A3A1'
  },
  {
    id: 'oncology',
    slug: 'oncologie',
    name: 'Oncologie',
    shortDescription: 'Cancérologie médicale et radiothérapie de pointe',
    fullDescription: 'Notre institut de cancérologie offre une prise en charge globale et personnalisée : chimiothérapie, immunothérapie, thérapies ciblées, hormonothérapie et radiothérapie de précision (VMAT, stéréotaxie). Chaque dossier est discuté en réunion de concertation pluridisciplinaire (RCP). Un parcours patient dédié avec infirmiers de coordination, psychologues et soins de support.',
    icon: 'shield-check',
    image: '/images/specialties/oncology.jpg',
    pathologies: [
      'Cancer du sein',
      'Cancer du poumon',
      'Cancer colorectal',
      'Cancer de la prostate',
      'Hémopathies malignes',
      'Mélanome',
      'Cancers gynécologiques',
      'Sarcomes'
    ],
    exams: [
      'TEP-TDM',
      'IRM de diffusion',
      'Biopsie guidée imagerie',
      'Marqueurs tumoraux',
      'Génétique oncologique',
      'Bilan d\'extension',
      'Scintigraphie osseuse',
      'Endoscopies'
    ],
    doctors: ['dr-roux', 'dr-fournier', 'dr-girard'],
    color: '#6366F1'
  },
  {
    id: 'orthopedics',
    slug: 'orthopedie',
    name: 'Orthopédie & Chirurgie Orthopédique',
    shortDescription: 'Chirurgie du membre supérieur, inférieur et rachis',
    fullDescription: 'Le service d\'orthopédie pratique la chirurgie prothétique (hanche, genou, épaule), la chirurgie arthroscopique, la traumatologie du sport, la chirurgie du rachis (hernie discale, sténose), et la chirurgie de la main. Voie rapide de récupération (RAAC) pour les prothèses. Centre de référence pour la chirurgie de révision complexe.',
    icon: 'bone',
    image: '/images/specialties/orthopedics.jpg',
    pathologies: [
      'Arthrose hanche/genou',
      'Rupture ligament croisé',
      'Lésion méniscale',
      'Hernie discale',
      'Sténose lombaire',
      'Fractures complexes',
      'Pathologies de l\'épaule',
      'Chirurgie de la main'
    ],
    exams: [
      'IRM articulaire',
      'Scanner 3D',
      'Radiographie dynamique',
      'Échographie musculo-squelettique',
      'Arthro-scanner',
      'Scintigraphie osseuse',
      'Densitométrie osseuse',
      'Analyse de la marche'
    ],
    doctors: ['dr-lefevre', 'dr-morin', 'dr-garnier'],
    color: '#059669'
  },
  {
    id: 'pediatrics',
    slug: 'pediatrie',
    name: 'Pédiatrie & Néonatologie',
    shortDescription: 'Soins complets de l\'enfant de la naissance à l\'adolescence',
    fullDescription: 'Notre service de pédiatrie assure les consultations de suivi, les vaccinations, les urgences pédiatriques et l\'hospitalisation. Unité de néonatologie de niveau II pour la prise en charge des nouveau-nés prématurés ou pathologiques. Pédiatres spécialisés en pneumologie, gastro-entérologie, neurologie, endocrinologie et maladies infectieuses pédiatriques.',
    icon: 'baby',
    image: '/images/specialties/pediatrics.jpg',
    pathologies: [
      'Suivi de croissance',
      'Infections respiratoires',
      'Pathologies digestives',
      'Allergies alimentaires',
      'Troubles du neurodéveloppement',
      'Maladies infectieuses',
      'Prématurité',
      'Maladies rares pédiatriques'
    ],
    exams: [
      'Bilan de santé enfant',
      'Test de transpiration',
      'Explorations fonctionnelles respiratoires',
      'Échographie pédiatrique',
      'Bilan allergologique',
      'Test de provocation orale',
      'Électroencéphalogramme enfant',
      'Dépistage néonatal'
    ],
    doctors: ['dr-faure', 'dr-andre', 'dr-mercier'],
    color: '#EC4899'
  },
  {
    id: 'gynecology',
    slug: 'gynecologie-obstetrique',
    name: 'Gynécologie & Obstétrique',
    shortDescription: 'Santé de la femme, maternité et chirurgie gynécologique',
    fullDescription: 'Maternité de niveau II avec salle de naissance physiologique, bloc obstétrical et unité de soins intensifs néonatals. Gynécologie médicale (contraception, ménopause, endométriose, infertilité) et chirurgicale (coelioscopie, hysteroscopie, chirurgie du plancher pelvien). Centre de référence endométriose. PMA en partenariat.',
    icon: 'heart-handshake',
    image: '/images/specialties/gynecology.jpg',
    pathologies: [
      'Grossesse et accouchement',
      'Endométriose',
      'Infertilité',
      'Fibromes utérins',
      'Prolapsus génital',
      'Ménopause',
      'Cancers gynécologiques',
      'Infections sexuellement transmissibles'
    ],
    exams: [
      'Échographie obstétricale',
      'Hystérosalpingographie',
      'Hystéroscopie diagnostique',
      'Colposcopie',
      'Dépistage HPV',
      'Bilan hormonal',
      'IRM pelvienne',
      'Monitoring fœtal'
    ],
    doctors: ['dr-rousseau', 'dr-blanc', 'dr-guerin'],
    color: '#DB2777'
  },
  {
    id: 'emergency',
    slug: 'urgences',
    name: 'Médecine d\'Urgence',
    shortDescription: 'Service d\'urgences 24/7 avec équipe SMUR',
    fullDescription: 'Service d\'urgences adultes et pédiatriques ouvert 24h/24, 7j/7. Équipe médicale senior, infirmiers d\'urgence formés, accueil SMUR. Prise en charge immédiate des urgences vitales : arrêt cardiaque, détresse respiratoire, AVC, traumatismes graves, intoxications. Parcours urgence optimisé : triage infirmier, box de réanimation, salle de déchocage, unité d\'hospitalisation brève (UHCD).',
    icon: 'ambulance',
    image: '/images/specialties/emergency.jpg',
    pathologies: [
      'Arrêt cardiaque',
      'Accident vasculaire cérébral',
      'Infarctus du myocarde',
      'Traumatismes graves',
      'Détresse respiratoire aiguë',
      'Intoxications',
      'Urgences abdominales',
      'Urgences psychiatriques'
    ],
    exams: [
      'Biologie d\'urgence (résultats < 1h)',
      'Radiographie au lit du malade',
      'Échographie FAST',
      'Scanner d\'urgence',
      'Gaz du sang artériel',
      'ECG continu',
      'Dosage troponine haute sensibilité',
      'D-dimères'
    ],
    doctors: ['dr-henry', 'dr-nicolas', 'dr-perrin'],
    color: '#E85D3A'
  },
  {
    id: 'checkup',
    slug: 'check-up',
    name: 'Centre de Check-up & Prévention',
    shortDescription: 'Bilans de santé personnalisés et médecine préventive',
    fullDescription: 'Le Centre de Check-up propose des bilans de santé sur mesure adaptés à l\'âge, au sexe, aux antécédents et aux facteurs de risque. Formules : Essentiel, Premium, Executive, Senior, Femme, Homme, Sportif. Chaque check-up inclut : consultation médicale approfondie, biologie complète, imagerie ciblée, dépistages cancérologiques, évaluation cardiovasculaire, conseil nutritionnel et remise d\'un rapport détaillé avec plan d\'action personnalisé.',
    icon: 'clipboard-check',
    image: '/images/specialties/checkup.jpg',
    pathologies: [
      'Bilan préventif annuel',
      'Dépistage cardiovasculaire',
      'Dépistage cancérologique',
      'Évaluation métabolique',
      'Bilan nutritionnel',
      'Check-up exécutif',
      'Certificat médical sport',
      'Vaccinations voyage'
    ],
    exams: [
      'Bilan biologique complet (50+ paramètres)',
      'Échocardiographie',
      'Épreuve d\'effort',
      'Fibroscan hépatique',
      'Coloscopie / Gastroscopie',
      'Mammographie / Densitométrie',
      'Scanner thoracique faible dose',
      'Bilan ophtalmologique / ORL / Dentaire'
    ],
    doctors: ['dr-roger', 'dr-legrand', 'dr-martin-checkup'],
    color: '#0891B2'
  },
  {
    id: 'internal-medicine',
    slug: 'medecine-interne',
    name: 'Médecine Interne',
    shortDescription: 'Prise en charge globale des maladies systémiques et complexes',
    fullDescription: 'Le service de médecine interne gère les pathologies multisystémiques, les maladies auto-immunes, les maladies rares, les fièvres inexpliquées, les syndromes inflammatoires et les pathologies du voyageur. Expertise en maladies systémiques (lupus, vascularites, sclérodermie), maladies infectieuses complexes, et prise en charge des patients polypathologiques âgés.',
    icon: 'stethoscope',
    image: '/images/specialties/internal-medicine.jpg',
    pathologies: [
      'Maladies auto-immunes',
      'Vascularites',
      'Lupus érythémateux',
      'Maladies rares',
      'Fièvres inexpliquées',
      'Pathologies du voyageur',
      'Polypathologie du sujet âgé',
      'Syndromes inflammatoires'
    ],
    exams: [
      'Bilan auto-immun complet',
      'Recherche d\'anticorps spécifiques',
      'Biopsie d\'organe',
      'TDM corps entier',
      'TDM TEP',
      'Ponction médullaire',
      'Explorations vasculaires',
      'Tests génétiques'
    ],
    doctors: ['dr-durand', 'dr-leroy', 'dr-simon'],
    color: '#4338CA'
  },
  {
    id: 'radiology',
    slug: 'radiologie-imagerie',
    name: 'Radiologie & Imagerie Médicale',
    shortDescription: 'Imagerie diagnostique et interventionnelle de dernière génération',
    fullDescription: 'Plateau technique complet : 2 IRM 3T, 2 scanners 128 barrettes, 4 échographes haute définition, mammographie 3D avec tomosynthèse, ostéodensitométrie, radiologie numérisée, salle d\'angiographie interventionnelle. Radiologues spécialisés par organe (neuroradiologie, imagerie de la femme, ostéo-articulaire, abdominale, thoracique, interventionnelle). Téléradiologie 24/7 pour les urgences.',
    icon: 'scan-eye',
    image: '/images/specialties/radiology.jpg',
    pathologies: [
      'Imagerie cérébrale',
      'Imagerie mammaire',
      'Imagerie ostéo-articulaire',
      'Imagerie abdomino-pelvienne',
      'Imagerie thoracique',
      'Imagerie vasculaire',
      'Imagerie interventionnelle',
      'Imagerie pédiatrique'
    ],
    exams: [
      'IRM 3 Tesla',
      'Scanner 128 barrettes',
      'Échographie 4D / Élasticité',
      'Mammographie 3D tomosynthèse',
      'Angiographie / Artériographie',
      'Biopsie guidée imagerie',
      'Drainage percutané',
      'Vertébroplastie / Cyphoplastie'
    ],
    doctors: ['dr-michel', 'dr-bertrand', 'dr-robin'],
    color: '#0D9488'
  },
  {
    id: 'anesthesiology',
    slug: 'anesthesie-reanimation',
    name: 'Anesthésie-Réanimation',
    shortDescription: 'Anesthésie chirurgicale, obstétricale et réanimation polyvalente',
    fullDescription: 'Département d\'anesthésie-réanimation assurant la prise en charge peri-opératoire de toutes les chirurgies (programmées et urgentes), l\'analgésie obstétricale (péridurale 24/7), et la réanimation médicale et chirurgicale (12 lits). Équipes spécialisées : anesthésie cardiaque, neurochirurgie, pédiatrique, ambulatoire. Consultation pré-anesthésique systématique. Gestion de la douleur aiguë et chronique.',
    icon: 'droplet',
    image: '/images/specialties/anesthesiology.jpg',
    pathologies: [
      'Anesthésie générale',
      'Anesthésie locorégionale',
      'Analgésie obstétricale',
      'Réanimation polyvalente',
      'Douleur aiguë post-opératoire',
      'Douleur chronique',
      'Soins palliatifs',
      'Urgences vitales'
    ],
    exams: [
      'Consultation pré-anesthésique',
      'Bilan hémostase',
      'Échocardiographie transœsophagienne',
      'Monitoring invasif',
      'Échographie de réanimation',
      'Fibroscopie bronchique',
      'Hémofiltration / Dialyse',
      'ECMO'
    ],
    doctors: ['dr-roche', 'dr-noel', 'dr-fabre'],
    color: '#7C3AED'
  },
  {
    id: 'urology',
    slug: 'urologie',
    name: 'Urologie',
    shortDescription: 'Chirurgie urologique mini-invasive et cancérologie urologique',
    fullDescription: 'Service d\'urologie expert en chirurgie robotique (Da Vinci), chirurgie laparoscopique, endourologie laser, et cancérologie urologique (prostate, rein, vessie, testicule). Prise en charge de la lithiase urinaire, de l\'incontinence, de l\'andrologie et de l\'infertilité masculine. RCP urologique hebdomadaire. Chirurgie de la prostate par voie rétropubienne et robotique.',
    icon: 'flask-conical',
    image: '/images/specialties/urology.jpg',
    pathologies: [
      'Cancer de la prostate',
      'Cancer du rein',
      'Cancer de la vessie',
      'Lithiase urinaire',
      'Hyperplasie bénigne de la prostate',
      'Incontinence urinaire',
      'Andrologie / Infertilité masculine',
      'Sténose urétrale'
    ],
    exams: [
      'IRM prostatique multiparamétrique',
      'Échographie prostatique',
      'Cystoscopie',
      'Urodynamique',
      'Bilan andrologique',
      'TDM urographique',
      'Scintigraphie rénale',
      'Biopsie prostatique fusion'
    ],
    doctors: ['dr-colin', 'dr-meunier', 'dr-perrot'],
    color: '#0369A1'
  },
  {
    id: 'ent',
    slug: 'orl',
    name: 'ORL & Chirurgie Cervico-Faciale',
    shortDescription: 'Pathologies de l\'oreille, du nez, de la gorge et de la face',
    fullDescription: 'Service ORL prenant en charge la chirurgie de la thyroïde et des parathyroïdes, la chirurgie des tumeurs cervico-faciales, la chirurgie de la surdité (implants cochléaires, BAHA), la chirurgie endoscopique des sinus, la chirurgie de l\'apnée du sommeil, et la phonochirurgie. Centre de référence surdité de l\'enfant. Bilan vestibulaire complet. Chirurgie faciale esthétique et réparatrice.',
    icon: 'ear',
    image: '/images/specialties/ent.jpg',
    pathologies: [
      'Surdité / Implants cochléaires',
      'Pathologies thyroïdiennes',
      'Tumeurs ORL',
      'Sinusite chronique',
      'Apnée du sommeil',
      'Troubles de la voix',
      'Vertiges / Pathologies vestibulaires',
      'Malformations cervico-faciales'
    ],
    exams: [
      'Audiométrie tonale et vocale',
      'Impédancemétrie',
      'Potentiels évoqués auditifs',
      'Vidéonasofibroscopie',
      'Bilan vestibulaire complet (VHIT, VNG)',
      'IRM cérérabelleuse',
      'Scanner temporal',
      'Laryngoscopie stroboscopique'
    ],
    doctors: ['dr-gautier', 'dr-fernandez', 'dr-robin-ent'],
    color: '#166534'
  }
];

export function getSpecialtyBySlug(slug: string): Specialty | undefined {
  return specialties.find(s => s.slug === slug);
}

export function getSpecialtyById(id: string): Specialty | undefined {
  return specialties.find(s => s.id === id);
}

export function getRelatedSpecialties(currentSlug: string, limit: number = 4): Specialty[] {
  const current = getSpecialtyBySlug(currentSlug);
  if (!current) return specialties.slice(0, limit);
  return specialties.filter(s => s.id !== current.id).slice(0, limit);
}