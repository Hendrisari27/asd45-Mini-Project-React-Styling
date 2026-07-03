import React from 'react';

// icon medsos
import twitterIcon from '../assets/icon/X.svg'; 
import instagramIcon from '../assets/icon/IG.svg';
import facebookIcon from '../assets/icon/FB.svg';

function Footer() {
  return (
    <footer className="w-full bg-[#111319] border-t border-slate-800/60 py-8 px-6 mt-12 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        
        {/* Navigasi Link */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-center md:flex md:flex-row md:gap-12 font-medium">
          <a href="#" className="hover:text-white transition-colors duration-200">About Us</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
        </div>

        {/* Sosial Media Icons */}
        <div className="flex items-center gap-5">
          
          {/* Twitter / X */}
          <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Twitter">
            <img src={twitterIcon} alt="Twitter" className="w-5 h-5 object-contain" />
          </a>
          
          {/* Instagram */}
          <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
          </a>

          {/* Facebook */}
          <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Facebook">
            <img src={facebookIcon} alt="Facebook" className="w-5 h-5 object-contain" />
          </a>
        </div>

        {/* Teks Copyright */}
        <p className="text-xs text-slate-500 tracking-wide">
          © 2026 DibiTech. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;