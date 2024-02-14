export default class Drops {
  constructor(x, y, width, height, img, type, value, isActive) {
    (this.x = x),
      (this.y = y),
      (this.width = width),
      (this.height = height),
      (this.photo = new Image()),
      (this.type = type),
      (this.value = value);
    this.photo.src = img;
    this.isActive = isActive;
  }

  showDrop(bool) {
    this.isActive = bool
  }

  draw(ctx) {
    if (this.isActive) {
      ctx.save();
      ctx.drawImage(this.photo, this.x, this.y, this.width, this.width);
      ctx.font = "12px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        this.value,
        this.x + this.width / 2,
        this.y + this.width + 15
      );

      ctx.restore();
    }
  }
}
