  let head=document.getElementById('head');
  let second=document.getElementById('second');
   let text='';
   let names=['Devloper|','De|','Designer|','Des|','Mentor|'];
   let id='';
   let i=-1;
   
   clearInterval(id);
   id=setInterval(fun,1000);
   function fun(){
       
    if(i<4){
           i++
       }
       else{
           i=0;
       }
       text=names[i];
       head.innerHTML=text;
       second.innerHTML=text;
   }
   function myFun(){
       document.getElementById('navbar').style.backgroundColor='rgba(68, 68, 136, 0.6)';
   }
  function myFun2(){
       document.getElementById('navbar').style.backgroundColor='rgba(0,0,0,0.6)';
  }

  {
    let id="";
    let hey=document.getElementsByClassName('check');
    function change(e){
     clearInterval(id);
  id=setInterval(fun3,100);
   function fun3(){
    for(let i=0;i<hey.length;i++){
        if(hey[i].value==''){
            hey[i].style.boxShadow='5px 5px 10px red';
        }else{
            console.log('hello'+hey[i].value)

            hey[i].style.boxShadow='5px 5px 10px green';
        }
    }
       if((e.value)!=''){
         e.style.boxShadow='5px 5px 10px green ';
       }
       else{
           e.style.boxShadow='5px 5px 10px red';
       }
   }
    }
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzxfEiU8w_nHjIw6seqEH5Smytt3IpXRzHuWPEjAYlk1-5zrIhhs9DbJ-bdmnhIErpHuQ/exec'
            const form = document.forms['form1']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response =>alert('Sent Successfully'))
                .catch(error => console.error('Error!', error.message))
                clearInterval(id);
                for(let i=0;i<hey.length;i++){
                    hey[i].value='';
                    hey[i].style.boxShadow='4px 4px 10px red';
                }
            })
      }
        

      