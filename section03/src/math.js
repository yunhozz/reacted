export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// CJS : Common JS
//  -> module.exports = { add, sub };

// ESM : ES Module System (package.json에 type을 module로 설정)
//  -> export { add, sub };

export default function multiply(a, b) {
    return a * b;
}