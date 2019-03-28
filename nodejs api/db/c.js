const axios = require("axios");

const c =axios.get("http://localhost:55707/api/articles").then(data =>{
    data.data.forEach(cat => {
        console.log(cat);
        return cat;
    });
    // return data.data.id
});
export default c;