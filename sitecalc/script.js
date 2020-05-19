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
