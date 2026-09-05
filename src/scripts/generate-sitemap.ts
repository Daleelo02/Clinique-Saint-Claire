import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://hopital-saint-claire.fr';
const LOCALES = ['fr', 'en', 'ar', 'pt'];

const routes = {
  fr: [
    '',
    'specialites',
    'specialites/cardiologie',
    'specialites/neurologie',
    'specialites/oncologie',
    'specialites/orthopedie',
    'specialites/pediatrie',
    'specialites/gynecologie-obstetrique',
    'specialites/urgences',
    'specialites/check-up',
    'specialites/medecine-interne',
    'specialites/radiologie-imagerie',
    'specialites/anesthesie-reanimation',
    'specialites/urologie',
    'specialites/orl',
    'rdv',
    'medecins',
    'urgences',
    'check-up',
    'international',
    'patients',
    'patients/admission',
    'patients/droits',
    'patients/associations',
    'a-propos',
    'contact',
    'actualites',
    'carrieres',
    'portail',
  ],
  en: [
    '',
    'specialties',
    'specialties/cardiology',
    'specialties/neurology',
    'specialties/oncology',
    'specialties/orthopedics',
    'specialties/pediatrics',
    'specialties/gynecology-obstetrics',
    'specialties/emergency',
    'specialties/check-up',
    'specialties/internal-medicine',
    'specialties/radiology',
    'specialties/anesthesiology',
    'specialties/urology',
    'specialties/ent',
    'rdv',
    'doctors',
    'emergency',
    'check-up',
    'international',
    'patients',
    'patients/admission',
    'patients/rights',
    'patients/associations',
    'about',
    'contact',
    'news',
    'careers',
    'portal',
  ],
  ar: [
    '',
    'التخصصات',
    'التخصصات/القلب',
    'التخصصات/الأعصاب',
    'التخصصات/الأورام',
    'التخصصات/العظام',
    'التخصصات/الأطفال',
    'التخصصات/النساء-التوليد',
    'التخصصات/الطوارئ',
    'التخصصات/فحص-شامل',
    'التخصصات/الباطنة',
    'التخصصات/الأشعة',
    'التخصصات/التخدير',
    'التخصصات/المسالك',
    'التخصصات/الأنف-الأذن-الحنجرة',
    'حجز-موعد',
    'الأطباء',
    'الطوارئ',
    'فحص-شامل',
    'الدوليين',
    'المرضى',
    'المرضى/القبول',
    'المرضى/الحقوق',
    'المرضى/الجمعيات',
    'عنا',
    'اتصل-بنا',
    'الأخبار',
    'الوظائف',
    'البوابة',
  ],
  pt: [
    '',
    'especialidades',
    'especialidades/cardiologia',
    'especialidades/neurologia',
    'especialidades/oncologia',
    'especialidades/ortopedia',
    'especialidades/pediatria',
    'especialidades/ginecologia-obstetricia',
    'especialidades/urgencias',
    'especialidades/check-up',
    'especialidades/medicina-interna',
    'especialidades/radiologia',
    'especialidades/anestesiologia',
    'especialidades/urologia',
    'especialidades/orl',
    'agendamento',
    'medicos',
    'urgencias',
    'check-up',
    'internacional',
    'pacientes',
    'pacientes/admissao',
    'pacientes/direitos',
    'pacientes/associacoes',
    'sobre',
    'contato',
    'noticias',
    'carreiras',
    'portal',
  ],
};

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

  for (const locale of LOCALES) {
    for (const route of routes[locale as keyof typeof routes]) {
      const url = `${BASE_URL}/${locale}${route ? '/' + route : ''}`;
      const alternates = LOCALES.map(l => {
        const r = routes[l as keyof typeof routes][routes[locale as keyof typeof routes].indexOf(route)] || '';
        return `      <xhtml:link rel="alternate" hreflang="${l}" href="${BASE_URL}/${l}${r ? '/' + r : ''}" />`;
      }).join('\n');

      xml += '  <url>\n';
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${route === '' ? 'daily' : route.includes('actualites') || route.includes('news') || route.includes('الأخبار') || route.includes('noticias') ? 'weekly' : 'monthly'}</changefreq>\n`;
      xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
      xml += alternates + '\n';
      xml += '  </url>\n';
    }
  }

  xml += '</urlset>\n';

  const outDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outDir, 'sitemap-index.xml'), xml);
  console.log('Sitemap generated at public/sitemap-index.xml');
}

generateSitemap();