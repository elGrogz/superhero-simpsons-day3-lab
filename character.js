var Character = function(name, health, favFood, catchphrase){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.catchphrase = catchphrase;
}

Character.prototype ={
  eat: function(food) {
    this.health += food.calories;
  }
}

module.exports = Character;