import fs from 'fs';
const content = fs.readFileSync('d:/react_learn/my-react-app/src/assets/css/main.css', 'utf8');
let balance = 0;
let lastOpenLine = 0;
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
        if (line[j] === '{') {
            balance++;
            lastOpenLine = i + 1;
        } else if (line[j] === '}') {
            balance--;
        }
    }
}
console.log(`Balance: ${balance}, Last Open Line: ${lastOpenLine}`);
