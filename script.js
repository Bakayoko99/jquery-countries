
$(function(){
    
    $("button").click(function(){
        
        $.ajax({
            url: 'http://localhost:8001/countries', 
            success: function(data, status, response){
                return data
            }
        })

        $("#country-1").html()
        $("#country-2").html()
        $("#country-3").html()
        $("#country-4").html()
        $("#country-5").html()

        
    })
})