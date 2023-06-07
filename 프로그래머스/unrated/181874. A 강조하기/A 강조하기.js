function solution(myString) {
    //나머지 문자열은 다 소문자로
    //단, a만 A로 대체
  let str = myString.replace(/./g, str => str.toLowerCase()).replaceAll('a','A')
  return str
}