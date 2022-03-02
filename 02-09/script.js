// {} - scope, (block)

//if else 

//var x = +prompt("too oruulna uu")
//if(x < 10){
    // true bh uyd ene dotorh code ajillana 
//    var isTrue = true;
//} else {
    // false ur dun garsan uyd ene heseg ajillana 
//    isTrue = false; 
//} 

//console.log(isTrue)

//var number = +prompt('too');

//if(Math.sign(number) === 1){
    //var number = ("eyreg");
//}else if(Math.sign(number) === -1){
   // var number = ("sorog");
//}
//console.log(number)

// ternary operator 
// num < 0 ? console.log('sorog') : console.log ("eyreg");
// ? - if : - else

//§§ logic react deer hereglegdej bolno oo 
//num < 0 §§ console.log("sorog"); 
//§§ - if statement

//string methods

//var str = "this is dummy string";
//index - 0, 1 , 2
//charAt(index)
//slice (startIndex , endIndex)
//trim() iluu hesgiig tastana

//davtalt sudalj irne 
//daalgavar : ner oruulaad, buh egshig usguudiig consoled hevlene aeiou


//02-18


//1. 100 hurtelh toonuudaas buh anhni toonuudiin nillberiig ol.
//2. 100 hurtelh toonuudaas buh 7-d huvaagdah toonuudiin niilber. 
//3. garaas too useg holildson text ogogdson bol, tuhain textiin too bolon usguudiig salgaj, tus tusad ni string bolgoj hadgal.
//jishee: d2slkfjeun23jnf3i2ufnn23ufnkjw
//4. garaas too ogogdson bol tuhain tooni suuleesee 2 dahi tsifr ymar too baigaag ol.
//5. garaas ug ogogdson bol, tuhain ugend davtagdahgui toogoor heden shirheg egshig useg baigaag ol.



//function anhnii(too) {
//    if(too < 2) return false;
//    for(var i = 2; i < too; i++) {
//        if(too % i ==0)
//            return false; 
//    }
//    return true;
//}
//for (var i = 0; i < 100; i++){
//    if(anhnii(i)) console.log(i);
//}


//for (var i=1; i <= 100; i++){
//if (i % 7 == 0)
//console.log(i);
//}

// non primitive data types in js 
// array, object, /regexp/ - data structure 

//var massiv = new Array(123, 34 ,56);
// []
//var massiv1 = [123, "ewfbiuwef", 213, "aufiqwbf", true];
//var nestedMassiv = [[213, 2131,123 ]["asudhiqnwu", 12339, "duqdisamd"]]
//massiv1[4] = "augment"; // massiv aas solih 
// push - hamgiin suuld element nemj ogoh 
// pop - hamgiin suuliin elementiig ustgah
// shift - hamgiin ehnii elementiig ustgah 
// unshift - hamgiin ehend element nemeh 
// slice - todorhoi hesgiig tasdaj avah
// splice - dundaas n todorhoi hesgiig ustgah 
// reverse - ogogdluudiin bairlaliig urvuu bolgoh
//split - tasalj haruulah

//massiv1.push("glhf");
//massiv1.pop();

//TypeScript deer adil massiv tai adil Tuple toog zaaj ogno oo
//Tuple = massiv 


//var tuple = [123, "yeti", true];

//for (typeof tuple + Number){
//    return true
//}

//... - spread operator
//electronjs
//nestjs
//typeScript

//var person1 = {
//    name : 'tungalag', 
//    age : '20', 
//    email : 'tungalag@mail'
//}
//var person2 = {
//    name : 'bilguun',
//    age : '20',
//    email : 'bilguun@mail'
//}
//var person = person1;
//var members = [hun, person];
//var email = +prompt(email);
//for(var i = 0; i < members.length; i++);
//    if(members[i].email == email){
//        var ner = +prompt('solih ner ee oruulna uu');
//        members[i].ner = ner;
//    }

//var mass =[12, 13, 14, 15];
//for(var el of mass){
//    console.log(el)
//}

//for(var el in person1){
//    console.log(el)
//}

//var i = 0; 
//while (i < 10){
//    if(i%2 === 1){
//        console.log(i)
//    }
//    i++;
//}


// 2-25

// Function - programiin burfuulj bui jijig hesguudiig funkts gene ee 

// funkts ni toforhoi ajil guitsetgeh esvel tootsoolol hiih zorilgotoi baij bolno.


//global variable hezee ch duudaj ogch bolno oo.
//function myfunction() {
    // local variable ene ni zovhon function dotor ajilna aa.
//    var x = 5;
//    var z = 12;
//    return x + z;
//}
//Anonymous function return uyd hereglej bolno
//      return function() {
//    console.log(x, z)
//}
//y = myfunction(); //17
//myfunction();

// parameter function 
//function parameterfunc(arg) {
//    return arg; 
//}

//callback function parameter helbereer ashiglagdaj bgaa function

//function findDigit(num, i) {
//    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
//}


//1. Garaas too ogogdoson bol tuhain too hurtel niilberuudiig olj butsaa.
var x = prompt("too oruul");
for (var i=0; i <= x; i++){
    console.log(i);
}

//2.
//var x = prompt("suuri");
//var y = prompt("ondor");
//var e = x * y;
//var Area = e / 2;
//console.log(Area);

//3.
//var BooleanUtga = [true, false, true, true]{
//    for (let i = 0; element < array.length; element++) {
//        const element = array[element];        
//    } BooleanUtga.filter(e => e === 1);
//}

//4. 
//