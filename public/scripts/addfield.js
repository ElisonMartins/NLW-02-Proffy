document.querySelector('#add-time')
.addEventListener('click', clonefield)

function clonefield() {
	//Fields to be duplicated.(Campos que vão ser duplicados.)
	const newfieldcontainer = document.querySelector('.schedule-item').cloneNode(true)
	//Clear the selected fields.(Limpar os campos selecionados.)
	const fields = newfieldcontainer.querySelectorAll('input')
	//For each field.(Para cada campo.)
	fields.forEach(function(field) {
		//Take the field of the moment and clean.(Pegar o field do momento e limpar.)
		field.value = ''
	})
	//Place that will be placed.(Lugar que vai ser colocado.)
	document.querySelector('#schedule-items').appendChild(newfieldcontainer)
}