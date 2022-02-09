/*let marksWeight = 78;
            let marksTall = 1.69;
            let johnWeight = 92, johnTall = 1.95;
            let bmiMarks, bmiJohn;
            let markHigherBMI;

            bmiMarks = marksWeight / marksTall ** 2;
            bmiJohn = johnWeight / johnTall **2;
            markHigherBMI = bmiMarks > bmiJohn;
            const str = ('My name is ${bmiMarks}');
            if(bmiMarks > bmiJohn)
                            console.log(`Marks bmi ${bmiMarks} is bigger than Johns bmi ${bmiJohn}!`);
                //console.log('Marks bmi' + bmiMarks + 'is bigger than Johns bmi ' + bmiJohn);
            } else  {
                console.log(`John bmi ${bmiJohn} is bigger than Marks bmi ${bmiMarks}!`);
            //console.log('John bmi ' + bmiJohn + ' is bigger than Marks bmi ' + bmiMarks);
}

 TASK #3 
let dolphinAvgScore = (96 + 108 + 89) / 3;
let koalasAvgScore = (88 + 91 + 110) / 3;

    if (dolphinAvgScore > koalasAvgScore)
    {
        console.log(`Dolphins have better avg score ${dolphinAvgScore} : ${koalasAvgScore} !`)
    }else if (dolphinAvgScore === koalasAvgScore){
        console.log(`Avg score is tied ${dolphinAvgScore} : ${koalasAvgScore} !`)
    }else {
        console.log(`Koalas have better avg score ${koalasAvgScore} : ${dolphinAvgScore} !`)
    } 


    let dolphinAvgScore = (97 + 112 + 101) / 3;
    let koalasAvgScore = (109 + 95 + 123) / 3;
    
        if (dolphinAvgScore > koalasAvgScore && dolphinAvgScore >= 100)
        {
            console.log(`Dolphins have better avg score ${dolphinAvgScore} : ${koalasAvgScore} !`)
        }else if (dolphinAvgScore === koalasAvgScore){
            console.log(`Avg score is tied ${dolphinAvgScore} : ${koalasAvgScore} !`)
        }else if (dolphinAvgScore < koalasAvgScore && koalasAvgScore >= 100){
            console.log(`Koalas have better avg score ${koalasAvgScore} : ${dolphinAvgScore} !`)
        } 

        #TASK 4 
    let bill = 275;

    console.log ('pocetka');
    let tip = (bill >= 50 && bill <= 300) ? `Tip is ${bill * 0.15} \n` : `Tip is ${bill * 0.2}`;
    console.log(tip, bill); 

    let bill = 40;

    let tip = bill >= 50 && bill <= 300 ? `Tip is ${bill * 0.15}` : `Tip is ${bill * 0.2}`;
    console.log(tip, bill) 

    let bill = 430;
    
    let tip = (bill >= 50 && bill <= 300) ? `Tip is ${bill * 0.15}, bill was ${bill}, 
    total bill was ${bill * 0.15 + bill}` : `Tip is ${bill * 0.2} , bill was ${bill}, 
    total bill was ${bill * 0.2 + bill}`;
    console.log(tip); 

     function chooseWinner (teamDolphins, teamKoalas){
            console.log(teamKoalas, teamDolphins);
            if(teamDolphins > teamKoalas * 2){
                console.log(`Team Dolphins won ${teamDolphins} : ${teamKoalas}`);
            } else if (teamKoalas > teamKoalas * 2){
                console.log(`Team Koalas won ${teamKoalas} : ${teamDolphins}`);
            } else
            {
                console.log(`They didn't meet conditions ${teamDolphins} : ${teamKoalas}`);
            }
        }
 


//Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
        const calAvg = (a, b, c) => (a + b + c) / 3 ;

            
        let scoreDoplhins = calAvg(44, 23, 71);
        let scoreKoalas = calAvg(65, 54, 49);
        console.log(scoreDoplhins,scoreKoalas);

        
        const checkWinner = function (avgDoplhins, avgKoalas){
            if(avgDoplhins >= avgKoalas * 2) {
                console.log(`Dolphins win (${avgDoplhins} vs ${avgKoalas})`);
            }else if (avgKoalas >= avgDoplhins * 2){
                console.log(`Koalas win (${avgKoalas} vs ${avgDoplhins})`);
            } else
            {
                console.log(`No team wins (${avgDoplhins} vs ${avgKoalas})`);
            }
        }

        checkWinner(scoreDoplhins, scoreKoalas); 


        function calcTip(bill){
            //let tip = bill >= 50 && bill <= 300 ? `Tip is ${bill * 0.15}` : `Tip is ${bill * 0.2}`
            if(bill >= 50 && bill <= 300){
                tip = bill * 0.15;
                return tip;
            }
            else {
                tip = bill * 0.20;
                return tip;
            }
        }

        let calcTipExpression = function(bill){
            
            if(bill >= 50 && bill <= 300){
                tip = bill * 0.15;
                return tip;
            }
            else {
                tip = bill * 0.20;
                return tip;
            }
        }

        const calcTipArrow = bill => {
            if(bill >= 50 && bill <= 300){
                tip = bill * 0.15;
                return tip;
            }
            else {
                tip = bill * 0.20;
                return tip;
            }
        }

        const Bill = 100;
        console.log(calcTipExpression(Bill));
        console.log(calcTipArrow(Bill));
        console.log(calcTip(Bill));

        let bills = [125, 555, 44];
        let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
        let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
        console.log(bills);
        console.log(tips);
        console.log(total); */

        const mark = {
            name: 'Mark',
            weight: 78,
            height: 1.69,
            calcBMI: function() {
                this.bmi = this.weight / this.height ** 2;
                return this.bmi;
            }
        }

        const john = {
            name: 'John',
            weight: 92,
            height: 1.95,
            calcBMI: function() {
                this.bmi = this.weight / this.height ** 2;
                return this.bmi;
            }
        }

        mark.calcBMI();
        john.calcBMI();
        console.log(mark.bmi, john.bmi);

        if(john.bmi > mark.bmi){
        console.log(`${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s (${mark.bmi})!`);
        } else{
            console.log(`${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s (${john.bmi})!`);
        }

        /*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:

1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method

3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall*/



        