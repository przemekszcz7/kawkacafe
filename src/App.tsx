/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Coffee,
  Heart,
  Camera,
  Star,
  Quote
} from "lucide-react";

const IMAGES = [
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/500781122_122094947750895442_1019933273630624304_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=2a1932&_nc_ohc=frwo_aUpcJoQ7kNvwERw51P&_nc_oc=Adp8pM0X1GAUPXHnXz4f4odYGhHc21F_8eG0OdQ4Q1fIg13ORcCZGv5oZz40X4ZKmy0&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=nMFMia4kqWz8FUli65zK8w&_nc_ss=7b2a8&oh=00_Af2lhuH_NE3cFY7n8SknuzptonkXrK9g0kU-GquEz1ISPg&oe=69F524B9",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/516192005_122120066402895442_5230176665853330905_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=sBsxlb0mE20Q7kNvwGhrDVZ&_nc_oc=AdoB-BjMPLLaLjkWbNdAAlzrSiaiwEpsB89uzJGrj524HJ5-XY5vQnAMKvmvMBdfV6Y&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Ulw8tmGV79xFHIFnpTVQpA&_nc_ss=7b2a8&oh=00_Af2bAdn0bCmULEff2JkupUAPsc_RoeZvyYEBUdUIRTVMOw&oe=69F5498D",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/509144150_122115052178895442_4964595068503369752_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=eBmdCP94hQkQ7kNvwFiXv4i&_nc_oc=AdqFTIyIo_nq4oF61hdjFALvzvz5KnOh7qhE09MlUqRgFhzbOz6aJLKSMYJPd10xh4M&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=UlmMM4GqrRTM5M7xil2CBw&_nc_ss=7b2a8&oh=00_Af3IVSrtwAxAGR3ycsMwQcYzFgUzIV0MQqJuT0CaMi0Kjg&oe=69F53665",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/509325909_122115052124895442_8947502840260286700_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=p_h6QNuwDv8Q7kNvwH8ZEru&_nc_oc=AdpRrN8eebImR_QZBGJ7Et2I2desgKCudNqyh1hvAq7L7nkWS3dAaB_vnbAQoceRVfc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=R5VhgGRPkCecFBWzh_ycag&_nc_ss=7b2a8&oh=00_Af2_aVmT8pX1dO3EXtyN211WjGzkG1zDC50ovYF_-Quqsw&oe=69F545C3",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/510985260_122115052112895442_7526153533955864411_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=jvzIORZjYXQQ7kNvwHDx_yx&_nc_oc=AdqyXkW_ra7Z6XJbNr8jlFJ_jMuBARc1kA2N3IUjJT1nOI2WAWHinXD9ZY-V92WdCLs&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=5POXii6VHyaSEdsso25n6A&_nc_ss=7b2a8&oh=00_Af3K9k-V5Ej5RqPySzcIlLYlfics7Rpci261ib9kzxuOJw&oe=69F53B3A",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/499860471_122095612472895442_5371722646204166159_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=uOKURCJHScUQ7kNvwGH42kH&_nc_oc=Adom6I-iM_GZau86jYWYnqwFHdK_9Gh1wkSGbCrhAFAszRVwe-t75flJKdp56k0f7-s&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=z0n7dAyHKX94d0YhDUNfbQ&_nc_ss=7b2a8&oh=00_Af1zEYvWRrnGAZCWcmMqqMv99sfnxFe0XQ5l04DdYCDvMQ&oe=69F53319"
];

export default function App() {
  const hours = [
    { day: "Poniedziałek", time: "ZAMKNIĘTE", closed: true },
    { day: "Wtorek", time: "10:00 - 20:00" },
    { day: "Środa", time: "10:00 - 20:00" },
    { day: "Czwartek", time: "10:00 - 20:00" },
    { day: "Piątek", time: "10:00 - 20:00" },
    { day: "Sobota", time: "10:00 - 20:00" },
    { day: "Niedziela", time: "10:00 - 20:00" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2A241E] font-sans selection:bg-[#EAE1D3] selection:text-[#2A241E]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFCFB]/90 backdrop-blur-xl border-b border-[#F2EDE7] px-6 md:px-12 py-5">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-xl font-serif font-semibold tracking-wide uppercase">
              Kawka <span className="font-script lowercase tracking-normal normal-case text-2xl -ml-1">Cafe</span>
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-12 text-[13px] font-medium uppercase tracking-[0.2em] text-[#63594F]">
            <a href="#o-nas" className="hover:text-[#3D2E24] transition-colors">O nas</a>
            <a href="#galeria" className="hover:text-[#3D2E24] transition-colors">Galeria</a>
            <a href="#godziny" className="hover:text-[#3D2E24] transition-colors">Odwiedź nas</a>
            <a href="#kontakt" className="hover:text-[#3D2E24] transition-colors">Kontakt</a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61576863264646"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-[#F2EDE7] hover:bg-[#F2EDE7] transition-all"
            >
              <Facebook className="w-4 h-4 text-[#3D2E24]" />
            </a>
            <a 
              href="tel:669858119"
              className="bg-[#3D2E24] text-[#FDFCFB] px-6 py-3 rounded-full text-[13px] font-semibold uppercase tracking-wider hover:bg-[#523F32] transition-all shadow-sm"
            >
              Zadzwoń
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src={IMAGES[0]} 
              alt="Kawka Cafe Interior" 
              className="w-full h-full object-cover brightness-[0.85] grayscale-[0.2]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2A241E]/40 via-transparent to-[#FDFCFB]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="inline-block text-[#FDFCFB] text-[13px] font-semibold tracking-[0.3em] uppercase mb-8 drop-shadow-sm">
              Wambierzyce • Plac NMP 5
            </span>
            <h1 className="text-6xl md:text-9xl font-serif font-light mb-10 tracking-tight text-white leading-[0.9]">
              Kawka <br />
              <motion.span 
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [-1, 1, -1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="font-script font-normal lowercase tracking-normal text-7xl md:text-[0.7em] block md:inline-block -mt-4 md:mt-0"
              >
                Cafe.
              </motion.span>
            </h1>
            <p className="text-lg md:text-xl font-serif italic leading-relaxed mb-12 text-[#FDFCFB] max-w-2xl mx-auto opacity-90">
              "Mała kawiarnia z duszą u stóp bazyliki w Wambierzycach. <br className="hidden md:block" />
              Poczuj się jak w domu."
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#o-nas"
                className="w-full sm:w-auto bg-[#FDFCFB] text-[#3D2E24] px-10 py-5 rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-[#EAE1D3] transition-all shadow-2xl"
              >
                Nasza Historia
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, bg: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.98 }}
                href="#kontakt" 
                className="w-full sm:w-auto bg-transparent border border-white/40 text-white px-10 py-5 rounded-full font-semibold uppercase tracking-widest text-xs backdrop-blur-md transition-all"
              >
                Odwiedź nas
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* About Section - Editorial Style */}
      <section id="o-nas" className="py-32 px-6 bg-[#FDFCFB]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 }
                  }
                }}
              >
                <motion.div 
                  variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="h-[1px] w-12 bg-[#3D2E24]"></div>
                  <span className="text-[#3D2E24] font-medium uppercase tracking-[0.3em] text-[11px]">Nasza Filozofia</span>
                </motion.div>
                <motion.h2 
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  className="text-5xl md:text-7xl font-serif font-light mb-10 leading-[1.1] tracking-tighter"
                >
                  Miejsce spotkań, <br />
                  <span className="italic whitespace-nowrap">kawy i duszy</span>
                </motion.h2>
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  className="space-y-8 text-[#5C5248] text-lg leading-relaxed font-light"
                >
                  <p>
                    W cieniu monumentalnej bazyliki wambierzyckiej, stworzyliśmy azyl, gdzie czas zdaje się zwalniać. Nasza kawiarnia to nie tylko budynek – to serce tętniące pasją do doskonałych ziaren i domowej gościnności.
                  </p>
                  <p>
                    Wierzymy w proste przyjemności. Zapach świeżo mielonej kawy, ciepło pieczonego ciasta i uśmiech, który sprawia, że nasi goście czują się, jakby odwiedzali starych przyjaciół.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
                  className="mt-12 p-8 border border-[#F2EDE7] rounded-3xl bg-[#F9F7F5]"
                >
                  <Quote className="w-10 h-10 text-[#3D2E24]/20 mb-6" />
                  <p className="text-2xl font-serif italic text-[#3D2E24]">
                    "Najlepsze rozmowy odbywają się przy filiżance dobrej kawy."
                  </p>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 gap-6 pt-12">
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                whileHover={{ y: -5 }}
                className="col-span-1 rounded-[4rem] overflow-hidden aspect-[3/4] shadow-2xl"
              >
                <img src={IMAGES[1]} alt="Interior" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" referrerPolicy="no-referrer" />
              </motion.div>
              <div className="space-y-6 pt-12">
                 <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                  className="rounded-[4rem] overflow-hidden aspect-square shadow-xl"
                >
                  <img src={IMAGES[2]} alt="Coffee" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="rounded-[4rem] overflow-hidden aspect-[4/5] shadow-xl"
                >
                  <img src={IMAGES[3]} alt="Details" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" referrerPolicy="no-referrer" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Minimal Grid */}
      <section id="galeria" className="py-32 px-6 bg-[#2A241E] text-[#FDFCFB]">
        <div className="max-w-[1400px] mx-auto text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#EAE1D3]/60 font-medium uppercase tracking-[0.4em] text-[10px] block mb-6"
          >
            Wizualna Podróż
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-serif font-light tracking-tight"
          >
            Esencja Kawki
          </motion.h2>
        </div>
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="md:col-span-2 md:row-span-2 aspect-square md:aspect-auto rounded-[3rem] overflow-hidden group relative"
          >
            <img 
              src={IMAGES[4]} 
              alt="Gallery" 
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-8 bottom-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
               <p className="text-sm font-medium tracking-widest uppercase">Atmosfera</p>
            </div>
          </motion.div>
          {[IMAGES[5], IMAGES[1], IMAGES[0]].map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              whileHover={{ y: -10 }}
              className={`${i === 2 ? 'md:col-span-2 aspect-video md:aspect-auto' : 'aspect-square'} rounded-[3rem] overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 shadow-lg group`}
            >
              <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Visit Us - Info & Map */}
      <section id="godziny" className="py-32 px-6 bg-[#FDFCFB]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Info Card - Dark Editorial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
              className="bg-[#3D2E24] p-12 md:p-16 rounded-[4rem] text-[#FDFCFB] shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                   <motion.div 
                     animate={{ rotate: [0, 5, -5, 0] }}
                     transition={{ duration: 4, repeat: Infinity }}
                     className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20"
                   >
                     <Clock className="w-6 h-6" />
                   </motion.div>
                   <h2 className="text-3xl font-serif font-light">Kiedy nas odwiedzić?</h2>
                </div>
                
                <div className="space-y-6">
                  {hours.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="flex justify-between items-center py-2 border-b border-white/10 last:border-0 group"
                    >
                      <span className="text-[15px] font-medium text-white/70 group-hover:text-white transition-colors uppercase tracking-widest">{item.day}</span>
                      <span className={`text-lg transition-all ${item.closed ? 'text-white/40 italic font-serif' : 'font-serif'}`}>
                        {item.time}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-white/10">
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Lokalizacja</p>
                    <p className="font-serif italic text-lg hover:text-white transition-colors">Plac Najświętszej Marii Panny 5, Wambierzyce</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Kontakt</p>
                    <a href="tel:669858119" className="font-serif italic text-lg hover:text-white transition-colors block">+48 669 858 119</a>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <motion.div
                  animate={{ 
                    rotate: [12, 15, 12],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Coffee className="w-64 h-64" />
                </motion.div>
              </div>
            </motion.div>

            {/* Map - Integrated Seamlessly */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] lg:h-[700px] rounded-[4rem] overflow-hidden border border-[#F2EDE7] shadow-xl group"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158.64968984645697!2d16.456334154771234!3d50.48960510816123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e6aeae9c8f4b9%3A0xbae9da026b51f674!2sPlac%20Naj%C5%9Bwi%C4%99tszej%20Marii%20Panny%205%2C%2057-411%20Wambierzyce!5e0!3m2!1spl!2spl!4v1777294562092!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Kawka Cafe"
                className="grayscale-[0.3] contrast-100 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#3D2E24]/10 pointer-events-none group-hover:opacity-0 transition-opacity" />
              <div className="absolute inset-x-8 bottom-8 text-center">
                 <a 
                   href="https://maps.google.com/?q=Plac+Najświętszej+Marii+Panny+5,+Wambierzyce"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex bg-[#FDFCFB] text-[#3D2E24] px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xl items-center justify-center gap-3 hover:bg-[#EAE1D3] transition-all"
                 >
                   <MapPin className="w-4 h-4" />
                   Nawiguj do nas
                 </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof - Editorial Reviews */}
      <section className="py-32 px-6 bg-[#F9F7F5] border-y border-[#F2EDE7]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-[#3D2E24] fill-[#3D2E24] mx-1" />)}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 tracking-tight italic leading-relaxed">
            "Sercem robiona kawa i ciasta, <br />
            które smakują jak u mamy. <br />
            Najbardziej klimatyczne miejsce w okolicy."
          </h2>
          <div className="flex flex-col items-center gap-6">
            <div className="h-10 w-[1px] bg-[#3D2E24]/20" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#3D2E24]">Głosy naszych gości</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61576863264646&sk=reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1877F2] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-[#166fe5] transition-all shadow-lg flex items-center gap-2"
              >
                <Facebook className="w-4 h-4 fill-current" />
                Opinie na Facebooku
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61576863264646" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-[#F2EDE7] text-[#3D2E24] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-[#F2EDE7] transition-all flex items-center gap-2"
              >
                Obserwuj profil
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal Luxury */}
      <footer className="bg-[#1A1612] text-[#EAE1D3] py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <Coffee className="w-8 h-8 opacity-60" />
                <span className="text-2xl font-serif font-light tracking-widest uppercase">
                  Kawka <span className="font-script lowercase tracking-normal normal-case text-3xl">Cafe</span>
                </span>
              </div>
              <p className="text-lg font-serif italic text-[#EAE1D3]/60 leading-relaxed max-w-sm">
                Domowa przystań w cieniu wambierzyckiej bazyliki. Miejsce, gdzie każda filiżanka opowiada historię gościnności.
              </p>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Odkryj</h4>
              <ul className="space-y-4 text-sm font-medium tracking-wide">
                <li><a href="#o-nas" className="hover:text-white transition-colors underline-offset-8 decoration-white/20 hover:underline">O nas</a></li>
                <li><a href="#galeria" className="hover:text-white transition-colors underline-offset-8 decoration-white/20 hover:underline">Galeria</a></li>
                <li><a href="#godziny" className="hover:text-white transition-colors underline-offset-8 decoration-white/20 hover:underline">Wizyta</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
               <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Kontakt</h4>
               <ul className="space-y-4 text-sm font-medium tracking-wide">
                <li><a href="tel:669858119" className="hover:text-white transition-colors underline-offset-8 decoration-white/20 hover:underline">+48 669 858 119</a></li>
                <li><a href="mailto:kawiarnia.kawka.wmb@gmail.com" className="hover:text-white transition-colors underline-offset-8 decoration-white/20 hover:underline break-all">E-mail</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-3 space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Bądźmy w kontakcie</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61576863264646" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all group shadow-sm"
                >
                  <Facebook className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
            <p>&copy; {new Date().getFullYear()} Kawiarnia • Kawka <span className="font-script lowercase normal-case text-lg">Cafe</span></p>
            <div className="flex gap-8">
              <span>Wambierzyce</span>
              <span>Lokalna Tradycja</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
