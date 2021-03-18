let meetups=[
{name:'javascript',isActive:true,members:700},
{name:'angular',isAcive:true,members:900},
{name:'node',isAcive:false,members:600},
{name:'react',isAcive:true,members:500},
];
let sumFPChain=meetups,filters((m)=>{
    return m,isActive;
})
.map((m)=>{
    return m.members-(0.1*m.members);
})
.reduce((acc,m)=>{
    return acc+m;
},0);
console.log(sumFPChain);