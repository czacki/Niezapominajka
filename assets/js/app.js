$(document).ready(function () {
	$('.festiwal-cover').width(document.querySelector('.festiwal').offsetWidth)
	$('.festiwal-cover').height(document.querySelector('.festiwal').offsetHeight)
	$('.slides').width(document.querySelector('.inside').offsetWidth)
	$('.slides').height(document.querySelector('.inside').offsetHeight)
	console.log('ready!')
	let video = document.querySelector('video')

	var buffered = true

	setInterval(() => {
		// console.log(video.buffered)
		if (video.buffered) {
			console.log('loaded')
			$('.loading').addClass('stop-loading')
			// buffered = true
			video.play()
		}
	}, 1000)

	var displaySlides = function () {}

	setInterval(() => {
		console.log('buffered')
		if (buffered == true) {
			$('.festiwal').each((i) => {
				let e = $('.festiwal').eq(i).find('.slides')

				if (e.find('.slide.slide-left').length == 0 && e.find('[class=slide]').length == 0) {
					e.find('.slide-right').removeClass('slide-right').addClass('slide-left')
					e.find('[class=slide]').first().addClass('slide-right')
				} else {
					e.find('[class=slide]').first().addClass('slide-right')
					e.find('.slide-left').first().removeClass('slide-left')
				}
			})
		}
	}, 2000)
})
