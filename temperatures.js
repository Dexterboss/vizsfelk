const celsiusTemperatures = ["2", "10", "15", "12", "20", "27", "30", "32", "24", "17", "13", "10"];

const fahrenheitTemperatures = celsiusTemperatures.map(celsius => {
    return (celsius * 1.8) + 32;
});

console.log("Celsius fokok:", celsiusTemperatures);
console.log("Fahrenheit fokok:", fahrenheitTemperatures);