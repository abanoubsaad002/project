let product = document.getElementById('product');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById("submit");

let mood = 'create';

let tmp;

// get total
function getTotal(){
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value)-+discount.value;
        total.innerHTML = result;
        total.style.background = '#008800';
    }else{
      total.innerHTML = '';
      total.style.background = '#ff0000';
    }
  } 
// create product
let datapro;
if(localStorage.producte != null){
  datapro = JSON.parse(localStorage.producte)
}else{
   datapro = [];
}

submit.onclick = function(){
  let newpro = {
    product:product.value.toLowerCase(),
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,      
    total:total.innerHTML,  
    count:count.value,    
    category:category.value.toLowerCase(), 
       
      }
  
      // count
      if(product.value!=''&&price.value!=''&&newpro.price>0 &&taxes.value!=''&&ads.value!=''&& newpro.count<101 &&category.value!='' ){ 
        if(mood === 'create' ){

        if(newpro.count > 1){
          for(let i=0 ; i<newpro.count; i++){
            datapro.push(newpro);
              }
            }else{
          datapro.push(newpro);
          }
      
       }else{ 
        datapro[tmp] = newpro;
        mood='create';
        submit.innerHTML='Create';
        count.style.display = 'block'
        
      }clearData()}

 
   // save locatstorage
      localStorage.setItem('producte', JSON.stringify(datapro));
  
    
     showData()
 
}

// clear inputs

function clearData(){
  product.value = '';
  price.value = '';
  taxes.value = '';
  ads.value = '';
  discount.value = '';
  total.innerHTML = '';
  count.value = '';
  category.value = '';
}

// read
function showData(){
  getTotal();
  let table = '';
  
     for(let i = 0; i <datapro.length;i++){
      
        table +=  `
           <tr>
             <td>${i+1}</td>
             <td>${datapro[i].product}</td>
             <td>${datapro[i].price}</td>
             <td>${datapro[i].taxes}</td>
             <td>${datapro[i].ads}</td>
             <td>${datapro[i].discount}</td>
             <td>${datapro[i].total}</td>
             <td>${datapro[i].category}</td>
             <td><button onclick="updateData(${i})" id= "update">update</button></td>
             <td><button onclick="deleteData(${i})" id= "delete">delete</button></td>
           </tr>`     ;

  }

  document.getElementById('ssss').innerHTML = table;
  let btnDelete = document.getElementById('deleteAll');
  if(datapro.length>0){
    btnDelete.innerHTML = `<button onclick = "deleteAll()"> delete All (${datapro.length})</button>`
  }else{
    btnDelete.innerHTML = '';
  }
} 
showData()

// delete

function deleteData(i)
{
  datapro.splice(i,1);
  localStorage.producte = JSON.stringify(datapro);
  showData()
}
function deleteAll(){
  localStorage.clear()
  datapro.splice(0)
  showData()

 }
// uptede
function updateData(i){
  product.value=datapro[i].product
  price.value=datapro[i].price
  taxes.value=datapro[i].taxes
  ads.value=datapro[i].ads
  discount.value=datapro[i].discount
  count.value=datapro[i].count
  category.value=datapro[i].category
  getTotal()
  count.style.display='none';
  submit.innerHTML='update'
  mood= 'update'
  tmp=i;
  scroll({
    top:0,
    behavior:"smooth"
  })
}
// search
let searchMood = 'product';
function getsearchMood(id){
  let search = document.getElementById('Search');
  
  if( id == 'searchproduct' ){
    searchMood = 'product';
  }else{  
    searchMood='category';
  }
  search.placeholder = 'Search By '+searchMood;
search.focus();
search.value = '';
showData();
}
function searchData(value){  
  let table = '';
  for(let i=0;i< datapro.length;i++){
    
    if(searchMood === 'product' ){
     
       if(datapro[i].product.includes(value.toLowerCase())){

          table +=  `
             <tr>
               <td>${i}</td>
               <td>${datapro[i].product}</td>
               <td>${datapro[i].price}</td>
               <td>${datapro[i].taxes}</td>
               <td>${datapro[i].ads}</td>
               <td>${datapro[i].discount}</td>
               <td>${datapro[i].total}</td>
               <td>${datapro[i].category}</td>
               <td><button onclick="updateData(${i})" id= "update">update</button></td>
               <td><button onclick="deleteData(${i})" id= "delete">delete</button></td>
             </tr>`     ;

      }
       }else{  
        if(datapro[i].category.includes(value.toLowerCase())){
         
          table +=  `
             <tr>
               <td>${i}</td>
               <td>${datapro[i].product}</td>
               <td>${datapro[i].price}</td>
               <td>${datapro[i].taxes}</td>
               <td>${datapro[i].ads}</td>
               <td>${datapro[i].discount}</td>
               <td>${datapro[i].total}</td>
               <td>${datapro[i].category}</td>
               <td><button onclick="updateData(${i})" id= "update">update</button></td>
               <td><button onclick="deleteData(${i})" id= "delete">delete</button></td>
             </tr>`     ;
         
        }
       
       
         }
      }
  document.getElementById('ssss').innerHTML = table;
}

// clean data