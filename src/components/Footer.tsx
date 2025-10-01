import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Linkedin, Instagram, Twitter, Send } from 'lucide-react';
import { motion } from 'framer-motion';

// A component for footer links with hover animations
const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <motion.li whileHover={{ x: 5, color: '#C6A664' }} transition={{ duration: 0.2 }}>
        <Link to={to} className="transition-colors">
            {children}
        </Link>
    </motion.li>
);


const Footer = () => {
  // Brand colors with an added hover state for the accent color
  const brandColors = {
    primary: '#1a1a1a',      // A very dark gray, almost black for background
    secondary: '#2c2c2c',    // Slightly lighter gray for accents
    accent: '#C6A664',       // The main gold/amber color
    accentHover: '#d4b375',  // A slightly lighter gold for hover effects
    textPrimary: '#F5F5F5',  // Off-white for main text
    textSecondary: '#a3a3a3',// Lighter gray for secondary text
  };

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ];

  return (
    <footer style={{ backgroundColor: brandColors.primary, color: brandColors.textPrimary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section: Logo, Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pb-12 border-b" style={{ borderColor: brandColors.secondary }}>
          <div className="flex items-center space-x-4">
            {/* --- CORRECTED LOGO PATH --- */}
            <img src="src/assets/logo.png" alt="Ferrari Foods LLC Logo" className="h-12 w-12" />
            {/* --- UPDATED NAME & ADDED ARABIC SUBHEADING --- */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Ferrari Foods LLC</h2>
              <p className="text-md" style={{ color: brandColors.textSecondary }}>فيراري فودز ذ.م.م</p>
            </div>
          </div>
          <div className="w-full max-w-md">
            <h3 className="text-xl font-semibold mb-3">Join Our Newsletter</h3>
            <p className="mb-4" style={{ color: brandColors.textSecondary }}>
              Get the latest updates on our products, market insights, and partnership opportunities.
            </p>
            <form className="flex items-center w-full p-1 rounded-full" style={{ backgroundColor: brandColors.secondary }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500"
              />
              {/* --- UPDATED NEWSLETTER BUTTON HOVER EFFECT --- */}
              <motion.button 
                type="submit"
                className="p-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: brandColors.accent }}
                whileHover={{ scale: 1.05, backgroundColor: brandColors.accentHover }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Send className="h-5 w-5" style={{ color: brandColors.primary }} />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider uppercase">Company</h3>
            <ul className="space-y-4" style={{ color: brandColors.textSecondary }}>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/team">Our Team</FooterLink>
              <FooterLink to="/sustainability">Sustainability</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider uppercase">Products</h3>
            <ul className="space-y-4" style={{ color: brandColors.textSecondary }}>
              <FooterLink to="/products/rice">Rice Varieties</FooterLink>
              <FooterLink to="/products/wheat">Wheat Products</FooterLink>
              <FooterLink to="/products/private-label">Private Label</FooterLink>
              <FooterLink to="/quality">Quality Assurance</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider uppercase">Partnerships</h3>
            <ul className="space-y-4" style={{ color: brandColors.textSecondary }}>
              <FooterLink to="/partners">Become a Partner</FooterLink>
              <FooterLink to="/partners/distributors">Distributors</FooterLink>
              <FooterLink to="/partners/retail">Retailers</FooterLink>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider uppercase">Contact</h3>
            <ul className="space-y-4" style={{ color: brandColors.textSecondary }}>
              <li>info@ferrarifoods.com</li>
              <li>+971-585839040</li>
              <li>United Arab Emirates</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t" style={{ borderColor: brandColors.secondary }}>
          <p style={{ color: brandColors.textSecondary }}>&copy; {new Date().getFullYear()} Ferrari Foods LLC. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a 
                key={social.name} 
                href={social.href} 
                aria-label={social.name}
                className="p-2 rounded-full"
                style={{ color: brandColors.textSecondary, backgroundColor: brandColors.secondary }}
                whileHover={{ scale: 1.15, y: -2, color: brandColors.accent }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;