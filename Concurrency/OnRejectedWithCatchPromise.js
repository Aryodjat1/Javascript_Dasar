//metode 1(tidak disarankan)
checkStock()
.then(handleSuccess)
.then(null, handleFailure);

//metode 2(disarankan)
checkStock()
.then(handleSuccess)
.catch(handleFailure);