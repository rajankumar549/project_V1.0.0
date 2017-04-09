$(document).ready(function () {

    $('#q1').waypoint(function () {
        $("#q1").delay(1000).addClass('fadeInUpBig');
    }, { offset: '100%' });

    $('#q2').waypoint(function () {
        $("#q2").delay(50000).addClass('fadeInDownBig');
    }, { offset: '100%' });

    $('#prog').waypoint(function () {
        $("#prog").delay(50000).addClass('zoomInLeft');
    }, { offset: '100%' });
    $('#fra').waypoint(function () {
        $("#fra").delay(50000).addClass('zoomInUp');
    }, { offset: '100%' });

    $('#oth').waypoint(function () {
        $("#oth").delay(50000).addClass('zoomInRight');
    }, { offset: '100%' });

    $('#qua').waypoint(function () {
        $("#qua").delay(50000).addClass('lightSpeedIn');
    }, { offset: '100%' });

    $('#abo').waypoint(function () {
        $("#abo").delay(50000).addClass('lightSpeedIn');
    }, { offset: '100%' });

    $('#ski').waypoint(function () {
        $("#ski").delay(50000).addClass('lightSpeedIn');
    }, { offset: '100%' });


    /*work*/
    $('#wor').waypoint(function () {
        $("#wor").delay(50000).addClass('lightSpeedIn');
    }, { offset: '100%' });

    $('#w1').waypoint(function () {
        $("#w1").delay(50000).addClass('lightSpeedIn');
    }, { offset: '100%' });
    $('#w2').waypoint(function () {
        $("#w2").delay(50000).addClass('lightSpeedIn');
    }, { offset: '100%' });
    $('#w3').waypoint(function () {
        $("#w3").delay(50000).addClass('lightSpeedIn');
    }, { offset: '100%' });

    /*certificate*/
    $('#cer').waypoint(function () {
        $("#cer").delay(50000).addClass('lightSpeedIn');
    }, { offset: '100%' });
    $('table').waypoint(function () {
        $("table").delay(50000).addClass('slideInUp');
    }, { offset: '100%' });

   


/*validation*/
    function validate() {
        var firstname = $('#name').val().toString();
        //var lastname = $('#lname').val().toString();
        //var physics = $('#phy').val().toString();
        //var chem = $('#chem').val().toString();
        //var overall = $('#overall').val().toString();
        //var maths = $('#maths').val().toString();
        //var file = $('#fileupload').val().toString();
        //var roll = $('#rollno').val().toString();
        //// Initializing Variables With Regular Expressions
        //var regex = /^([a-zA-Z]{3,16})$/;
        //var alphaNumeric = /^([A-Z0-9]{5,10})$/;

        //var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        //var add_regex = /^[0-9a-zA-Z]+$/;
        //var float = /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/;

        ////firstname
        if (!regex.test(firstname)) {
            $("#name").focus();
            $("#name").val("");
            $("#name").css("border-color", "red");
            // alert(firstname);
            return false;
        }
        return true;
    }
});