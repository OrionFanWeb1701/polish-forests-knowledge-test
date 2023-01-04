'use strict'

const main = () => {
	// Count time //
	const countTimeBox = document.querySelector('.count-time-box')
	const countTimeText = document.querySelector('.count-time-box__text')

	let countTime
	let minutes = 3
	let seconds = 60

	// Wrappers //
	const wrapperAll = Array.from(document.querySelectorAll('.wrapper'))

	// Inputs questions //
	const inputQ1All = Array.from(document.querySelectorAll('.inputQ1'))
	const inputQ2All = Array.from(document.querySelectorAll('.inputQ2'))
	const inputQ3All = Array.from(document.querySelectorAll('.inputQ3'))
	const inputQ4All = Array.from(document.querySelectorAll('.inputQ4'))
	const inputQ5All = Array.from(document.querySelectorAll('.inputQ5'))
	const inputQ6All = Array.from(document.querySelectorAll('.inputQ6'))
	const inputQ7All = Array.from(document.querySelectorAll('.inputQ7'))
	const inputQ8All = Array.from(document.querySelectorAll('.inputQ8'))
	const inputQ9All = Array.from(document.querySelectorAll('.inputQ9'))
	const inputQ10All = Array.from(document.querySelectorAll('.inputQ10'))

	//Question errors //
	const questionError = Array.from(document.querySelectorAll('.question__error-text'))

	// Buttons //
	const actionBtn = Array.from(document.querySelectorAll('.action-btn'))
	const startBtn = document.querySelector('.start-btn')
	const scoreBtn = document.querySelector('.score-btn')
	const repeatBtn = document.querySelector('.repeat-btn')

	// Count score //
	const countScore = document.querySelector('.count')
	const countInfo = document.querySelector('.quiz__show-count-info')

	let scoreQuest = 0

	// Start quiz //
	const startQuiz = () => {
		wrapperAll[0].style.display = 'none'
		wrapperAll[1].style.display = 'flex'
		wrapperAll[1].classList.add('start-animation')

		countdown()
	}

	// Countdown script //
	const countdown = () => {
		minutes--
		countTime = setInterval(() => {
			if (seconds <= 60 && seconds > 10) {
				seconds--
				countTimeText.textContent = `${minutes}:${seconds}`
			} else if (seconds <= 10 && seconds > 0) {
				seconds--
				countTimeText.textContent = `${minutes}:0${seconds}`
			} else if (minutes === 0 && seconds === 0) {
				clearInterval(countTime)
				countTimeText.textContent = `0:00`
				wrapperAll.forEach(wrap => {
					wrap.style.display = 'none'
				})

				showScore()
			} else {
				minutes--
				seconds = 60
				seconds--
				countTimeText.textContent = `${minutes}:${seconds}`
			}
		}, 1000)
	}

	// CheckMarking scripts //
	const verificationQ1 = () => {
		if (inputQ1All.filter(input => input.checked === true).length > 0) {
			questionError[0].style.display = 'none'
			questionError[0].textContent = ''

			if (inputQ1All[0].checked === true) {
				scoreQuest++
			}

			wrapperAll[1].style.display = 'none'
			wrapperAll[2].style.display = 'flex'
			wrapperAll[2].classList.add('start-animation')
		} else {
			questionError[0].style.display = 'block'
			questionError[0].textContent = 'Zaznacz odpowiedź!'
		}
	}

	const verificationQ2 = () => {
		if (inputQ2All.filter(input => input.checked === true).length > 0) {
			questionError[1].style.display = 'none'
			questionError[1].textContent = ''

			if (inputQ2All[3].checked === true) {
				scoreQuest++
			}

			wrapperAll[2].style.display = 'none'
			wrapperAll[3].style.display = 'flex'
			wrapperAll[3].classList.add('start-animation')
		} else {
			questionError[1].style.display = 'block'
			questionError[1].textContent = 'Zaznacz odpowiedź!'
		}
	}

	const verificationQ3 = () => {
		if (inputQ3All.filter(input => input.checked === true).length > 0) {
			questionError[2].style.display = 'none'
			questionError[2].textContent = ''

			if (inputQ3All[2].checked === true) {
				scoreQuest++
			}
			wrapperAll[3].style.display = 'none'
			wrapperAll[4].style.display = 'flex'
			wrapperAll[4].classList.add('start-animation')
		} else {
			questionError[2].style.display = 'block'
			questionError[2].textContent = 'Zaznacz odpowiedź!'
		}
	}

	const verificationQ4 = () => {
		if (inputQ4All.filter(input => input.checked === true).length > 0) {
			questionError[3].style.display = 'none'
			questionError[3].textContent = ''

			if (inputQ4All[1].checked === true) {
				scoreQuest++
			}

			wrapperAll[4].style.display = 'none'
			wrapperAll[5].style.display = 'flex'
			wrapperAll[5].classList.add('start-animation')
		} else {
			questionError[3].style.display = 'block'
			questionError[3].textContent = 'Zaznacz odpowiedź!'
		}
	}

	const verificationQ5 = () => {
		if (inputQ5All.filter(input => input.checked === true).length > 0) {
			questionError[4].style.display = 'none'
			questionError[4].textContent = ''

			if (inputQ5All[3].checked === true) {
				scoreQuest++
			}

			wrapperAll[5].style.display = 'none'
			wrapperAll[6].style.display = 'flex'
			wrapperAll[6].classList.add('start-animation')
		} else {
			questionError[4].style.display = 'block'
			questionError[4].textContent = 'Zaznacz odpowiedź!'
		}
	}

	const verificationQ6 = () => {
		if (inputQ6All.filter(input => input.checked === true).length > 0) {
			questionError[5].style.display = 'none'
			questionError[5].textContent = ''

			if (inputQ6All[1].checked === true) {
				scoreQuest++
			}

			wrapperAll[6].style.display = 'none'
			wrapperAll[7].style.display = 'flex'
			wrapperAll[7].classList.add('start-animation')
		} else {
			questionError[5].style.display = 'block'
			questionError[5].textContent = 'Zaznacz odpowiedź!'
		}
	}

	const verificationQ7 = () => {
		if (inputQ7All.filter(input => input.checked === true).length > 0) {
			questionError[6].style.display = 'none'
			questionError[6].textContent = ''

			if (inputQ7All[3].checked === true) {
				scoreQuest++
			}

			wrapperAll[7].style.display = 'none'
			wrapperAll[8].style.display = 'flex'
			wrapperAll[8].classList.add('start-animation')
		} else {
			questionError[6].style.display = 'block'
			questionError[6].textContent = 'Zaznacz odpowiedź!'
		}
	}

	const verificationQ8 = () => {
		if (inputQ8All.filter(input => input.checked === true).length > 0) {
			questionError[7].style.display = 'none'
			questionError[7].textContent = ''

			if (inputQ8All[3].checked === true) {
				scoreQuest++
			}

			wrapperAll[8].style.display = 'none'
			wrapperAll[9].style.display = 'flex'
			wrapperAll[9].classList.add('start-animation')
		} else {
			questionError[7].style.display = 'block'
			questionError[7].textContent = 'Zaznacz odpowiedź!'
		}
	}

	const verificationQ9 = () => {
		if (inputQ9All.filter(input => input.checked === true).length > 0) {
			questionError[8].style.display = 'none'
			questionError[8].textContent = ''

			if (inputQ9All[2].checked === true) {
				scoreQuest++
			}

			wrapperAll[9].style.display = 'none'
			wrapperAll[10].style.display = 'flex'
			wrapperAll[10].classList.add('start-animation')
		} else {
			questionError[8].style.display = 'block'
			questionError[8].textContent = 'Zaznacz odpowiedź!'
		}
	}

	const verificationQ10AndScore = () => {
		if (inputQ10All.filter(input => input.checked === true).length > 0) {
			questionError[9].style.display = 'none'
			questionError[9].textContent = ''

			if (inputQ10All[1].checked === true) {
				scoreQuest++
			}

			wrapperAll[10].style.display = 'none'
			clearInterval(countTime)
			showScore()
		} else {
			questionError[9].style.display = 'block'
			questionError[9].textContent = 'Zaznacz odpowiedź!'
		}
	}

	// Show score //

	const showScore = () => {
		wrapperAll[11].style.display = 'flex'
		countScore.textContent = scoreQuest

		switch (scoreQuest) {
			case 0:
				countInfo.textContent = 'Jesteś zielony w tym temacie...'
				break
			case 1:
				countInfo.textContent = 'Chyba rzadko bywasz w lesie...'
				break
			case 2:
				countInfo.textContent = 'Chyba rzadko bywasz w lesie...'
				break
			case 3:
				countInfo.textContent = 'Chyba rzadko bywasz w lesie...'
				break
			case 4:
				countInfo.textContent = 'Nie jest źle, zawsze możesz pójść na grzyby...'
				break
			case 5:
				countInfo.textContent = 'Nie jest źle, zawsze możesz pójść na grzyby...'
				break
			case 6:
				countInfo.textContent = 'Jest OK, ale las to nie Twój żywioł...'
				break
			case 7:
				countInfo.textContent = 'Jest OK, ale las to nie Twój żywioł...'
				break
			case 8:
				countInfo.textContent = 'Dobry wynik! Pamietaj, że zawsze możesz być lepszy...'
				break
			case 9:
				countInfo.textContent = 'Poszło Ci bardzo dobrze! Widać że masz jakieś doświadczenie...'
				break
			case 10:
				countInfo.textContent = 'Uzyskałeś maksymlaną ilość punktów! Może warto pomyśleć o pracy w lesie?'
				break
			default:
				countInfo.textContent = 'Coś poszło nie tak...'
				break
		}

		wrapperAll[11].classList.add('start-animation')
	}

	// addEventListeners //
	startBtn.addEventListener('click', startQuiz)
	actionBtn[1].addEventListener('click', verificationQ1)
	actionBtn[2].addEventListener('click', verificationQ2)
	actionBtn[3].addEventListener('click', verificationQ3)
	actionBtn[4].addEventListener('click', verificationQ4)
	actionBtn[5].addEventListener('click', verificationQ5)
	actionBtn[6].addEventListener('click', verificationQ6)
	actionBtn[7].addEventListener('click', verificationQ7)
	actionBtn[8].addEventListener('click', verificationQ8)
	actionBtn[9].addEventListener('click', verificationQ9)
	scoreBtn.addEventListener('click', verificationQ10AndScore)
	repeatBtn.addEventListener('click', () => {
		window.location.reload(true)
	})
}

document.addEventListener('DOMContentLoaded', main)
