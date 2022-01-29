const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
module.exports.columnNumber = function (C) {
  if (C < 26) {
    return alphabet[C];
  } else if (C < 702) {
    return alphabet[Math.floor((C - 26) / 26)] + alphabet[C % 26];
  } else {
    let x = Math.floor((C - 702) / 676);
    return (
      alphabet[x] +
      alphabet[Math.floor(((C - x * 676 - 702) % 676) / 26)] +
      alphabet[C % 26]
    );
  }
};
