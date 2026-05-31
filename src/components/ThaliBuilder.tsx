import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChefHat, Check, ShieldCheck, Flame, Zap, Info, Plus, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { MenuItem } from '../types';

interface ThaliBuilderProps {
  onAddToCart: (item: MenuItem) => void;
  onClose?: () => void;
}

interface SelectionItem {
  id: string;
  name: string;
  price: number;
  image: string;
  calories: number;
  type: string;
}

const CURRIES: SelectionItem[] = [
  { id: 'paneer_butter', name: 'Paneer Butter Masala', price: 90, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=300', calories: 280, type: 'Curry' },
  { id: 'dal_makhani_c', name: 'Dal Makhani Special', price: 80, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=300', calories: 220, type: 'Curry' },
  { id: 'malai_kofta_c', name: 'Royal Malai Kofta', price: 95, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=300', calories: 340, type: 'Curry' },
  { id: 'mix_veg_c', name: 'Kadhai Mix Melange', price: 70, image: 'https://images.unsplash.com/photo-1621510456681-23a23cfb5f57?auto=format&fit=crop&q=80&w=300', calories: 140, type: 'Curry' },
];

const RICES: SelectionItem[] = [
  { id: 'jeera_rice_c', name: 'Saffron Jeera Rice', price: 50, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=300', calories: 120, type: 'Rice' },
  { id: 'veg_biryani_c', name: 'Dum Veg Biryani Rice', price: 70, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=300', calories: 190, type: 'Rice' },
];

const BREADS: SelectionItem[] = [
  { id: 'butter_naan_c', name: 'Glazed Butter Naan', price: 30, image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=300', calories: 180, type: 'Bread' },
  { id: 'garlic_naan_c', name: 'Garlic Butter Naan', price: 40, image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=300', calories: 195, type: 'Bread' },
  { id: 'laccha_p_c', name: 'Crisp Laccha Paratha', price: 35, image: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=300', calories: 160, type: 'Bread' },
];

const SWEETS: SelectionItem[] = [
  { id: 'gulab_jamun_c', name: 'Kesar Gulab Jamun (2 pcs)', price: 40, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=300', calories: 180, type: 'Sweet' },
  { id: 'rasgulla_c', name: 'Royal White Rasgulla (2 pcs)', price: 35, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=300', calories: 130, type: 'Sweet' },
  { id: 'boondi_raita_c', name: 'Cucumber Mint Raita', price: 25, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=300', calories: 70, type: 'Sweet' },
];

export default function ThaliBuilder({ onAddToCart, onClose }: ThaliBuilderProps) {
  // Selections
  const [selectedCurries, setSelectedCurries] = useState<SelectionItem[]>([CURRIES[0], CURRIES[1]]);
  const [selectedRice, setSelectedRice] = useState<SelectionItem>(RICES[0]);
  const [selectedBreads, setSelectedBreads] = useState<SelectionItem[]>([BREADS[0]]);
  const [selectedSweet, setSelectedSweet] = useState<SelectionItem>(SWEETS[0]);
  
  // Custom naming
  const [custName, setCustName] = useState('My Shahi Delight Platter');
  const [success, setSuccess] = useState(false);

  // Sound Synth Ambience
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [oscillatorNodes, setOscillatorNodes] = useState<any[]>([]);

  // Base price 100 for packaging/garnish/salad/papads + cumulative calculated prices
  const baseThaliFee = 99;
  const computedPrice = baseThaliFee + 
    selectedCurries.reduce((acc, c) => acc + c.price, 0) +
    selectedRice.price +
    selectedBreads.reduce((acc, b) => acc + b.price, 0) +
    selectedSweet.price;

  const totalCalories = 100 + // standard salad/butter/papad
    selectedCurries.reduce((acc, c) => acc + c.calories, 0) +
    selectedRice.calories +
    selectedBreads.reduce((acc, b) => acc + b.calories, 0) +
    selectedSweet.calories;

  // Toggle Selection Curries
  const handleCurrySelect = (item: SelectionItem) => {
    if (selectedCurries.some(c => c.id === item.id)) {
      setSelectedCurries(selectedCurries.filter(c => c.id !== item.id));
    } else {
      if (selectedCurries.length >= 2) {
        // Swap last one or just do nothing
        setSelectedCurries([selectedCurries[1], item]);
      } else {
        setSelectedCurries([...selectedCurries, item]);
      }
    }
  };

  // Toggle Selection Breads
  const handleBreadSelect = (item: SelectionItem) => {
    if (selectedBreads.some(b => b.id === item.id)) {
      if (selectedBreads.length > 1) {
        setSelectedBreads(selectedBreads.filter(b => b.id !== item.id));
      }
    } else {
      if (selectedBreads.length >= 2) {
        setSelectedBreads([selectedBreads[1], item]);
      } else {
        setSelectedBreads([...selectedBreads, item]);
      }
    }
  };

  // Sound track generator
  const toggleSound = () => {
    if (isPlayingSound) {
      oscillatorNodes.forEach(item => {
        try { item.stop(); } catch(e){}
      });
      setOscillatorNodes([]);
      setIsPlayingSound(false);
    } else {
      try {
        const ctx = audioContext || new (window.AudioContext || (window as any).webkitAudioContext)();
        if (!audioContext) setAudioContext(ctx);

        // Web Audio API Synth to play a soft premium Raga-like calming harmony
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.06, ctx.currentTime);
        masterGain.connect(ctx.destination);

        const playNote = (freq: number, delayStart: number, duration: number) => {
          const osc = ctx.createOscillator();
          const noteGain = ctx.createGain();
          
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + delayStart);
          
          noteGain.gain.setValueAtTime(0, ctx.currentTime + delayStart);
          noteGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + delayStart + 0.5);
          noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delayStart + duration - 0.2);
          
          osc.connect(noteGain);
          noteGain.connect(masterGain);
          
          osc.start(ctx.currentTime + delayStart);
          osc.stop(ctx.currentTime + delayStart + duration);
          return osc;
        };

        // Create a running sequence loop of gentle ambient flute/sitar frequency
        const notes = [293.66, 329.63, 392.00, 440.00, 493.88, 587.33]; // Pentatonic Indian Bhupali scale
        const oscillators = [];

        for (let i = 0; i < 40; i++) {
          const freq = notes[Math.floor(Math.random() * notes.length)] * (Math.random() > 0.7 ? 2 : 1);
          const start = i * 2.5;
          const len = 3 + Math.random() * 2;
          const oscNode = playNote(freq, start, len);
          oscillators.push(oscNode);
        }

        setOscillatorNodes(oscillators);
        setIsPlayingSound(true);
      } catch (e) {
        console.error("Audio Web Synth error", e);
      }
    }
  };

  useEffect(() => {
    return () => {
      oscillatorNodes.forEach(item => {
        try { item.stop(); } catch(e){}
      });
    };
  }, [oscillatorNodes]);

  // Dispatch custom Thali structure to client cart
  const handleCompileAndAdd = () => {
    const mainNames = selectedCurries.map(c => c.name).join(' & ');
    const desc = `Royal custom curation platter tailored precisely for you. Includes ${mainNames}, aromatic ${selectedRice.name}, delicious ${selectedBreads.map(b => b.name).join(' & ')} bread combinations, and premium cooling sweet ${selectedSweet.name}. All prepared royal style with freshly toasted spices.`;

    const customPlateItem: MenuItem = {
      id: `custom-thali-${Date.now()}`,
      name: `👑 ${custName || 'Royal Custom Thali'}`,
      price: computedPrice,
      isVeg: true,
      category: 'Thali',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800',
      description: desc,
      bestSeller: true
    };

    onAddToCart(customPlateItem);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      if (onClose) onClose();
    }, 1800);
  };

  return (
    <div className="w-full bg-[#080808]/95 border-2 border-luxury-gold/30 rounded-[3rem] p-6 sm:p-12 shadow-[0_20px_80px_rgba(255,107,0,0.2)] md:my-10 relative overflow-hidden backdrop-blur-3xl">
      
      {/* Background soft particles mapping */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-luxury-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-luxury-gold/60 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-luxury-gold/60 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-luxury-gold/60 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-luxury-gold/60 rounded-br-lg pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-12 items-center relative z-20">
        
        {/* Left Interactive radial visualizers */}
        <div className="w-full lg:w-5/12 flex flex-col items-center justify-center">
          
          <div className="text-center mb-6">
            <span className="font-mono text-[9px] px-3 py-1 bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/30 rounded-full uppercase tracking-widest font-black inline-flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,200,87,0.15)]">
              <ChefHat size={11} className="text-luxury-orange" />
              Bawarchi Virtual Lab v2.5
            </span>
          </div>

          {/* Interactive Circle Platter Mockup */}
          <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-square rounded-full border border-luxury-gold/20 p-6 bg-gradient-to-b from-neutral-900/90 to-black shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex items-center justify-center">
            
            {/* Ambient revolving clock rings */}
            <div className="absolute inset-2 border border-dashed border-luxury-gold/15 rounded-full animate-[spin_120s_linear_infinite]" />
            <div className="absolute inset-5 border border-double border-white/5 rounded-full animate-[spin_70s_linear_infinite_reverse]" />

            {/* Custom Background Thali Brass Plate */}
            <div className="absolute w-[86%] h-[86%] rounded-full bg-gradient-to-b from-[#1C1A17] to-[#0A0908] border-[3px] border-zinc-800 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-orange/10 via-transparent to-transparent opacity-60" />
            </div>

            {/* PLACED DISHES DYNAMIC PREVIEWS mapped at perfect coordinate offsets */}
            
            {/* Center: Steaming Saffron Rice */}
            <motion.div 
              key={selectedRice.id}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute z-30 w-[30%] h-[30%] rounded-full overflow-hidden border border-luxury-gold shadow-lg"
              title={selectedRice.name}
            >
              <img src={selectedRice.image} alt={selectedRice.name} className="w-full h-full object-cover scale-110 brightness-[1.05]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <span className="font-mono text-[7px] text-white/95 px-1.5 py-0.5 rounded bg-black/60 font-black">RICE</span>
              </div>
            </motion.div>

            {/* Curry One: Top Left position (bowl) */}
            {selectedCurries[0] && (
              <motion.div 
                key={selectedCurries[0].id}
                initial={{ scale: 0.6, opacity: 0, x: -50, y: -50 }}
                animate={{ scale: 1, opacity: 1, x: -50, y: -50 }}
                transition={{ duration: 0.6 }}
                className="absolute z-20 w-[24%] h-[24%] rounded-full overflow-hidden border border-white/10 shadow-lg"
              >
                <img src={selectedCurries[0].image} alt={selectedCurries[0].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="font-mono text-[7px] text-luxury-gold px-1.5 py-0.5 rounded bg-black/75">CURRY 1</span>
                </div>
              </motion.div>
            )}

            {/* Curry Two: Top Right position (bowl) */}
            {selectedCurries[1] ? (
              <motion.div 
                key={selectedCurries[1].id}
                initial={{ scale: 0.6, opacity: 0, x: 50, y: -50 }}
                animate={{ scale: 1, opacity: 1, x: 50, y: -50 }}
                transition={{ duration: 0.6 }}
                className="absolute z-20 w-[24%] h-[24%] rounded-full overflow-hidden border border-white/10 shadow-lg"
              >
                <img src={selectedCurries[1].image} alt={selectedCurries[1].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="font-mono text-[7px] text-luxury-gold px-1.5 py-0.5 rounded bg-black/75">CURRY 2</span>
                </div>
              </motion.div>
            ) : (
              <div className="absolute z-20 w-[24%] h-[24%] rounded-full border border-dashed border-white/10 bg-black/40 flex items-center justify-center text-white/30 text-[9px] -translate-y-[50px] translate-x-[50px]">
                <Plus size={10} className="animate-pulse" />
              </div>
            )}

            {/* Sweet Box: Bottom Right position */}
            <motion.div 
              key={selectedSweet.id}
              initial={{ scale: 0.6, opacity: 0, x: 50, y: 50 }}
              animate={{ scale: 1, opacity: 1, x: 50, y: 50 }}
              transition={{ duration: 0.6 }}
              className="absolute z-20 w-[22%] h-[22%] rounded-full overflow-hidden border border-white/10 shadow-lg"
            >
              <img src={selectedSweet.image} alt={selectedSweet.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="font-mono text-[7px] text-[#FFC857] px-1.5 py-0.5 rounded bg-black/75">SWEET</span>
              </div>
            </motion.div>

            {/* Breads Selection preview: Bottom Left position */}
            {selectedBreads[0] && (
              <motion.div 
                key={selectedBreads[0].id}
                initial={{ scale: 0.6, opacity: 0, x: -50, y: 60 }}
                animate={{ scale: 1, opacity: 1, x: -50, y: 60 }}
                transition={{ duration: 0.6 }}
                className="absolute z-20 w-[26%] h-[22%] rounded-xl overflow-hidden border border-luxury-gold/40 shadow-lg rotate-12"
              >
                <img src={selectedBreads[0].image} alt={selectedBreads[0].name} className="w-full h-full object-cover brightness-[0.95]" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="font-mono text-[7px] text-white/95 px-1 bg-black/75 rounded">BREAD</span>
                </div>
              </motion.div>
            )}

          </div>

          {/* Ambience & Playback Synthesizer Switcher */}
          <div className="mt-8 flex flex-col items-center gap-1.5 bg-white/[0.02] border border-white/5 p-3 rounded-2xl w-full max-w-[280px]">
            <div className="flex items-center gap-2 justify-between w-full">
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Dining Ambience Synth</span>
              <button 
                onClick={toggleSound}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isPlayingSound ? 'bg-luxury-orange text-white ring-4 ring-luxury-orange/20' : 'bg-neutral-900 border border-white/10 text-white/60 hover:text-white'}`}
                title="Toggle traditional flute synthesis"
              >
                {isPlayingSound ? <Volume2 size={16} className="animate-bounce" /> : <VolumeX size={16} />}
              </button>
            </div>
            <p className="text-[8px] text-center font-mono text-luxury-gold/50 tracking-wider">
              {isPlayingSound ? "● RENDERING CALMING ROYAL FLUTE RAGA (LIVE SYNTH)" : "ACTIVATE CULTURAL SOUNDSCAPE FOR IMMERSIVE TASTING"}
            </p>
          </div>

        </div>

        {/* Right Tab Controls and Checkout Specs */}
        <div className="w-full lg:w-7/12 space-y-8">
          
          <div className="border-b border-white/[0.05] pb-4">
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium tracking-wide">
              Elegantly Tailor Your Food Platter
            </h2>
            <p className="text-xs text-white/50 font-sans mt-2">
              Select precisely which premium slow-cooked elements will grace your custom Brass Platter today.
            </p>
          </div>

          {/* Stepper inputs: Custom Named Title */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold font-bold mb-2">
              Step 1: Title Your Custom Platter
            </label>
            <input
              type="text"
              value={custName}
              onChange={(e) => setCustName(e.target.value)}
              placeholder="e.g. Maharaja Box, Shahi Royal Thali..."
              className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 focus:border-luxury-orange focus:outline-none text-white text-xs font-mono tracking-wide placeholder-white/25 transition-all"
            />
          </div>

          {/* Curries Multi-Select Section */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 font-semibold">
                Step 2: Choose 2 Royal Curries ({selectedCurries.length}/2)
              </label>
              <span className="text-[9px] font-mono text-luxury-orange font-bold uppercase">Required</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {CURRIES.map((c) => {
                const isSel = selectedCurries.some(x => x.id === c.id);
                return (
                  <button
                    key={c.id}
                    onClick={() => handleCurrySelect(c)}
                    className={`p-3.5 rounded-xl border flex flex-col items-center text-center transition-all duration-300 relative group cursor-pointer ${
                      isSel 
                        ? 'border-luxury-orange bg-luxury-orange/10 font-bold' 
                        : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/15'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden mb-2 border border-white/10 relative">
                      <img src={c.image} alt={c.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      {isSel && (
                        <div className="absolute inset-0 bg-luxury-orange/70 flex items-center justify-center text-white">
                          <Check size={14} className="stroke-[3px]" />
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] font-sans text-white font-medium group-hover:text-luxury-orange transition-colors">{c.name}</span>
                    <span className="text-[8px] font-mono text-luxury-gold font-bold mt-1">₹{c.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Saffron Rice selections */}
          <div className="space-y-3">
            <label className="block text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 font-semibold">
              Step 3: Select Aromatic Rice
            </label>
            <div className="grid grid-cols-2 gap-3">
              {RICES.map((r) => {
                const isSel = selectedRice.id === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRice(r)}
                    className={`p-4 rounded-xl border flex items-center gap-3 text-left transition-all cursor-pointer ${
                      isSel 
                        ? 'border-luxury-orange bg-luxury-orange/10 font-bold' 
                        : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/15'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/5 relative flex-shrink-0">
                      <img src={r.image} alt={r.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans text-white block">{r.name}</span>
                      <span className="text-[9px] font-mono text-luxury-gold font-bold">₹{r.price}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bread Combinations Selection */}
          <div className="space-y-3">
            <label className="block text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 font-semibold">
              Step 4: Select Signature Tandoor Bread (Select Up to 2)
            </label>
            <div className="grid grid-cols-3 gap-3">
              {BREADS.map((b) => {
                const isSel = selectedBreads.some(x => x.id === b.id);
                return (
                  <button
                    key={b.id}
                    onClick={() => handleBreadSelect(b)}
                    className={`p-3 rounded-xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                      isSel 
                        ? 'border-luxury-orange bg-luxury-orange/10 font-bold' 
                        : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/15'
                    }`}
                  >
                    <span className="text-[9px] font-sans text-white font-medium">{b.name}</span>
                    <span className="text-[8px] font-mono text-luxury-gold font-bold mt-1">₹{b.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desserts sweet options */}
          <div className="space-y-3">
            <label className="block text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 font-semibold">
              Step 5: Pick Sweet Confections / Traditional Sides
            </label>
            <div className="grid grid-cols-3 gap-3">
              {SWEETS.map((s) => {
                const isSel = selectedSweet.id === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSweet(s)}
                    className={`p-3 rounded-xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                      isSel 
                        ? 'border-luxury-orange bg-luxury-orange/10 font-bold' 
                        : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/15'
                    }`}
                  >
                    <span className="text-[9px] font-sans text-white font-medium">{s.name}</span>
                    <span className="text-[8px] font-mono text-luxury-gold font-bold mt-1">₹{s.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Premium Status Metadata Summary Panel */}
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-6 shadow-inner">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-luxury-orange/10 border border-luxury-orange/20 flex items-center justify-center text-luxury-orange">
                <Flame size={16} />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/40 block">Nutrition Score</span>
                <span className="text-xs font-mono font-black text-white">{totalCalories} Calories</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-luxury-orange/10 border border-luxury-orange/20 flex items-center justify-center text-luxury-orange">
                <Zap size={16} />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/40 block">Est Cook Time</span>
                <span className="text-xs font-mono font-black text-white">25 Minutes</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-luxury-orange/10 border border-luxury-orange/20 flex items-center justify-center text-luxury-orange">
                <ShieldCheck size={16} className="text-green-500" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/40 block">Purity Assurance</span>
                <span className="text-xs font-mono font-black text-green-500">100% Shuddh Veg</span>
              </div>
            </div>
          </div>

          {/* Price checkout buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-white/[0.05]">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">Total Est Platter Cost</span>
              <span className="text-3xl font-mono font-black text-luxury-orange mt-1 block">₹{computedPrice}</span>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest block mt-0.5">Includes free tandoori salad & papad</span>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] text-xs font-mono uppercase tracking-widest font-bold text-white/60 hover:text-white transition-all flex-1 sm:flex-initial"
                >
                  Cancel
                </button>
              )}
              
              <button
                type="button"
                onClick={handleCompileAndAdd}
                disabled={selectedCurries.length === 0}
                className="px-10 py-4 bg-gradient-to-r from-luxury-orange to-red-600 hover:from-red-600 hover:to-luxury-orange text-white text-xs font-mono tracking-widest uppercase font-black rounded-xl shadow-xl shadow-luxury-orange/20 transform hover:scale-[1.02] active:scale-95 duration-200 cursor-pointer flex-1 sm:flex-initial flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {success ? (
                  <>
                    <Check size={14} className="stroke-[3px] animate-bounce" />
                    Platter Added!
                  </>
                ) : (
                  <>
                    <ChefHat size={14} />
                    Add Custom Platter
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
