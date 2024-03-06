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


