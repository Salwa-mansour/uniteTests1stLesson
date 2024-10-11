// const sum = require('./app1');
import {sum} from './app1';

test('add 1+ 2 equal 3',()=>{
    expect(sum(1,2)).toBe(3);
});

test('add 2+ 8 equal 10',()=>{
    expect(sum(2,8)).toBe(10);
});