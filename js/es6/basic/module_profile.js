
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

function v1() {console.info('v1')}
function v2() {console.info('v2')}

export { firstName, lastName, year, v1 as v1f, v2 };