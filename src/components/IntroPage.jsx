import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Users, CheckCircle, ChevronRight, Phone, Mail } from 'lucide-react';

const IntroPage = () => {
  const [lang, setLang] = useState('UZ');
  const [activeYear, setActiveYear] = useState(2024);

  const content = {
    UZ: {
      production: {
        title: "ISHLAB CHIQARISH",
        subtitle: "Zamonaviy texnologiyalar markazi",
        location: "Toshkent, O'zbekiston",
        desc: "15,000 m² zamonaviy ishlab chiqarish korxonasi. Xalqaro GMP standartlariga muvofiq jihozlangan. Kuniga 50 tonna mahsulot ishlab chiqarish quvvati.",
        features: [
          { title: "GMP Sertifikatlangan", value: "ISO 22000" },
          { title: "Ishlab chiqarish quvvati", value: "50t/kun" },
          { title: "Sifat nazorati", value: "100%" },
          { title: "Avtomatlashtirish", value: "95%" }
        ]
      },
      history: {
        title: "BIZNING TARIXMIZ",
        subtitle: "9 yillik muvaffaqiyat yo'li",
        timeline: [
          { year: 2015, event: "Kompaniya tashkil etildi", detail: "Kichik ustaxona, 3 xodim, birinchi mahsulot" },
          { year: 2017, event: "Birinchi fabrika ochildi", detail: "1,000 m² ishlab chiqarish maydoni" },
          { year: 2019, event: "ISO sertifikati olindi", detail: "Xalqaro standartlar tasdiqlandi" },
          { year: 2021, event: "Eksport boshlandi", detail: "MDH davlatlariga yetkazib berish" },
          { year: 2023, event: "Yangi texnologiyalar", detail: "Avtomatlashtirilgan liniyalar" },
          { year: 2024, event: "10+ filial", detail: "O'zbekiston bo'ylab kengayish" }
        ]
      },
      products: {
        title: "MAHSULOTLAR",
        subtitle: "Premium sifat, keng tanlov",
        categories: [
          {
            name: "KLASSIK",
            count: "15+",
            items: ["Olcha", "Apelsin", "Limon", "Qulupnay", "Olma"],
            image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&q=80"
          },
          {
            name: "PREMIUM",
            count: "10+",
            items: ["Aralash mevali", "Tropical", "Berry Mix", "Exotic"],
            image: "https://images.unsplash.com/photo-1587228539968-4d4dfe1c5f39?w=600&q=80"
          },
          {
            name: "FUNKTSIONAL",
            count: "8+",
            items: ["Vitamin C", "Probiotik", "Energetik", "Immuno"],
            image: "https://images.unsplash.com/photo-1587049352846-4a222e784588?w=600&q=80"
          }
        ]
      },
      branches: {
        title: "FILIALLARIMIZ",
        subtitle: "O'zbekiston bo'ylab",
        locations: [
          { city: "Toshkent", address: "Amir Temur ko'chasi 15", phone: "+998 71 123 45 67", type: "Bosh ofis" },
          { city: "Samarqand", address: "Registon maydoni 7", phone: "+998 66 234 56 78", type: "Filial" },
          { city: "Buxoro", address: "Ark ko'chasi 22", phone: "+998 65 345 67 89", type: "Filial" },
          { city: "Farg'ona", address: "Mustaqillik 45", phone: "+998 73 456 78 90", type: "Filial" },
          { city: "Namangan", address: "Ipak yo'li 88", phone: "+998 69 567 89 01", type: "Filial" },
          { city: "Andijon", address: "Navoi 33", phone: "+998 74 678 90 12", type: "Filial" }
        ]
      }
    },
    RU: {
      production: {
        title: "ПРОИЗВОДСТВО",
        subtitle: "Центр современных технологий",
        location: "Ташкент, Узбекистан",
        desc: "Современное производственное предприятие площадью 15,000 м². Оборудовано согласно международным стандартам GMP. Производственная мощность 50 тонн в день.",
        features: [
          { title: "GMP Сертифицировано", value: "ISO 22000" },
          { title: "Мощность производства", value: "50т/день" },
          { title: "Контроль качества", value: "100%" },
          { title: "Автоматизация", value: "95%" }
        ]
      },
      history: {
        title: "НАША ИСТОРИЯ",
        subtitle: "9 лет успеха",
        timeline: [
          { year: 2015, event: "Основание компании", detail: "Небольшая мастерская, 3 сотрудника" },
          { year: 2017, event: "Первый завод", detail: "1,000 м² производственной площади" },
          { year: 2019, event: "ISO сертификат", detail: "Международные стандарты подтверждены" },
          { year: 2021, event: "Начало экспорта", detail: "Поставки в страны СНГ" },
          { year: 2023, event: "Новые технологии", detail: "Автоматизированные линии" },
          { year: 2024, event: "10+ филиалов", detail: "Расширение по Узбекистану" }
        ]
      },
      products: {
        title: "ПРОДУКТЫ",
        subtitle: "Премиум качество, широкий выбор",
        categories: [
          {
            name: "КЛАССИКА",
            count: "15+",
            items: ["Вишня", "Апельсин", "Лимон", "Клубника", "Яблоко"],
            image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&q=80"
          },
          {
            name: "ПРЕМИУМ",
            count: "10+",
            items: ["Микс фруктов", "Тропик", "Ягодный", "Экзотик"],
            image: "https://images.unsplash.com/photo-1587228539968-4d4dfe1c5f39?w=600&q=80"
          },
          {
            name: "ФУНКЦИОНАЛЬНЫЕ",
            count: "8+",
            items: ["Витамин C", "Пробиотик", "Энергия", "Иммуно"],
            image: "https://images.unsplash.com/photo-1587049352846-4a222e784588?w=600&q=80"
          }
        ]
      },
      branches: {
        title: "НАШИ ФИЛИАЛЫ",
        subtitle: "По всему Узбекистану",
        locations: [
          { city: "Ташкент", address: "ул. Амира Темура 15", phone: "+998 71 123 45 67", type: "Главный офис" },
          { city: "Самарканд", address: "площадь Регистан 7", phone: "+998 66 234 56 78", type: "Филиал" },
          { city: "Бухара", address: "ул. Арк 22", phone: "+998 65 345 67 89", type: "Филиал" },
          { city: "Фергана", address: "Мустакиллик 45", phone: "+998 73 456 78 90", type: "Филиал" },
          { city: "Наманган", address: "Ипак йули 88", phone: "+998 69 567 89 01", type: "Филиал" },
          { city: "Андижан", address: "Навои 33", phone: "+998 74 678 90 12", type: "Филиал" }
        ]
      }
    },
    EN: {
      production: {
        title: "PRODUCTION",
        subtitle: "Modern technology center",
        location: "Tashkent, Uzbekistan",
        desc: "15,000 m² modern production facility. Equipped according to international GMP standards. Production capacity of 50 tons per day.",
        features: [
          { title: "GMP Certified", value: "ISO 22000" },
          { title: "Production capacity", value: "50t/day" },
          { title: "Quality control", value: "100%" },
          { title: "Automation", value: "95%" }
        ]
      },
      history: {
        title: "OUR HISTORY",
        subtitle: "9 years of success",
        timeline: [
          { year: 2015, event: "Company founded", detail: "Small workshop, 3 employees" },
          { year: 2017, event: "First factory opened", detail: "1,000 m² production area" },
          { year: 2019, event: "ISO certificate", detail: "International standards confirmed" },
          { year: 2021, event: "Export started", detail: "Delivery to CIS countries" },
          { year: 2023, event: "New technologies", detail: "Automated production lines" },
          { year: 2024, event: "10+ branches", detail: "Expansion across Uzbekistan" }
        ]
      },
      products: {
        title: "PRODUCTS",
        subtitle: "Premium quality, wide selection",
        categories: [
          {
            name: "CLASSIC",
            count: "15+",
            items: ["Cherry", "Orange", "Lemon", "Strawberry", "Apple"],
            image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&q=80"
          },
          {
            name: "PREMIUM",
            count: "10+",
            items: ["Mixed Fruits", "Tropical", "Berry Mix", "Exotic"],
            image: "https://images.unsplash.com/photo-1587228539968-4d4dfe1c5f39?w=600&q=80"
          },
          {
            name: "FUNCTIONAL",
            count: "8+",
            items: ["Vitamin C", "Probiotic", "Energy", "Immune"],
            image: "https://images.unsplash.com/photo-1587049352846-4a222e784588?w=600&q=80"
          }
        ]
      },
      branches: {
        title: "OUR BRANCHES",
        subtitle: "Across Uzbekistan",
        locations: [
          { city: "Tashkent", address: "Amir Temur St. 15", phone: "+998 71 123 45 67", type: "Head Office" },
          { city: "Samarkand", address: "Registan Square 7", phone: "+998 66 234 56 78", type: "Branch" },
          { city: "Bukhara", address: "Ark St. 22", phone: "+998 65 345 67 89", type: "Branch" },
          { city: "Fergana", address: "Mustaqillik 45", phone: "+998 73 456 78 90", type: "Branch" },
          { city: "Namangan", address: "Ipak Yoli 88", phone: "+998 69 567 89 01", type: "Branch" },
          { city: "Andijan", address: "Navoi 33", phone: "+998 74 678 90 12", type: "Branch" }
        ]
      }
    }
  };

  const t = content[lang];

  return (
    <div className="bg-[#0A0A0A] text-[#E8E8E8]">
      
      {/* PRODUCTION SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-[#121212] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=85"
                alt="Production facility"
                className="w-full h-full object-cover grayscale opacity-70 hover:opacity-90 transition-opacity duration-500"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-sm p-6 border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                {t.production.features.map((feat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-black text-white mb-1">{feat.value}</div>
                    <div className="text-[11px] text-gray-400 tracking-wide">{feat.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-white" />
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gray-500">
                  {t.production.subtitle}
                </span>
              </div>
              
              <h2 className="text-[48px] md:text-[64px] font-black tracking-tight mb-6">
                {t.production.title}
              </h2>

              <div className="flex items-center gap-2 mb-6 text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">{t.production.location}</span>
              </div>

              <p className="text-[15px] leading-relaxed text-gray-400">
                {t.production.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              {['GMP Certified Facility', 'Laboratory Quality Control', 'Automated Production Lines'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-white" />
                  <span className="text-[14px]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HISTORY SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 py-24 md:py-32 border-t border-white/[0.06]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[48px] md:text-[64px] font-black tracking-tight mb-2">
            {t.history.title}
          </h2>
          <p className="text-lg text-gray-400">{t.history.subtitle}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {t.history.timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year Circle */}
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2">
                  <button
                    onClick={() => setActiveYear(item.year)}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-sm transition-all ${
                      activeYear === item.year
                        ? 'bg-white text-black border-white scale-110'
                        : 'bg-[#0A0A0A] text-white border-white/20 hover:border-white/40'
                    }`}
                  >
                    {item.year.toString().slice(-2)}
                  </button>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'} pl-16 md:pl-0`}>
                  <div className="inline-block bg-[#121212] p-6 border border-white/10">
                    <div className="text-sm font-bold text-gray-500 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                    <p className="text-sm text-gray-400">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 py-24 md:py-32 border-t border-white/[0.06]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[48px] md:text-[64px] font-black tracking-tight mb-2">
            {t.products.title}
          </h2>
          <p className="text-lg text-gray-400">{t.products.subtitle}</p>
        </motion.div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.products.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-square bg-[#121212] mb-6 overflow-hidden relative">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                
                {/* Count Badge */}
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm px-4 py-2 border border-white/20">
                  <span className="text-2xl font-black">{category.count}</span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black tracking-tight group-hover:text-white transition-colors">
                  {category.name}
                </h3>

                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1 h-1 bg-white" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="group/btn flex items-center gap-2 text-sm font-bold text-white hover:gap-4 transition-all">
                  {lang === 'UZ' ? 'BATAFSIL' : lang === 'RU' ? 'ПОДРОБНЕЕ' : 'VIEW MORE'}
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BRANCHES SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 py-24 md:py-32 border-t border-white/[0.06]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[48px] md:text-[64px] font-black tracking-tight mb-2">
            {t.branches.title}
          </h2>
          <p className="text-lg text-gray-400">{t.branches.subtitle}</p>
        </motion.div>

        {/* Branches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.branches.locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#121212] p-8 border border-white/10 hover:border-white/20 transition-all group"
            >
              {/* Type Badge */}
              <div className={`inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-wider ${
                location.type.includes('Bosh') || location.type.includes('Главный') || location.type.includes('Head')
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white'
              }`}>
                {location.type}
              </div>

              {/* City */}
              <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">
                {location.city}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3 mb-4 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">{location.address}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-gray-400 mb-6">
                <Phone size={16} />
                <span className="text-sm font-mono">{location.phone}</span>
              </div>

              {/* CTA */}
              <button className="w-full py-3 border border-white/20 text-sm font-bold tracking-wide hover:bg-white hover:text-black transition-all">
                {lang === 'UZ' ? 'YO\'NALISH OLISH' : lang === 'RU' ? 'ПОЛУЧИТЬ МАРШРУТ' : 'GET DIRECTIONS'}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default IntroPage;