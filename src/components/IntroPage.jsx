import { useState } from "react"

const categories = [
  { id: "all", label: "Barchasi" },
  { id: "mains", label: "Asosiy taomlar" },
  { id: "seafood", label: "Baliq & Dengiz" },
  { id: "soup", label: "Sho'rvalar" },
  { id: "salad", label: "Salatlar" },
  { id: "desserts", label: "Desertlar" },
  { id: "drinks", label: "Ichimliklar" },
]

const menuItems = [
  // MAINS
  {
    id: 1, category: "mains",
    name: "Wagyu Burger",
    subtitle: "Trюfel mayonezi, karamelizatsiya qilingan piyoz",
    price: "240 000", time: "30 daq", tag: "Ekskluziv",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2, category: "mains",
    name: "Qo'zi go'shti",
    subtitle: "Lavanda, rozmarin va limon sousi",
    price: "185 000", time: "35 daq", tag: "Chef's Pick",
    img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3, category: "mains",
    name: "Ribeye Steak",
    subtitle: "Sarımsaqli yog', krızarmış kartoshka",
    price: "320 000", time: "40 daq", tag: "Premium",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 4, category: "mains",
    name: "Tovuq Parmigiana",
    subtitle: "San Marzano pomidori, bufala mozzarella",
    price: "145 000", time: "28 daq", tag: null,
    img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 5, category: "mains",
    name: "Risotto Nero",
    subtitle: "Siyoh bilan, dengiz mahsulotlari",
    price: "195 000", time: "35 daq", tag: "Yangi",
    img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 6, category: "mains",
    name: "Duck Confit",
    subtitle: "Apelsin glaze, sariq lavlagi puresi",
    price: "275 000", time: "45 daq", tag: null,
    img: "https://images.unsplash.com/photo-1608835291093-394b0c943a75?w=600&q=80&auto=format&fit=crop",
  },
  // SEAFOOD
  {
    id: 7, category: "seafood",
    name: "Losos Steak",
    subtitle: "Sitrus, ukrop sousi va kappers",
    price: "210 000", time: "25 daq", tag: "Yangi",
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 8, category: "seafood",
    name: "Karides Scampi",
    subtitle: "Sarımsaqli yog', limon, petruşka",
    price: "175 000", time: "20 daq", tag: null,
    img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 9, category: "seafood",
    name: "Ahtapot Grili",
    subtitle: "Zeytun yog'i, paprika, limon",
    price: "230 000", time: "30 daq", tag: "Chef's Pick",
    img: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 10, category: "seafood",
    name: "Tuna Tartare",
    subtitle: "Avokado, sezam moyi, mikro ko'katlar",
    price: "255 000", time: "15 daq", tag: "Premium",
    img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 11, category: "seafood",
    name: "Moules Marinière",
    subtitle: "Oq sharob, sarımsaq, krem",
    price: "160 000", time: "20 daq", tag: null,
    img: "https://images.unsplash.com/photo-1594672757169-0b3c5cf45a30?w=600&q=80&auto=format&fit=crop",
  },
  // SOUPS
  {
    id: 12, category: "soup",
    name: "French Onion Soup",
    subtitle: "Gruyere pishloq, krizton",
    price: "85 000", time: "20 daq", tag: null,
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 13, category: "soup",
    name: "Tom Kha Gai",
    subtitle: "Kokos suti, limongrass, galangal",
    price: "95 000", time: "25 daq", tag: "Mashhur",
    img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 14, category: "soup",
    name: "Lobster Bisque",
    subtitle: "Krem sousi, konyak, chive",
    price: "145 000", time: "30 daq", tag: "Premium",
    img: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 15, category: "soup",
    name: "Minestrone",
    subtitle: "Mavsumiy sabzavotlar, basil pesto",
    price: "75 000", time: "20 daq", tag: null,
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80&auto=format&fit=crop",
  },
  // SALADS
  {
    id: 16, category: "salad",
    name: "Caesar Royale",
    subtitle: "Anchous, parmesan, brioche kriztonlar",
    price: "95 000", time: "10 daq", tag: null,
    img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 17, category: "salad",
    name: "Niçoise",
    subtitle: "Tuna, zaytun, qaynatilgan tuxum",
    price: "110 000", time: "15 daq", tag: "Yangi",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 18, category: "salad",
    name: "Burrata & Shaftoli",
    subtitle: "Prosciutto, arugula, balzamik",
    price: "130 000", time: "10 daq", tag: "Chef's Pick",
    img: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&q=80&auto=format&fit=crop",
  },
  // DESSERTS
  {
    id: 19, category: "desserts",
    name: "Crème Brûlée",
    subtitle: "Bourbon vanil, karamel qobiq",
    price: "95 000", time: "15 daq", tag: "Top",
    img: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 20, category: "desserts",
    name: "Tiramisu",
    subtitle: "Espresso, maskarpone, kakao",
    price: "85 000", time: "10 daq", tag: null,
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 21, category: "desserts",
    name: "Chocolate Fondant",
    subtitle: "70% kakao, vanil muzqaymoq",
    price: "110 000", time: "12 daq", tag: "Mashhur",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 22, category: "desserts",
    name: "Panna Cotta",
    subtitle: "Qulupnay koulis, nana",
    price: "75 000", time: "10 daq", tag: null,
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 23, category: "desserts",
    name: "Tarte Tatin",
    subtitle: "Karamelizatsiya olma, creme fraiche",
    price: "90 000", time: "15 daq", tag: null,
    img: "https://images.unsplash.com/photo-1562007908-17c67e878c88?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 24, category: "desserts",
    name: "Macaron Tower",
    subtitle: "12 xil ta'm, Parijdan ilhom",
    price: "145 000", time: "5 daq", tag: "Premium",
    img: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&q=80&auto=format&fit=crop",
  },
  // DRINKS
  {
    id: 25, category: "drinks",
    name: "Espresso Martini",
    subtitle: "Vodka, Kahlua, triple espresso",
    price: "110 000", time: "8 daq", tag: "Mashhur",
    img: "https://images.unsplash.com/photo-1621243804936-775306a8f2e3?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 26, category: "drinks",
    name: "Roz Sharob",
    subtitle: "Chateau d'Esclans, Provence 2022",
    price: "120 000", time: "3 daq", tag: "Premium",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 27, category: "drinks",
    name: "Negroni Sbagliato",
    subtitle: "Campari, prosecco, apelsin zesti",
    price: "105 000", time: "5 daq", tag: null,
    img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 28, category: "drinks",
    name: "Yuzu Lemonade",
    subtitle: "Taza yuzu, nana, gaz suv",
    price: "65 000", time: "5 daq", tag: "Yangi",
    img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 29, category: "drinks",
    name: "Matcha Latte",
    subtitle: "Ceremonial daraja matcha, sut kopigi",
    price: "75 000", time: "7 daq", tag: null,
    img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 30, category: "drinks",
    name: "Cold Brew Tonic",
    subtitle: "24 soatlik ekstrakt, tonic, limon",
    price: "70 000", time: "3 daq", tag: null,
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80&auto=format&fit=crop",
  },
]

const TAG_COLORS = {
  "Ekskluziv":   { bg: "rgba(97,33,15,0.88)",  color: "#FDF0D5" },
  "Chef's Pick": { bg: "rgba(120,70,20,0.85)", color: "#FDF0D5" },
  "Premium":     { bg: "rgba(20,12,4,0.80)",   color: "#FDF0D5" },
  "Yangi":       { bg: "rgba(55,110,55,0.82)", color: "#fff"    },
  "Mashhur":     { bg: "rgba(180,110,20,0.88)",color: "#fff"    },
  "Top":         { bg: "rgba(97,33,15,0.78)",  color: "#FDF0D5" },
}

export default function IntroPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [cart, setCart] = useState({})
  const [imgErr, setImgErr] = useState({})

  const filtered = activeCategory === "all" ? menuItems : menuItems.filter(i => i.category === activeCategory)
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0)

  const add = (id) => setCart(p => ({ ...p, [id]: (p[id] || 0) + 1 }))
  const remove = (id) => setCart(p => {
    if (!p[id] || p[id] <= 1) { const n = { ...p }; delete n[id]; return n }
    return { ...p, [id]: p[id] - 1 }
  })

  return (
    <div style={{ minHeight: "100vh", background: "#FDF0D5", fontFamily: "'Cormorant Garamond', Georgia, serif", position: "relative", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Lato:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cat-pill {
          cursor: pointer; border: none; outline: none;
          padding: 10px 22px; border-radius: 100px;
          font-family: 'Lato', sans-serif; font-size: 10.5px;
          letter-spacing: 2px; text-transform: uppercase; font-weight: 400;
          transition: all 0.26s ease; white-space: nowrap; flex-shrink: 0;
        }
        .cat-active { background: #61210F; color: #FDF0D5; border: 1px solid #61210F; }
        .cat-inactive { background: transparent; color: rgba(97,33,15,0.55); border: 1px solid rgba(97,33,15,0.2); }
        .cat-inactive:hover { border-color: rgba(97,33,15,0.5); color: #61210F; }

        .mcard {
          background: #fffaf0;
          border: 1px solid rgba(97,33,15,0.09);
          border-radius: 16px; overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform 0.32s cubic-bezier(.4,0,.2,1), box-shadow 0.32s ease;
          animation: fadeUp 0.42s ease both;
        }
        .mcard:hover { transform: translateY(-7px); box-shadow: 0 22px 55px rgba(97,33,15,0.12); }

        .cimg { position: relative; overflow: hidden; height: 195px; flex-shrink: 0; }
        .cimg img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
        .mcard:hover .cimg img { transform: scale(1.07); }
        .cimg-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 45%, rgba(15,5,0,0.5) 100%); }

        .cbody { padding: 18px 18px 16px; display: flex; flex-direction: column; flex: 1; gap: 10px; }

        .addbtn {
          width: 35px; height: 35px; border-radius: 50%;
          border: 1.5px solid rgba(97,33,15,0.28); background: transparent;
          color: #61210F; font-size: 20px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s ease; flex-shrink: 0; line-height: 1;
        }
        .addbtn:hover { background: #61210F; color: #FDF0D5; border-color: #61210F; }
        .qbtn {
          width: 30px; height: 30px; border-radius: 50%;
          border: 1px solid rgba(97,33,15,0.25); background: transparent;
          color: #61210F; font-size: 16px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s; flex-shrink: 0;
        }
        .qbtn:hover { background: #61210F; color: #FDF0D5; }

        .cart-bar {
          position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
          background: #61210F; color: #FDF0D5;
          padding: 13px 30px; border-radius: 100px;
          display: flex; align-items: center; gap: 14px;
          box-shadow: 0 10px 40px rgba(97,33,15,0.4);
          animation: slideUp 0.38s ease;
          z-index: 1000; white-space: nowrap;
          font-family: 'Lato'; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase;
        }
        .cbadge {
          background: #FDF0D5; color: #61210F;
          width: 24px; height: 24px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px;
        }

        @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideUp { from { opacity:0; transform:translateX(-50%) translateY(16px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }

        .grid { display: grid; gap: 16px; grid-template-columns: repeat(4,1fr); }
        @media(max-width:1200px){ .grid{grid-template-columns:repeat(3,1fr);} }
        @media(max-width:820px) { .grid{grid-template-columns:repeat(2,1fr);} .cimg{height:165px;} }
        @media(max-width:500px) { .grid{grid-template-columns:1fr;} .cimg{height:200px;} }

        .cats { display:flex; gap:8px; flex-wrap:wrap; justify-content:center; }
        @media(max-width:640px){
          .cats { flex-wrap:nowrap; overflow-x:auto; justify-content:flex-start; padding-bottom:4px; -webkit-overflow-scrolling:touch; }
          .cats::-webkit-scrollbar { display:none; }
        }

        .wrap { max-width:1340px; margin:0 auto; padding:52px 18px 110px; }
        @media(max-width:500px){ .wrap{padding:32px 12px 96px;} }

        .htitle { font-size: clamp(50px,8vw,94px); }
      `}</style>

      {/* bg decorations */}
      <div style={{position:"fixed",top:-160,right:-160,width:440,height:440,borderRadius:"50%",border:"1px solid rgba(97,33,15,0.07)",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"fixed",bottom:-120,left:-120,width:360,height:360,borderRadius:"50%",border:"1px solid rgba(97,33,15,0.06)",pointerEvents:"none",zIndex:0}}/>

      <div className="wrap" style={{position:"relative",zIndex:1}}>

        {/* HEADER */}
        <div style={{textAlign:"center",marginBottom:52}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:14,marginBottom:20,opacity:0.4}}>
            <div style={{width:44,height:1,background:"#61210F"}}/>
            <span style={{fontFamily:"'Lato'",fontSize:10,letterSpacing:4,color:"#61210F",textTransform:"uppercase"}}>Bizning Menyu</span>
            <div style={{width:44,height:1,background:"#61210F"}}/>
          </div>
          <h1 className="htitle" style={{fontWeight:300,color:"#61210F",lineHeight:1,letterSpacing:"-1.5px",marginBottom:14}}>
            Xon Atlas
          </h1>
          <p style={{fontStyle:"italic",fontSize:17,color:"rgba(97,33,15,0.48)",fontWeight:300}}>
            Har bir taom — bir hikoya
          </p>
        </div>

        {/* CATEGORIES */}
        <div className="cats" style={{marginBottom:42}}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`cat-pill ${activeCategory === cat.id ? "cat-active" : "cat-inactive"}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* COUNT */}
        <div style={{fontFamily:"'Lato'",fontSize:10,letterSpacing:2,color:"rgba(97,33,15,0.3)",textTransform:"uppercase",marginBottom:20,textAlign:"right"}}>
          {filtered.length} ta taom
        </div>

        {/* GRID */}
        <div className="grid">
          {filtered.map((item, idx) => {
            const qty = cart[item.id] || 0
            const ts = TAG_COLORS[item.tag] || {}
            return (
              <div key={item.id} className="mcard" style={{animationDelay:`${(idx % 12) * 0.055}s`}}>

                {/* image */}
                <div className="cimg">
                  {!imgErr[item.id] ? (
                    <img
                      src={item.img} alt={item.name} loading="lazy"
                      onError={() => setImgErr(p => ({ ...p, [item.id]: true }))}
                    />
                  ) : (
                    <div style={{width:"100%",height:"100%",background:"rgba(97,33,15,0.07)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <span style={{fontSize:52,opacity:0.25}}>🍽</span>
                    </div>
                  )}
                  <div className="cimg-overlay"/>
                  {item.tag && (
                    <div style={{
                      position:"absolute",top:11,left:11,
                      padding:"4px 11px",borderRadius:100,
                      fontFamily:"'Lato'",fontSize:9,letterSpacing:1.8,textTransform:"uppercase",
                      background: ts.bg || "rgba(97,33,15,0.8)", color: ts.color || "#FDF0D5",
                    }}>{item.tag}</div>
                  )}
                </div>

                {/* body */}
                <div className="cbody">
                  <div style={{flex:1}}>
                    <h3 style={{fontSize:19,fontWeight:500,color:"#61210F",lineHeight:1.2,marginBottom:4,letterSpacing:"-0.2px"}}>
                      {item.name}
                    </h3>
                    <p style={{fontStyle:"italic",fontSize:12.5,color:"rgba(97,33,15,0.48)",fontWeight:300,lineHeight:1.5}}>
                      {item.subtitle}
                    </p>
                  </div>

                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:6}}>
                    <div>
                      <div style={{fontSize:17,fontWeight:600,color:"#61210F",letterSpacing:"-0.3px",lineHeight:1}}>
                        {item.price}
                        <span style={{fontSize:10.5,fontWeight:300,opacity:0.5,marginLeft:3}}>so'm</span>
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:4,marginTop:4,fontFamily:"'Lato'",fontSize:10,color:"rgba(97,33,15,0.38)",letterSpacing:0.8}}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                        </svg>
                        {item.time}
                      </div>
                    </div>

                    {qty === 0 ? (
                      <button className="addbtn" onClick={() => add(item.id)}>+</button>
                    ) : (
                      <div style={{display:"flex",alignItems:"center",gap:8}}>
                        <button className="qbtn" onClick={() => remove(item.id)}>−</button>
                        <span style={{fontFamily:"'Lato'",fontSize:13,color:"#61210F",minWidth:16,textAlign:"center"}}>{qty}</span>
                        <button className="qbtn" onClick={() => add(item.id)}>+</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* footer */}
        <div style={{textAlign:"center",marginTop:64,display:"flex",alignItems:"center",justifyContent:"center",gap:18}}>
          <div style={{width:56,height:1,background:"rgba(97,33,15,0.13)"}}/>
          <span style={{fontStyle:"italic",color:"rgba(97,33,15,0.28)",fontSize:13,fontWeight:300}}>
            Allergik mahsulotlar haqida so'rang
          </span>
          <div style={{width:56,height:1,background:"rgba(97,33,15,0.13)"}}/>
        </div>
      </div>

      {/* CART BAR */}
      {totalItems > 0 && (
        <div className="cart-bar">
          <div className="cbadge">{totalItems}</div>
          Savatcha ko'rish
          <span style={{opacity:0.6}}>→</span>
        </div>
      )}
    </div>
  )
}