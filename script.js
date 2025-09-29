const cars = [
    { marka: "Toyota", evjarat: 2012, rendszam: "ABC-123" },
    { marka: "Volkswagen", evjarat: 2018, rendszam: "XYZ-456" },
    { marka: "Ford", evjarat: 2015, rendszam: "QWE-789" },
    { marka: "BMW", evjarat: 2020, rendszam: "BMW-001" }
];

const tbody = document.getElementById("carTableBody");

const rows = cars.map(car => {
    const tr = document.createElement("tr");

    const tdMarka = document.createElement("td");
    tdMarka.textContent = car.marka;

    const tdEvjarat = document.createElement("td");
    tdEvjarat.textContent = car.evjarat;

    const tdRendszam = document.createElement("td");
    tdRendszam.textContent = car.rendszam;

    tr.appendChild(tdMarka);
    tr.appendChild(tdEvjarat);
    tr.appendChild(tdRendszam);

    return tr;
});

rows.forEach((row, index) => {
    setTimeout(() => {
        tbody.appendChild(row);
        setTimeout(() => {
            row.classList.add("visible");
        }, 10); // kis delay, hogy a transition működjön
    }, index * 500);
});