import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Mail, Phone, MapPin,
    ShieldCheck, Globe, Ship, Box,
    Star, Check, Building, UtensilsCrossed, LucideProps
} from 'lucide-react';
import Navbar from '../components/Navbar';

// Asset imports
import heroVideo from '../assets/about.webm';
import jeerakasalaImg from '../assets/jeerakasala.png';
import palakkadanImg from '../assets/palakkadan.png';
import sellabasmatiImg from '../assets/sellabasmati.png';
import creamysellaImg from '../assets/creamysella.png';
import hareeswheatImg from '../assets/hareeswheat.png';

// --- Type definition for a testimonial ---
interface Testimonial {
  metric?: string;
  title?: string;
  quote: string;
  author: string;
  authorTitle: string;
  avatar: string;
  logo?: React.FC<LucideProps>;
  theme: 'light' | 'dark';
}

// --- Animation Variants for on-scroll reveal ---
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

// --- Placeholder avatar URLs ---
const avatar1 = "https://i.pravatar.cc/150?u=david";
const avatar2 = "https://i.pravatar.cc/150?u=sarah";
const avatar3 = "https://i.pravatar.cc/150?u=tom";
const avatar4 = "https://i.pravatar.cc/150?u=emily";
const avatar5 = "https://i.pravatar.cc/150?u=mark";

// --- Reusable Testimonial Card Component ---
const TestimonialCard: React.FC<{ testimonial: Testimonial; className?: string }> = ({ testimonial, className = '' }) => {
  const { metric, title, quote, author, authorTitle, avatar, logo, theme } = testimonial;
  const LogoComponent = logo;

  const cardClasses = theme === 'dark'
    ? 'bg-gray-900 text-white border-gray-700'
    : 'bg-white border-gray-200';
  
  const textClasses = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const authorTitleClasses = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const borderClass = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  return (
    <motion.div
      variants={itemVariants}
      className={`p-8 rounded-2xl shadow-lg border flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-10 ${cardClasses} ${className}`}
    >
      <span className="text-red-500 text-3xl font-bold">”</span>
      
      {metric && (
        <div className="mt-2">
          <span className="text-5xl font-bold">{metric}</span>
          <p className="text-lg font-semibold">{title}</p>
        </div>
      )}
      
      <p className={`mt-4 flex-grow ${textClasses}`}>{quote}</p>

      <div className={`mt-6 pt-6 border-t flex items-center justify-between w-full ${borderClass}`}>
        <div className="flex items-center gap-4">
          <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-bold">{author}</p>
            <p className={`text-sm ${authorTitleClasses}`}>{authorTitle}</p>
          </div>
        </div>
        {LogoComponent && <LogoComponent className="w-6 h-6 opacity-50" />}
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [contactForm, setContactForm] = useState({
      name: '',
      businessName: '',
      phone: '',
      email: '',
      quantity: ''
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeChooseUsIndex, setActiveChooseUsIndex] = useState(0);

  const brandColors = {
    gold: '#cfb652',
    white: '#ffffff',
    black: '#1f1f1f',
    lightGray: '#f8f9fa',
  };

  const featuredProducts = [
    { name: 'Noora 1121 Sella Basmati', description: 'Renowned for its extra-long grains and aromatic fragrance, our 1121 Sella Basmati is parboiled to lock in nutrients...', image: sellabasmatiImg, rating: 5, features: ['Private Labelling Available', 'Custom Packaging Options', 'Exceptional Grain Length'] },
    { name: 'Noora Palakkadan Matta', description: 'An indigenous variety of rice from Kerala, India. Known for its earthy flavor and robust texture, this red rice is rich in fiber and nutrients...', image: palakkadanImg, rating: 4, features: ['Rich in Nutrients', 'Authentic Regional Taste', 'Ideal for Health-Conscious Diets'] },
    { name: 'Noora Jeerakasala Rice', description: 'A tiny-grained, aromatic rice variant famous in Kerala for its use in Thalassery Biryani...', image: jeerakasalaImg, rating: 5, features: ['Highly Aromatic', 'Private Labelling Available', 'Perfect for Gourmet Dishes'] },
    { name: 'Noora Creamy Sella', description: 'This parboiled rice is celebrated for its creamy texture upon cooking. It absorbs flavors beautifully...', image: creamysellaImg, rating: 4, features: ['Creamy Cooked Texture', 'Excellent Flavor Absorption', 'Custom Packaging Options'] },
    { name: 'Noora Harees Wheat', description: 'Premium quality whole wheat grains, perfect for preparing the traditional Middle Eastern dish, Harees...', image: hareeswheatImg, rating: 4, features: ['High-Quality Whole Grains', 'Authentic for Traditional Recipes', 'Bulk Supply Available'] },
  ];

  const chooseUsReasons = [
    { title: "Quality Assured", description: "We partner with accredited mills and enforce a rigorous 5-step quality control process. This ensures every grain meets international standards for purity, size, and flavor before it reaches you.", icon: ShieldCheck, stat: "99.8%", statLabel: "Purity Rate Maintained" },
    { title: "Bulk & Retail Supply", description: "Our state-of-the-art facilities can handle any order size, from a single 5kg retail bag to multi-container shipments, with flexible private labelling and packaging solutions to match your brand.", icon: Box, stat: "500+", statLabel: "Containers Shipped Annually" },
    { title: "Global Standards", description: "Ferrari Foods is fully certified with ISO, HACCP, and GMP. Our products meet all international export requirements, ensuring smooth customs clearance and market acceptance worldwide.", icon: Globe, stat: "20+", statLabel: "Countries Served" },
    { title: "Fast Delivery", description: "Strategically located in Dubai, our logistics network provides rapid and reliable delivery across the UAE and the GCC region. We prioritize your schedule to minimize downtime and keep your operations running.", icon: Ship, stat: "24-48hr", statLabel: "Local Delivery Turnaround" }
  ];

  const testimonials: Testimonial[] = [
    { metric: '8X', title: 'Increase in supply chain efficiency.', quote: 'We needed a reliable supplier for premium rice, and Ferrari Foods delivered beyond expectations...', author: 'David Callahan', authorTitle: 'Procurement Director, Spotify Events', avatar: avatar1, logo: Globe, theme: 'light' },
    { metric: '2X', title: 'Increase in customer satisfaction.', quote: 'The quality of the basmati rice we sourced from Ferrari Foods has been phenomenal...', author: 'Sarah Mitchel', authorTitle: 'Head Chef, Google Restaurants', avatar: avatar2, logo: Star, theme: 'light' },
    { quote: "Their team took our complex supply needs and made it simple. The turnaround on our large container orders is incredibly fast...", author: "Tom Becker", authorTitle: "Founder, PulseCore Catering", avatar: avatar3, logo: UtensilsCrossed, theme: 'light' },
    { quote: "The private labelling service was flawless. Our branded rice bags look professional and our customers love them...", author: 'Emily White', authorTitle: 'Product Manager, Noon Daily', avatar: avatar4, logo: Building, theme: 'dark' },
    { metric: '40%', title: 'Reduction in procurement costs.', quote: 'By consolidating our grain procurement with Ferrari Foods, we were able to reduce costs by 40%...', author: 'Mark Johnson', authorTitle: 'CFO, Jumeirah Group', avatar: avatar5, logo: Building, theme: 'light' },
    { quote: "Their Palakkadan Matta rice is the most authentic I've found in Dubai. The quality is consistently excellent.", author: 'Priya Kumar', authorTitle: 'Owner, Kerala Kitchen', avatar: "https://i.pravatar.cc/150?u=priya", logo: UtensilsCrossed, theme: 'light' }
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", contactForm);
    alert("Thank you for your inquiry! We will be in touch shortly.");
    setContactForm({ name: '', businessName: '', phone: '', email: '', quantity: '' });
  };

  return (
    <div className="bg-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute z-0 w-full h-full object-cover" src={heroVideo} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10" />
        <div className="relative z-20 h-full w-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">
                <span style={{ color: brandColors.gold }}>Premium Grains,</span><br />
                Global Standards
              </h1>
              <p className="mt-6 max-w-xl text-lg text-gray-200 leading-relaxed">
                From the heart of Dubai, Ferrari Foods is your trusted B2B partner for sourcing the world's finest rice and essential food grains. We empower businesses with uncompromising quality and reliable supply chains.
              </p>
              
              {/* --- UPDATED BUTTONS --- */}
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                {/* Primary Button */}
                <motion.button
                  className="px-7 py-3 text-base font-semibold tracking-wide text-black rounded-full shadow-lg flex items-center gap-2"
                  style={{ backgroundColor: brandColors.gold }}
                  whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  Get a Wholesale Quote
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                {/* Secondary Button */}
                <motion.button
                  className="px-7 py-3 text-base font-semibold tracking-wide text-white rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderColor: 'rgba(255, 255, 255, 0.75)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  Explore Products
                </motion.button>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PRODUCTS SECTION --- */}
      <section className="relative py-20" style={{ backgroundColor: brandColors.lightGray }}>
          <div className="container mx-auto px-6">
              <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
              >
                  <h2 className="text-4xl lg:text-5xl font-bold mb-3">
                      <span style={{ color: brandColors.gold }}>Our Premium</span> Selection
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Explore our handpicked collection of the finest grains, each with its unique character and culinary purpose.
                  </p>
              </motion.div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
                  <div className="lg:sticky top-0 lg:h-screen flex items-center justify-center py-12 lg:py-0">
                      <div className="relative w-full h-96 lg:h-[32rem] flex items-center justify-center">
                          {featuredProducts.map((product, index) => (
                              <motion.div
                                  key={index}
                                  className="absolute w-full h-full flex items-center justify-center"
                                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                  animate={activeIndex === index ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.95 }}
                                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                              >
                                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain drop-shadow-2xl" />
                              </motion.div>
                          ))}
                      </div>
                  </div>
                  <div className="flex flex-col">
                      {featuredProducts.map((product, index) => (
                          <motion.div
                              key={index}
                              className="min-h-[60vh] lg:min-h-screen flex flex-col justify-center py-16"
                              onViewportEnter={() => setActiveIndex(index)}
                              viewport={{ amount: 0.5 }}
                          >
                              <div className="max-w-md">
                                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: brandColors.black }}>
                                      {product.name}
                                  </h3>
                                  <div className="flex items-center gap-1 mt-3">
                                      {[...Array(5)].map((_, i) => (
                                          <Star key={i} className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                      ))}
                                      <span className="ml-2 text-sm text-gray-500">{product.rating}.0 Customer Rating</span>
                                  </div>
                                  <p className="mt-4 text-lg text-gray-600">{product.description}</p>
                                  <div className="mt-6 space-y-3 border-t pt-6">
                                      {product.features.map((feature, i) => (
                                          <div key={i} className="flex items-center gap-3">
                                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                                  <Check className="w-4 h-4 text-green-600" />
                                              </div>
                                              <span className="text-gray-700 font-medium">{feature}</span>
                                          </div>
                                      ))}
                                  </div>
                                  <motion.button className="mt-8 px-8 py-3 font-semibold text-black rounded-full shadow-lg inline-flex items-center gap-2" style={{ backgroundColor: brandColors.gold }} whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }} whileTap={{ scale: 0.95 }}>
                                      <span>Order Bulk</span>
                                      <ArrowRight className="w-5 h-5" />
                                  </motion.button>
                              </div>
                          </motion.div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* --- PREMIUM WHY CHOOSE US SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why <span style={{ color: brandColors.gold }}>Choose Ferrari Foods</span>
            </h2>
            <p className="text-lg text-gray-600">
              We're more than a supplier; we're a partner dedicated to your success, providing reliability and excellence in every grain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column: Interactive List */}
            <div className="space-y-6">
              {chooseUsReasons.map((reason, index) => {
                const Icon = reason.icon;
                const isActive = activeChooseUsIndex === index;
                
                return (
                  <motion.div
                    key={index}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-500 ease-out cursor-pointer group ${
                      isActive 
                        ? 'border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50 shadow-2xl scale-[1.02]' 
                        : 'border-gray-200 bg-white hover:border-yellow-300 hover:shadow-lg'
                    }`}
                    whileHover={{ y: -2 }}
                    onClick={() => setActiveChooseUsIndex(index)}
                    initial={false}
                    animate={{
                      y: isActive ? -5 : 0,
                    }}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-yellow-400"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <div className="flex items-center gap-5">
                      <div className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-yellow-400 shadow-lg' 
                          : 'bg-gray-100 group-hover:bg-yellow-100'
                      }`}>
                        <Icon className={`w-6 h-6 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-700 group-hover:text-yellow-700'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold transition-colors duration-300 ${
                          isActive ? 'text-gray-900' : 'text-gray-800 group-hover:text-gray-900'
                        }`}>
                          {reason.title}
                        </h3>
                      </div>
                      <motion.div
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isActive ? 'bg-yellow-400' : 'bg-gray-300 group-hover:bg-yellow-300'
                        }`}
                        animate={{ scale: isActive ? 1.5 : 1 }}
                      />
                    </div>

                    {/* Description that appears on active state */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 text-gray-600 leading-relaxed"
                        >
                          {reason.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Sticky Content Display */}
            <div className="lg:sticky lg:top-28 h-fit">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChooseUsIndex}
                  initial={{ opacity: 0, x: 20, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.98 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 35,
                    duration: 0.5 
                  }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-100"
                >
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                      style={{ backgroundColor: brandColors.gold }}
                    >
                      {React.createElement(chooseUsReasons[activeChooseUsIndex].icon, {
                        className: "w-8 h-8 text-white"
                      })}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {chooseUsReasons[activeChooseUsIndex].title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-600 text-lg leading-relaxed text-center"
                    >
                      {chooseUsReasons[activeChooseUsIndex].description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center"
                    >
                      <motion.p
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 400 }}
                        className="text-5xl font-bold mb-2"
                        style={{ color: brandColors.gold }}
                      >
                        {chooseUsReasons[activeChooseUsIndex].stat}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-600 font-semibold text-lg"
                      >
                        {chooseUsReasons[activeChooseUsIndex].statLabel}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL SECTION --- */}
      <motion.section
        className="py-20"
        style={{ backgroundColor: brandColors.lightGray }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold">Read success stories</h2>
            <p className="text-gray-500 mt-2">Find out how our happy clients are raving about us.</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TestimonialCard testimonial={testimonials[0]} className="lg:row-span-2" />
            <div className="flex flex-col gap-8">
              <TestimonialCard testimonial={testimonials[1]} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <TestimonialCard testimonial={testimonials[2]} />
                <TestimonialCard testimonial={testimonials[3]} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
             <TestimonialCard testimonial={testimonials[4]} />
             <TestimonialCard testimonial={testimonials[5]} />
          </div>
        </div>
      </motion.section>

      {/* --- CTA SECTION --- */}
      <section className="py-20" style={{ backgroundColor: brandColors.black }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white max-w-3xl mx-auto">
            Looking for a Reliable Wholesale Rice Supply in Dubai?
          </h2>
          <motion.button
            className="mt-8 px-8 py-4 font-semibold text-black rounded-full shadow-lg"
            style={{ backgroundColor: brandColors.gold }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Quote Now
          </motion.button>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <motion.section
        className="py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have a question or a large order? Fill out the form, and our team will get back to you promptly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4"><Mail className="w-5 h-5" style={{color: brandColors.gold}}/><span>info@ferrarifoods.com</span></div>
              <div className="flex items-center gap-4"><Phone className="w-5 h-5" style={{color: brandColors.gold}}/><span>+971-585639040</span></div>
              <div className="flex items-center gap-4"><MapPin className="w-5 h-5" style={{color: brandColors.gold}}/><span>Ferrari Foods LLC Dubai, United Arab Emirates</span></div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-lg border">
             <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Your Name" value={contactForm.name} onChange={handleFormChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500" />
                  <input type="text" name="businessName" placeholder="Business Name" value={contactForm.businessName} onChange={handleFormChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" name="phone" placeholder="Phone" value={contactForm.phone} onChange={handleFormChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500" />
                  <input type="email" name="email" placeholder="Email" value={contactForm.email} onChange={handleFormChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500" />
              </div>
              <input type="text" name="quantity" placeholder="Required Quantity (e.g., 1 Container / 500 MT)" value={contactForm.quantity} onChange={handleFormChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500" />
              <button type="submit" className="w-full py-3 px-6 font-semibold text-black rounded-md" style={{ backgroundColor: brandColors.gold }}>
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;