function convertTemperature() {
    let result;
    let temperature= parseFloat(document.getElementById("temperature").value);
    let unit= document.getElementById("unit").value;

    if (unit==="celcius"){
        result=(temperature-32)*(5/9);
    }
    else if (unit==="fahrenheit"){
        result=(temperature*(9/5))+32;
    }
        document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)} ${unit.toUpperCase()}`;
}

 






