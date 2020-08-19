ALTER PROCEDURE "DBA"."getPannier"()
BEGIN 
    call sa_set_http_header('Content-Type', 'application.json');
SELECT 
    P.panniId, P.nomVet, P.nomCouleur, P.nomTAil, P.shirtPrix
FROM 
    dba.tbPannier as P
ORDER BY P.nomVet asc; 
END
--------------------------------------------------------------------------
CREATE SERVICE "getPannier" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.getPannier();
