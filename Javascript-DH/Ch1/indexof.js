/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var arr = [
  'apple',
  'orange',
  'pear'
],
found = false;

/*
for (var i = 0, l = arr.length; i < l; i++) {
  if (arr[i] === 'orange') {
    found = true;
  }
}

console.log('found:', found);

using index of */

console.log('found', arr.indexOf('orange') != -1);

/*
Exception: unterminated comment
@Scratchpad/1:16
*/