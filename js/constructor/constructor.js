// Constructor properties (Per instance)
function Building(floors) {
  // this = {}
  this.what = 'building';
  this.floors = floors;
  // return this;
}
var myHouse = new Building(3); // instance
var myHouse2 = new Building(5); // instance
console.log(myHouse); // Building { what: 'building', floors: 3 }  // just return an object
console.log(myHouse2); // Building { what: 'building', floors: 5 }

// Methods for all instance
Building.prototype.countFloors = function() {
  console.log(`i have ${this.floors} floors`);
};

myHouse2.countFloors();
