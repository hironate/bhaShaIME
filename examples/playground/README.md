# BhaSha IME Playground

An interactive playground for testing and demonstrating the BhaSha IME transliteration engine for Indian languages.

## Features

- **Real-time Transliteration**: Type in Roman script and see instant transliteration
- **Multiple Languages**: Support for Gujarati and Hindi
- **Pre-populated Examples**: Load sample texts to see the system in action
- **Beautiful UI**: Modern interface built with Tailwind CSS
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the playground directory:

   ```bash
   cd examples/playground
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Basic Transliteration

1. Select your preferred language (Gujarati or Hindi)
2. Type in Roman script in the input textarea
3. See the transliterated text appear in real-time in the output area

### Pre-populated Examples

- Click "Load Gujarati Example" to see a sample text about Gujarat
- Click "Load Hindi Example" to see a sample text about India
- Use "Clear Text" to reset both input and output areas

### Common Transliteration Patterns

#### Vowels

- `a` → अ/અ
- `aa` or `A` → आ/આ
- `i` → इ/ઇ
- `ee` or `I` → ई/ઈ
- `u` → उ/ઉ
- `oo` or `U` → ऊ/ઊ
- `e` → ए/એ
- `o` → ओ/ઓ
- `ai` → ऐ/ઐ
- `au` or `ou` → औ/ઔ

#### Consonants

- `k` → क/ક
- `kh` → ख/ખ
- `g` → ग/ગ
- `gh` → घ/ઘ
- `ch` → च/ચ
- `j` → ज/જ
- `t` → त/ત
- `th` → थ/થ
- `d` → द/દ
- `dh` → ध/ધ
- `p` → प/પ
- `ph` → फ/ફ
- `b` → ब/બ
- `bh` → भ/ભ
- `m` → म/મ
- `y` → य/ય
- `r` → र/ર
- `l` → ल/લ
- `v` or `w` → व/વ
- `s` → स/સ
- `sh` → श/શ
- `h` → ह/હ

#### Special Characters

- `-` → halant (्/્) - removes inherent vowel
- `M` → anusvara (ं/ં) - nasal sound
- `H` → visarga (ः/ઃ) - aspirated sound
- Numbers `0-9` → native numerals (०-९/૦-૯)

## Examples

### Gujarati Example

**Input (Roman):**

```
gujaraat bhaaratno pashchim bhaage aavel ek samruddh raajy che
```

**Output (Gujarati):**

```
ગુજરાત ભારતનો પશ્ચિમ ભાગે આવેલ એક સમૃદ્ધ રાજ્ય છે
```

### Hindi Example

**Input (Roman):**

```
bhaarat vishv ka ek praacheen aitihaasik desh hai
```

**Output (Hindi):**

```
भारत विश्व का एक प्राचीन ऐतिहासिक देश है
```

## Technology Stack

- **React**: Frontend framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **BhaSha IME**: Core transliteration engine

## Development

### Project Structure

```
examples/playground/
├── public/
│   └── index.html
├── src/
│   ├── App.tsx          # Main application component
│   ├── index.tsx        # Application entry point
│   └── index.css        # Global styles with Tailwind
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the MIT License.
