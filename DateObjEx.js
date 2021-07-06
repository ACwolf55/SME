const moonLanding = new Date('July 20, 69 00:20:18 GMT+00:00');

// milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// expected output: -14254782000

const moonLeav = new Date('July 22, 69 00:20:18 GMT+00:00');

console.log(moonLeav.getTime())

// new Date   will get todays date
const today = new Date

console.log(today)
//result 2021-07-06T20:57:52.538Z

//toString will give more readable output for date
const todayString = today.toString()

console.log(todayString)
// result - Tue Jul 06 2021 21:01:41 GMT+0000 (Coordinated Universal Time)
