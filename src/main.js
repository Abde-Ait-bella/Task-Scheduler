const popup = document.getElementById("add-popup");
const back_trans = document.getElementById("back-transparent");
const button = document.getElementById('button');
button.addEventListener('click', close_popup);
var a_faire = document.getElementById('a_faire');
var en_cours = document.getElementById('en-cours');
var termine = document.getElementById('termine');

function open_add_popup() {
    const btn_remove = document.getElementById("remove_btn");
    if (btn_remove) {
        btn_remove.remove();
    }
    popup.classList.replace("hidden", "block");
    back_trans.classList.replace("hidden", "block");

    button.innerHTML = `
    <button onclick="AddTache(event)" type="button" class="w-1/4 px-5 py-2 bg-nav text-white font-bold rounded-lg border-2 shadow-xl">Ajouter</button>
    `
}

function close_popup() {
    popup.classList.replace("block", "hidden");
    back_trans.classList.replace("block", "hidden");
}

function openPopupEdit(elem) {
    const btn_remove = document.getElementById("remove_btn");
    if (btn_remove) {
        btn_remove.remove();
    }
    
    popup.classList.replace("hidden", "block");
    back_trans.classList.replace("hidden", "block");

    window.elem_to_edit = elem;
  
    const newButton = `
    <button id="remove_btn" onclick="RemoveTask(this)" type="button" class="w-1/4 px-5 py-2 bg-red-800 text-white font-bold rounded-lg border-2 shadow-xl">Supprimer</button>
    `
    button.innerHTML += newButton;
    button.children[0].setAttribute('onClick', 'EditTach(event)');
    button.children[0].textContent = "Edit";

    const inputs = document.getElementById('inputs');
    let childrens = inputs.querySelectorAll('.child');

    childrens[0].value = elem.children[0].textContent;
    childrens[1].value = elem.children[1].textContent;
    childrens[2].value = elem.children[2].textContent;
    childrens[3].value = elem.children[3].textContent;
    childrens[4].value = elem.children[4].textContent;
}

function EditTach(event) {
    event.preventDefault();
    const inputs = event.target.parentElement.parentElement.children;
    window.elem_to_edit.remove();

    switch (inputs[1].options[inputs[1].selectedIndex].text) {
        case "À faire":
            a_faire.innerHTML += `<div class="w-full rounded-lg flex justify-between p-3 px-5 my-5 bg-white items-center cursor-pointer"  onClick="openPopupEdit(this)">
            <div class="font-bold">${inputs[0].value}</div>
            <div class="hidden">${inputs[1].options[inputs[1].selectedIndex].text}</div>
            <div class="hidden">${inputs[2].value}</div>
            <div class="hidden">${inputs[3].options[inputs[3].selectedIndex].text}</div>
            <div class="hidden">${inputs[4].value}</div>
            <button class="p-2 bg-card rounded-lg">
                <img class="w-6" src="../dist/icons/symbols_edit.svg"></img>
            </button>
        </div>`;


            break;

        case "En cours":
            en_cours.innerHTML += `<div class="w-full rounded-lg flex justify-between p-3 px-5 my-5 bg-orange-600 items-center cursor-pointer"  onClick="openPopupEdit(this)">
            <div class="font-bold">${inputs[0].value}</div>
            <div class="hidden">${inputs[1].options[inputs[1].selectedIndex].text}</div>
            <div class="hidden">${inputs[2].value}</div>
            <div class="hidden">${inputs[3].options[inputs[3].selectedIndex].text}</div>
            <div class="hidden">${inputs[4].value}</div>
            <button class="p-2 bg-card rounded-lg">
                <img class="w-6" src="../dist/icons/symbols_edit.svg"></img>
            </button>
        </div>`;
            break;

        case "Terminé":
            termine.innerHTML += `<div class="w-full rounded-lg flex justify-between p-3 text-white px-5 my-5 bg-green-950 items-center cursor-pointer"  onClick="openPopupEdit(this)">
            <div class="font-bold">${inputs[0].value}</div>
            <div class="hidden">${inputs[1].options[inputs[1].selectedIndex].text}</div>
            <div class="hidden">${inputs[2].value}</div>
            <div class="hidden">${inputs[3].options[inputs[3].selectedIndex].text}</div>
            <div class="hidden">${inputs[4].value}</div>
            <button class="p-2 bg-card rounded-lg">
                <img class="w-6" src="../dist/icons/symbols_edit.svg"></img>
            </button>
        </div>`;
            break;

        default:
            break;
    }


}

function AddTache(event) {
    event.preventDefault();
    const form = document.getElementById("form");

    const inputs = document.getElementById('inputs');
    let childrens = inputs.querySelectorAll('.child');
    const titre = childrens[0].value;
    const status = childrens[1];
    const date = childrens[2].value;
    const limportent = childrens[3];
    const description = childrens[4].value;

    const newTask = `
                    <div class="font-bold">${titre}</div>
                    <div class="hidden">${status.options[status.selectedIndex].text}</div>
                    <div class="hidden">${date}</div>
                    <div class="hidden">${limportent.options[limportent.selectedIndex].text}</div>
                    <div class="hidden">${description}</div>
                    <button class="p-2 bg-card rounded-lg">
                        <img class="w-6" src="../dist/icons/symbols_edit.svg"></img>
                    </button>
                    `;

    switch (status.options[status.selectedIndex].text) {
        case "À faire":
            a_faire.innerHTML += `<div class="w-full rounded-lg flex justify-between p-3 px-5 my-5 bg-white items-center cursor-pointer"  onClick="openPopupEdit(this)" onmouseenter="show(this)" onmouseleave="dontShow(this)" >
                    ${newTask}
                </button>
            </div>`;
            break;

        case "En cours":
            en_cours.innerHTML += `<div class="w-full rounded-lg flex justify-between p-3 px-5 my-5 bg-orange-600 items-center cursor-pointer text-white" onClick="openPopupEdit(this)" onmouseenter="show(this)" onmouseleave="dontShow(this)" >
                 ${newTask}
            </div>`;
            break;

        case "Terminé":
            termine.innerHTML += `<div class="w-full rounded-lg text-white flex justify-between p-3 px-5 my-5 bg-green-950 items-center cursor-pointer" onClick="openPopupEdit(this)" onmouseenter="show(this)" onmouseleave="dontShow(this)" >
                 ${newTask}
            </div>`;
            break
    }

    form.reset();
}


function RemoveTask(elem) {
    window.elem_to_edit.remove();

    elem.parentElement.innerHTML = `
    <button onclick="AddTache(event)" type="button" class="w-1/4 px-5 py-2 bg-nav text-white font-bold rounded-lg border-2 shadow-xl">Ajouter</button>
`
}

function show(elem_show) {
    const show_card = document.getElementById('show_card');
    show_card?.remove();

    elem_show.children[0].textContent
    elem_show.classList.add("relative")
    const Important = elem_show.children[3].textContent;

    elem_show.innerHTML += `
    <div class="w-full absolute z-10 top-20 left-0 bg-zinc-500 block rounded-lg p-5 text-white grid grid-cols-2 items-center gap-3" style="top: 70px" id="show_card">
        <div class="w-3 h-3 bg-zinc-500 rotate-45 absolute top-1/2 left-4" style="top:-6px"></div>
        <div class="flex gap-2 items-center">${Important == "Important" ? '<div class="rounded-full w-3 bg-orange-700 h-3"></div> <p>Important</p>' : Important == 'Critique' ? '<div class="rounded-full w-3 bg-red-700 h-3"></div> <p>Critique</p>' : '<div class="rounded-full w-3 bg-yellow-500 h-3"></div> <p>Moyen</p>'}</div>
            <p class="text-end">${elem_show.children[2].textContent}</p>
            <p class="col-span-2">${elem_show.children[4].textContent}</p>
        </div>
    `
}

function dontShow(elem_show) {
    const show_card = document.getElementById('show_card');
    // elem_show.classList.remove("relative");
    show_card.remove();
}