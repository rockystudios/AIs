// Position
let armPose = 'default';

// Joint positions
let joint1Rot = 0;
let joint2Rot = 0;
let joint3Rot = 0;
let joint4Rot = 0;

// Segment length (inch)
const segment1Length = 5;
const segment2Length = 5;
const segment3Length = 5;
const segment4Length = 5;

function setArmPose() {
  if (armPose === "default") {
    joint1Rot = 0;
    joint2Rot = 0;
    joint3Rot = 0;
    joint4Rot = 0;
  }
}
function printPose() {
  console.log(`Current arm position: ${armPose}.`)
  console.log(`Joint 1 Rotation: ${joint1Rot}.`)
  console.log(`Joint 2 Rotation: ${joint2Rot}.`)
  console.log(`Joint 3 Rotation: ${joint3Rot}.`)
  console.log(`Joint 4 Rotation: ${joint4Rot}.`)
}
printPose()
