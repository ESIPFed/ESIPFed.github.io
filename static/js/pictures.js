function getPictures(){
        var regExp = /\(([^)]+)\)/;
        
        var picturesHTML = '<div class="flexslider"><ul class="slides">';

        $.get("https://github.com/abburgess/ESIPFed.github.io/issues/1", function(pic_data){
        pic_data = pic_data.body.split("\r\n");

        var numPics = pic_data.length, pictures;

        for(var i=0; i<numPics; i++){
                pictures = pic_data[i];
                var ech_pic = regExp.exec(pictures);
                var p = ech_pic[1];
                picturesHTML += "<li><img src=" + p + "></li>";
        }
        picturesHTML += "</ul></div>"
        $('#pictures').html(picturesHTML);
        });
}
