// création de l'objet matrice
export function createMatrice(valeurs, a, b, nbA, nbB){
    // a: les quantités disponibles dans les magasins de dépôt respectifs
    // b: les quantités demandées par les magasins de déstination respectifs
    // nbA: le nombre des magasins de dépot
    // nbB: le nombre des magasins de départ
    // valeurs: les valeurs des coûts unitaires à repartir dans la matrice
    let matrice = {};
    if(nbA === a.length && nbB === b.length && nbA*nbB === valeurs.length){
        for(let i = 0, a = 1, b = 1; i < nbA*nbB && a <= nbA && b <= nbB; i++){
            if(b%nbB != 0){
                matrice[`a${a}b${b}`] = parseInt(valeurs[i]);
                b++;
            }else{
                matrice[`a${a}b${b}`] = parseInt(valeurs[i]);
                a++;
                b=1;
            }
        }
    }
    return matrice;
}

// génère la solution de base
export function generateBaseSolution(tabIndex, matrice, qteA, qteB, maxiOfTab){
    let miniOfTab
    let indexOfMiniOfTab;
    let newValueOfMatrice; //evolution des valeurs dans la matrice
    let baseSolution = {};
    let qteDispo;
    let qteDemande;
    let a = [...qteA];
    let b = [...qteB];
    newValueOfMatrice = Object.values(matrice)
    let miniTab = Math.min(...newValueOfMatrice);
    
    let stop = false;
    while(!stop){
        for(let i = 0; i < tabIndex.length; i++){
            if(matrice[`${tabIndex[i]}`] != miniOfTab){
                continue;
            }else{
                indexOfMiniOfTab = tabIndex[i];
                break;
            }
        }
        
        if(indexOfMiniOfTab){
            const aId = parseInt(indexOfMiniOfTab.slice(1,2));  // retourne la valeur de l'index de a corresondant à l'emplacement du miniOfTab ex: a2b3 => aId = 2
            const bId = parseInt(indexOfMiniOfTab.slice(3,4));  // retourne la valeur de l'index de b corresondant à l'emplacement du miniOfTab ex: a2b3 => bId = 3
            if(a[aId-1] < b[bId-1]){
                baseSolution[`a${aId}b${bId}`] = a[aId-1];
                b[bId-1] = b[bId-1] - a[aId-1];
                a[aId-1] = 0;
                tabIndex.forEach(index => {
                    if(index.slice(0,2)==`a${aId}`){
                        matrice[index] = maxiOfTab;
                    }
                })
            }else{
                baseSolution[`a${aId}b${bId}`] = b[bId-1];
                a[aId-1] = a[aId-1] - b[bId-1];
                b[bId-1] = 0;
                tabIndex.forEach(val => {
                    if(val.slice(2,4)==`b${bId}`){
                        matrice[`${val}`]=maxiOfTab;
                    }
                })
            }
        }

        newValueOfMatrice = Object.values(matrice);
        miniOfTab = Math.min(...newValueOfMatrice);

        qteDispo = a.reduce((acc, el) => {
            return acc + el;
        }, 0);
        qteDemande = b.reduce((acc, el) => {
            return acc + el;
        }, 0);

        if(qteDispo == 0 && qteDemande == 0) stop=true
        else continue
    }
    return baseSolution;
}

export function calculateZ(solution, matriceOriginal){
    const pSIndex = Object.keys(solution);
    const z = pSIndex.reduce((acc, el) => {
        return acc + parseInt(matriceOriginal[`${el}`])*parseInt(solution[`${el}`]);
    },0);
    return z;
}

// module.exports = {
//     createMatrice,
//     generateBaseSolution,
//     calculateZ,
// }