$(document).ready(function () {

    $("#helmetInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li.helmet-li ").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".helmet-li").on("click", function(){
        $(".helmet-li").css("display","list-item");
        $("#helmetInput").val('');
    });

    $("#shoulderInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li.shoulder-li ").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".shoulder-li").on("click", function(){
        $(".shoulder-li").css("display","list-item");
        $("#shoulderInput").val('');
    });

    $("#chestInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li.chest-li ").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".chest-li").on("click", function(){
        $(".chest-li").css("display","list-item");
        $("#chestInput").val('');
    });

    $("#forearmInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li.forearm-li ").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".forearm-li").on("click", function(){
        $(".forearm-li").css("display","list-item");
        $("#forearmInput").val('');
    });

    $("#swordInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li.sword-li ").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".sword-li").on("click", function(){
        $(".sword-li").css("display","list-item");
        $("#swordInput").val('');
    });

    $("#pantsInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li.pants-li ").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".pants-li").on("click", function(){
        $(".pants-li").css("display","list-item");
        $("#pantsInput").val('');
    });

    $("#tassetInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li.tassets-li ").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".tassets-li").on("click", function(){
        $(".tassets-li").css("display","list-item");
        $("#tassetInput").val('');
    });

    $("#beltInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li.belt-li ").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".belt-li").on("click", function(){
        $(".belt-li").css("display","list-item");
        $("#beltInput").val('');
    });

    $("#bootsInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li.boots-li ").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".boots-li").on("click", function(){
        $(".boots-li").css("display","list-item");
        $("#bootsInput").val('');
    });

    $("#mountInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li.mount-li ").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".mount-li").on("click", function(){
        $(".mount-li").css("display","list-item");
        $("#mountInput").val('');
    });
    
}); 