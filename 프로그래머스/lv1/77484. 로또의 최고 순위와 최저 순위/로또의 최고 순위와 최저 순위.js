function solution(lottos, win_nums) {
  let rank = [6, 5, 4, 3, 2, 1];
  let answer = [];

  const min = lottos.filter(el => win_nums.includes(el)).length;
  const max = lottos.filter(el => el===0).length + min;

//  console.log(min);
//  console.log(max);

  if(rank.includes(max)){
    answer.push(rank.indexOf(max)+1)
  }else{
    answer.push(6)
  }

  if( rank.includes(min)){
    answer.push(rank.indexOf(min)+1)
  }else{
    answer.push(6)
  }

  return answer;
}

