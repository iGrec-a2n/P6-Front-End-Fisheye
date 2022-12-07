const getPhotographers =
        // on créer une fonction
        async function () { // attendre un retour (def)
            try {
                // on ajoute une asynchrone function pour lui ajouter une promesse
                await fetch("/data/photographers.json")
                    // si la variable response renvoie au data json
                    .then(
                        function (response) {
                            return response.json();
                        }
                    )
                    .then(function (data) {
                        photographers = data.photographers
                    })
                console.log(photographers);
                return {
                    photographers
                }
            }
            // en cas d'erreur d'affichage
            catch (err) {
                return {
                    data: 'There was an error!'
                }
            }
        };
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const photographerCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(photographerCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    