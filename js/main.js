(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			normal:    [ '1081px',  '1280px'  ],
			narrow:    [ '821px',   '1080px'  ],
			narrower:  [ '737px',   '820px'   ],
			mobile:    [ '481px',   '736px'   ],
			mobilep:   [ null,      '480px'   ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 300,
			alignment: 'center',
			noOpenerFade: true
		});

	// Nav.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						'<a href="index.html" class="link depth-0">Home</a>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					resetScroll: true,
					resetForms: true,
					side: 'top',
					target: $body,
					visibleClass: 'navPanel-visible'
				});
		//Scroll
		document.addEventListener('scroll', () => {
			const hero_header = document.getElementById("hero");
			if (hero_header.getBoundingClientRect().top < document.getElementById("nav").getBoundingClientRect().height) {
				document.getElementById("nav").style.backgroundColor = '#262626';
				document.getElementById("nav").style.borderBottom = 'solid white 3px';
				document.getElementById("nav").style.borderLeft = 'solid white 3px';
				document.getElementById("nav").style.borderRight = 'solid white 3px';


			} else {
				document.getElementById("nav").style.background = 'rgba(255, 255, 255, 0.15)';
				document.getElementById("nav").style.border = 'solid 1px  rgba(255, 255, 255, 0.75)';
				document.getElementById("nav").style.borderColor = '#fff';


			}
		});
})(jQuery);