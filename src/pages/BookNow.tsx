import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Calendar, MapPin, User } from 'lucide-react';
import { useState } from 'react';

export default function BookNow() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="h-screen flex items-center justify-center px-6 bg-brand-cream">
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="max-w-md w-full text-center p-12 bg-white border-4 border-brand-fluo rounded-[3rem] shadow-2xl"
        >
          <div className="w-20 h-20 bg-brand-fluo/20 rounded-full flex items-center justify-center mx-auto mb-8 text-black">
            <CheckCircle size={40} className="text-brand-neon" />
          </div>
          <h2 className="text-4xl font-display uppercase tracking-tighter mb-4 font-black">Confermato.</h2>
          <p className="text-neutral-500 mb-8 font-serif italic text-lg leading-relaxed">
            Il tuo viaggio verso il glow perfetto sta per iniziare. Ti abbiamo inviato una conferma dettagliata via email. Ci vediamo in Laboratorio.
          </p>
          <a href="/" className="inline-block px-8 py-3 bg-brand-fluo text-black rounded-full uppercase tracking-widest text-xs font-black shadow-lg">
            Torna alla Home
          </a>
        </motion.div>
      </div>
    );
  }

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
           className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-2 border-brand-fluo"
         >
            <div className="flex justify-between mb-12">
               {[1, 2, 3].map((s) => (
                 <div
                   key={s}
                   className={`h-1.5 w-full mx-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-brand-neon' : 'bg-neutral-100'}`}
                 />
               ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <h3 className="text-2xl font-display uppercase tracking-tighter flex items-center gap-3 font-black">
                    <User size={20} className="text-brand-neon" /> I Tuoi Dati
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <input
                        {...register('firstName', { required: true })}
                        placeholder="NOME"
                        className="w-full border-b-2 border-neutral-100 pb-3 focus:outline-none focus:border-brand-neon transition-all text-sm tracking-widest placeholder:text-neutral-300 font-bold"
                      />
                    </div>
                    <div className="space-y-2">
                       <input
                        {...register('lastName', { required: true })}
                        placeholder="COGNOME"
                        className="w-full border-b-2 border-neutral-100 pb-3 focus:outline-none focus:border-brand-neon transition-all text-sm tracking-widest placeholder:text-neutral-300 font-bold"
                      />
                    </div>
                  </div>
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    placeholder="INDIRIZZO EMAIL"
                    className="w-full border-b-2 border-neutral-100 pb-3 focus:outline-none focus:border-brand-neon transition-all text-sm tracking-widest placeholder:text-neutral-300 font-bold"
                  />
                  <input
                    {...register('phone', { required: true })}
                    placeholder="NUMERO DI TELEFONO"
                    className="w-full border-b-2 border-neutral-100 pb-3 focus:outline-none focus:border-brand-neon transition-all text-sm tracking-widest placeholder:text-neutral-300 font-bold"
                  />
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-5 bg-brand-black text-brand-fluo rounded-full text-xs uppercase tracking-widest font-black flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl"
                  >
                    Passo Successivo <ArrowRight size={16} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <h3 className="text-2xl font-display uppercase tracking-tighter flex items-center gap-3 font-black">
                    <Sparkles size={20} className="text-brand-neon" /> Scegli Trattamento
                  </h3>
                  <div className="space-y-4">
                    {["Signature GLOW Facial", "Boto-V Detox", "Laser Viso Completo", "Body Sculpt Lift"].map((svc) => (
                      <label key={svc} className="flex items-center p-5 rounded-2xl border-2 border-neutral-100 hover:border-brand-fluo cursor-pointer transition-all group">
                        <input type="radio" value={svc} {...register('treatment')} className="hidden" />
                        <span className="flex-1 text-sm font-black uppercase tracking-widest group-hover:text-brand-neon">{svc}</span>
                        <div className="w-4 h-4 rounded-full border-2 border-neutral-200 group-hover:border-brand-neon" />
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-5 border-2 border-brand-black text-brand-black rounded-full text-xs uppercase tracking-widest font-black hover:bg-neutral-50 transition-all font-bold"
                    >
                      Indietro
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 py-5 bg-brand-black text-brand-fluo rounded-full text-xs uppercase tracking-widest font-black hover:scale-105 transition-all shadow-xl"
                    >
                      Successivo
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <h3 className="text-2xl font-display uppercase tracking-tighter flex items-center gap-3 font-black">
                    <Calendar size={20} className="text-brand-neon" /> Data e Ora
                  </h3>
                  <input
                    type="date"
                    {...register('date', { required: true })}
                    className="w-full border-b-2 border-neutral-100 pb-3 focus:outline-none focus:border-brand-neon transition-all text-sm tracking-widest font-bold"
                  />
                  <div className="grid grid-cols-3 gap-3">
                    {["10:00", "11:30", "14:00", "15:30", "17:00", "18:30"].map((t) => (
                      <label key={t} className="cursor-pointer">
                        <input type="radio" value={t} {...register('time')} className="hidden peer" />
                        <div className="py-3 text-center border-2 border-neutral-100 rounded-xl text-[10px] font-black uppercase tracking-widest peer-checked:bg-brand-neon peer-checked:text-black transition-all">
                          {t}
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="p-6 bg-brand-fluo/10 rounded-2xl border-2 border-brand-fluo">
                    <p className="text-[10px] text-brand-black uppercase tracking-widest mb-2 font-black">Riepilogo</p>
                    <p className="text-sm italic font-serif text-brand-black">Ultimo passo prima del tuo glow upgrade.</p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 py-5 border-2 border-brand-black text-brand-black rounded-full text-xs uppercase tracking-widest font-black hover:bg-neutral-50 transition-all"
                    >
                      Indietro
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-5 bg-brand-neon text-black rounded-full text-xs uppercase tracking-widest font-black hover:scale-105 transition-all shadow-xl"
                    >
                      Conferma Prenotazione
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
         </motion.div>
      </div>
    </div>
  );
}
