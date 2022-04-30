const romanToInt = function (s) {
  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  return new Function(
    "return " +
      s
        .split("")
        .map((e, i) =>
          map.get(e) < map.get(s.split("")[i + 1])
            ? map.get(e) * -1
            : map.get(e)
        )
        .join("+")
  )();
};
