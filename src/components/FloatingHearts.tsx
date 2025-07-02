import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; size: number; left: number; animationDuration: number; delay: number }>>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      left: Math.random() * 100,
      animationDuration: Math.random() * 10 + 15,
      delay: Math.random() * 5
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute opacity-20 text-pink-300"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `float ${heart.animationDuration}s ease-in-out infinite`,
            animationDelay: `${heart.delay}s`,
            bottom: '-50px'
          }}
        >
          💗
        </div>
      ))}
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/4 opacity-10 text-6xl text-pink-400 floating-heart">
        🌸
      </div>
      <div className="absolute top-3/4 right-1/4 opacity-10 text-5xl text-pink-300 floating-heart">
        ✨
      </div>
      <div className="absolute top-1/2 left-1/6 opacity-10 text-4xl text-pink-400 floating-heart">
        🦋
      </div>
      <div className="absolute bottom-1/4 right-1/3 opacity-10 text-7xl text-pink-300 floating-heart">
        💕
      </div>
    </div>
  );
};

export default FloatingHearts;