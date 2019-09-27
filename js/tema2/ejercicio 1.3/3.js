let dataArray = [1,2,3]
function StandadDeviation(dataArray) {
    let suma = 0
    let resta = 0
    for (let i = 0; i < dataArray.lenght; i++) {

        suma += dataArray[i]
    }
    let media = suma / dataArray.lenght
    console.log(media)
    let sumed =0

    for(let i = 0; i < dataArray.lenght;i++) {
        resta = media - dataArray[i]
       sumed += Math.pow(resta, 2)
    }
    sumed =sumed /dataArray.lenght
    console.log(sumed)
    let desviacTipic = Math.sqrt(sumed)
    console.log=(desviacTipic)

}
