console.log('hi')


const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

if(isMorning == true)
{
    document.querySelector('#welcome h2').textContent = "Good Morning"
}

else if (isAfternoon == true)
{
    document.querySelector('#welcome h2').textContent = "Good Afternoon"
}

else if (isEvening == true)
{
    document.querySelector('#welcome h2').textContent = "Good Evening"
}

const secretMesseage = "Why did the Javascript developer wear glasses? ----- Because they couldn't C# :)"
localStorage.setItem("It's a secret to everybody.", JSON.stringify(secretMesseage))
