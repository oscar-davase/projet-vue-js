import axios from 'axios'

axios.get('https://www.data.gouv.fr/fr/reuses/penurie-de-main-doeuvre-quels-sont-les-metiers-sous-tension-spallian/')
    .then(response => {
        // Traitez la réponse de l'API ici
    })
    .catch(error => {
        // Gérez les erreurs ici
    })
