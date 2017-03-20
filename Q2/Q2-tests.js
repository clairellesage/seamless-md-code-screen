const expect = require("chai").expect;
const fizzBuzz = require('./Q2').fizzBuzz;

expect(fizzBuzz(4)).to.equal('');
expect(fizzBuzz(6)).to.equal('Fizz');
expect(fizzBuzz(10)).to.equal('Buzz');

