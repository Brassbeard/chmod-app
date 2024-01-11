// CHMOD Calculator- UNIX Access Permissions
const concatPerm = (permissions) => `${permissions.map(permission => permSwitch(permission)).join('')}`;

function calculatePermissions() {
   // Get checkbox values
   const readCheckbox = document.getElementById('owner-box-read').checked;
   const writeCheckbox = document.getElementById('owner-box-write').checked;
   const executeCheckbox = document.getElementById('owner-box-execute').checked;

   // Convert checkbox values to numeric values (1 for checked, 0 for unchecked)
   const readValue = readCheckbox ? 4 : 0;
   const writeValue = writeCheckbox ? 2 : 0;
   const executeValue = executeCheckbox ? 1 : 0;

   // Use bitwise OR to calculate combined value
   const combinedValue = readValue | writeValue | executeValue;

   // Log the combined value
   console.log("Combined Value:", combinedValue);

   // You can use the combinedValue as needed (e.g., pass it to your permSwitch function)
}

const permSwitch = (xPermission) => {
  console.log("permSwitch function - run" + xPermission);
  switch (xPermission){
  case 0:
    return '---';
  case 1 :
    return '--x';
  case 2 :
    return '-w-';
  case 3 :
    return '-wx';
  case 4 :
    return 'r--';
  case 5 :
    return 'r-x';
  case 6 :
    return 'rw-';
  case 7 :
    return 'rwx';
  default:
      console.log("Not valid");
  }
};

let ownerPermNum = 0b111;
let groupPermNum = 0b011;
let publicPermNum = 0b101;
console.log(0b001+0b001);

const permArr = [ownerPermNum, groupPermNum, publicPermNum];
// let permissionString = `${permSwitch(ownerPermNum)} ${permSwitch(groupPermNum)} ${permSwitch(publicPermNum)}`;

let result = concatPerm(permArr);
console.log(result);
// Garbage crap test

// Anonymous function
// (function(){
//   let ownerPermNum = 0b110;
//   console.log(ownerPermNum);
// })()

// bit shifting
// let temp = 1;
// console.log(temp);
// temp = temp << 1;
// console.log(temp);
// temp = temp << 1;
// console.log(temp);
// Just a test
