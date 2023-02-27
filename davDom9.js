let Right = document.querySelector(".right");
let Left = document.querySelector(".left");

Right.addEventListener('click',function(){
        function scrollRight(x, y) {
            window.scrollBy(x, y);  
        } 
        scrollRight(40,0);

        Right.classList.add('btnefect')
        
        setTimeout(function(){
            let Right = document.querySelector(".right");
            Right.classList.remove('btnefect')
        }, 100);
})

Left.addEventListener('click',function(){
    function scrollLeft(x, y) {
        window.scrollBy(x, y);
    }      
    scrollLeft(-40,0);

    Left.classList.add('btnefect')
    setTimeout(function(){
        let Left = document.querySelector(".left");
        Left.classList.remove('btnefect')
    }, 100);

 
})