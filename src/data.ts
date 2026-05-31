import { MenuItem, Review, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- VEGETABLES ---
  {
    id: 'veg-pbm',
    name: 'Paneer Butter Masala',
    price: 210,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600',
    description: 'Delectable cottage cheese cubes simmered in our signature velvet-textured, rich buttery tomato and cashew gravy, finished with fresh cream and hand-rubbed fenugreek.',
    bestSeller: true
  },
  {
    id: 'veg-pk',
    name: 'Paneer Kadhai',
    price: 220,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600',
    description: 'Artisanal cottage cheese blocks tossed with crisp bell peppers, red onions, and hand-crushed roasted spices in a traditional cast-iron wok (Kadhai).'
  },
  {
    id: 'veg-pdp',
    name: 'Paneer Do Pyaza',
    price: 210,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600',
    description: 'Succulent paneer cooked beautifully with caramelized pearl onions and spring greens in a spicy, semi-dry aromatic onion gravy.'
  },
  {
    id: 'veg-mp',
    name: 'Mutter Paneer',
    price: 200,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'A classic rich harmony of sweet garden-fresh peas and velvet cottage cheese cubes stewed in an authentic cumin-spiced tomato reduction.'
  },
  {
    id: 'veg-sp',
    name: 'Shahi Paneer',
    price: 240,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600',
    description: 'Royal Muglai preparation of cottage cheese in an ultra-luxurious aromatic gravy of blended white almonds, pure saffron, and cardamoms.',
    popular: true
  },
  {
    id: 'veg-ptm',
    name: 'Paneer Tikka Masala',
    price: 260,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    description: 'Charcoal-grilled paneer tikka skewers diced and folded into an opulent, intensely amber spiced tomato and roasted onion masala sauce.',
    bestSeller: true
  },
  {
    id: 'veg-scm',
    name: 'Soya Chaap Masala',
    price: 200,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Marinated high-protein soy wraps flame-seared and gently cooked in a spicy, slow-simmered Punjabi style onion-tomato reduction.'
  },
  {
    id: 'veg-bsm',
    name: 'Boil Soy Masala',
    price: 220,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=600',
    description: 'Healthy and clean boiled premium soya chunks cooked with minimum oil in a hand-ground spice and diced pepper herb broth.'
  },
  {
    id: 'veg-mv',
    name: 'Mix Veg',
    price: 220,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1621510456681-23a23cfb5f57?auto=format&fit=crop&q=80&w=600',
    description: 'A vibrant kaleidoscope of seasonal vegetables including baby corn, carrots, beans, and cauliflower wok-tossed with local garden herbs.'
  },
  {
    id: 'veg-smv',
    name: 'Special Mix Veg',
    price: 250,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=600',
    description: 'Exquisite mélange of choice premium vegetables topped with deep-fried dry fruits, golden paneer cubes, and a splash of pure fresh cream.',
    popular: true
  },
  {
    id: 'veg-mk',
    name: 'Malai Kofta',
    price: 250,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600',
    description: 'Heavenly melt-in-the-mouth paneer and potato dumplings stuffed with premium pistachios, bathed in a smooth imperial gold cashew cream sauce.',
    bestSeller: true
  },
  {
    id: 'veg-pap',
    name: 'Potato And Pyaza',
    price: 160,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1621510456681-23a23cfb5f57?auto=format&fit=crop&q=80&w=600',
    description: 'Country-style tender potatoes pan-fried with pearl shallots and dynamic Indian master-blends for a crisp, delicious dry item.'
  },
  {
    id: 'veg-ad',
    name: 'Aloo Dum',
    price: 150,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600',
    description: 'Traditional slow-cooked baby potatoes infused with tangy dry ginger, fennel, and rich Kashmiri red chili paste.'
  },
  {
    id: 'veg-ak',
    name: 'Aloo Kadhai',
    price: 160,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1621510456681-23a23cfb5f57?auto=format&fit=crop&q=80&w=600',
    description: 'Fresh chunky potatoes flash-cooked in a heavy iron skillet with ground red chillies, dry mango, and fragrant coriander seeds.'
  },
  {
    id: 'veg-vj',
    name: 'Veg Jhalfrezi',
    price: 190,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=600',
    description: 'Stir-fried farm fresh juliennes of vegetables cooked in a spicy-sweet tang of tomatoes and hand-roasted country vinegars.'
  },
  {
    id: 'veg-am',
    name: 'Aloo Matar',
    price: 150,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Comforting home receipt of baby red potatoes and tender green peas simmered in an aromatic coriander-scented cumin broth.'
  },
  {
    id: 'veg-mm',
    name: 'Mushroom Masala',
    price: 220,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600',
    description: 'Plump premium button mushrooms sautéed over high flames and simmered in a rich, deeply caramelized dark onion-tomato gravy.'
  },
  {
    id: 'veg-mkad',
    name: 'Mushroom Kadhai',
    price: 220,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=600',
    description: 'Fresh select mushrooms wok-tossed with crushed peppercorns, bell peppers, ginger strips, and fiery Kadhai masala.'
  },
  {
    id: 'veg-gpm',
    name: 'Green Peas Masala',
    price: 200,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Sweet tender winter peas cooked with slow-stewed onions, creamy cashews, and rich Punjabi garam masala accents.'
  },
  {
    id: 'veg-tvs',
    name: 'Tawa Veg (Bawarchi Special)',
    price: 250,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600',
    description: 'Chef\'s crown creation of assorted luxury baby vegetables grilled over a hot flatiron cast tawa, layered with rich gold masala. Truly exquisite.',
    popular: true
  },
  {
    id: 'veg-mdp',
    name: 'Mushroom Do Pyaza',
    price: 210,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=600',
    description: 'Sautéed premium button mushrooms prepared with twice-added sweet red onions and finished with delicate garden herbs.'
  },

  // --- SPECIAL THALI ---
  {
    id: 'thali-spec',
    name: 'Special Thali',
    price: 210,
    category: 'Special Thali',
    isVeg: true,
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800',
    description: 'The ultimate royal Indian imperial banquet served on a golden platter. Includes 2 Butter Tandoori Rotis or 1 golden Butter Naan, roasted papad, authentic slow-cooked Dal Makhani, fresh Mix Veg, our creamy Butter Paneer Masala, premium aged basmati Jeera Rice, and refreshing crisp orchard garden salad.',
    bestSeller: true,
    popular: true
  },

  // --- TANDOOR ---
  {
    id: 'tan-pt',
    name: 'Paneer Tikka',
    price: 240,
    category: 'Tandoor',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    description: 'Fresh blocks of soft cottage cheese marinated in double-strained spiced yogurt and custom herbs, smoked perfectly in our traditional clay tandoor clay oven.',
    popular: true
  },
  {
    id: 'tan-hbk',
    name: 'Hara Bhara Kebab',
    price: 190,
    category: 'Tandoor',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600',
    description: 'Delicate pan-fried patties made of blended green spinach, green peas, and fresh paneer, spiced beautifully and garnished with split royal cashews.'
  },
  {
    id: 'tan-tm',
    name: 'Tandoori Momo',
    price: 160,
    category: 'Tandoor',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&q=80&w=600',
    description: 'Dumpling pockets filled with finely shredded fresh veggies, coated in classic red tandoori marinade, and charred in the golden clay oven.',
    bestSeller: true
  },
  {
    id: 'tan-sc',
    name: 'Soya Chaap',
    price: 220,
    category: 'Tandoor',
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Soy skewers marinated in heavy cream and authentic roasted tandoor herbs, char-grilled to lock in the intense smokey essence.'
  },

  // --- APPETIZERS & SOUP ---
  {
    id: 'app-vp',
    name: 'Veg Pakoda',
    price: 120,
    category: 'Appetizers',
    isVeg: true,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600',
    description: 'Golden crispy assorted garden vegetable fritters laced with ajwain and toasted gram flour batter, deep fried.'
  },
  {
    id: 'app-pp',
    name: 'Paneer Pakoda',
    price: 160,
    category: 'Appetizers',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    description: 'Sumptuous chunks of cottage cheese stuffed with mint chutneys, golden breaded with seasoned chickpea flour.'
  },
  {
    id: 'app-ff',
    name: 'French Fries',
    price: 110,
    category: 'Appetizers',
    isVeg: true,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1518013041206-a0f538c26306?auto=format&fit=crop&q=80&w=600',
    description: 'Salt-sprinkled super premium golden long-cut potatoes, crisp on the outside and wonderfully fluffy inside.'
  },
  {
    id: 'soup-hs',
    name: 'Hot & Sour Soup',
    price: 90,
    category: 'Appetizers', // We put it under appetizers or we map it elegantly
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=600',
    description: 'Daring spicy-sour velvety broth loaded with shredded peppers, carrots, ginger, and rich wild chili vinegar.'
  },
  {
    id: 'soup-vm',
    name: 'Veg Manchow Soup',
    price: 90,
    category: 'Appetizers',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=600',
    description: 'Rich dark soy broth infused with fresh minced garlic, ginger, spring greens, served with crunchy crisp-fried noodles.'
  },

  // --- BEVERAGES ---
  {
    id: 'bev-mw',
    name: 'Mineral Water',
    price: 20,
    category: 'Beverages',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&q=80&w=600',
    description: 'Ice chilled premium packaged drinking water for pure hydration.'
  },
  {
    id: 'bev-ck',
    name: 'Coke',
    price: 30,
    category: 'Beverages',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600',
    description: 'Refreshing classic effervescent cola, served chilled with lemon wedges.'
  },
  {
    id: 'bev-fn',
    name: 'Fanta',
    price: 30,
    category: 'Beverages',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600',
    description: 'Lively bubbly sweet orange soda served ice cold.'
  },
  {
    id: 'bev-mz',
    name: 'Mazza',
    price: 30,
    category: 'Beverages',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600',
    description: 'Luscious, rich mango nectar made from select premium Alphonso mangoes.'
  },
  {
    id: 'bev-st',
    name: 'Sting',
    price: 30,
    category: 'Beverages',
    isVeg: true,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600',
    description: 'High energy electrical red sweet carbonated booster drink.'
  },
  {
    id: 'bev-ls',
    name: 'Lassi',
    price: 30,
    category: 'Beverages',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Traditional punjabi sweet curd whip infused with pure rosewater and cardamoms, served thick in artisanal clay glass.',
    popular: true
  },
  {
    id: 'bev-mc',
    name: 'Masala Coke',
    price: 50,
    category: 'Beverages',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600',
    description: 'An effervescent cola loaded with secret roasted spices, black pepper extract, lemon zest and sweet mint leaves.'
  },

  // --- MOMOS ---
  {
    id: 'momo-veg',
    name: 'Veg Momo',
    price: 70,
    category: 'Momos',
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&q=80&w=600',
    description: 'Delicate steamed artisanal pockets stuffed with finely chopped cabbage, carrots, organic garlic, and light seasoning.'
  },
  {
    id: 'momo-fry',
    name: 'Fry Momo',
    price: 90,
    category: 'Momos',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&q=80&w=600',
    description: 'Perfectly deep fried momo pockets, yielding a crispy golden crust while preserving the beautifully moist core.'
  },
  {
    id: 'momo-chilly',
    name: 'Chilly Momo',
    price: 140,
    category: 'Momos',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&q=80&w=600',
    description: 'Crispy fried momos wok-tossed in a high-contrast dark soy glaze with sliced green chillies and spring onions.',
    popular: true
  },
  {
    id: 'momo-jhol',
    name: 'Jhol Momo',
    price: 150,
    category: 'Momos',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&q=80&w=600',
    description: 'Signature Nepalese style momo served submerged in an authentic, cold sesame-peanut spiced soup infusion.',
    bestSeller: true
  },
  {
    id: 'momo-sizzler',
    name: 'Sizzler Momo',
    price: 170,
    category: 'Momos',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&q=80&w=600',
    description: 'Fiery high-sizzle platter of momos resting on a bed of fresh cabbage, dressed in chef\'s supreme schezwan barbecue sauce.',
    popular: true
  },

  // --- CHILLY SPECIALS ---
  {
    id: 'ch-bcc',
    name: 'Baby Corn Crispy',
    price: 220,
    category: 'Vegetables', // We can map this to vegetables or list directly, wait Categories has to match Categories list.
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600',
    description: 'Sweet baby corn kernels tossed in tempura batter and deep-fried to crisp perfection, dusted with aromatic peppers.'
  },
  {
    id: 'ch-bcb',
    name: 'Baby Corn Chilly',
    price: 220,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600',
    description: 'Sautéed baby corn fingers cooked beautifully in a fiery dark soy sauce, loaded with fresh minced garlic and spring peppers.'
  },
  {
    id: 'ch-cp',
    name: 'Chilly Potato',
    price: 150,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600',
    description: 'Crisp golden potato chips stir-fried in a rich Indo-Chinese glaze with scallions and crushed red chillies.'
  },
  {
    id: 'ch-hp',
    name: 'Honey Potato',
    price: 140,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600',
    description: 'Signature crispy potatoes glazed with organic wild honey, toasted sesame seeds, and light tangy ginger sauce.'
  },
  {
    id: 'ch-crp',
    name: 'Crispy Potato',
    price: 140,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600',
    description: 'Extremely thin and crispy hand-cut premium potato straws tossed with dry spice mix and refreshing chives.'
  },
  {
    id: 'ch-pc',
    name: 'Paneer Chilly',
    price: 220,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    description: 'Golden fried paneer blocks tossed in a fiery premium Indo-Chinese sauce with bell peppers, onions, and spicy green pepper extracts.',
    bestSeller: true
  },
  {
    id: 'ch-p65',
    name: 'Paneer 65',
    price: 210,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    description: 'Crispy cottage cheese tempered with sizzling hand-broken curry leaves, red whole chillies, and sharp tangy southern spices.'
  },
  {
    id: 'ch-mc',
    name: 'Mushroom Chilly',
    price: 220,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=600',
    description: 'Fresh plump button mushrooms battered and sautéed with thick capsicums in dynamic dark garlic pepper soy.'
  },
  {
    id: 'ch-vm',
    name: 'Veg Manchurian',
    price: 180,
    category: 'Vegetables',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600',
    description: 'Delicate vegetable density rounds pan-cooked in an absolute classic spicy-sweet dark soy-cilantro coriander broth.',
    popular: true
  },

  // --- NOODLES ---
  {
    id: 'noo-chow',
    name: 'Chowmein',
    price: 120,
    category: 'Noodles',
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600',
    description: 'Sizzling Chinese wok noodles tossed with crisp juliennes of cabbage, capsicum, carrots, and sweet vinegar-soy sauce.'
  },
  {
    id: 'noo-pc',
    name: 'Paneer Chowmein',
    price: 140,
    category: 'Noodles',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600',
    description: 'Sizzling wok noodles elevated with golden cottage cheese cubes, toasted in a fusion soy-chili profile.'
  },
  {
    id: 'noo-sn',
    name: 'Schezwan Noodles',
    price: 140,
    category: 'Noodles',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600',
    description: 'Spicy noodles tossed in our freshly crushed in-house Schezwan red pepper chili paste and crisp farm onions.'
  },
  {
    id: 'noo-vs',
    name: 'Veg Sizzler',
    price: 200,
    category: 'Noodles',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600',
    description: 'A hot crackling wooden hotplate presenting buttered herb rice or noodles, crispy cutlets, golden fries, wok vegetables, and our dark pepper sauce.',
    popular: true
  },
  {
    id: 'noo-vmn',
    name: 'Veg Mix Noodles',
    price: 160,
    category: 'Noodles',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600',
    description: 'Wok-tossed premium noodles incorporating multiple vegetable families, paneer ribbons, and secret garden spices.',
    bestSeller: true
  },

  // --- RICE ---
  {
    id: 'rice-sr',
    name: 'Steam Rice',
    price: 70,
    category: 'Rice',
    isVeg: true,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600',
    description: 'Aged basmati rice steamed masterfully, each long grain standing fluffy, light, and separate.'
  },
  {
    id: 'rice-jr',
    name: 'Jeera Rice',
    price: 100,
    category: 'Rice',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600',
    description: 'Fragrant basmati cooked exquisitely and tempered with heated mountain cumin seeds and a touch of pure organic ghee.',
    popular: true
  },
  {
    id: 'rice-fr',
    name: 'Fried Rice',
    price: 130,
    category: 'Rice',
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600',
    description: 'Long grain rice stir-fried in a hot wok with finely diced crisp vegetables, ginger shavings, and pure light soy.'
  },
  {
    id: 'rice-rp',
    name: 'Road Pulao',
    price: 150,
    category: 'Rice',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600',
    description: 'A traditional highway-diner styled fragrant rice pilaf rich with star anise, cloves, green peas and touch of saffron.',
    bestSeller: true
  },
  {
    id: 'rice-gpp',
    name: 'Green Peas Pulao',
    price: 140,
    category: 'Rice',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600',
    description: 'Gentle and sweet aromatic basmati pilaf studded with heavy sweet green peas and soft spices.'
  },

  // --- DAL ---
  {
    id: 'dal-df',
    name: 'Dal Fry',
    price: 100,
    category: 'Dal',
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600',
    description: 'Yellow lentils whipped smooth, tempered with heated mustard oil, toasted cumin seeds, sweet red onions and coriander.'
  },
  {
    id: 'dal-ydt',
    name: 'Yellow Dal Tadka',
    price: 140,
    category: 'Dal',
    isVeg: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600',
    description: 'Opulent split yellow peas tempered with hot charcoal ghee, dynamic master spices, fiery red whole chillies and garlic.',
    popular: true
  },
  {
    id: 'dal-makh',
    name: 'Dal Makhani',
    price: 170,
    category: 'Dal',
    isVeg: true,
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Our pride. Black urad lentils slow-simmered for 24 hours on dry coals, enriched with rich white butter, fresh milk cream, and fine tomato purée.',
    bestSeller: true
  },
  {
    id: 'dal-bdt',
    name: 'Black Dal Tadka',
    price: 170,
    category: 'Dal',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Black whole urad simmered to softness, quick-tempered beautifully with smoky ginger-garlic paste and pure butter.'
  },

  // --- ROTI & NAAN ---
  {
    id: 'ro-tr',
    name: 'Tandoori Roti',
    price: 15,
    category: 'Roti & Naan',
    isVeg: true,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Artisanal whole wheat flour hand-flashed and cooked inside our traditional red hot clay tandoor oven.'
  },
  {
    id: 'ro-btr',
    name: 'Butter Tandoori Roti',
    price: 20,
    category: 'Roti & Naan',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Smoke-toasted whole wheat tandoori flatbread, brushed generously with pure golden butter.'
  },
  {
    id: 'ro-pn',
    name: 'Plain Naan',
    price: 35,
    category: 'Roti & Naan',
    isVeg: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Velvet soft, beautiful leavened refined white flour flatbread baked over red charcoal in the clay oven.'
  },
  {
    id: 'ro-bn',
    name: 'Butter Naan',
    price: 45,
    category: 'Roti & Naan',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Mouth-melting tear-drop shaped flatbread, heavily layered with rich premium butter. Absolute luxury.',
    bestSeller: true
  },
  {
    id: 'ro-gn',
    name: 'Garlic Naan',
    price: 60,
    category: 'Roti & Naan',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Tandoor naan flatbread loaded with heavily minced royal garlic, fresh grass cilantro sprigs and salted butter.',
    popular: true
  },
  {
    id: 'ro-ku',
    name: 'Kulcha',
    price: 60,
    category: 'Roti & Naan',
    isVeg: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Traditional Punjabi leavened bread stuffed with beautifully seasoned potato shreds and whole wild spices.'
  },
  {
    id: 'ro-cn',
    name: 'Cheese Naan',
    price: 80,
    category: 'Roti & Naan',
    isVeg: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    description: 'Luxurious tandoor-baked flatbread oozing with a heavy core of liquid mozzarella and golden processed cheese.',
    bestSeller: true
  }
];

export const CATEGORIES = [
  'Vegetables',
  'Special Thali',
  'Tandoor',
  'Momos',
  'Noodles',
  'Rice',
  'Dal',
  'Roti & Naan',
  'Beverages'
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Vikramjit Singh',
    rating: 5,
    comment: 'The Special Thali is an absolute masterpiece! The Dal Makhani mimics the legendary recipes of old Delhi. Service is spectacular and the hospitality makes you feel like royalty. Absolute Taj Hotels vibe in Forbesganj!',
    date: '2026-05-15',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    tag: 'Verified Connoisseur'
  },
  {
    id: 'rev-2',
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Spicy Bawarchi has completely redefined fine dining in Bihar. Their Paneer Tikka Masala is rich and incredibly buttery. The ordering interface is exceptionally smooth and convenient. High-end visual look!',
    date: '2026-05-28',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    tag: 'Elite Local Guide'
  },
  {
    id: 'rev-3',
    name: 'Dr. Amit Raj',
    rating: 5,
    comment: 'Outstanding catering and party booking service. Booked a graduation dinner family gathering here last week, and every single guest was stunned by the Paneer Chilly and royal Naans. Highly recommended!',
    date: '2026-05-29',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    tag: 'Regular Patron'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Royal Banquet Setup',
    category: 'Ambience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-2',
    title: 'Chef\'s Paneer Platter',
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-3',
    title: 'Imperial Dal Makhani preparation',
    category: 'Culinary Art',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-4',
    title: 'Luxury Private Dining Lounge',
    category: 'Ambience',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-5',
    title: 'Signature Jhol Momos',
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-6',
    title: 'Aged Basmati Pulao Grains',
    category: 'Culinary Art',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800'
  }
];

export const PARTY_SERVICES = [
  {
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=600',
    title: 'Birthday Party',
    tagline: 'Make milestones unforgettable',
    description: 'Curated royal menus, modern ambient balloon displays, and luxury custom cake coordinates for all age groups.'
  },
  {
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600',
    title: 'Anniversary Party',
    tagline: 'Celebrate eternal unions',
    description: 'Immersive candlelight setups, classic romantic live slow-instrumentals, and signature multi-course banquets.'
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
    title: 'Wedding Function',
    tagline: 'Grand royal luxury weddings',
    description: 'Magnificent bridal catering, luxury thematic catering, live bawarchi counters, and world-class hospitality.'
  },
  {
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=600',
    title: 'Engagement Party',
    tagline: 'Elegant rings celebration',
    description: 'Pre-wedding celebrations with personalized setups, fine cocktail snacks, and dramatic entry sequences.'
  },
  {
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600',
    title: 'Corporate Event',
    tagline: 'Sophisticated brand banquets',
    description: 'High-speed internet lounge setups, projection-aligned buffets, and sophisticated clean vegetarian arrangements.'
  },
  {
    image: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=600',
    title: 'Family Gathering',
    tagline: 'Warm cultural reunions',
    description: 'Spacious child-safe seating arrangements, multi-generational menus, and infinite traditional tea elements.'
  }
];
