let link = "";

function Api(data) {
  return fetch("//localhost:3001/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((dataApi) => {
      return (link = dataApi);
    });
}
console.log(link);
const objToExport = {
  Api: Api,
  link: link,
};

export default objToExport;
