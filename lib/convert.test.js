const convert = require ('./convert')

test ('cotacao 4 to quantidade 4' ,() => {
    expect(convert.convert(4,4)).toBe(16)
})

test('cotacao 0 to quantidade 4' , ()=>{
    expect(convert.convert(0,4)).toBe(0)
})

test('toMoney convert floats', ()=>{
    expect(convert.toMoney(2)).toBe('2.00')
})