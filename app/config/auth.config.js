// Les functions jsonwebtoken comme verify() ou sing() utilisent un algo qui a besoin d'une clef secret 
// sous forme de string pour encode et decode le token.
module.exports = {
  secret: "notre-secret"
};