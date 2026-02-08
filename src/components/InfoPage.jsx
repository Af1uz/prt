import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sun, Moon, Zap, Activity, Shield } from 'lucide-react';

const InfoPage = () => {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('UZ');
  const [hoveredCard, setHoveredCard] = useState(null);

  const content = {
    UZ: {
      title: "WHEY PROTEIN",
      subtitle: "Kuchli. Toza. Samarali.",
      desc: "30g yuqori sifatli oqsil har bir porsiyada. Mushak o'sishi va tiklanishi uchun laboratoriyada ishlab chiqilgan formula.",
      btn1: "XARID QILISH",
      btn2: "FORMULA HAQIDA",
      benefitsTitle: "NEGA BIZNING PROTEIN?",
      benefits: [
        {
          title: "TOZA OQSIL",
          value: "30g",
          desc: "Har bir porsiyada 30g premium whey protein isolate. Mushak o'sishi uchun zarur bo'lgan barcha aminokislotalar.",
          icon: Zap
        },
        {
          title: "TEZ SO'RILADI",
          value: "45min",
          desc: "Mashq'dan keyin 45 daqiqada to'liq so'riladi. Optimal tiklanish va mushak sintezi uchun.",
          icon: Activity
        },
        {
          title: "SERTIFIKATLANGAN",
          value: "GMP",
          desc: "GMP standartlariga muvofiq. Har bir partiya laboratoriyada sifat nazoratidan o'tgan.",
          icon: Shield
        }
      ]
    },
    RU: {
      title: "WHEY PROTEIN",
      subtitle: "Мощный. Чистый. Эффективный.",
      desc: "30г высококачественного белка в каждой порции. Формула, разработанная в лаборатории для роста и восстановления мышц.",
      btn1: "КУПИТЬ",
      btn2: "О ФОРМУЛЕ",
      benefitsTitle: "ПОЧЕМУ НАШ ПРОТЕИН?",
      benefits: [
        {
          title: "ЧИСТЫЙ БЕЛОК",
          value: "30g",
          desc: "30г премиального whey protein isolate в каждой порции. Все необходимые аминокислоты для роста мышц.",
          icon: Zap
        },
        {
          title: "БЫСТРОЕ УСВОЕНИЕ",
          value: "45min",
          desc: "Полное усвоение за 45 минут после тренировки. Для оптимального восстановления и синтеза мышц.",
          icon: Activity
        },
        {
          title: "СЕРТИФИЦИРОВАНО",
          value: "GMP",
          desc: "Соответствует стандартам GMP. Каждая партия проходит лабораторный контроль качества.",
          icon: Shield
        }
      ]
    },
    EN: {
      title: "WHEY PROTEIN",
      subtitle: "Powerful. Pure. Effective.",
      desc: "30g of high-quality protein in every serving. Laboratory-engineered formula for muscle growth and recovery.",
      btn1: "BUY NOW",
      btn2: "ABOUT FORMULA",
      benefitsTitle: "WHY OUR PROTEIN?",
      benefits: [
        {
          title: "PURE PROTEIN",
          value: "30g",
          desc: "30g of premium whey protein isolate per serving. All essential amino acids for muscle growth.",
          icon: Zap
        },
        {
          title: "FAST ABSORPTION",
          value: "45min",
          desc: "Complete absorption in 45 minutes post-workout. For optimal recovery and muscle synthesis.",
          icon: Activity
        },
        {
          title: "CERTIFIED",
          value: "GMP",
          desc: "GMP standard compliant. Every batch undergoes laboratory quality control testing.",
          icon: Shield
        }
      ]
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isDark ? 'bg-[#0A0A0A] text-[#E8E8E8]' : 'bg-[#FAFAFA] text-[#0A0A0A]'}`}>
      
      {/* NAVIGATION - Gainful Style */}
      <nav className={`fixed top-0 w-full z-50 px-6 md:px-16 h-20 flex justify-between items-center backdrop-blur-xl transition-all ${
        isDark 
          ? 'bg-[#0A0A0A]/95 border-b border-white/[0.06]' 
          : 'bg-white/95 border-b border-black/[0.06]'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white flex items-center justify-center">
            <span className="text-black font-black text-lg">N</span>
          </div>
          <span className="text-[13px] font-bold tracking-[0.15em] uppercase">Nexus</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-5">
            {['UZ', 'RU', 'EN'].map((l) => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={`text-[11px] font-medium tracking-wide transition-all ${
                  lang === l ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-sm transition-all ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION - Exactly like Gainful */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 min-h-screen flex items-center pt-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full py-12 md:py-0">
          
          {/* LEFT: Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className={`relative aspect-square w-full max-w-[550px] mx-auto ${
              isDark ? 'bg-[#121212]' : 'bg-[#F5F5F5]'
            }`}>
              {/* Product Image */}
              <img 
                src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=95" 
                alt="Protein Powder"
                className="w-full h-full object-cover"
              />
              
              {/* Subtle Overlay */}
              <div className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-white/20'}`} />
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <div className="space-y-10 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-[56px] md:text-[72px] lg:text-[84px] font-black leading-[0.9] tracking-tight">
                {content[lang].title}
              </h1>

              <p className="text-lg md:text-xl font-medium tracking-wide opacity-60 max-w-md">
                {content[lang].subtitle}
              </p>

              <p className={`text-[15px] leading-relaxed max-w-lg ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {content[lang].desc}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group px-8 py-4 bg-black text-white text-[13px] font-bold tracking-wide transition-all hover:bg-gray-900 flex items-center gap-3">
                {content[lang].btn1}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className={`px-8 py-4 text-[13px] font-bold tracking-wide transition-all ${
                isDark 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-black/5 hover:bg-black/10'
              }`}>
                {content[lang].btn2}
              </button>
            </motion.div>

            {/* Nutrition Facts - Gainful Style */}
            <div className={`pt-8 flex gap-12 border-t ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}>
              {[
                { label: 'Protein', value: '30g' },
                { label: 'Calories', value: '120' },
                { label: 'Sugar', value: '0g' }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl font-bold">
                    {stat.value}
                  </div>
                  <div className={`text-[12px] tracking-wide ${
                    isDark ? 'text-gray-500' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* BENEFITS SECTION - 3 Cards Only */}
      <section className={`max-w-[1400px] mx-auto px-6 md:px-16 py-24 md:py-32 ${
        isDark ? 'bg-[#0A0A0A]' : 'bg-white'
      }`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[40px] md:text-[52px] font-black tracking-tight mb-2">
            {content[lang].benefitsTitle}
          </h2>
          <div className={`w-16 h-1 ${isDark ? 'bg-white' : 'bg-black'}`} />
        </motion.div>

        {/* 3 Cards Grid - Gainful Exact Style */}
        <div className="grid md:grid-cols-3 gap-6">
          {content[lang].benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isHovered = hoveredCard === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-8 transition-all duration-500 ${
                  isDark 
                    ? 'bg-[#121212] hover:bg-[#1A1A1A]' 
                    : 'bg-[#F5F5F5] hover:bg-[#EEEEEE]'
                } ${isHovered ? 'scale-105 shadow-2xl' : 'scale-100'}`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-3 transition-all ${
                    isDark ? 'bg-white/10' : 'bg-black/10'
                  }`}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Value Badge */}
                <div className="absolute top-8 right-8">
                  <div className={`px-3 py-1 text-[11px] font-bold tracking-wider ${
                    isDark ? 'bg-white/10' : 'bg-black/10'
                  }`}>
                    {benefit.value}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-bold tracking-wide mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className={`text-[14px] leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {benefit.desc}
                </p>

                {/* Bottom Line Accent */}
                <div 
                  className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ${
                    isHovered ? 'w-full' : 'w-0'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FOOTER - Gainful Minimalist */}
      <footer className={`w-full px-6 md:px-16 py-12 border-t ${
        isDark ? 'border-white/[0.06]' : 'border-black/[0.06]'
      }`}>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <span className="text-black font-black text-base">G</span>
            </div>
            <span className="text-[12px] font-bold tracking-[0.15em] uppercase">GAINFUL</span>
          </div>

          <p className={`text-[11px] tracking-wide ${
            isDark ? 'text-gray-600' : 'text-gray-500'
          }`}>
            © 2026 Gainful Nutrition
          </p>

          <div className="flex gap-6">
            {['Instagram', 'Twitter', 'Facebook'].map((social) => (
              <a 
                key={social}
                href="#"
                className={`text-[11px] font-medium tracking-wide transition-all ${
                  isDark 
                    ? 'text-gray-600 hover:text-white' 
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        body { 
          overflow-x: hidden;
        }
        
        ::-webkit-scrollbar { 
          width: 8px; 
        }
        
        ::-webkit-scrollbar-track { 
          background: ${isDark ? '#0A0A0A' : '#FAFAFA'}; 
        }
        
        ::-webkit-scrollbar-thumb { 
          background: ${isDark ? '#2A2A2A' : '#D0D0D0'}; 
        }

        ::selection {
          background: black;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default InfoPage;