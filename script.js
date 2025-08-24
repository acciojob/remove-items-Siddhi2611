//your JS code here. If required.
// Attach function to button click
document.querySelector('input[type="button"]').addEventListener("click", removeColor);

function removeColor() {
    let select = document.getElementById("colorSelect");

    // Get selected index
    let selectedIndex = select.selectedIndex;

    // Remove the selected option if any
    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    }
}
