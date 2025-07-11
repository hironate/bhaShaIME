import { BhaSha } from '../src';

describe('Pre-populated Examples', () => {
  let bhaSha: BhaSha;

  beforeEach(() => {
    bhaSha = new BhaSha();
  });

  describe('Gujarati Examples', () => {
    beforeEach(() => {
      bhaSha.setLanguage('gujarati');
    });

    test('should transliterate Gujarati example text correctly', () => {
      const input = `gujaraat bhaaratno pashchim bhaage aavel ek samruddh raajy che, jene teni vaividhyasbhar sanskruti, aitihaasik vaaraso ane audyogik vikaas maate olakhvaama aave che. amdaavaad, vadoDaraa, surat ane raajkot jevaa mahaanagaro ahiyaanaa mukhya shehro che.

gujaraat mahaatmaa gaaNDhijino janmasthal che ane saabarmati aashram, kachchhno raN, ane gir naeshanal paark jevi anokhi jagyo dharaave che. ahi lok vivdh tehevaaro – utsavo je ne navraatri, uttaraayaN ane divaali utsaahthi ujave che.

ahiyaani bhaashaa gujaraati che ane lok mehmananavaaji maate jaaniyaa che. dariyaai khaDo, aitihaasik killao, heritej saito ane lajjatdaar bhojan, gujaraatne mulaakat maate anokhu sthal banave che.`;

      const expected = `ગુજરાત ભારત્નો પશ્ચિમ ભાગે આવેલ એક સમ્રુદ્ધ રાજ્ય ચે, જેને તેનિ વૈવિધ્યસ્ભર સંસ્ક્રુતિ, ઐતિહાસિક વારસો અને ઔદ્યોગિક વિકાસ માતે ઓલખ્વામ આવે ચે. અમ્દાવાદ, વદોડરા, સુરત અને રાજ્કોત જેવા મહાનગરો અહિયાના મુખ્ય શેહ્રો ચે.

ગુજરાત મહાત્મા ગાણ્ઢિજિનો જન્મસ્થલ ચે અને સાબર્મતિ આશ્રમ, કચ્છ્નો રણ, અને ગિર નeશનલ પાર્ક જેવિ અનોખિ જગ્યો ધરાવે ચે. અહિ લોક વિવ્ધ તેહેવારો – ઉત્સવો જે ને નવ્રાત્રિ, ઉત્તરાયણ અને દિવાલિ ઉત્સાહ્થિ ઉજવે ચે.

અહિયાનિ ભાશા ગુજરાતિ ચે અને લોક મેહ્મનનવાજિ માતે જાનિયા ચે. દરિયાઇ ખડો, ઐતિહાસિક કિલ્લઓ, હેરિતેજ સૈતો અને લજ્જત્દાર ભોજન, ગુજરાત્ને મુલાકત માતે અનોખુ સ્થલ બનવે ચે.`;

      expect(bhaSha.transliterateText(input)).toBe(expected);
    });

    test('should handle individual Gujarati words correctly', () => {
      const testCases = [
        { input: 'gujaraat', expected: 'ગુજરાત' },
        { input: 'bhaaratno', expected: 'ભારત્નો' },
        { input: 'pashchim', expected: 'પશ્ચિમ' },
        { input: 'bhaage', expected: 'ભાગે' },
        { input: 'aavel', expected: 'આવેલ' },
        { input: 'samruddh', expected: 'સમ્રુદ્ધ' },
        { input: 'raajy', expected: 'રાજ્ય' },
        { input: 'vaividhyasbhar', expected: 'વૈવિધ્યસ્ભર' },
        { input: 'sanskruti', expected: 'સંસ્ક્રુતિ' },
        { input: 'aitihaasik', expected: 'ઐતિહાસિક' },
        { input: 'vaaraso', expected: 'વારસો' },
        { input: 'audyogik', expected: 'ઔદ્યોગિક' },
        { input: 'vikaas', expected: 'વિકાસ' },
        { input: 'olakhvaama', expected: 'ઓલખ્વામ' },
        { input: 'amdaavaad', expected: 'અમ્દાવાદ' },
        { input: 'vadoDaraa', expected: 'વદોડરા' },
        { input: 'surat', expected: 'સુરત' },
        { input: 'raajkot', expected: 'રાજ્કોત' },
        { input: 'mahaanagaro', expected: 'મહાનગરો' },
        { input: 'ahiyaanaa', expected: 'અહિયાના' },
        { input: 'mukhya', expected: 'મુખ્ય' },
        { input: 'shehro', expected: 'શેહ્રો' },
        { input: 'mahaatmaa', expected: 'મહાત્મા' },
        { input: 'gaaNDhijino', expected: 'ગાણ્ઢિજિનો' },
        { input: 'janmasthal', expected: 'જન્મસ્થલ' },
        { input: 'saabarmati', expected: 'સાબર્મતિ' },
        { input: 'aashram', expected: 'આશ્રમ' },
        { input: 'kachchhno', expected: 'કચ્છ્નો' },
        { input: 'raN', expected: 'રણ' },
        { input: 'gir', expected: 'ગિર' },
        { input: 'naeshanal', expected: 'નeશનલ' },
        { input: 'paark', expected: 'પાર્ક' },
        { input: 'anokhi', expected: 'અનોખિ' },
        { input: 'jagyo', expected: 'જગ્યો' },
        { input: 'dharaave', expected: 'ધરાવે' },
        { input: 'vivdh', expected: 'વિવ્ધ' },
        { input: 'tehevaaro', expected: 'તેહેવારો' },
        { input: 'utsavo', expected: 'ઉત્સવો' },
        { input: 'navraatri', expected: 'નવ્રાત્રિ' },
        { input: 'uttaraayaN', expected: 'ઉત્તરાયણ' },
        { input: 'divaali', expected: 'દિવાલિ' },
        { input: 'utsaahthi', expected: 'ઉત્સાહ્થિ' },
        { input: 'ujave', expected: 'ઉજવે' },
        { input: 'ahiyaani', expected: 'અહિયાનિ' },
        { input: 'bhaashaa', expected: 'ભાશા' },
        { input: 'gujaraati', expected: 'ગુજરાતિ' },
        { input: 'mehmananavaaji', expected: 'મેહ્મનનવાજિ' },
        { input: 'jaaniyaa', expected: 'જાનિયા' },
        { input: 'dariyaai', expected: 'દરિયાઇ' },
        { input: 'khaDo', expected: 'ખડો' },
        { input: 'killao', expected: 'કિલ્લઓ' },
        { input: 'heritej', expected: 'હેરિતેજ' },
        { input: 'saito', expected: 'સૈતો' },
        { input: 'lajjatdaar', expected: 'લજ્જત્દાર' },
        { input: 'bhojan', expected: 'ભોજન' },
        { input: 'mulaakat', expected: 'મુલાકત' },
        { input: 'anokhu', expected: 'અનોખુ' },
        { input: 'sthal', expected: 'સ્થલ' },
        { input: 'banave', expected: 'બનવે' },
      ];

      testCases.forEach(({ input, expected }) => {
        expect(bhaSha.transliterateText(input)).toBe(expected);
      });
    });
  });

  describe('Hindi Examples', () => {
    beforeEach(() => {
      bhaSha.setLanguage('hindi');
    });

    test('should transliterate Hindi example text correctly', () => {
      const input = `bhaarat vishv ka ek praacheen, aitihaasik aur saanskrutik drishti se samruddh desh hai. ise "bhaarat", "hindustaan" aur "india" naamo se jaana jaata hai. yah eshiyaa mahaadviip mein sthit hai aur jansankhyaa ke hisaab se duniyaa ka sabse badaa loktaantrik desh hai.

bhaarat ko uski vividhtaa ke liye jaana jaata hai — yahaan anek bhaashaae, dharm, jaatiyaan aur saanskrutiyaan ek saath rahti hain. uttar mein himaalay se lekar dakshin mein kanyaakumaari tak, bhaarat praakrutik saundary, aitihaasik dharoharo aur dhaarmik sthlo se bharpoor hai.

yah mahaatmaa gaaNDhi, swaami vivekaanand, dr. a.p.j. abdul kalaam jaise mahaan vyaktitvo ki bhoomi hai. yahaan ke pramukh tyohaaro mein divaali, holi, eed, kristmas, aur baisaakhi shaamil hain, jo iski saanskrutik samruddhi ko darshate hain.

bhaarat ki raajdhani nai dilli hai, aur any pramukh shehro mein mumbai, bengaluru, chennai, kolkata aur haidaraabaad shaamil hain. bhaartiya sanvidhaan vishv ke sabse bade sanvidhaano mein se ek hai, aur yahaan ka loktaantr duniyaa bhar mein misaal maana jaata hai.`;

      const expected = `भारत विश्व क एक प्राचीन, ऐतिहासिक और सांस्क्रुतिक द्रिश्ति से सम्रुद्ध देश है. इसे "भारत", "हिंदुस्तान" और "iंदिa" नामो से जान जात है. यह एशिया महाद्विiप मेiन स्थित है और जंसंख्या के हिसाब से दुनिया क सब्से बदा लोक्तांत्रिक देश है.

भारत को उस्कि विविध्ता के लिये जान जात है — यहान अनेक भाशाए, धर्म, जातियान और सांस्क्रुतियान एक साथ रह्ति हैं। उत्तर मेiन हिमालय से लेकर दक्शिन मेiन कन्याकुमारि तक, भारत प्राक्रुतिक सौंदर्य, ऐतिहासिक धरोहरो और धार्मिक स्थ्लो से भर्पूर है.

यह महात्मा गाण्ढि, स्वामि विवेकानंद, द्र. अ.प.ज. अब्दुल कलाम जैसे महान व्यक्तित्वो कि भूमि है. यहान के प्रमुख त्योहारो मेiन दिवालि, होलि, ईद, क्रिस्त्मस, और बैसाखि शामिल हैं, जो इस्कि सांस्क्रुतिक सम्रुद्धि को दर्शते हैं।

भारत कि राज्धनि नै दिल्लि है, और अन्य प्रमुख शेह्रो मेiन मुंबै, बेंगलुरु, चेन्नै, कोल्कत और हैदराबाद शामिल हैं। भार्तिय सन्विधान विश्व के सब्से बदे सन्विधानो मेiन से एक है, और यहान क लोक्तांत्र दुनिया भर मेiन मिसाल मान जात है.`;

      expect(bhaSha.transliterateText(input)).toBe(expected);
    });

    test('should handle individual Hindi words correctly', () => {
      const testCases = [
        { input: 'bhaarat', expected: 'भारत' },
        { input: 'vishv', expected: 'विश्व' },
        { input: 'praacheen', expected: 'प्राचीन' },
        { input: 'aitihaasik', expected: 'ऐतिहासिक' },
        { input: 'saanskrutik', expected: 'सांस्क्रुतिक' },
        { input: 'drishti', expected: 'द्रिश्ति' },
        { input: 'samruddh', expected: 'सम्रुद्ध' },
        { input: 'desh', expected: 'देश' },
        { input: 'hindustaan', expected: 'हिंदुस्तान' },
        { input: 'india', expected: 'इंदिअ' },
        { input: 'naamo', expected: 'नामो' },
        { input: 'jaana', expected: 'जान' },
        { input: 'jaata', expected: 'जात' },
        { input: 'eshiyaa', expected: 'एशिया' },
        { input: 'mahaadviip', expected: 'महाद्विiप' },
        { input: 'sthit', expected: 'स्थित' },
        { input: 'jansankhyaa', expected: 'जंसंख्या' },
        { input: 'hisaab', expected: 'हिसाब' },
        { input: 'duniyaa', expected: 'दुनिया' },
        { input: 'loktaantrik', expected: 'लोक्तांत्रिक' },
        { input: 'vividhtaa', expected: 'विविध्ता' },
        { input: 'yahaan', expected: 'यहान' },
        { input: 'anek', expected: 'अनेक' },
        { input: 'bhaashaae', expected: 'भाशाए' },
        { input: 'dharm', expected: 'धर्म' },
        { input: 'jaatiyaan', expected: 'जातियान' },
        { input: 'saanskrutiyaan', expected: 'सांस्क्रुतियान' },
        { input: 'rahti', expected: 'रह्ति' },
        { input: 'hain', expected: 'हैं' },
        { input: 'uttar', expected: 'उत्तर' },
        { input: 'himaalay', expected: 'हिमालय' },
        { input: 'dakshin', expected: 'दक्शिन' },
        { input: 'kanyaakumaari', expected: 'कन्याकुमारि' },
        { input: 'praakrutik', expected: 'प्राक्रुतिक' },
        { input: 'saundary', expected: 'सौंदर्य' },
        { input: 'dharoharo', expected: 'धरोहरो' },
        { input: 'dhaarmik', expected: 'धार्मिक' },
        { input: 'sthlo', expected: 'स्थ्लो' },
        { input: 'bharpoor', expected: 'भर्पूर' },
        { input: 'mahaatmaa', expected: 'महात्मा' },
        { input: 'gaaNDhi', expected: 'गाण्ढि' },
        { input: 'swaami', expected: 'स्वामि' },
        { input: 'vivekaanand', expected: 'विवेकानंद' },
        { input: 'mahaan', expected: 'महान' },
        { input: 'vyaktitvo', expected: 'व्यक्तित्वो' },
        { input: 'bhoomi', expected: 'भूमि' },
        { input: 'pramukh', expected: 'प्रमुख' },
        { input: 'tyohaaro', expected: 'त्योहारो' },
        { input: 'divaali', expected: 'दिवालि' },
        { input: 'holi', expected: 'होलि' },
        { input: 'eed', expected: 'ईद' },
        { input: 'kristmas', expected: 'क्रिस्त्मस' },
        { input: 'baisaakhi', expected: 'बैसाखि' },
        { input: 'shaamil', expected: 'शामिल' },
        { input: 'saanskrutik', expected: 'सांस्क्रुतिक' },
        { input: 'samruddhi', expected: 'सम्रुद्धि' },
        { input: 'darshate', expected: 'दर्शते' },
        { input: 'raajdhani', expected: 'राज्धनि' },
        { input: 'nai', expected: 'नै' },
        { input: 'dilli', expected: 'दिल्लि' },
        { input: 'any', expected: 'अन्य' },
        { input: 'shehro', expected: 'शेह्रो' },
        { input: 'mumbai', expected: 'मुंबै' },
        { input: 'bengaluru', expected: 'बेंगलुरु' },
        { input: 'chennai', expected: 'चेन्नै' },
        { input: 'kolkata', expected: 'कोल्कत' },
        { input: 'haidaraabaad', expected: 'हैदराबाद' },
        { input: 'bhaartiya', expected: 'भार्तिय' },
        { input: 'sanvidhaan', expected: 'सन्विधान' },
        { input: 'sanvidhaano', expected: 'सन्विधानो' },
        { input: 'loktaantr', expected: 'लोक्तांत्र' },
        { input: 'misaal', expected: 'मिसाल' },
        { input: 'maana', expected: 'मान' },
      ];

      testCases.forEach(({ input, expected }) => {
        expect(bhaSha.transliterateText(input)).toBe(expected);
      });
    });
  });
});
