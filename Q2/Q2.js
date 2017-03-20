var fizzBuzz = function( test ){
  if ( test % 3 === 0 ){
   	return 'Fizz';
  } else if (test % 5 === 0 ){
	return 'Buzz';
  }
  return '';
}

module.exports = {fizzBuzz: fizzBuzz};