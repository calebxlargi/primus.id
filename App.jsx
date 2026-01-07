import React from 'react';
import { 
  Lock, 
  Menu, 
  Container, 
  Anchor, 
  Car, 
  PackageSearch, 
  Ship, 
  Warehouse, 
  Receipt, 
  CalendarClock, 
  Clock, 
  Users, 
  Zap, 
  BarChart3, 
  CreditCard, 
  BellRing, 
  Truck, 
  Mail 
} from 'lucide-react';

function App() {
  return (
    <div className="antialiased overflow-x-hidden min-h-screen">
      {/* Ambient Lighting & Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Main Hero Background (Video) */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://pmqiacxzrzmmipsq.public.blob.vercel-storage.com/xlargi_hero.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay to ensure text readability - slightly reduced opacity for visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-midnight-950/80 via-midnight-950/40 to-midnight-950"></div>
        </div>

        {/* Top Left Red Glow */}
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-red-900/20 rounded-full blur-[120px] animate-spotlight mix-blend-screen"></div>
        {/* Bottom Right Subtle Orange/Red */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-orange-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-noise z-10 opacity-30"></div>
      </div>

      {/* Header / Logo Area */}
      <header className="fixed top-0 w-full z-50 py-8 px-8 md:px-12 flex justify-between items-center md:items-start transition-all duration-300">
        {/* Empty Left (for balance) or Menu Icon */}
        <div className="w-24 hidden md:block"></div>

        {/* Center Logo (Updated with Pi Symbol) */}
        <div className="flex flex-col items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-4">
            {/* Custom Pi SVG */}
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 25C10 18 15 15 25 15H85C88 15 90 17 90 20C90 25 85 28 80 28H70V80C70 85 73 85 75 85C78 85 80 82 82 78" stroke="#D2232A" strokeWidth="12" strokeLinecap="round"/>
              <path d="M35 28V70C35 85 25 90 15 90" stroke="#D2232A" strokeWidth="12" strokeLinecap="round"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold tracking-tight text-white leading-none">Primus</span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Prime ICT Services</span>
            </div>
          </div>
        </div>

        {/* Right Action */}
        <div className="w-24 flex justify-end opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#contact" className="hidden md:flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase border border-white/20 px-4 py-2 rounded hover:bg-white/5 hover:border-accent-main/50 transition-all duration-300 text-neutral-300">
            <Mail className="w-3 h-3 text-accent-main" />
            Contact Us
          </a>
          <button className="md:hidden text-white"><Menu className="w-6 h-6" /></button>
        </div>
      </header>

      <main className="relative z-30 min-h-screen flex flex-col items-center justify-center px-6 pt-24 md:pt-0">
        
        {/* Hero Content */}
        <div className="text-center max-w-6xl mx-auto mt-0 md:mt-[-5vh]">
            
          {/* Eyebrow Text */}
          <div className="mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <span className="text-[10px] md:text-xs font-bold tracking-widest-xl uppercase text-accent-main bg-accent-main/10 px-3 py-1 rounded border border-accent-main/20">
              System Integrator & Tech Leader
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white tracking-tight leading-[1.1] mb-10 opacity-0 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            Primus Brings You Closer <br />
            <span className="text-neutral-500">to Automation</span>
          </h1>

          {/* Description Paragraph */}
          <div className="max-w-4xl mx-auto mb-16 opacity-0 animate-slide-up" style={{ animationDelay: '1s' }}>
            <p className="text-neutral-300 text-base md:text-lg font-light leading-relaxed">
              In the midst of a world spurred by the fast-paced evolution of technology, demands have transformed from basic Information Communication Technology (ICT) requirements to those that are integrated, fast, and most of all, reliable. Imagine the need for technology in the different business sectors, multiplied by the many countries all over the globe – and then zero in on the ASEAN region.
            </p>
          </div>

          {/* Central Navigation Bar (The "Dock") */}
          <div className="opacity-0 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <nav className="hidden md:inline-flex items-center justify-center gap-1 p-1 bg-white/5 border border-white/5 backdrop-blur-md rounded-full shadow-2xl shadow-black/50">
              <a href="#about" className="nav-link px-6 py-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors">Vision</a>
              <span className="text-neutral-700">/</span>
              <a href="#eagle" className="nav-link px-6 py-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors">1-Eagle</a>
              <span className="text-neutral-700">/</span>
              <a href="#solutions" className="nav-link px-6 py-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors">Troboss</a>
              <span className="text-neutral-700">/</span>
              <a href="#clients" className="nav-link px-6 py-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors">Clients</a>
              <span className="text-neutral-700">/</span>
              <a href="#contact" className="nav-link px-6 py-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

        </div>

        {/* Bottom Footer Text (Hero) */}
        <div className="absolute bottom-12 text-center w-full px-6 opacity-0 animate-fade-in" style={{ animationDelay: '1.6s' }}>
          <p className="text-neutral-500 text-xs md:text-sm font-light max-w-xl mx-auto tracking-wide">
            <span className="text-white font-medium">Invitation Only.</span> Unmatched access to the world's most advanced port logistics and system integration.
          </p>
        </div>

      </main>

      {/* Content Sections (Below Fold) */}
    
      {/* About / Vision Section */}
      <section id="about" className="relative z-30 py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-accent-main text-[10px] font-bold tracking-widest uppercase mb-4 block">The Vision</span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-8 leading-snug">
              Building the digital backbone for <span className="text-neutral-500">tomorrow's industries.</span>
            </h2>
          </div>
          <div className="space-y-8 text-neutral-400 font-light leading-relaxed">
            <p>
              Founded in 1992, PT Primus Indonesia has transformed from basic ICT requirements to delivering integrated, fast, and reliable automation solutions.
            </p>
            <p>
              We operate in the shadows of the world's busiest ports, ensuring that the global supply chain moves seamlessly. From yard operations to billing, our systems are the silent engines of commerce.
            </p>
            <div className="pt-4">
              <a href="#services" className="text-white text-xs font-bold tracking-widest uppercase border-b border-white/20 pb-1 hover:border-accent-main hover:text-accent-main transition-colors">Read the Manifesto</a>
            </div>
          </div>
        </div>
      </section>

      {/* 1-EAGLE Integrated Solutions Section */}
      <section id="eagle" className="relative z-30 py-32 bg-midnight-950 border-t border-white/5 overflow-hidden">
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-main/30 bg-accent-main/10 text-accent-main text-[10px] font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-main animate-pulse"></span>
              Total Cloud Solution
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-white tracking-tight">1-EAGLE Ecosystem</h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">Integrated Sea Port Operating Systems. A unified mesh of cloud solutions connecting every node of the supply chain.</p>
          </div>

          {/* Ecosystem Diagram Layout */}
          <div className="relative">
                
            {/* Central Hub */}
            <div className="flex justify-center mb-20 relative">
              <div className="absolute inset-0 bg-accent-main/20 blur-[80px] rounded-full"></div>
              <div className="relative z-10 bg-midnight-900 border border-accent-main/30 p-8 rounded-2xl text-center shadow-[0_0_50px_rgba(210,35,42,0.2)] max-w-md w-full">
                <h3 className="text-3xl font-display font-bold text-white mb-2"><span className="text-accent-main">1</span>-EAGLE</h3>
                <p className="text-xs text-neutral-400 uppercase tracking-widest">Core Cloud Engine</p>
              </div>
              {/* Connector Lines (Visual CSS only for simplicity) */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 h-20 w-px bg-gradient-to-b from-accent-main to-transparent opacity-50"></div>
            </div>

            {/* System Modules Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    
              {/* Module 1: Depot */}
              <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-accent-main/50 transition-all duration-300 group">
                <div className="text-accent-main mb-4 opacity-70 group-hover:opacity-100 transition-opacity"><Container className="w-8 h-8" /></div>
                <h4 className="text-white font-bold mb-1">DEPOT</h4>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Container Depot OS</p>
              </div>

              {/* Module 2: Marine */}
              <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-accent-main/50 transition-all duration-300 group">
                <div className="text-accent-main mb-4 opacity-70 group-hover:opacity-100 transition-opacity"><Anchor className="w-8 h-8" /></div>
                <h4 className="text-white font-bold mb-1">MARINE</h4>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Marine Operating System</p>
              </div>

              {/* Module 3: Car */}
              <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-accent-main/50 transition-all duration-300 group">
                <div className="text-accent-main mb-4 opacity-70 group-hover:opacity-100 transition-opacity"><Car className="w-8 h-8" /></div>
                <h4 className="text-white font-bold mb-1">CAR</h4>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Vehicle Terminal OS</p>
              </div>

              {/* Module 4: Container */}
              <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-accent-main/50 transition-all duration-300 group">
                <div className="text-accent-main mb-4 opacity-70 group-hover:opacity-100 transition-opacity"><PackageSearch className="w-8 h-8" /></div>
                <h4 className="text-white font-bold mb-1">CONTAINER</h4>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Container Terminal OS</p>
              </div>

              {/* Module 5: Cargo */}
              <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-accent-main/50 transition-all duration-300 group">
                <div className="text-accent-main mb-4 opacity-70 group-hover:opacity-100 transition-opacity"><Ship className="w-8 h-8" /></div>
                <h4 className="text-white font-bold mb-1">CARGO</h4>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Multipurpose Terminal</p>
              </div>

              {/* Module 6: Warehouse */}
              <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-accent-main/50 transition-all duration-300 group">
                <div className="text-accent-main mb-4 opacity-70 group-hover:opacity-100 transition-opacity"><Warehouse className="w-8 h-8" /></div>
                <h4 className="text-white font-bold mb-1">WAREHOUSE</h4>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Container Freight Station</p>
              </div>

              {/* Module 7: Billing */}
              <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-accent-main/50 transition-all duration-300 group">
                <div className="text-accent-main mb-4 opacity-70 group-hover:opacity-100 transition-opacity"><Receipt className="w-8 h-8" /></div>
                <h4 className="text-white font-bold mb-1">BILLING</h4>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Cargo & Container Billing</p>
              </div>

              {/* Module 8: Appointment */}
              <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-accent-main/50 transition-all duration-300 group">
                <div className="text-accent-main mb-4 opacity-70 group-hover:opacity-100 transition-opacity"><CalendarClock className="w-8 h-8" /></div>
                <h4 className="text-white font-bold mb-1">APPOINTMENT</h4>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Vehicle Booking System</p>
              </div>

            </div>

            {/* Integration Strip */}
            <div className="mt-16 border-t border-white/5 pt-12">
              <p className="text-center text-neutral-500 text-[10px] font-bold tracking-widest uppercase mb-8">Seamless Integrations With</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-50">
                <span className="text-white font-display text-sm tracking-wide">Customs</span>
                <span className="text-neutral-700">/</span>
                <span className="text-white font-display text-sm tracking-wide">INSW-Inaport</span>
                <span className="text-neutral-700">/</span>
                <span className="text-white font-display text-sm tracking-wide">Quarantine</span>
                <span className="text-neutral-700">/</span>
                <span className="text-white font-display text-sm tracking-wide">Shipping Lines</span>
                <span className="text-neutral-700">/</span>
                <span className="text-white font-display text-sm tracking-wide">Banks</span>
                <span className="text-neutral-700">/</span>
                <span className="text-white font-display text-sm tracking-wide">Forwarders</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TROBOSS ADVANTAGES Section */}
      <section id="solutions" className="relative z-30 py-32 px-6 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-accent-main text-[10px] font-bold tracking-widest uppercase block mb-4">Flagship Solution</span>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-2">TROBOSS</h2>
            <h3 className="text-xl md:text-2xl text-neutral-400 font-light tracking-wide uppercase">Truck Online Booking System</h3>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-3 gap-8">
                
            {/* Card 1: Terminal (Green Theme inspired, adapted to Midnight) */}
            <div className="bg-midnight-900 border border-white/5 p-8 rounded-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-green-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-white mb-8 border-b border-white/10 pb-4">TERMINAL</h4>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-lg text-green-400"><Clock className="w-6 h-6" /></div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Reduce Queue</h5>
                      <p className="text-sm text-neutral-500">Minimize congestion at Port gates through scheduled arrivals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-lg text-green-400"><Container className="w-6 h-6" /></div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Field Utilization</h5>
                      <p className="text-sm text-neutral-500">Optimize yard stacking and equipment allocation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Customers (Yellow Theme inspired, adapted to Midnight) */}
            <div className="bg-midnight-900 border border-white/5 p-8 rounded-2xl relative group overflow-hidden transform md:-translate-y-4">
              <div className="absolute inset-0 bg-yellow-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-white mb-8 border-b border-white/10 pb-4">CUSTOMERS</h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/5 rounded-lg text-yellow-400"><Users className="w-5 h-5" /></div>
                    <span className="text-sm text-neutral-300">Select from variety of trucking providers</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/5 rounded-lg text-yellow-400"><Zap className="w-5 h-5" /></div>
                    <span className="text-sm text-neutral-300">Time efficiency (Nearest truck logic)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/5 rounded-lg text-yellow-400"><BarChart3 className="w-5 h-5" /></div>
                    <span className="text-sm text-neutral-300">Competitive pricing tarifs</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/5 rounded-lg text-yellow-400"><CreditCard className="w-5 h-5" /></div>
                    <span className="text-sm text-neutral-300">Online Payment Integration</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/5 rounded-lg text-yellow-400"><BellRing className="w-5 h-5" /></div>
                    <span className="text-sm text-neutral-300">Real-time notifications & tracking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Trucking Company (White Theme inspired) */}
            <div className="bg-midnight-900 border border-white/5 p-8 rounded-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-white mb-8 border-b border-white/10 pb-4">TRUCKING COMPANY</h4>
                <div className="h-full flex flex-col justify-center">
                  <div className="flex flex-col items-center text-center gap-6">
                    <div className="p-6 bg-white/5 rounded-full text-white border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                      <Truck className="w-12 h-12" />
                    </div>
                    <div>
                      <h5 className="text-xl text-white font-semibold mb-2">Optimize Truck Utilization</h5>
                      <p className="text-sm text-neutral-500">Maximize fleet efficiency and reduce idle time through smart scheduling.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CLIENTS / PARTNERS Section (Consolidated) */}
      <section id="clients" className="relative z-30 py-32 px-6 md:px-12 border-t border-white/5 bg-midnight-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-main text-[10px] font-bold tracking-widest uppercase mb-4 block">Trusted By</span>
            <h2 className="text-3xl md:text-5xl font-display text-white mb-8">Our Clients</h2>
            <p className="text-neutral-400 font-light leading-relaxed">
              We have been privileged to collaborate and work with many clients over the years. Here are some of our most valued business partners, whose success stories reflect our dedication to quality solutions.
            </p>
          </div>

          {/* Consolidated Logo Grid - 48 Images */}
          {/* Tighter Grid Layout */}
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 gap-y-8 items-center justify-items-center">
            
            {Array.from({ length: 48 }).map((_, index) => (
              <div key={index} className="w-24 h-10 flex items-center justify-center">
                <img 
                  src={`https://pmqiacxzrzmmipsq.public.blob.vercel-storage.com/${index + 1}client.png`} 
                  alt={`Client Logo ${index + 1}`} 
                  className="w-full h-full object-contain" 
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* OUR PRINCIPALS Section */}
      <section id="principals" className="relative z-30 py-32 px-6 md:px-12 border-t border-white/5 bg-midnight-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent-main text-[10px] font-bold tracking-widest uppercase mb-4 block">Our Partners</span>
            <h2 className="text-3xl md:text-5xl font-display text-white mb-8">Our Principals</h2>
            <p className="text-neutral-400 font-light leading-relaxed">
              As PI continues to focus on continuous solution development to meet our clients’ evolving needs, we collaborate with some of the most reputable companies in technology and logistics solutions. Our business partners are industry leaders at the forefront of innovation, supporting the delivery of reliable, scalable, and future-ready IT and logistics services. Meet some of our valued partners:
            </p>
          </div>

          {/* Principals Grid */}
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center">
            {[
              "https://pmqiacxzrzmmipsq.public.blob.vercel-storage.com/1principle.png",
              "https://pmqiacxzrzmmipsq.public.blob.vercel-storage.com/2principle.png",
              "https://pmqiacxzrzmmipsq.public.blob.vercel-storage.com/3principle.png",
              "https://pmqiacxzrzmmipsq.public.blob.vercel-storage.com/4principle.png",
              "https://pmqiacxzrzmmipsq.public.blob.vercel-storage.com/5principle.png"
            ].map((url, index) => (
              <div key={index} className="w-40 h-16 flex items-center justify-center">
                <img 
                  src={url} 
                  alt={`Principal Logo ${index + 1}`} 
                  className="w-full h-full object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-30 py-24 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-display text-white mb-16">Initiate Contact</h2>
            
          <div className="max-w-7xl mx-auto space-y-16">
                
            {/* Addresses Grid (Updated to 4 columns) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 items-start">
                    
              {/* Head Office */}
              <div className="space-y-4 flex flex-col items-center">
                <h3 className="text-accent-main text-[10px] font-bold tracking-widest uppercase border-b border-white/10 pb-2 mb-2">Head Office</h3>
                <p className="text-neutral-300 text-sm font-light leading-relaxed">
                  Plaza Pasifik Blok A2/33<br />
                  Jl. Raya Boulevard Barat, Kelapa Gading<br />
                  Jakarta 14240, Indonesia
                </p>
              </div>

              {/* Sales Office */}
              <div className="space-y-4 flex flex-col items-center">
                <h3 className="text-accent-main text-[10px] font-bold tracking-widest uppercase border-b border-white/10 pb-2 mb-2">Sales Office</h3>
                <p className="text-neutral-300 text-sm font-light leading-relaxed">
                  Central Park Office Tower 23rd Floor Unit 03<br />
                  Jl. Letjen S. Parman Kav 28<br />
                  Jakarta 11470, Indonesia
                </p>
              </div>

              {/* Cable Division */}
              <div className="space-y-4 flex flex-col items-center">
                <h3 className="text-accent-main text-[10px] font-bold tracking-widest uppercase border-b border-white/10 pb-2 mb-2">Cable Division</h3>
                <p className="text-neutral-300 text-sm font-light leading-relaxed">
                  Gading Bukit Indah Blok A/2<br />
                  Kelapa Gading<br />
                  Jakarta 14240, Indonesia
                </p>
                <div className="pt-1 flex flex-col items-center gap-1">
                  <p className="text-neutral-400 font-mono text-xs tracking-wide">P: +6221 451 8168</p>
                  <a href="mailto:cables@primus.co.id" className="group flex items-center gap-2 text-white hover:text-accent-main transition-colors text-xs font-light">
                    <Mail className="w-3 h-3 text-neutral-600 group-hover:text-accent-main transition-colors" />
                    cables@primus.co.id
                  </a>
                </div>
              </div>

              {/* Warehouses (New Column) */}
              <div className="space-y-4 flex flex-col items-center">
                <h3 className="text-accent-main text-[10px] font-bold tracking-widest uppercase border-b border-white/10 pb-2 mb-2">Warehouses</h3>
                <div className="text-neutral-300 text-sm font-light leading-relaxed space-y-4">
                  <p>
                    Kompleks Pergudangan Prima Center 1<br />
                    Jl. Pool PPD Pesing Poglar No. 11, Blok B1<br />
                    Jakarta, Indonesia
                  </p>
                  <p>
                    Marunda Center Blok Q2/28<br />
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>

            </div>

            {/* Service Points & Logistic Centers (New Section) */}
            <div className="border-t border-white/5 pt-12">
              <h3 className="text-accent-main text-xs font-bold tracking-widest uppercase mb-10">Service Points & Logistic Centers</h3>
                    
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start text-sm font-light text-neutral-400 leading-relaxed">
                        
                {/* Col 1: Surabaya */}
                <div className="space-y-6 flex flex-col items-center">
                  <div className="space-y-1">
                    <strong className="text-white block font-medium">Surabaya</strong>
                    <p>Ciputra World Office Tower 26-11<br />Jl. Mayjen. Sungkono, 60224</p>
                  </div>
                  <div className="space-y-1">
                    <p>Ruko Kalianak Blok A/9<br />Jl. Kalianak Raya No. 73, 60183</p>
                  </div>
                </div>

                {/* Col 2: Semarang & Bandung */}
                <div className="space-y-6 flex flex-col items-center">
                  <div className="space-y-1">
                    <strong className="text-white block font-medium">Semarang</strong>
                    <p>Graha Candi Golf<br />Jl. Amarilis Blok B VIII/46, 50255</p>
                  </div>
                  <div className="space-y-1">
                    <strong className="text-white block font-medium">Bandung</strong>
                    <p>Marbella Dago Pakar 1516<br />Bandung 40198</p>
                  </div>
                </div>

                {/* Col 3: Denpasar & Makassar */}
                <div className="space-y-6 flex flex-col items-center">
                  <div className="space-y-1">
                    <strong className="text-white block font-medium">Denpasar</strong>
                    <p>Kuta River View 23-29<br />Denpasar 80361</p>
                  </div>
                  <div className="space-y-1">
                    <strong className="text-white block font-medium">Makassar</strong>
                    <p>Ruko Business Park<br />Citraland City Losari Blok A2 No. 10, 90112</p>
                  </div>
                </div>

                {/* Col 4: Medan */}
                <div className="space-y-6 flex flex-col items-center">
                  <div className="space-y-1">
                    <strong className="text-white block font-medium">Medan</strong>
                    <p>Podomoro City Deli Medan<br />Office Tower 21-02, 20111</p>
                  </div>
                  <div className="space-y-1">
                    <p>Cemara Asri<br />Jl. Lotus No. 88 PP, 20221</p>
                  </div>
                </div>

                {/* Col 5: Kuala Tanjung & Malaysia */}
                <div className="space-y-6 flex flex-col items-center">
                  <div className="space-y-1">
                    <strong className="text-white block font-medium">Kuala Tanjung</strong>
                    <p>Jl. Besar Kuala Tanjung No.18<br />Pakam Raya Medang Deras, 21258</p>
                  </div>
                  <div className="space-y-1">
                    <strong className="text-white block font-medium">Malaysia</strong>
                    <p>Level 15.01, 1 First Avenue<br />2A Dataran Bandar Utama, 47800</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Shared Contacts Block (Head Office) */}
            <div className="border-t border-white/5 pt-10 space-y-8">
                    
              {/* Phone */}
              <div>
                <p className="text-neutral-500 text-[10px] font-bold tracking-widest uppercase mb-2">Head Office Contact</p>
                <p className="text-neutral-400 font-mono text-sm tracking-wide">
                  <span className="text-neutral-600">P:</span> +6221 4584.3020 <span className="mx-3 text-neutral-800">|</span> <span className="text-neutral-600">F:</span> +6221 4584.3022
                </p>
              </div>

              {/* Emails */}
              <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
                <a href="mailto:ivan@primus.co.id" className="group flex items-center gap-2 text-white hover:text-accent-main transition-colors text-lg font-light">
                  <Mail className="w-4 h-4 text-neutral-600 group-hover:text-accent-main transition-colors" />
                  ivan@primus.co.id
                </a>
                <a href="mailto:darmawan@primus.co.id" className="group flex items-center gap-2 text-white hover:text-accent-main transition-colors text-lg font-light">
                  <Mail className="w-4 h-4 text-neutral-600 group-hover:text-accent-main transition-colors" />
                  darmawan@primus.co.id
                </a>
              </div>

            </div>

          </div>
            
          {/* Bottom Bar */}
          <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
            <span className="text-neutral-600 text-[10px] uppercase tracking-widest">© 2026 PT. Primus Indonesia. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-600 hover:text-white transition-colors text-[10px] uppercase tracking-widest">LinkedIn</a>
              <a href="#" className="text-neutral-600 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
