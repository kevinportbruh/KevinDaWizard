function rotateIcon(){
    const icon = document.getElementById('Ticon');
    icon.animate([
        { transform: 'scale(0.5)' },
        { transform: 'rotate(90deg)' },
        { transform: 'scale(1)' }
       

    ], {
        duration: 500,
        iterations: 0
    });

}


function alertUser(){
    alert("This will be a Resume download button or an email me button. I'm not sure yet.");
}

