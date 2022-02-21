/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall
*/
// let markMass = 78; // kg
// let johnMass = 92; // kg
// let markHeight = 1.69 // m
// let johnHeight = 1.95 // m


// // let markMass = 95; // kg
// // let johnMass = 85; // kg
// // let markHeight = 1.88 // m
// // let johnHeight = 1.76 // m

// markBMI = markMass / markHeight ** 2;
// johnBMI = johnMass / johnHeight ** 2;

// markHigherBMI = markBMI > johnBMI;


// console.log(markMass / (markHeight*markHeight))
// console.log(johnMass / (johnHeight*johnHeight))
// console.log(markBMI)
// console.log(johnBMI)
// console.log(markHigherBMI)
// /*
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 
// */
// if (markHigherBMI){
//     console.log("John's BMI is higher than Mark's! 😁");
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
// } else {
//     console.log("Mark's BMI (28.3) is higher than John's (23.9) 🙌!")
//     console.log(`Mark's BMI (${markBMI}) is not higher than John's (${johnBMI})`)
// }




/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// const dolphinsS1 = 96, dolphinsS2 = 108, dolphinsS3 = 89;
// const koalasS1 = 88, koalasS2 = 91, koalasS3 = 110;

// const dolphinsS1 = 97, dolphinsS2 = 112, dolphinsS3 = 101;
// const koalasS1 = 109, koalasS2 = 95, koalasS3 = 123;

// // const dolphinsS1 = 97, dolphinsS2 = 112, dolphinsS3 = 101;
// // const koalasS1 = 109, koalasS2 = 95, koalasS3 = 106;

// const minS = 100
// const dolphinsAvg = (dolphinsS1 + dolphinsS2 + dolphinsS3) / 3;
// const koalasAvg = (koalasS1 + koalasS2 + koalasS3) / 3;
// if (dolphinsAvg > koalasAvg && dolphinsAvg >= minS) console.log('Dolphins are the winner')
// else if (dolphinsAvg < koalasAvg && koalasAvg >= minS) console.log('Koalas are the winner')
// else if (dolphinsAvg === koalasAvg && koalasAvg >= minS) console.log('There is a DRAW')
// else console.log('NO WINNER')

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/
let tip, bill = 430;

tip = bill*((bill > 50 && bill < 300) ? 0.15 : 0.20) 
console.log(`tip must be ${tip}, because you spend ${bill}`)