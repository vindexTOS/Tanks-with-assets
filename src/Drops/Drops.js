export default class Drops {
  constructor(x, y, width, height, img, type, value) {
    (this.x = x),
      (this.y = y),
      (this.width = width),
      (this.height = height),
      (this.photo = new Image()),
      (this.type = type),
      (this.value = value);
    this.photo.src = img;
  }

  draw(ctx) {
    ctx.save();
    ctx.drawImage(this.photo, this.x, this.y, this.width, this.width);
    ctx.font = "12px Arial"; // Set the font style
    ctx.fillStyle = "white"; // Set the text color
    ctx.textAlign = "center"; // Center the text horizontally
    ctx.fillText(this.value, this.x + this.width / 2, this.y + this.width + 15);

    ctx.restore();
  }
}
