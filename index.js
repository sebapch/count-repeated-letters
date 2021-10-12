
let words = ["asdf", "fdas", "asds", "dfm", "dfaa", "aaaa", "aabb", "aaabb"];

for (const word of words) {
  function duplicateLetter(o) {
    var arr = o.toUpperCase().split("");
    var obj = {};

    for (var v in arr) {
      obj[arr[v]] = obj[arr[v]] || 0;
      obj[arr[v]]++;
    }

    for (var k in obj) {
      if (obj[k] === 2) {
        console.log(o);
        break;
      }
    }
  }
  duplicateLetter(word);
}
