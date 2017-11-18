class PowerUps {
  constructor(ctx,row,column,spriteSheet,type) {
    this.x = (TILE_WIDTH * column) + TILE_PAD_POWER;
    this.y = (TILE_HEIGHT * row) + TILE_PAD_POWER;
    this.type = type;
    this.sx = POWER_UPS_X + (POWER_UPS_SIZE * this.type);
    this.sy = POWER_UPS_Y;
    this.ctx = ctx;
    this.spriteSheet = spriteSheet;
  }

  drawCoin() {
    this.ctx.drawImage(this.spriteSheet,this.sx,this.sy,POWER_UPS_SIZE,POWER_UPS_SIZE,this.x,this.y,POWER_UPS_WIDTH,POWER_UPS_HEIGHT);
  }

  drawPlus() {
    this.ctx.drawImage(this.spriteSheet,this.sx,this.sy,POWER_UPS_SIZE,POWER_UPS_SIZE,this.x,this.y,POWER_UPS_WIDTH,POWER_UPS_HEIGHT);
  }

  drawPowerHorizontal() {
    this.ctx.drawImage(this.spriteSheet,this.sx,this.sy,POWER_UPS_SIZE,POWER_UPS_SIZE,this.x,this.y,POWER_UPS_WIDTH,POWER_UPS_HEIGHT);
  }

  drawPowerVertical() {
    this.ctx.drawImage(this.spriteSheet,this.sx,this.sy,POWER_UPS_SIZE,POWER_UPS_SIZE,this.x,this.y,POWER_UPS_WIDTH,POWER_UPS_HEIGHT);
  }

  drawPowerSplit() {
    this.ctx.drawImage(this.spriteSheet,this.sx,this.sy,POWER_UPS_SIZE,POWER_UPS_SIZE,this.x,this.y,POWER_UPS_WIDTH,POWER_UPS_HEIGHT);
  }
}