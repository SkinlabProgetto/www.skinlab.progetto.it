import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Star, ShieldCheck } from 'lucide-react';

const categoryData: Record<string, any> = {
  facial: {
    title: "Trattamenti Viso",
    desc: "L'avanzata competenza dermatologica incontra l'estetica di lusso. I nostri trattamenti viso vanno oltre la superficie per stimolare il rinnovamento cellulare e l'idratazione profonda.",
    heroImg: "https://images.unsplash.com/photo-1570172619669-02685785a975?q=80&w=2680&auto=format&fit=crop",
    services: [
      { name: "Signature Glow", price: "€120", time: "60min", desc: "Il trattamento fondamentale per un glow milanese sano." },
      { name: "Oxygen Infusion", price: "€140", time: "50min", desc: "Ossigeno puro e acido ialuronico per un rimpolpamento immediato." },
      { name: "Bio-Microneedling", price: "€190", time: "75min", desc: "Terapia rigenerativa per cicatrici e linee sottili." }
    ]
  },
  laser: {
    title: "Epilazione Laser",
    desc: "Il gold standard nella riduzione permanente dei peli. Risultati indolori, efficienti e permanenti per tutti i tipi di pelle.",
    heroImg: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2680&auto=format&fit=crop",
    services: [
      { name: "Viso Completo", price: "€80", time: "20min", desc: "Focus sulla precisione e protezione della pelle." },
      { name: "Gambe Complete", price: "€180", time: "45min", desc: "Sessioni più veloci con tecnologia di raffreddamento integrata." },
      { name: "Corpo Totale", price: "€450", time: "120min", desc: "Il pacchetto di trasformazione definitivo." }
    ]
  },
  body: {
    title: "Scultura Corpo",
    desc: "Trasforma la tua silhouette con i nostri trattamenti corpo high-tech non invasivi. Drena, solleva e definisci.",
    heroImg: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=2680&auto=format&fit=crop",
    services: [
      { name: "Lipo-Drenaggio", price: "€130", time: "60min", desc: "Massaggio linfatico intenso utilizzando tecniche tradizionali brasiliane." },
      { name: "Radiofrequenza Lift", price: "€160", time: "45min", desc: "Rassodamento cutaneo e stimolazione del collagene per aree mirate." }
    ]
  },
  lashes: {
    title: "Ciglia & Sopracciglia",
    desc: "Lo sguardo è tutto. Offriamo architetture su misura per i tuoi occhi, dalla laminazione naturale al volume ad alta definizione.",
    heroImg: "https://images.unsplash.com/photo-1583006831203-9122394e21a2?q=80&w=2680&auto=format&fit=crop",
    services: [
      { name: "Laminazione Ciglia", price: "€70", time: "50min", desc: "Lift chimico per un look mascara permanente." },
      { name: "Architettura Sopracciglia", price: "€50", time: "40min", desc: "Mappatura, modellazione e colorazione per la forma del tuo viso." }
    ]
  },
  nails: {
    title: "Atelier Unghie",
    desc: "Manicure contemporanea e unghie architettoniche. Il design minimalista incontra formulazioni ad alta durata.",
    heroImg: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2680&auto=format&fit=crop",
    services: [
      { name: "Mani Signature", price: "€45", time: "45min", desc: "Manicure pulita con trattamento all'olio di lusso." },
      { name: "GEL Polish Artigianale", price: "€65", time: "75min", desc: "Nail art minimalista e gel a lunga durata." }
    ]
  }
};

export default function CategoryTreatments() {
  const { type } = useParams();
  const data = categoryData[type || 'facial'] || categoryData.facial;

  return (
    <div className="pt-32 pb-24 bg-brand-cream">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
           <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-7xl md:text-9xl font-display uppercase tracking-tighter leading-[0.9] mb-12 font-black"
              >
                {data.title.split(' ')[0]} <br />
                <span className="text-brand-neon italic font-serif">{data.title.split(' ').slice(1).join(' ')}</span>
              </motion.h1>
              <p className="text-xl text-neutral-500 leading-relaxed max-w-lg mb-12 font-serif italic">
                {data.desc}
              </p>
              <Link to="/book" className="px-10 py-4 bg-brand-black text-brand-fluo rounded-full text-xs uppercase tracking-widest font-black hover:scale-105 transition-all shadow-xl">
                Prenota Consulenza
              </Link>
           </div>
           <div className="flex-1 w-full aspect-square rounded-[3rem] overflow-hidden border-4 border-brand-fluo shadow-2xl">
              <img src={data.heroImg} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={data.title} />
           </div>
        </div>
      </section>

      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto space-y-6">
           <h2 className="text-3xl font-display uppercase tracking-tighter mb-12 font-black italic font-serif text-brand-neon">Menù dei Servizi</h2>
           {data.services.map((svc: any, i: number) => (
             <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b-2 border-neutral-100 group cursor-pointer hover:bg-brand-fluo/10 px-6 rounded-3xl transition-all">
                <div className="flex-1">
                   <h4 className="text-2xl font-display uppercase tracking-tight mb-2 group-hover:text-brand-neon transition-colors font-black">{svc.name}</h4>
                   <p className="text-neutral-500 text-sm max-w-md italic font-serif">{svc.desc}</p>
                </div>
                <div className="flex items-center gap-12 mt-6 md:mt-0">
                   <div className="flex flex-col items-end">
                      <span className="text-xl font-serif italic text-brand-neon font-black">{svc.price}</span>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-black">{svc.time}</span>
                   </div>
                   <Link to="/book" className="w-12 h-12 rounded-full border-2 border-brand-black flex items-center justify-center group-hover:bg-brand-neon group-hover:text-black transition-all shadow-md">
                      <ArrowRight size={20} />
                   </Link>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Trust factors */}
      <section className="px-6 pb-24 text-center">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-t-2 border-brand-fluo pt-24">
            <div className="space-y-4">
               <ShieldCheck className="mx-auto text-brand-neon" size={32} />
               <h4 className="text-xl font-display uppercase tracking-widest font-black">Testato Dermatologicamente</h4>
               <p className="text-sm text-neutral-500 italic font-serif">Tutti i protocolli sono sviluppati con i migliori esperti di skincare.</p>
            </div>
            <div className="space-y-4">
               <Star className="mx-auto text-brand-fluo" size={32} />
               <h4 className="text-xl font-display uppercase tracking-widest font-black">Risultati Clinici</h4>
               <p className="text-sm text-neutral-500 italic font-serif">Miglioramenti visibili fin dalla prima sessione.</p>
            </div>
            <div className="space-y-4">
               <Clock className="mx-auto text-brand-neon" size={32} />
               <h4 className="text-xl font-display uppercase tracking-widest font-black">Smart Scheduling</h4>
               <p className="text-sm text-neutral-500 italic font-serif">Prenotazione online facile e servizio di promemoria 24 ore su 24.</p>
            </div>
         </div>
      </section>
    </div>
  );
}
