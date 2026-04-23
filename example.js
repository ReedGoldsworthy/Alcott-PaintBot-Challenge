//  COMMANDS
//    move()          move forward 1 tile
//    left()          rotate 90° counter-clockwise
//    right()         rotate 90° clockwise
//    load()          load a paintball
//    shoot()         fire! (must load first)
//    wait()          do nothing this turn
//
//  CONTROL FLOW
//    repeat(n) { }           repeat n times
//    while (condition) { }   loop while condition is true
//    if (condition) { }      run block if condition is true
//
//  CONDITIONS
//    loaded          bot has a paintball loaded
//    !loaded         bot does NOT have a paintball loaded
//    x < 5           variable x is less than 5
//    x > 0           variable x is greater than 0
//    x == 3          variable x equals 3
//    x <= 4          variable x is less than or equal to 4
//
//  VARIABLES
//    var x = 0;      declare variable x, starting at 0
//    x++;            add 1 to x
//    x--;            subtract 1 from x
//    x += 3;         add 3 to x
//    x = 10;         set x to 10
//
//  TIP: load 4 times in a row without shooting → BURST (paints a big diamond!)
// ──────────────────────────────────────────────

var i = 0;
var shots = 0;

// Move toward center while counting steps
while (i < 4) {
  move();
  i++;
}

// Shoot down the column
load();
shoot();
shots++;

// Rotate and cover more ground
left();
repeat(3) {
  move();
}

// Fire again
load();
shoot();
shots++;

// If we've fired twice, do a sweep
if (shots == 2) {
  right();
  repeat(2) {
    move();
    right();
    load();
    shoot();
  }
}
