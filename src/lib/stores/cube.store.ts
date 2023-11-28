import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';

export const rotation = writable(0);
export const isRotating = writable(false);
export const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
export const scale = writable(1);
export const positionY = tweened(2);
export const color = writable(colors[0]);

export function setScale(delta: number, maxScale = 3) {
    scale.update(s => (s < maxScale ? s + delta : -s));
}

export function setColor(currentColor: string) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    if (currentColor === randomColor) {
        setColor(currentColor);
        return;
    }
    color.set(randomColor);
}

export function setPositionY(positionChange: number) {

    positionY.update(pY => pY + positionChange);
    setTimeout(() => {
        positionY.update(pY => pY - positionChange);
    }, 400);
}