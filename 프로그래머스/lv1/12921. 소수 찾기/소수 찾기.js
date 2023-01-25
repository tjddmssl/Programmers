function solution(n) {
  let arr = new Array(n - 2);
  for (let i = 2; i <= n; i++) {
    arr[i - 2] = i;
  }
  for (let i = 2; i <= n; i++) {
    if (arr[i - 2] === 0) continue;
    for (let j = i * 2; j <= n; j += i) {
      arr[j - 2] = 0;
    }
  }
  return arr.filter((el) => el !== 0).length;
}