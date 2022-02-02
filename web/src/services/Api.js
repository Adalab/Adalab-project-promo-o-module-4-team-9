function Api(data) {
  return fetch("//localhost:3001/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((dataApi) => {
      console.log(dataApi);
      return dataApi;
    });
}

const objToExport = {
  Api: Api,
};

export default objToExport;
