  import React, { useEffect, useState } from 'react';
  import { Heart } from 'lucide-react';

  interface HomePageProps {
    onNavigateToLetters: () => void;
  }

  const HomePage: React.FC<HomePageProps> = ({ onNavigateToLetters }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsLoaded(true);
    }, []);

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto z-10">
          <div className={`mb-5 ${isLoaded ? 'slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold  text-white mb-6 leading-tight">
              Heyy You
            </h1>
            <div className="w-24 h-1 bg-black mx-auto rounded-full mb-4"></div>
          </div>

          <div className={`mb-12 ${isLoaded ? 'slide-up' : ''}`} style={{ animationDelay: '0.6s' }}>
            <p className="text-xl md:text-lg lg:text-lg text-white  leading-relaxed mb-2 font-light">
            Hello my YOU, i know you're strong but even a strong person like you deserves rest.<br/> So these are pieces of my light, kept safe for you. Whenever you need just open a letter. 🫀
            </p>
            <p className="text-xl md:text-lg lg:text-lg text-white  leading-relaxed mb-2 font-light">
            No matter what happens My Love and Prayers stay right by your side🫶
            </p>
            
          </div>

          <div className={`${isLoaded ? 'slide-up' : ''}`} style={{ animationDelay: '0.9s' }}>
            <button
              onClick={onNavigateToLetters}
              className="glow-button pulse-glow px-8 py-4 md:px-12 md:py-6 rounded-full text-white font-bold text-lg md:text-xl flex items-center gap-3 mx-auto hover:scale-105 transform transition-all duration-300"
            >
              <Heart className="w-6 h-6" fill="currentColor" />
              Open Letters
              <Heart className="w-6 h-6" fill="currentColor" />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-pink-400 text-4xl opacity-60 floating-heart">
          💕
        </div>
        <div className="absolute top-32 right-16 text-pink-500 text-3xl opacity-50 floating-heart">
          🌸
        </div>
        <div className="absolute bottom-32 left-20 text-pink-400 text-5xl opacity-40 floating-heart">
          ✨
        </div>
        <div className="absolute bottom-40 right-12 text-pink-500 text-4xl opacity-60 floating-heart">
          💗
        </div>
        <div className="absolute top-1/2 left-4 text-pink-400 text-3xl opacity-50 floating-heart">
          🦋
        </div>
        <div className="absolute top-1/3 right-8 text-pink-500 text-6xl opacity-30 floating-heart">
          🤍
        </div>
      </div>
    );
  };

  export default HomePage;