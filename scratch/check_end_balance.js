import fs from 'fs';
const content = fs.readFileSync('d:/react_learn/my-react-app/src/assets/css/main.css', 'utf8');
const lines = content.split('\n');
let balance = 0;
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const open = (line.match(/{/g) || []).length;
    const close = (line.match(/}/g) || []).length;
    balance += open;
    balance -= close;
    if (balance !== 0 && i > 2500) {
        console.log(`Line ${i + 1}: Balance ${balance}`);
    }
}
console.log(`Final Balance: ${balance}`);
