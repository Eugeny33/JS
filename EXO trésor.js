pointDeDepartX = 10
pointDeDepartY = 10
grandeurX = 10
grandeurY = 10

tresorPosX = 10;
tresorPosY = 11;

asFoundTresor = false;

for (y= 0 ; y <= grandeurY; y++) 
{
    for (x = 0; x <= grandeurX; x++) 
    {
        currentPointX = x + pointDeDepartX;
        currentPointY = y + pointDeDepartY;
        console.log("je visite : " + currentPointX + " / " + currentPointY);
    
        if(currentPointX == tresorPosX && currentPointY == tresorPosY) {
            console.log("j'ai trouvé le trésor MOFO !!!");
            asFoundTresor = true;
            break;
        }
    }
    if(asFoundTresor) {
        break;
    }
}