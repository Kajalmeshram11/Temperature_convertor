// Function to convert temperature
function convertTemperature() {
    const inputScale = document.getElementById("inputScale").value;
    const outputScale = document.getElementById("outputScale").value;
    const temperature = parseFloat(document.getElementById("temperature").value);
    const result = convertTemperatureValue(temperature, inputScale, outputScale);0
    // Display the result with degree symbols
    const resultText = `Result: ${result.toFixed(2)} ${outputScale ==="C"?"°C":outputScale==="F"?"°F":outputScale}`;
    document.getElementById("result").textContent = resultText;
}

// Function to perform the actual temperature conversion
function convertTemperatureValue(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) {
        return value; // If the units are the same, return the input value as is
    }
    const converters = {
        C: {
            F: (c) => (c * 9/5) + 32,
            K: (c) => c + 273.15,
            R: (c) => (c + 273.15) * 9/5,
            RE: (c) => c * 4/5,
        },
        F: {
            C: (f) => (f - 32) * 5/9,
            K: (f) => ((f - 32) * 5/9) + 273.15,
            R: (f) => f + 459.67,
            RE: (f) => (f - 32) * 4/9,
        },
        K: {
            C: (k) => k - 273.15,
            F: (k) => (k - 273.15) * 9/5 + 32,
            R: (k) => k * 9/5,
            RE: (k) => (k - 273.15) * 4/5,
        },
        R: {
            C: (r) => (r - 491.67) * 5/9,
            F: (r) => r - 459.67,
            K: (r) => r * 5/9,
            RE: (r) => (r - 491.67) * 4/9,
        },
        RE: {
            C: (re) => re * 5/4,
            F: (re) => (re * 9/4) + 32,
            K: (re) => (re * 5/4) + 273.15,
            R: (re) => (re * 9/4) + 491.67,
        },
    };

    return converters[fromUnit][toUnit](value);
}

// Add an event listener to the "Convert" button
document.getElementById("convertButton").addEventListener("click", convertTemperature);
