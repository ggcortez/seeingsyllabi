$(document).ready(function() {
    $("#submit").click(function() {
        $("#content").removeClass("hide");
        $("#content").addClass("show");
    });
    //Show/hide "extra" div
    $("#extraButton").click(function() {
        if ($("#extra").attr("class") == "hide") {
            $("#extra").removeClass("hide");
            $("#extra").addClass("show");
        } else if ($("#extra").attr("class") == "show") {

            $("#extra").removeClass("show");
            $("#extra").addClass("hide");
        }
    });
    //anon function to show/hide placeholder text in text fields
        $('input[type="text"]').each(function() {

            this.value = $(this).attr('placeholder');

            $(this).focus(function() {
                if (this.value == $(this).attr('placeholder')) {
                    this.value = '';
                }
            });

            $(this).blur(function() {
                if (this.value == '') {
                    this.value = $(this).attr('placeholder');
                }
            });
        });
});