// Array
var items = [1, 1, 1, 1, 1, 1];
var myCart = [];

//Total price
var totalPrice = 0;


var vegetables = ["Brinjal", "Potato", "Tomato", "Onion", "Capsicum", "Carrot"]
var vegetablesPrices = [20, 20, 30, 50, 40, 30];
var vegetablesImg = ["images/vegies/brinjal.jpg", "images/vegies/potato.jpg", "images/vegies/tomato.jpg", "images/vegies/onions.jpg", "images/vegies/capsium.jpg", "images/vegies/carrot.jpg"];


for (var index = 0; index < 6; index++) {
    $(".p-r").append(`<div class="col-md-4">
<div class="card m-4" style="width: 18rem;">
    <img src="${vegetablesImg[index]}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${vegetables[index]}</h5>
      <h5 class="card-title">${vegetablesPrices[index] + " Rupee"}</h5>


      <div class="input-group my-3">
        <input type="text" class="inp-${index} form-control" placeholder="${items[index]}" value="${items[index]}" aria-label="${items[index]}" aria-describedby="button-addon4">
        <div class="input-group-append" id="button-addon4">
          <button class="minus-${index} btn btn-danger" type="button">-</button>
          <button class="add-${index} btn btn-primary" type="button">+</button>
        </div>
      </div>
      
      <a class="${"b-" + vegetables[index]} btn btn-success">Add to Cart</a>
    </div>
  </div>
</div>`);


}

// Add to Cart button
for (let index = 0; index < vegetables.length; index++) {
    $(".b-" + vegetables[index]).click(function () {
        
        $(".list-group").append(`<li class="list-group-item">${vegetables[index]} - ${$(".inp-"+index).attr("value")}kg</li>`)
        myCart.push(vegetablesPrices[index] * items[index]);

        for (let index = 0; index < myCart.length; index++) {
            totalPrice = totalPrice  + myCart[index];
        }

        $(".totalP").text("Total Price: "+totalPrice)
    })

}

// add button
for (let index = 0; index < items.length; index++) {
    $(".add-" + index).click(function(){
        items[index] = items[index] + 1;
        $(".inp-"+ index).attr("value", items[index]);
    });
}

// minus button
for (let index = 0; index < items.length; index++) {
    $(".minus-" + index).click(function(){
        if (items[index] !== 1){
        items[index] = items[index] - 1;
        $(".inp-"+ index).attr("value", items[index]);
    }
    });
}

// Clear Items
$(".clearItems").click(function(){
    $(".list-group").slideUp().empty().slideDown();
    $(".totalP").text("Total Price: 0");
})


