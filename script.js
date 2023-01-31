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

const modalSend = document.querySelector('#phone-modal-send')
const modalSendTimer = document.querySelector('#timer-send')
const modalError = document.querySelector('#phone-modal-error')
const modalErrorTimer = document.querySelector('#timer-error')

function modalStatus(status) {
	if (status == 'ok') {
		modalSend.classList.toggle('-bottom-full')
		modalSend.classList.toggle('bottom-2.5')

		modalSendTimer.classList.toggle('w-full')
		modalSendTimer.classList.toggle('w-0')
	}

	if (status == 'error') {
		modalError.classList.toggle('-bottom-full')
		modalError.classList.toggle('bottom-2.5')

		modalErrorTimer.classList.toggle('w-full')
		modalErrorTimer.classList.toggle('w-0')
	}
}

function modalVisibility(status) {
	modalStatus(status)
	setTimeout(() => {
		modalStatus(status)
	}, 2800)
}

const vkSection = document.querySelector('#vk-section')
const vkRepost = document.querySelector('#vk-repost')

function vkVisibility() {
	vkSection.classList.toggle('h-0')
	vkSection.classList.toggle('h-full')
	vkSection.classList.toggle('pt-20')
	vkSection.scrollIntoView({ behavior: 'smooth', block: 'center' })

	vkRepost.classList.toggle('h-0')
	vkRepost.classList.toggle('h-full')
	vkRepost.classList.toggle('pt-20')
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
			.finally(modalVisibility('ok'), vkVisibility())
	} else {
		modalVisibility('error')
	}
})
