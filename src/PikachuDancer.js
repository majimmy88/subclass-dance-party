var PikachuDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="pikachu-dancer"><img src="img/runningPikachu.gif" height="75" width="100"></span>');
  this.setPosition(top, left);
}

PikachuDancer.prototype = Object.create(Dancer.prototype);

PikachuDancer.prototype.constructor = PikachuDancer;

PikachuDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.animate({ "left": "-=50px"}, "fast" );
}

PikachuDancer.prototype.lineUp = function() {
  this.$node.animate({"left": "95%"}, "fast");
}