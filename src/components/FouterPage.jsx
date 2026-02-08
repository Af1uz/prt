import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUp, Mail, MapPin } from 'lucide-react';

const FouterPage = ({ isDark }) => {
  // RANG KONFIGURATSIYASI - 100% KONTRAST
  const theme = {
    bg: isDark ? "#000000" : "#FFFFFF",
    text: isDark ? "#FFFFFF" : "#000000", // Kunda mutloq qora, tunda mutloq oq
    border: isDark ? "#FFFFFF" : "#000000", // Chiziqlar ham tiniq
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="w-full transition-none border-t-2"
      style={{ backgroundColor: theme.bg, color: theme.text, borderColor: theme.border }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
        
        .industrial-text {
          font-family: 'Inter', sans-serif !important;
          font-weight: 100 !important;
          font-style: normal !important;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        /* Hover bo'lganda ham xiralashmasligi uchun */
        .f-link {
          transition: transform 0.2s ease;
          display: inline-block;
        }
        .f-link:hover {
          transform: translateX(5px);
          font-weight: 400 !important; /* Hoverda biroz qalinlashadi, lekin rang o'zgarmaydi */
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* BRAND */}
          <div className="space-y-6">
            <h2 className="industrial-text text-2xl tracking-[1em]">NEXUS</h2>
            <p className="industrial-text text-[11px] leading-relaxed">
              BIOLOGIK KOD VA ILMIY ASOS. <br />
              KELAJAK BU YERDA.
            </p>
          </div>

          {/* NAVIGATSIYA */}
          <div className="space-y-6">
            <h3 className="industrial-text text-[13px] border-b pb-2 inline-block" style={{ borderColor: theme.border }}>MENYU</h3>
            <ul className="industrial-text text-[10px] space-y-4">
              <li><a href="#" className="f-link">FORMULA</a></li>
              <li><a href="#" className="f-link">TAHLIL</a></li>
              <li><a href="#" className="f-link">LABORATORIYA</a></li>
            </ul>
          </div>

          {/* ALOQA */}
          <div className="space-y-6">
            <h3 className="industrial-text text-[13px] border-b pb-2 inline-block" style={{ borderColor: theme.border }}>ALOQA</h3>
            <div className="industrial-text text-[10px] space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={14} strokeWidth={1} />
                <span>INFO@NEXUS.UZ</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} strokeWidth={1} />
                <span>TASHKENT, UZBEKISTAN</span>
              </div>
            </div>
          </div>

          {/* IJTIMOIY TARMOQ */}
          <div className="flex flex-col justify-between items-start md:items-end gap-8">
            <div className="flex gap-6">
              <Instagram size={20} strokeWidth={1} className="cursor-pointer" />
              <Twitter size={20} strokeWidth={1} className="cursor-pointer" />
              <Linkedin size={20} strokeWidth={1} className="cursor-pointer" />
            </div>
            
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-4 industrial-text text-[10px] border border-current px-6 py-3 hover:invert transition-all"
            >
              TEPAGA
              <ArrowUp size={14} strokeWidth={1} />
            </button>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: theme.border }}>
          <span className="industrial-text text-[8px]">
            © 2026 NEXUS SYSTEMS. ALL RIGHTS RESERVED.
          </span>
          <div className="industrial-text text-[8px] flex gap-6">
            <span>PRIVACY</span>
            <span>TERMS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FouterPage;