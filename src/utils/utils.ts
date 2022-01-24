export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function teste() {
  console.log("tá testado")
}

export function uuid() { //Gera uma ID aleatória para cada componente que o chama. 
  let dateTime = new Date().getTime()

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(item) {
    let random = (dateTime + Math.random() * 16) % 16 | 0;
    dateTime = Math.floor(dateTime / 16);
    return (item == 'x' ? random : (random & 0x3 | 0x8)).toString(16);
  })
}

export function slowScroll($) { 
  $('body').on('click', '.navbar-nav a[href^="#"]', function(event) {
    event.preventDefault()
    let id = $(this).attr('href'),
      targetOffset = $(id).offset().top

    $('html, body').animate({
      scrollTop: targetOffset
    }, 500)
  })
}







