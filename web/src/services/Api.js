

const callToApi = (data) => {
   return fetch("//localhost:3001/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-Type": "application/json"}, 
  }).then((response) => response.json())}


export default callToApi;
