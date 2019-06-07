const functions = require('firebase-functions');
// Required for side-effects

// Para acessar a database ví na documentação do Firebase que necessita desse codigo \/
const admin = require('firebase-admin');
admin.initializeApp();

// Função básica para inserir nova questão

  exports.salvarQuestao = functions.https.onCall((data, context) => {
    // Obtemos os dados
    const questao = data.questao;
    const correta = data.correta;
    const errada = data.errada;
    var db = firebase.firestore();
    db.collection("questoes").doc(size.toString()).set({
      questao: questao,
      respcorreta: correta,
      resperrada: errada
    })
    .then(function() {
      return true;
    })
    .catch(function(error) {
      return false;
    });
  })
  /*
exports.teste = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});*/