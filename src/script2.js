const arrProduct = []; //array of products
function funct() {
    var id =document.getElementById("pid").value;
    var name =document.getElementById("pname").value;
    var price =document.getElementById("pprice").value;
    console.log(id,name,price)
    
if (id && name && price) {
    if (arrProduct.find((x) => x.id == id)) {
        alert("enter unique id")
        return;
        }
    
        arrProduct.push({id:id,name:name,price:price});
        addElement(arrProduct);
    
    }else {
        alert("Please fill all the details");}
      
 }    

function addElement(arr) {
    var table =
        "<table> <tr><th>Product Id</th><th>Product Name</th><th>Product Price</th></tr> ";
    for (let i = 0; i < arr.length; i++) {//printing the full array
        console.log(arr[i]);
        table +=
            "<tr><td>" +
            arr[i].id +
            "</td><td>" +
            arr[i].name +
            "</td><td>" +
            "USD" +arr[i].price +"</td><td>" +
            '<a href="#" onclick=EditForm(arr[i].id)>Edit</a>' +
            "</td></tr>";
    }
    document.getElementById("table").innerHTML = table + "</table>";
}
