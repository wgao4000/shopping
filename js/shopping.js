$(document).ready(function(){
	var new_item,price_per,quantity_per,total=0.00;
	var allitems=[];
	var allprices=[];
	var allquantities=[];
	$('.enteritem').keydown(function(event){
	    var flag=true;
	    if(event.which==13){
			event.preventDefault(); 
			new_item=$('.enteritem').val();
            allitems.push("."+new_item+"B");
            allprices.push("#"+new_item+"P");
            allquantities.push("#"+new_item+"Q");
            $('#shopping_list').append("<div class='rows"+new_item+"'><span class='newitems'><input type='checkbox' name='shoplist',id='check"+new_item+"' checked value="+new_item+">"+new_item.substring(0,1).toUpperCase()+new_item.substring(1)+"</span><label for='"+new_item+"P'>Price $</label> <input type='text' id='"+new_item+"P'> <label for='"+new_item+"Q'>Quantity</label> <input type='text' id='"+new_item+"Q'><button class='"+new_item+"B'>permanently remove</button></div><br>");
        }
        
        $("button").click(function(){
          var buttonvalue=String($(this).attr("class"));
          $.each(allitems,function(item,value){
        	if(String(value)==("."+buttonvalue)){
              alert("#"+String(value).substring(1,String(value).length-1)+"P");
              alert("tgtg1"+$("#"+String(value).substring(1,String(value).length-1)+"P").val());
              var selectprice=$("#"+String(value).substring(1,String(value).length-1)+"P").val();
              var selectquantity=$("#"+String(value).substring(1,String(value).length-1)+"Q").val();
              alert("tgtg1"+(String(value).substring(1,String(value).length-1)+"Q"));
              alert("tgtg"+$("#"+String(value).substring(1,String(value).length-1)+"Q").val());
              total=total-parseFloat(selectprice)*parseFloat(selectquantity);
              $(".rows"+String(value).substring(1,String(value).length-1)).remove();
              $(".sales").replaceWith("<div class='sales'><br>Subtotal: "+total.toFixed(2)+"<br>Tax: [MA @ 6.25%]: "+(total*0.0625).toFixed(2)+"<br>Purchase Price: "+(total*1.0625).toFixed(2)+"</div>");
              flag=false;
              return false;
           }
          });
          return flag; 
         });
        $.each(allprices,function(item,value){ 
          $(String(value)).keydown(function(event){
	           if(event.which==13){
			         event.preventDefault(); 
			         price_per=$(String(value)).val();
               alert(price_per);
		         }
	        });
	     });
          $.each(allquantities,function(item,value){ 
           $(String(value)).keydown(function(event){
	        if(event.which==13){
			 event.preventDefault(); 
			 quantity_per=$(String(value)).val();
             alert(quantity_per);
           // alert($("#checkthis").is(':checked'));
           //  if($("#checkthis").is(':checked')){
          	   total=total+parseFloat(price_per)*parseFloat(quantity_per);
          	   alert(total);
          	   alert("haha");
          	//   $("#submitbutton").before("<div class='sale1'>tttttttt"+total+"</div>");
          }
          $(".sales").replaceWith("<div class='sales'><br>Subtotal: "+total.toFixed(2)+"<br>Tax: [MA @ 6.25%]: "+(total*0.0625).toFixed(2)+"<br>Purchase Price: "+(total*1.0625).toFixed(2)+"</div>");
	      });
      });
        /*  if($("#checkthis").is(':checked')){
          	total=total+price_per*quantity_per;
          	alert(total);
          }*/
        });  
    $(".ThatB").click(function(){
               alert("button with the id: "+$(this).attr("class")+" was clicked!");
          });
    $(document).on("click","."+new_item+"B",function(){
		    
         //   $('.rows').remove();  
   });
});