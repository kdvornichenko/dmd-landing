// Mask
var element = document.getElementById('phone-mask')
var maskOptions = {
	mask: '(000) 000-00-00',
}

var mask = IMask(element, maskOptions)

// Send Phone

const token = '5654256117:AAEN5oe9IdZoyZx4o39JbOSFBAUuJf7RlsE'
const URI_API = `https://api.telegram.org/bot${token}/sendMessage`

const sendPhoneBtn = document.querySelector('button')
const modal = document.querySelector('#phone-modal')
const modalTimer = modal.querySelector('#timer')
const modalText = modal.querySelector('#text')

function modalStatus(status) {
	if (status == 'error') {
		modalText.innerText = 'Введите корректный номер!'
		modalTimer.classList.toggle('bg-green-400')
		modalTimer.classList.toggle('bg-red-400')
	}

	if (status == 'ok') {
		modalText.innerText = 'Отправлено!'
	}

	modal.classList.toggle('-bottom-full')
	modal.classList.toggle('bottom-2.5')

	modalTimer.classList.toggle('w-full')
	modalTimer.classList.toggle('w-0')
}

function modalVisibility(status) {
	modalStatus(status)
	setTimeout(() => {
		modalStatus(status)
	}, 2800)
}

sendPhoneBtn.addEventListener('click', () => {
	if (mask.unmaskedValue.length == 10) {
		axios
			.post(URI_API, {
				chat_id: '-1001768227573',
				parse_mode: 'html',
				text: '+7' + mask.unmaskedValue,
			})
			.then(axios.spread((...res) => {}))
			.catch(err => {
				console.warn(err)
			})
			.finally(modalVisibility('ok'))
	} else {
		modalVisibility('error')
	}
})
