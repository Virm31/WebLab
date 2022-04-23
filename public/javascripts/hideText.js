function view() {
    let style = document.getElementById('hidden1').style;
    let color = document.getElementById('text-facts').style;
    if (style.display === 'block') {
        style.display = 'none'
        color.backgroundColor = 'rgba(157,7,48,0.8)'
    } else {
        style.display = 'block'
    }
}