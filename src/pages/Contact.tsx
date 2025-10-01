import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Building, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- Local image assets ---
import dubaiImage from '../assets/dubai.webp';
import ajmanImage from '../assets/ajman.webp';
import sharjahImage from '../assets/sharjha.webp'; // Using the 'sharjha' spelling as requested
import omanImage from '../assets/oman.webp';


// --- Placeholder for a background image to mimic the video effect ---
const heroBackgroundImage = 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=1974&auto=format&fit=crop';

// --- Updated Data for the Branches section with more details ---
const branchData = [
  {
    id: 'dubai',
    image: dubaiImage, // Updated image path
    icon: Building,
    title: 'Dubai',
    description: 'Our global headquarters and central hub for Middle East operations.',
    contactEmail: 'info.dxb@ferrarifoods.com'
  },
  {
    id: 'ajman',
    image: ajmanImage, // Updated image path
    icon: MapPin,
    title: 'Ajman',
    description: 'Serving the northern emirates with logistical excellence and dedicated support.',
    contactEmail: 'info.ajm@ferrarifoods.com'
  },
  {
    id: 'sharjah',
    image: sharjahImage, // Updated image path
    icon: MapPin,
    title: 'Sharjah',
    description: 'A key distribution point connecting our network across the UAE.',
    contactEmail: 'info.shj@ferrarifoods.com'
  },
  {
    id: 'oman',
    image: omanImage, // Updated image path
    icon: Globe,
    title: 'Oman',
    description: 'Expanding our reach to serve valued partners in the Sultanate of Oman.',
    contactEmail: 'info.omn@ferrarifoods.com'
  },
];

// --- Animation Variants ---
const panelContentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.5, delay: 0.3 },
  },
};

const collapsedContentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: 'easeOut', duration: 0.5, delay: 0.5 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [activeLocation, setActiveLocation] = useState(branchData[0].id);

  // Define brand colors for consistency
  const brandColors = {
    primary: '#1a1a1a',
    accent: '#C6A664',
    accentHover: '#d4b375',
    textPrimary: '#F5F5F5',
    back: '#ffffffff',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  return (
    <div>
      {/* --- HERO SECTION --- */}
      <div className="h-screen w-full p-4">
        <section 
            className="relative h-full w-full flex items-center justify-center text-white overflow-hidden rounded-3xl"
            style={{ backgroundImage: `url(${heroBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
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
              Let's Build a Partnership <span style={{ color: brandColors.accent }}>Together</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Ready to partner with a global leader in premium rice and wheat? Contact us to discuss your requirements and discover how Ferrari Foods LLC can serve your business needs.
            </motion.p>
          </motion.div>
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

      {/* --- Contact Form & Information --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A664] focus:border-transparent transition" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A664] focus:border-transparent transition" placeholder="your.email@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A664] focus:border-transparent transition" placeholder="Your company name" />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                      <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A664] focus:border-transparent transition">
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="bulk">Bulk Orders</option>
                        <option value="private-label">Private Labeling</option>
                        <option value="distribution">Distribution Partnership</option>
                        <option value="export">Export Services</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A664] focus:border-transparent transition" placeholder="Brief subject of your inquiry" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A664] focus:border-transparent transition" placeholder="Please provide details about your requirements..."></textarea>
                  </div>
                  <button type="submit" className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center" style={{ backgroundColor: brandColors.accent }} onMouseOver={e => e.currentTarget.style.backgroundColor = brandColors.accentHover} onMouseOut={e => e.currentTarget.style.backgroundColor = brandColors.accent}>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            {/* --- UPDATED Contact Information Card --- */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">Contact Information</h3>
                <div className="space-y-5">
                  <div className="group flex items-start space-x-4 p-2 rounded-lg transition-colors duration-200 hover:bg-gray-50">
                      <MapPin className="h-6 w-6 mt-1 flex-shrink-0" style={{color: brandColors.accent}} />
                      <div>
                          <p className="font-semibold text-gray-800">Headquarters</p>
                          <p className="text-gray-600">United Arab Emirates</p>
                      </div>
                  </div>
                  <div className="group flex items-start space-x-4 p-2 rounded-lg transition-colors duration-200 hover:bg-gray-50">
                      <Mail className="h-6 w-6 mt-1 flex-shrink-0" style={{color: brandColors.accent}}/>
                      <div>
                          <p className="font-semibold text-gray-800">Email</p>
                          <a href="mailto:info@ferrarifoods.com" className="text-gray-600 group-hover:text-[#C6A664] transition-colors">info@ferrarifoods.com</a>
                      </div>
                  </div>
                  <div className="group flex items-start space-x-4 p-2 rounded-lg transition-colors duration-200 hover:bg-gray-50">
                      <Phone className="h-6 w-6 mt-1 flex-shrink-0" style={{color: brandColors.accent}}/>
                      <div>
                          <p className="font-semibold text-gray-800">Phone</p>
                          <p className="text-gray-600">+971-XXX-XXXX</p>
                      </div>
                  </div>
                  <div className="group flex items-start space-x-4 p-2 rounded-lg transition-colors duration-200 hover:bg-gray-50">
                      <Clock className="h-6 w-6 mt-1 flex-shrink-0" style={{color: brandColors.accent}}/>
                      <div>
                          <p className="font-semibold text-gray-800">Business Hours</p>
                          <p className="text-gray-600">24/7 Operations</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* --- END of UPDATED Section --- */}
            
          </div>
        </div>
      </section>

      {/* --- Our Branches Section (UPDATED) --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Branches</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Strategically positioned to serve our partners across the region.
          </p>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Desktop View */}
          <div className="hidden lg:flex w-full h-[70vh] gap-4">
            {branchData.map((branch) => (
              <motion.div
                key={branch.id}
                onHoverStart={() => setActiveLocation(branch.id)}
                className="relative h-full rounded-2xl shadow-lg cursor-pointer overflow-hidden"
                style={{ backgroundImage: `url(${branch.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                animate={{ width: activeLocation === branch.id ? '40%' : '20%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <AnimatePresence>
                    {activeLocation === branch.id && (
                       <>
                        <motion.div
                            key="content"
                            className="w-full h-full flex flex-col items-start justify-end text-white"
                            variants={panelContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <h3 className="text-3xl font-bold">{branch.title}</h3>
                            <p className="text-md mt-2 max-w-xs">{branch.description}</p>
                        </motion.div>
                        <motion.a
                            key="mail-button-expanded"
                            href={`mailto:${branch.contactEmail}`}
                            onClick={(e) => e.stopPropagation()}
                            className="absolute bottom-6 right-6 bg-yellow-500/80 text-black p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 backdrop-blur-sm"
                            aria-label={`Email ${branch.title} branch`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.4, ease: 'easeOut' } }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            <Mail className="w-5 h-5" />
                        </motion.a>
                       </>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {activeLocation !== branch.id && (
                      <motion.div
                        variants={collapsedContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="bg-black/60 backdrop-blur-sm text-white px-5 py-2.5 rounded-full shadow-lg font-semibold">
                          {branch.title}
                        </div>
                        <a 
                          href={`mailto:${branch.contactEmail}`}
                          onClick={(e) => e.stopPropagation()}
                          className="absolute bottom-6 right-6 bg-yellow-500/80 text-black p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 backdrop-blur-sm"
                          aria-label={`Email ${branch.title} branch`}
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden flex flex-col w-full gap-4">
            {branchData.map((branch) => (
              <motion.div
                key={branch.id}
                layout
                onClick={() => setActiveLocation(branch.id === activeLocation ? '' : branch.id)}
                className="w-full rounded-2xl shadow-lg cursor-pointer overflow-hidden"
                style={{ backgroundImage: `url(${branch.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                animate={{ height: activeLocation === branch.id ? '22rem' : '6rem' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-full bg-gradient-to-t from-black/80 to-transparent rounded-2xl p-6 flex flex-col justify-end">
                  <AnimatePresence>
                    {activeLocation === branch.id ? (
                       <motion.div
                        className="w-full h-full flex flex-col items-start justify-end text-white"
                        variants={panelContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <h3 className="text-2xl font-bold">{branch.title}</h3>
                        <p className="text-sm mt-2">{branch.description}</p>
                        <a 
                          href={`mailto:${branch.contactEmail}`}
                          onClick={(e) => e.stopPropagation()}
                          className="mt-4 bg-yellow-500/90 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          Contact Branch
                        </a>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.5 } }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-4"
                      >
                       <branch.icon className="w-8 h-8 text-white/90" />
                       <h3 className="text-xl font-bold text-white">{branch.title}</h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Response Time Commitment Section --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Commitment to You</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            We guarantee a response to all inquiries within 24 hours, with dedicated account management for ongoing partnerships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: brandColors.accent }}>24</div>
              <div className="text-gray-700">Hours Initial Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: brandColors.accent }}>48</div>
              <div className="text-gray-700">Hours Quote Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: brandColors.accent }}>7</div>
              <div className="text-gray-700">Days Sample Dispatch</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;