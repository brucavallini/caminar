$(function () {
    $(".image-inside").click(function (e) {
        e.preventDefault();
        $("#modal").addClass("active");
    });

    $(".close").click(function () {
        $("#modal").removeClass("active");
    });

    $('.image-link').click(function () {
        var img = $(this).find('img').attr('src');
        var imgModal = $('.image-modal');

        imgModal.attr('src', img);
    });
});