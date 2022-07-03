
// data for table 1: 
let hospital_facility = [
    {sl:'1',hospitalFacility:"General Checkup",amount:500},
    {sl:'2',hospitalFacility:"Ecg", amount:150},
    {sl:'3',hospitalFacility:"Anti TPO Test",amount:1020},
    {sl:'4',hospitalFacility:"Blood Test",amount:500},
    {sl:'5',hospitalFacility:"HIV Test",amount:700},
    {sl:'6',hospitalFacility:"X-ray",amount:400},
    {sl:'7',hospitalFacility:"Sonography",amount:750},
    {sl:'8',hospitalFacility:"Dialysis",amount:1000},
    {sl:'9',hospitalFacility:"CT Scanning",amount:15000},
    {sl:'10',hospitalFacility:"Thyroid Test",amount:500},
]


//  functionality of table 1: 

let tablebody = ""
// console.log(tablebody);

hospital_facility.forEach(test => {

        let {sl,hospitalFacility, amount} = test;
    
    tablebody += `<tr>
                        <td>${sl}</td>
                        <td>${hospitalFacility}</td>
                        <td>${amount}</td>
                    </tr>`
})

// console.log(tablebody);
// console.log(document.querySelector("tbody"))

document.querySelector("tbody").innerHTML = tablebody;

//*******************functionality of table 1 ends here********************* 


//--------------------functionality of table 2 starts here-------------------- 

//--------------------functionality of table 2 starts here-------------------- 

// fetching data from FORM in header


let table2 = document.getElementsByClassName(".table2");

let form = document.querySelector('form')

