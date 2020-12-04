$(document).ready(function () {
	$('.festiwal-cover').width(document.querySelector('.festiwal').offsetWidth)
	$('.festiwal-cover').height(document.querySelector('.festiwal').offsetHeight)
	$('.slides').width(document.querySelector('.inside').offsetWidth)
	$('.slides').height(document.querySelector('.inside').offsetHeight)

	$('.slides').addClass('slide-hide')

	console.log('ready!')

	let video = document.querySelector('.ft-video')

	//load imges

	var buffered = true

	setInterval(() => {
		// console.log(video.buffered)
		if (video.buffered) {
			$('.loading').addClass('stop-loading')
			// buffered = true
			// video.play()
		}
	}, 3000)

	var displaySlides = function () {}
})

$('.festiwal').click(function () {
	$(this).data('expanded') == true
	$(this).data('expanded', !$(this).data('expanded'))

	var interval

	if ($(this).data('expanded') == true) {
		// $(this).css({ height: '50vh' })
		$(this).children().eq(1).velocity({ height: '50vh' }, 'slow')
		$(this).children().eq(0).velocity({ height: '50vh' }, 'slow')
		$(this).children().eq(0).children().eq(0).css({ transform: 'translate(-600px)' })
		$(this).children().eq(0).children().eq(1).css({ transform: 'translate(600px)' })

		$(this).find('.slides').removeClass('slide-hide')

		$(this).find('.slides').css({ height: '50vh' })

		$(this).find('.ft-video').trigger('play')

		setTimeout(() => {
			interval = setInterval(() => {
				if ($(this).find('.slide.slide-left').length == 0 && $(this).find('[class=slide]').length == 0) {
					$(this).find('.slide-right').removeClass('slide-right').addClass('slide-left')
					$(this).find('[class=slide]').first().addClass('slide-right')
				} else {
					$(this).find('[class=slide]').first().addClass('slide-right')
					$(this).find('.slide-left').first().removeClass('slide-left')
				}
			}, 8000)
		}, 1000)
	} else {
		clearInterval(interval)
		$(this).css({ height: '10vh' })
		$(this).children().eq(1).velocity({ height: '10vh' }, 'slow')
		$(this).children().eq(0).velocity({ height: '10vh' }, 'slow')
		$(this).children().eq(0).children().eq(0).css({ transform: 'translate(0)' })
		$(this).children().eq(0).children().eq(1).css({ transform: 'translate(0)' })

		$(this).find('.slides').addClass('slide-hide')

		$(this).find('.slides').css({ height: '10vh' })

		$(this).find('.slide').removeClass('slide-right').addClass('slide-left')

		$(this).find('.ft-video').trigger('pause')
	}
})
