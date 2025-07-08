import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Heart,
  Moon,
  Bug as Hug,
  Frown,
  Map as Mad,
} from "lucide-react";
import LetterModal from "./LetterModal";

interface LettersPageProps {
  onNavigateToHome: () => void;
}

const letters = [
  {
    id: 1,
    title: "You need to know how deeply you are loved🤎",
    emoji: "🖤",
    icon: Frown,
    content:
      `All i want is to let you know that i love you so much 🫶 People say in next life... But they don't even manage to hold on and make through in this life. So all i know is... If not in this... There will never be another. 🔪🫀 I promise you to be with you in this life alteast.  I don't know about the next one...  Thats why i try to express it in every possible way Through letters, through this even through my silence  I'm writing all this if someday I'm not around you still have this....Something that remains with you forever even when I'm no more🌹🤝 I hope this feels like comfort and tight hugs🫂💋 The kind of love and hugs with me saying... "Acha suno na"Before i sleep😭where i stubbornly make you listen so that i just can get your Your take care 🥹 Your thank you 🤌 Your i know And your sleepy voice from which i might never get over 🫠 So promise me you'll open these when you need them the most 🎀 That's when you'll find me in some way, always with you. 🪄 `
  },
  {
    id: 2,
    title: "Open when you think you need no one.",
    emoji: "🩷",
    icon: Heart,
    content:
      "I know you don't need anyone you are good at on your own but sometimes the strongest person has no one to trust. I can be the one whom you can trust. I promise I'll never break your trust.✅ When you think you need no one... *I'll still be there....without asking, without any questions, No demands...  quietly loving my YOU more day by day. Just me waiting...to listen* I'm just a text awayy",
  },
  {
    id: 3,
    title: "Open when you want to feel peace",
    emoji: "😤",
    icon: Mad,
    content:
      "You shouldn't be here i guess.But still if you are so lemme make you remember something again.... Talking to me brings you peace right? So my cutiee just call me now... Yes just now. 🫶At this time you don't even have to say a thing just silence.....Let me be the one with who you really want to feel peace. I'll help you gather all the broken pieces one by one to create peace.",
  },
  {
    id: 4,
    title: "Open when you say I'm fine but you are not",
    emoji: "💌",
    icon: Moon,
    content:
      "I know you'll never say it... You never so.. And that's  YOU. 🫵But remember I'm always there.🤌 If you want to share I'll always listen.. And ik you'll do it in a way jisse mujhe pta bhi na chle kbhi😂 vo to ese bhi nahi chlta h😭 So anytime ❤‍� ",
  },
  {
    id: 5,
    title: "Open when you need a little sunshine",
    emoji: "😟",
    icon: Frown,
    content:
      "Ohh so the sun itself needs some sunshine. Dont worry I'm all yours. 🤝✨Take all of it. No hesitation, no questions ❤ I'll lighten your life more. Full of brightness, colors and life🤎YOU might be my sun ☀ But let me shine for you",
  },
  {
    id: 6,
    title: "Open when silence feels too loud.",
    emoji: "🫂",
    icon: Hug,
    content:
      "I'm there to listen to you without judging you. In fact meri to raat apki avaaz se hoti h❤‍🩹. You brought life into my life Yes life= YOU🥹If you feel that i can be the one whom you can share your things with please do it🫡 don't keep things within",
  },
  {
    id:7,
    title: "Open when you miss me but won't say it",
    emoji: "🫶",
    icon: Hug,
    content:
      "Waaow! Dont think you'll open this one. But here you are Idk what to write here but all i know is  Ap usi ko miss krte ho jisko ap bhool jate ho. Right? 🥳 But it's okay😘 if you're missing me... Just imagine how much i must be missing you",
  },
  {
    id: 8,
    title: "When you  hate rain like you never did before",
    emoji: "🥹",
    icon: Hug,
    content:
      "Waow now I'll tell you why i like rain (sometimes) 🌧 Jb barish hoti h esa lgta h sbka dukh drd release hogya h. Jo itne dino se andr rakha tha sb bhr. ✨ And the best part...No one judges you.  I know it comes with chipchip... Geelapan.. And let it be, jb tk barish nahi hategi you have to carry all of it. But After it stops... It comes with hope. A light, life and acceptance You change your clothes and you'll never be able to remember what exactly happened  It's not about fixing but letting out things. ❤️‍🩹 Apka nahi pta but m barish ko us nazariye se dekhti hu Its okay if you still hate it😂 Arushi also hate jb excess me ho",
  },
  {
    id: 9,
    title: "When you feel tired of everything 🪄",
    emoji: "🥹",
    icon: Hug,
    content:
      "Ik your are working so hard and being hard on yourself too. But you cant ... You just can't . 💪When world feels heavy, lean on me... I'll be your peace.💞You are doing all the things on your own let me do some with my YOU😘 Let me just sit by your side and listen to you, let me the shoulder you want to lean on anytime, always",
  }
];

const LettersPage: React.FC<LettersPageProps> = ({ onNavigateToHome }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<
    (typeof letters)[0] | null
  >(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen py-8 px-4 relative">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onNavigateToHome}
          className="mb-8 flex items-center gap-2 text-white hover:text-gray-700 transition-colors duration-200 font-bold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold">Back to Home</span>
        </button>

        <div className={`text-center mb-12 ${isLoaded ? "fade-in" : ""}`}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold  text-white mb-4">
            Choose the letter your heart needs today...
          </h1>
          <div className="w-32 h-1 bg-black mx-auto rounded-full"></div>
        </div>

        {/* Letters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {letters.map((letter, index) => {
            const IconComponent = letter.icon;
            return (
              <div
                key={letter.id}
                className={`envelope-card rounded-3xl h-64 ${
                  isLoaded ? "slide-up" : ""
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                onClick={() => setSelectedLetter(letter)}
              >
                {/* Text on envelope flap */}
                <div className="envelope-flap-text mt-16 text-black text-xl z-10">
                  {letter.title}
                </div>

                <div className="envelope-content text-center">
                  {/* <div className="text-4xl mb-3 floating-heart">
                    {letter.emoji}
                  </div> */}
                  {/* <div className="flex justify-center mb-2">
                    <IconComponent className="w-6 h-6 text-black" />
                  </div> */}
                  {/* <h3 className="text-sm md:text-base font-bold text-black cursive leading-tight">
                    {letter.title}
                  </h3> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedLetter && (
        <LetterModal
          letter={selectedLetter}
          onClose={() => setSelectedLetter(null)}
        />
      )}
    </div>
  );
};

export default LettersPage;
