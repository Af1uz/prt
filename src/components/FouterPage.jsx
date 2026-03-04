import React, { useState } from 'react'

const ACCENT = '#61210F'
const BG = '#FDF0D5'

const team = [
  { id:1, name:'Alessandro Rossi',  role:'Bosh oshpaz',        since:'2018', img:'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80&auto=format&fit=crop&crop=face', quote:'Har bir taom — yurakdan.' },
  { id:2, name:'Nilufar Karimova',  role:'Sous-chef',           since:'2020', img:'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80&auto=format&fit=crop&crop=face', quote:'Ingredientlar — soz, sevgi — musiqa.' },
  { id:3, name:'Marcos Delgado',    role:'Pastry Chef',         since:'2019', img:'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&q=80&auto=format&fit=crop&crop=face', quote:'Desert — oxirgi taassurot.' },
  { id:4, name:'Zulfiya Tosheva',   role:'Sommelyer',           since:'2021', img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop&crop=face', quote:"To'g'ri sharob — to'g'ri kayfiyat." },
  { id:5, name:'Dmitri Volkov',     role:'Bar menejeri',        since:'2020', img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop&crop=face', quote:'Har bir kokteyl — yangi dunyo.' },
  { id:6, name:'Sabrina Ferri',     role:'Restaurant Menejeri', since:'2017', img:'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80&auto=format&fit=crop&crop=face', quote:"Mehmon — oilaviy a'zo." },
]

const schedule = [
  { day:'Dushanba',   open:'12:00', close:'22:00' },
  { day:'Seshanba',   open:'12:00', close:'22:00' },
  { day:'Chorshanba', open:'12:00', close:'23:00' },
  { day:'Payshanba',  open:'12:00', close:'23:00' },
  { day:'Juma',       open:'11:00', close:'00:00' },
  { day:'Shanba',     open:'10:00', close:'01:00' },
  { day:'Yakshanba',  open:'10:00', close:'21:00' },
]
const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1

const contacts = [
  { label:'Manzil',  value:"Amir Temur ko'chasi, 5-uy\nToshkent, O'zbekiston",
    icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> },
  { label:'Telefon', value:'+998 71 123 45 67\n+998 90 000 11 22',
    icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.09 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.86-.86a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> },
  { label:'Email',   value:'info@xonatlas.uz\nbron@xonatlas.uz',
    icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { label:'Bron',    value:"Qo'ng'iroq qiling yoki\nsaytimiz orqali band qiling",
    icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
]

const Star = () => <svg width="12" height="12" viewBox="0 0 24 24" fill={ACCENT} stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const IGIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
const FBIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
const TGIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>

export default function FouterPage() {
  const [imgErr, setImgErr] = useState({})

  return (
    <div style={{ background: BG, fontFamily:"'Cormorant Garamond', Georgia, serif", color: ACCENT, overflowX:'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Lato:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

        .slabel {
          display:inline-flex; align-items:center; gap:12px;
          font-family:'Lato'; font-size:10px; letter-spacing:4px;
          text-transform:uppercase; color:rgba(97,33,15,0.4); margin-bottom:14px;
        }
        .slabel::before,.slabel::after { content:''; width:32px; height:1px; background:rgba(97,33,15,0.28); display:block; }

        /* ── TEAM ── */
        .team-grid { display:grid; gap:18px; grid-template-columns:repeat(3,1fr); }
        @media(max-width:860px){ .team-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:500px){ .team-grid{ grid-template-columns:1fr; } }

        .tcard { border:1px solid rgba(97,33,15,0.1); border-radius:16px; overflow:hidden; background:#fffaf0; transition:transform .3s ease, box-shadow .3s ease; animation:fadeUp .4s ease both; }
        .tcard:hover { transform:translateY(-6px); box-shadow:0 18px 48px rgba(97,33,15,0.11); }
        .timg { height:210px; overflow:hidden; position:relative; flex-shrink:0; }
        .timg img { width:100%; height:100%; object-fit:cover; object-position:top center; display:block; transition:transform .5s ease; }
        .tcard:hover .timg img { transform:scale(1.05); }
        .toverlay { position:absolute; inset:0; background:linear-gradient(to bottom,transparent 38%,rgba(10,3,0,.58) 100%); }
        .tbody { padding:16px 16px 14px; }

        /* ── SCHEDULE + CONTACT GRID ── */
        .sc-grid { display:grid; gap:40px; grid-template-columns:1fr 1fr; align-items:start; }
        @media(max-width:720px){ .sc-grid{ grid-template-columns:1fr; gap:48px; } }

        /* ── SCHEDULE ROWS ── */
        .srow { display:flex; align-items:center; justify-content:space-between; padding:12px 10px; border-bottom:1px solid rgba(97,33,15,0.08); border-radius:8px; }
        .srow:last-child { border-bottom:none; }
        .srow.is-today { background:rgba(97,33,15,0.06); }
        .srow-left { display:flex; align-items:center; gap:8px; min-width:0; }
        .srow-dot { width:6px; height:6px; border-radius:50%; background:#61210F; flex-shrink:0; }
        .srow-day { font-family:'Lato'; font-size:13px; letter-spacing:.3px; white-space:nowrap; }
        .srow-badge { font-family:'Lato'; font-size:8px; letter-spacing:2px; text-transform:uppercase; background:#61210F; color:#FDF0D5; padding:2px 8px; border-radius:100px; flex-shrink:0; }
        .srow-time { font-family:'Lato'; font-size:13px; white-space:nowrap; flex-shrink:0; }

        /* ── CONTACT CARDS ── */
        .ccard { display:flex; gap:13px; align-items:flex-start; padding:15px 16px; background:#fffaf0; border:1px solid rgba(97,33,15,0.09); border-radius:12px; margin-bottom:12px; }
        .ccard:last-child { margin-bottom:0; }
        .cicon { color:#61210F; opacity:.65; flex-shrink:0; margin-top:2px; }
        .clabel { font-family:'Lato'; font-size:9px; letter-spacing:3px; text-transform:uppercase; color:rgba(97,33,15,0.35); margin-bottom:4px; }
        .cval { font-family:'Lato'; font-size:13px; color:rgba(97,33,15,0.68); font-weight:300; line-height:1.7; }

        /* ── MAP ── */
        .mapframe { width:100%; height:420px; border-radius:18px; border:1px solid rgba(97,33,15,0.12); display:block; filter:sepia(18%) saturate(80%); transition:filter .3s; }
        .mapframe:hover { filter:sepia(4%) saturate(100%); }
        @media(max-width:600px){ .mapframe{ height:260px; border-radius:12px; } }

        .map-card { position:absolute; top:16px; left:16px; background:rgba(253,240,213,0.95); backdrop-filter:blur(10px); border:1px solid rgba(97,33,15,0.15); border-radius:12px; padding:14px 18px; max-width:220px; box-shadow:0 6px 28px rgba(97,33,15,0.13); }
        @media(max-width:400px){ .map-card{ display:none; } }

        /* ── FOOTER GRID ── */
        .fg { display:grid; gap:36px; grid-template-columns:2fr 1fr 1fr; }
        @media(max-width:780px){ .fg{ grid-template-columns:1fr 1fr; } }
        @media(max-width:460px){ .fg{ grid-template-columns:1fr; gap:28px; } }

        .flink { display:block; font-family:'Lato'; font-size:13px; color:rgba(97,33,15,0.52); letter-spacing:.3px; margin-bottom:9px; cursor:pointer; transition:color .2s; }
        .flink:hover { color:#61210F; }
        .sbtn { width:36px; height:36px; border-radius:50%; border:1px solid rgba(97,33,15,0.22); background:transparent; color:#61210F; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .22s; }
        .sbtn:hover { background:#61210F; color:#FDF0D5; border-color:#61210F; }

        /* ── SHARED ── */
        .wrap { max-width:1280px; margin:0 auto; }
        .sec { padding:72px 22px; }
        @media(max-width:520px){ .sec{ padding:52px 14px; } }
        .divider { height:1px; background:rgba(97,33,15,0.1); }
        .sec-title { font-size:clamp(32px,5vw,56px); font-weight:300; color:#61210F; letter-spacing:-.5px; line-height:1.08; margin-bottom:36px; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* ═══ TEAM ═══ */}
      <section className="sec wrap">
        <div style={{textAlign:'center',marginBottom:48}}>
          <div className="slabel">Bizning jamoa</div>
          <h2 style={{fontSize:'clamp(34px,5vw,58px)',fontWeight:300,color:ACCENT,letterSpacing:'-.5px',lineHeight:1.08}}>
            Usta qo'llar,<br/><em style={{fontWeight:300}}>issiq yuraklar</em>
          </h2>
        </div>
        <div className="team-grid">
          {team.map((m,i) => (
            <div key={m.id} className="tcard" style={{animationDelay:`${i*.07}s`}}>
              <div className="timg">
                {!imgErr[m.id]
                  ? <img src={m.img} alt={m.name} loading="lazy" onError={()=>setImgErr(p=>({...p,[m.id]:true}))}/>
                  : <div style={{width:'100%',height:'100%',background:'rgba(97,33,15,0.07)',display:'flex',alignItems:'center',justifyContent:'center'}}><span style={{fontSize:48,opacity:.2}}>👨‍🍳</span></div>
                }
                <div className="toverlay"/>
                <div style={{position:'absolute',bottom:12,left:14,right:14}}>
                  <div style={{fontFamily:"'Lato'",fontSize:9,letterSpacing:3,textTransform:'uppercase',color:'rgba(253,240,213,.65)',marginBottom:2}}>{m.role}</div>
                  <div style={{fontSize:19,fontWeight:500,color:BG,letterSpacing:'-.2px'}}>{m.name}</div>
                </div>
              </div>
              <div className="tbody">
                <p style={{fontStyle:'italic',fontSize:13.5,color:'rgba(97,33,15,.5)',fontWeight:300,lineHeight:1.65,marginBottom:10}}>"{m.quote}"</p>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <div style={{display:'flex',gap:2}}>{[1,2,3,4,5].map(s=><Star key={s}/>)}</div>
                  <span style={{fontFamily:"'Lato'",fontSize:9,letterSpacing:2,color:'rgba(97,33,15,.32)',textTransform:'uppercase'}}>{m.since} yildan</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"/>

      {/* ═══ SCHEDULE + CONTACT ═══ */}
      <section className="sec wrap">
        <div className="sc-grid">

          {/* Ish vaqti */}
          <div>
            <div className="slabel">Ish vaqti</div>
            <h2 className="sec-title">Biz qachon<br/><em>xizmatdamiz</em></h2>
            <div>
              {schedule.map((s,i) => {
                const isToday = i === todayIdx
                return (
                  <div key={i} className={`srow${isToday?' is-today':''}`}>
                    <div className="srow-left">
                      {isToday && <div className="srow-dot"/>}
                      {!isToday && <div style={{width:6,flexShrink:0}}/>}
                      <span className="srow-day" style={{fontWeight:isToday?500:300,color:isToday?ACCENT:'rgba(97,33,15,.58)'}}>
                        {s.day}
                      </span>
                      {isToday && <span className="srow-badge">Bugun</span>}
                    </div>
                    <span className="srow-time" style={{fontWeight:isToday?500:300,color:isToday?ACCENT:'rgba(97,33,15,.5)'}}>
                      {s.open} — {s.close}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Aloqa */}
          <div>
            <div className="slabel">Aloqa</div>
            <h2 className="sec-title">Bog'lanish<br/><em>ma'lumotlari</em></h2>
            <div>
              {contacts.map((c,i) => (
                <div key={i} className="ccard">
                  <div className="cicon">{c.icon}</div>
                  <div>
                    <div className="clabel">{c.label}</div>
                    {c.value.split('\n').map((line,j) => (
                      <div key={j} className="cval">{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ═══ MAP ═══ */}
      <section className="sec wrap">
        <div style={{textAlign:'center',marginBottom:38}}>
          <div className="slabel">Joylashuv</div>
          <h2 style={{fontSize:'clamp(32px,5vw,56px)',fontWeight:300,color:ACCENT,letterSpacing:'-.5px'}}>Bizni toping</h2>
        </div>
        <div style={{position:'relative'}}>
          <iframe
            className="mapframe"
            src="https://maps.google.com/maps?q=41.2995,69.2401&z=15&output=embed&hl=uz"
            style={{border:'none'}}
            allowFullScreen=""
            loading="lazy"
            title="Xon Atlas joylashuvi"
          />
          <div className="map-card">
            <div style={{fontFamily:"'Lato'",fontSize:9,letterSpacing:3,textTransform:'uppercase',color:'rgba(97,33,15,.38)',marginBottom:6}}>Xon Atlas</div>
            <div style={{fontSize:15,fontWeight:500,color:ACCENT,marginBottom:5,lineHeight:1.3}}>Amir Temur ko'chasi, 5</div>
            <div style={{fontFamily:"'Lato'",fontSize:11,color:'rgba(97,33,15,.52)',lineHeight:1.65}}>
              Toshkent, O'zbekiston<br/>
              <span style={{color:'rgba(97,33,15,.35)'}}>Metro: Amir Temur Hiyoboni</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ═══ FOOTER ═══ */}
      <footer style={{background:'rgba(97,33,15,.04)'}}>
        <div className="wrap" style={{padding:'60px 22px 0'}}>
          <div className="fg">
            <div>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
                <div style={{width:30,height:1,background:ACCENT,opacity:.35}}/>
                <span style={{fontFamily:"'Lato'",fontSize:9,letterSpacing:4,color:'rgba(97,33,15,.32)',textTransform:'uppercase'}}>2018 yildan</span>
              </div>
              <h3 style={{fontSize:36,fontWeight:300,color:ACCENT,letterSpacing:'-.5px',marginBottom:14,lineHeight:1}}>Xon Atlas</h3>
              <p style={{fontStyle:'italic',fontSize:14.5,color:'rgba(97,33,15,.48)',fontWeight:300,lineHeight:1.75,maxWidth:300,marginBottom:22}}>
                Toshkentning yuragida — har bir mehmon uchun unutilmas tajriba yaratamiz.
              </p>
              <div style={{display:'flex',gap:9}}>
                {[<IGIcon/>,<FBIcon/>,<TGIcon/>].map((ic,i)=>(
                  <button key={i} className="sbtn">{ic}</button>
                ))}
              </div>
            </div>
            <div>
              <div style={{fontFamily:"'Lato'",fontSize:9,letterSpacing:3,textTransform:'uppercase',color:'rgba(97,33,15,.33)',marginBottom:18}}>Menyu</div>
              {["Asosiy taomlar","Baliq & Dengiz","Sho'rvalar","Salatlar","Desertlar","Ichimliklar"].map(l=>(
                <span key={l} className="flink">{l}</span>
              ))}
            </div>
            <div>
              <div style={{fontFamily:"'Lato'",fontSize:9,letterSpacing:3,textTransform:'uppercase',color:'rgba(97,33,15,.33)',marginBottom:18}}>Ma'lumot</div>
              {["Biz haqimizda","Jamoa","Voqealar","Bron qilish","Korporativ","Aloqa"].map(l=>(
                <span key={l} className="flink">{l}</span>
              ))}
            </div>
          </div>

          {/* bottom bar */}
          <div style={{marginTop:44,paddingTop:18,paddingBottom:22,borderTop:'1px solid rgba(97,33,15,.1)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:10}}>
            <span style={{fontFamily:"'Lato'",fontSize:11,color:'rgba(97,33,15,.32)',letterSpacing:.4}}>
              © 2025 Xon Atlas. Barcha huquqlar himoyalangan.
            </span>
            <div style={{display:'flex',gap:18,flexWrap:'wrap'}}>
              {['Maxfiylik','Shartlar','Sayt xaritasi'].map(l=>(
                <span key={l} style={{fontFamily:"'Lato'",fontSize:11,color:'rgba(97,33,15,.32)',cursor:'pointer',letterSpacing:.4,transition:'color .2s'}}
                  onMouseEnter={e=>e.target.style.color=ACCENT}
                  onMouseLeave={e=>e.target.style.color='rgba(97,33,15,.32)'}
                >{l}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}