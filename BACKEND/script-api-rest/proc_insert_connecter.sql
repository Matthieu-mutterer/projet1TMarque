CREATE PROCEDURE "DBA"."proc_insert_connecter"(in adres varchar(100), in pasw varchar(25))
BEGIN
  INSERT INTO tbConnect (adresse, passw)
  VALUES (adres, pasw);
END
------------------------------------------------------------------------------------------------
CREATE SERVICE "proc_insert_connecter" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call dba.proc_insert_connecter(:adres,:pasw);
