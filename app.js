$(document).ready(function () {

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
		let local = localStorage.getItem()
		for (let key in localStorage) {
		// 	if (typeof localStorage[key] === 'string') {
		// 		// let textCode = $('.snippetList').val().replace(/\n/g, '<br>').replace(/ /g, '&nbsp');

		// 		let htmlEnabled = `${(localStorage[key].replace(/</g, '&lt;'))}`
		// 			// .replace(/</g, '&lt;')
		// 		// console.log((htmlEnabled))
		// 		$(`<div class="snip ${key}">
		// 		<h3>${key}</h3>
		// 		<pre><code>${htmlEnabled}</code></pre>
		// 		</div>`).appendTo('.snippetList')



		// 		$('.snip').each(function (i, block) {
		// 			hljs.highlightBlock(block);
		// 		});
		// 	}
		}
	})

	$('.filter').on('keypress', function () {
		let filter = $('.filter').val()
		let retrieve = localStorage.getItem(`${filter}`).replace(/</g, '&lt;')
		let codeSnippet =	`<div class="snip ${filter}"><h3>${filter}</h3>
				<pre><code>${retrieve}</code></pre></div>`
				$('.snippetList').html('')
				$(codeSnippet).appendTo('.snippetList')

				$('.snip').each(function (i, block) {
					hljs.highlightBlock(block);
				});
		// for (let key in localStorage) {
		// 	if (filter === key) {
		// 		let htmlSnippet = localStorage[key].replace(/</g, '&lt;')
		// 		let codeSnippet = 
		// 		`<div class="snip ${key}">
		// 			<h3>${key}</h3>
		// 		<pre><code>${htmlSnippet}</code></pre>
		// 		</div>`
		// 		$('.snippetList').html('')
		// 		$(codeSnippet).appendTo('.snippetList')

		// 		$('.snip').each(function (i, block) {
		// 			hljs.highlightBlock(block);
		// 		});
		// 	}
		// }
	})

})

//helper func for fieldset
function autoGrow(oField) {
	if (oField.scrollHeight > oField.clientHeight) {
		oField.style.height = oField.scrollHeight + "px";
	}
}