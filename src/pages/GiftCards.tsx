import { motion } from 'motion/react';
import { Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GiftCards() {
  return (
    <div className="pt-32 pb-24">
       <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto text-center">
           <motion.h1
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-7xl md:text-[10rem] font-display uppercase tracking-tighter leading-[0.9] text-brand-black mb-12"
           >
             Regala il <span className="text-brand-fluo italic font-serif">Glow.</span>
           </motion.h1>
           <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto leading-tight italic font-serif">
             Il regalo più elegante di Milano. Un'esperienza Skin Lab è sempre di stagione.
           </p>
        </div>
      </section>

      <section className="px-6 mb-32">
         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white border-4 border-brand-fluo p-12 rounded-[3rem] space-y-8 flex flex-col items-center text-center shadow-2xl">
               <div className="w-20 h-20 bg-brand-fluo/20 rounded-full flex items-center justify-center text-black">
                  <Gift size={32} />
               </div>
               <h3 className="text-3xl font-display uppercase tracking-tighter font-black">Carta Fisica</h3>
               <p className="text-neutral-500 font-serif italic">Confezionata elegantemente nel nostro iconico box nero e fluo. Disponibile per il ritiro o consegna locale.</p>
               <button className="w-full py-5 bg-brand-black text-brand-fluo rounded-full text-xs uppercase tracking-widest font-black hover:scale-105 transition-all shadow-xl">
                 Ordina Fisica
               </button>
            </div>

            <div className="bg-brand-black p-12 rounded-[3rem] text-white space-y-8 flex flex-col items-center text-center border-4 border-brand-neon shadow-2xl">
               <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-brand-neon">
                  <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <Gift size={32} />
                  </motion.div>
               </div>
               <h3 className="text-3xl font-display uppercase tracking-tighter font-black text-brand-fluo">Digital Voucher</h3>
               <p className="text-neutral-400 font-serif italic">Glow istantaneo. Inviato direttamente alla loro inbox con un messaggio personalizzato.</p>
               <button className="w-full py-5 bg-brand-fluo text-black rounded-full text-xs uppercase tracking-widest font-black hover:scale-105 transition-all">
                 Ordina Digitale
               </button>
            </div>
         </div>
      </section>

      {/* Gift Packages */}
      <section className="px-6 pb-24">
         <div className="max-w-7xl mx-auto border-t-2 border-brand-fluo pt-24 text-center">
            <h2 className="text-4xl font-display uppercase tracking-tighter mb-16 italic font-serif font-black">Pacchetti Curati</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { name: "The Morning Glow", price: "€150", desc: "Signature Facial + Massaggio Testa + Kit Sierii" },
                 { name: "Ultimate Reset", price: "€300", desc: "Full Body Detox + Gold Stem Cell Facial" },
                 { name: "Bestie Lab", price: "€220", desc: "Trattamento doppio per te e il tuo umano preferito" },
               ].map((pkg, i) => (
                 <div key={i} className="p-10 bg-white border-2 border-brand-black rounded-[3rem] text-center hover:scale-[1.05] hover:border-brand-neon transition-all cursor-pointer shadow-xl">
                    <h4 className="text-2xl font-display uppercase tracking-tight mb-4 font-black">{pkg.name}</h4>
                    <p className="text-brand-neon text-2xl font-serif italic mb-6 font-black">{pkg.price}</p>
                    <p className="text-sm text-neutral-500 mb-8 italic font-serif">{pkg.desc}</p>
                    <Link to="/book" className="text-[10px] uppercase tracking-widest font-black border-b-2 border-brand-fluo pb-1">Pre-ordina pacchetto</Link>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
