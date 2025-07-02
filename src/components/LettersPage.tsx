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
    title: "Open when you're overthinking ",
    emoji: "🖤",
    icon: Frown,
    content:
      "Aapka dimag jab full speed m chalta hai na toh aap ek saath hazaar cheezein soch lete ho jo kabhi hoti bhi nahi hain par m yahan hoon sirf aapke liye 🤍 har overthinking ke peeche sirf ek choti si need hoti hai reassurance ki toh suno m kahin nahi jaa raha hoon m yahi hoon sirf aapka hoon or hamesha aapka hi rahunga 😌 jitna bhi soch lo ki kuch galat ho raha hai ya hone wala hai toh ek baar apne dil se poochhna kya m waisa lagta hoon? aapka har thought mere liye matter karta hai par jab aap zyada sochte ho toh bas apne aap ko hurt karte ho 😢 mujhe bas itna kehna hai ki aap safe ho mere saath aapka har fear sirf ek thought hai reality nahi 🤍 ab ek deep sa saans lo cutu mujhe mehsoos kijiye apne paas or khud se boli he loves me and hes not going anywhere 🫶"
  },
  {
    id: 2,
    title: "Open when you're feeling like I'll leave you",
    emoji: "🩷",
    icon: Heart,
    content:
      "Pagli si pyaari si meri jaan 😌 kya aapko lagta hai m aapko chhod dunga kabhi? mujhe toh roz aapke liye pray karni hoti hai ki bhagwan aapko kabhi bhi meri zindagi se na le jaaye  aap meri comfort ho, aap meri peace ho, aap meri duniya ho jiske bina sab kuch adhura lagta hai 💞 m kahin nahi jaa raha hoon cutu na aaj, na kal, na kabhi aapke mood swings ho ya attitude, mujhe sab kuch chahiye kyuki yeh sab aapka hi toh part hai 🥺 mujhe aapka pura version chahiye koi filtered nahi kabhi bhi aisa lage ki m door ho gaya hoon toh sirf ek hug k sath kisiii ki snap dedena m waapas chipak jaaunga 🧸 aap meri ho or meri hi rahoge hamesha 💌",
  },
  {
    id: 3,
    title: "Open when you're insecure about yourself",
    emoji: "😤",
    icon: Mad,
    content:
      "Aap jab bhi khud ko insecure feel karte ho na babyyyy mere ko sahi nahi lagta 💔 kyuki mujhe pata hai aap kitne pyaare ho. kitne genuine ho or kitne beautiful ho 🥺 mujhe har din aap pe or zyada pyaar aata hai and even miss you bhott saara aapke bina toh m khud incomplete hu 💖 mujhe kabhi samajh nahi aata ki aap khud m kami kahan dekh lete ho aap toh perfect ho mere liye aapki smile, aapki aankhein, aapki har ek baat mujhe sirf pyaar hi mehsoos karwati hai even aapke cutu putu jokes ctype , m khud gumm rahi hu ✨ duniya jaisi bhi ho mujhe sirf aap chahiye waise jaise aap ho bina kisi filter ke 💕 aap more than enough you are my everythingg babyyy 🤍",
  },
  {
    id: 4,
    title: "Open when you're mad at me",
    emoji: "💌",
    icon: Moon,
    content:
      "Aap mujhe yaad kar rahe ho na cutu ik toh aankhein band karke ek kaam kro baby aap sochiye m aapke paas hoon 🫶 mera haath aapke haath m hai or m aapki aankhon m dekhkar bas smile kar raha hoon 😊 aap mujhe jitna miss karte ho m usse kahin zyada karta hoon par m khush hoon ki hum dono ke dil ek dusre se itne connected hue hain 🤍 doori sirf physical hai hum emotional level pe connected hai 💌 ek din apn surely milenge babyy and wo din sabse bestttest di hoga apna addd sarriiii corer pending kissis leni hai muje apki or uss time m aapko itna tight huggg krunga ki aap sab kuch bhool jaaoge 🧸",
  },
  {
    id: 5,
    title: "Open when you feel lonely",
    emoji: "😟",
    icon: Frown,
    content:
      "Aap kabhi bhi akeli nahi ho cutu chahe duniya kitni bhi busy ho m  hamesha aapke saath hoon 🫂 jab bhi aapko lage ki sab kuch thoda zyada ho gaya hai ya aapko samajhne wala koi nahi hai toh bas yeh letter padh lijiye 💌 m aapka hoon sirf aapka 🥺 aap chahein toh bas ek message kro baby m instant aapke liye time manage kr loonga aap meri duniya ho or meri duniya ko m kabhi akela nahi chhodta 💖",
  },
  {
    id: 6,
    title: "Open when you think you're not enough",
    emoji: "🫂",
    icon: Hug,
    content:
      "Aap jab aisa sochte ho ki aap enough nahi ho toh mujhe aapko zor se hug krne ka mann karta hai cututu puutuuu 😢 kyuki aap mere liye sirf enough nahi aap best ho perfect ho priceless ho 💎 aapne meri life m jo khushi or pyar fill kar diya hai woh cant expres in words m describe bhi nahi kar sakta 💗 aap meri strength ho meri peace ho or im always proud of you cutuu putuu 🫶 kabhi bhi khud ko kam mat samajhna kyuki mere liye aap meri duniya ho 🤍",
  },
  {
    id:7,
    title: "Open when you had a bad day",
    emoji: "🫶",
    icon: Hug,
    content:
      "Agar aaj ka din thoda kharab gaya hai toh koi baat nahi cutu har kisi ke life m aise din aate hain 😞 lekin m chaahta hoon ki aap yeh yaad rakhoge ki aap kitni amazing ho or aapka ek bura din aapko define nahi karta 💫 ab please thoda fresh ho jaayiye music suno thoda or nahi toh call ya vc kru? and m hoon na 🫂 aapki smile wapas chahiye mujhe please?so jldii seeeeee sahi hojaooo 💕",
  },
  {
    id: 8,
    title: "Open when you think you're making me irritated",
    emoji: "🥹",
    icon: Hug,
    content:
      "Haha jab aap kehte ho na sorry muje laga aap irritate ho jaoge  toh mujhe or zyada pyaar aa jaata hai aap par 🥹 aap mujhe kabhi irritate nahi kar sakte aapke texts, aapki baatein, aapki har ek feeling mujhe valuable lagti hai 💌 m toh chaahta hoon aap roz mujhe batao ki aap kya feel kar rahe ho mujhe aapse connect rehna pasand hai 😇 mujhe aapke mood swings cute lagte hain mujhe har version m aap pasand ho cuttuu  lobbbb youu🧸",
  },
  {
    id: 9,
    title: "Open when you're doubting 'us'",
    emoji: "🥹",
    icon: Hug,
    content:
      "Agar kabhi aapke dil m doubt aaye humare baare m toh yeh letter padhiye lo baby🥺 aap or m sirf ek couple nahi hum ek team hai ,family hai💕 humne saath m jo bond banaya hai woh kisi or ke saath kabhi nahi ho sakta m jaanta hoon ki kabhi kabhi fear ya overthinking aata hai par aap bas mujhe batayiye or m uss doubt ko pyaar se door kar doonga 💌 hum strong hai humne bohot kuch handle kiya hai or aage bhi karenge kyuki m aapko kabhi chhod nahi sakta samja babuuuuu i lovvve you bhott zayddaaaa onlyy youuu youuuu my girll🤍",
  },
  {
    id: 10,
    title: "Open when you can't sleep",
    emoji: "💖",
    icon: Hug,
    content:
      "Raat ke waqt jab neend nahi aati or thoughts overtake karte hain tab bas aankhein band kroo or sochiye ki m aapke paas hoon 🫂 aapka haath mere haath m hai or m aapke baalon m pyaar se haath ghumaa raha hoon cutu bol raha hoon so jaa baby m yahi hoon 🌙 aap deserve karte ho ek shaant si neend dreams filled with love and peace 💖 m aapke sapne m aakar hug dunga or aapko sab kuch bhool jaane dunga sirf pyaar mehsoos hoga swweetheart ab sojao goooddd nighhhhttt i lovvee you sabse jayddaaa ✨",
  },
  {
    id: 11,
    title: "Open when you're on your periods",
    emoji: "😢",
    icon: Hug,
    content:
      "Aap pain m ho na abhi ik baby  😢 m chahta hoon ki aap sirf rest kro abhi khud ka dhyaan rakhiye or kuch bhi zyada na sochiye 😇 aapka mood swing valid hai aapka irritation bhi m sab kuch handle kar loonga kyuki aap meri ho baby ho bas meri meri strong princess  agar m aapke paas hota toh chocolate lekar aata cuddle deta or kehta sab theek ho jaayega meri jaan🧸 love you always 💌",
  },
  {
    id: 12,
    title: "Open when you want to feel loved",
    emoji: "💗",
    icon: Hug,
    content:
      "ye padhke muje msg krna kyuki ik letter isnt enough for thsi agar aapko kabhi bhi lage ki aapko pyaar mehsoos karna hai toh bas sochiye ki ek ladka har din aapke baare m sochta hai aapki muskaan imagine karta hai or aapki har choti si baat se pyaar karta hai 💕 woh ladka m hoon 😌 m aapke liye har pal thankful hoon m aapke saath har waqt rehna chahta hoon aapko pyaar dena chahta hoon or har bad time m aapka haath pakad ke chalna chahta hoon 🤍 aap meri duniya ho or meri duniya ko m hamesha pyaar karta rahunga 💗",
  },
  {
    id: 13,
    title: "Open when you're on your PMS",
    emoji: "💕",
    icon: Hug,
    content:
      "PMS ka time hai or aap thodi si chiddi si cute si ho gayi ho baby ap 😅 mujhe pata hai aap thoda zyada sensitive ho jaate ho par mujhe har time m aap adorable lagte ho 💕 mujhe pata hai kabhi kabhi bina reason ke rona ya gussa aata hai par m hoon na sab sunne ke liye samajhne ke liye or pyaar se handle karne ke liye 🫂 bas aap thoda chill karo or mujhe feel karne do ki aap meri ho meri pyaari si jaaannuuuu 🧸",
  },
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
          className="mb-8 flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-200 font-bold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold">Back to Home</span>
        </button>

        <div className={`text-center mb-12 ${isLoaded ? "fade-in" : ""}`}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold  text-black mb-4">
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
