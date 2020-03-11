module.exports = function check(str, bracketsConfig) {
  if(str.length%2==0){
    let n = str.length;
    let arr = new Array;
    for(let i =0;i<bracketsConfig.length;i++){
      arr.push(bracketsConfig[i].join(""));
    }
    for(let i =0;i<n/2;i++){
      for(let j = 0;j<arr.length;j++){
        str = str.split(arr[j]);
        str=str.join("");
      }
    }
    if(str) return false;
    return true;
  }
  return false;
}
