import { calcolator } from "./calcolator";

test('add 1+ 2 equal 3',()=>{
    expect(calcolator.add(1,2)).toBe(3);
});
test(' 1* 2 equal 2',()=>{
    expect(calcolator.mul(1,2)).toBe(2);
});
test(' 1/ 2 equal .5',()=>{
    expect(calcolator.divide(1,2)).toBe(.5);
});
test(' 1- 2 equal -1',()=>{
    expect(calcolator.subtract(1,2)).toBe(-1);
});