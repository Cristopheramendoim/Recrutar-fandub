import React, { useState, useEffect } from 'react';
import { AlertTriangle, Send, CheckCircle2, Link as LinkIcon, Info } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

const StoneMonument = ({ side }: { side: 'left' | 'right' }) => {
  const isLeft = side === 'left';
  const glowColor = isLeft ? 'rgba(168,85,247,0.5)' : 'rgba(236,72,153,0.5)';
  const auraColor = isLeft ? 'bg-purple-600/30' : 'bg-pink-600/30';
  const borderColor = isLeft ? 'border-purple-500/50' : 'border-pink-500/50';
  const runeColor = isLeft ? 'bg-purple-400' : 'bg-pink-400';
  const glowShadow = `0 0 20px ${glowColor}, inset 0 0 20px ${glowColor}`;

  return (
    <div 
      className={`absolute top-[15%] sm:top-1/4 ${isLeft ? 'left-[-20px] sm:left-[2%] md:left-[10%]' : 'right-[-20px] sm:right-[2%] md:right-[10%]'} z-0 pointer-events-none opacity-80 scale-50 sm:scale-75 md:scale-100 flex`} 
      style={{ perspective: '1000px' }}
    >
      {/* Aura */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] ${auraColor} rounded-full blur-[80px] pointer-events-none`} />
      
      {/* 3D Structure */}
      <motion.div
        animate={{ 
          rotateY: isLeft ? [0, 360] : [360, 0],
          y: [-30, 30, -30],
          rotateX: [10, 15, 10],
          rotateZ: isLeft ? [-15, -25, -15] : [15, 25, 15]
        }}
        transition={{ 
          rotateY: { duration: 30, repeat: Infinity, ease: 'linear' },
          y: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
          rotateX: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 15, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="w-20 h-72 relative"
        style={{ transformStyle: 'preserve-3d', willChange: "transform" }}
      >
        {/* Front */}
        <div className={`absolute w-full h-full bg-slate-800 ${borderColor} border-2 overflow-hidden`} style={{ transform: 'translateZ(40px)', boxShadow: glowShadow }}>
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
           <div className="absolute inset-0 flex items-center justify-center -rotate-90 opacity-90">
             <span className={`text-xl font-black whitespace-nowrap drop-shadow-[0_0_10px_currentColor] ${isLeft ? 'text-purple-400' : 'text-pink-400'}`}>
               Fly Nitro
             </span>
           </div>
        </div>
        {/* Back */}
        <div className={`absolute w-full h-full bg-slate-900 ${borderColor} border-2 overflow-hidden`} style={{ transform: 'rotateY(180deg) translateZ(40px)', boxShadow: glowShadow }}>
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
           <div className="absolute inset-0 flex items-center justify-center -rotate-90 opacity-90">
             <span className={`text-xl font-black whitespace-nowrap drop-shadow-[0_0_10px_currentColor] ${isLeft ? 'text-purple-400' : 'text-pink-400'}`}>
               Fly Nitro
             </span>
           </div>
        </div>
        {/* Left */}
        <div className={`absolute w-[80px] h-full bg-slate-950 ${borderColor} border-2 overflow-hidden`} style={{ transform: 'rotateY(-90deg) translateZ(40px)', boxShadow: glowShadow }}>
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
           <div className="absolute inset-0 flex items-center justify-center -rotate-90 opacity-70">
             <span className={`text-lg font-black uppercase tracking-widest whitespace-nowrap drop-shadow-[0_0_10px_currentColor] ${isLeft ? 'text-purple-500' : 'text-pink-500'}`}>
               Fly Nitro
             </span>
           </div>
        </div>
        {/* Right */}
        <div className={`absolute w-[80px] h-full bg-slate-700 ${borderColor} border-2 overflow-hidden`} style={{ transform: 'rotateY(90deg) translateZ(40px)', boxShadow: glowShadow }}>
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
           <div className="absolute inset-0 flex items-center justify-center -rotate-90 opacity-70">
             <span className={`text-lg font-black uppercase tracking-widest whitespace-nowrap drop-shadow-[0_0_10px_currentColor] ${isLeft ? 'text-purple-500' : 'text-pink-500'}`}>
               Fly Nitro
             </span>
           </div>
        </div>
        {/* Top */}
        <div className={`absolute w-[80px] h-[80px] top-1/2 left-0 -translate-y-1/2 bg-slate-600 ${borderColor} border-2`} style={{ transform: 'rotateX(90deg) translateZ(144px)', boxShadow: glowShadow }} />
        {/* Bottom */}
        <div className={`absolute w-[80px] h-[80px] top-1/2 left-0 -translate-y-1/2 bg-black ${borderColor} border-2`} style={{ transform: 'rotateX(-90deg) translateZ(144px)', boxShadow: glowShadow }} />
      </motion.div>
    </div>
  );
};


const BackgroundAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <StoneMonument side="left" />
      <StoneMonument side="right" />

      {/* Sombras grandes se mexendo */}
      <motion.div
        style={{
          background: 'radial-gradient(circle, rgba(88,28,135,0.4) 0%, rgba(88,28,135,0) 70%)',
          willChange: "transform"
        }}
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full"
      />
      <motion.div
        style={{
          background: 'radial-gradient(circle, rgba(131,24,67,0.4) 0%, rgba(131,24,67,0) 70%)',
          willChange: "transform"
        }}
        animate={{
          x: [0, -150, 50, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
      />

      {/* Círculos brilhantes caindo devagar (efeito fosco no mar) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          style={{ 
            top: 0,
            left: `${Math.random() * 100}%`,
            willChange: "transform, opacity" 
          }}
          initial={{
            y: "-10vh",
            opacity: 0,
            scale: Math.random() * 0.6 + 0.2,
          }}
          animate={{
            y: "110vh",
            rotate: 360,
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            delay: Math.random() * 15,
            ease: "linear",
          }}
          className="absolute w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-500/20 shadow-[0_0_10px_rgba(255,0,255,0.1)] border border-white/5"
        />
      ))}

      {/* Argolas neon flutuando de um lado para o outro sem girar */}
      {[...Array(6)].map((_, i) => {
        const size = Math.random() * 80 + 40;
        const shadowColor = i % 2 === 0 ? 'rgba(236,72,153,0.4)' : 'rgba(168,85,247,0.4)';
        const borderColor = i % 2 === 0 ? 'rgba(236,72,153,0.5)' : 'rgba(168,85,247,0.5)';
        const isLeftToRight = i % 2 === 0;

        return (
          <motion.div
            key={`ring-${i}`}
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: isLeftToRight ? "-20%" : "120%",
              width: size,
              height: size,
              border: `2px solid ${borderColor}`,
              boxShadow: `0 0 10px ${shadowColor}`,
              borderRadius: '50%',
              willChange: "transform"
            }}
            initial={{
              x: 0,
            }}
            animate={{
              x: isLeftToRight ? "140vw" : "-140vw",
              y: [0, Math.random() * 60 - 30, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
            className="absolute opacity-40 pointer-events-none"
          />
        );
      })}
    </div>
  );
};

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    discord: '',
    areas: [] as string[],
    finance: '',
    terms: [] as string[],
    portfolio: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [error, setError] = useState('');

  const webhookUrl = 'https://discord.com/api/webhooks/1504931096406528032/uC2OQN0jKq3YbjtNW-BO00qvNF912E8Uq7l5hK1hKH4TsB5gE6TG4eCr-dzdmlk9i-ol';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, listName: 'areas' | 'terms') => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [listName]: e.target.checked
        ? [...prev[listName], value]
        : prev[listName].filter((i) => i !== value),
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, finance: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic Validation
    if (!formData.name.trim() || !formData.discord.trim()) {
      setError('Por favor, preencha os campos obrigatórios (Nome e Discord).');
      setIsSubmitting(false);
      return;
    }

    // Format Data as JSON for Discord Webhook
    const payload = {
      content: `✨ Um novo candidato manifestou interesse na equipe!`,
      embeds: [
        {
          title: "📄 Ficha de Recrutamento - Crishfly",
          color: 0xff00ff, // Neon Pink
          fields: [
            { name: "👤 Nome/Apelido", value: formData.name || "Não informado", inline: true },
            { name: "👾 Discord", value: formData.discord || "Não informado", inline: true },
            { name: "🎨 Áreas de Interesse", value: formData.areas.length > 0 ? formData.areas.map(a => `• ${a}`).join('\n') : 'Nenhuma', inline: false },
            { name: "💰 Expectativa", value: formData.finance || 'Não informada', inline: false },
            { name: "📜 Termos", value: formData.terms.length > 0 ? formData.terms.map(t => `✅ ${t}`).join('\n') : '⚠️ Nenhum termo aceito', inline: false },
            { name: "🔗 Portfólio/Links", value: formData.portfolio || 'Nenhum link fornecido', inline: false },
          ],
          timestamp: new Date().toISOString()
        }
      ]
    };

    try {
      // 1. Enviar para o Discord
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Erro no servidor do Discord: ${response.status}`);
      }

      // 2. Feedback de Sucesso
      setIsSuccess(true);
      setIsShaking(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff00ff', '#a855f7', '#ec4899', '#ffffff']
      });
      setTimeout(() => setIsShaking(false), 800);
    } catch (err) {
      console.error("Erro ao enviar webhook:", err);
      setError('Falha ao enviar sua ficha. Verifique sua conexão e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS SCREEN
  if (isSuccess) {
    return (
      <motion.div 
        animate={isShaking ? { x: [-15, 15, -15, 15, -10, 10, -5, 5, 0], y: [15, -15, 15, -15, 10, -10, 5, -5, 0] } : {}}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden"
      >
        <BackgroundAnimation />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-slate-900 border border-pink-500/30 p-8 rounded-2xl shadow-[0_0_30px_rgba(255,0,255,0.1)] text-center max-w-md w-full z-10"
        >
          <CheckCircle2 className="w-20 h-20 text-pink-500 mx-auto mb-6 drop-shadow-[0_0_10px_rgba(255,0,255,0.6)]" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Sucesso!
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Sua ficha foi enviada! Mas atenção: <strong className="text-pink-400">você precisa estar no nosso Discord</strong> para que a Skymira consiga te contatar caso seja selecionado(a).
          </p>
          
          <a
            href="https://discord.gg/KxEYfFnpcW"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] w-full hover:scale-[1.02]"
          >
            <span className="text-lg mb-1">Entrar no Discord 🚀</span>
            <span className="text-xs font-normal text-pink-100">(Obrigatório para participar)</span>
          </a>
        </motion.div>
      </motion.div>
    );
  }

  // FORM SCREEN
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-pink-500/30 relative overflow-x-hidden">
      
      <BackgroundAnimation />

      <div className="max-w-2xl mx-auto px-4 py-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Top Warning Banner */}
        <a 
          href="https://discord.gg/KxEYfFnpcW" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex items-start gap-3 bg-slate-900/80 backdrop-blur-sm border-2 border-pink-500 p-4 rounded-xl shadow-[0_0_15px_rgba(255,0,255,0.3)] mb-8 transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,0,255,0.5)] group"
        >
          <AlertTriangle className="text-yellow-400 w-6 h-6 flex-shrink-0 mt-1 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]" />
          <div>
            <p className="text-sm font-bold text-yellow-400 uppercase tracking-wide">Obrigatório</p>
            <p className="text-sm sm:text-base mt-1 font-medium group-hover:text-pink-100 transition-colors">
              Você deve estar no nosso servidor do Discord para que possamos entrar em contato. <span className="underline decoration-pink-500 underline-offset-2">Clique aqui para entrar!</span>
            </p>
          </div>
        </a>

        {/* Header */}
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 px-2 sm:px-0"
          >
            <span className="block sm:inline">Recrutamento </span>
            <div className="flex items-center justify-center pt-2 sm:inline-flex sm:pt-0">
              <motion.span 
                animate={{ 
                  textShadow: ["0px 0px 10px rgba(219,39,119,0.5)", "0px 0px 20px rgba(147,51,234,0.8)", "0px 0px 10px rgba(219,39,119,0.5)"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,0,255,0.2)]"
              >
                Equipe Crishfly
              </motion.span>
            </div>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-400 max-w-md mx-auto text-sm sm:text-base px-2 sm:px-0"
          >
            Faça parte do nosso universo de dublagem, edição e arte. Preencha a ficha com o seu melhor!
          </motion.p>
        </div>

        {/* The Form */}
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          onSubmit={handleSubmit} 
          className="w-full bg-slate-900/30 backdrop-blur-md border border-slate-700/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col gap-8"
        >
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-4 rounded-lg text-sm text-center font-medium">
              {error}
            </div>
          )}

          {/* Group 1: Basic Info */}
          <div className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Nome / Apelido *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-3 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
                placeholder="Como gosta de ser chamado"
              />
            </div>

            <div>
              <label htmlFor="discord" className="block text-sm font-semibold text-slate-300 mb-2">Usuário do Discord *</label>
              <input
                type="text"
                id="discord"
                name="discord"
                required
                value={formData.discord}
                onChange={handleInputChange}
                className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-3 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
                placeholder="exemplo_nome"
              />
              <p className="flex items-center gap-1.5 text-xs text-pink-400/80 mt-2 font-medium">
                <Info className="w-3.5 h-3.5" />
                Coloque seu underline _ corretamente para facilitar o contato.
              </p>
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* Group 2: Interests */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-4">Áreas de Interesse</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: 'Fazer Fandub', emoji: '🇧🇷' },
                { name: 'Editar Vídeos', emoji: '🔥' },
                { name: 'Desenhar Personagens', emoji: '🎨' }
              ].map(area => (
                <label key={area.name} className="flex items-center justify-center gap-3 p-3 rounded-xl border border-slate-700 bg-slate-800/40 cursor-pointer hover:bg-slate-800 transition-colors group has-[:checked]:border-purple-500 has-[:checked]:bg-purple-500/10">
                  <input 
                    type="checkbox"
                    value={area.name}
                    onChange={(e) => handleCheckboxChange(e, 'areas')}
                    className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-slate-500 bg-slate-900 accent-purple-500"
                  />
                  <span className="flex items-center gap-2 text-sm font-medium select-none group-hover:text-purple-300 transition-colors whitespace-nowrap">
                    <span className="text-lg">{area.emoji}</span> {area.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Group 3: Financial Expectations */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-4">Expectativa Financeira</label>
            <div className="flex flex-col gap-3">
              {[
                'Apenas por diversão/ajuda',
                'Quero ser pago (Freelancer)',
                'Os dois: Ajuda + Dinheiro se possível'
              ].map(opt => (
                <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-slate-800/50 hover:bg-slate-800/30 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="finance" 
                    value={opt}
                    onChange={handleRadioChange}
                    className="w-4 h-4 text-pink-500 bg-slate-900 border-slate-600 focus:ring-pink-500 focus:ring-2 accent-pink-500"
                  />
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* Group 4: Terms & Style */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-4">Termos de Conteúdo</label>
            <div className="flex flex-col gap-3">
              {[
                'Aceito dublar/desenhar cenas de vergonha alheia (Cringe)',
                'Concordo com os termos de humor do canal'
              ].map(term => (
                <label key={term} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/30 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    value={term}
                    onChange={(e) => handleCheckboxChange(e, 'terms')}
                    className="w-4 h-4 mt-0.5 rounded text-pink-500 focus:ring-pink-500 border-slate-600 bg-slate-900 accent-pink-500"
                  />
                  <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">{term}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Group 5: Portfolio */}
          <div>
            <label htmlFor="portfolio" className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-2">
              <LinkIcon className="w-4 h-4 text-pink-400" /> Portfólio / Links <span className="text-slate-500 font-normal text-xs ml-1">(Opcional)</span>
            </label>
            <textarea
              id="portfolio"
              name="portfolio"
              rows={4}
              value={formData.portfolio}
              onChange={handleInputChange}
              className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all shadow-inner resize-y"
              placeholder="Cole os links de seus vídeos, artes, pastas do drive, etc... (não obrigatório)"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-white font-bold text-lg tracking-wide transition-all shadow-[0_0_20px_rgba(219,39,119,0.4)]
              ${isSubmitting 
                ? 'bg-slate-700 cursor-not-allowed shadow-none' 
                : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 hover:shadow-[0_0_30px_rgba(219,39,119,0.7)] hover:-translate-y-0.5 active:translate-y-0'
              }`}
          >
            {isSubmitting ? (
              <span className="animate-pulse">Enviando...</span>
            ) : (
              <>
                <Send className="w-5 h-5" /> Enviar Candidatura
              </>
            )}
          </button>
          
        </motion.form>

        <p className="mt-8 text-xs text-slate-600">
          Você receberá uma notificação via Discord caso seja aprovado para a próxima etapa.
        </p>

      </div>
    </div>
  );
}
