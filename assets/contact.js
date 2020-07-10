$(document).ready(function () {
    $("#submit").click(function () {
        $("#fr1").attr(
            "action",
            "mailto:jyzhu0101@gmail.com?subject=" +
                $("#subject").val() +
                "&body=" +
                $("#text").val()
        );
        $("#fr1").submit();
    });
});
