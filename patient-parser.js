const patientData = require('./patient7');

const parsePatientData = function(data) {
	return patientObj = {
		patientName: patientName(data), 
		organizationName: organizationName(data),
		patientGender: patientGender(data),
		numberOfConditions: numberOfConditions(data),
		listAllConditions: listAllConditions(data)
	}
}

const patientName = function(data) {
	for (i in patientData.name) {
		let name = `${patientData.name[i].given[0]} ${patientData.name[i].family[0]}`;
		return name;
	}
}

const organizationName = function(data) {
	return data.managingOrganization.display;
}

const patientGender = function(data) {
	let gender = capitalize(data.gender);
	return gender;
}

const capitalize = function(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

const numberOfConditions = function(data) {
	return data.conditions.length;
}

const listAllConditions = function(data) {
	let conditionsList = [];
	for (condition in data.conditions) {
		conditionsList.push(data.conditions[condition]);
	}
	return conditionsList;
}


parsePatientData(patientData);

module.exports = patientObj;