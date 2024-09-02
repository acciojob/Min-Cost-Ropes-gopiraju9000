function mincost(arr){ 
//write your code here
// return the min cost
  arr.sort((a,b) => a-b);
  let min_sum = arr[0];
   for(let i = 1;i < arr.length;i++){
	   min_sum = min_sum  + arr[i];
   }
	return min_sum;
}

module.exports=mincost;
