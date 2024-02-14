/*
Substitute two equal letters by the next letter of the alphabet 
(two letters convert to one):
"aa" => "b", "bb" => "c", .. "zz" => "a".

The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:
  let str = "zzzab"
      str = "azab"
      str = "bzb"
      str = "cz"
  return "cz"

Notes:
  The order of letters in the result is not important.
  The letters "zz" transform into "a".
  There will only be lowercase letters.
*/


// Solution

function lastSurvivors(str) {
  
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  
  let next = str;
  
  do {
    str = next;
    next = str.replace(/([a-z])(.*?)\1/g, (_, a, b) => alpha[(alpha.indexOf(a) + 1) % 26] + b);
  } while (str !== next)
  
  return str;
}