export const color=[
   "Black",
   "Blue",
   "Red",
   "Yellow",
   "Orange",
    "Green",
    "SkyBlue",
    "Purple",
    "Pink",
    "White"
];


export const filters=[
    {
        id:"color",
        name:"Color",
        options:[
            {value : "white", label :"white"},
            {value : "blue", label :"blue"},
            {value : "brown", label :"brown"},
            {value : "green", label :"green"},
            {value : "purple", label :"purple"},
            {value : "yellow", label :"yellow"},
            {value : "pink", label :"pink"}
        ]
    },
    {
        id:"size",
        name:"size",
        options:[
            { value : "S" , label:"S"},
            { value : "M" , label:"M"},
            { value : "L" , label:"L"},
            { value : "L" , label:"XL"},
            { value : "XXL" , label:"XXL"},
            { value : "XXXL" , label:"XXXL"}
        ]
    }
];


export const singleFilter=[
    {
        id:"price",
        name:"price",
        options:[
                { value : "159-399" , label:"159 To 399"}, 
                { value : "399-999" , label:"399 To 999"}, 
                { value : "999-1999" , label:"999 To 1999"}, 
                { value : "1999-2999" , label:"1999 To 2999"}, 
                { value : "2999-3599" , label:"2999 To 3599"}, 
                { value : "3599-4999" , label:"3599 To 4999"}
        ],
    },
    { 
        id:"discount",
        name:"Discount Range",
        options:[
            { value : "10" , label:"10% and above"}, 
            { value : "20" , label:"20% and above"}, 
            { value : "30" , label:"30% and above"}, 
            { value : "40" , label:"40% and above"}, 
            { value : "50" , label:"50% and above"}, 
            { value : "60" , label:"60% and above"},
            { value : "70" , label:"70% and above"}, 
            { value : "80" , label:"80% and above"}, 
            { value : "90" , label:"90% and above"}
    ]
    },
    {
        id:"availability",
        name:"Availability",
        options:[
                { value : "in-stock" , label:"In Stock"}, 
                { value : "out-of-stock" , label:"Out Of Stock"}
        ]
    }
]

