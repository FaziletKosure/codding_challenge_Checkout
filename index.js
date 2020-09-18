let discountPrice1=parseFloat(document.getElementsByClassName('price1-discounted')[0].innerText.replace('$',''));
let normalPrice1=parseFloat(document.getElementsByClassName('price1')[0].innerText.replace('$',''));
let shipping=parseFloat(document.getElementsByClassName('shipping')[0].innerText.replace('$',''));
let product_count=parseInt(document.getElementsByClassName('product_count')[0].innerText);
let basket=document.querySelector(".basket");

const dp1c=discountPrice1;
const np1c=normalPrice1;


function remove1() {
    let myobj1 = document.querySelector("#pr1");
    myobj1.innerHTML=''
    if (document.querySelector("#pr2").innerHTML==''){
        basket.innerHTML='<i class="fas fa-sync-alt" onclick="location.reload()"></i>';
    }

  }
  function remove2() {
    let myobj2 = document.querySelector("#pr2");
    myobj2.innerHTML=''
    if (document.querySelector("#pr1").innerHTML==''){
        basket.innerHTML='<i class="fas fa-sync-alt" onclick="location.reload()"></i>';
    }
  }
//   
function update1(e){
    const plusSign=document.getElementsByClassName('fa-plus')[0].innerText;
    const minusSign=document.getElementsByClassName('fa-minus')[0].innerText;
    let counter=parseInt(document.getElementsByClassName('counter')[0].innerText);
    let total=parseFloat(document.getElementsByClassName('total')[0].innerText.replace('$',''));
 
    if(e=='+'){
        counter +=1;
        normalPrice1 =  np1c*counter;
        discountPrice1 =dp1c*counter;
        total=discountPrice1+discountPrice2;
        product_count ++;
    }
    else if(e=='-')
    {
        if(counter > 1){
            counter -=  1;
            normalPrice1 =  np1c*counter;
            discountPrice1 =dp1c*counter;
            total=discountPrice1+discountPrice2;
            product_count --;
        }
        else if(counter== 1){
            normalPrice1 =  dp1c;
            discountPrice1 =dp1c;
        }
    }
    document.getElementsByClassName('counter')[0].innerText=counter;
    document.getElementsByClassName('price1-discounted')[0].innerText='$'+discountPrice1.toFixed(2);
    document.getElementsByClassName('price1')[0].innerText='$'+normalPrice1.toFixed(2);
    document.getElementsByClassName('total')[0].innerText='$'+total.toFixed(2); 
    document.getElementsByClassName('product_count')[0].innerText=product_count;
};
// update1()
let discountPrice2=parseFloat(document.getElementById('price2-discounted').innerHTML.replace('$',''));
let normalPrice2=parseFloat(document.getElementsByClassName('price2')[0].innerText.replace('$',''));
const dp2c=discountPrice2;
const np2c=normalPrice2;
function update2(e){
    let shipping=parseFloat(document.getElementsByClassName('shipping')[0].innerText.replace('$',''));
    const plusSign=document.getElementsByClassName('fa-plus')[0].innerText;
    const minusSign=document.getElementsByClassName('fa-minus')[0].innerText;
    let counter=parseInt(document.getElementsByClassName('counter')[1].innerText);
    let total=parseFloat(document.getElementsByClassName('total')[0].innerText.replace('$',''));

    if(e=='+'){
        counter = counter+1;
        normalPrice2 =  np2c*counter;
        discountPrice2 =dp2c*counter;
        total=discountPrice1+discountPrice2;
        product_count++;
    }
    else if(e=='-'){
        if(counter > 1){
            counter -= 1;
            normalPrice2 = np2c*counter;
            discountPrice2 =dp2c*counter;
            total=discountPrice1+discountPrice2;
            product_count --;
        }
        else if(counter == 1){
            normalPrice2 =  np2c;
            discountPrice2 =dp2c;
        }
    }
    document.getElementsByClassName('counter')[1].innerText = counter;
    document.getElementById('price2-discounted').innerHTML='$'+discountPrice2.toFixed(2);
    document.getElementsByClassName('price2')[0].innerText='$'+normalPrice2.toFixed(2);
    document.getElementsByClassName('total')[0].innerText='$'+(total).toFixed(2);
    document.getElementsByClassName('product_count')[0].innerText=product_count;
};

