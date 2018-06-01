$(document).ready(function () {
    // $('body').html(<p>Hello World</p>)
    $('.setData').on('click', function () {
        let textFieldValue = $('.textField').val()
        // console.log(textFieldValue)
        $('.debug').text(textFieldValue)
        localStorage.setItem('myFormTextData', textFieldValue)
        $('.textField').val('')
    })

    $('.getData').on('click', function () {
        let retrieveData = localStorage.getItem('myFormTextData')
        $('.debug').text(retrieveData)
    })

    // $('.textField').on('keyup', function () {
    //     let textFieldValue = $('.textField').val()
    //     // console.log(textFieldValue)
    //     $('.debug').text(textFieldValue)
    // })
})