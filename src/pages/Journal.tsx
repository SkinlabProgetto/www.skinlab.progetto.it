import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: "How to achieve real glow skin",
    category: "Skin Education",
    readTime: "5 min",
    excerpt: "Forget filter apps. The secret to glass skin lies in double cleansing and high-performance hydration.",
    img: "https://images.unsplash.com/photo-1596462502278-27bfad403348?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Why your skin looks tired",
    category: "Lifestyle",
    readTime: "4 min",
    excerpt: "Cortisol is not your friend. We break down the impact of stress on your skin barrier and how to fix it.",
    img: "https://images.unsplash.com/photo-1570172619669-02685785a975?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Self care without toxic perfection",
    category: "Culture",
    readTime: "6 min",
    excerpt: "The Milan beauty scene is changing. Why we are trading unrealistic standards for authentic radiance.",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Journal() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-xs uppercase tracking-[0.4em] font-bold text-brand-mocha mb-8"
           >
             The Blog
           </motion.p>
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-7xl md:text-[10rem] font-display uppercase tracking-tighter leading-[0.9] text-brand-black mb-12"
           >
             Skin Journal<span className="text-brand-mocha">.</span>
           </motion.h1>
           <p className="text-xl md:text-3xl text-neutral-500 max-w-3xl leading-tight italic font-serif">
             Real talk about skincare, science, and the Milan lifestyle.
           </p>
        </div>
      </section>

      {/* Featured Post */}
       <section className="px-6 mb-32">
         <div className="max-w-7xl mx-auto group cursor-pointer">
            <div className="relative aspect-[21/9] overflow-hidden rounded-[3rem] mb-12 bg-neutral-100">
               <img
                src="https://images.unsplash.com/photo-1498842812179-c81beecf902c?q=80&w=2680&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                alt="Featured Post"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                 <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] text-white uppercase tracking-widest font-semibold mb-6 inline-block">Trending Now</span>
                 <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter transition-all group-hover:text-brand-nude">The Laser Revolution: Why Waxing is Over</h2>
              </div>
            </div>
         </div>
       </section>

      {/* Post Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
           {posts.map((post, idx) => (
             <article key={idx} className="group">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 h-96 relative">
                   <img src={post.img} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt={post.title} />
                   <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/80 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-widest">
                     {post.category}
                   </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-4">
                  <Clock size={12} /> {post.readTime} • BY SKIN LAB TEAM
                </div>
                <h3 className="text-3xl font-display uppercase tracking-tighter mb-4 leading-tight group-hover:text-brand-mocha transition-colors">
                  {post.title}
                </h3>
                <p className="text-neutral-500 mb-8 font-serif leading-relaxed line-clamp-3 italic">
                  {post.excerpt}
                </p>
                <Link
                  to={`/journal/${idx}`}
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold pb-1 border-b border-brand-black transition-all group-hover:gap-5"
                >
                  Read Story <ArrowRight size={14} />
                </Link>
             </article>
           ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mt-48 px-6 pb-24">
        <div className="max-w-7xl mx-auto text-center border-t border-brand-black/5 pt-24">
           <h2 className="text-4xl font-display uppercase tracking-tighter mb-8 italic font-serif">Don't miss the glow.</h2>
           <p className="text-neutral-500 mb-12 max-w-lg mx-auto">Get exclusive tips, product drops, and member-only events directly in your inbox.</p>
           <form className="max-w-md mx-auto flex gap-4">
             <input
               type="email"
               placeholder="YOUR EMAIL"
               className="flex-1 border-b border-brand-black/20 py-3 focus:outline-none focus:border-brand-black text-sm tracking-widest"
             />
             <button className="px-8 py-3 bg-brand-black text-white rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-brand-mocha transition-all">
               Subscribe
             </button>
           </form>
        </div>
      </section>
    </div>
  );
}
