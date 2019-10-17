$(document).ready(function () {
    $("#BtnContactUs").click(function () {
        var $ContactNameRegEx = /^([a-zA-Z]{2,20})$/;
        var $ContactNoRegEx = /^([0-9]{10})$/;
        var $ContactEmailIdRegEx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var CNumberFlag = true;
        var CNameFlag = true;
        var CEmailFlag = true;

        if ($("#TxtCFName").val() == "") {
            $("#NameSmall").empty();
            $("#NameSmall").html('(*) First Name Required..!!');
        }
        else {
            $("#NameSmall").empty();
            if (!$("#TxtCFName").val().match($ContactNameRegEx)) {
                UNameFlag = false;
                $("#NameSmall").html('Invalid Username..!!');
            }
            else {
                CNameFlag = true;
            }
        }

        if ($("#TxtCFContactNo").val() == "") {
            $("#CFContactNoSmall").empty();
            $("#CFContactNoSmall").html('(*) Contact No. Required..!!');
        }
        else {
            $("#CFContactNoSmall").empty();
            if (!$("#TxtCFContactNo").val().match($ContactNoRegEx)) {
                ContactNoFlag = false;
                $("#CFContactNoSmall").html('Invalid Contact No..!!');
            }
            else {
                CNumberFlag = true;
            }
        }

        if ($("#TxtCFEmailId").val() == "") {
            $("#EmailSmall").empty();
            $("#EmailSmall").html('(*) Email Id Required..!!');
        }
        else {
            $("#EmailSmall").empty();
            if (!$("#TxtCFEmailId").val().match($ContactEmailIdRegEx)) {
                EmailIdFlag = false;
                $("#EmailSmall").html('Invalid Email Id..!!');
            }
            else {
                CEmailFlag = true;
            }
        }
        if ($("#TxtCFMessage").val() == "") {
            $("#MessageSmall").empty();
            $("#MessageSmall").html('(*)Please Enter the Message..!!');
        }
        else {
            $("#MessageSmall").empty();
        }

        if ($("#TxtCFName").val() != "" && CNameFlag == true && $("#TxtCFContactNo").val() != "" && ContactNoFlag == true && $("#TxtCFEmailId").val() != "" && EmailFlag == true && $("#TxtCFMessage").val() != "")
            window.location.href = "file:///D:/javaweb/VRegans/HomePage.htm#";
        else
            alert("Invalid Input..!!");
    });

});
 function ClearAllFields() {

                $("#TxtCFName").val("");
                $("#TxtCFEmailId").val("");
                $("#TxtCFContactNo").val("");
				$("#TxtCFMessage").val("");
                $("#NameSmall").empty();
                $("#EmailSmall").empty();
                $("#CFContactNoSmall").empty();
				$("#MessageSmall").empty();
				
            }