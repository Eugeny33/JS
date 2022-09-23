/*X=100
X'=100
unNomMitEnVariable
1NombreD'iteration
UnSurDeux "CommentVousAppelez-vous"
Sinon "ouSontLesToilettes"
UnSurTrois "JeNeparlePasBinaire
dansLesDeuxPremiers " est-ceQueLeMicroFonctionne?"
puis + duResteDeLaBoucle
*/

nom ="Eugenie"//variable



for (x=1 ; x <=100 ; x++) // x++ Pour avancer dans la boucle
{
    console.log ("je m'apelle "+ nom +" " +x); //ecris dans la console, en bas ("les valeurs" ci-contre)

    if(x%2 ==0){ //façon de faire la plus simple 1/2, si cela est paire
        console.log("CommentVousAppelez-vous");
    }
    else { //sinon si cela est impaire alors
    console.log("ou sont les toilettes");
    }
    if(x%3 ==0){
        console.log("je ne parle pas binaire");
    }

    if(x <=2) // il faut les 2 premiers
    console.log(" est-ceQueLeMicroFonctionne");

}
