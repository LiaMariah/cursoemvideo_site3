function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementsById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(famo.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByTagName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElementNS('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                gênero = 'Homem'
                if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('scr', 'kidhomem.png')
                } else if (idade < 21) {
                    //jovem
                    img.setAttribute('scr', 'jovemhomem.png')
                } else if (idade < 50 ) {
                    //adulto
                    img.setAttribute('scr', 'adulto.png')
                } else {
                    //idoso
                    img.setAttribute('scr', 'velho.png')
                }

            } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('scr', 'kidmulher.png')
                } else if (idade < 21) {
                    //jovem
                    img.setAttribute('scr', 'jovemmulher.png')
                } else if (idade < 50 ) {
                    //adulto
                    img.setAttribute('scr', 'adulta.png')
                } else {
                    //idoso
                    img.setAttribute('scr', 'idosa.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = 'Detectamos $(gênero) com $(idade) anos'
        )
    }
}