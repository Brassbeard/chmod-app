// CHMOD Calculator- UNIX Access Permissions

const concatPerm = (permissions) => `${permissions.map(permission => permSwitch(permission)).join('')}`;

function calculatePermissions() {
   // Get checkbox values
   const readCheckbox = document.getElementById('owner-box-read').checked;
   const writeCheckbox = document.getElementById('owner-box-write').checked;
   const executeCheckbox = document.getElementById('owner-box-execute').checked;

   // Assign numeric values to checkboxes (1 for checked, 0 for unchecked)
   const readValue = readCheckbox ? 4 : 0;
   const writeValue = writeCheckbox ? 2 : 0;
   const executeValue = executeCheckbox ? 1 : 0;

   // Use bitwise OR to calculate combined value
   const combinedValue = readValue | writeValue | executeValue;

   console.log("Combined Value:", combinedValue);

}

// Returns correct permissions based on input (Octal Numbers from checkbox)
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

// Test-data for checking permissions ! REMOVE IN LATER VERSION !
let ownerPermNum = 0b111;
let groupPermNum = 0b011;
let publicPermNum = 0b101;

// Array that holds all 3 permission levels
const permArr = [ownerPermNum, groupPermNum, publicPermNum];

let result = concatPerm(permArr);
console.log(result);

// Permission String Display
// const permissionDisplayHtml = (permStr) => displayPermissionText = document.getElementById('perm-text').innerHTML = permStr;
const displayPermissions = (permStr) => {
  permissionTextHtml = document.getElementById('perm-text');
  if(permissionTextHtml){
    permissionTextHtml.innerHTML = permStr;
    } else{
    console.error("Can't find id with element");
  }
  return permissionTextHtml;
};

let finalStringResult = displayPermissions(result);
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
