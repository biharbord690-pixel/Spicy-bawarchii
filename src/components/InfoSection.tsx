import { MapPin, Phone, Clock, Compass, MessageSquare, Sparkles } from 'lucide-react';

export default function InfoSection() {
  const addressDetails = {
    name: 'SPICY BAWARCHI',
    tagline: 'Every Bite Tells A Story',
    street: 'Near Forbesganj College Flyover,',
    landmark: 'In Front of Sant Nirankari Satsang Bhawan,',
    cityState: 'Forbesganj, Bihar 854318',
    phone: '076430 97915',
    hours: '11:00 AM – 11:00 PM',
    days: 'All Days (Monday – Sunday)'
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=Spicy%20Bawarchi,%20Forbesganj,%20Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://maps.google.com/?q=Spicy+Bawarchi+Near+Forbesganj+College+Flyover+Forbesganj+Bihar+854318`;

  return (
    <div className="w-full bg-luxury-black min-h-screen pt-28 pb-32 px-4 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Target Title */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-luxury-orange font-bold">The Location Archives</span>
        <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-wide mt-2 mb-4 leading-tight">
          Find Spicy Bawarchi
        </h1>
        <p className="font-serif italic text-base text-luxury-gold/80 max-w-lg mx-auto">
          Visit our premium dining boutique or establish rapid lines of direct cellular communication.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Column - Contact card */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="glass-panel p-8 rounded-2xl border border-luxury-gold/15 space-y-8 h-full flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-luxury-orange/40">
            {/* Ambient luxury glow overlay inside contact card */}
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-luxury-orange/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-luxury-gold/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Restaurant Name */}
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold block mb-1 font-bold">Elite Location</span>
                <h2 className="font-serif text-3xl font-extrabold tracking-wide text-white">
                  {addressDetails.name}
                </h2>
                <p className="font-serif italic text-sm text-luxury-orange mt-1">
                  &ldquo;{addressDetails.tagline}&rdquo;
                </p>
              </div>

              {/* Specific Info Item Block */}
              <div className="space-y-4">
                {/* Address block */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-luxury-orange flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm text-white/50 tracking-wide uppercase">Full Address</h4>
                    <p className="text-xs text-white/90 font-sans leading-relaxed mt-1">
                      {addressDetails.street}<br />
                      {addressDetails.landmark}<br />
                      {addressDetails.cityState}
                    </p>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-luxury-orange flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm text-white/50 tracking-wide uppercase">Phone Number</h4>
                    <a
                      href={`tel:${addressDetails.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-mono font-bold text-[#FFC857] hover:text-white transition-colors block mt-1"
                    >
                      {addressDetails.phone}
                    </a>
                    <span className="text-[10px] text-white/40 block mt-1">Instant reservations hotline.</span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-luxury-orange flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm text-white/50 tracking-wide uppercase">Opening Hours</h4>
                    <p className="text-xs text-white/90 font-sans tracking-wide mt-1">
                      {addressDetails.hours}
                    </p>
                    <span className="text-[10px] text-white/40 block mt-1">{addressDetails.days}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action triggers */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/5 w-full">
              <a
                href={`tel:${addressDetails.phone.replace(/\s+/g, '')}`}
                className="py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg text-[10px] uppercase font-semibold tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <Phone size={11} className="text-luxury-orange" />
                Call Now
              </a>
              <a
                href="https://wa.me/917643097915"
                target="_blank"
                rel="noreferrer"
                className="py-3 bg-luxury-orange/10 border border-luxury-orange/20 hover:bg-luxury-orange text-white rounded-lg text-[10px] uppercase font-semibold tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <MessageSquare size={12} />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Map with frame */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="glass-panel p-4 rounded-2xl border border-white/5 h-full flex flex-col">
            {/* Embedded maps iframe */}
            <div className="relative flex-grow rounded-xl overflow-hidden min-h-[300px] lg:min-h-[400px] bg-neutral-900 border border-white/5">
              <iframe
                title="Google Maps Location for Spicy Bawarchi"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={mapEmbedUrl}
                className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2">
                <Compass size={16} className="text-luxury-orange animate-spin duration-10000" />
                <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase">
                  Located near Forbesganj college flyover
                </span>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                id="get-directions-btn"
                className="px-6 py-2.5 bg-[#FFC857] hover:bg-luxury-orange text-luxury-black hover:text-white font-mono text-[10px] uppercase tracking-widest font-semibold rounded-lg text-center transition-all duration-300 shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles size={11} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
