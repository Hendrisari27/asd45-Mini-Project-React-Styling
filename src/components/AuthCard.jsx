import React, { useState } from 'react';

function AuthCard({ onClose }) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [role, setRole] = useState('buyer');
  
  // Fitur Login/Password Toggle
  const [showPassword, setShowPassword] = useState(false);

  const isSellerActive = role === 'seller';
  const isBuyerActive = role === 'buyer';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      email: e.target.email?.value,
      password: e.target.password?.value,
      fullName: e.target.fullName?.value || null,
      buyer: isBuyerActive,
      seller: isSellerActive,
    };

    console.log("Form Submitted Data:", formData);
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-[#1e2230] rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-800 text-slate-100">
      
      {/* TOMBOL CLOSE */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200"
        aria-label="Close Modal"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* HEADER KARTU */}
      <div className="text-center mb-6 pr-6">
        <h3 className="text-2xl font-bold tracking-tight mb-2">
          {isLoginMode ? 'Welcome Back!' : 'Create an Account'}
        </h3>
        <p className="text-xs text-slate-400">
          {isLoginMode 
            ? 'Access your DibiTech dashboard and explore tools.' 
            : 'Join DibiTech marketplace to discover or sell AI tools.'}
        </p>
      </div>

      {/* PILIHAN TAB ROLE */}
      {isLoginMode && (
        <div className="flex bg-[#111319] p-1 rounded-xl mb-6 border border-slate-800">
          <button
            type="button"
            onClick={() => setRole('buyer')}
            className={`flex-1 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all duration-200 ${
              isBuyerActive ? 'bg-[#1d4ed8] text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Belanjain Ajah
          </button>
          <button
            type="button"
            onClick={() => setRole('seller')}
            className={`flex-1 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all duration-200 ${
              isSellerActive ? 'bg-[#4fa396] text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Buka Toko Kamu
          </button>
        </div>
      )}

      {/* FORM UTAMA */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLoginMode && (
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Full Name</label>
            <input name="fullName" type="text" placeholder="John Doe" className="w-full bg-[#111319] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition" required />
          </div>
        )}

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
          <input name="email" type="email" placeholder="name@example.com" className="w-full bg-[#111319] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition" required />
        </div>

        {/* INPUT PASSWORD DENGAN FITUR LIHAT PASSWORD */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-medium text-slate-400">Password</label>
            {isLoginMode && <a href="#" className="text-[11px] text-blue-400 hover:underline">Forgot?</a>}
          </div>
          
          <div className="relative flex items-center">
            <input 
              name="password" 
              type={showPassword ? "text" : "password"} // Dinamis berdasarkan state
              placeholder="••••••••" 
              className="w-full bg-[#111319] border border-slate-800 rounded-xl pl-4 pr-11 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition" 
              required 
            />
            
            {/* Tombol Toggle Mata (Show/Hide) */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-slate-400 hover:text-slate-200 transition-colors p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                // Ikon Mata Dicoret (Hide)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                // Ikon Mata Terbuka (Show)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* SELEKSI RADIO UNTUK REGISTER MODE */}
        {!isLoginMode && (
          <div className="pt-1">
            <label className="block text-xs font-medium text-slate-400 mb-2">Register as a:</label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-2 bg-[#111319] border border-slate-800 rounded-xl px-4 py-2.5 cursor-pointer hover:border-slate-700">
                <input 
                  type="radio" 
                  name="reg-role" 
                  checked={isBuyerActive} 
                  onChange={() => setRole('buyer')}
                  className="text-blue-600 focus:ring-0" 
                />
                <span className="text-xs text-slate-300">Buyer</span>
              </label>
              <label className="flex items-center gap-2 bg-[#111319] border border-slate-800 rounded-xl px-4 py-2.5 cursor-pointer hover:border-slate-700">
                <input 
                  type="radio" 
                  name="reg-role" 
                  checked={isSellerActive} 
                  onChange={() => setRole('seller')}
                  className="text-blue-600 focus:ring-0" 
                />
                <span className="text-xs text-slate-300">Seller</span>
              </label>
            </div>
          </div>
        )}

        <div className="pt-2">
          <button 
            type="submit" 
            className={`w-full text-white font-medium text-sm py-2.5 rounded-xl transition active:scale-[0.98] shadow-md ${
              !isLoginMode ? 'bg-blue-600 hover:bg-blue-500' : isSellerActive ? 'bg-[#4fa396] hover:bg-[#438a7f]' : 'bg-[#1d4ed8] hover:bg-blue-600'
            }`}
          >
            {isLoginMode ? `Sign In as ${isSellerActive ? 'Seller' : 'Buyer'}` : 'Create Free Account'}
          </button>
        </div>
      </form>

      {/* FOOTER SWITCH MODE */}
      <div className="text-center mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-400">
        {isLoginMode ? (
          <p>Don't have an account? <button onClick={() => { setIsLoginMode(false); }} className="text-blue-400 font-semibold hover:underline bg-transparent border-none cursor-pointer">Register here</button></p>
        ) : (
          <p>Already have an account? <button onClick={() => { setIsLoginMode(true); }} className="text-blue-400 font-semibold hover:underline bg-transparent border-none cursor-pointer">Sign In</button></p>
        )}
      </div>

    </div>
  );
}

export default AuthCard;