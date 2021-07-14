

$(document).ready(function (){
    
    window.onbeforeunload = function(){
        let elements = $('.watched-form input[type=text], .watched-form input[type=number], .watched-form textarea');
        let isUnsavedElements = false;
    
          for (let index = 0; index < elements.length; index++) 
            if(elements[index].value != '')
                isUnsavedElements = true;
        
        return isUnsavedElements ? 'Возможно введенные данные не сохранятся' : null;
    };

})