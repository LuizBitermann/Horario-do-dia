function carregar() {
  // uma function de onload para carregar a pagina
  var msg = window.document.getElementById("msg"); // aqui esta buscando a div com o id
  var img = window.document.getElementById("imagem"); // aqui esta buscando a imagem com o id
  var data = new Date(); // aqui esta buscando a data completa
  var hora = data.toLocaleTimeString(); //  aqui esta modificando a data completa, para apenas hora,minutos,segundos.
  msg.innerHTML = `Agora sao ${hora} Horas`;
  if (hora >= 0 && hora < 12) {
    // nesta condicao esta sendo pego a imagem(foto-maha),(foto-tarde)
    img.src = "foto-manha.jpg"; //e (foto-noite), iniciando-se condicoes em que determinados horarios
    document.body.style.background = "#e2cd9f"; //ira automaticamente aparecer essas imagems
  } else if (hora >= 12 && hora < 18) {
    img.src = "foto-tarde.jpg";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "foto-noite.jpg";
    document.body.style.background = "#515154";
  }
}
