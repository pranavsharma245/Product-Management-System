let products=[];
let productcode=document.getElementById("product-code");
let productname=document.getElementById("product-name");
let productprice=document.getElementById("product-price");
let productquantity=document.getElementById("product-quantity");
let btn=document.getElementById("btn");
let table=document.getElementById("table");

btn.addEventListener("click",()=>{
   product={
    Code:productcode.value,
    Name:productname.value,
    Price:productprice.value,
    Quantity:productquantity.value,
   }
   if(product.Code==""||product.Name==""||product.Price==""||product.Quantity==""){
    alert("Enter all the details")
    return;
   }
   let price = Number(productprice.value);
   let quantity = Number(productquantity.value);

if (isNaN(price) || isNaN(quantity)) {
    alert("Price and Quantity must be numbers.");
    return;
}
if(product.Price<=0 || product.Quantity<=0){
    alert("please enter valid details")
    return;
   }
   products.push(product);
   table.innerHTML=`
             <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Amount</th>
             </tr>`
    products.forEach(val => {
    
    table.innerHTML+=`    
        <tr>
            <td>${val.Code}</td>
            <td>${val.Name}</td>
            <td>${val.Price}</td>
            <td>${val.Quantity}</td>
            <td>${val.Quantity*val.Price}</td>
            <td></td>
        </tr>`
    })
    productcode.value=""
    productname.value=""
    productprice.value=""
    productquantity.value=""
    
})
