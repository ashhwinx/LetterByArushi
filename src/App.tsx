import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import LettersPage from './components/LettersPage';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'letters'>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateToLetters = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('letters');
      setIsTransitioning(false);
    }, 300);
  };

  const navigateToHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('home');
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      
      <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {currentPage === 'home' ? (
          <HomePage onNavigateToLetters={navigateToLetters} />
        ) : (
          <LettersPage onNavigateToHome={navigateToHome} />
        )}
      </div>
      
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-black/10 to-transparent">
        <p className="text-black text-sm cursive font-bold">
          No matter the distance, I'm always here — loving you, endlessly. 💗
        </p>
      </footer>
    </div>
  );
}

export default App;