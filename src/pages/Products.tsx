import React, { useState, useRef, useEffect } from 'react';
import { Wheat, Package, Award, Truck, ChevronDown, Quote, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';

// --- IMPORT ASSETS (Synced with Home.tsx) ---
import heroImage from '../assets/about.webm';
import jeerakasalaImg from '../assets/jeerakasala.png';
import palakkadanImg from '../assets/palakkadan.png';
import sellabasmatiImg from '../assets/sellabasmati.png';
import creamysellaImg from '../assets/creamysella.png';
import hareeswheatImg from '../assets/hareeswheat.png';

// --- RICE PRODUCT IMAGE IMPORTS ---
import basmatiImg from '../assets/basmati.png';
import basmati1121Img from '../assets/1121bas.png';
import goldenSellaImg from '../assets/goldensella.png';

// --- NEW WHEAT PRODUCT IMAGE IMPORTS ---
import parathaMaidaImg from '../assets/parathamaida.png';
import alGhuairMaidaImg from '../assets/rawan.png';
import iffcoAllPurposeImg from '../assets/allpurpose.png';
import jenanAfghanAttaImg from '../assets/afghanatta.png';
import grandMillsChakkiImg from '../assets/chakkiatta.png';
import grandMillsChappatiImg from '../assets/chappati.png';


// --- Data ---
const riceProducts = [
  {
    id: 'noora-jeerakasala-rice',
    name: 'Noora Jeerakasala Rice',
    image: jeerakasalaImg,
    description: 'A premium, aromatic short-grain rice known for its distinctive fragrance and flavor. Perfect for traditional dishes and biryanis.',
    features: ["Aromatic Short-Grain", "Perfect for Biryani", "Distinctive Fragrance", "Available in 40kg"]
  },
  {
    id: 'noora-palakkadan-matta-rice',
    name: 'Noora Palakkadan Matta Rice',
    image: palakkadanImg,
    description: 'Authentic Kerala red rice with a rich, earthy flavor and high nutritional value. Ideal for daily consumption and traditional recipes.',
    features: ["Authentic Kerala Red Rice", "Rich, Earthy Flavor", "High Nutritional Value", "Available in 40kg"]
  },
  {
    id: 'noora-sella-basmati-rice',
    name: 'Noora Sella Basmati Rice',
    image: sellabasmatiImg,
    description: 'Long-grain, aromatic basmati rice with a non-sticky texture. Aged to perfection for exceptional flavor and elongation.',
    features: ["Aged Long-Grain Basmati", "Non-Sticky Texture", "Exceptional Flavor", "Available in 40kg"]
  },
  {
    id: 'noora-creamy-sella-rice',
    name: 'Noora Creamy Sella Rice',
    image: creamysellaImg,
    description: 'A parboiled basmati rice known for its creamy texture and rich aroma. The grains are firm and separate, ideal for pilafs and biryanis.',
    features: ["Creamy Parboiled Basmati", "Rich Aroma", "Firm & Separate Grains", "Available in 40kg"]
  },
  {
    id: 'noora-basmati-rice',
    name: 'Noora Basmati Rice',
    image: basmatiImg,
    description: "The quintessential long-grain aromatic rice, celebrated for its slender grains and delightful fragrance. A staple in culinary traditions worldwide.",
    features: ["Classic Aromatic Flavor", "Slender Long Grains", "Naturally Aged", "Versatile for Cooking"]
  },
  {
    id: 'noora-1121-basmati-rice',
    name: 'Noora 1121 Basmati Rice',
    image: basmati1121Img,
    description: "Globally renowned for having the longest grain, the 1121 variety elongates to twice its length post-cooking, offering exceptional visual appeal.",
    features: ["World's Longest Grain", "Maximum Elongation", "Delicate Texture", "Premium Export Quality"]
  },
  {
    id: 'noora-1121-golden-sella',
    name: 'Noora 1121 Golden Sella',
    image: goldenSellaImg,
    description: "Parboiled 1121 Basmati that undergoes a process to retain more nutrients. The grains are golden, firm, and separate beautifully when cooked.",
    features: ["Golden Parboiled Grains", "Nutrient-Rich", "Firm & Non-Sticky", "Perfect for Biryani & Pilaf"]
  }
];

const wheatProducts = [
  {
    id: 'noora-harees-wheat',
    name: 'Noora Harees Wheat',
    image: hareeswheatImg,
    description: 'Premium quality crushed wheat, perfect for preparing the traditional Middle Eastern dish, Harees. Nutritious and hearty.',
    features: ["Premium Crushed Wheat", "Ideal for Harees", "Nutritious & Hearty", "Available in 40kg"]
  },
  {
    id: 'iffco-paratha-maida',
    name: 'IFFCO Paratha Maida',
    image: parathaMaidaImg,
    description: 'Specially milled for creating flaky, layered parathas. This maida (refined flour) ensures a soft dough and perfect texture for your favorite flatbreads.',
    features: ["Ideal for Parathas", "Fine Refined Flour", "Soft Dough", "Ensures Flaky Layers"]
  },
  {
    id: 'al-ghuair-maida',
    name: 'Al Ghuair Maida',
    image: alGhuairMaidaImg,
    description: 'A high-quality, all-purpose refined flour from Al Ghuair, perfect for a wide range of baking and cooking needs, from bread to pastries.',
    features: ["Premium All-Purpose Flour", "Versatile for Baking", "Consistent Quality", "Fine Texture"]
  },
  {
    id: 'iffco-all-purpose-flour',
    name: 'IFFCO All Purpose Wheat Flour',
    image: iffcoAllPurposeImg,
    description: 'A versatile and reliable all-purpose flour from IFFCO, suitable for everyday cooking and baking. Your go-to flour for cakes, cookies, and bread.',
    features: ["Multi-Purpose Use", "Reliable for Baking", "Enriched Flour", "Perfect for Everyday Cooking"]
  },
  {
    id: 'jenan-afghan-atta',
    name: 'Jenan Afghan Atta',
    image: jenanAfghanAttaImg,
    description: "Authentic Afghan-style whole wheat flour. It's perfect for making traditional Afghan bread (Naan-e-Afghani) and other wholesome flatbreads.",
    features: ["Authentic Afghan Style", "Whole Wheat Flour", "Ideal for Flatbreads", "Rich & Nutty Flavor"]
  },
  {
    id: 'grand-mills-chakki-atta',
    name: 'Grand Mills Chakki Atta',
    image: grandMillsChakkiImg,
    description: 'Stone-ground whole wheat flour by Grand Mills that retains natural bran and nutrients, perfect for making soft, fluffy rotis and chapatis.',
    features: ["Stone-Ground (Chakki)", "100% Whole Wheat", "Rich in Fiber", "For Soft Rotis"]
  },
  {
    id: 'grand-mills-chappati-atta',
    name: 'Grand Mills Chappati Atta',
    image: grandMillsChappatiImg,
    description: 'A specialized atta from Grand Mills, milled to perfection for creating incredibly soft and pliable chapatis every time.',
    features: ["Specialized for Chapatis", "Creates Soft Dough", "Easy to Roll", "Perfect for Daily Use"]
  }
];

const testimonialsData = [
    {
      quote: "The consistency and aroma of the 1121 Basmati rice are unparalleled. It's the only brand we trust for our signature biryani dishes across all our hotel locations.",
      name: 'Chef Aadil Al Maktoum',
      title: 'Executive Chef, The Royal Palm Group, Dubai',
      stars: 5,
    },
    {
      quote: "As a global distributor, reliability and quality are non-negotiable. Ferrari Foods delivers on both, every single time. Their packaging and logistics are top-tier.",
      name: 'Isabelle Dubois',
      title: 'Procurement Director, Global Food Imports',
      stars: 5,
    },
    {
      quote: "We switched to Grand Mills Chakki Atta for our family, and the difference in our homemade rotis is incredible. They are softer and taste so much better. Highly recommended!",
      name: 'Priya Sharma',
      title: 'Home Cook & Food Blogger',
      stars: 5,
    },
];

type Product = typeof riceProducts[0];

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const imageVariants: Variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } },
};

const contentContainerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.1 } }
};


// --- Reusable Components ---
const ProductDetailPanel = ({ product, setActiveProductId }: { product: Product, setActiveProductId: (id: string) => void }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveProductId(product.id);
        }
    }, [isInView, setActiveProductId, product.id]);

    return (
        <div ref={ref} className="min-h-screen flex items-center">
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={contentContainerVariants}
            >
                <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</motion.h3>
                <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 max-w-lg">{product.description}</motion.p>
                <motion.div variants={itemVariants} className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Award className="h-5 w-5 text-gray-800 mr-3 flex-shrink-0" />
                        <span className="text-md text-gray-700">{feature}</span>
                      </div>
                    ))}
                </motion.div>
                <motion.div variants={itemVariants}>
                    <motion.button
                        className="group flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { /* Add navigation logic here */ }}
                    >
                        Enquiry
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

const StickyProductShowcase = ({
  title,
  subtitle,
  products,
  imagePosition = 'left'
}: {
  title: string;
  subtitle: string;
  products: Product[];
  imagePosition?: 'left' | 'right';
}) => {
    const [activeProductId, setActiveProductId] = useState(products[0].id);
    const activeProduct = products.find(p => p.id === activeProductId) || products[0];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Sticky Image Column */}
                    <div className={`lg:sticky top-0 lg:h-screen flex items-center justify-center py-8 ${imagePosition === 'right' ? 'lg:order-last' : ''}`}>
                        <div className="relative w-full aspect-square max-w-md bg-gray-100 rounded-2xl shadow-2xl overflow-hidden">
                            <AnimatePresence initial={false}>
                                <motion.img
                                    key={activeProduct.id}
                                    src={activeProduct.image}
                                    alt={activeProduct.name}
                                    variants={imageVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0 w-full h-full object-contain p-4"
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                    {/* Scrolling Text Column */}
                    <div>
                        {products.map((product) => (
                            <ProductDetailPanel key={product.id} product={product} setActiveProductId={setActiveProductId} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- Main Page Component ---
const Products = () => {
  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <div className="h-screen w-full p-4">
        <section className="relative h-full w-full flex items-center justify-center text-white overflow-hidden rounded-3xl">
          <video src={heroImage} autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0" />
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
              Excellence in Every Grain
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Discover our portfolio of premium rice and wheat, cultivated and processed to meet the highest global standards.
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

      {/* --- PRODUCT CATEGORIES INTRO --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specializations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium rice and wheat varieties sourced from the finest global suppliers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wheat className="h-10 w-10 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Rice Varieties</h3>
              <p className="text-gray-600 text-lg">
                From aromatic Basmati to nutritious red rice, our collection features the world's finest rice varieties.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-10 w-10 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Wheat Products</h3>
              <p className="text-gray-600 text-lg">
                From specialty flours to wholesome atta, our wheat products serve diverse culinary applications with excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- RICE SECTION --- */}
      <StickyProductShowcase
        title="Premium Rice Collection"
        subtitle="Carefully selected varieties from trusted global sources."
        products={riceProducts}
      />

      {/* --- WHEAT SECTION --- */}
      <div className="bg-gray-50">
        <StickyProductShowcase
            title="Quality Wheat Collection"
            subtitle="Professional-grade wheat varieties for diverse applications."
            products={wheatProducts}
            imagePosition="right"
        />
      </div>

      {/* --- NEW TESTIMONIALS SECTION --- */}
      <motion.section
        className="py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted By Professionals Worldwide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our commitment to quality has earned the praise of chefs, distributors, and families alike.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col border border-gray-100"
                variants={itemVariants}
              >
                <Quote className="w-10 h-10 text-gray-300 mb-4" />
                <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <div className="flex items-center mb-3">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- UPDATED CTA & QUALITY ASSURANCE SECTION --- */}
      <section className="bg-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quality Assurance Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="p-6"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Award className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-xl font-bold mb-2">International Standards</h3>
              <p className="text-gray-300">
                Every product meets the highest international standards of quality, hygiene, and compliance.
              </p>
            </motion.div>
            <motion.div
              className="p-6"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Package className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-xl font-bold mb-2">Premium Packaging</h3>
              <p className="text-gray-300">
                State-of-the-art packaging ensures freshness and quality from our facilities to your door.
              </p>
            </motion.div>
            <motion.div
              className="p-6"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Truck className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-xl font-bold mb-2">Reliable Delivery</h3>
              <p className="text-gray-300">
                Global logistics network ensures timely delivery across all our international markets.
              </p>
            </motion.div>
          </motion.div>

          {/* New Call-to-Action */}
          <motion.div
            className="text-center bg-gray-700/50 p-10 rounded-2xl border border-gray-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Source the Finest Grains?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Partner with us to elevate your offerings with premium-quality rice and wheat. Contact our team today for wholesale inquiries and tailored solutions.
            </p>
            <motion.button
              className="bg-white text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { /* Add navigation logic here, e.g., to '/contact' */ }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;