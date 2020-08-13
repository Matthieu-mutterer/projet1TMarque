CREATE PROCEDURE "DBA"."init_catalogue"()
BEGIN 
       call sa_set_http_header('Content-Type','application/json');
      
      
SELECT DISTINCT 
        N.nomVet, S.shirtPrix, I.imageFile, MIN(T.nomTAil), C.nomCouleur
     
FROM    
    tbShirt S
    INNER JOIN tbNom N
        ON N.nomId = S.nomId
    INNER JOIN tbImages I
        ON I.imageId = S.imageId
    INNER JOIN tbTaille T
        ON T.tailleId = S.tailleId
    INNER JOIN tbCouleur C
        ON C.couleurId = S.couleurId
GROUP BY  N.nomVet, S.shirtPrix, I.imageFile, C.nomCouleur
END
---------------------------------------------------------------------------------------
