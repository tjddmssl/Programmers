function solution(lines) {
 let sorted = lines.sort((a,b)=>{
  if(a[0]>b[0]) return 1;
  if(a[0]<b[0]) return -1;
 })
let minNum = sorted[0][0]
if(minNum<0){
  lines = lines.map((x)=>x.map((y)=> y+ Math.abs(minNum)))
}
let emptyArr = [];
for(let i=0; i<lines.length; i++){
  for (let j=lines[i][0]; j < lines[i][1]; j++){
    if(emptyArr[j]===undefined){
      emptyArr[j]=1
    }
    else emptyArr[j]++
  }
}
return emptyArr.filter((x)=> x >=2).length
}