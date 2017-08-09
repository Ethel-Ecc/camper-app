$(document).ready(function () {
    $("h4").addClass("animated bounce");
    $("#resourcesNav").click( function () {
        $("html, body").animate({
            scrollTop:$("#resources").offset().top}, 800);
    });
    $("#userStoriesNav").click( function () {
        $("html, body").animate({
            scrollTop:$("#userStories").offset().top}, 800);
    });
    $("#aboutNav").click( function () {
        $("html, body").animate({
            scrollTop:$("#about").offset().top}, 800);
    });
});
