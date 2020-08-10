//Check off Specific todos by clicking
$("ul").on("click","li",function(){

    $(this).toggleClass("completed");

});

//Click on X to delete
$("ul").on("click","span",function(event){
    
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })

    event.stopPropogation();

});

$("input[type='text'").keypress(function(event){

    //check for enter key

    if(event.which === 13){

        var todoText = $(this).val();
        //Clear text
        $(this).val("");

        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> "+ todoText + "</li");

    }

});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});
