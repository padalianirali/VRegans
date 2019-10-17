
            $(document).ready(function () {
				$("#BtnLogIn").click(function () {
                    var $UsernameRegEx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                    var $UserPassword = /^.*(?=.{8,12})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
                    var UNameFlag = true;
                    var PasswordFlag = true;
                    if ($("#TxtUsername").val() == "") {
                        $("#UsernameSmall").empty();
                        $("#UsernameSmall").html('(*) Username Required..!!');
                    }
                    else {
                        $("#UsernameSmall").empty();
                        if (!$("#TxtUsername").val().match($UsernameRegEx)) {
                            UNameFlag = false;
                            $("#UsernameSmall").html('Invalid Username..!!');
                        }
                        else {
                            UNameFlag = true;
                        }
                    }
                    if ($("#TxtUPassword").val() == "") {
                        $("#UPasswordSmall").empty();
                        $("#UPasswordSmall").html('(*) Password Required..!!');
                    }
                    else {
                        $("#UPasswordSmall").empty();
                        if (!$("#TxtUPassword").val().match($UserPassword)) {
                            PasswordFlag = false;
                            $("#UPasswordSmall").html('(1) Must be at least 8 characters required.<br/>(2) At least 1 number - 1 lowercase & 1 uppercase letter required.<br/>(3) At least 1 special character from @#$%&. required.');
                        }
                        else {
                            PasswordFlag = true;
                        }
                    }
                    if ($("#TxtUsername").val() != "" && $("#TxtUPassword").val() != "" && UNameFlag == true && PasswordFlag == true) {
                        MemberSignIn($("#TxtUsername").val().trim(), $("#TxtUPassword").val().trim());
                    }
                });
				
				 $("#BtnSendPassword").click(function () {
                    var $FPEmailIdRegEx = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
                    if ($("#TxtFPEmailId").val() == "") {
                        $("#FPEmailIdSmall").empty();
                        $("#FPEmailIdSmall").html('(*) Username (Email Id) Required..!!');
                    }
                    else {
                        $("#FPEmailIdSmall").empty();
                        if (!$("#TxtFPEmailId").val().match($FPEmailIdRegEx))
                            $("#FPEmailIdSmall").html('Invalid Username (Email Id)..!!');
                    }
				});
			});
			
			 function ClearFields() {
                $("#TxtUsername").val("");
                $("#TxtUPassword").val("");
                $("#UsernameSmall").empty();
                $("#UPasswordSmall").empty();

                $("#TxtFPEmailId").val("");
                $("#FPEmailIdSmall").empty();
            }