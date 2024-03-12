// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

//2.Math.random() will generate a number between 0 and 1.
function isHit (){
    return Math.random() < 0.5; // Assuming 50% chance of hitting the target
}

//3.return true if the ship's health is above 0 AND ammo is above 0, 
// return false otherwise
function shipCanFire(){
    return shipHealth > 0 && shipAmmo > 0;
}

//4.return true if health is zero or less
function isDestroyed(health){
    return health <= 0;
}

//5.If the ship runs out of ammo before destroying the target, it will suffer damage.
function reloadShip(){
    if (shipAmmo <= 0) {
        shipHealth -= 1;   //Reduce ship health by 1
        shipAmmo += 3;     // increase ammo by 3
    }
}

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

// call the encounter function
encounter();