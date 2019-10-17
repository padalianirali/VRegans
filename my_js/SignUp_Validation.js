$(document).ready(function () {
    $("#TxtFName").blur(function () {
        var $FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;
        if ($("#TxtFName").val() == "") {
            $("#FirstNameSmall").empty();
            $("#FirstNameSmall").html('(*) First Name Required..!!');
        }
        else {
            $("#FirstNameSmall").empty();
            if (!$("#TxtFName").val().match($FNameLNameRegEx)) {
                $("#FirstNameSmall").html('Invalid First Name..!!');
            }
        }
    });

    $("#TxtLName").blur(function () {
        var $FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;
        if ($("#TxtLName").val() == "") {
            $("#LastNameSmall").empty();
            $("#LastNameSmall").html('(*) Last Name Required..!!');
        }
        else {
            $("#LastNameSmall").empty();
            if (!$("#TxtLName").val().match($FNameLNameRegEx)) {
                $("#LastNameSmall").html('Invalid Last Name..!!');
            }
        }
    });
    $("#TxtEmailId").blur(function () {
        var $EmailIdRegEx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if ($("#TxtEmailId").val() == "") {
            $("#EmailIdSmall").empty();
            $("#EmailIdSmall").html('(*) Email Id Required..!!');
        }
        else {
            $("#EmailIdSmall").empty();
            if (!$("#TxtEmailId").val().match($EmailIdRegEx)) {
                $("#EmailIdSmall").html('Invalid Email Id..!!');
            }
        }
    });
    $("#TxtConNo").blur(function () {
        var $ConNoRegEx = /^([0-9]{10})$/;
        if ($("#TxtConNo").val() == "") {
            $("#ContactNoSmall").empty();
            $("#ContactNoSmall").html('(*) Contact No. Required..!!');
        }
        else {
            $("#ContactNoSmall").empty();
            if (!$("#TxtConNo").val().match($ConNoRegEx)) {
                $("#ContactNoSmall").html('Invalid Contact No..!!');
            }
        }
    });
    $("#TxtPassword").blur(function () {
        var $UserPassword = /^.*(?=.{8,12})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
        if ($("#TxtPassword").val() == "") {
            $("#PasswordSmall").empty();
            $("#PasswordSmall").html('(*) Password Required..!!');
        }
        else {
            $("#PasswordSmall").empty();
            if (!$("#TxtPassword").val().match($UserPassword)) {
                PasswordFlag = false;
                $("#PasswordSmall").html('Must be at least 8 characters required.');
            }
            else {
                PasswordFlag = true;
            }
        }
    });

    $("#TxtConPassword").blur(function () {
        if ($("#TxtConPassword").val() == "") {
            $("#ConPasswordSmall").empty();
            $("#ConPasswordSmall").html('(*)Confirm Password Required..!!');
        }
        else {
            $("#ConPasswordSmall").empty();
            var password = document.getElementById("TxtPassword").value;
            var confirmPassword = document.getElementById("TxtConPassword").value;
            if (password != confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }
            return true;
        }
    });
    $("#TxtAddress").blur(function () {
        if ($("#TxtAddress").val() == "") {
            $("#AddressSmall").empty();
            $("#AddressSmall").html('(*) Address Required..!!');
        }
        else {
            $("#AddressSmall").empty();
        }
    });
    $("#TxtCity").blur(function () {
        if ($("#TxtCity").val() == "") {
            $("#CitySmall").empty();
            $("#CitySmall").html('(*) City Required..!!');
        }
        else {
            $("#CitySmall").empty();
        }
    });
    $("#TxtState").blur(function () {
        if ($("#TxtState").val() == "") {
            $("#StateSmall").empty();
            $("#StateSmall").html('(*) State Required..!!');
        }
        else {
            $("#StateSmall").empty();
        }
    });
    $("#TxtZipcode").blur(function () {
        if ($("#TxtZipcode").val() == "") {
            $("#ZipcodeSmall").empty();
            $("#ZipcodeSmall").html('(*) Zipcode Required..!!');
        }
        else {
            $("#ZipcodeSmall").empty();
        }
    });
    $("#TxtCountry").blur(function () {
        if ($("#TxtCountry").val() == "") {
            $("#CountrySmall").empty();
            $("#CountrySmall").html('(*) Country Required..!!');
        }
        else {
            $("#CountrySmall").empty();
        }
    });
    $("#BtnSignUp").click(function () {
        var $FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;
        var $EmailIdRegEx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var $ConNoRegEx = /^([0-9]{10})$/;
        var $UserPassword = /^.*(?=.{8,12})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
        var ContactNoFlag = true;
        var EmailIdFlag = true;
        var FNameFlag = true;
        var LNameFlag = true;
        if ($("#TxtFName").val() == "") {
            $("#FirstNameSmall").empty();
            $("#FirstNameSmall").html('(*) First Name Required..!!');
        }
        else {
            $("#FirstNameSmall").empty();
            if (!$("#TxtFName").val().match($FNameLNameRegEx)) {
                $("#FirstNameSmall").html('Invalid First Name..!!');
                FNameFlag = false;
            }
            else {
                FNameFlag = true;
            }
        }
        if ($("#TxtLName").val() == "") {
            $("#LastNameSmall").empty();
            $("#LastNameSmall").html('(*) Last Name Required..!!');
        }
        else {
            $("#LastNameSmall").empty();
            if (!$("#TxtLName").val().match($FNameLNameRegEx)) {
                $("#LastNameSmall").html('Invalid Last Name..!!');
                LNameFlag = false;
            }
            else {
                LNameFlag = true;
            }
        }
        if ($("#TxtEmailId").val() == "") {
            $("#EmailIdSmall").empty();
            $("#EmailIdSmall").html('(*) Email Id Required..!!');
        }
        else {
            $("#EmailIdSmall").empty();
            if (!$("#TxtEmailId").val().match($EmailIdRegEx)) {
                EmailIdFlag = false;
                $("#EmailIdSmall").html('Invalid Email Id..!!');
            }
            else {
                EmailIdFlag = true;
            }
        }
        if ($("#TxtConNo").val() == "") {
            $("#ContactNoSmall").empty();
            $("#ContactNoSmall").html('(*) Contact No. Required..!!');
        }
        else {
            $("#ContactNoSmall").empty();
            if (!$("#TxtConNo").val().match($ConNoRegEx)) {
                ContactNoFlag = false;
                $("#ContactNoSmall").html('Invalid Contact No..!!');
            }
            else {
                ContactNoFlag = true;
            }
        }
        if ($("#TxtPassword").val() == "") {
            $("#PasswordSmall").empty();
            $("#PasswordSmall").html('(*) Password Required..!!');
        }
        else {
            $("#PasswordSmall").empty();
            if (!$("#TxtPassword").val().match($UserPassword)) {
                PasswordFlag = false;
                $("#PasswordSmall").html('At least 8 characters required.');
            }
            else {
                PasswordFlag = true;
            }
        }
        if ($("#TxtConPassword").val() == "") {
            $("#ConPasswordSmall").empty();
            $("#ConPasswordSmall").html('(*)Confirm Password Required..!!');
        }
        else {
            $("#ConPasswordSmall").empty();
            var password = document.getElementById("TxtPassword").value;
            var confirmPassword = document.getElementById("TxtConPassword").value;
            if (password != confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }
            return true;
        }
        if ($("#TxtAddress").val() == "") {
            $("#AddressSmall").empty();
            $("#AddressSmall").html('(*) Address Required..!!');
        }
        else {
            $("#AddressSmall").empty();
        }
        if ($("#TxtCity").val() == "") {
            $("#CitySmall").empty();
            $("#CitySmall").html('(*) City Required..!!');
        }
        else {
            $("#CitySmall").empty();
        }

        if ($("#TxtState").val() == "") {
            $("#StateSmall").empty();
            $("#StateSmall").html('(*) State Required..!!');
        }
        else {
            $("#StateSmall").empty();
        }

        if ($("#TxtZipcode").val() == "") {
            $("#ZipcodeSmall").empty();
            $("#ZipcodeSmall").html('(*) Zipcode Required..!!');
        }
        else {
            $("#ZipcodeSmall").empty();
        }

        if ($("#TxtCountry").val() == "") {
            $("#CountrySmall").empty();
            $("#CountrySmall").html('(*) Country Required..!!');
        }
        else {
            $("#CountrySmall").empty();
        }

        if (!$("#CkbTerms").is(':checked')) {
            $("#TermsSmall").empty();
            $("#TermsSmall").html('(*) ..please accept T&C!!');
        }
        else {
            $("#TermsSmall").empty();
        }

        if ($("#TxtFName").val() != "" && FNameFlag == true && $("#TxtLName").val() != "" && LNameFlag == true && $("#TxtEmailId").val() != "" && EmailIdFlag == true && $("#TxtConNo").val() != "" && ContactNoFlag == true && $("#TxtPassword").val() != "" && PasswordFlag == true && $("#TxtConPassword").val() != "" && $("#TxtAddress").val() != "" && $("#TxtCity").val() != "" && $("#TxtState").val() != "" && $("#TxtZipcode").val() != "" && $("#TxtCountry").val() != "" && $("#TxtZipcode").val() != "") {
            confirm("login Successfull");
        }
        else
        {
            alert("Invalid Input..!!");
        }
    });
});
  function Clear() {

                $("#TxtFName").val("");
                $("#TxtLName").val("");
                $("#TxtEmailId").val("");
                $("#TxtConNo").val("");
				$("#TxtPassword").val("");
				$("#TxtConPassword").val("");
				$("#TxtAddress").val("");
				$("#TxtCity").val("");
				$("#TxtState").val("");
				$("#TxtZipcode").val("");
				$("#TxtCountry").val("");
				$("#CkbTerms").attr('checked',false);
				
                $("#FirstNameSmall").empty();
                $("#LastNameSmall").empty();
                $("#EmailIdSmall").empty();
                $("#ContactNoSmall").empty();
				$("#ConPasswordSmall").empty();
				$("#AddressSmall").empty();
				$("#CitySmall").empty();
				$("#StateSmall").empty();
				$("#ZipcodeSmall").empty();
				$("#CountrySmall").empty();
				$("#TermsSmall").empty();
				$("#PasswordSmall").empty();
				$("#TermsSmall").empty();
				
            }