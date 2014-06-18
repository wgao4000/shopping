$(document).ready(function(){
	var new_item,price_per,quantity_per;
	$('.enteritem').keydown(function(event){
	    if(event.which==13){
			event.preventDefault(); 
			new_item=$('.enteritem').val();
            $('#shopping_list').append("<div class='rows'><span class='newitems'><input type='checkbox' name='shoplist', value="+new_item+">"+new_item.substring(0,1).toUpperCase()+new_item.substring(1)+"</span><label for='"+new_item+"P'>Price $</label> <input type='text' id='"+new_item+"P'> <label for='"+new_item+"Q'>Quantity</label> <input type='text' id='"+new_item+"Q'><button class='"+new_item+"B'>permanently remove</button></div><br>");
		}
	});
	$('.thisP').keydown(function(event){
	    if(event.which==13){
			event.preventDefault(); 
			price_per=$('.thisP').val();
			alert(price_per);
         }   
	});
	$('.thisQ').keydown(function(event){
	    if(event.which==13){
			event.preventDefault(); 
			quantity_per=$('.thisQ').val();
            alert(quantity_per);
		}
	});
	alert(price_per*quantity_per);
    $('.thisB').on("click",function(){
		    alert('good');
         //   $('.rows').remove();  
	});
});