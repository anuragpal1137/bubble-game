document.body.addEventListener('click',(event)=>{

    const circle = document.createElement('div');
    circle.className = 'circle';
    const texts = ['Hi','Challooo','Love u','Kaise ho?','He Deva re'];
    circle.textContent = texts[Math.floor(Math.random() * texts.length)];
    



    const x = event.clientX;
    const y = event.clientY;
    circle.style.left =`${x-25}px`
    circle.style.top = `${y-25}px`

    const color = ["red","orange","pink","green","black","yello","purple","sky"];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 5000);

})  