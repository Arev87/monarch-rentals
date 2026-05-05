import fs from 'fs';

const filePath = 'd:/react_learn/my-react-app/src/assets/css/main.css';
let content = fs.readFileSync(filePath, 'utf8');

// Find the last valid closing brace before the corruption
// The corruption seems to start after the last correctly formatted CSS block.
// I'll look for the end of the media query at line 2584 (which I saw in view_file)
const lines = content.split('\n');
// I'll keep the first 2584 lines
const cleanLines = lines.slice(0, 2584);

const newStyles = `
/* Radix Accordion Animation */
.AccordionContent {
    overflow: hidden;
}

.AccordionContent[data-state='open'] {
    animation: slideDown 300ms ease-out;
}

.AccordionContent[data-state='closed'] {
    animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
    from {
        height: 0;
    }
    to {
        height: var(--radix-accordion-content-height);
    }
}

@keyframes slideUp {
    from {
        height: var(--radix-accordion-content-height);
    }
    to {
        height: 0;
    }
}

/* Radix Tooltip Styles */
.TooltipContent {
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 15px;
    line-height: 1;
    color: #fff;
    background-color: #000;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    user-select: none;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    z-index: 1000;
}

.TooltipContent[data-state='delayed-open'][data-side='top'] {
    animation-name: slideDownAndFade;
}
.TooltipContent[data-state='delayed-open'][data-side='right'] {
    animation-name: slideLeftAndFade;
}
.TooltipContent[data-state='delayed-open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
}
.TooltipContent[data-state='delayed-open'][data-side='left'] {
    animation-name: slideRightAndFade;
}

.TooltipArrow {
    fill: #000;
}

@keyframes slideUpAndFade {
    from {
        opacity: 0;
        transform: translateY(2px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideRightAndFade {
    from {
        opacity: 0;
        transform: translateX(-2px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideDownAndFade {
    from {
        opacity: 0;
        transform: translateY(-2px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideLeftAndFade {
    from {
        opacity: 0;
        transform: translateX(2px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
`;

fs.writeFileSync(filePath, cleanLines.join('\n') + newStyles, 'utf8');
console.log('File fixed successfully');
