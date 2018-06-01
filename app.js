$(document).ready(function () {
    // $('body').html(<p>Hello World</p>)
    $('.submitForm').on('click', function () {
        let textFieldValue = $('.textField').val()
        // console.log(textFieldValue)
        $('debug').text(textFieldValue)
    })
    $('.textField').on('keyup', function () {
        let textFieldValue = $('.textField').val()
        // console.log(textFieldValue)
        $('debug').text(textFieldValue)
    })
})