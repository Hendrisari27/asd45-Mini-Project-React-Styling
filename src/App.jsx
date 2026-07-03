import { useState } from "react";

// background image
import bgHero from './assets/image/backgrounds/BGD.png';

// icon company
import logoCompany from "./assets/icon/logo.svg";

// components
import CategoriesCard from "./components/CategoriesCard";
import FeaturedProductCard from "./components/FeaturedProductCard"; 
import TrendingCard from "./components/TrendingCard";
import Footer from "./components/Footer";
import AuthCard from "./components/AuthCard"; 

// bodypage
import PageCategories from "./bodypage/PageCategories"; 

// image categories
import C1 from "./assets/image/categories/C1.png";
import C2 from "./assets/image/categories/C2.png";
import C3 from "./assets/image/categories/C3.png";
import C4 from "./assets/image/categories/C4.png";
import C5 from "./assets/image/categories/C5.png";

// image Featured
import featuredProductImg from "./assets/image/Featured/FP.png"; 

// image trending
import T1 from "./assets/image/trending/T1.png";
import T2 from "./assets/image/trending/T2.png";
import T3 from "./assets/image/trending/T3.png";
import T4 from "./assets/image/trending/T4.png";

// icon medsos
import twitterIcon from './assets/icon/X.svg'; 
import instagramIcon from './assets/icon/IG.svg';
import facebookIcon from './assets/icon/FB.svg';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [categories] = useState([
    {
      id: 1,
      name: "Productivity",
      description: "Boost your efficiency with AI-powered productivity tools.",
      bgColor: "#4fa396",
      image: C1 
    },
    {
      id: 2,
      name: "Marketing",
      description: "Enhance your marketing strategies with AI-driven insights.",
      bgColor: "#f1f5f9",
      image: C2 
    },
    {
      id: 3,
      name: "Code",
      description: "Accelerate your coding workflow with smart autocomplete.",
      bgColor: "#1e293b",
      image: C3 
    },
    {
      id: 4,
      name: "Design",
      description: "Unleash your creativity with AI-enhanced design tools.",
      bgColor: "#ffffff", 
      image: C4 
    },
    {
      id: 5,
      name: "AI Tools",
      description: "Explore a wide range of innovative AI tools for various applications.",
      bgColor: "#334155", 
      image: C5 
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [trendingItems] = useState([
    { id: 1, title: "AI Writing Assistant", description: "Generate high-quality content effortlessly.", image: T1 },
    { id: 2, title: "AI Image Generator", description: "Create stunning visuals with the power of AI.", image: T2 },
    { id: 3, title: "AI Data Analysis Tool", description: "Analyze complex data sets easily.", image: T3 },
    { id: 4, title: "AI Customer Support", description: "Enhance your customer service.", image: T4 }
  ]);

  return (
    <div className="relative min-h-screen bg-[#111319] text-white font-sans flex flex-col justify-between">
      <div>
        {/* NAVBAR */}
        <nav className="flex items-center justify-between bg-[#111319] px-6 md:px-12 py-4 border-b border-slate-800 sticky top-0 z-50">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedCategory(null)}>
            <img src={logoCompany} alt="DibiTech Logo" className="w-6 h-6 object-contain" />
            <span className="text-lg font-bold tracking-wide">DibiTech</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
              <a href="https://learn.dibimbing.id/home?guest=false" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"> LMS </a>
              <button onClick={() => setSelectedCategory(null)} className="hover:text-white transition">Explore</button>
              
              <button onClick={() => setSelectedCategory(categories[0])} className="hover:text-white transition">Categories</button>
              
              <a href="#" className="hover:text-white transition">Cart</a>
            </div>

            <button onClick={() => setShowLoginModal(true)} className="bg-[#1d4ed8] hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full transition shadow-md active:scale-95"> 
              Login
            </button>
          </div>
        </nav>

        {/*BodyPage */}
        {selectedCategory ? (
          <PageCategories 
            category={selectedCategory} 
            onBack={() => setSelectedCategory(null)} 
          />
        ) : (
          <>
            {/* HERO SECTION */}
            <header className="max-w-6xl mx-auto p-4 md:p-8 pt-6">
              <div className="relative rounded-2xl overflow-hidden bg-cover bg-center min-h-[340px] md:min-h-[440px] flex items-center justify-center text-center px-6" style={{ backgroundImage: `linear-gradient(rgba(17, 19, 25, 0.75), rgba(17, 19, 25, 0.75)), url(${bgHero})` }}>
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">Discover the Future of Work with AI</h2>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">Explore a curated marketplace of AI-powered tools designed to transform your workflow and unlock new possibilities.</p>
                </div>
              </div>
            </header>

            {/* MAIN CONTENT AREA */}
            <main className="max-w-6xl mx-auto px-6 md:px-8 pb-12 flex flex-col gap-12">
              
              {/* CATEGORIES SECTION */}
              <section>
                <h3 className="text-2xl font-bold text-slate-100 mb-6">Categories</h3>
                <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory w-full">
                  {categories.map((category) => (
                    /* PERBAIKAN 2: Menghapus onClick dari card ini agar hanya bisa diklik dari navbar saja */
                    <div key={category.id} className="snap-center">
                      <CategoriesCard category={category} />
                    </div>
                  ))}
                </div>
              </section>

              {/* FEATURED PRODUCT SECTION */}
              <section className="border-t border-slate-800/60 pt-8">
                <FeaturedProductCard />
              </section>

              {/* TRENDING SECTION */}
              <section className="border-t border-slate-800/60 pt-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-6">Trending</h3>
                <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory">
                  {trendingItems.map((item) => (
                    <div key={item.id} className="snap-center">
                      <TrendingCard item={item} />
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </>
        )}
      </div>

      <Footer twitter={twitterIcon} instagram={instagramIcon} facebook={facebookIcon} />

      {/* MODAL POP-UP LOGIN USER */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div onClick={() => setShowLoginModal(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
            <AuthCard onClose={() => setShowLoginModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;