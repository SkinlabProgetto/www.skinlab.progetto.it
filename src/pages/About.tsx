import { motion } from 'motion/react';
import { ArrowRight, Globe, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[10rem] font-display uppercase tracking-tighter leading-[0.9] text-brand-black mb-12"
          >
            Il Mondo di <span className="text-brand-fluo">Skin Lab.</span>
          </motion.h1>
          <p className="text-xl md:text-3xl text-neutral-500 max-w-3xl leading-tight italic font-serif">
            Un beauty club boutique dove la scienza incontra lo stile di vita contemporaneo milanese.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
           <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-neutral-200 border-4 border-brand-fluo">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2680&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Our Team"
              />
           </div>
           <div>
              <h2 className="text-4xl font-display uppercase tracking-tighter mb-8 italic font-serif text-brand-neon">La Nostra Filosofia</h2>
              <div className="space-y-8 text-lg text-neutral-600 leading-relaxed font-serif italic">
                <p>
                  Skin Lab Milano non è nato in una sala riunioni. È nato nelle strade di Brera, nei caffè dei Navigli e nelle conversazioni notturne di donne che volevano di più dalla loro routine di bellezza.
                </p>
                <p>
                  Crediamo che la bellezza sia uno stile di vita, non un compito. Combiniamo tecnologia clinica ad alte prestazioni con un ambiente accogliente e social-first che sembra più un club privato che uno studio clinico.
                </p>
                <p className="font-black text-brand-black uppercase tracking-widest text-sm bg-brand-fluo inline-block px-4 py-1">
                  NO PERFECTION, JUST POLISH.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-brand-black text-brand-cream px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-fluo/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          {[
            { icon: <Globe size={32} />, title: "Radici Milanesi", desc: "Profondamente radicate nella cultura dell'innovazione e dello stile che definisce la nostra città." },
            { icon: <Users size={32} />, title: "Community First", desc: "Siamo uno spazio sicuro per il dialogo, l'educazione e le esperienze di bellezza condivise." },
            { icon: <Heart size={32} />, title: "Bellezza Etica", desc: "Ingredienti trasparenti, pratiche sostenibili e trattamenti inclusivi." },
          ].map((v, i) => (
            <div key={i} className="space-y-6">
               <div className="text-brand-fluo">{v.icon}</div>
               <h3 className="text-2xl font-display uppercase tracking-tight font-black">{v.title}</h3>
               <p className="text-neutral-400 leading-relaxed italic font-serif">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
