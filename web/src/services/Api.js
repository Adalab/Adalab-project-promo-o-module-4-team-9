const callToApi = (data) => {
  const serverUrl =
    process.env.NODE_ENV === "production"
      ? "https://undefined-awesome-cards.herokuapp.com/#/create-preview-card"
      : "http://localhost:3001";
  return fetch(`${serverUrl}/card`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-Type": "application/json" },
  }).then((response) => response.json());
};

export default callToApi;
