const modal=document.querySelector("#modal")
let currentRow

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
        modal.style.display="block"
        currentRow=row
    });
    
    celSupprimer.appendChild(imgSupprimer);
    row.appendChild(celSupprimer);
    document.querySelector("#tableau>tbody").appendChild(row);
    toLocalStorage(employeeData);
}

const toLocalStorage = (employeeData) => {
localStorage.setItem(employeeData.id,JSON.stringify(employeeData));
}

window.addEventListener('load',()=>{
    for(let i=0;i<localStorage.length;i++){
        const key=localStorage.key(i)
        addRow(JSON.parse(localStorage.getItem(key)))
    }
})

document.querySelector("#annuler").addEventListener("click",()=>{
    modal.style.display="none"
})
document.querySelector("#supprimer").addEventListener("click",()=>{
    currentRow.remove()
    const key=currentRow.children[0].textContent
    localStorage.removeItem(key)
    modal.style.display="none"
})