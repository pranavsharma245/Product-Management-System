let products = JSON.parse(localStorage.getItem("products")) || [];
let productcode=document.getElementById("product-code");
let productname=document.getElementById("product-name");
let productprice=document.getElementById("product-price");
let productquantity=document.getElementById("product-quantity");
let btn=document.getElementById("btn");
let table=document.getElementById("table");
let editidx=-1;
displayProduct();
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
   if(editidx==-1){
     products.push(product);
     localStorage.setItem("products", JSON.stringify(products));
     displayProduct();
   }
   else{
    products[editidx]=product
    localStorage.setItem("products", JSON.stringify(products));
    displayProduct();
    editidx=-1;
    btn.innerText="Add to cart"
    
   }
    productcode.value=""
    productname.value=""
    productprice.value=""
    productquantity.value=""
    
})
function displayProduct(){
   table.innerHTML=`
             <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Amount</th>
                <th>Action</th>
             </tr>`
    products.forEach((val,idx)=> {
    
    table.innerHTML+=`    
        <tr>
            <td>${val.Code}</td>
            <td>${val.Name}</td>
            <td>${val.Price}</td>
            <td>${val.Quantity}</td>
            <td>${val.Quantity*val.Price}</td>
            <td><button onclick="deleteproduct(${idx})">Delete</button>
            <button onclick="editproduct(${idx})">Edit</button></td>
        </tr>`
    })
}
function deleteproduct(idx){
        products.splice(idx,1);
        localStorage.setItem("products", JSON.stringify(products));
        displayProduct();
    
}
function editproduct(idx){
    editidx=idx;
    let product=products[idx];
    productcode.value=product.Code;
    productname.value=product.Name;
    productprice.value=product.Price;
    productquantity.value=product.Quantity;
   btn.innerText="Update"
}
