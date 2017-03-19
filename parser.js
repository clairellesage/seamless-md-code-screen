//This program should return the following in HTML:

// Name of patient: Jane Doe
// Organization name: College Hospital
// Gender: Female
// Number of conditions they have: 2
// List of all conditions: 
// - Epilepsy
// - Sleep apnea

const patientData = require('./patient7')

const parsePatientData = function(data) {
	return html = `<p>${patientName(data)}</p>\n<p>${organizationName(data)}</p>\n<p>${patientGender(data)}</p>\n<p>${numberOfConditions(data)}</p>\n<p>${listAllConditions(data)}</p>`
}


const patientName = function(data) {
	for (i in patientData.name) {
		let firstName = patientData.name[i].given[0];
		let lastName = patientData.name[i].family[0];
		return `Name of patient: ${firstName} ${lastName}`;
	return "hi";
	}
}

const organizationName = function(data) {
	return `Organization name: ${data.managingOrganization.display}`;
}

const patientGender = function(data) {
	let gender = capitalize(data.gender);
	return `Gender: ${gender}`;
}

const capitalize = function(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

const numberOfConditions = function(data) {
	return `Number of conditions they have: ${data.conditions.length}`;
}

const listAllConditions = function(data) {
	let conditionsList = [];
	for (condition in data.conditions) {
		conditionsList.push(`\n<li>${data.conditions[condition]}</li>`);
	}
	return `<ul>List all conditions: ${conditionsList}\n</ul>`;
}


console.log(parsePatientData(patientData))

