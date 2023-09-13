let countdown;
let total;
var iny=document.querySelector("#instr")
iny.style.display='none'
function ins(){
    var iny=document.querySelector("#instr")

    if (iny.style.display==='none'){
        iny.style.display='block'
    }
}
function up(){
    iny.style.display='none'
}
function set(){
    // alert("hey")
    var hd=parseInt(document.querySelector("#dd").value)|| 0;
    // document.querySelector("#td").value=hd;
    var hh=parseInt(document.querySelector("#dh").value)|| 0;
    var hm=parseInt(document.querySelector("#dm").value)|| 0;
    var hs=parseInt(document.querySelector("#ds").value)|| 0;
    total=hs+hm*60+hh*60*60+hd*24*60*60;
    update(total)
}
function update(tot){
    // alert("hoyy")
    var hdm=Math.floor((tot)/(24*60*60));
    var hhm=Math.floor((tot)%(24*60*60)/(60*60));
    var hmm=Math.floor((tot)%(60*60)/60);
    var hsm=Math.floor((tot%60));
    // const day=document.querySelector("#td");
    // day.textContent=hdm+" D";
    document.querySelector("#td").value=hdm+" D";
    document.querySelector("#th").value=hhm+" H";
    document.querySelector("#tm").value=hmm+" M";
    document.querySelector("#ts").value=hsm+" S";
    // alert("ich")
    if(tot<=0){
        clearInterval(countdown);
        alert("TIMEOUT");
    }
    tot--;
}
function start(){
    // alert("syatrtered")
    clearInterval(countdown);
    countdown = setInterval(() => {
        update(total);
        total--;
      }, 1000);
     
    // var ts=document.querySelector("#ts").value
    // var s=ts
    //     setInterval(()=>{
    //         s--
    //         document.querySelector("#ts").value=s
    //         clearInterval(0)
    //     },1000)
    // var tm=document.querySelector("#tm").value
    // var m=tm
    // setTimeout(()=>{
    //     m--
    //     document.querySelector("#tm").value=m
    // },1000*60)
    // clearInterval()

    }
function pause(){
    // alert("hoyy")
    clearInterval(countdown);
}
function reset(){
    clearInterval(countdown);
    document.querySelector("#dd").value="";
    document.querySelector("#dh").value="";
    document.querySelector("#dm").value="";
    document.querySelector("#ds").value="";
    
}
