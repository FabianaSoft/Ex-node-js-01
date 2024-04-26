const {
    somaDoisNumeros,
    subtraiDoisNumeros,
    multiplicaDoisNumeros,
    divideDoisNumeros
} = require('./calculadora');

test('somaDoisNumeros', () => {
    expect(somaDoisNumeros(1, 2)).toBe(3);
});

test('subtraiDoisNumeros', () => {      
    expect(subtraiDoisNumeros(3, 2)).toBe(1);
});

test('multiplicaDoisNumeros', () => {   
    expect(multiplicaDoisNumeros(2, 3)).toBe(6);
});

test('divideDoisNumeros', () => {   
    expect(divideDoisNumeros(6, 3)).toBe(2);
}); 

test('divideDoisNumeros por zero', () => {   
    expect(divideDoisNumeros(6, 0)).toBe(-101);
});


