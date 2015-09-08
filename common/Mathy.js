
export function sqrt(num){
  return Math.sqrt(num);
}

export function square(num){
  return num * num;
}

export function diag(x, y){
  return sqrt(square(x) + square(y));
}


export default {
  sqrt, square, diag
};