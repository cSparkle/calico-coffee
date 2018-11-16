$(document).ready(function(){
    $("#myDropdown").click(function(){
        $("#myDropdown").slideToggle();
    });

    $("button").click(function(){
        $("#myDropdown").slideToggle();
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});