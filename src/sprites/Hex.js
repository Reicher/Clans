export default class Hex extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, "sprites", config.key);
        config.scene.add.existing(this);

        // Standard sprite is 16x16 pixels with a smaller body
        //this.body.setSize(12, 12);

        return this;
    }
}
