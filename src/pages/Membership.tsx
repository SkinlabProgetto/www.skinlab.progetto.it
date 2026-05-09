import { motion } from 'motion/react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Membership() {
  return (
    <div className="pt-32 pb-24 bg-brand-cream">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto text-center">
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-7xl md:text-[10rem] font-display uppercase tracking-tighter leading-[0.9] text-brand-black mb-12"
           >
             The Beauty <span className="text-brand-neon italic font-serif">Club.</span>
           </motion.h1>
           <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto leading-tight italic font-serif">
             Un livello esclusivo per chi prende sul serio il proprio glow. Entra nel cerchio ristretto di Skin Lab Milano.
           </p>
        </div>
      </section>

      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Basic Plan */}
           <div className="p-12 rounded-[3rem] border-4 border-brand-black/5 bg-white space-y-8 flex flex-col hover:border-brand-fluo transition-all group shadow-2xl">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-neon">Essenziale</span>
                <h3 className="text-4xl font-display uppercase tracking-tighter font-black">The Glow Pass</h3>
              </div>
              <p className="text-5xl font-display uppercase font-black">€99 <span className="text-sm font-serif italic text-neutral-400">/ Mensili</span></p>
              <ul className="space-y-4 flex-grow">
                {["1 Facial Signature al mese", "10% di sconto su tutti i prodotti retail", "Prenotazione prioritaria", "Analisi mensile della pelle"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-neutral-600">
                    <Check size={16} className="text-brand-fluo" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/book" className="w-full py-5 bg-brand-fluo text-black rounded-full text-xs uppercase tracking-widest font-black flex items-center justify-center gap-3 transition-all border-2 border-black/10">
                Seleziona Glow Pass
              </Link>
           </div>

           {/* Pro Plan */}
           <div className="p-12 rounded-[3rem] bg-brand-black text-white space-y-8 flex flex-col relative overflow-hidden border-4 border-brand-neon shadow-2xl">
              <div className="absolute top-0 right-0 p-8">
                 <Star className="text-brand-fluo" fill="currentColor" size={32} />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-fluo">Accesso VIP</span>
                <h3 className="text-4xl font-display uppercase tracking-tighter font-black text-brand-fluo">The Lab Oracle</h3>
              </div>
              <p className="text-5xl font-display uppercase font-black text-brand-neon">€249 <span className="text-sm font-serif italic text-neutral-500">/ Mensili</span></p>
              <ul className="space-y-4 flex-grow">
                {["Terapia LED illimitata", "2 Facial Premium al mese", "20% di sconto sui servizi Laser", "Accesso ad eventi privati", "Kit homecare gratuito (trimestrale)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-neutral-300">
                    <Check size={16} className="text-brand-neon" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/book" className="w-full py-5 bg-brand-neon text-black rounded-full text-xs uppercase tracking-widest font-black flex items-center justify-center gap-3 hover:scale-105 transition-all">
                Seleziona Accesso Oracle
              </Link>
           </div>
        </div>
      </section>

      {/* Rewards Teaser */}
      <section className="px-6 pb-24">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t-2 border-brand-fluo pt-24">
            <div>
              <h4 className="text-xl font-display uppercase tracking-widest mb-4 font-black">Accesso Prioritario</h4>
              <p className="text-neutral-500 text-sm italic font-serif">Sii la prima a conoscere i nuovi macchinari e le formulazioni.</p>
            </div>
            <div>
              <h4 className="text-xl font-display uppercase tracking-widest mb-4 font-black">Eventi Milanesi</h4>
              <p className="text-neutral-500 text-sm italic font-serif">Inviti esclusivi a skincare social e pop-up con partner locali.</p>
            </div>
            <div>
              <h4 className="text-xl font-display uppercase tracking-widest mb-4 font-black">Benefit Regali</h4>
              <p className="text-neutral-500 text-sm italic font-serif">Tariffe speciali sulle gift card per i tuoi umani preferiti.</p>
            </div>
         </div>
      </section>
    </div>
  );
}
