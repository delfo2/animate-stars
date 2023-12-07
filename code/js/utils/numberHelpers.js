export function getRandomNumber (max) {
    const n = Math.round(Math.random() * 1000);
    return n < max ? n : getRandomNumber(max);
}