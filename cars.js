const cars = [
    { marka: "Toyota", evjarat: 2012, rendszam: "ABC-123" },
    { marka: "Volkswagen", evjarat: 2018, rendszam: "XYZ-456" },
    { marka: "Ford", evjarat: 2015, rendszam: "QWE-789" },
    { marka: "BMW", evjarat: 2020, rendszam: "BMW-001" }
];

const tableRows = cars.map(car => {
    return `<tr>
        <td>${car.marka}</td>
        <td>${car.evjarat}</td>
        <td>${car.rendszam}</td>
    </tr>`;
});

const tableHTML = 
`<table border="1">
    <thead>
        <tr>
            <th>Márka</th>
            <th>Évjárat</th>
            <th>Rendszám</th>
        </tr>
    </thead>
    <tbody>
        ${tableRows.join("\n")}
    </tbody>
</table>`;

console.log(tableHTML);
