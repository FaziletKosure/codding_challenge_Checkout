let discountPrice1=parseFloat(document.getElementsByClassName('price1-discounted')[0].innerText.replace('$',''));
console.log(discountPrice1);
let normalPrice1=parseFloat(document.getElementsByClassName('price1')[0].innerText.replace('$',''));
let shipping=parseFloat(document.getElementsByClassName('shipping')[0].innerText.replace('$',''));
console.log(normalPrice1);
const dp1c=discountPrice1;
console.log(dp1c);
const np1c=normalPrice1;
function update1(e){
    const plusSign=document.getElementsByClassName('fa-plus')[0].innerText;
    const minusSign=document.getElementsByClassName('fa-minus')[0].innerText;
    let counter=parseInt(document.getElementsByClassName('counter')[0].innerText);
    let total=parseFloat(document.getElementsByClassName('total')[0].innerText.replace('$',''));
    if(e=='+'){
        counter +=1;
        console.log('counter',counter);
        normalPrice1 =  np1c*counter;
        discountPrice1 =dp1c*counter;
        total=discountPrice1+discountPrice2;
       
        console.log(normalPrice1);   
    }
    else if(e=='-')
    {
        if(counter > 1){
            counter -=  1;
            normalPrice1 =  np1c*counter;
            discountPrice1 =dp1c*counter;
            total=discountPrice1+discountPrice2;
        }
        else if(counter== 1){
            counter -=  1;
            total=discountPrice2+0;
            
            normalPrice1 =  dp1c;
        discountPrice1 =dp1c;
        }
        // else if(counter== 0){
        //     counter =  0;
            
        //     normalPrice1 =  np1c;
        // discountPrice1 =dp1c;
        // }
       
    }
    document.getElementsByClassName('counter')[0].innerText=counter;
    document.getElementsByClassName('price1-discounted')[0].innerText=discountPrice1.toFixed(2);
    document.getElementsByClassName('price1')[0].innerText=normalPrice1.toFixed(2);
    document.getElementsByClassName('total')[0].innerText=total.toFixed(2); 
};
// update1()
let discountPrice2=parseFloat(document.getElementById('price2-discounted').innerHTML.replace('$',''));
console.log(discountPrice2);
let normalPrice2=parseFloat(document.getElementsByClassName('price2')[0].innerText.replace('$',''));
console.log(normalPrice2);
const dp2c=discountPrice2;
console.log(dp1c);
const np2c=normalPrice2;
function update2(e){
    let shipping=parseFloat(document.getElementsByClassName('shipping')[0].innerText.replace('$',''));
    const plusSign=document.getElementsByClassName('fa-plus')[0].innerText;
    const minusSign=document.getElementsByClassName('fa-minus')[0].innerText;
    let counter=parseInt(document.getElementsByClassName('counter')[1].innerText);
    let total=parseFloat(document.getElementsByClassName('total')[0].innerText.replace('$',''));
    

    if(e=='+'){
        counter = counter+1;
        console.log('counter',counter);
        normalPrice2 =  np2c*counter;
        discountPrice2 =dp2c*counter;
        total=discountPrice1+discountPrice2;
    }
    else if(e=='-'){
        if(counter > 1){
            counter -= 1;
            normalPrice2 = np2c*counter;
            discountPrice2 =dp2c*counter;
            total=discountPrice1+discountPrice2;
        }
        else if(counter == 1){
            counter -=1;
            total=discountPrice1+0;
            normalPrice2 =  np2c;
            discountPrice2 =dp2c;
        }else if(counter==0){
            counter =0
            total=discountPrice1+0;
        }
       
    }
    document.getElementsByClassName('counter')[1].innerText = counter;
    document.getElementById('price2-discounted').innerHTML=discountPrice2.toFixed(2);
    document.getElementsByClassName('price2')[0].innerText=normalPrice2.toFixed(2);
    document.getElementsByClassName('total')[0].innerText=(total).toFixed(2);

};
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

