document.addEventListener("DOMContentLoaded", function () {
    const getFactsBtn = document.getElementById("FactsAPI");
    const numberOfFactsInput = document.getElementById("inputNumber");
    const factsResponse = document.getElementById("response");
    const apiKey = '52qquX9eYuDjhAkdEsQp7A==2jQSxxLMwDVJqoPo';

    getFactsBtn.addEventListener("submit", function (event) {
        event.preventDefault();
        const numberOfFacts = numberOfFactsInput.value;

        if (numberOfFacts >= 1 && numberOfFacts <= 30) {
            const apiUrl = `https://api.api-ninjas.com/v1/facts?limit=${numberOfFacts}`;

            fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                }
            })
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.status);
                    }
                })
                .then(function (data) {
                    factsResponse.innerHTML = "";
                    data.forEach(function (fact) {
                        factsResponse.innerHTML += `<p>${fact.fact}</p>`;
                    });
                })
                .catch(function (error) {
                    console.error("Error:", error);
                    factsResponse.innerHTML = "An error occurred while fetching facts.";
                });
        } else {
            factsResponse.innerHTML = "Please enter a number between 1 and 30.";
        }
    });
});
