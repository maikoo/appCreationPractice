$(document).ready(function () {

	// $('.container').scroll(function () {
	// 	$('#fixed').css('top', $(this).scrollTop());
	// });

	$('.setData').on('click', function () {
		let shortName = $('.shortName').val()
		let textAreaVal = $('.textArea').val()
		let codeText = `${textAreaVal}`

		localStorage.setItem(`${shortName}`, codeText)
		$('.textArea').val('')
		$('.shortName').val('')
	})

	$('.getAllData').on('click', function () {
		$('.snippetList').html('')
		// let local = localStorage.getItem()
			let getData = () => {
				for (let key in localStorage) {
				if (typeof localStorage[key] === 'string') {
					let htmlEnabled = `${(localStorage[key].replace(/</g, '&lt;'))}`

					$(`<div class="snip ${key}">
						<h3>${key}</h3>
						<pre><code>${htmlEnabled}</code></pre>
						</div>`).hide().prependTo('.snippetList').fadeIn("slow");

					$('.snip').each(function (i, block) {
						hljs.highlightBlock(block);
					});
				}
			}
		}
		getData()
	})


	$('.filter').on('keypress', function () {
		let filter = $('.filter').val()
		let retrieve = localStorage.getItem(`${filter}`).replace(/</g, '&lt;')
		let codeSnippet =	`<div class="snip ${filter}"><h3>${filter}</h3>
				<pre><code>${retrieve}</code></pre></div>`
				$('.snippetList').html('')
				$(codeSnippet).hide().appendTo('.snippetList').fadeIn("slow")

				$('.snip').each(function (i, block) {
					hljs.highlightBlock(block);
				});

	})

})

//helper func for fieldset
function autoGrow(oField) {
	if (oField.scrollHeight > oField.clientHeight) {
		oField.style.height = oField.scrollHeight + "px";
	}
}