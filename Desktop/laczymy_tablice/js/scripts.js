var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
	allNames = femaleNames.concat(maleNames);
	alert(allNames);
	newName ='Marian';

if (allNames.indexOf(newName) === -1) {
	var Names = allNames.push(newName);
	alert("Dodano Marian");
}

console.log(Names);	
