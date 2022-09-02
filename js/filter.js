$(document).ready(function () {

    let inputs = document.getElementsByClassName('form-control');

    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        $("#"+element.id).on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $(".dropdown-menu li").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    }
    
});