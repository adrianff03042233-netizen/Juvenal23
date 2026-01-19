
import React, { useState, useMemo, useEffect } from 'react';
import { MAIN_CATEGORIES, SUB_CATEGORIES, PRODUCTS } from './constants';
import { Product, Ticket, OrderStatus } from './types';
import Navbar from './components/Navbar';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import TicketHistory from './components/TicketHistory';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import PurchaseModal from './components/PurchaseModal';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>(() => {
    try {
      const saved = localStorage.getItem('juvenal_tickets');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [isDeliveryOnline, setIsDeliveryOnline] = useState<boolean>(true);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState<'home' | 'tickets'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const officialLogo = "https://cdn-icons-png.flaticon.com/512/3252/3252873.png"; 

  useEffect(() => {
    localStorage.setItem('juvenal_tickets', JSON.stringify(tickets));
  }, [tickets]);

  const activeCategory = useMemo(() => 
    MAIN_CATEGORIES.find(c => c.id === activeCategoryId), 
  [activeCategoryId]);

  const activeSubCategory = useMemo(() => 
    SUB_CATEGORIES.find(s => s.id === activeSubCategoryId), 
  [activeSubCategoryId]);

  const availableSubCategories = useMemo(() => 
    SUB_CATEGORIES.filter(s => s.parentId === activeCategoryId), 
  [activeCategoryId]);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    if (activeSubCategoryId) {
      result = result.filter(p => p.subCategoryId === activeSubCategoryId);
    } else if (activeCategoryId) {
      return [];
    }
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q));
    }
    return result;
  }, [activeCategoryId, activeSubCategoryId, searchQuery]);

  const handlePurchase = (product: Product) => {
    const newTicket: Ticket = {
      id: `TK-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      productId: product.id,
      productName: product.name,
      purchaseDate: new Date().toLocaleString('pt-BR'),
      status: OrderStatus.OPEN
    };
    setTickets(prev => [newTicket, ...prev]);
    setSelectedProduct(product);
  };

  const isBrowsing = !!activeCategoryId || !!searchQuery;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar 
        onTicketsClick={() => setView('tickets')}
        onHomeClick={() => { setView('home'); setActiveCategoryId(null); setActiveSubCategoryId(null); setSearchQuery(''); }}
        onInfoClick={() => setView('home')}
        isOnline={isDeliveryOnline}
        mascotUrl={officialLogo}
      />

      <main className="flex-grow pt-32 pb-20 px-4 max-w-7xl mx-auto w-full relative z-10">
        {view === 'home' && (
          <div className="animate-fadeIn">
            {!isBrowsing && (
              <section className="text-center py-20">
                <h1 className="text-6xl md:text-8xl font-gamer font-black mb-6 uppercase tracking-tighter">
                   <span className="gradient-text">JUVENA</span> STORE
                </h1>
                <p className="text-gray-500 text-xs uppercase tracking-[0.4em] mb-12">O TERMINAL DE ELITE DO BLOX FRUITS</p>
                <div className="max-w-xl mx-auto mb-20">
                   <SearchBar value={searchQuery} onChange={setSearchQuery} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {MAIN_CATEGORIES.map(category => (
                    <CategorySection key={category.id} category={category} onClick={() => setActiveCategoryId(category.id)} />
                  ))}
                </div>
              </section>
            )}

            {isBrowsing && (
              <div className="mb-12">
                <button 
                  onClick={() => { activeSubCategoryId ? setActiveSubCategoryId(null) : (activeCategoryId ? setActiveCategoryId(null) : setSearchQuery('')) }}
                  className="mb-8 text-lime-500 text-[10px] font-black uppercase tracking-widest hover:translate-x-[-4px] transition-transform"
                >
                  ← Voltar
                </button>
                
                {!searchQuery && activeCategoryId && !activeSubCategoryId && (
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {availableSubCategories.map(sub => (
                        <button 
                          key={sub.id}
                          onClick={() => setActiveSubCategoryId(sub.id)}
                          className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-lime-500/40 transition-all text-center group"
                        >
                          <div className="text-5xl mb-4">{sub.icon}</div>
                          <h3 className="font-gamer font-bold text-white uppercase">{sub.name}</h3>
                          <p className="text-[10px] text-gray-500 mt-2">{sub.description}</p>
                        </button>
                      ))}
                   </div>
                )}

                {(activeSubCategoryId || searchQuery) && (
                   <ProductGrid 
                    products={filteredProducts} 
                    onPurchase={handlePurchase} 
                    isStoreOnline={isDeliveryOnline}
                   />
                )}
              </div>
            )}
          </div>
        )}

        {view === 'tickets' && <TicketHistory tickets={tickets} />}
      </main>

      <Footer onAdminClick={() => setIsAdminOpen(true)} />
      {selectedProduct && <PurchaseModal product={selectedProduct} onClose={() => setSelectedProduct(null)} mascotUrl={officialLogo} />}
      {isAdminOpen && <AdminPanel isOnline={isDeliveryOnline} onToggle={setIsDeliveryOnline} onClose={() => setIsAdminOpen(false)} />}
    </div>
  );
};

export default App;
