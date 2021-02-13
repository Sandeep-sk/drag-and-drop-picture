//1) when you insert class through js  one space nust include like event.target.className=' hide';
// 2)when time of interval callback function is zero(0) then it calls at the end of everything happens in that function in whichi this timefunction apply
// 3) WE CAn directly add class in js and apply css on that class not need to first insert class in dom first to add any css affect directly or indirectly no need


let imgbox=document.querySelector('.imgbox');
let whiteboxes=document.querySelectorAll('.whitebox');

imgbox.addEventListener('dragstart',(event)=>{
    console.log('dragstart ');
    event.target.className +=' hold';
    setTimeout(() => {
        event.target.className+=' hide';
    }, 0);
    
});
imgbox.addEventListener('dragend',(event)=>{
    // event.preventDefault();
    event.target.className='imgbox'; // when dragend then div class of imgbox and its css effect apply on that
    console.log('dragend ');
});

for(whitebox of whiteboxes){ // apply on all whitebox means we drap or drop in any white box at any time that's why we use for loop here
    // console.log(whitebox);
    whitebox.addEventListener('dragover',(event)=>{
        event.preventDefault(); // drop only work if its dragover default behabiour we prevent (means we can't drop over any thing)
       console.log('drapover');   
    })
    whitebox.addEventListener('dragenter',(event)=>{
       event.target.className+=' dashed';
        console.log('dragenter');   
    })
    whitebox.addEventListener('dragleave',(event)=>{
        event.target.className='whitebox';
        console.log('dragleave');   
    })
    whitebox.addEventListener('drop',(event)=>{
        event.target.append(imgbox); // when drop on some any container append that imbox class in that container
       console.log('drop');   
    })
}