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

    const combinedPermissions = [ownerPermissions, groupPermissions, publicPermissions].join(' ');

    displayPermissions(combinedPermissions);
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
    console.log(combinedValue.type);

    return permSwitch(combinedValue);
};

// Gives correct permission(s) based on octal number value ()
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

// Displays the permStr (Permission String) in html.
const displayPermissions = (permStr) => {
    const permissionTextHtml = document.getElementById('permission-display');
    if (permissionTextHtml) {
        permissionTextHtml.innerHTML = permStr;
    } else {
        console.error("Can't find id with element");
    }
};


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
