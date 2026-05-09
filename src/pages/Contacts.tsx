import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

export default function Contacts() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-7xl md:text-[10rem] font-display uppercase tracking-tighter leading-[0.9] text-brand-black mb-12"
           >
             Scrivici in <span className="text-brand-neon">DM.</span>
           </motion.h1>
           <p className="text-xl md:text-3xl text-neutral-500 max-w-3xl leading-tight italic font-serif">
             Oppure usa i metodi classici. Siamo qui per aiutarti a splendere.
           </p>
        </div>
      </section>

      <section className="px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-7xl mx-auto mb-32">
         <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-neon">Vieni a trovarci</span>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-brand-fluo shrink-0" size={20} />
                    <p className="text-lg leading-relaxed font-black uppercase tracking-tight">
                      Via della Spiga, 15<br />
                      20121 Milano (MI)<br />
                      Italia
                    </p>
                  </div>
               </div>
               <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-neon">Saluta</span>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+39021234567" className="flex items-center gap-4 text-lg hover:text-brand-neon transition-all font-black uppercase tracking-tight">
                      <Phone size={20} className="text-brand-fluo" /> +39 02 123 4567
                    </a>
                    <a href="mailto:hello@skinlabmilano.it" className="flex items-center gap-4 text-lg hover:text-brand-neon transition-all font-black uppercase tracking-tight">
                      <Mail size={20} className="text-brand-fluo" /> hello@skinlabmilano.it
                    </a>
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-neon">Segui il Lab</span>
               <div className="flex gap-4">
                  <a href="#" className="p-5 border-2 border-brand-black rounded-3xl hover:bg-brand-fluo hover:text-black transition-all text-xl font-display uppercase tracking-tight flex items-center gap-4 flex-1 font-black shadow-lg">
                    <Instagram size={24} /> Instagram
                  </a>
                  <a href="#" className="p-5 border-2 border-brand-black rounded-3xl hover:bg-brand-fluo hover:text-black transition-all text-xl font-display uppercase tracking-tight flex items-center gap-4 flex-1 font-black shadow-lg">
                    <MessageCircle size={24} /> WhatsApp
                  </a>
               </div>
            </div>

            <div className="h-[400px] bg-neutral-200 rounded-[3rem] overflow-hidden relative border-4 border-brand-fluo shadow-2xl">
               <img
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2680&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Milan Street"
              />
               <div className="absolute inset-0 bg-brand-neon/10 mix-blend-multiply" />
            </div>
         </div>

         <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border-4 border-brand-fluo">
            <h3 className="text-3xl font-display uppercase tracking-tighter mb-8 italic font-serif text-brand-neon font-black">Invia un messaggio</h3>
            <form className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <input placeholder="NOME" className="w-full border-b-2 border-neutral-100 pb-3 focus:border-brand-neon outline-none text-sm tracking-widest font-black" />
                 <input placeholder="EMAIL" className="w-full border-b-2 border-neutral-100 pb-3 focus:border-brand-neon outline-none text-sm tracking-widest font-black" />
               </div>
               <input placeholder="OGGETTO" className="w-full border-b-2 border-neutral-100 pb-3 focus:border-brand-neon outline-none text-sm tracking-widest font-black" />
               <textarea rows={4} placeholder="COME POSSIAMO AIUTARTI?" className="w-full border-b-2 border-neutral-100 pb-3 focus:border-brand-neon outline-none text-sm tracking-widest resize-none font-black" />
               <button className="w-full py-5 bg-brand-black text-brand-fluo rounded-full text-xs uppercase tracking-widest font-black hover:scale-105 transition-all shadow-xl">
                 Invia Richiesta
               </button>
            </form>
         </div>
      </section>
    </div>
  );
}
