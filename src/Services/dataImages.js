import axios from 'axios';
const fs = require('fs');

const data = fs.readFileSync('../zapato.json');


 export const getAll = async () => {
    const res = await axios.get(data)
    return res.data 
 }
// let shoes = JSON.parse(data);
// console.log(shoes);
// console.log(typeof(shoes));
