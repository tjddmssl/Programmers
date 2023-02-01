function solution(a, b) {
  // 1. 최대공약수 g를 구한다.
  let g = 1;
  for (let i = 1; i<= b; i++){
      if(a%i ===0 && b%i ===0) g = i;
  }
  
  // 2. 분모 b를 최대공약수 g로 나눈다.
  b = b/g    

  // 3. b를 2와 5로 나눈 나머지 값이 0이 될 때까지 반복문을 실행한다.
  // (= 2와 5를 제외한 소수가 있는지 확인)
  while (b%2 === 0) b = b/2
  while (b%5 === 0) b = b/5

  // 4. b가 1이라면 유한소수이므로(분모의 소인수가 2와 5만 존재) 1을 리턴,
  // b가 그 외의 값이라면 무한소수이므로(분모에 2와 5를 제외한 소수가 포함) 2를 리턴한다.
  return b === 1? 1 : 2;
}