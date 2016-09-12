game = new Phaser.Game(
	{ preload: preload, create: create, update: update}

	)

preload = function {
	game.load.image'Nimzy', 'phaser.png';
}

create = function {
	game.add.image(200, 200, 'Nimzy');

}

update = function {

console.log("nothing to report");

}

update = function {

console.log("nothing to report");

}



onload = function {

	//dynamically put authentication fields


}

var object = {
	Name: 'Nimzy',
	Color: 'Green',
	Speed: '100',
	Health: '1000',
	



};








function NimzyShip(game, x, y, spaceShip) {   
	Phaser.Sprite.call(this, game, x, y, 'units', spaceShip);   
	// base unit stuff goes here
}
NimzyShip.prototype = Object.create(Phaser.Sprite.prototype);
NimzyShip.prototype.constructor = NimzyShip;


function Nimzy (game, x, y, team, nimzySprite) {   
	this.team = team;   
	Unit.call(this, game, x, y, spriteName);
}
Nimzy.prototype = Object.create(Unit.prototype);
Nimzy.prototype.constructor = Nimzy;
Nimzy.prototype.lookForTargets = function() {   
	// code to look for targets
};
// override the Sprite.update function
Nimzy.prototype.update = function() {   
	this.lookForTargets();   
	// now execute the base class handlers for update()   
	NimzyShip.prototype.update.call(this);
}










/* Adding and Removing Elements from Arrays
		<script>
		var weapons = ['sword', 'laser gun', 'stick', 'axe'];
		//array length
		console.log(weapons.length)
		//push()
		weapons.push('knife', 'laser knife');
		//pop()

		//splice()

		console.log(weapons); /*
