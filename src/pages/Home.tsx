import { motion } from 'motion/react';
import { ArrowRight, Star, Instagram, ArrowDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export default function Home() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden px-12 pb-24 lg:pb-0">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-16">
          {/* Hero Left */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-mocha font-bold block mb-2">Established in Milano</span>
              <h1 className="text-7xl md:text-[110px] leading-[0.85] font-serif tracking-tight mb-8">
                Main<br/>Character<br/>Skin
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-md"
            >
              <p className="text-xl leading-relaxed text-gray-700 italic font-serif">
                "Glow first, drama later. Our studio is where clinical results meet Milanese high-fashion aesthetics."
              </p>
              <div className="mt-12 flex items-center gap-6">
                <div className="w-16 h-[1px] bg-brand-black"></div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-mocha">Via della Spiga 15, Milano</span>
              </div>
              <div className="mt-12">
                 <Link
                  to="/book"
                  className="px-12 py-5 bg-brand-black text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-opacity-80 transition-all shadow-2xl"
                >
                  Book Experience
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Hero Right: Editorial Visual Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-12 grid-rows-12 gap-4 relative min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="col-span-8 row-span-8 bg-brand-nude rounded-t-[160px] relative overflow-hidden shadow-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfad403348?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale opacity-80"
                alt="Advanced Facial"
              />
              <div className="absolute inset-0 border-[1px] border-white/30 m-4 rounded-t-[140px]"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-[40px] font-serif leading-none">01</p>
                <p className="text-[10px] uppercase tracking-widest">Advanced Facial</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="col-span-4 row-span-12 bg-brand-black rounded-full flex flex-col items-center justify-center text-white p-6"
            >
              <div className="[writing-mode:vertical-rl] rotate-180 uppercase tracking-[0.4em] text-[10px] mb-8">
                Member Only Access
              </div>
              <div className="w-[1px] flex-1 bg-white/20 my-4"></div>
              <div className="text-center">
                <p className="text-[24px] font-serif italic mb-1">Skin</p>
                <p className="text-[24px] font-serif italic">Club</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="col-span-8 row-span-4 bg-gray-100 border border-gray-200 flex items-center justify-between px-8 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 opacity-20 transform translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-gray-400 to-white"></div>
               <div className="relative z-10">
                 <h3 className="text-xs uppercase tracking-widest font-bold mb-1">The Glow Index</h3>
                 <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Curated skincare for the Milano girl</p>
               </div>
               <Link to="/journal" className="w-10 h-10 border border-brand-black rounded-full flex items-center justify-center hover:bg-brand-black hover:text-white transition-all relative z-10">
                 <ArrowRight size={18} />
               </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-display mb-6 leading-tight uppercase tracking-tighter">
                Main character <span className="text-brand-neon">skin.</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed italic font-serif">
                Non ci limitiamo a curare il viso, eleviamo la tua energia. Trattamenti pensati per chi vuole risultati reali senza drammi medicali.
              </p>
            </div>
            <Link to="/treatments" className="group flex items-center gap-4 text-sm uppercase tracking-widest font-black text-brand-neon">
              Scopri i Trattamenti <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Signature Glow Facial",
                tag: "Bestseller",
                price: "€120",
                img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=800&auto=format&fit=crop",
                href: "/treatments/facial"
              },
              {
                title: "Epilazione Laser",
                tag: "Tecnologia Indolore",
                price: "Da €80",
                img: "https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?q=80&w=800&auto=format&fit=crop",
                href: "/treatments/laser"
              },
              {
                title: "Body Sculpt Luxe",
                tag: "Drena & Definisci",
                price: "€150",
                img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop",
                href: "/treatments/body"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative h-[600px] overflow-hidden rounded-[2rem] bg-brand-fluo/20 border-2 border-brand-black/5 hover:border-brand-fluo bg-white"
              >
                <img src={item.img} className="grayscale hover:grayscale-0 transition-all duration-700 absolute inset-0 w-full h-full object-cover" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute top-8 left-8">
                   <span className="px-4 py-1.5 bg-brand-fluo rounded-full text-[10px] text-black uppercase tracking-widest font-black border border-black/20">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-display uppercase tracking-tight mb-2 font-black">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-brand-fluo font-serif italic text-lg">{item.price}</p>
                    <Link to={item.href} className="p-3 bg-brand-neon text-white rounded-full hover:bg-brand-fluo hover:text-black transition-all">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-32 px-6 bg-brand-cream border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
           <div className="flex-1">
              <h2 className="text-xs uppercase tracking-[0.4em] text-brand-neon mb-8 font-black">Risultati Reali</h2>
              <h3 className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-none mb-12">
                Trasformazione <span className="italic font-serif text-brand-neon">Visibile.</span>
              </h3>
              <p className="text-xl text-neutral-500 leading-relaxed font-serif italic mb-12 max-w-lg">
                Non crediamo ai miracoli, crediamo nella biologia. Osserva l'impatto dei nostri protocolli clinici sulla pelle reale.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-3xl border-2 border-brand-fluo flex items-center gap-6 shadow-lg shadow-brand-fluo/10">
                   <div className="w-12 h-12 bg-brand-neon/10 rounded-full flex items-center justify-center text-brand-neon">
                      <Sparkles size={20} />
                   </div>
                   <div>
                      <h4 className="font-display uppercase tracking-tight text-lg font-black">Protocollo Signature Glow</h4>
                      <p className="text-[10px] text-brand-neon uppercase tracking-widest font-black">Risultati dopo 3 sessioni</p>
                   </div>
                </div>
              </div>
           </div>
           <div className="flex-1 w-full max-w-2xl">
              <BeforeAfterSlider
                beforeImg="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                afterImg="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=800&auto=format&fit=crop"
              />
           </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-32 bg-brand-black text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-brand-fluo shadow-[0_0_50px_rgba(204,255,0,0.2)]">
               <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale-0 opacity-100"
                alt="Minimal Aesthetics"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-brand-fluo rounded-full flex items-center justify-center p-4 bg-brand-black"
            >
              <p className="text-[10px] text-center uppercase tracking-widest font-black text-brand-fluo">
                Boutique Experience • Scientific Results • Milan Core
              </p>
            </motion.div>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.4em] text-brand-neon mb-8 font-black">Perché Skin Lab?</h3>
            <h2 className="text-5xl md:text-7xl font-display mb-12 uppercase leading-[1] tracking-tighter">
              Non possiamo curare i <span className="italic font-serif text-brand-fluo">drammi</span> emotivi.
            </h2>
            <div className="space-y-10">
              {[
                { title: "Milan Beauty Club", desc: "Più di un centro estetico, un santuario urbano per nativi digitali e skincare addict." },
                { title: "Smart Tech Only", desc: "Niente aria fritta. Utilizziamo le ultime tecnologie di grado clinico per un glow reale." },
                { title: "Nessuna Perfezione, Solo Cura", desc: "Celebriamo la pelle reale. Il nostro obiettivo è farti sentire la versione migliore di te stessa." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                   <div className="h-1 w-12 bg-brand-fluo mt-4 group-hover:w-20 transition-all duration-500" />
                   <div>
                     <h4 className="text-xl font-display uppercase tracking-wider mb-2 font-black">{item.title}</h4>
                     <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Placeholder */}
      <section className="py-32 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.5em] text-brand-neon mb-4 font-black">Unisciti al Movimento</h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase tracking-tighter">@skinlabmilano</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop",
          ].map((img, i) => (
            <div key={i} className="aspect-square relative group overflow-hidden rounded-2xl">
               <img
                src={img}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                alt="Social Feed"
              />
              <div className="absolute inset-0 bg-brand-neon/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <Instagram className="text-white" size={32} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white border-t border-brand-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <div className="flex justify-center gap-2 mb-12">
             {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} fill="currentColor" className="text-brand-fluo" />)}
           </div>
           <p className="text-3xl md:text-5xl font-serif italic text-brand-black leading-tight mb-8">
             "Finalmente un posto a Milano che capisce davvero. Niente aria da clinica fredda, solo risultati incredibili e un'atmosfera che ti fa sentire a casa."
           </p>
           <p className="text-xs uppercase tracking-[0.4em] font-black text-brand-neon">Elena, Creative Director</p>
        </div>
      </section>

       {/* FAQ Teaser */}
       <section className="py-32 px-6">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-display text-center mb-16 uppercase tracking-tighter">Domande? <span className="text-brand-fluo">Ovvio.</span></h2>
            <div className="space-y-6">
              {[
                { q: "Fa male?", a: "Non siamo qui per torturarti. La maggior parte dei trattamenti è incredibilmente rilassante grazie alle nostre tecnologie di raffreddamento." },
                { q: "Quante sedute?", a: "Dipende dai tuoi obiettivi. Di solito 3-6 sessioni per una trasformazione completa dello stato della pelle." },
                { q: "Posso portare il mio cane?", a: "Se sono chic e ben educati, i cani di piccola taglia sono i benvenuti nella nostra lounge." },
              ].map((item, idx) => (
                <details key={idx} className="group border-2 border-brand-black/5 rounded-[2rem] p-6 mb-4 open:bg-brand-fluo/10 transition-all">
                  <summary className="list-none cursor-pointer flex justify-between items-center text-xl uppercase tracking-tighter font-black hover:text-brand-neon transition-colors">
                    {item.q}
                    <motion.div whileHover={{ rotate: 90 }}><ArrowRight size={20} className="rotate-90 group-open:rotate-[270deg] transition-transform text-brand-neon" /></motion.div>
                  </summary>
                  <p className="mt-4 text-neutral-600 leading-relaxed max-w-2xl font-serif italic">{item.a}</p>
                </details>
              ))}
            </div>
         </div>
       </section>

       {/* Final CTA Banner */}
       <section className="px-6 pb-24">
         <div className="max-w-7xl mx-auto rounded-[3rem] bg-[url('https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center h-[500px] flex items-center justify-center text-center relative overflow-hidden group border-4 border-brand-fluo">
            <div className="absolute inset-0 bg-brand-neon/40 group-hover:bg-brand-black/70 transition-colors duration-700" />
            <div className="relative z-10 px-6">
              <h2 className="text-5xl md:text-8xl font-display text-white uppercase tracking-tighter mb-12 drop-shadow-2xl font-black">Entra nel Lab.</h2>
              <Link to="/book" className="px-12 py-5 bg-brand-fluo text-black rounded-full text-xs uppercase tracking-widest font-black hover:scale-110 transition-all shadow-xl">
                Prenota Ora
              </Link>
            </div>
         </div>
       </section>
    </div>
  );
}
