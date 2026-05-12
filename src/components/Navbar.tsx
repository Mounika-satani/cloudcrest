import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/cloudcrest-logo.png';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Incorporation Services', href: '/incorporation-services' },
      { label: 'Bookkeeping & Reporting', href: '/bookkeeping-and-reporting' },
      { label: 'Payroll Management', href: '/payroll-management-service' },
      { label: 'GST Compliance & Advisory', href: '/gst-and-tax-advisory' },
      { label: 'Tax – Domestic & International', href: '/tax-domestic-and-international' },
      { label: 'Internal Audit & Risk Management', href: '/internal-audit-risk-management' },
      { label: 'IndAS Advisory', href: '/ind-as-advisory' },
      { label: 'Company Law & Legal Advisory', href: '/company-law-legal-advisory-services' },
    ],
  },
  {
    label: 'Consulting',
    href: '/#consulting',
    children: [
      { label: 'Tax Representation', href: '/tax-representation-services' },
      { label: 'Virtual CFO', href: '/virtual-cfo-services' },
      { label: 'Feasibility Reports (DPR)', href: '/detailed-project-report' },
    ],
  },
  {
    label: 'Our Insights',
    href: '#',
    children: [
      { label: 'Tax Insights', href: '/tax-domestic-and-international' },
      { label: 'GST Insights', href: '/gst-and-tax-advisory' },
      { label: 'IndAs Insights', href: '/ind-as-advisory' },
      { label: 'Other Business Insights', href: '/detailed-project-report' },
    ],
  },
  {
    label: 'About',
    href: '/about-us',
    children: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our People', href: '/our-people' },
    ],
  },
  { label: 'Contact', href: '/contact-us' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const showTransparent = !isScrolled && isHomePage;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showTransparent
          ? 'bg-transparent py-5'
          : 'bg-background/95 backdrop-blur-lg shadow-lg py-3'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="CloudCrest" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${showTransparent
                    ? 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
                    : 'text-foreground hover:text-accent hover:bg-accent/10'
                  }`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </Link>

              <AnimatePresence>
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/compliances-calendar">
            <Button variant={showTransparent ? 'hero-outline' : 'outline'} size="sm">
              Compliances Calendar
            </Button>
          </Link>
          <Link to="/contact-us">
            <Button variant={showTransparent ? 'hero' : 'accent'} size="sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg ${showTransparent ? 'text-primary-foreground' : 'text-foreground'
            }`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => !item.children && setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium block"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors block"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <Link to="/compliances-calendar" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Compliances Calendar</Button>
                </Link>
                <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="accent" className="w-full">Get Started</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
