$(document).ready(function(){
	var new_item,price_per,quantity_per,total=0.00,old_price=0.00,old_quantity=0.00;
	var allitems=[];
  $('.enteritem').keydown(function(event){
	    if(event.which==13){
			    event.preventDefault(); 
          if(isNaN($('.enteritem').val())){
			     new_item=$('.enteritem').val();
           allitems.push(new_item);
           $('#shopping_list').append("<div class='rows"+new_item+"'><span class='newitems'><input type='checkbox' name='shoplist' id='check"+new_item+"' checked value="+new_item+">"+new_item.substring(0,1).toUpperCase()+new_item.substring(1)+"</span><label for='"+new_item+"P'>Price $</label> <input type='text' id='"+new_item+"P'> <label for='"+new_item+"Q'>Quantity</label> <input type='text' id='"+new_item+"Q'><input type='hidden' id='"+new_item+"H' value='0.00'><button class='buttons' id='"+new_item+"U'>update</button><button class='buttons' id='"+new_item+"B'>permanently remove</button></div><br>");
          }
       }
  });     
  $(document).on("click",".buttons",function(){
        selecteditem=$(this).attr("id");
        if($("#check"+selecteditem.substring(0,selecteditem.length-1)).is(':checked')){
          if((isNaN($("#"+selecteditem.substring(0,selecteditem.length-1)+"P").val()) ||isNaN($("#"+selecteditem.substring(0,selecteditem.length-1)+"Q").val())) && (selecteditem.substr(-1)!="B"))
           alert("Please enter a valid price and quantity");
          else{  
           if(selecteditem.substr(-1)=="U"){
            price_per=parseFloat($("#"+selecteditem.substring(0,selecteditem.length-1)+"P").val());
            quantity_per=parseFloat($("#"+selecteditem.substring(0,selecteditem.length-1)+"Q").val());
            total=total+price_per*quantity_per-parseFloat($("#"+selecteditem.substring(0,selecteditem.length-1)+"H").val());
            price_de=price_per*quantity_per;
            if(isNaN(price_de))
               total=0.00;
            $("#"+selecteditem.substring(0,selecteditem.length-1)+"H").val(price_de);
            if(isNaN(total))
               total=0.00;  
            $(".sales").replaceWith("<div class='sales'><br>Subtotal: $"+total.toFixed(2)+"<br>Tax: [MA @ 6.25%]: $"+(total*0.0625).toFixed(2)+"<br>Purchase Price: $"+(total*1.0625).toFixed(2)+"</div>");
           }
           else if(selecteditem.substr(-1)=="B"){
            price_per=parseFloat($("#"+selecteditem.substring(0,selecteditem.length-1)+"P").val());
            quantity_per=parseFloat($("#"+selecteditem.substring(0,selecteditem.length-1)+"Q").val());
            if(isNaN(price_per) || isNaN(price_per))
              ;
            else
             total=total-price_per*quantity_per;
            $(".sales").replaceWith("<div class='sales'><br>Subtotal: $"+total.toFixed(2)+"<br>Tax: [MA @ 6.25%]: $"+(total*0.0625).toFixed(2)+"<br>Purchase Price: $"+(total*1.0625).toFixed(2)+"</div>");
            $(".rows"+selecteditem.substring(0,selecteditem.length-1)).remove();
          }
         } 
        }
        else
           alert("Please check the box in front of the item to proceed.")
   });
});