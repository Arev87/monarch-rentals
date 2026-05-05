import fs from 'fs';
const content = fs.readFileSync('d:/react_learn/my-react-app/src/assets/css/main.css', 'utf8');
const openBraces = (content.match(/{/g) || []).length;
const closeBraces = (content.match(/}/g) || []).length;
console.log(`Open: ${openBraces}, Close: ${closeBraces}`);
