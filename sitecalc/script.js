let Bw = document.querySelector('.txtbw')
let H = document.querySelector('.txth')
let hd = document.querySelector('.txthd')
let Mk = document.querySelector('.txtmk')
let Concreto = document.querySelector('.txtc')
let aco = document.querySelector('.txtca')

function calcular() {
    //dimensionamento a compressao
    let Md = Number(Mk.value * 1.4)
    let Bwv = Number(Bw.value)
    let fcd = Number(Concreto.value)/14
    let d = Number(H.value) - Number(hd.value)
    let Concreto1 = Number(Concreto.value)

    if (Concreto1 <= 50) {
        let lambida = 0.8
        let alphac = 0.85
        let ceq1 = Bwv*lambida*alphac*fcd
        let a = lambida * ceq1 / 2
        let b = ceq1 * d * -1
        let delta = b**2 - 4*a*Md
        let x1 = (-b+Math.sqrt(delta)) / (2*a)
        let x2 = (-b-Math.sqrt(delta)) / (2*a)
        res.innerHTML = `As raizes são ${x1.toFixed(2)} e ${x2.toFixed(2)}.`
        if (x1 < d && x2 > d) {
            res.innerHTML += `𝑐𝑜𝑚𝑜 𝑠𝑒 𝑡𝑟𝑎𝑡𝑎 𝑑𝑒 𝑓𝑙𝑒𝑥ã𝑜 𝑠𝑖𝑚𝑝𝑙𝑒𝑠, 𝑥 < 𝑑, 𝑝𝑜𝑟𝑡𝑎𝑛𝑡𝑜 𝑥 = ${x1.toFixed(2)}cm`
            return x1.toFixed(2)
            verificarDom() //preciso fazer que a proxima funcao seja chamada aqui.
        } else if (x2 < d && x1 > d) {
            res.innerHTML += `𝑐𝑜𝑚𝑜 𝑠𝑒 𝑡𝑟𝑎𝑡𝑎 𝑑𝑒 𝑓𝑙𝑒𝑥ã𝑜 𝑠𝑖𝑚𝑝𝑙𝑒𝑠, 𝑥 < 𝑑, 𝑝𝑜𝑟𝑡𝑎𝑛𝑡𝑜 𝑥 = ${x2.toFixed(2)}cm`
            return x2.toFixed(2)
            verificarDom() //preciso fazer que a proxima funcao seja chamada aqui.
        } else {
            console.log(`SEI LA MANO, DEU ERRO EU ACHO.`)
        }

    } else {
        let lambida = 0.8 - ((Concreto1 - 50)/400)
        let alphac = 0.85 * (1-((Concreto1-50)/200))
        let ceq1 = Bwv*lambida*alphac*fcd
        let a = lambida * ceq1 / 2
        let b = ceq1 * d * -1
        let delta = b**2 - 4*a*Md
        let x1 = (-b+Math.sqrt(delta)) / (2*a)
        let x2 = (-b-Math.sqrt(delta)) / (2*a)
        res.innerHTML = `As raizes são ${x1.toFixed(2)} e ${x2.toFixed(2)}.`
        if (x1 < d && x2 > d) {
            res.innerHTML += `𝑐𝑜𝑚𝑜 𝑠𝑒 𝑡𝑟𝑎𝑡𝑎 𝑑𝑒 𝑓𝑙𝑒𝑥ã𝑜 𝑠𝑖𝑚𝑝𝑙𝑒𝑠, 𝑥 < 𝑑, 𝑝𝑜𝑟𝑡𝑎𝑛𝑡𝑜 𝑥 = ${x1.toFixed(2)}cm`
            return x1.toFixed(2)
            verificarDom() //preciso fazer que a proxima funcao seja chamada aqui.
        } else if (x2 < d && x1 > d) {
            res.innerHTML += `𝑐𝑜𝑚𝑜 𝑠𝑒 𝑡𝑟𝑎𝑡𝑎 𝑑𝑒 𝑓𝑙𝑒𝑥ã𝑜 𝑠𝑖𝑚𝑝𝑙𝑒𝑠, 𝑥 < 𝑑, 𝑝𝑜𝑟𝑡𝑎𝑛𝑡𝑜 𝑥 = ${x2.toFixed(2)}cm`
            return x2.toFixed(2)
            verificarDom() //preciso fazer que a proxima funcao seja chamada aqui.
        } else{
            console.log(`SEI LA MANO, DEU ERRO EU ACHO.`)
        }
    }
}

/* isso ainda nao funciona
// verificacao do dominio3
function verificarDom() {
    resln.innerHTML += `FUNCANO VERIFICAR DOMINIO ACIONADA`
    let Concreto1 = Number(Concreto.value)
     if (Concreto1 <= 50) {
         //let x2lim = 0.259 * d
         if (aco === 25) {
             
         } else {
             
         }
     } else {
         
     }
}
*/

function verificarDom(params) {
    let d = Number(H.value) - Number(hd.value)
    let Concreto1 = Number(Concreto.value)
    let aco1 = Number(aco.value)
    
    if (Concreto1 <= 50) {
        let x2lim = 0.259 * d
        resln.innerHTML = `x2lim = 0.259.d = ${x2lim.toFixed(2)} cm.`
    } else if (Concreto1 = 55) {
        let x2lim = 0.238 * d
        resln.innerHTML = `x2lim = 0.238.d = ${x2lim.toFixed(2)} cm.`
    } else if (Concreto1 = 60) {
        let x2lim = 0.225 * d
        resln.innerHTML = `x2lim = 0.225.d = ${x2lim.toFixed(2)} cm.`
    } else if (Concreto1 = 65) {
        let x2lim = 0.215 * d
        resln.innerHTML = `x2lim = 0.215.d = ${x2lim.toFixed(2)} cm.`
    } else if (Concreto1 = 70) {
        let x2lim = 0.210 * d
        resln.innerHTML = `x2lim = 0.210.d = ${x2lim.toFixed(2)} cm.`
    } else if (Concreto1 = 75) {
        let x2lim = 0.207 * d
        resln.innerHTML = `x2lim = 0.207.d = ${x2lim.toFixed(2)} cm.`
    } else if (Concreto1 = 80) {
        let x2lim = 0.207 * d
        resln.innerHTML = `x2lim = 0.207.d = ${x2lim.toFixed(2)} cm.`
    } else if (Concreto1 = 85) {
        let x2lim = 0.206 * d
        resln.innerHTML = `x2lim = 0.206.d = ${x2lim.toFixed(2)} cm.`
    } else if (Concreto1 = 90) {
        let x2lim = 0.206 * d
        resln.innerHTML = `x2lim = 0.206.d = ${x2lim.toFixed(2)} cm.`
    }

    if (aco1 = 25) {
        if (Concreto1 <= 50) {
            let x3lim = 0.772 * d
            resln.innerHTML += `x3lim = 0.772 x d = ${x3lim.toFixed(2)} cm.`
        } else if (Concreto1 = 55) {
            let x3lim = 0.751 * d
            resln.innerHTML += `x3lim = 0.751 x d = ${x3lim.toFixed(2)} cm.`
        } else if (Concreto1 = 60) {
            let x3lim = 0.736 * d
            resln.innerHTML += `x3lim = 0.736 x d = ${x3lim.toFixed(2)} cm.`
        } else if (Concreto1 = 65) {
            let x3lim = 0.726 * d
            resln.innerHTML += `x3lim = 0.726 x d = ${x3lim.toFixed(2)} cm.`
        } else if (Concreto1 = 70) {
            let x3lim = 0.720 * d
            resln.innerHTML += `x3lim = 0.720 x d = ${x3lim.toFixed(2)} cm.`
        } else if (Concreto1 = 75) {
            let x3lim = 0.717 * d
            resln.innerHTML += `x3lim = 0.717 x d = ${x3lim.toFixed(2)} cm.`
        } else if (Concreto1 = 80) {
            let x3lim = 0.716 * d
            resln.innerHTML += `x3lim = 0.716 x d = ${x3lim.toFixed(2)} cm.`
        } else if (Concreto1 = 85) {
            let x3lim = 0.715 * d
            resln.innerHTML += `x3lim = 0.715 x d = ${x3lim.toFixed(2)} cm.`
        } else if (Concreto1 = 90) {
            let x3lim = 0.715 * d
            resln.innerHTML += `x3lim = 0.715 x d = ${x3lim.toFixed(2)} cm.`
        }
    } else if (aco1 = 50) {
        if (Concreto1 <= 50) {
            let x3lim = 0.628 * d
            resln.innerHTML += `x3lim = 0.628 x d = ${x3lim.toFixed(2)} cm.`
            return x3lim
        } else if (Concreto1 = 55) {
            let x3lim = 0.602 * d
        } else if (Concreto1 = 60) {
            let x3lim = 0.582 * d
        } else if (Concreto1 = 65) {
            let x3lim = 0.569 * d
        } else if (Concreto1 = 70) {
            let x3lim = 0.562 * d
        } else if (Concreto1 = 75) {
            let x3lim = 0.558 * d
        } else if (Concreto1 = 80) {
            let x3lim = 0.557 * d
        } else if (Concreto1 = 85) {
            let x3lim = 0.557 * d
        } else if (Concreto1 = 90) {
            let x3lim = 0.557 * d
        }
    } else if (aco1 = 60) {
        if (Concreto1 <= 50) {
            let x3lim = 0.438 * d
        } else if (Concreto1 = 55) {
            let x3lim = 0.411 * d
        } else if (Concreto1 = 60) {
            let x3lim = 0.391 * d
        } else if (Concreto1 = 65) {
            let x3lim = 0.379 * d
        } else if (Concreto1 = 70) {
            let x3lim = 0.372 * d
        } else if (Concreto1 = 75) {
            let x3lim = 0.369 * d
        } else if (Concreto1 = 80) {
            let x3lim = 0.367 * d
        } else if (Concreto1 = 85) {
            let x3lim = 0.367 * d
        } else if (Concreto1 = 90) {
            let x3lim = 0.367 * d
        }
    }
    resln.innerHTML = `X2 limite = ${x2lim}`
    resln.innerHTML += `X3 limite = ${x3lim}`


}