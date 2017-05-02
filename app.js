/**
 * Created by sam.westsooby on 1/5/17.
 */
var g = G$('John', 'Doe')
var esse = G$('Duncan', 'Ramirez', 'es')

$('#login').on('click', function() {

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var isFormal = $('#formal').val() === 'formal';

    var loginGrtr = G$(firstName, lastName);

    loginGrtr.setLang($('#lang').val()).loginDisplay('#greeting', isFormal).log();

});