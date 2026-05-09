import { motion } from 'motion/react';
import { LayoutGroup } from 'motion/react';
import { ArrowRight, Tag, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'facial', name: 'Viso', href: '/treatments/facial' },
  { id: 'body', name: 'Corpo', href: '/treatments/body' },
  { id: 'laser', name: 'Laser', href: '/treatments/laser' },
  { id: 'lashes', name: 'Ciglia & Sopracciglia', href: '/treatments/lashes' },
  { id: 'nails', name: 'Unghie', href: '/treatments/nails' },
];

const services = [
  {
    category: 'viso',
    title: 'Signature Glow Facial',
    desc: 'Il reset cutaneo definitivo. Detersione profonda, peeling chimico e la nostra infusione segreta per una radiosità istantanea.',
    price: '€120',
    time: '60 min',
    img: 'https://images.unsplash.com/photo-1570172619669-02685785a975?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'viso',
    title: 'The Milan Lift',
    desc: 'Scultura non chirurgica con tecnologia a microcorrente per definire la mascella e risollevare i lineamenti.',
    price: '€150',
    time: '75 min',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfad403348?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'laser',
    title: 'Epilazione Laser',
    desc: 'Tecnologia laser a diodo di ultima generazione. Più veloce, più fresca e realmente indolore.',
    price: 'Da €80',
    time: '30 min+',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'corpo',
    title: 'Drenaggio Linfatico',
    desc: 'La tecnica brasiliana adattata al lifestyle milanese. Dì addio al gonfiore e senti la leggerezza.',
    price: '€130',
    time: '60 min',
    img: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=800&auto=format&fit=crop'
  },
];

export default function Treatments() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-7xl md:text-[12rem] font-display uppercase tracking-tighter leading-[0.9] text-brand-black mb-12"
           >
             Il Menù<span className="text-brand-fluo">.</span>
           </motion.h1>
           <p className="text-xl md:text-3xl text-neutral-500 max-w-3xl leading-tight italic font-serif">
             Trattamenti ad alte prestazioni per umani con alte aspettative. Scegli il tuo upgrade.
           </p>
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="mt-12 p-12 rounded-[3rem] bg-brand-black text-brand-fluo relative overflow-hidden border-2 border-brand-fluo"
           >
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-4 italic font-serif">"La tua pelle ha bisogno di una vacanza."</h2>
                <p className="text-brand-neon uppercase tracking-widest text-xs font-black">Prenota un reset oggi stesso.</p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
           </motion.div>
        </div>
      </section>

      {/* Filter placeholder */}
      <section className="px-6 mb-24 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex gap-4">
          <Link to="/treatments" className="px-8 py-3 bg-brand-fluo text-black rounded-full text-xs uppercase tracking-widest font-black whitespace-nowrap border border-black/10">Tutti</Link>
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.href} className="px-8 py-3 border-2 border-brand-black/10 text-brand-black rounded-full text-xs uppercase tracking-widest font-black hover:border-brand-neon transition-colors whitespace-nowrap">
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
           {services.map((service, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="group"
             >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-8 bg-neutral-100 border-2 border-brand-black/5 group-hover:border-brand-fluo transition-colors">
                  <img src={service.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={service.title} />
                  <div className="absolute top-6 right-6 px-4 py-1.5 bg-brand-fluo text-black rounded-full text-[10px] font-black uppercase tracking-widest">
                    {service.category}
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-4xl font-display uppercase tracking-tighter leading-none font-black">{service.title}</h3>
                  <p className="text-2xl font-serif italic text-brand-neon">{service.price}</p>
                </div>
                <p className="text-neutral-500 text-lg mb-8 leading-relaxed max-w-xl font-serif italic">
                  {service.desc}
                </p>
                <div className="flex items-center gap-8 mb-10">
                   <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-black text-brand-neon">
                     <Clock size={14} /> {service.time}
                   </div>
                   <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-black text-brand-black">
                     <Sparkles size={14} /> Clinical Tech
                   </div>
                </div>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-4 text-xs uppercase tracking-widest font-black pb-2 border-b-2 border-brand-neon group-hover:gap-6 transition-all"
                >
                  Prenota Trattamento <ArrowRight size={16} />
                </Link>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Membership Upsell */}
      <section className="mt-48 px-6">
        <div className="max-w-7xl mx-auto p-16 md:p-32 rounded-[4rem] bg-brand-black text-white relative overflow-hidden border-4 border-brand-fluo">
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-neon blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
           <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-display uppercase tracking-tighter mb-8 italic font-serif text-brand-fluo">The Beauty Club</h2>
              <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
                Sblocca tariffe preferenziali, prenotazioni prioritarie ed eventi esclusivi su invito. La community di skincare più esclusiva di Milano ti aspetta.
              </p>
              <Link
                to="/membership"
                className="px-12 py-5 bg-brand-fluo text-black rounded-full text-xs uppercase tracking-widest font-black hover:scale-110 transition-all shadow-xl"
              >
                Unisciti al Club
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
