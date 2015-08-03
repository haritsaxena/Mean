/*
 * Avoid using mixed type-- ch1 item 5
 * When the two arguments are of the same type, there’s no difference in behavior between == and ===. 
 * So if you know that the arguments are of the same type, they are interchangeable. But using strict equality (===) 
 * is a good way to make it clear to readers that there is no conversion involved in the comparison. 
 * Otherwise, you require readers to recall the exact coercion rules to decipher your code’s behavior.
 */
var today = new Date();
if (true == 1) {
  console.log('in1')
} 
else {
  console.log('not in1')
}
if (true === 1) {
  console.log('in2')
} 
else {
  console.log('not in2')
}
if ( + true === 1) {
  console.log('in3')
} 
else {
  console.log('not in3')
}
