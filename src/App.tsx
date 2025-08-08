import React, { useState, useEffect } from 'react';
import { Truck, MapPin, Phone, Mail, Shield, Award, Clock, Users, Menu, X, ArrowRight, Star } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <img 
                  src="https://i.postimg.cc/Pfvnpj7p/19-CB49-AA-8475-450-B-A10-C-926-B50184-FFF.jpg" 
                  alt="West Gate Transport Logo" 
                  className="h-8 sm:h-12 lg:h-16 w-auto object-contain filter drop-shadow-lg"
                />
              </div>
              <span className="text-sm sm:text-xl lg:text-2xl font-bold tracking-tight">West Gate Transport</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium hover:text-gray-600 transition-colors duration-200">Home</a>
              <a href="#about" className="text-sm font-medium hover:text-gray-600 transition-colors duration-200">About</a>
              <a href="#services" className="text-sm font-medium hover:text-gray-600 transition-colors duration-200">Services</a>
              <a href="#contact" className="text-sm font-medium hover:text-gray-600 transition-colors duration-200">Contact</a>
              <a href="tel:8188180732" className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md border-t`}>
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block text-base font-medium hover:text-gray-600 transition-colors py-2 touch-manipulation">Home</a>
            <a href="#about" className="block text-base font-medium hover:text-gray-600 transition-colors py-2 touch-manipulation">About</a>
            <a href="#services" className="block text-base font-medium hover:text-gray-600 transition-colors py-2 touch-manipulation">Services</a>
            <a href="#contact" className="block text-base font-medium hover:text-gray-600 transition-colors py-2 touch-manipulation">Contact</a>
            <a href="tel:8188180732" className="block w-full bg-black text-white px-6 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors text-center touch-manipulation mt-4">
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Prominent Logo */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-black/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20 lg:pt-24">
          {/* PROMINENT LOGO SHOWCASE - Responsive sizing */}
          <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
            <img 
              src="https://i.postimg.cc/Pfvnpj7p/19-CB49-AA-8475-450-B-A10-C-926-B50184-FFF.jpg" 
              alt="West Gate Transport Logo" 
              className="h-24 sm:h-40 md:h-48 lg:h-64 w-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* Company name with logo emphasis */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 lg:mb-12 leading-tight tracking-tight">
            <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              West Gate Transport
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-5xl mx-auto leading-relaxed font-light px-2">
            Premium freight transportation services with unmatched reliability and professional excellence
          </p>

          {/* Credentials with enhanced styling - Mobile optimized */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-12 sm:mb-16 lg:mb-20 px-2">
            <div className="bg-black text-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-bold shadow-xl">
              <span className="hidden xs:inline">US DOT </span>3652712
            </div>
            <div className="bg-black text-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-bold shadow-xl">
              MC 1259657
            </div>
            <div className="bg-gray-100 text-black px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-bold border-2 border-gray-300">
              Licensed & Insured - 250K Cargo Insurance
            </div>
          </div>

          {/* CTA Buttons - Mobile optimized */}
          <div className="flex flex-col gap-6 justify-center items-center px-4">
            <div className="text-center">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4">Call for Your Quote</p>
              <a href="tel:8188180732" className="text-black px-6 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-3 border-2 border-gray-200 hover:border-gray-300 bg-white shadow-lg hover:shadow-xl touch-manipulation min-h-[60px]">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>(818) 818-0732</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Logo Integration */}
      <section id="about" className="py-16 sm:py-20 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="space-y-8 sm:space-y-10">
              {/* Logo integration in about section - Mobile optimized */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
                <img 
                  src="https://i.postimg.cc/Pfvnpj7p/19-CB49-AA-8475-450-B-A10-C-926-B50184-FFF.jpg" 
                  alt="West Gate Transport Logo" 
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                />
                <div className="hidden sm:block h-16 w-px bg-gray-300"></div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                    Excellence in Every Mile
                  </h2>
                </div>
              </div>
              
              <div className="space-y-6 sm:space-y-8 text-gray-600 text-lg sm:text-xl leading-relaxed">
                <p>
                  West Gate Transport represents the pinnacle of owner-operated trucking excellence in Desert Hot Springs, California. 
                  We've built our reputation on delivering more than just freight—we deliver peace of mind.
                </p>
                <p>
                  Our commitment to precision, reliability, and customer satisfaction has established us as the trusted choice 
                  for businesses that demand nothing less than perfection in their logistics partnerships.
                </p>
              </div>

              {/* Enhanced Stats - Mobile optimized */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3">100%</div>
                  <div className="text-gray-600 font-semibold text-base sm:text-lg">On-Time Delivery</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3">24/7</div>
                  <div className="text-gray-600 font-semibold text-base sm:text-lg">Support Available If We Are Under A Load For You</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Enhanced Feature cards - Mobile optimized */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-black text-white rounded-2xl p-3 sm:p-4 flex-shrink-0">
                    <Shield className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Licensed & Insured</h3>
                    <p className="text-gray-600 text-base sm:text-lg">Fully compliant with all DOT regulations and industry standards</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-black text-white rounded-2xl p-3 sm:p-4 flex-shrink-0">
                    <Clock className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Precision Timing</h3>
                    <p className="text-gray-600 text-base sm:text-lg">Reliable scheduling and delivery windows you can depend on</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-black text-white rounded-2xl p-3 sm:p-4 flex-shrink-0">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Personal Service</h3>
                    <p className="text-gray-600 text-base sm:text-lg">Direct communication with the owner for personalized attention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile optimized */}
      <section id="services" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12">Premium Services</h2>
            <p className="text-lg sm:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto font-light px-2">
              Comprehensive freight solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <div className="group bg-white p-8 sm:p-10 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100">
              <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Local Freight</h3>
              <p className="text-gray-600 text-center leading-relaxed text-base sm:text-lg">
                Fast and efficient local delivery services throughout Desert Hot Springs and the greater Coachella Valley region.
              </p>
            </div>

            <div className="group bg-white p-8 sm:p-10 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100">
              <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Regional Transport</h3>
              <p className="text-gray-600 text-center leading-relaxed text-base sm:text-lg">
                Regional freight services within California and surrounding areas with reliable delivery schedules.
              </p>
            </div>

            <div className="group bg-white p-8 sm:p-10 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100">
              <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">OTR (Over The Road)</h3>
              <p className="text-gray-600 text-center leading-relaxed text-base sm:text-lg">
                Long-haul over-the-road freight transportation across multiple states with professional cross-country delivery services.
              </p>
            </div>

            <div className="group bg-white p-8 sm:p-10 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100 md:col-span-2 lg:col-span-3">
              <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Specialized Cargo</h3>
              <p className="text-gray-600 text-center leading-relaxed text-base sm:text-lg">
                Expert handling of high-value and specialized freight requiring enhanced security and careful attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile optimized */}
      <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12">Get In Touch</h2>
            <p className="text-lg sm:text-2xl lg:text-3xl text-gray-600 font-light px-2">
              Ready to experience premium freight transportation?
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-3xl p-6 sm:p-8 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <Phone className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Call Us</h3>
                <p className="text-gray-600 mb-2 sm:mb-3 text-base sm:text-lg">Ready to help</p>
                <a href="tel:8188180732" className="text-lg sm:text-xl font-bold text-black hover:text-gray-600 transition-colors touch-manipulation">
                  (818) 818-0732
                </a>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-3xl p-6 sm:p-8 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <MapPin className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-2 sm:mb-3 text-base sm:text-lg">Our headquarters</p>
                <address className="text-lg sm:text-xl font-bold text-black not-italic">
                  10900 Telimo Way<br />
                  Desert Hot Springs, CA 92240
                </address>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-3xl p-6 sm:p-8 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <Mail className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Email Us</h3>
                <p className="text-gray-600 mb-2 sm:mb-3 text-base sm:text-lg">Quick response guaranteed</p>
                <a href="mailto:info@westgatetransportationllc.com" className="text-lg sm:text-xl font-bold text-black hover:text-gray-600 transition-colors touch-manipulation break-all">
                  info@westgatetransportationllc.com
                </a>
              </div>
            </div>

            {/* Call to action with logo - Mobile optimized */}
            <div className="text-center mt-16 sm:mt-20 lg:mt-24">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 sm:p-12 lg:p-16 rounded-3xl border-2 border-gray-100 shadow-xl">
                <div className="flex justify-center mb-6 sm:mb-8">
                  <img 
                    src="https://i.postimg.cc/Pfvnpj7p/19-CB49-AA-8475-450-B-A10-C-926-B50184-FFF.jpg" 
                    alt="West Gate Transport Logo" 
                    className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Ship?</h3>
                <p className="text-gray-600 mb-8 sm:mb-10 text-lg sm:text-xl font-light px-2">
                  Call us today for a personalized quote and experience the West Gate Transport difference.
                </p>
                <a href="tel:8188180732" className="bg-black text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl inline-flex items-center space-x-3 touch-manipulation">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span>Call (818) 818-0732</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Prominent Logo - Mobile optimized */}
      <footer className="bg-black text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex justify-center mb-6 sm:mb-8">
              <img 
                src="https://i.postimg.cc/Pfvnpj7p/19-CB49-AA-8475-450-B-A10-C-926-B50184-FFF.jpg" 
                alt="West Gate Transport Logo" 
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">West Gate Transport</h3>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-light px-2">
              Premium freight transportation services built on trust, reliability, and uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-10 sm:mb-12">
            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contact</h4>
              <div className="space-y-3 sm:space-y-4 text-gray-400 text-base sm:text-lg">
                <p className="flex items-center justify-center space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>(818) 818-0732</span>
                </p>
                <p className="flex items-start justify-center space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
                  <span>10900 Telimo Way<br />Desert Hot Springs, CA 92240</span>
                </p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Credentials</h4>
              <div className="space-y-3 sm:space-y-4 text-gray-400 text-base sm:text-lg">
                <div className="flex items-center justify-center space-x-3">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>US DOT: 3652712</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>MC: 1259657</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>

            <div className="text-center md:col-span-2 lg:col-span-1">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Services</h4>
              <div className="space-y-2 sm:space-y-3 text-gray-400 text-base sm:text-lg">
                <p>Local Freight</p>
                <p>Regional Transport</p>
                <p>OTR (Over The Road)</p>
                <p>Specialized Cargo</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg px-2">
              &copy; 2025 West Gate Transport. All rights reserved. | Professional freight transportation services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;