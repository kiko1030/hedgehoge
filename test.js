$(function(){
    $('button').on('click',function(){
        if($(".type").text() === 'cookie'){
            $(".type").text('cake');
        }else{
            $(".type").text('cookie');
        }
    });

    $('select').change(function(){
        if($('option:selected').text() === 'select here'){
            $(".type").text('');
        }else{
            $(".type").html($('option:selected').text()+'<img class="text-center" src="'+$('option:selected').text()+'.png">');        
        }
    });
});