import './index.css'

/* eslint-disable no-console */




import numeral from 'numeral'

const courseValue = numeral(1000).format('$0,0,00')
//add (debugger) to debug the ES6 Code via Source Maps
console.log('I would Pay ' + courseValue + ' for this awesome course.')
