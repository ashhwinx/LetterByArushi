// import React, { useState, useEffect } from 'react';
// import { X, Heart } from 'lucide-react';

// interface LetterModalProps {
//   letter: {
//     id: number;
//     title: string;
//     emoji: string;
//     content: string;
//   };
//   onClose: () => void;
// }

// const LetterModal: React.FC<LetterModalProps> = ({ letter, onClose }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [showContent, setShowContent] = useState(false);
//   const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

//   useEffect(() => {
//     setIsVisible(true);
//     const timer = setTimeout(() => setShowContent(true), 500);
    
//     // Create sparkles
//     const newSparkles = Array.from({ length: 12 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100
//     }));
//     setSparkles(newSparkles);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false);
//     setTimeout(onClose, 300);
//   };

//   return (
//     <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//       <div className={`bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transition-all duration-500 border-4 border-black ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
//         {/* Sparkles */}
//         {sparkles.map((sparkle) => (
//           <div
//             key={sparkle.id}
//             className="sparkle text-pink-400 text-xl"
//             style={{
//               left: `${sparkle.x}%`,
//               top: `${sparkle.y}%`,
//               animationDelay: `${sparkle.id * 0.2}s`
//             }}
//           >
//             ✨
//           </div>
//         ))}

//         {/* Close Button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4 w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
//         >
//           <X className="w-5 h-5 text-white" />
//         </button>

//         {/* Content */}
//         <div className="p-8">
//           <div className="text-center mb-8">
//             <div className="text-8xl mb-4 floating-heart">
//               {letter.emoji}
//             </div>
//             <h2 className="text-2xl md:text-3xl  font-bold ceursive text-black mb-4">
//               {letter.title}
//             </h2>
//             <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
//           </div>

//           <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//             <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 md:p-8 border-3 border-black">
//               <p className="text-black text-base md:text-lg leading-relaxed  font-bold">
//                 {letter.content}
//               </p>
              
//               <div className="flex justify-center mt-6">
//                 <div className="flex items-center gap-2 text-black">
//                   <Heart className="w-5 h-5" fill="currentColor" />
//                   <span className="text-sm cursive font-bold">With all my love</span>
//                   <Heart className="w-5 h-5" fill="currentColor" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 text-center">
//             <button
//               onClick={handleClose}
//               className="glow-button px-8 py-3 rounded-full text-white font-bold hover:scale-105 transform transition-all duration-300"
//             >
//               Keep this love close 💗
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LetterModal;



import React, { useState, useEffect } from 'react';
import { X, Heart } from 'lucide-react';

interface LetterModalProps {
  letter: {
    id: number;
    title: string;
    emoji: string;
    content: string;
  };
  onClose: () => void;
}

const LetterModal: React.FC<LetterModalProps> = ({ letter, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setShowContent(true), 500);

    // Create sparkles
    const newSparkles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setSparkles(newSparkles);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`fixed inset-0 bg-[#4e342e]/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-[#efebe9] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transition-all duration-500 border-4 border-[#4e342e] ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        
        {/* Sparkles */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="sparkle text-[#a1887f] text-xl"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.id * 0.2}s`
            }}
          >
            ✨
          </div>
        ))}

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 bg-[#4e342e] hover:bg-[#3e2723] rounded-full flex items-center justify-center transition-colors duration-200 z-10"
        >
          <X className="w-5 h-5 text-[#efebe9]" />
        </button>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4 floating-heart">
              {letter.emoji}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold ceursive text-[#4e342e] mb-4">
              {letter.title}
            </h2>
            <div className="w-24 h-1 bg-[#4e342e] mx-auto rounded-full"></div>
          </div>

          <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-gradient-to-br from-[#efebe9] to-[#d7ccc8] rounded-2xl p-6 md:p-8 border-3 border-[#4e342e]">
              <p className="text-[#4e342e] text-base md:text-lg leading-relaxed font-bold">
                {letter.content}
              </p>

              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 text-[#4e342e]">
                  <Heart className="w-5 h-5" fill="currentColor" />
                  <span className="text-sm cursive font-bold">With all my love</span>
                  <Heart className="w-5 h-5" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleClose}
              className="glow-button px-8 py-3 rounded-full text-[#efebe9] font-bold hover:scale-105 transform transition-all duration-300"
            >
              Keep this love close 💗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;
