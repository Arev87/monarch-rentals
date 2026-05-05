import fs from 'fs';
const content = fs.readFileSync('d:/react_learn/my-react-app/src/assets/css/main.css', 'utf8');
const lines = content.split('\n');
let balance = 0;
let stack = [];
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
        if (line[j] === '{') {
            balance++;
            stack.push(i + 1);
        } else if (line[j] === '}') {
            balance--;
            stack.pop();
            if (balance < 0) {
                console.log(`Extra closing brace at line ${i + 1}`);
                balance = 0;
            }
        }
    }
}
if (balance > 0) {
    console.log(`Unclosed braces starting at lines: ${stack.join(', ')}`);
} else {
    console.log('Braces are balanced');
}
