import react, { useState, useEffect, useRef } from 'react';
import {
    Users,ChevronLeft, ChevronRight,
    HeartHandshake, Droplets, Recycle, Search, Download, Send,
    ShieldCheck, CheckCircle, ArrowRight, Building, Package, Globe
} from 'lucide-react';
import { motion, AnimatePresence, useInView, } from 'framer-motion';

// --- PLACEHOLDER ASSETS ---
const heroSlides = [
  { image: "src/assets/packaging.webp", title: "Our Global Presence", subtitle: "With partnerships across 7+ countries, Ferrari Foods LLC strengthens food security worldwide through the reliable delivery of premium staples." },
  { image: "src/assets/sorting.webp", title: "Commitment to Quality", subtitle: "Upholding the highest standards in every grain, from sourcing to delivery, across all our international markets." },
  { image: "src/assets/wheathold.webp", title: "Building Strong Partnerships", subtitle: "We collaborate with over 500 partners globally to ensure a seamless and efficient supply chain." }
];

const worldMapSvg = 'src/assets/worldmapp.svg';

const locations = [
    { name: 'UAE', top: '48%', left: '58%', year: 2010, products: 'Basmati, Matta', distributor: 'HQ Office' },
    { name: 'KSA', top: '51%', left: '55.5%', year: 2012, products: 'Sella, Basmati', distributor: 'Gulf Partners' },
    { name: 'India', top: '52%', left: '65%', year: 2011, products: 'Basmati, Wheat', distributor: 'Agro Exports Ltd.' },
    { name: 'UK & EU', top: '38%', left: '50%', year: 2015, products: 'Organic Rice', distributor: 'Euro Foods Inc.' },
    { name: 'Africa', top: '62%', left: '53%', year: 2018, products: 'Wheat, Rice', distributor: 'Safari Foods' },
];

const sustainabilitySteps = [
    { id: 'farmers', icon: HeartHandshake, title: "Farmer Partnerships", subtitle: "Empowering communities through fair trade and sustainable training.", details: "We train 1,200+ farmers annually, ensuring fair trade and sustainable practices that empower local communities and improve crop quality." },
    { id: 'water', icon: Droplets, title: "Water & Energy Efficiency", subtitle: "Conserving vital resources with smart, efficient technologies.", details: "Smart irrigation and energy-efficient milling save over 2 million liters of water every year, reducing our environmental footprint." },
    { id: 'packaging', icon: Recycle, title: "Sustainable Packaging", subtitle: "Reducing waste with innovative, eco-friendly materials.", details: "We're committed to a 20% reduction in plastic packaging by actively using recyclable and biodegradable alternatives." },
    { id: 'traceability', icon: Search, title: "Traceability & Safety", subtitle: "Ensuring complete transparency from farm to fork.", details: "Our 100% traceable supply chain is verified by ISO 22000 & HACCP certifications, guaranteeing safety and quality." }
];

const successStories = [
    { icon: Building, partner: "Grand Mills, UAE", story: "Streamlined regional supply with a dedicated logistics framework, boosting their premium flour line.", cta: "View Case Study" },
    { icon: Globe, partner: "Safari Foods, Africa", story: "Enabled expansion into three new territories by providing a consistent supply of high-quality wheat.", cta: "View Case Study" },
    { icon: Package, partner: "Euro Foods Inc., Europe", story: "Established a fully certified organic supply chain to meet the growing demand for sustainable products.", cta: "View Case Study" },
    { icon: ShieldCheck, partner: "Agro Exports Ltd., India", story: "Enhanced quality assurance protocols, leading to a 30% increase in their export market share.", cta: "View Case Study" },
];

const partnerTestimonials = [
    { icon: Users, partner: "Al Ghurair Foods", review: "The quality is consistently excellent, which is why we trust them with our core product lines." },
    { icon: Users, partner: "IFFCO", review: "Their global logistics network and reliable sourcing have made them our go-to supplier for essential commodities." },
    { icon: Users, partner: "A Regional Distributor", review: "A partnership built on trust and mutual respect. Highly recommended for their professionalism." },
    { icon: Users, partner: "Global Spice Inc.", review: "Ferrari Foods streamlined our supply chain, boosting efficiency by 40%. A reliable partner in every sense." },
];


const SustainabilityPanel = ({ step, setActiveStepId }: { step: typeof sustainabilitySteps[0], setActiveStepId: (id: string) => void }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveStepId(step.id);
        }
    }, [isInView, setActiveStepId, step.id]);

    return (
        <div ref={ref} className="min-h-screen flex items-center justify-center">
            <motion.div className="max-w-xl p-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6 }}>
                <step.icon className="h-16 w-16 text-gray-800 mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-xl text-gray-700 font-semibold mb-4">{step.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{step.details}</p>
            </motion.div>
        </div>
    );
};


const GlobalPresence = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeStepId, setActiveStepId] = useState(sustainabilitySteps[0].id);

  const nextSlide = () => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);
  
  const MarqueeCard = ({ item, isStory }: { item: any, isStory: boolean }) => (
      <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg p-6 border flex flex-col h-full">
          <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                  <item.icon className="w-6 h-6 text-gray-700" />
              </div>
              <h4 className="font-bold text-gray-900">{item.partner}</h4>
          </div>
          <p className="text-gray-600 flex-grow">{isStory ? item.story : item.review}</p>
          {isStory && (
              <button className="mt-4 inline-flex items-center gap-2 font-semibold text-amber-600">
                  {item.cta} <ArrowRight className="w-4 h-4" />
              </button>
          )}
      </div>
  );
  
  return (
    <div className="bg-white">
      {/* --- HERO CAROUSEL SECTION --- */}
      <div className="h-screen w-full p-4">
        <section className="relative h-full w-full flex items-center justify-center text-white overflow-hidden rounded-3xl">
          <AnimatePresence>
            <motion.div
              key={currentSlide}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/60 z-10" />
          <motion.div className="relative z-20 text-center p-4" key={`text-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-shadow-lg">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 text-shadow">
              {heroSlides[currentSlide].subtitle}
            </p>
          </motion.div>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className="w-8 h-1.5 rounded-full transition-colors"
                style={{ backgroundColor: currentSlide === index ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.4)' }}
              />
            ))}
          </div>
        </section>
      </div>

      {/* --- INTERACTIVE WORLD MAP SECTION --- */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Connecting Markets, Delivering Quality</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Our robust supply chain spans across key global regions. Hover over the pins to explore our market presence.
                  </p>
              </div>
              <motion.div className="relative w-full max-w-6xl mx-auto aspect-[2/1]" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                  <img src={worldMapSvg} alt="World Map" className="w-full h-full object-contain opacity-50"/>
                  <AnimatePresence>
                      {locations.map((loc, index) => (
                          <motion.div key={loc.name} className="group absolute" style={{ top: loc.top, left: loc.left }} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.5 + index * 0.1 }}>
                              <div className="w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-125"/>
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 p-3 w-64 bg-gray-800 text-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                                  <h4 className="font-bold text-lg text-amber-400">{loc.name}</h4>
                                  <p className="text-sm text-gray-300">Entered: {loc.year}</p>
                                  <p className="text-sm text-gray-300 mt-1">Products: {loc.products}</p>
                                  <p className="text-sm text-gray-300 mt-1">Partner: {loc.distributor}</p>
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-800"/>
                              </div>
                          </motion.div>
                      ))}
                  </AnimatePresence>
              </motion.div>
          </div>
      </section>
      
      {/* --- SUSTAINABILITY JOURNEY SECTION --- */}
      <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sustainability Journey</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">From ethical sourcing to eco-friendly practices, we are committed to a sustainable future.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="lg:sticky top-0 lg:h-screen flex items-center justify-center">
                        <ul className="space-y-8">
                            {sustainabilitySteps.map((step) => (
                                <li key={step.id} className="flex items-center gap-4">
                                    <motion.div animate={{ scale: activeStepId === step.id ? 1.1 : 1, opacity: activeStepId === step.id ? 1 : 0.7 }} transition={{ duration: 0.3 }}>
                                      <step.icon className={`h-10 w-10 transition-colors ${activeStepId === step.id ? 'text-gray-800' : 'text-gray-400'}`} />
                                    </motion.div>
                                    <motion.span className="text-2xl font-bold transition-colors" animate={{ opacity: activeStepId === step.id ? 1 : 0.5 }}>
                                        {step.title}
                                    </motion.span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {sustainabilitySteps.map((step) => (
                            <SustainabilityPanel key={step.id} step={step} setActiveStepId={setActiveStepId} />
                        ))}
                    </div>
                </div>

                <div className="mt-20 p-8 bg-gray-800 text-white rounded-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                           <h3 className="text-2xl font-bold mb-4">Responsible sourcing. Reliable partnerships.</h3>
                           <div className="flex flex-wrap gap-6 items-center">
                               <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-amber-400"/> ISO 22000</span>
                               <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-amber-400"/> HACCP</span>
                               <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-amber-400"/> Halal Certified</span>
                           </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                           <button className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-colors">
                               <Download className="w-5 h-5"/> Download Report
                           </button>
                           <button className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors">
                               <Send className="w-5 h-5"/> Contact Office
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      {/* --- GLOBAL SUCCESS STORIES SECTION (NEW MARQUEE) --- */}
       <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Success Stories</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                    Discover how our partnerships create value and drive growth across different markets.
                </p>
            </div>
            
            {/* Top Marquee (Success Stories) */}
            <div className="relative">
                 <motion.div 
                    className="flex gap-8 py-4"
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
                 >
                     {[...successStories, ...successStories].map((item, index) => <MarqueeCard key={`story-${index}`} item={item} isStory={true} />)}
                 </motion.div>
            </div>

            {/* Bottom Marquee (Testimonials) */}
             <div className="relative mt-8">
                 <motion.div 
                    className="flex gap-8 py-4"
                    animate={{ x: ['-100%', '0%'] }}
                    transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
                 >
                     {[...partnerTestimonials, ...partnerTestimonials].map((item, index) => <MarqueeCard key={`testimonial-${index}`} item={item} isStory={false} />)}
                 </motion.div>
            </div>
        </section>
    </div>
  );
};

export default GlobalPresence;