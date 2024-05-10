// Task #1
// Implement checkAdultStatus function.
// Parameter is age.
function checkAdultStatus(age){
// Initialize adultStatus variable.
    const adultStatus = 18 
// Returns true if age is 18 or older.
// Returns false if age is under 18.
        console.log(age >= adultStatus)
}
// Expected results are Boolean.
checkAdultStatus(25)
checkAdultStatus(14)


// Test #2
// Implement calculatePassingStatus function.
// Parameter is score.
function calculatePassingStatus(score){
    const passingStatus = 70
console.log(score >= passingStatus)
}
// Results are Boolean.
calculatePassingStatus(60)
calculatePassingStatus(80)

// Test #3
// Implement determinGrade function
function determineGrade(score){
//Assign letter grade based on score.
    if(score <= 60){
        console.log(`F`)
    }
    else if(score <= 70){
        console.log(`D`)
    }
    else if(score <= 80){
        console.log(`C`)
    }
    else if(score <= 90){
        console.log(`B`)
    }
    else if(score <= 100){
        console.log(`A`)
    }
    else if(score >= 100){
        console.log(`A++`)
    }
}
 determineGrade(65)

// Test #4
// Implement interpretSeason Function.
function interpretSeason(season){
    if (season === "summer"){
        console.log(`It is hot today.`)
    }
    else if (season === "spring"){
        console.log(`The flowers are blooming.`)
    }
    else if (season === "autumn"){
        console.log(`The leaves are changing colors.`)
    }
    else if (season === "winter"){
        console.log(`It is cold today.`)
    }
    else{
        console.log(`Please enter a valid season!`)
    }
}

interpretSeason("spring")

// Test #5
// Implement weekendorWeekday function
function weekendOrWeekday(dayOfTheWeek){
    if(dayOfTheWeek === "saturday" && "sunday"){
        console.log(`Have a good weekend`)
    }
    else{
        console.log(`It is a weekday!`)
    }
}
weekendOrWeekday("monday")

// ALL Done!!!!

