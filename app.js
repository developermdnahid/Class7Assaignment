//              - Total Admnission fees

/**
 * 
let totalAddFee = 0 ;

for( data of studentsData ){
    console.log(`Name : ${data.name}`);
    totalAddFee += data.add_fee ;
}
console.log(`
    Total Addmission Fee : ${totalAddFee}
`);
 */



//              - Find All Female Students


/**
 * 
let feStu = 0 ;

for( data of studentsData ){
    if( data.gender == 'FeMale' ){
        console.log(data);
        feStu++
    }
}
console.log(`
    Total Female Students : ${feStu}
`);
 */





//              - Find class wise student result


/**
 * 
let cls3 = 0 ;

for( data of studentsData ){
    if( data.class == 'Three' ){
        console.log(data);
        cls3++
    }
}
console.log(`
    Total Class Three Students : ${cls3}
`);



let cls4 = 0 ;

for( data of studentsData ){
    if( data.class == 'Four' ){
        console.log(data);
        cls4++
    }
}
console.log(`
    Total Class Four Students : ${cls4}
`);



let cls5 = 0 ;

for( data of studentsData ){
    if( data.class == 'Five' ){
        console.log(data);
        cls5++
    }
}
console.log(`
    Total Class Five Students : ${cls5}
`);
 */




//              - Location wise student result

/**
 * 
let locaStu = 0 ;

for( data of studentsData ){
    if( data.location == 'Nabinagar' ){
        console.log(data);
        locaStu++
    }
};
console.log(`
    Total Nabinagar Student : ${locaStu}
`);
 */





//              - find student between 10 - 25 age



let ageStu = 0 ;

for( data of studentsData ){
    if( data.age >= 10 && data.age <= 25 ){
        console.log(data); 
        ageStu++
    }
};
console.log(`
    Total Student of 10 to 25 : ${ageStu}
`);