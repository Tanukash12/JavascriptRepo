//  truthy values 
//  falsy values => false, 0, "", null, undefined, NaN
// array check (.length === 0)
//  false == 0 -> true
//  false == "" -> true
//  0 == '' -> true

// NULLISHING COALESCING OPERATOR
//  ?? operator returns the right-hand operand when the left-hand operand is null or undefined,
// otherwise it returns the left-hand operand.
let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 10; // 10
val1 = 0 ?? 10; // 0
val1 = "" ?? 10; // ""
val1 = NaN ?? 10; // NaN
val1 = false ?? 10; // false
val1 = null ?? undefined; // undefined
val1 = nul ?? 5 ?? 10; //5

