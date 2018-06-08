$(document).ready(function () {
	
	$('.setData').on('click', function () {
		let shortName = $('.shortName').val()
		let textAreaVal = $('.textArea').val()
		let codeText = `${textAreaVal}`
		localStorage.setItem(`${shortName}`, codeText)
		$('.textArea').val('')
		$('.shortName').val('')
		$('.snippetList').html('')
		getData(localStorage)
		highlight("snip")
	})

	$('.getAllData').on('click', function () {
		$('.snippetList').html('')
		getData(localStorage)
		highlight("snip")
	})

	$('.filter').on('keypress', function () {
		let filter = $('.filter').val()
		let retrieve = localStorage.getItem(`${filter}`).replace(/</g, '&lt;')
		let codeSnippet =	`<div class="snip ${filter}"><h3>${filter}</h3>
				<pre class="prettyprint"><code>${retrieve}</code></pre></div>`
		$('.snippetList').html('')
		$(codeSnippet).hide().appendTo('.snippetList').fadeIn("slow")
		highlight("snip")
	})

}) //end of document

//helper func for fieldset
function autoGrow(oField) {
	if (oField.scrollHeight > oField.clientHeight) {
		oField.style.height = oField.scrollHeight + "px";
	}
}
//function to grab localstorage data
let getData = (obj) => {
	for (let key in obj) {
		if (typeof obj[key] === 'string') {
			let htmlEnabled = `${(obj[key].replace(/</g, '&lt;'))}`

			$(`<div class="snip ${key}">
						<h3>${key}</h3>
						<pre><code>${htmlEnabled}</code></pre>
						</div>`).hide()
				.appendTo('.snippetList')
				.fadeIn("slow");
		}
	}
}
getData(localStorage)

//syntax highlighting
let highlight = (x) => {
	let input = x;
	$(`.${input}`).each(function (i, block) {
	hljs.highlightBlock(block);
	});
}