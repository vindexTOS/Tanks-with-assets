import Animations from './Animations.js'
import { AnimationsModlue } from './AssetModule.js'
import Bullet from './bullet.js'
import stateManager from './StateManager.js'
export default class Enemy {
  enemyTankLife = 3
  weaponePosition = {
    x: 5.3,
    y: 3,
  }
  constructor(
    x,
    y,
    tankWidth,
    tankHeight,

    hullSrc,
    tracksSrc,
    weaponSrc,
    canvasWeidth,
    canvasHeight,
  ) {
    this.x = x
    this.y = y
    this.width = tankWidth
    this.velocity = 5
    this.height = tankHeight
    this.canvasHeight = canvasHeight
    this.canvasWeidth = canvasWeidth
    this.rotation = Math.PI
    this.hullSrc = hullSrc
    this.tracksSrc = tracksSrc
    this.weaponSrc = weaponSrc

    this.hull = new Image()
    this.hull.src = this.hullSrc
    this.tracks = new Image()

    this.tracks.src = this.tracksSrc[0]

    this.weapon = new Image()
    this.weapon.src = this.weaponSrc

    this.enemyBullets = stateManager.getSharedState().enemyBullets
  }
  hitTreshhold = 30

  animationModule = new Animations()
  draw(ctx) {
    this.drawTank(ctx)
  }
  isShoot = [false, true, false, true, false, true, true, true, true]
  enemyRandomMovmentMap = [
    'left',
    'right',
    'up',
    'down',
    'left',
    'right',
    'up',
    'down',
  ]
  currentDirectionTimer = 0
  randomDirection = 0
  timeSetterIntervalId = null
  randomShoot = 0

  timeSetter() {
    if (this.timeSetterIntervalId !== null) {
      clearInterval(this.timeSetterIntervalId)
    }

    this.timeSetterIntervalId = setInterval(() => {
      this.randomDirection = Math.floor(Math.random() * 8)
      this.randomShoot = Math.floor(Math.random() * this.isShoot.length)
      setTimeout(() => {
        this.randomDirection = Math.floor(Math.random() * 8)
      }, 200)
    }, 100)
  }

  shootTimeIntervalId = null
  shoot() {
    // this.isShoot = false
    // const shootingAudio = new Audio('audio/tankshoot.mp3')
    if (this.isShoot[this.randomShoot]) {
      this.shootTimeIntervalId = setTimeout(() => {
        console.log('shoot')

        const bullet = new Bullet(
          this.x + this.width / 2,
          this.y + this.height / 2,
          9,
          this.rotation - Math.PI / 2,
          this.audioContext,
        )

        this.weaponePosition.y = 3.5

        setTimeout(() => {
          // this.playShoot(shootingAudio)
          this.weaponePosition.y = 3
        }, 20)
        this.isShoot[this.randomShoot] = false
        this.isShoot[this.randomShoot + 1] = true
        stateManager.addEnemyBullets(bullet)
      }, 10)
    }
  }
  randomMovement() {
    switch (this.enemyRandomMovmentMap[this.randomDirection]) {
      case 'left':
        console.log('left')
        if (this.x - this.velocity > 0) {
          this.rotation = -Math.PI / 2
          this.x -= this.velocity
          this.timeSetter()
        }

        break
      case 'right':
        if (this.x + this.velocity < this.canvasWeidth - 60) {
          this.x += this.velocity
          this.rotation = Math.PI / 2
          this.timeSetter()

          console.log('r')
        }
        break
      case 'up':
        if (this.y - this.velocity >= 0) {
          this.rotation = 0
          this.y -= this.velocity
          this.timeSetter()

          console.log('u')
        }
        break
      case 'down':
        if (this.y + this.velocity < this.canvasHeight - 60) {
          this.rotation = Math.PI
          this.y += this.velocity
          this.timeSetter()

          console.log('d')
        }
        break
      default:
        break
    }

    this.currentDirectionTimer = this.timeToChangeDirection
  }

  getHit(x, y) {
    const adjustedX = x - (this.x + this.width / 2)
    const adjustedY = y - (this.y + this.height / 2)

    if (
      Math.abs(adjustedX) <= this.hitTreshhold &&
      Math.abs(adjustedY) <= this.hitTreshhold
    ) {
      this.enemyTankLife--
    }
  }
  drawTank(ctx) {
    ctx.save()
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2)
    ctx.rotate(this.rotation)
    while (this.enemyTankLife > 0) {
      this.animationModule.gasAnimation(ctx)
      this.tracks.src = this.tracksSrc[Math.floor(Math.random() * 2)]
      this.randomMovement()
      this.shoot()

      break
    }

    ctx.drawImage(this.tracks, -this.width / 2.7, -this.height / 2.2, 15, 78)
    ctx.drawImage(this.tracks, -this.width / -5.7, -this.height / 2.2, 15, 78)

    ctx.drawImage(
      this.hull,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
    )
    ctx.drawImage(
      this.weapon,
      -this.width / this.weaponePosition.x,
      -this.height / this.weaponePosition.y,
      30,
      50,
    )

    ctx.restore()
  }
}
