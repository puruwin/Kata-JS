function mineColor(line, number) {
  return ['white','black'][('abcdefgh'.indexOf(line) + number) % 2];
}
