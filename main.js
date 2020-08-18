$(function() {
    // debugger;

    console.log("ready!");
    addEvents();
});

function addEvents() {
    let $buttonElement = $("#submitButton");
    $buttonElement.on("click", buttonClickHandler);
   


    function buttonClickHandler() {
        
        let $firstNameElement = $("#firstName");
        let $lastNameElement = $("#lastName");
        let $gender = $(".gender");
        let $textArea = $("#textArea");



        if($firstNameElement.val() === "" || $lastNameElement.val() === "" || $gender.val() !== "checked"  ){
            // console.log("Empty value");
            $firstNameElement.addClass("invalidInput");
            $lastNameElement.addClass("invalidInput");
            $gender.addClass("invalidInput");
            $textArea.addClass("invalidInput");

            
        } else {
            // Adaugare element nou si "lipirea" lui de input
            // let $newElement = $(`<div>Hello, ${$firstNameElement.val()} </div>`);
            // let $newElement = $('<div>Hello, ' + $firstNameElement.val() + '</div>');
            let $newElement = $('<div>Thank you for contacting us, </div>');

            console.log($newElement.html());

            $newElement.html($newElement.html() +$firstNameElement.val());
            
            // $newElement.append($firstNameElement.val());
        
            $('form').append($newElement);


            console.log($newElement);
            // console.log("Non empty value");
            $firstNameElement.removeClass("invalidInput");
        }
    }
    // console.log($buttonElement);

    


   
}





