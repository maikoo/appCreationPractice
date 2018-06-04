$(document).ready(function () {
	// let dataObj = {}

	$('.setData').on('click', function () {
		let shortName = $('.shortName').val()
		let textAreaVal = $('.textArea').val()
		// let codeText = `<pre><code>${textAreaVal}</code></pre>`
		let codeText = `${textAreaVal}`
		// $('.debug').html(`<pre><div class= snip ${shortName}>${shortName}</div></br><code>${textAreaVal}</code></pre>`)
		localStorage.setItem(`${shortName}`, codeText)
		$('.textArea').val('')
		$('.shortName').val('')
	})

	$('.getAllData').on('click', function () {
		// let retrieveData = localStorage.getItem('myFormTextData')
		// $('.debug').html(`<pre>;&lt;code&gt;${retrieveData}&lt;/code&gt;</pre>`)
		$('.snippetList').html('')
		for (let key in localStorage) {
			if (typeof localStorage[key] === 'string') {
				// let textCode = $('.snippetList').val().replace(/\n/g, '<br>').replace(/ /g, '&nbsp');

				// let htmlEnabled = localStorage[key].replace(/<[^>]+>/g, '');
				let htmlEnabled = `${JSON.stringify(localStorage[key].replace(/</g, '&lt;'))}`
				
					// .replace(/</g, '&lt;')
				console.log((htmlEnabled))
				// for (let i = 0; i < localStorage[key].length; i++) {
				// 	let char = localStorage[key][i];
				// 	console.log(char);
				// 	if(char === '<') char = 'CHANGED'
				// }
				// console.log(typeof localStorage[key])
				// if (localStorage[key].indexOf('<') !== -1 || localStorage[key].indexOf('</') !== -1) {

				// $(`<div class="snip ${key}"><h3>${key}</h3><pre><code>${htmlEnabled}</code></pre></div>`).appendTo('.snippetList')

				$(`<div class="snip ${key}">
				<h3>${key}</h3>
				<pre><code>${localStorage[key]}</code></pre>
				</div>`).appendTo('.snippetList')



				$('.snip').each(function (i, block) {
					hljs.highlightBlock(block);
				});
			}
		}
	})

	$('.filter').on('keypress', function () {
		let filter = $('.filter').val()
		// $('.snippetList').html(`<pre><div class= snip ${shortName}>${shortName}</div></br><code>${textAreaVal}</code></pre>`)
		for (let key in localStorage) {
			if (filter === key) {
				let codeSnippet = 
				`<div class="snip ${key}">
					<h3>${key}</h3>
				<pre><code>${localStorage[key]}</code></pre>
				</div>`

				$('.snippetList').html('')
				$(codeSnippet).appendTo('.snippetList')

				$('.snip').each(function (i, block) {
					hljs.highlightBlock(block);
				});
			}
		}
	})



	// $('.textField').on('keyup', function () {
	//     let textFieldValue = $('.textField').val()
	//     // console.log(textFieldValue)
	//     $('.snippetList').text(textFieldValue)
	// })


})

//helper func for fieldset
function autoGrow(oField) {
	if (oField.scrollHeight > oField.clientHeight) {
		oField.style.height = oField.scrollHeight + "px";
	}
}