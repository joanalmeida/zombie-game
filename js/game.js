var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update});

var player;
var zombie;

var cursors;

function preload() {
	game.load.spritesheet('character', 'assets/player.png', 95, 95, 11);
	game.load.spritesheet('zombie', 'assets/zombies.png', 56, 59, 16);
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	player = game.add.sprite(200, game.world.height - 100, 'character');
	game.physics.arcade.enable(player);
	player.anchor.setTo(0.5, 0.5);
	player.body.collideWorldBounds = true;
	player.animations.add('move', [4, 5, 6, 8, 9, 10, 3, 7], 10, true);
	player.frame = 2;

	zombie = game.add.sprite(500, game.world.height -100, 'zombie');
	game.physics.arcade.enable(zombie);
	zombie.scale.setTo(2, 2);
	zombie.body.collideWorldBounds = true;
	zombie.animations.add('left');
	zombie.animations.add('right');
	zombie.frame = 7;

	cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	player.body.velocity.x = 0;

	if(cursors.right.isDown){
		player.scale.x = 1;
		player.body.velocity.x = 150;
		player.animations.play('move');
	} else if(cursors.left.isDown){
		player.scale.x = -1;
		player.body.velocity.x = -150;
		player.animations.play('move');
	} else {
		player.animations.stop();
		player.frame = 2;
	}
}