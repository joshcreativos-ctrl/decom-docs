const fs = require('fs');
const path = require('path');
const slides = [
  '1-1-jerarquia', '1-2-contraste', '1-3-tipografia', '1-4-espacio', '1-5-color',
  '2-1-pinterest', '2-2-triada', '2-3-mood',
  '3-1-junior', '3-2-referente', '3-3-iteracion',
  '4-1-pinterest', '4-2-importar', '4-3-prompt', '4-4-verificacion', '4-5-iteracion'
];
const dir = path.join(__dirname, 'public', 'images', 'slides');
fs.mkdirSync(dir, { recursive: true });

slides.forEach(name => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><rect width="800" height="450" fill="#0A0A0A"/><text x="400" y="225" font-family="sans-serif" font-size="24" fill="#FAFAFA" text-anchor="middle" dominant-baseline="middle">Placeholder: ${name}</text></svg>`;
  // By writing SVG content to a .jpg file, most modern Next.js/browsers will sniff the mime type and render the SVG, 
  // but just to be safe with image viewers, let's keep them as .jpg with SVG content as instructed by the user,
  // since the user will replace them with actual .jpg later.
  fs.writeFileSync(path.join(dir, name + '.jpg'), svg);
});

fs.writeFileSync(path.join(__dirname, 'public', 'images', 'og-image.jpg'), `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#FF5C00"/><text x="600" y="315" font-family="sans-serif" font-size="48" fill="#FAFAFA" text-anchor="middle" dominant-baseline="middle">OG Image</text></svg>`);
fs.writeFileSync(path.join(__dirname, 'public', 'images', 'logo.svg'), `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="50"><rect width="200" height="50" fill="transparent"/><text x="100" y="25" font-family="serif" font-size="24" fill="#FF5C00" text-anchor="middle" dominant-baseline="middle">DECOM</text></svg>`);
