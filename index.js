function run(){
    setTimeout(play,3000)

    function play(){
        document.getElementById('logo').style.display = 'block';
        document.getElementById('firstlogo').style.display ='none'
    }
    
}
function store(){
    let link1 = `<div id="showmega">
    <ul>
        <li><i></i></li>
        <li><a>Home</a></li>
        <li><a href=""></a>Store</li>
        <li><a href=""></a>Mac</li>
        <li><a href=""></a>Service</li>
        <li><a href=""></a>Product</li>
        <li><a href=""></a>iPad</li>
        <li><a href=""></a>iPhone</li>
        <li><a href=""></a>Store</li>
        <li><a href=""></a>Store</li>
        <li><a href=""></a>Store</li>
        <li><a href=""></a>Store</li>
    </ul></div>`
    document.getElementById('finaloutput').innerHTML = link1;

}
function hiddennav(){
    document.getElementById('finaloutput').innerHTML = "";
}
function tophide(){
    let clienth = window.event.clientY;
    if(clienth<20){
        document.getElementById('finaloutput').innerHTML = "";
    }
}