import react, { useState, useRef, useEffect } from 'react';
import { Award, ShieldCheck, TrendingUp, Globe, Users, Building, HeartHandshake, Mail, ChevronDown, Plus, Minus, Quote } from 'lucide-react';
import { motion, AnimatePresence, Variants, useInView } from 'framer-motion';

// --- PLACEHOLDER ASSETS ---
// The original asset paths were causing errors, so they are replaced with placeholders.
const heroVideo = "src/assets/about.webm";
const qualityImage = 'src/assets/qa.webp';
const reliabilityImage = 'src/assets/sorting.webp';
const growthImage = 'src/assets/packaging.webp';
const reachImage = 'src/assets/wheathold.webp';


const partnerTestimonials = [
    {
        id: 'safari',
        name: 'Safari Foods',
        title: 'Procurement Manager',
        review: 'Ferrari Foods has been an invaluable partner. Their commitment to on-time delivery and consistent quality is unmatched in the industry. They truly understand our needs and work proactively to meet them.'
    },
    {
        id: 'grand-mills',
        name: 'Grand Mills',
        title: 'Supply Chain Director',
        review: 'The private labeling solution provided by Ferrari Foods allowed us to launch our premium flour line seamlessly. Their attention to detail and market expertise were critical to our success.'
    },
    {
        id: 'iffco',
        name: 'IFFCO',
        title: 'Head of Operations',
        review: 'Partnering with Ferrari Foods has streamlined our supply chain. Their global logistics network and reliable sourcing have made them our go-to supplier for essential commodities.'
    },
    {
        id: 'al-ghurair',
        name: 'Al Ghurair Foods',
        title: 'Quality Assurance Lead',
        review: 'The quality of the rice and wheat from Ferrari Foods is consistently excellent, which is why we trust them with our core product lines. A professional and dependable partner.'
    },
];

// This is the new component for the scrolling testimonial content on the right.
// It's modeled after the `CertificationPanel` from the About page.
const TestimonialPanel = ({ testimonial, setActiveTestimonialId }: { testimonial: typeof partnerTestimonials[0], setActiveTestimonialId: (id: string) => void }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveTestimonialId(testimonial.id);
        }
    }, [isInView, setActiveTestimonialId, testimonial.id]);

    return (
        <div ref={ref} className="min-h-screen flex items-center justify-center">
            <motion.div
                className="max-w-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6 }}
            >
                <Quote className="h-16 w-16 text-gray-300 mb-6" fill="currentColor" />
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-8">
                    "{testimonial.review}"
                </p>
                <div className="text-right border-t pt-4 border-gray-200">
                    <p className="text-lg font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-md text-gray-600">{testimonial.title}</p>
                </div>
            </motion.div>
        </div>
    );
};


// This component is the "Partners" page.
const Partners = () => {
  const [activePanel, setActivePanel] = useState('reliability');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [activeTestimonialId, setActiveTestimonialId] = useState(partnerTestimonials[0].id);

  // Using text-based logos for a cleaner, more uniform look
  const partnerLogos = [
    { name: 'IFFCO' },
    { name: 'GRAND MILLS' },
    { name: 'Al Khaleej Sugar' },
    { name: 'NOORA' },
    { name: 'Alfajar Al Sadiq' },
    { name: 'Dolphin Bakery' },
    { name: 'Al Ghurair Foods' },
    { name: 'Emirates Flour Mills' },
  ];

  const partnershipBenefits = [
    {
      id: 'quality',
      icon: Award,
      title: "Uncompromising Quality",
      description: "Offer your customers premium products that meet the highest international standards for taste, purity, and safety.",
      image: qualityImage,
      stat: 'ISO 22000',
      statLabel: 'Certified'
    },
    {
      id: 'reliability',
      icon: ShieldCheck,
      title: "Reliability & Consistency",
      description: "Our robust, end-to-end supply chain ensures a steady and reliable supply of products to meet your market demands.",
      image: reliabilityImage,
      stat: '500+ MT',
      statLabel: 'Daily Capacity'
    },
    {
      id: 'growth',
      icon: TrendingUp,
      title: "Mutual Growth",
      description: "We invest in our partners' success through competitive pricing, marketing support, and collaborative strategies.",
      image: growthImage,
      stat: '10+',
      statLabel: 'Years of Growth'
    },
    {
      id: 'reach',
      icon: Globe,
      title: "Global Reach & Expertise",
      description: "Leverage our extensive logistics network and deep market knowledge to expand your reach and grow your business.",
      image: reachImage,
      stat: '7+',
      statLabel: 'Countries Served'
    }
  ];

  const partnershipProcess = [
    {
      title: "Initial Enquiry & Discovery",
      description: "The first step is to get in touch. We'll schedule an initial consultation to understand your business needs, market position, and how we can best align with your goals. We'll discuss everything from product requirements to logistical needs."
    },
    {
      title: "Proposal & Strategy Alignment",
      description: "Based on our discovery call, our team will develop a tailored partnership proposal. This will outline product specifications, pricing structures, private labeling options, and a strategic plan to ensure mutual growth and success in your target markets."
    },
    {
      title: "Onboarding & Agreement",
      description: "Once we've aligned on the strategy, we'll move to the official onboarding process. This includes finalizing agreements, setting up your account, and integrating our teams to ensure a smooth and efficient start to our long-term partnership."
    },
    {
      title: "Launch & Continuous Support",
      description: "With everything in place, we launch! But our support doesn't stop there. You'll have a dedicated account manager and access to our team for continuous support, market insights, and collaborative planning to ensure ongoing success."
    }
  ];

  const partnerTypes = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Distributors & Wholesalers",
      description: "Join our global network to supply large volumes of premium food products to diverse markets. We offer robust logistical support and attractive volume-based pricing to ensure your success."
    },
    {
      icon: <Building className="h-12 w-12 text-green-600" />,
      title: "Retail Chains & Supermarkets",
      description: "Stock your shelves with high-quality products that consumers trust. We offer retail-ready packaging, private labeling services, and consistent supply to keep your customers satisfied."
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-amber-600" />,
      title: "Private Label & Co-Packing",
      description: "Create your own brand of premium food products with our expert support. We provide end-to-end private labeling and co-packing solutions, from product formulation to custom packaging design."
    }
  ];

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

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
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
              Become a Valued Partner
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Join us in our mission to deliver excellence in every grain. We are seeking strategic partners to grow with us and share in our global success.
            </motion.p>
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-12 -translate-x-1/2 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
              <ChevronDown className="w-10 h-10  text-white/70 animate-bounce" />
          </motion.div>
        </section>
      </div>

      {/* --- PARTNERS LOGO SCROLLER --- */}
      <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-center text-2xl font-semibold text-gray-800 tracking-wider mb-4">
                  TRUSTED BY INDUSTRY LEADERS AND PARTNERS WORLDWIDE
              </h2>
              <div className="mt-12 relative overflow-hidden h-24">
                  <motion.div
                      className="flex gap-24 items-center absolute left-0"
                      animate={{
                          x: ['0%', '-100%'],
                          transition: {
                              ease: 'linear',
                              duration: 50,
                              repeat: Infinity,
                          }
                      }}
                  >
                      {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                          <div key={index} className="flex-shrink-0" style={{ minWidth: '200px' }}>
                              <span className="text-4xl font-bold text-gray-500 text-center w-full block">{partner.name}</span>
                          </div>
                      ))}
                  </motion.div>
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
                  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
              </div>
          </div>
      </div>


      {/* --- Why Partner Section --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Partnership Built on Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We provide our partners with the tools, products, and support needed to thrive in a competitive marketplace.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="hidden lg:flex w-full h-[70vh] gap-4">
                {partnershipBenefits.map((benefit) => (
                <motion.div
                    key={benefit.id}
                    onHoverStart={() => setActivePanel(benefit.id)}
                    className="relative h-full rounded-2xl shadow-lg cursor-pointer overflow-hidden"
                    style={{ backgroundImage: `url(${benefit.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    animate={{ width: activePanel === benefit.id ? '40%' : '20%' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 rounded-2xl p-6 flex flex-col justify-end">
                    <AnimatePresence>
                        {activePanel === benefit.id && (
                        <motion.div
                            variants={panelContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="text-white w-full"
                        >
                            <motion.div variants={panelItemVariants}><benefit.icon className="w-12 h-12 mb-4 text-white" /></motion.div>
                            <motion.h3 variants={panelItemVariants} className="text-3xl font-bold mb-2">{benefit.title}</motion.h3>
                            <motion.p variants={panelItemVariants} className="text-gray-200 mb-6 leading-relaxed max-w-md">{benefit.description}</motion.p>
                            <motion.div variants={panelItemVariants} className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/50 self-start">
                            <p className="text-4xl font-bold text-white">{benefit.stat}</p>
                            <p className="text-sm uppercase tracking-widest">{benefit.statLabel}</p>
                            </motion.div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {activePanel !== benefit.id && (
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 0.5}}} exit={{opacity: 0}} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <benefit.icon className="w-10 h-10 text-white/80" />
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </div>
                </motion.div>
                ))}
            </div>
             <div className="lg:hidden flex flex-col w-full gap-4">
                {partnershipBenefits.map((benefit) => (
                <motion.div
                    key={benefit.id}
                    layout
                    onClick={() => setActivePanel(benefit.id)}
                    className="w-full rounded-2xl shadow-lg cursor-pointer overflow-hidden"
                    style={{ backgroundImage: `url(${benefit.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    animate={{ height: activePanel === benefit.id ? '28rem' : '6rem' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="relative h-full bg-gradient-to-t from-black/80 to-transparent rounded-2xl p-6 flex flex-col justify-end">
                    {activePanel !== benefit.id && (
                        <div className="flex items-center gap-4">
                        <benefit.icon className="w-8 h-8 text-white/90" />
                        <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                        </div>
                    )}
                    <AnimatePresence>
                        {activePanel === benefit.id && (
                        <motion.div
                            variants={panelContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="text-white w-full"
                        >
                            <motion.div variants={panelItemVariants}><benefit.icon className="w-10 h-10 mb-3 text-white" /></motion.div>
                            <motion.h3 variants={panelItemVariants} className="text-2xl font-bold mb-2">{benefit.title}</motion.h3>
                            <motion.p variants={panelItemVariants} className="text-sm text-gray-200 mb-4 leading-relaxed">{benefit.description}</motion.p>
                            <motion.div variants={panelItemVariants} className="bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/50 self-start">
                            <p className="text-2xl font-bold text-white">{benefit.stat}</p>
                            <p className="text-xs uppercase tracking-widest">{benefit.statLabel}</p>
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

      {/* --- Partnership Process Section --- */}
      <section className="py-20 bg-[#111111] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partnership Process</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">A streamlined, transparent journey to becoming a valued partner.</p>
            </div>
            <div className="space-y-6">
                {partnershipProcess.map((item, index) => (
                    <div key={index} className="bg-[#1C1C1C] border border-gray-700 rounded-3xl overflow-hidden">
                        <button
                            className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-800 transition-colors"
                            onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                        >
                            <div className="flex items-center gap-6">
                                <span className="text-xl font-bold text-gray-500">0{index + 1}</span>
                                <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                                <AnimatePresence initial={false} mode="wait">
                                    <motion.div
                                        key={openAccordion === index ? "minus" : "plus"}
                                        initial={{ rotate: openAccordion === index ? -90 : 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: openAccordion === index ? 90 : -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {openAccordion === index ? <Minus size={24} /> : <Plus size={24} />}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </button>
                        <AnimatePresence>
                            {openAccordion === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 pl-20 pr-12">
                                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
      </section>


      {/* --- Partnership Opportunities Section --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer flexible partnership models designed for different business needs, each focused on fostering growth and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-amber-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {partner.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.title}</h3>
                <p className="text-gray-600 text-lg">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNER TESTIMONIALS (Sticky Scroll) - UPDATED --- */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Building strong, lasting relationships is at the heart of what we do.
                  </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  {/* Left Sticky Column */}
                  <div className="lg:sticky top-0 lg:h-screen flex items-center justify-center">
                      <ul className="space-y-10">
                          {partnerTestimonials.map((testimonial) => (
                              <li key={testimonial.id}>
                                  <motion.h3
                                      className="text-4xl font-bold text-gray-800"
                                      animate={{
                                          opacity: activeTestimonialId === testimonial.id ? 1 : 0.4,
                                          x: activeTestimonialId === testimonial.id ? 10 : 0,
                                      }}
                                      transition={{ duration: 0.3 }}
                                  >
                                      {testimonial.name}
                                  </motion.h3>
                              </li>
                          ))}
                      </ul>
                  </div>
                  {/* Right Scrolling Column */}
                  <div>
                      {partnerTestimonials.map((testimonial) => (
                          <TestimonialPanel key={testimonial.id} testimonial={testimonial} setActiveTestimonialId={setActiveTestimonialId} />
                      ))}
                  </div>
              </div>
          </div>
      </section>


      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block">Ready to Grow With Us?</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-lg leading-6 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Let's discuss how a partnership with Ferrari Foods can create value for your business. Contact our partnership team to start the conversation.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-gray-900 bg-amber-400 hover:bg-amber-500 transition-colors shadow-lg"
            >
              <Mail className="mr-3 h-5 w-5" />
              Enquire Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;