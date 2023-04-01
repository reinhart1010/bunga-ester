import * as colors from "not-colors";

const letterblock = {
  " ": [[0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4]],
  A: [[0, 3, 2, 3], [0, 1, 2, 2, 2, 1], [2, 4, 2], [8], [2, 4, 2], [2, 4, 2], [2, 4, 2]],
  B: [[7, 1], [2, 4, 2], [2, 4, 2], [7, 1], [2, 4, 2], [2, 4, 2], [7, 1]],
  E: [[8], [2, 6], [2, 6], [8], [2, 6], [2, 6], [8]],
  a: [[0, 8], [0, 8], [7, 1], [0, 6, 2], [0, 2, 6], [2, 4, 2], [0, 1, 6, 1]],
  c: [[0, 6], [0, 6], [0, 2, 4], [2, 4], [2, 4], [2, 4], [0, 2, 4]],
  e: [[0, 8], [0, 8], [0, 1, 6, 1], [2, 4, 2], [6, 2], [2, 6], [0, 1, 7]],
  h: [[2, 6], [2, 6], [6, 2], [2, 4, 2], [2, 4, 2], [2, 4, 2], [2, 4, 2]],
  i: [[0, 2], [2], [0, 2], [2], [2], [2], [2]],
  m: [[0, 10], [0, 10], [4, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]],
  n: [[0, 8], [0, 8], [6, 2], [2, 4, 2], [2, 4, 2], [2, 4, 2], [2, 4, 2]],
  r: [[0, 6], [0, 6], [6], [2, 4], [2, 4], [2, 4], [2, 4]],
  s: [[0, 6], [0, 6], [0, 1, 5], [2, 4], [0, 1, 4, 1], [0, 4, 2], [5, 1]],
  t: [[2, 4], [2, 4], [6], [2, 4], [2, 4], [2, 4], [0, 1, 5]],
  u: [[0, 8], [0, 8], [2, 4, 2], [2, 4, 2], [2, 4, 2], [2, 4, 2], [0, 1, 7]],
  v: [[0, 8], [0, 8], [2, 4, 2], [2, 4, 2], [0, 1, 2, 2, 2, 1], [0, 2, 4, 2], [0, 3, 2, 3]]
}

function print(str: string) {
  process.stdout.write(str);
}

function printLetterBlock(string: string, index: number) {
  for (let i = 0; i < string.length; i++) {
    if (i > 0) print("  ");
    for (let j = 0; j < letterblock[string.charAt(i)]![index]!.length; j++) for (let k = 0; k < letterblock[string.charAt(i)]![index][j]; k++) print(j % 2 == 0 ? colors.random("@") : " ");
  }
}

function printLines(size: number[]) {
  for (let i = 0; i < size.length; i++) for (let j = 0; j < size[i]; j++) print(i % 2 == 0 ? "+" : "-");
}

function printPetals(index: number) {
  const compile = (str: string, middle: string) => colors.magenta(str) + middle + colors.magenta(str.split("").reverse().join("").replace(index > 5 ? "/" : "\\", index > 5 ? "\\" : "/").replace(">", "<"));

  switch (index) {
    case 0:
      return print(compile("      _..", " "));
    case 1:
      return print(compile("  ,-.'   ", colors.magenta("V")));
    case 2:
      return print(compile(" .'  \\   ", colors.magenta("|")));
    case 3:
      return print(compile(".'.   \\  ", colors.magenta("|")));
    case 4:
      return print(compile(";  '.  \\.", colors.magenta("+")));
    case 5:
      return print(compile(" >---+>", colors.cyan("(>_ )")));
    case 6:
      return print(compile(";  .'  /'", colors.magenta("+")));
    case 7:
      return print(compile("'.'   /  ", colors.magenta("|")));
    case 8:
      return print(compile(" ',  /   ", colors.magenta("|")));
    case 9:
      return print(compile("   -'._  ", colors.magenta("Λ")));
    case 10:
      return print(compile("       ''", " "));
  }
}

function printNga(nA: number) {
  let aaa = "";
  for (let i = 0; i < nA; i++) aaa += "A";
  return colors.rainbow(aaa);
}

const description = [
  "It is dangerous to go outside. Take this. Btw, taukah kamu kalau bagian \"nga\" dalam bunga harus   ",
  "diucapkan sambil ditekan. Jadinya B-U, BU; N-G-A, GA, NG" + printNga(5) + ". BU-NG" + printNga(30),
  printNga(90) + " lo weh."
]

printLines([1, 21, 1, 100, 1]);
print("\n");
for (let i = 0; i < 11; i++) {
  print("| "); printPetals(i); print(" | ");
  if (i < 7) printLetterBlock(" Buat Ester ", i);
  else if (i == 7 || i == 12) {
    for (let j = 0; j < 98; j++) print(" ");
  } else print(description[i - 8]);
  print(" |\n");
}
printLines([1, 21, 1, 100, 1]);
print("\n");

