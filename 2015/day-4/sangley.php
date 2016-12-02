/* day 4 part 1 */
$seed = 'yzbqklnj';
for($i = 0; $i < PHP_INT_MAX; $i++) {

  $prehash = $seed.$i;
  $hash = md5($prehash);

  if(0 === strpos($hash, '00000')) {
    return "\n$hash";
  }
}

/* day 4 part 2 */
$seed = 'yzbqklnj';
for($i = 0; $i < PHP_INT_MAX; $i++) {

  $prehash = $seed.$i;
  $hash = md5($prehash);

  if(0 === strpos($hash, '000000')) {
    return "\n$hash";
  }
}