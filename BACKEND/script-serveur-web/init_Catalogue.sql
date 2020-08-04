CREATE PROCEDURE "dba"."init_catalogue"()
BEGIN 
       call sa_set_http_header('Content-Type','application/json');
      
SELECT DISTINCT 
       S.shirtPrix, N.nomVet, I.imageNom 
     
FROM    
    tbShirt S
        INNER JOIN tbNom  N
               on S.nomId = N.nomId
        INNER JOIN tbImages  I
               on I.imageId = S.imageId
   order by N.nomId
 END;
/* service */
CREATE SERVICE "initCatalogue" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.init_catalogue();
