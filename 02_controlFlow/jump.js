// break
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}

// return
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3)); // 5

