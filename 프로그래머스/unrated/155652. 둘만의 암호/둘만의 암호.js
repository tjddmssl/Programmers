function solution(s, skip, index) {
  let alphabets = 'abcdefghijklmnopqrstuvwxyz'
  let newAlphabets = alphabets.split('').filter(e=>!skip.includes(e))
  return s.split('').map((e)=>{
    let i = newAlphabets.indexOf(e)
    return i+index >= newAlphabets.length ? newAlphabets[(i+index)%newAlphabets.length] : newAlphabets[i+index]
  }).join('')
}