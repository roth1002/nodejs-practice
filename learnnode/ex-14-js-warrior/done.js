jsWarrior.turn = function(warrior) {

  if (!warrior._initialized) {
        warrior._last_health = 20;
        warrior._side_done = false;
        warrior._initialized = true;
  };

  var health = warrior.getHealth();
  var under_attack = (health < warrior._last_health);
  var low_health = (health < 10);
  var full_health = (health >= 19);
  var check_backward;

  try {
        check_backward = warrior.check('backward');
  } catch(e) {
        check_backward = "wall";
  }

  var on_the_side = (check_backward == "wall");

  if (warrior.check() == "wall") {
        warrior.pivot();

  } else if (low_health && under_attack) {
        warrior.walk('backward');

  // not under attack but lost some blood, rest a moment
  } else if (!under_attack && !full_health) {
    warrior.rest();

  // ok, the paradise, ready to kill gangsta*
  } else if(warrior.check() == "enemy") {
    warrior.attack();
  } else if(warrior.check() == "diamond") {
        warrior.collect();
  } else if (check_backward  == 'diamond') {
    	//warrior.walk('backward');
    	warrior.collect('backward');
  } else if (!warrior._side_done && !on_the_side) {
        warrior.walk('backward');

  // let's walk to the mall, today*
  } else {
      // mark if we are on the side
      if (!warrior._side_done && on_the_side) {
          warrior._side_done = true;
      } else {
	    warrior.walk()
      }
  }
  warrior._last_health = health;
}
