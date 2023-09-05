function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector (`#res`)
    if (fano.value.length == 0 || fano.value > ano){
        alert(`Erro, verifique os dados e tente novamente `)
}
    else {
        var fsex = document.getElementsByName (`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id` , `foto`)

        if (fsex [0].checked){
            genero = `Homem`
            if (idade >=0 && idade < 10){
                img.setAttribute(`src` , `img/crianca_m.png`)
            } else if (idade <21){
                img.setAttribute(`src` , `img/Jovem_m.png`)
            } else if (idade < 50){
                img.setAttribute(`src` , `img/homem_m.png`)
            } else { 
                img.setAttribute(`src` , `img/idoso_m.png`)
            }

        } else if (fsex [1].checked){
            genero = `Mulher`
            if (idade >=0 && idade < 10){
                img.setAttribute(`src` , `img/crianca_f.png`)
            } else if (idade <21){
                img.setAttribute(`src` , `img/Jovem_f.png`)
            } else if (idade < 50){
                img.setAttribute(`src` , `img/mulher_f.png`)
            } else { 
                img.setAttribute(`src` , `img/idosa_f.png`)
            }

        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}