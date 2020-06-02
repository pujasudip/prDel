// const sum=require("./sum")
import renderer from 'react-test-renderer';

function sum(a, b) {
    return a + b;
}

test("add 1 + 2 to make 3",()=>{


    expect(sum(2,3).toBe(5));


})