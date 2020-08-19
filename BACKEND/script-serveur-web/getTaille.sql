ALTER PROCEDURE "DBA"."getTaille"() 
BEGIN 
       call sa_set_http_header('Content-Type','application/json');
SELECT  
       N.nomVet, C.nomCouleur, T.nomTAil
FROM 
  tbShirt S
    INNER JOIN tbNom N
        ON N.nomId = S.nomId
    INNER JOIN tbCouleur C
        ON C.couleurId = S.couleurId
    INNER JOIN tbTaille T
        ON T.tailleId = S.tailleId
    
END
-----------------------------------------------------------------------------------
CREATE SERVICE "getTaille" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.getTaille();
