var MegamanDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="megaman-dancer"><img src="img/runningMegaMan.gif" height="75" width="100"></span>');
  this.setPosition(top, left);
}

MegamanDancer.prototype = Object.create(Dancer.prototype);

MegamanDancer.prototype.constructor = MegamanDancer;

MegamanDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.animate({ "left": "+=50px"}, "fast" );
}

MegamanDancer.prototype.lineUp = function() {
  this.$node.animate({"left": "0px"}, "fast");
}