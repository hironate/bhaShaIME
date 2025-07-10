import React, { useState } from 'react';
import { BhaSha, SupportedLanguage } from '@bhashaime/core';

const bhaSha = new BhaSha();

// Pre-populated examples
const examples = {
  gujarati: {
    title: 'Gujarati Examples',
    text: `ગુજરાત ભારતનો પશ્ચિમ ભાગે આવેલ એક સમૃદ્ધ રાજ્ય છે, જેને તેની વૈવિધ્યસભર સંસ્કૃતિ, ઐતિહાસિક વારસો અને ઔદ્યોગિક વિકાસ માટે ઓળખવામાં આવે છે. અમદાવાદ, વડોદરા, સુરત અને રાજકોટ જેવા મહાનગરો અહિયાંના મુખ્ય શહેરો છે.

ગુજરાત મહાત્મા ગાંધીજીનો જન્મસ્થળ છે અને સાબરમતી આશ્રમ, કચ્છનો રણ, અને ગિર નેશનલ પાર્ક જેવી અનોખી જગ્યો ધરાવે છે. અહીં લોકો વિવિધ તહેવારો – ઉત્સવો જેમ કે નવરાત્રિ, ઉત્તરાયણ અને દિવાળી ઉત્સાહથી ઉજવે છે.

અહિયાંની ભાષા ગુજરાતી છે અને લોકો મહેમાનનવાજી માટે જાણીતાં છે. દરિયાઈ ખાડા, ઐતિહાસિક કિલ્લાઓ, હેરિટેજ સાઇટ્સ અને લજ્જતદાર ભોજન, ગુજરાતને મુલાકાત માટે અનોખું સ્થળ બનાવે છે.`,
    transliterated: `gujaraat bhaaratno pashchim bhaage aavel ek samruddh raajy che, jene teni vaividhyasbhar sanskruti, aitihaasik vaaraso ane audyogik vikaas maate olakhvaama aave che. amdaavaad, vadoDaraa, surat ane raajkot jevaa mahaanagaro ahiyaanaa mukhya shehro che.

gujaraat mahaatmaa gaaNDhijino janmasthal che ane saabarmati aashram, kachchhno raN, ane gir naeshanal paark jevi anokhi jagyo dharaave che. ahi lok vivdh tehevaaro – utsavo je ne navraatri, uttaraayaN ane divaali utsaahthi ujave che.

ahiyaani bhaashaa gujaraati che ane lok mehmananavaaji maate jaaniyaa che. dariyaai khaDo, aitihaasik killao, heritej saito ane lajjatdaar bhojan, gujaraatne mulaakat maate anokhu sthal banave che.`,
  },
  hindi: {
    title: 'Hindi Examples',
    text: `भारत विश्व का एक प्राचीन, ऐतिहासिक और सांस्कृतिक दृष्टि से समृद्ध देश है। इसे "भारत", "हिंदुस्तान" और "इंडिया" नामों से जाना जाता है। यह एशिया महाद्वीप में स्थित है और जनसंख्या के हिसाब से दुनिया का सबसे बड़ा लोकतांत्रिक देश है।

भारत को उसकी विविधता के लिए जाना जाता है — यहाँ अनेक भाषाएँ, धर्म, जातियाँ और संस्कृतियाँ एक साथ रहती हैं। उत्तर में हिमालय से लेकर दक्षिण में कन्याकुमारी तक, भारत प्राकृतिक सौंदर्य, ऐतिहासिक धरोहरों और धार्मिक स्थलों से भरपूर है।

यह महात्मा गांधी, स्वामी विवेकानंद, डॉ. ए.पी.जे. अब्दुल कलाम जैसे महान व्यक्तित्वों की भूमि है। यहाँ के प्रमुख त्योहारों में दिवाली, होली, ईद, क्रिसमस, और बैसाखी शामिल हैं, जो इसकी सांस्कृतिक समृद्धि को दर्शाते हैं।

भारत की राजधानी नई दिल्ली है, और अन्य प्रमुख शहरों में मुंबई, बेंगलुरु, चेन्नई, कोलकाता और हैदराबाद शामिल हैं। भारतीय संविधान विश्व के सबसे बड़े संविधानों में से एक है, और यहाँ का लोकतंत्र दुनिया भर में मिसाल माना जाता है।`,
    transliterated: `bhaarat vishv ka ek praacheen, aitihaasik aur saanskrutik drishti se samruddh desh hai. ise "bhaarat", "hindustaan" aur "india" naamo se jaana jaata hai. yah eshiyaa mahaadviip mein sthit hai aur jansankhyaa ke hisaab se duniyaa ka sabse badaa loktaantrik desh hai.

bhaarat ko uski vividhtaa ke liye jaana jaata hai — yahaan anek bhaashaae, dharm, jaatiyaan aur saanskrutiyaan ek saath rahti hain. uttar mein himaalay se lekar dakshin mein kanyaakumaari tak, bhaarat praakrutik saundary, aitihaasik dharoharo aur dhaarmik sthlo se bharpoor hai.

yah mahaatmaa gaaNDhi, swaami vivekaanand, dr. a.p.j. abdul kalaam jaise mahaan vyaktitvo ki bhoomi hai. yahaan ke pramukh tyohaaro mein divaali, holi, eed, kristmas, aur baisaakhi shaamil hain, jo iski saanskrutik samruddhi ko darshate hain.

bhaarat ki raajdhani nai dilli hai, aur any pramukh shehro mein mumbai, bengaluru, chennai, kolkata aur haidaraabaad shaamil hain. bhaartiya sanvidhaan vishv ke sabse bade sanvidhaano mein se ek hai, aur yahaan ka loktaantr duniyaa bhar mein misaal maana jaata hai.`,
  },
};

function App() {
  const [selectedLanguage, setSelectedLanguage] =
    useState<SupportedLanguage>('gujarati');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedExample, setSelectedExample] = useState<'gujarati' | 'hindi'>(
    'gujarati',
  );

  const handleLanguageChange = (language: SupportedLanguage) => {
    setSelectedLanguage(language);
    bhaSha.setLanguage(language);
    setInputText('');
    setOutputText('');
  };

  const handleInputChange = (text: string) => {
    setInputText(text);
    const transliterated = bhaSha.transliterateText(text);
    setOutputText(transliterated);
  };

  const loadExample = (example: 'gujarati' | 'hindi') => {
    setSelectedExample(example);
    setInputText(examples[example].transliterated);
    setOutputText(examples[example].text);
  };

  const clearText = () => {
    setInputText('');
    setOutputText('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            BhaSha IME Playground
          </h1>
          <p className="text-lg text-gray-600 text-center mt-2">
            Interactive transliteration playground for Indian languages
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Select Language
          </h2>
          <div className="flex gap-4">
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedLanguage === 'gujarati'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleLanguageChange('gujarati')}
            >
              <span className="font-gujarati text-lg">ગુજરાતી</span> (Gujarati)
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedLanguage === 'hindi'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleLanguageChange('hindi')}
            >
              <span className="font-hindi text-lg">हिंदी</span> (Hindi)
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Pre-populated Examples
          </h2>
          <div className="flex gap-4 flex-wrap">
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedExample === 'gujarati'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => loadExample('gujarati')}
            >
              Load Gujarati Example
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedExample === 'hindi'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => loadExample('hindi')}
            >
              Load Hindi Example
            </button>
            <button
              onClick={clearText}
              className="px-4 py-2 rounded-lg font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
            >
              Clear Text
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Input (Roman Script)
            </h3>
            <textarea
              value={inputText}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Type in Roman script to see transliteration..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Output ({selectedLanguage === 'gujarati' ? 'ગુજરાતી' : 'हिंदी'})
            </h3>
            <div
              className={`w-full h-64 p-4 border border-gray-300 rounded-lg overflow-y-auto ${
                selectedLanguage === 'gujarati' ? 'font-gujarati' : 'font-hindi'
              } text-lg leading-relaxed bg-gray-50`}
            >
              {outputText || 'Transliterated text will appear here...'}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            How to Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                Basic Usage
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Type in Roman script using standard transliteration rules
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  See real-time transliteration as you type
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Switch between Gujarati and Hindi languages
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Load pre-populated examples to see the system in action
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                Common Patterns
              </h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <strong>Vowels:</strong> a, aa, i, ee, u, oo, e, o, ai, au
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <strong>Consonants:</strong> k, kh, g, gh, ch, j, t, th, d,
                  dh, p, ph, b, bh, m, y, r, l, v, s, sh, h
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <strong>Special:</strong> Use - for halant (્), M for anusvara
                  (ં), H for visarga (ः)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <strong>Numbers:</strong> 0-9 will be converted to native
                  numerals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
