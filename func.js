if (this.x < 10 + this.w * 2) {
    this.x = 10 + this.w * 2 + 1;
    this.angle = 180 - this.angle;
}
if (this.x > width - (10 + this.w * 2)) {
    this.x = width - (10 + this.w * 2 + 1);
    this.angle = 180 - this.angle;
}
if (this.y < 10 + this.w * 2) {
    this.y = 10 + this.w + 1;
    this.angle = 360 - this.angle;
}
if (this.y > height - (10 + this.w * 2)) {
    this.y = height - (10 + this.w + 1);
    this.angle = 360 - this.angle;
}