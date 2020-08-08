
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
        
        //Create a new worker with the form values and the Worker Class
    };

    renderWorker = () => {

        //Render the new worker

        //Maybe after render, have them introduce themselves with a nice tooltip
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
    document.querySelector(".display-row"),
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