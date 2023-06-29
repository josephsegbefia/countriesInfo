const getCountry = (countryName) => {
  axios
    .get(`https://restcountries.com/v2/name/${countryName}`)
    .then((response) => {
      //   console.log("Response from API is: ", response);
      const countryDetail = response.data[0];
      //   console.log("a single country details: ", countryDetail);
      document.getElementById("country-name").innerText = countryDetail.name;
      document.getElementById("country-capital").innerText =
        countryDetail.capital;
      document
        .getElementById("country-flag")
        .setAttribute("src", countryDetail.flag);
    })
    .catch((err) => {
      console.log(err);
      err.response.status === 404
        ? alert(`The country ${countryName} does not exist`)
        : alert("Server Error! Sorry");
    });
};

document.getElementById("get-country-btn").addEventListener("click", () => {
  const userInput = document.getElementById("country-name-input").value;
  getCountry(userInput);
});
