function main() {
    // prob1();
    // prob2();
    // chall1();
    chall2();
}
main();
function prob1() {
// Problem 1:
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. Create a function that prints all properties. Create an object of the class and use the function.

    class GitHub {
        constructor(n1,n2,n3,n4){
            this.userName = n1;
            this.fileName = n2;
            this.DORep = n3;
            this.code = n4;
        }
        printProps()
        {
            console.log(this.userName);
            console.log(this.fileName);
            console.log(this.DORep);
            console.log(this.code);
        }
    }

    let myProject = new GitHub("LilPrice", "READ.ME", "What to do.", "Javascript");
    myProject.printProps();
}

function prob2() {
// Problem 2:
// Create a Movie class with the following properties: movieName, rating, and yearReleased. Create a method to change the rating and another one to change the yearReleased properties. Create an object of the class and use the two methods you created.

    class Movie{
        constructor(r1,r2,r3){
            this.movieName = r1;
            this.rating = r2;
            this.year = r3;
        }
    }
    let reviews = new Movie("A Silent Voice", 0, 0);
    console.log(reviews);
    reviews.rating = parseInt(prompt("Rate the movie: " + reviews.movieName));
    reviews.year = parseInt(prompt("What year it released?"));
    console.log(reviews);

}
function chall1() {
//     Challenge 1:
// Create a Person class with three properties: name, weight, and height. Create a method that can calculate the BMI of a person using the formula below. Create an object of the class and use the function.
//
// BMI is (weight / (height * height)) x 703. Weight is in pounds and height is in inches.
    class person
    {
        constructor(m1,m2,m3)
        {
            this.name = m1;
            this.weight = m2;
            this.height = m3;
        }
        personBMI(){
            return parseInt(this.weight) / (parseInt(this.height) * parseInt(this.height)) * 703;
        }

    }
    let BMI = new person("John", 202, 68);
    console.log(BMI.name + " BMI is " + BMI.personBMI());


}
function chall2() {
//     Challenge 2:
// Create a Bank class with the the name and balance properties. Afterwards, create an object of the class and follow the instructions below:
//     Creates an account named "Matt's account" with the balance of 1000
// Creates an account named "My account" with the balance of 0
// Withdraws 100.0 from Matt's account
// Deposits 100.0 to My account
// Prints both accounts
    class Bank{
        constructor(j1,j2){
            this.account = j1;
            this.balance = j2;
        }

    }
    let Cust1 = new Bank("Matt", 1000);
    let Cust2 = new Bank("My Account", 0);
    Cust1.balance = Cust1.balance - 100;
    Cust2.balance = Cust2.balance + 100;
    console.log(Cust1.account + "'s has a balance of " + Cust1.balance);
    console.log(Cust2.account + " has a balance of " + Cust2.balance);

}