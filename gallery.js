(function() {  
    "use strict";  
    var init = function() {  
          
        var troverGallery = $('.wrapper'),  
            buttons = $('.js-button-move'),  
            gallerPhoto = $('.gallery');  
  
        var index = 0;  
        var nr_photos = gallerPhoto.length;  
  
        var clickHandler = function(element) {  
            var direction = $(element).data("direction");  
            if(direction == "left") {  
                index--;  
            }  
            else {  
                index++;  
            }  
  
            gallerPhoto.removeClass("currentImg");  
  
            if(index < 0) {  
                index = (nr_photos - 1);  
            }  
            if(index == nr_photos) {  
                index = 0;  
            }  
  
            gallerPhoto.eq(index).addClass("currentImg");  
  
  
        }  
  
        buttons.click(clickHandler);  
          
    };  
    return {  
        init: init  
    };  
})();