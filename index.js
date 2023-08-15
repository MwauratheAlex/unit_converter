const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click", () => {
    const input = Number(inputEl.value)

    const convertedValues = convert(input)
    console.log(convertedValues)
    
})



function convert(input) {
    /*
        1 meter = 3.281 feet
        1 liter = 0.264 gallon
        1 kilogram = 2.204 pound
    */
    return {
        metersFeet: (input * 3.281).toFixed(3),
        feetMeters: (input / 3.281).toFixed(3),
        litresGalons: (input * 0.264).toFixed(3),
        galonsLetres: (input / 0.264).toFixed(3),
        kilosPounds: (input * 2.204).toFixed(3),
        poundsKilos: (input / 2.204).toFixed(3)
    }
}