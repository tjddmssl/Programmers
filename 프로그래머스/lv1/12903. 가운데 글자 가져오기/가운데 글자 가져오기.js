function solution(s) {    
  const length = s.length;
  
  const start = Math.ceil(length / 2) - 1;
  const end = length % 2 ? 1 : 2;    
  
  return s.slice(start, start + end);
}