function Robot() {
	this.name = 'Robot';
	this.occupation = 'I am just working';
}

Robot.prototype.work = function() {
	console.log("I am " + this.name + ' - ' + this.occupation);
}

function CoffeeRobot() {
	this.name = "Coffee Robot";
	this.occupation = "I am making coffee";
}
CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = CoffeeRobot;

function DancerRobot() {
	this.name = "Robot Dancer";
	this.occupation = "I am just dancing";
}
DancerRobot.prototype = Object.create(Robot.prototype);
DancerRobot.prototype.constructor = DancerRobot;

function CookerRobot() {
	this.name = "Robot Cooker";
	this.occupation = "I am cooking";
}
CookerRobot.prototype = Object.create(Robot.prototype);
CookerRobot.prototype.constructor = CookerRobot;

let robot = new Robot();
robot.work();
let coffeeRobot = new CoffeeRobot();
coffeeRobot.work();
let dancerRobot = new DancerRobot();
dancerRobot.work();
let cookerRobot = new CookerRobot();
cookerRobot.work();

console.log('')

let myRobots = [robot, coffeeRobot, dancerRobot, cookerRobot];
for (let i = 0; i < myRobots.length; i++) {
	myRobots[i].work();
}