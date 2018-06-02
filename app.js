$(document).ready(function () {
    // let dataObj = {}

    $('.setData').on('click', function () {
        let shortName = $('.shortName').val()
        let textAreaVal = $('.textArea').val()
        let textAreaCode = `<pre><code>${textAreaVal}</code></pre>`
        // $('.debug').html(`<pre><div class= snip ${shortName}>${shortName}</div></br><code>${textAreaVal}</code></pre>`)
        localStorage.setItem(`${shortName}`, textAreaCode)
        $('.textArea').val('')
        $('.shortName').val('')
    })


    $('.getAllData').on('click', function () {
        // let retrieveData = localStorage.getItem('myFormTextData')
        // $('.debug').html(`<pre>;&lt;code&gt;${retrieveData}&lt;/code&gt;</pre>`)
        $('.snippetList').html('')
        for(var key in localStorage) {
            console.log(key)
            if(typeof localStorage[key] === 'string') {
                // let textCode = $('.snippetList').val().replace(/\n/g, '<br>').replace(/ /g, '&nbsp');
                // $('.snippetList').append(`<div class=${key}><pre><code>${localStorage[key]}</code></pre></div>`)
                $(`<div class="snip ${key}"><pre><code>${localStorage[key]}</code></pre></div>`).appendTo('.snippetList')

                $('.snip').each(function (i, block) {
                    hljs.highlightBlock(block);
                });
            } 
        }

    })
    $('.filter').on('keypress', function () {
        let shortName = $('.shortName').val()
        let textAreaVal = $('.textArea').val()
        let textAreaCode = `<pre><code>${textAreaVal}</code></pre>`
        let filter = $('.filter').val()
        console.log(filter)
        // $('.snippetList').html(`<pre><div class= snip ${shortName}>${shortName}</div></br><code>${textAreaVal}</code></pre>`)
        for(var key in localStorage) {
            if( filter === key) {
                $('.snippetList').html('')
                $(`<div class="snip ${key}"><pre><code>${localStorage[key]}</code></pre></div>`).appendTo('.snippetList')

                $('.snip').each(function (i, block) {
                    hljs.highlightBlock(block);
                });
            }
            // console.log(key)

        }
    })



    // $('.textField').on('keyup', function () {
    //     let textFieldValue = $('.textField').val()
    //     // console.log(textFieldValue)
    //     $('.snippetList').text(textFieldValue)
    // })
})