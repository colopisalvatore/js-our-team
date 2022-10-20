// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede e stilarli a vostro gusto :faccia_leggermente_sorridente:
// BONUS 3:
// Aggiungere attraverso un form un membro al team

// creo un array con i dati
const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'assets/img/team/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'assets/img/team/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'assets/img/team/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'assets/img/team/barbara-ramos-graphic-designer.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'assets/img/team/scott-estrada-developer.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'assets/img/team/walter-gordon-office-manager.jpg'
    },

]
const container = document.querySelector('.team-container');


// ciclo che stampa tutti gli elementi dell'array
    for (let i = 0; i < members.length; i++) {
        generateCard(members[i].name, members[i].role, members[i].image);
    }

//funzione che crea le card
function generateCard(name, role, image) {
    let card = `          
    <div class="col-lg-3 col-md-6">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                    <div id="image" class="pic"><img src="${image}" class="img-fluid"
                            alt="${name}"></div>
                    <div class="member-info">
                        <h4 id="name">${name}</h4>
                        <span id="role">${role}</span>
                        <div class="social">
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <a href=""><i class="fa-brands fa-facebook"></i></a>
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                            <a href=""><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            `;

    container.innerHTML += card;
};

// funzione che crea nuove card e aggiunge oggetti all'array
const btnAdd = document.querySelector('#addMemberButton');

btnAdd.addEventListener('click', function() {

    let inputName = document.querySelector('#name');
    let inputRole = document.querySelector('#role');
    let inputImage = document.querySelector('#image');

    const newMember = {    
        name: inputName.value,
        role: inputRole.value,
        image: inputImage.value
    }

    members.push(newMember);

    generateCard(inputName.value, inputRole.value, inputImage.value);
    
    inputName.value = '';
    inputRole.value = '';
    inputImage.value = '';
});