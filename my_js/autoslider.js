
$(document).ready(function () {

    var tn_array = ['images/FirstImage.jpg', 'images/SecondImage.jpg', 'images/ThirdImage.jpg', 'images/FourthImage.jpg', 'images/FifthImage.jpg', 'images/SixthImage.jpg'];

    $('#MainImage').attr('src', tn_array[0]);

    var lengthImages = tn_array.length;
    var CurrImage = 0;

    function NextMove() 
    {
        $('#MainImage').fadeOut(2000, function () {
            CurrImage += 1; // Update current image index
            $('#MainImage').attr('src', tn_array[CurrImage]); // set current image as Main image
        }).fadeIn(2000);
    };

    setInterval(function ()
    {
        if (CurrImage == lengthImages - 1) 
        {
            CurrImage = -1;
        }
        NextMove();
    },2000);
});
    
     
     
   