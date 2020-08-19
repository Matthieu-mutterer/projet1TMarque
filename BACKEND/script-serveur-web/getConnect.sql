ALTER PROCEDURE "DBA"."getConnect"()
BEGIN 
    call sa_set_http_header('Content-Type', 'application.json');
SELECT 
    C.connecId, C.adresse, C.passw
FROM 
    dba.tbConnect as C
ORDER BY C.adresse asc;
END
---------------------------------------------------------------------------------------
CREATE SERVICE "getConnect" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.getConnect();
