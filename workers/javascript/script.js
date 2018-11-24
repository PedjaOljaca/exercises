// let ime = prompt('Unesite ime');
// let prezime = prompt('Unesite prezime');
// let radnoIskustvo = prompt('Koliko godina iskustva imate?');
// let fakultet = confirm("Da li ste zavrsili fakultet?");
// let visaSkola = confirm("Da li ste zavrsili visu skolu?");

// document.write(`${ime} ${prezime}<br>`);

// let osnovnaPlata = 500;

// for(let i=0:i<radnoIskustvo;i++){

// }
var workers = [];

function addWorker() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var name = lastName + " " + firstName;
    var experience = parseInt(document.getElementById('experience').value);
    var education = document.getElementById('education').value;
    var salary = countSalary(experience, education);

    if (!isValid(firstName, lastName, experience)) {
        alert('Bad entry! Worker ' + name + ' is not aded.');
        return;
    }

    workers.push({ name: name, experience: experience, education: education, salary: salary });
    alert(`Worker ${firstName} ${lastName} width ${experience} years of
     experience and finished ${education} is added. Salary is ${salary}.`);
}

function showWorkers() {
    workers.sort(function(a, b){return a.salary - b.salary});
    document.getElementById('worker').innerHTML = '';
    var tableHtml = '<table class="table table-strip"><tr><th>Name</th><th>Experience</th><th>Education</th><th>Salary</th></tr>';
    for (let i = 0; i < workers.length; i++) {
        tableHtml += `<tr><td> ${workers[i].name} </td><td> ${workers[i].experience}
        </td><td>${workers[i].education}</td><td> ${workers[i].salary.toFixed(2)}</td></tr>`;
    }
    tableHtml += '</table>'
    document.getElementById('worker').innerHTML = tableHtml;

}

function showWorkersForEach(element, index) {
    document.getElementById('worker').innerHTML += element.name + ' has ' + element.experience +
        ' years of expirience and has finished ' + element.education + 'and has salary ' + element.salary + '.<br>';
}

function showWorkers2() {
    document.getElementById('worker').innerHTML = '';
    for (var i = 0; i < workers.length; i++) {
        document.getElementById('worker').innerHTML += workers[i].name + ' has ' + workers[i].experience +
            ' years of expirience and has finished ' + workers[i].education + 'and has salary ' + workers[i].salary + '.<br>';
    }
}

function countSalary(experience, education) {
    var baseSalary = 500;
    var raise = baseSalary * experience * 0.1;
    var mainSalary = baseSalary + raise;
    var coeficient = educationCoeficient(education);
    return mainSalary * coeficient;
}

function educationCoeficient(education) {
    switch (education) {
        case 'university': return 1.2;
        case 'college': return 1.1;
        default: return 1;
    }
}

function isValid(firstName, lastName, experience) {
    if (firstName.length == 0 || lastName.length == 0 || isNaN(experience) || experience < 0) {
        return false;
    }
    return true;
}

