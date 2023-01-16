function solution(bin1, bin2) {
    //두 이진수의 합을 문자열 return
    //var dec = 123;
    //var bin = dec.toString(2); // === "1111011"
    //parseInt()
    // 2진수 -> 10진수
//var bin = "1111011";
//var dec = parseInt(bin, 2); // === "123"
    
    let dec1 = parseInt(bin1, 2)
    let dec2 = parseInt(bin2, 2)
    let dec = dec1 +dec2
    return dec.toString(2)
    
}