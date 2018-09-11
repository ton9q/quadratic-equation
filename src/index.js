module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s/g,''); // remove spaces

  var elements = equation.split('*x');
  
  let a = elements[0];
  let b = elements[1].slice(2);
  let c = elements[2];

  let d = Math.pow(b,2) - 4 * a * c;

  if (d < 0) return ;

  let x1 = Math.round((-Math.sqrt(d)) - b) / (2 * a);
  let x2 = Math.round((Math.sqrt(d)) - b) / (2 * a);

  return [x1,x2].sort((a,b) => a - b); 
};
