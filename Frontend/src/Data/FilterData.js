export const color = [
    "white",
    "black",
    "red",
    "blue",
    "green",
    "yellow",
    "marun",
    "Being"
];

export const filter = [
    {
        id:"color",
        name:"Color",
        options: [
            {value:"white",label:"White"},
            {value:"black",label:"Black"},
            {value:"red",label:"Red"},
            {value:"blue",label:"Blue"},
            {value:"green",label:"Green"},
            {value:"yellow",label:"Yellow"},
            {value:"marun",label:"Marun"},
            {value:"Being",label:"Being"}
        ],
    },

    {
        id:"size",
        name:"Size",
        options: [
            {value:"S",label:"S"},
            {value:"M",label:"M"},
            {value:"L",label:"L"},
            {value:"XL",label:"XL"},
            {value:"XXL",label:"XXL"}
        ],
    }
];

export const singleFilter = [
    {
        id:"price",
        name:"Price",
        options: [
            {value:"0-500",label:"0-500"},
            {value:"500-1000",label:"500 To 1000"},
            {value:"1000-1500",label:"1000 To 1500"},
            {value:"1500-2500",label:"1500 To 2500"},
            {value:"2500-3500",label:"2500 To 3500"},
            {value:"3500-4999",label:"3500 To 4999"},
        ],
    },
    {
        id:"discount",
        name:"Discount Range",
        options: [
            {value:"10",label:"10% And Above"},
            {value:"20",label:"20% And Above"},
            {value:"30",label:"30% And Above"},
            {value:"40",label:"40% And Above"},
            {value:"50",label:"50% And Above"},
            {value:"60",label:"60%  And Above"},
            {value:"70",label:"70% And Above"},
            {value:"80",label:"80% And Above"},
        ],
    },
    {
        id:"stock",
        name:"Availability",
        options: [
            {value:"In_Stock",label:"In Stock"},
            {value:"Out_of_Stock",label:"Out of Stock"},
        ],
    }
]