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
	const patientName = function(data) {
		for (i in patientData.name) {
			let firstName = patientData.name[i].given[0];
			let lastName = patientData.name[i].family[0];
			return `<p>Name of patient: ${firstName} ${lastName}</p>`;
		}
	}

	const organizationName = function(data) {
		return `<p>Organization name: ${data.managingOrganization.display}</p>`;
	}

	const patientGender = function(data) {
		let gender = capitalize(data.gender);
		return `<p>Gender: ${gender}</p>`;
	}

	const capitalize = function(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	const numberOfConditions = function(data) {
		return `<p>Number of conditions they have: ${data.conditions.length}</p>`;
	}

	const listAllConditions = function(data) {
		let conditionsList = [];
		for (condition in data.conditions) {
			conditionsList.push(`<li>${data.conditions[condition]}</li>`);
		}
		return `<ul>List all conditions: ${joinedConditions}</ul>`;
	}
}

console.log(parsePatientData(patientData))

