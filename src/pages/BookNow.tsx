import { motion } from 'motion/react';

export default function BookNow() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-brand-cream">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
         <div className="sticky top-32">
            <h1 className="text-7xl font-display uppercase tracking-tighter leading-[0.9] mb-8">
              Prenota il tuo <span className="text-brand-neon italic font-serif">Upgrade.</span>
            </h1>
            <p className="text-xl text-neutral-500 mb-12 leading-relaxed font-serif italic">
              Vivi l'esperienza Skin Lab. Inserisci i tuoi dati e seleziona il trattamento desiderato.
            </p>

            <div className="space-y-8">
              {[
                { label: "Location", value: "Via della Spiga, Milano" },
                { label: "Cancellazione", value: "Richiesto preavviso di 24 ore" },
                { label: "Prima volta?", value: "Consulenza gratuita inclusa" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand-neon font-black mb-1">{item.label}</span>
                  <span className="text-lg font-black uppercase tracking-tight">{item.value}</span>
                </div>
              ))}
            </div>
         </div>

         <motion.div
           layout
           className="bg-white rounded-[3rem] p-4 md:p-8 shadow-2xl border-2 border-brand-fluo overflow-hidden"
         >
           <iframe 
             width="100%" 
             height="800" 
             src="https://28659878.sibforms.com/serve/MUIFAKahdrdmdfCg50krlzkMDJRjt_WGHjXw7mPEzqyKuA9MQx-mI5pJGAmxodnQrRzA8tkHY-N1df47BLhbUO7Iw1nSvwHDUzmJLoAD-EELstfGcb__uD8h70fL7Lh6A3Pw-_T2vn8_ood4bFksGurnb4XvRwIbdTpw8An--Lh5EZ-VmsUyJG44fnzzTvqC-CUiDEul_BGC2uG9MA==" 
             frameBorder="0" 
             scrolling="auto" 
             allowFullScreen 
             style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%', minHeight: '600px' }}
             title="Booking Form"
           ></iframe>
         </motion.div>
      </div>
    </div>
  );
}
