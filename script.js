function endereco() {
	let modal = document.querySelector('.modal')
	let mascara = document.querySelector('.mascara-modal')
	let modalEndereco = document.querySelector('.modal-endereco')
	let modalEndereco2 = document.querySelector('.mascara-modal')

	modalEndereco.addEventListener('click', mostrarModal)
	modalEndereco2.addEventListener('click', esconderModal)


	function mostrarModal() {
		modal.style.left = '50%'
		mascara.style.visibility = 'visible' 
	}

	function esconderModal() {
		modal.style.left = '-30%'
		mascara.style.visibility = 'hidden' 
	}
}
endereco()

function scrollSuave() {
	let linksInt = document.querySelectorAll('.scrolling a[href^="#"]')

	function smoothScrolling(event) {
		event.preventDefault()
		let href = event.currentTarget.getAttribute('href')
		let section = document.querySelector(href)
		section.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	linksInt.forEach(link => {
		link.addEventListener('click', smoothScrolling)
	})
}
scrollSuave()