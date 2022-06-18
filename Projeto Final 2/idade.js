function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('txtano')
   var resp =  window.document.querySelector('div#resp')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('O ano está incorreto, por favor, repita o processo!')
    }
      else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
       
      if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade <= 11){
                //Criança
                img.setAttribute('scr','criancah.png')
            }
            else if (idade <17){
                //Adolescente
                img.setAttribute('src','adolescenteh.png')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src','adultoh.png')
            }else {
                //Idoso
                img.setAttribute('src','idosom.png')
            }
        }
        else if (fsex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade <= 11){
                //Criança
                img.setAttribute('scr','criancam.png')
            }
            else if (idade <= 17){
                //Adolescente
                img.setAttribute('src','adolescentem.png')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src','adultom.png')
            }else {
                //Idoso
                img.setAttribute('src','idosam.png')
            }
        }
        else if (fsex[2].checked){
            genero = 'Lgbtqia+'
            if (idade >= 0 && idade <= 11){
                //Criança
                img.setAttribute('scr','lgbt.png')
                }
            else if (idade <= 17){
                //Adolescente
                img.setAttribute('src','lgbt.png')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src','lgbt.png')
            }else {
                //Idoso
                img.setAttribute('src','lgbt.png')
            }
        }
        resp.style.textAlign = 'center'
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resp.appendChild(img)
    }
}


