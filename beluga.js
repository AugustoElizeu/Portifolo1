function hamber(){
    if(x==0){
        $hbg.classList.remove('listoff');
        $hbg.classList.add('list');
        x++;
    }
    else{
        $hbg.classList.remove('list');
        $hbg.classList.add('listoff');
        x=0;
    }
}
function type(){
    var slice = $txt.textContent.split('');
    $txt.textContent = "";
    slice.forEach((word, i) => {
        setTimeout(()=>{
            $txt.textContent += word;
        },75* i)
    });
}
function lightmode(){
    if(y===0){
        document.getElementById("change").src = "css/img/sun.png";
        $sob.classList.remove('sobre');
        $sob.classList.add('fruitger');
        $frut.classList.add('frutger2');
        $frut.classList.remove('h2ban');
        $frut.style = "color:white";
        y++;
    }
    else{
        document.getElementById("change").src = "css/img/Lua1.png";
        $sob.classList.remove('fruitger');
        $sob.classList.add('sobre');
        $frut.classList.add('h2ban');
        $frut.classList.remove('frutger2');
        $frut.style = "color:yellow";
        y=0;
    }
    $header.classList.toggle('lighth');
    $header.style = 'transition:.5s';
    $main.classList.toggle('lightm');
    $main.style = 'transition:.5s';
    $footer.classList.toggle('lightf');
    $footer.style = 'transition:.5s';

}
