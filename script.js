//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    var checkboxes = document.querySelectorAll('.toggle');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            limitCheckboxSelection(checkbox);
        });
    });

    function limitCheckboxSelection(clickedCheckbox) {
        var checkedCheckboxes = document.querySelectorAll('.toggle:checked');

        if (checkedCheckboxes.length > 2) {
            // If more than 2 checkboxes are checked, uncheck the first one
            checkedCheckboxes[0].checked = false;
        }

        // Change color of the clicked checkbox
        clickedCheckbox.parentNode.style.backgroundColor = clickedCheckbox.checked ? '#ddd' : '';
    }
});
