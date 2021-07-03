var a=[//max data array,array which have all data
    {"id":"123","firstName":"John", "lastName":"Doe"},
    {"id":"124","firstName":"Anna", "lastName":"Smith"},
    {"id":"125","firstName":"Ahsan", "lastName":"Iqbal"},
    {"id":"126","firstName":"Peter", "lastName":"Jones"}
]
var b=[ //min data array, the array which you want to combine
    {"id":"123", "roll_no":"12", "sec":"B"},
    {"id":"124", "roll_no":"13", "sec":"B"},
    {"id":"126", "roll_no":"14", "sec":"B"}
]
var result1=[]
var result2=[]
for(var i=0;i<b.length;i++){
    result1.push(a.find((x)=>x.id==b[i].id))
}
for(var i in result1){
    result2.push(b.find((x)=>x.id == result1[i].id))
}
console.log(`id  firstname   lastname   roll_no   sec`);
for(i=0;i<result1.length;i++){
    console.log(`${result1[i].id} ${result1[i].firstName}          ${result1[i].lastName}       ${result2[i].roll_no}       ${result2[i].sec}`);
}
