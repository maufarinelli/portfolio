/* Javascript */

var quantiteProduits = 0;
var valeurProduits = 0;


function panierDachat() {
var quantiteThisProduit = document.getElementById("quantiteItem").innerHTML;
var quantite = parseInt(quantiteThisProduit);
var quantite = quantite + 1 + " produits";
document.getElementById("quantiteItem").innerHTML = quantite;

var prixThisProduit = document.prix.prixCeIci.value;
prixThisProduit = parseFloat(prixThisProduit);
var valeur = valeurProduits + prixThisProduit;
document.getElementById("valeurItem").value = valeur.toFixed(2);

valeurProduits = valeur; //.match(/[0-9]+\.[0-9]{2}/)
quantiteThisProduit = quantite;
}