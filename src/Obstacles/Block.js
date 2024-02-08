export default class Block {
  constructor(x, y, width, height, imageLink) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imageLink = imageLink;
    this.image = new Image();
    this.image.src = this.imageLink;
  }

  draw(ctx) {
    // ctx.fillStyle = this.color;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
