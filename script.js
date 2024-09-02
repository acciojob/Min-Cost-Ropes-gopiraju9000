function mincost(arr) {
  // Create a min-heap (priority queue) using a simple array and sort it initially
  arr.sort((a, b) => a - b);
  
  let totalCost = 0;
  
  // While there is more than one rope left
  while (arr.length > 1) {
    // Take the two smallest ropes
    let first = arr.shift();  // Remove and get the smallest element
    let second = arr.shift(); // Remove and get the second smallest element
    
    // Combine the ropes and accumulate the cost
    let cost = first + second;
    totalCost += cost;
    
    // Add the combined rope back into the array, maintaining sorted order
    // Here we can use binary insertion for efficiency, but for simplicity, we'll just push and sort
    arr.push(cost);
    arr.sort((a, b) => a - b);
  }
  
  return totalCost;
}

module.exports = mincost;
