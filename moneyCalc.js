const mRate=1;
const wRate=0.3;
const inflate=2;
function calcIncrease(time,inflation) {
    let which
    let rate
    let weeks
    let out
    if (time=='w'){
        which="win"
        rate=wRate
        weeks=2
        out=document.getElementById("wOut")
    }else{
        which="min"
        rate=mRate
        weeks=4
        out=document.getElementById("mOut")
    }
    let money=document.getElementById(which).value
    let afterMoney=money*(1+rate/100)

    if (inflation!=null){
        let orMoney=money*((inflate/100)/52*weeks)
        money=afterMoney-orMoney
    }else{
        money=afterMoney
    }
    out.innerHTML=' £'+String(money.toFixed(2))

    if(inflation==null){
        let item=document.getElementById(which)
        item.value=money.toFixed(2)
    }
   
    
}
