let a = 3;

while (a < 9) {
  a++;
  if (a == 8) {
    break;
  }

  if (a == 7) {
    continue;
  }
  console.log(a);
}
