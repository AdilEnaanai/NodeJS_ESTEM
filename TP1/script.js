document.getElementById("ajouterBTN").addEventListener("click",(e)=>{
    e.preventDefault();
    const formData = new FormData(document.querySelector("#formulaire"));
    const employeeData = Object.fromEntries(formData);

    //Ajouter l'objet au tableau
    addRow(employeeData);
})




const addRow = (employeeData) => {
    const row = document.createElement("tr");

    for (let key in employeeData) {
        let cel = document.createElement("td");
        cel.textContent = employeeData[key];
        row.appendChild(cel);
    }

    // Ajouter un bouton "Supprimer" à la dernière cellule
    const celSupprimer = document.createElement("td");
    const imgSupprimer = document.createElement("img");
    imgSupprimer.src = "https://www.freeiconspng.com/thumbs/remove-icon-png/add-cross-delete-exit-remove-icon--6.png"
    
    imgSupprimer.addEventListener("click", () => {
        row.remove();
    });
    
    celSupprimer.appendChild(imgSupprimer);
    row.appendChild(celSupprimer);
    document.querySelector("#tableau>tbody").appendChild(row);
    toLocalStorage(employeeData);
}

const toLocalStorage = (employeeData) => {
localStorage.setItem(employeeData.id,JSON.stringify(employeeData));
}