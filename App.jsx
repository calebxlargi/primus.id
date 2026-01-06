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
        
        {/* Main Hero Image (Futuristic Port) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/zBBgSZxm/Gemini-Generated-Image-b4ptbqb4ptbqb4pt-gigapixel-text-shapes-2x.jpg" 
            alt="Futuristic Digital Port" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-midnight-950/90 via-midnight-950/60 to-midnight-950"></div>
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
            <Lock className="w-3 h-3 text-accent-main" />
            Access
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

      {/* CLIENTS / PARTNERS Section */}
      <section id="clients" className="relative z-30 py-32 px-6 md:px-12 border-t border-white/5 bg-midnight-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-main text-[10px] font-bold tracking-widest uppercase mb-4 block">Trusted By</span>
            <h2 className="text-3xl md:text-5xl font-display text-white mb-8">Our Clients</h2>
            <p className="text-neutral-400 font-light leading-relaxed">
              We have been privileged to collaborate and work with many clients over the years. Here are some of our most valued business partners, whose success stories reflect our dedication to quality solutions.
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
                
            {/* Ports & Logistics */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="JICT">
              <svg viewBox="0 0 100 30" className="fill-current text-white w-full h-full"><path d="M10,25h-5v-18h15v5h-10v13zm15,0h5v-20h-5v20zm15,0h5v-20h-5v20zm15,0h15v5h-15v-5zm0-15h15v5h-15v-5z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Pelindo">
              <svg viewBox="0 0 120 40" className="fill-current text-white w-full h-full"><path d="M20,10 L35,10 C42,10 42,20 35,20 L25,20 L25,30 L20,30 Z M25,15 L25,16 L35,16 C37,16 37,14 35,14 L25,14 Z M50,30 L50,10 L65,10 L65,14 L55,14 L55,18 L63,18 L63,22 L55,22 L55,26 L65,26 L65,30 Z M75,30 L75,10 L80,10 L80,26 L90,26 L90,30 Z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="IPC">
              <svg viewBox="0 0 80 40" className="fill-current text-white w-full h-full"><path d="M10,10h5v20h-5z M25,10h12c5,0 5,10 0,10h-7v10h-5z M30,14v3h5c1,0 1,-3 0,-3z M50,10h15v5h-10v10h10v5h-15z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="TPS">
              <svg viewBox="0 0 100 30" className="fill-current text-white w-full h-full"><path d="M10,5h20v5h-7.5v20h-5v-20h-7.5z M40,5h12c5,0 5,10 0,10h-7v10h-5z M45,9v3h5c1,0 1,-3 0,-3z M65,20h10c2,0 2,3 0,3h-10v5h10c5,0 5,-6 1,-7c3,-1 3,-5 0,-6h-11z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Kuantan Port">
              <span className="text-xs font-bold tracking-widest text-white uppercase text-center border border-white/20 px-2 py-1 rounded">Kuantan Port</span>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="NPCT1">
              <span className="text-lg font-bold text-white tracking-tighter">NPCT1</span>
            </div>

            {/* Telco */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Telkomsel">
              <svg viewBox="0 0 120 30" className="fill-current text-white w-full h-full">
                <path d="M0,15 L10,5 L20,15 L10,25 Z" opacity="0.8"></path>
                <path d="M30,5h18v4h-7v16h-4v-16h-7z M55,5h15v4h-11v4h10v4h-10v4h11v4h-15z M75,5h4v16h10v4h-14z"></path>
              </svg>
            </div>
            <div className="client-logo w-12 h-12 flex items-center justify-center" title="Huawei">
              <svg viewBox="0 0 24 24" className="fill-current text-white w-full h-full"><path d="M12 2C10.5 2 9 3 9 5s1.5 6 3 6 3-4 3-6-1.5-3-3-3zm-5 4C6 5 4 6 4 8s3 5 4 6 1.5-4 1.5-5-1.5-3-2.5-3zm10 0c-1 0-2.5 1-2.5 3s.5 4 1.5 5 4-1 4-6-2-2-3-2zM4.5 14C3 15 2 17 2 18s4 2 6 2 2.5-3 2.5-5c0-3-5-2-6-1zm15 0c-1-1-6-2-6 1 0 2 2.5 5 2.5 5s2-1 6-2c0-1-1-3-2.5-4z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Indosat">
              <svg viewBox="0 0 120 30" className="fill-current text-white w-full h-full">
                <circle cx="10" cy="15" r="8" opacity="0.8"></circle>
                <path d="M30,10h4v10h-4z M40,10h4v3h5v-3h4v10h-4v-5h-5v5h-4z M60,10h5c5,0 5,10 0,10h-5z M64,13v4h1c1,0 1,-4 -1,-4z M75,15c0,-5 8,-5 8,0 0,5 -8,5 -8,0z M88,18c0,2 5,2 5,0c0,-3 -5,-3 -5,-6c0,-2 5,-2 5,0"></path>
              </svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Nokia">
              <svg viewBox="0 0 100 25" className="fill-current text-white w-full h-full"><path d="M0,5h4l8,12l0,-12h4v20h-4l-8,-12l0,12h-4z M25,15c0,-10 12,-10 12,0c0,10 -12,10 -12,0z M29,15c0,5 4,5 4,0c0,-5 -4,-5 -4,0z M45,5h4v8l8,-8h5l-8,8l9,12h-5l-7,-10l-2,2v8h-4z M70,5h4v20h-4z M85,5h4l6,15l6,-15h4l-8,20h-4z"></path></svg>
            </div>
            <div className="client-logo w-12 h-12 flex items-center justify-center" title="XL">
              <span className="text-xl font-bold text-blue-500">XL</span>
            </div>
            <div className="client-logo w-12 h-12 flex items-center justify-center" title="Hutchison">
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Hutchison</span>
            </div>

            {/* Banking */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Bank Mandiri">
              <svg viewBox="0 0 120 30" className="fill-current text-white w-full h-full">
                <path d="M10,20 C10,20 15,10 25,10 C25,10 20,25 10,20 Z" opacity="0.8"></path>
                <path d="M35,10h4l3,8l3,-8h4v15h-3v-10l-3,8h-2l-3,-8v10h-3z M60,15c0,-3 4,-3 4,0v5h-4v-5c0,-1 -1,-1 -1,0v5h-3v-5c0,-4 4,-4 4,0z M70,10h3v2h2c2,-2 5,-2 5,2v11h-3v-8c0,-2 -2,-2 -2,0v8h-3z M90,10h4v15h-4z" transform="translate(0, 2)"></path>
              </svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="BNI">
              <svg viewBox="0 0 80 30" className="fill-current text-white w-full h-full"><path d="M0,5h10c5,0 5,6 0,7c3,0 3,5 0,6h-10z M4,8v3h4c1,0 1,-3 -1,-3z M4,15v4h4c1,0 1,-4 -1,-4z M20,5h4l8,12v-12h4v20h-4l-8,-12v12h-4z M50,5h4v20h-4z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="BRI">
              <svg viewBox="0 0 80 30" className="fill-current text-white w-full h-full"><path d="M10,0h20v25h-20z m4,4v17h12v-17z M40,5h10c5,0 5,6 0,7c3,0 3,5 0,6h-10z M44,8v3h4c1,0 1,-3 -1,-3z M44,15v4h4c1,0 1,-4 -1,-4z M65,5h10c5,0 5,8 0,10l-5,0l5,10h-5l-4,-8h-2v8h-4v-20h5z M69,9v4h5c1,0 1,-4 -1,-4z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Danamon">
              <svg viewBox="0 0 100 30" className="fill-current text-white w-full h-full"><path d="M10,5h8c10,0 10,20 0,20h-8z M14,9v12h3c5,0 5,-12 0,-12z M35,15c0,-4 5,-4 5,0v10h-4v-10c0,-1 -1,-1 -1,0v10h-4v-10c0,-5 5,-5 5,0z M55,15c0,-4 5,-4 5,0v10h-4v-10c0,-1 -1,-1 -1,0v10h-4v-10c0,-5 5,-5 5,0z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Bank DKI">
              <span className="text-sm font-bold text-white uppercase tracking-wider">Bank DKI</span>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Eximbank">
              <span className="text-sm font-bold text-white tracking-wider">Eximbank</span>
            </div>

            {/* Energy */}
            <div className="client-logo w-12 h-12 flex items-center justify-center" title="Chevron">
              <svg viewBox="0 0 24 24" className="fill-current text-white w-full h-full"><path d="M4 6l8 8 8-8v4l-8 8-8-8z"></path><path d="M4 0l8 8 8-8v4l-8 8-8-8z" opacity="0.7"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Pertamina">
              <svg viewBox="0 0 100 30" className="fill-current text-white w-full h-full">
                <rect x="0" y="5" width="10" height="10" transform="rotate(45 5 10)"></rect>
                <rect x="15" y="5" width="10" height="10" transform="rotate(45 20 10)" opacity="0.7"></rect>
                <rect x="7.5" y="15" width="10" height="10" transform="rotate(45 12.5 20)" opacity="0.5"></rect>
                <path d="M40,10h5c4,0 4,6 0,6h-1v9h-4z M44,13v1h1c1,0 1,-1 -1,-1z M60,10h10v3h-6v4h5v3h-5v5h6v3h-10z M80,10h6c3,0 3,5 0,5l2,5h-4l-1,-4h-1v4h-4v-15h2z M84,13v3h1c1,0 1,-3 -1,-3z"></path>
              </svg>
            </div>
            <div className="client-logo w-12 h-12 flex items-center justify-center" title="BP">
              <svg viewBox="0 0 24 24" className="fill-current text-white w-full h-full"><path d="M12,2l2,5l5,2l-5,2l-2,5l-2,-5l-5,-2l5,-2z M12,6l1,3l3,1l-3,1l-1,3l-1,-3l-3,-1l3,-1z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="PetroChina">
              <svg viewBox="0 0 100 30" className="fill-current text-white w-full h-full">
                <circle cx="15" cy="15" r="8" opacity="0.8"></circle>
                <path d="M35,10h5c3,0 3,5 0,5h-1v10h-4z M39,13v2h1c1,0 1,-2 -1,-2z M55,10h10v3h-6v4h5v3h-5v5h6v3h-10z M75,10h10v3h-4v12h-3v-12h-4z"></path>
              </svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Star Energy">
              <span className="text-xs font-bold text-white uppercase border-b-2 border-orange-500 pb-1">Star Energy</span>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Unocal">
              <span className="text-lg font-bold text-white tracking-widest">UNOCAL</span>
            </div>

            {/* Others */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Astra International">
              <svg viewBox="0 0 100 30" className="fill-current text-white w-full h-full"><path d="M10,25l5,-15l5,15h-3l-1,-4h-6l-1,4z M15,15l-1,4h3z M30,20c2,0 3,1 3,3c0,2 -2,2 -4,2h-4v-3z M35,12c0,-2 -2,-2 -4,-2h-6v5h5c2,0 5,-1 5,-3z M29,14v-2h2c1,0 1,1 0,1z M50,10h10v3h-4v12h-3v-12h-4z M70,10h5c3,0 3,5 0,5l2,5h-4l-1,-4h-1v4h-4v-15h2z M74,13v3h1c1,0 1,-3 -1,-3z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="P&G">
              <svg viewBox="0 0 80 30" className="fill-current text-white w-full h-full"><path d="M10,5h5c5,0 5,7 0,7h-1v8h-4z M14,8v2h1c1,0 1,-2 -1,-2z M35,10h2l3,4l-4,3l4,3h-2l-3,-4l-3,4h-2l4,-3l-4,-3h2l3,4z M50,15c0,-5 8,-5 8,0v4h-4v-4c0,-2 -2,-2 -2,0v4c0,2 2,2 2,0v-2h2v2c0,5 -8,5 -8,0z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="L'Oreal">
              <svg viewBox="0 0 100 25" className="fill-current text-white w-full h-full"><path d="M5,5v15h10v-3h-7v-12z M20,5h3v2h-3z M25,10c0,-6 10,-6 10,0s-10,6 -10,0zm3,0c0,3 4,3 4,0s-4,-3 -4,0z M45,10h5c3,0 3,4 0,4l3,6h-4l-2,-5h-1v5h-3v-15h2z M48,13v-1h2c1,0 1,1 -1,1z M65,10h10v3h-7v3h6v3h-6v3h7v3h-10z M85,25l3,-15l3,15h-2l-1,-3h-4l-1,3z M88,15l-1,4h2z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="UPH">
              <svg viewBox="0 0 80 30" className="fill-current text-white w-full h-full"><path d="M10,5v12c0,4 6,4 6,0v-12h4v12c0,7 -14,7 -14,0v-12z M35,5h6c4,0 4,7 0,7h-2v8h-4z M39,9v2h2c1,0 1,-2 -1,-2z M60,5v20h-4v-8h-6v8h-4v-20h4v8h6v-8z"></path></svg>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Avrist">
              <span className="text-sm font-bold text-white italic tracking-wide">avrist</span>
            </div>
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="FWD">
              <span className="text-xl font-bold text-white">FWD</span>
            </div>

          </div>
        </div>
      </section>

      {/* PRINCIPALS Section */}
      <section id="principals" className="relative z-30 py-32 px-6 md:px-12 border-t border-white/5 bg-midnight-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent-main text-[10px] font-bold tracking-widest uppercase mb-4 block">Our Partners</span>
            <h2 className="text-3xl md:text-5xl font-display text-white mb-8">Principals</h2>
            <p className="text-neutral-400 font-light leading-relaxed">
              As PI devotes itself to constant solution development to meet our clients' evolving needs, we have worked with some of the most reputable companies in technology development. Our business solutions and partners are leaders at the forefront of technological advancements.
            </p>
          </div>

          {/* Principals Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-16 items-center justify-items-center">
                
            {/* Oracle */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Oracle">
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 bg-red-600 rounded-sm"></div>
                <span className="text-xl font-bold text-white tracking-wide">ORACLE</span>
              </div>
            </div>

            {/* Cisco */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Cisco">
              <svg viewBox="0 0 100 40" className="fill-current text-white w-full h-full">
                <path d="M15,25v-10h2v10h-2zm5,-4v-6h2v6h-2zm5,-7v-3h2v3h-2zm5,7v-6h2v6h-2zm5,4v-10h2v10h-2zm5,-4v-6h2v6h-2zm5,-7v-3h2v3h-2zm5,7v-6h2v6h-2zm5,4v-10h2v10h-2z"></path>
                <text x="0" y="38" fontFamily="sans-serif" fontWeight="bold" fontSize="12" fill="white">CISCO</text>
              </svg>
            </div>

            {/* IBM */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="IBM">
              <svg viewBox="0 0 100 40" className="fill-current text-white w-full h-full">
                <path d="M10,10h20v4h-20z M10,16h20v4h-20z M10,22h20v4h-20z M40,10h20v4h-20z M40,16h20v4h-20z M40,22h20v4h-20z M70,10h5v4h-5z M85,10h5v4h-5z M70,16h8v4h-8z M82,16h8v4h-8z M70,22h10v4h-10z M80,22h10v4h-10z" fill="#fff"></path>
              </svg>
            </div>

            {/* Honeywell */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Honeywell">
              <span className="text-xl font-bold text-red-500 tracking-tight">Honeywell</span>
            </div>

            {/* HP */}
            <div className="client-logo w-12 h-12 flex items-center justify-center" title="HP">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-lg font-bold text-white italic">hp</span>
              </div>
            </div>

            {/* NetApp */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="NetApp">
              <div className="flex items-center gap-1">
                <div className="w-6 h-8 bg-blue-600"></div>
                <span className="text-lg font-bold text-white">NetApp</span>
              </div>
            </div>

            {/* Konecranes */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Konecranes">
              <span className="text-sm font-bold text-red-500 uppercase tracking-wide">KONECRANES</span>
            </div>

            {/* Splunk */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Splunk">
              <span className="text-xl font-bold text-white">splunk&gt;</span>
            </div>

            {/* APC */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="APC">
              <span className="text-xl font-bold text-white">APC</span>
            </div>

            {/* Eaton */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Eaton">
              <span className="text-xl font-bold text-blue-500 uppercase">E:T-N</span>
            </div>

            {/* Visy */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Visy">
              <span className="text-xl font-bold text-red-500 tracking-widest">VISY</span>
            </div>

            {/* Identec */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Identec Solutions">
              <div className="text-right">
                <div className="text-[10px] bg-blue-800 text-white px-1">IDENTEC</div>
                <div className="text-[8px] text-blue-400">SOLUTIONS</div>
              </div>
            </div>
                
            {/* Altai */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Altai">
              <span className="text-lg font-bold text-blue-400 border border-blue-400 px-2 rounded">ALTAI</span>
            </div>
                
            {/* Panduit */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Panduit">
              <span className="text-lg font-bold text-green-500 border-l-4 border-green-500 pl-2">PANDUIT</span>
            </div>
                
            {/* Infoblox */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Infoblox">
              <span className="text-lg font-bold text-white">Infoblox</span>
            </div>

            {/* General Cable */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="General Cable">
              <span className="text-sm font-bold text-green-500">General Cable</span>
            </div>

            {/* Compuprint */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Compuprint">
              <span className="text-sm font-bold text-white italic">Compuprint</span>
            </div>

            {/* Teldor */}
            <div className="client-logo w-32 h-12 flex items-center justify-center" title="Teldor">
              <span className="text-lg font-bold text-blue-500">TELDOR</span>
            </div>

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
            <span className="text-neutral-600 text-[10px] uppercase tracking-widest">© 2024 Primus Indonesia</span>
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
