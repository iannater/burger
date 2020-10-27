$(document).ready(function(){
//submit event
    $(".devouredForm").on('submit', function(e){
        e.preventDefault();
        //capture the burger id we are clicking on
        var burgerId = $(this).children(".burger_id").val();

        //set ajax PUT method call
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burgerId
        }).then(function(data){
            location.reload();
        })


    })

})