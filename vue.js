import axios from 'axios'

/*
axios.get('https://www.data.gouv.fr/fr/reuses/penurie-de-main-doeuvre-quels-sont-les-metiers-sous-tension-spallian/', {
    headers: {
        'Authorization': 'Bearer 60effecd9bf705a0342d1163'
    }
})
    .then(response => {
        // Traitez la réponse de l'API ici
    })
    .catch(error => {
        // Gérez les erreurs ici
    })
*/

import axios from 'axios'

function sendRequest() {
    axios.get('https://www.data.gouv.fr/fr/reuses/note-ton-auto-ecole/', {
        headers: {
            'Authorization': 'Bearer 63b2ada3e326c723a67fe9aa'
        }
    })
        .then(response => {
            // Traitez la réponse de l'API ici
            console.log(response.data)
        })
        .catch(error => {
            // Gérez les erreurs ici
            console.error(error)
        })
}
