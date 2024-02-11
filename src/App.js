// CHMOD Calculator- UNIX Access Permissions

// Unchecks checkboxes on window load
window.addEventListener('load', function () {
  const checkboxGroups = ['owner', 'group', 'public'];

  checkboxGroups.forEach(group => {
      const checkboxes = ['read', 'write', 'execute'];

          checkboxes.forEach(permission => {
                  const checkboxId = `${group}-box-${permission}`;
                  document.getElementById(checkboxId).checked = false; // Set default to checked
                });
            });
        });

// TO-DO !! Change naming on function? !!//
const calculatePermissions = () => {
    const ownerPermissions = getCheckboxPermissions('owner');
    const groupPermissions = getCheckboxPermissions('group');
    const publicPermissions = getCheckboxPermissions('public');
    const combinedPermissions = [ownerPermissions[1], groupPermissions[1], publicPermissions[1]].join(' ');
    const combinedPermissionNum = [ownerPermissions[0], groupPermissions[0], publicPermissions[0]].join(' ');    
    console.log(combinedPermissions, '\n', combinedPermissionNum);
    displayPermissions(combinedPermissions, combinedPermissionNum);
};


// Displays the permStr (Permission String) in html.
const displayPermissions = (permStr, combVal) => {
    const permissionTextHtml = document.getElementById('permission-display-str');
    const permissionTextNumHtml = document.getElementById('permission-display-oct');
    if (permissionTextHtml && permissionTextNumHtml) {
        permissionTextHtml.innerHTML = permStr;
        permissionTextNumHtml.innerHTML = combVal;
    } else {
        console.error("Can't find id with element");
    }
};


// Reads numeric value given by checkboxes RWX (4-R, 2-W, 1-E) and combines values using bitwise OR
const getCheckboxPermissions = (type) => {
    const readCheckbox = document.getElementById(`${type}-box-read`).checked;
    const writeCheckbox = document.getElementById(`${type}-box-write`).checked;
    const executeCheckbox = document.getElementById(`${type}-box-execute`).checked;

    // Ternary if-else, assigns value on true : false
    const readValue = readCheckbox ? 4 : 0;
    const writeValue = writeCheckbox ? 2 : 0;
    const executeValue = executeCheckbox ? 1 : 0;

    // takes values and uses bitwise OR to put then thogether into an int
    const combinedValue = readValue | writeValue | executeValue;
    return [combinedValue, permSwitch(combinedValue)];
};

// Gives correct permission(s) based on octal number value 
const permSwitch = (xPermission) => {
    switch (xPermission) {
        case 0:
            return '---';
        case 1:
            return '--x';
        case 2:
            return '-w-';
        case 3:
            return '-wx';
        case 4:
            return 'r--';
        case 5:
            return 'r-x';
        case 6:
            return 'rw-';
        case 7:
            return 'rwx';
        default:
            console.log("Not valid");
            return '---';
    }
};

// Toggle opacity of octal
var opacityToggle = false;
function cssOpacity() {
    console.log("header-button-octal button pressed.");

    var elements = document.getElementsByClassName('p-box-item-octal');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = opacityToggle ? 0 : 1;
    }
    opacityToggle= !opacityToggle;
}

// Toggle darkmode
var darkModeToggle = false;
function cssDarkmode(){
    console.log('header-button-mode button pressed.');
    
    var darkModeButton = document.getElementById('header-button-mode');
    
    document.body.classList.toggle('dark-mode');
    toggleDarkModeOnElements(document.getElementsByClassName('permission-box'));
    toggleDarkModeOnElements(document.getElementsByClassName('header-wrapper'));
    toggleDarkModeOnElements(document.getElementsByClassName('permission-box-container'));
    toggleDarkModeOnElements(document.getElementsByClassName('page-wrapper'));
    toggleDarkModeOnElements(document.getElementsByClassName('permission-display'));
}

function toggleDarkModeOnElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('dark-mode');
    }
}


// DOM 
document.getElementById('owner-box-read').addEventListener('change', calculatePermissions);
document.getElementById('owner-box-write').addEventListener('change', calculatePermissions);
document.getElementById('owner-box-execute').addEventListener('change', calculatePermissions);

document.getElementById('group-box-read').addEventListener('change', calculatePermissions);
document.getElementById('group-box-write').addEventListener('change', calculatePermissions);
document.getElementById('group-box-execute').addEventListener('change', calculatePermissions);

document.getElementById('public-box-read').addEventListener('change', calculatePermissions);
document.getElementById('public-box-write').addEventListener('change', calculatePermissions);
document.getElementById('public-box-execute').addEventListener('change', calculatePermissions);

// Toggle visibility state
document.getElementById('header-button-octal').addEventListener('click', cssOpacity);
document.getElementById('header-button-mode').addEventListener('click', cssDarkmode);
