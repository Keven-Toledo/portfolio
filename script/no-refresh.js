function openPage(pagina, secao) {
  var indice = pagina
  var target = secao
  var url = "./paginas/" + indice + '.html'
  var xml = new XMLHttpRequest()

  xml.onreadystatechange = function() {
    if(xml.readyState == 4 && xml.status == 200) {
      document.getElementById(target).innerHTML = xml.responseText
    }
  }

  xml.open("GET", url, true)

  xml.send()
}