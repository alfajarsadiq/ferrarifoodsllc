import React, { useState, useRef, useEffect } from 'react';
import { motion, Variants, AnimatePresence, useInView } from 'framer-motion';
import { 
  Target, Eye, Heart, Users, HardHat, Droplets, Wheat, 
  ScanLine, Package, FlaskConical, Factory,
  ShieldCheck, Award, Leaf, Sprout, Linkedin, 
  Globe, Building, HeartHandshake, PackageCheck,
  ChevronLeft, ChevronRight, X, LucideIcon, ChevronDown
} from 'lucide-react';

// --- IMPORT ASSETS ---
import heroVideo from '../assets/about.webm';
import factoryImage from '../assets/factory.webp';
import sortingImage from '../assets/sorting.webp';
import packagingImage from '../assets/packaging.webp';
import qaImage from '../assets/qa.webp';
import farmerImage from '../assets/portrait.webp';
import dripImage from '../assets/drip.webp';
import wheatHoldImage from '../assets/wheathold.webp';

// Placeholder images for team members
const team_ceo_jpg = 'https://placehold.co/400x400/222/FFF?text=AF';
const team_coo_jpg = 'https://placehold.co/400x400/222/FFF?text=LR';
const team_qa_jpg = 'https://placehold.co/400x400/222/FFF?text=SK';


// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const panelContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const panelItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
};

// --- Type Definition for Timeline Data ---
type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  fullDescription: string;
  image: string;
};

// --- Data for Sections ---
const facilitiesData = [
  {
    id: 'sorting',
    image: sortingImage,
    icon: ScanLine,
    title: 'Optical Sorting',
    description: 'Advanced optical scanners ensure every grain meets our purity standards by removing imperfections.',
    stat: '99.9%',
    statLabel: 'Purity Rate',
  },
  {
    id: 'packaging',
    image: packagingImage,
    icon: Package,
    title: 'Packaging Line',
    description: 'A fully automated line ensures product integrity, hygiene, and precise weight for global distribution.',
    stat: '10K+',
    statLabel: 'Units Per Hour',
  },
  {
    id: 'qa',
    image: qaImage,
    icon: FlaskConical,
    title: 'QA Laboratory',
    description: 'Our in-house labs conduct rigorous testing to guarantee compliance with international food safety laws.',
    stat: '25+',
    statLabel: 'Quality Checks',
  },
  {
    id: 'milling',
    image: factoryImage,
    icon: Factory,
    title: 'Milling Floor',
    description: 'State-of-the-art milling provides consistent grain texture and quality, optimized for efficiency.',
    stat: '500 MT',
    statLabel: 'Daily Capacity',
  },
];

const leadershipData = [
    {
      id: 'ceo',
      image: team_ceo_jpg,
      name: 'XXXXXXX',
      title: 'Founder & CEO',
      bio: '20+ years in agri-commodity trading and international supply chain management. Arjun drives Ferrari Foods’ global expansion and partner-first sourcing model.',
      linkedin: '#',
    },
    {
      id: 'coo',
      image: team_coo_jpg,
      name: 'XXXXXXXX',
      title: 'Chief Operating Officer',
      bio: 'Expert in process engineering and large-scale milling operations. Leila oversees facilities, capacity planning and continuous improvement initiatives.',
      linkedin: '#',
    },
    {
      id: 'qa_head',
      image: team_qa_jpg,
      name: 'XXXXXXX',
      title: 'Head of Quality & Compliance',
      bio: 'PhD in Food Science with 15 years in QA. Leads our laboratory testing program and certification strategy.',
      linkedin: '#',
    },
];

const timelineData: TimelineItem[] = [
    { 
        year: '2010', 
        title: 'Company Founded', 
        description: 'Began with our first commercial export.', 
        icon: Globe,
        fullDescription: 'From a small office, Ferrari Foods was established with a clear vision: to bridge global markets with high-quality agricultural products. Our first successful commercial export marked the beginning of a journey built on trust and reliability.',
        image: 'https://placehold.co/600x400/d1c0a8/333?text=First+Export'
    },
    { 
        year: '2015', 
        title: 'First Milling Facility', 
        description: 'Opened our first milling facility and in-house QA lab.', 
        icon: Building,
        fullDescription: 'To ensure end-to-end quality control, we invested in our own state-of-the-art milling facility. This crucial step allowed us to oversee every stage of production, from raw material to finished product, setting a new standard for excellence.',
        image: 'https://placehold.co/600x400/d1c0a8/333?text=New+Facility'
    },
    { 
        year: '2018', 
        title: 'Certified Excellence', 
        description: 'Achieved ISO 22000 & HACCP certifications.', 
        icon: Award,
        fullDescription: 'Our unwavering commitment to food safety was formally recognized with ISO 22000 and HACCP certifications. These globally respected standards validate our rigorous processes and assure our partners of our dedication to quality.',
        image: 'https://placehold.co/600x400/d1c0a8/333?text=Certifications'
    },
    { 
        year: '2020', 
        title: 'Capacity Milestone', 
        description: 'Reached 500 MT daily processing capacity.', 
        icon: Factory,
        fullDescription: 'Through strategic upgrades and process optimization, our production capacity reached a significant milestone of 500 metric tons per day. This expansion enabled us to meet growing international demand and serve larger markets.',
        image: 'https://placehold.co/600x400/d1c0a8/333?text=500+MT+Capacity'
    },
    { 
        year: '2023', 
        title: 'Sustainability Programs', 
        description: 'Launched sustainability and farmer training programs.', 
        icon: HeartHandshake,
        fullDescription: 'Recognizing our responsibility to the planet and our partners, we launched comprehensive sustainability and farmer training initiatives. These programs focus on water conservation, ethical sourcing, and empowering local communities.',
        image: 'https://placehold.co/600x400/d1c0a8/333?text=Sustainability'
    },
    { 
        year: '2025', 
        title: 'New Ventures', 
        description: 'Launched private-label partnerships and a new packaging line.', 
        icon: PackageCheck,
        fullDescription: 'Embracing innovation, we expanded our services to include private-label partnerships, supported by a new, fully automated packaging line. This allowed us to offer customized solutions to our global clients, further strengthening our market position.',
        image: 'https://placehold.co/600x400/d1c0a8/333?text=New+Partnerships'
    },
];


// --- Certifications Section (NEW STICKY SCROLL COMPONENT) ---

const certificationsData = [
    {
      id: 'iso',
      icon: ShieldCheck,
      name: 'ISO 22000',
      title: 'Global Standard for Food Safety',
      subtitle: 'Our commitment to a comprehensive, farm-to-fork safety protocol that meets the highest international benchmarks.',
      details: 'ISO 22000 is a globally recognized standard that specifies the requirements for a food safety management system. By adhering to this framework, we integrate risk analysis, hazard control, and continuous improvement into every stage of our supply chain, ensuring product safety and building partner trust.'
    },
    {
      id: 'haccp',
      icon: Award,
      name: 'HACCP Certified',
      title: 'Systematic Prevention of Hazards',
      subtitle: 'Hazard Analysis and Critical Control Points (HACCP) is the cornerstone of our quality assurance process.',
      details: 'This systematic, science-based approach identifies and controls potential biological, chemical, and physical hazards. Our HACCP certification validates our proactive stance on food safety, moving beyond simple inspection to active prevention and control at critical points in production.'
    },
    {
      id: 'organic',
      icon: Leaf,
      name: 'Certified Organic',
      title: 'Purity in Cultivation and Process',
      subtitle: 'Our organic range is a testament to our dedication to natural, sustainable, and chemical-free agriculture.',
      details: 'Verified by rigorous annual inspections, our Certified Organic products are cultivated without synthetic pesticides, herbicides, or GMOs. This certification ensures that our partners receive products that are not only pure but also produced in harmony with the environment.'
    },
    {
      id: 'halal',
      icon: Sprout,
      name: 'Halal Certified',
      title: 'Adherence to Islamic Principles',
      subtitle: 'We respect and cater to diverse global markets by ensuring our products meet stringent Halal requirements.',
      details: 'Our Halal certification guarantees that relevant products are prepared, processed, and handled in strict accordance with Islamic law. This includes verification of sourcing, production lines, and storage, ensuring full compliance for consumption by Muslim communities worldwide.'
    },
];

type Certification = typeof certificationsData[0];

// Helper component for each scrolling panel
const CertificationPanel = ({ certification, setActiveId }: { certification: Certification, setActiveId: (id: string) => void }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveId(certification.id);
        }
    }, [isInView, setActiveId, certification.id]);

    return (
        <div ref={ref} className="min-h-screen flex items-center justify-center">
            <motion.div 
                className="max-w-xl p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={itemVariants}
            >
                <certification.icon className="h-16 w-16 text-gray-800 mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{certification.title}</h3>
                <p className="text-xl text-gray-700 font-semibold mb-4">{certification.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{certification.details}</p>
            </motion.div>
        </div>
    );
};

// Main component for the section
const StickyCertifications = () => {
    const [activeId, setActiveId] = useState(certificationsData[0].id);

    return (
        <motion.section 
            className="py-20 bg-gray-50"
            variants={sectionVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Quality Assurance</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tangible proof of our unwavering commitment to global food safety and excellence.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Sticky Column */}
                    <div className="lg:sticky top-0 lg:h-screen flex items-center justify-center">
                        <ul className="space-y-8">
                            {certificationsData.map((cert) => (
                                <li key={cert.id} className="flex items-center gap-4">
                                    <motion.div
                                        animate={{ 
                                            scale: activeId === cert.id ? 1.1 : 1,
                                            opacity: activeId === cert.id ? 1 : 0.7 
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                      <cert.icon className={`h-10 w-10 transition-colors ${activeId === cert.id ? 'text-gray-800' : 'text-gray-400'}`} />
                                    </motion.div>
                                    <motion.span 
                                        className="text-2xl font-bold transition-colors"
                                        animate={{ 
                                            opacity: activeId === cert.id ? 1 : 0.5 
                                        }}
                                    >
                                        {cert.name}
                                    </motion.span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right Scrolling Column */}
                    <div>
                        {certificationsData.map((cert) => (
                            <CertificationPanel key={cert.id} certification={cert} setActiveId={setActiveId} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}


// --- MAIN ABOUT PAGE COMPONENT ---
const About = () => {
  const [activePanel, setActivePanel] = useState(facilitiesData[1].id);

  return (
    <div className="bg-white">
      {/* --- HERO SECTION (Updated to match Products page) --- */}
      <div className="h-screen w-full p-4">
        <section className="relative h-full w-full flex items-center justify-center text-white overflow-hidden rounded-3xl">
          <video src={heroVideo} autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-black/60 z-10" />
          
          <motion.div 
            className="relative z-20 text-center p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              About Ferrari Foods
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              A globally recognized food enterprise built on quality, sustainability, and international partnerships that strengthen food security worldwide.
            </motion.p>
          </motion.div>
          
          {/* Scroll Down Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
              <ChevronDown className="w-10 h-10 text-white/70 animate-bounce" />
          </motion.div>
        </section>
      </div>

      {/* Company Story */}
      <motion.section 
        className="py-20 bg-gray-50" 
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">Ferrari Foods LLC stands as a testament to what's possible when quality meets innovation. Founded with an unwavering focus on excellence, we have grown from a regional supplier to a globally recognized food enterprise specializing in premium rice and wheat.</p>
              <p className="text-lg text-gray-600">Our integrated operations span the entire supply chain—from crop cultivation and modern processing facilities to private labeling and large-scale import/export networks. This empowers us to serve clients with unmatched reliability and consistency.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-lg overflow-hidden shadow-2xl">
              <img src={factoryImage} alt="Modern food processing facility" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision, Values */}
      <motion.section 
        className="py-20 bg-white" 
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Built on strong principles that guide every decision we make.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="bg-gray-50 rounded-lg p-8 shadow-lg text-center border-t-4 border-gray-800" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}>
              <Target className="h-12 w-12 text-gray-800 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600">To deliver premium quality rice and wheat that meet the highest international standards while fostering sustainable agriculture and strengthening global food security.</p>
            </motion.div>
            <motion.div className="bg-gray-50 rounded-lg p-8 shadow-lg text-center border-t-4 border-gray-800" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}>
              <Eye className="h-12 w-12 text-gray-800 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600">To be the world's most trusted and innovative food enterprise, leading the industry in quality, sustainability, and global market reach.</p>
            </motion.div>
            <motion.div className="bg-gray-50 rounded-lg p-8 shadow-lg text-center border-t-4 border-gray-800" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}>
              <Heart className="h-12 w-12 text-gray-800 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
              <p className="text-gray-600">Quality excellence, sustainability, transparency, innovation, a customer-first approach, and lasting partnerships built on trust.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Facilities Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our State-of-the-Art Facilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Where precision, technology, and scale converge. Explore our operations.
          </p>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex w-full h-[70vh] gap-4">
            {facilitiesData.map((facility) => (
              <motion.div
                key={facility.id}
                onHoverStart={() => setActivePanel(facility.id)}
                className="relative h-full rounded-2xl shadow-lg cursor-pointer overflow-hidden"
                style={{ backgroundImage: `url(${facility.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                animate={{ width: activePanel === facility.id ? '40%' : '20%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 rounded-2xl p-6 flex flex-col justify-end">
                  <AnimatePresence>
                    {activePanel === facility.id && (
                      <motion.div
                        variants={panelContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="text-white w-full"
                      >
                        <motion.div variants={panelItemVariants}><facility.icon className="w-12 h-12 mb-4 text-white" /></motion.div>
                        <motion.h3 variants={panelItemVariants} className="text-3xl font-bold mb-2">{facility.title}</motion.h3>
                        <motion.p variants={panelItemVariants} className="text-gray-200 mb-6 leading-relaxed max-w-md">{facility.description}</motion.p>
                        <motion.div variants={panelItemVariants} className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/50 self-start">
                          <p className="text-4xl font-bold text-white">{facility.stat}</p>
                          <p className="text-sm uppercase tracking-widest">{facility.statLabel}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {activePanel !== facility.id && (
                       <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 0.5}}} exit={{opacity: 0}} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                         <facility.icon className="w-10 h-10 text-white/80" />
                       </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="lg:hidden flex flex-col w-full gap-4">
            {facilitiesData.map((facility) => (
              <motion.div
                key={facility.id}
                layout
                onClick={() => setActivePanel(facility.id)}
                className="w-full rounded-2xl shadow-lg cursor-pointer overflow-hidden"
                style={{ backgroundImage: `url(${facility.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                animate={{ height: activePanel === facility.id ? '28rem' : '6rem' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-full bg-gradient-to-t from-black/80 to-transparent rounded-2xl p-6 flex flex-col justify-end">
                  {activePanel !== facility.id && (
                    <div className="flex items-center gap-4">
                       <facility.icon className="w-8 h-8 text-white/90" />
                       <h3 className="text-xl font-bold text-white">{facility.title}</h3>
                    </div>
                  )}
                  <AnimatePresence>
                    {activePanel === facility.id && (
                       <motion.div
                        variants={panelContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="text-white w-full"
                      >
                        <motion.div variants={panelItemVariants}><facility.icon className="w-10 h-10 mb-3 text-white" /></motion.div>
                        <motion.h3 variants={panelItemVariants} className="text-2xl font-bold mb-2">{facility.title}</motion.h3>
                        <motion.p variants={panelItemVariants} className="text-sm text-gray-200 mb-4 leading-relaxed">{facility.description}</motion.p>
                        <motion.div variants={panelItemVariants} className="bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/50 self-start">
                          <p className="text-2xl font-bold text-white">{facility.stat}</p>
                          <p className="text-xs uppercase tracking-widest">{facility.statLabel}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <motion.section className="py-20 bg-white" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Commitment to Sustainability</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nurturing the land and empowering communities for a better tomorrow.</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
             <motion.div variants={itemVariants} className="text-center">
               <img src={farmerImage} alt="Farmer Portrait" className="rounded-full w-48 h-48 mx-auto object-cover mb-6 shadow-xl border-4 border-white"/>
               <HardHat className="h-10 w-10 text-gray-800 mx-auto mb-4" />
               <h3 className="text-2xl font-bold text-gray-800 mb-2">Farmer Partnerships</h3>
               <p className="text-gray-600">We work directly with local growers, providing training and resources to ensure ethical sourcing and shared prosperity.</p>
             </motion.div>
             <motion.div variants={itemVariants} className="text-center">
               <img src={dripImage} alt="Drip Irrigation" className="rounded-full w-48 h-48 mx-auto object-cover mb-6 shadow-xl border-4 border-white"/>
               <Droplets className="h-10 w-10 text-gray-800 mx-auto mb-4" />
               <h3 className="text-2xl font-bold text-gray-800 mb-2">Water Efficiency</h3>
               <p className="text-gray-600">Implementing modern irrigation techniques to conserve precious water resources and maximize crop yield responsibly.</p>
             </motion.div>
             <motion.div variants={itemVariants} className="text-center">
               <img src={wheatHoldImage} alt="Hands holding wheat" className="rounded-full w-48 h-48 mx-auto object-cover mb-6 shadow-xl border-4 border-white"/>
               <Wheat className="h-10 w-10 text-gray-800 mx-auto mb-4" />
               <h3 className="text-2xl font-bold text-gray-800 mb-2">Ethical Sourcing</h3>
               <p className="text-gray-600">Our commitment to quality starts at the source, ensuring every grain is cultivated with care for the environment and community.</p>
             </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Certifications & Quality Assurance (NEW STICKY SCROLL SECTION) */}
      <StickyCertifications />

      {/* Meet the Team */}
      <motion.section 
        className="py-20 bg-white" 
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership — Meet the Team</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experienced professionals steering operations, quality and global partnerships.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {leadershipData.map((leader) => (
                    <motion.div 
                        key={leader.id}
                        className="bg-gray-50 rounded-lg p-6 text-center shadow-lg group focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-800"
                        variants={itemVariants}
                        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <img 
                            src={leader.image} 
                            alt={`${leader.name}, ${leader.title} of Ferrari Foods`} 
                            className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-md"
                        />
                        <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                        <p className="text-sm font-semibold text-gray-700 mb-3">{leader.title}</p>

                        <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                        <a 
                            href={leader.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block text-gray-400 hover:text-gray-800 transition-colors duration-300"
                            aria-label={`LinkedIn profile for ${leader.name}`}
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </motion.div>
                ))}
            </div>
            <motion.div className="text-center mt-16" variants={itemVariants}>
                <a href="/team" className="text-lg font-semibold text-gray-800 hover:text-gray-900 transition-colors duration-300">
                    View full team →
                </a>
            </motion.div>
        </div>
      </motion.section>

      {/* --- Company Timeline (NEW PREMIUM VERSION) --- */}
      <section className="py-20 bg-[#FDFBF5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey — Key Milestones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A visual history of our growth, innovation, and commitment to excellence.</p>
          </motion.div>

          {(() => {
            // --- Component State ---
            const [activeIndex, setActiveIndex] = useState<number | null>(Math.floor(timelineData.length / 2));
            const [modalContent, setModalContent] = useState<TimelineItem | null>(null);

            const handleNext = () => setActiveIndex(prev => prev === null ? 0 : Math.min(prev + 1, timelineData.length - 1));
            const handlePrev = () => setActiveIndex(prev => prev === null ? 0 : Math.max(prev - 1, 0));

            // --- Desktop Timeline (Slider) ---
            const desktopTimeline = (
              <div className="hidden lg:flex flex-col items-center">
                <div className="relative w-full max-w-5xl">
                  {/* Timeline Axis Line */}
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
                  
                  <div className="relative flex justify-between items-center">
                    {timelineData.map((item, index) => (
                      <div key={item.year} className="relative z-10 flex flex-col items-center">
                          {/* Pulsing Dot for Active Milestone */}
                        <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}>
                            {activeIndex === index && <div className="absolute inset-0 bg-gray-800 rounded-full animate-ping"></div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full mt-8 overflow-hidden">
                  <motion.div 
                    className="flex"
                    animate={{ x: `calc(-${(activeIndex ?? 0) * (100 / 3)}% + ${100 / 6}%)` }} // Center the active card
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  >
                    {timelineData.map((item, index) => (
                      <motion.div 
                        key={item.year + "-card"}
                        className="flex-shrink-0 w-1/3 px-4"
                        animate={{ scale: activeIndex === index ? 1.05 : 0.95, opacity: activeIndex === index ? 1 : 0.6 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        whileHover={{ scale: 1.08 }}
                      >
                        <button 
                          onClick={() => {
                            setActiveIndex(index);
                            setModalContent(item);
                          }}
                          className={`w-full text-left p-6 bg-white rounded-lg shadow-md transition-all duration-300 border-2 ${activeIndex === index ? 'border-gray-800 shadow-xl' : 'border-transparent'}`}
                        >
                          <div className="flex items-start gap-4">
                            <item.icon className="h-8 w-8 text-gray-800 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-bold text-2xl text-gray-900">{item.year}</p>
                              <h3 className="font-semibold text-gray-800 text-lg mt-1">{item.title}</h3>
                              <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                            </div>
                          </div>
                        </button>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-6 mt-12">
                  <button onClick={handlePrev} disabled={activeIndex === 0} className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all">
                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                  </button>
                   <div className="flex gap-2">
                        {timelineData.map((_, index) => (
                            <button key={index} onClick={() => setActiveIndex(index)} className={`w-2 h-2 rounded-full transition-colors ${activeIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}></button>
                        ))}
                   </div>
                  <button onClick={handleNext} disabled={activeIndex === timelineData.length - 1} className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all">
                    <ChevronRight className="h-6 w-6 text-gray-700" />
                  </button>
                </div>
              </div>
            );

            // --- Mobile Timeline (Accordion) ---
            const mobileTimeline = (
              <div className="lg:hidden relative">
                <div className="absolute top-0 left-4 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>
                {timelineData.map((item, index) => (
                  <div key={item.year} className="relative pl-12 pb-8 last:pb-0">
                    <div className="absolute top-1 left-4 w-4 h-4 rounded-full -translate-x-1/2 bg-white border-2 border-gray-800"></div>
                    <button 
                      className="w-full text-left p-4 bg-white rounded-lg shadow-md"
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                      <div className="flex items-center gap-4">
                        <item.icon className="h-8 w-8 text-gray-800 flex-shrink-0" />
                        <div>
                           <p className="font-bold text-xl text-gray-900">{item.year}</p>
                           <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        </div>
                      </div>
                    </button>
                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 bg-white rounded-lg shadow-inner">
                                <img src={item.image} alt={item.title} className="w-full rounded-md mb-4 object-cover" />
                                <p className="text-sm text-gray-600">{item.fullDescription}</p>
                              </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            );
            
            // --- Modal for Desktop Details ---
            const detailModal = (
              <AnimatePresence>
                {modalContent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                    onClick={() => setModalContent(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="relative w-full max-w-3xl bg-[#FDFBF5] rounded-xl shadow-2xl p-8"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button onClick={() => setModalContent(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors">
                        <X className="h-6 w-6 text-gray-600" />
                      </button>
                      <img src={modalContent.image} alt={modalContent.title} className="w-full h-64 object-cover rounded-lg mb-6" />
                      <div className="flex items-center gap-4 mb-4">
                        <modalContent.icon className="h-10 w-10 text-gray-800 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-3xl text-gray-900">{modalContent.year}</p>
                          <h2 className="font-bold text-2xl text-gray-800">{modalContent.title}</h2>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{modalContent.fullDescription}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            );

            return <> {desktopTimeline} {mobileTimeline} {detailModal} </>;
          })()}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <Users className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300">Our experienced team and strategic partnerships enable us to serve clients with unmatched reliability across 7+ countries, making us a trusted name in the international food supply chain.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;