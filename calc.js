function abc(a){
    document.getElementById('inpscr').value=document.getElementById('inpscr').value+a;
}
function bbc(){
    document.getElementById('inpscr').value='';
}
function equclk(){
    var b=document.getElementById('inpscr').value
    var result=eval(b)
    document.getElementById('inpscr').value=result
}