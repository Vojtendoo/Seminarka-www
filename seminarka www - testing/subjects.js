const subjects = [
    {
        title: "Matematika",
        images: Array(25).fill("images/matematika.png"), // Nahraď vlastní cestou k obrázku
    },
    {
        title: "Český jazyk",
        images: Array(25).fill("images/cesky-jazyk.png"), // Nahraď vlastní cestou k obrázku
    },
];

let currentSubjectIndex = 0;

function loadSubject(index) {
    const subject = subjects[index];
    const subjectTitle = document.getElementById("subject-title");
    const subjectTable = document.getElementById("subject-table");

    // Nastavení názvu předmětu
    subjectTitle.textContent = subject.title;

    // Vyčištění tabulky
    subjectTable.innerHTML = "";

    // Generování 5x5 kostek
    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement("td");
            const img = document.createElement("img");
            img.src = subject.images[i * 5 + j];
            cell.appendChild(img);
            row.appendChild(cell);
        }
        subjectTable.appendChild(row);
    }
}

function changeSubject(direction) {
    currentSubjectIndex = (currentSubjectIndex + direction + subjects.length) % subjects.length;
    loadSubject(currentSubjectIndex);
}

// Načtení výchozího předmětu
loadSubject(currentSubjectIndex);
