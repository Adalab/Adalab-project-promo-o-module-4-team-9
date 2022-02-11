const callToApi = (data) => {
  return fetch(
    "//undefined-awesome-cards.herokuapp.com/#/create-preview-card/card",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-Type": "application/json" },
    }
  ).then((response) => response.json());
};

export default callToApi;
