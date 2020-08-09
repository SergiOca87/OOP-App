

//Materialize Input Fields
document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
});

// Create a Main Class Worker
class Startup {
    constructor(workers, workersDisplay, workerSearch, workerSort, workersForm) {
        this.workers = workers;
        this.workersDisplay = workersDisplay;
        this.workerSearch = workerSearch;
        this.workerSort = workerSort;
        this.workersForm = workersForm;
    
        this.workersForm.addEventListener('submit', this.createWorker);
    }

    createWorker = (e) => {
        e.preventDefault();
        
        // Get form values
        const inputs = document.querySelector(".workers-form");
        const name  = inputs["name"].value;
        const gender  = inputs["gender"].value;
        const technology  = inputs["technology"].value;

        //Create a new worker with the form values and the Worker Class as a blueprint
        const worker = new Worker(name, gender, technology);

        this.renderWorker(worker);
    };

    renderWorker = async(worker) => {

        //Render the new worker
        let workerImg = await this.apiDetails(worker.gender, worker.technology)

        const workerCard = `
            <div class="col m6 l4 center-align">
                <div class="card">
                    <img src='${workerImg}' />
                    <h3>${worker.name}</h3>
                    <div class="card-action">
                        <p>${worker.introduction()}</p>
                    </div>
                </div>
            </div>
        `
        this.workersDisplay.insertAdjacentHTML('beforeend', workerCard);
        //Maybe after render, have them introduce themselves with a nice tooltip
    }

    apiDetails = (gender, technology) => {

        const query = gender === 'female' ? `https://bigheads.io/svg?body=breasts&hair=bun&facialHair=none&graphic=${technology}&clothing=shirt`
        : gender === 'male' ? `https://bigheads.io/svg?body=chest&lashes=false&graphic=${technology}&clothing=shirt` : `https://bigheads.io/svg?&graphic=${technology}&clothing=shirt`
    
        return query;
    }

    workerSearch = () => {

        // Search workers by name
    }

    workerSort = () => {
        
        // Add some sorting maybe
    }

    workerIntroduction = () => {

        //Add a speak sign on the worker for them to say a random sentence.
    }
}

class Worker {
    constructor(name, gender, technology) {
        this.name = name;
        this.gender = gender
        this.technology = technology;
    }
    introduction() {
        return `Hi! my name is ${this.name} and I am a ${this.technology} developer.`
    }
}

//DOM selectors and empty Array to initiate the Startup
const startupComponents = [
    [],
    document.querySelector(".display-row .row"),
    document.querySelector(".workers-search"),
    document.querySelector(".workers-sort"),
    document.querySelector(".workers-form")
];

const startup = new Startup(...startupComponents);

// const formSubmit = (e) => {
//     e.preventDefault();

//     //Get form Values
//     const name = document.querySelector()
    
//     //Create new instanc eof Worker
//     const worker = new Worker('Peter', 'Male', 'Vue');

//     console.log(worker);
//     //Render new instance of worker to the screen
// }







// https://bigheads.io/svg?hair=bun&hat=none

// female = body=breasts&hair=bun&facialHair=none
// male = body=chest
// technology = &graphic=gatsby  ... or none