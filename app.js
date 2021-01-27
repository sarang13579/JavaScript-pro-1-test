// JSON 

const dinos = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": 372,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
];

// Create Dino Constructor
function DinoConstructor(dinoObj) {
    this.height = dinoObj.height;
    this.weight = dinoObj.weight;
    this.species = dinoObj.species;
    this.diet = dinoObj.diet;
    this.when = dinoObj.when;
    this.where = dinoObj.where;
    this.fact = dinoObj.fact;
}

DinoConstructor.prototype.compareWeight = function (human_weight) {
        const weightRatio = (this.weight / human_weight).toFixed(1);
        // Comparison with human and Dino data using ratio and facts return
        if (weightRatio > 1) {
            return `${this.species} weight is ${weightRatio} times more than your weight`;
        }
        if (weightRatio < 1) {
            return `Your weight is ${(1/weightRatio).toFixed(1)} times more than ${this.species}`;
        }
        return `Your weight is same as ${this.species}!`;

    };

    DinoConstructor.prototype.compareWeight = function (human_height) {
        const heightRatio = (this.height / human_height).toFixed(1);
        // Comparison with human and Dino data using ratio and facts return
        if (heightRatio > 1) {
            return `${this.species} is ${heightRatio} times taller than you!`;
        }
        if (heightRatio < 1) {
            return `You are ${(1/heightRatio).toFixed(1)} times taller than ${this.species}!`;
        }
        return `You are the same height as ${this.species}!`;
    };

    DinoConstructor.prototype.compareWeight = function (human_diet) {
        // Comparison determining whether a herbivore, carnivore or an omnivore and facts return

        if (human_diet === this.diet) {
            return `You and ${this.species} are both ${human_diet}`;
        } else {
            return `You are ${human_diet}, but ${this.species} is ${this.diet}.`;
        }
    };



// Create Dino Objects
function dinoInfo() {
    const dinoArray = [];

    dinos.forEach(function (dino) {
        dinoArray.push(new DinoConstructor(dino));
    });
    dinoArray.splice(4, 0, 'EXTRA ARRAY SPACE FOR HUMAN');
    return dinoArray;
}

// Create Human Object
function humanInfo() {

    const inpObjName = document.getElementById("name");
    const inpObjHeight = document.getElementById("feet");
    const inpObjWeight = document.getElementById("weight");
    const inpObjDiet = document.getElementById("diet");

    const human_info = {
        name: inpObjName,
        height: inpObjHeight,
        weight: inpObjWeight,
        diet: inpObjDiet
    };
    return human_info;
}

function humanInfoValue() {

    const humanValue = {
        name: document.getElementById("name").value,
        height: (document.getElementById('feet').value * 12) + Number(document.getElementById('inches').value),
        weight: document.getElementById("weight").value,
        diet: document.getElementById("diet").value
    };
    return humanValue;

}

// Use IIFE to get human data from form
// IIFE
iifeFn();

function iifeFn() {
    (function () {
        document.getElementById('btn').addEventListener('click', onClicking);
        document.getElementById('back').addEventListener('click', back);

    })();
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

DinoConstructor.prototype.compareWeight = function (human_weight) {
        const weightRatio = (this.weight / human_weight).toFixed(1);
        // Comparison with human and Dino data using ratio and facts return
        if (weightRatio > 1) {
            return `${this.species} weight is ${weightRatio} times more than your weight`;
        }
        if (weightRatio < 1) {
            return `Your weight is ${(1 / weightRatio).toFixed(1)} times more than ${this.species}`;
        }
        return `Your weight is same as ${this.species}!`;

    };

    DinoConstructor.prototype.compareHeight = function (human_height) {
        const heightRatio = (this.height / human_height).toFixed(1);
        // Comparison with human and Dino data using ratio and facts return
        if (heightRatio > 1) {
            return `${this.species} is ${heightRatio} times taller than you!`;
        }
        if (heightRatio < 1) {
            return `You are ${(1 / heightRatio).toFixed(1)} times taller than ${this.species}!`;
        }
        return `You are the same height as ${this.species}!`;
    };

    DinoConstructor.prototype.compareDiet = function (human_diet) {
        // Comparison determining whether a herbivore, carnivore or an omnivore and facts return

        if (human_diet === this.diet) {
            return `You and ${this.species} are both ${human_diet}`;
        } else {
            return `You are ${human_diet}, but ${this.species} is ${this.diet}.`;
        }
    };


// Generate Tiles for each Dino in Array
function dinoFacts(dinoArray, humanValue) {
    let fact;
    const randomFact = dinoArray.species === 'Pigeon' ? 2 : Math.round(Math.random() * 5);

    if (randomFact == 0) {
        fact = `${dinoArray.species} lived in ${dinoArray.where}.`;
    }
    else if (randomFact == 1) {
        fact = `${dinoArray.species} lived in the ${dinoArray.when} period.`;
    }
    else if (randomFact == 2) {
        fact = dinoArray.fact;
    }
    else if (randomFact == 3) {
        fact = dinoArray.compareWeight(humanValue.weight);
    }
    else if (randomFact == 4) {
        fact = dinoArray.compareHeight(humanValue.height);
    }
    else if (randomFact == 5) {
        fact = dinoArray.compareDiet(humanValue.diet);
    }


    // Create the new grid item for dinos
    // Generate tile elements
    const contain = document.createElement("div");
    const title = document.createElement("h3");
    const img = document.createElement("img");
    const fact_print = document.createElement("p");
    const img_path = dinoArray.species.toLowerCase();
    img.src = "images/" + img_path + ".png";
    img.alt = "image of " + dinoArray.species;
    title.innerHTML = dinoArray.species;
    fact_print.innerHTML = fact;
    contain.className = 'grid-item';
    contain.innerHTML += title.outerHTML + img.outerHTML + fact_print.outerHTML;
    return contain;
}

function humanFact(humanValue) {

    // Create the new grid item for human
    // Generate tile elements
    const contain = document.createElement("div");
    const title = document.createElement("h3");
    const img = document.createElement("img");
    const fact_print = document.createElement("p");
    img.src = "images/human.png";
    img.alt = "human info";
    title.innerHTML = humanValue.name;
    fact_print.innerHTML = `Height: ${humanValue.height} inches<br>Weight: ${humanValue.weight} lbs<br>Diet: ${humanValue.diet}`;
    contain.className = 'grid-item';
    contain.innerHTML += title.outerHTML + img.outerHTML + fact_print.outerHTML;
    return contain;
}

// Add tiles to DOM

// Remove form from screen
function update(humanValue, dinoArray) {
    document.querySelector('form').style.display = 'none';
    document.getElementById('grid').style.display = 'flex';
    document.getElementById('back').style.display = 'block';

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 9; i++) {
        let photo_grid = i === 4 ? humanFact(humanValue) : dinoFacts(dinoArray[i], humanValue);

        fragment.appendChild(photo_grid);
    }
    document.getElementById('grid').appendChild(fragment);
}


// On button click, prepare and display infographic

// Click Event listeners for buttons

function onClicking(e) {

    e.preventDefault();
    let getHumanInfo = humanInfo();

    if (!(getHumanInfo.name).checkValidity()) {
        document.getElementById("look_msg").innerHTML = '<p>Please Enter a name</p>';
        return;
    } else if (!(getHumanInfo.height).checkValidity()) {
        document.getElementById("look_msg").innerHTML = '<p>Please Enter a Height</p>';
        return;
    } else if (!(getHumanInfo.weight).checkValidity()) {
        document.getElementById("look_msg").innerHTML = '<p>Please Enter a Weight</p>';
        return;
    }
    else {
        document.getElementById("look_msg").innerHTML = '';
    }

    const getdinoInfo = dinoInfo();
    const humanValue = humanInfoValue();
    update(humanValue, getdinoInfo);
}

function back() {
    document.getElementById('look_msg').innerHTML = '';
    document.getElementById('grid').innerHTML = '';
    document.getElementById('back').style.display = 'none';
    document.getElementById('grid').style.display = 'none';
    document.querySelector('form').style.display = 'block';
}