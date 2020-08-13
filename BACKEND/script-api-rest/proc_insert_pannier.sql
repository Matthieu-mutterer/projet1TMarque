CREATE PROCEDURE "DBA"."proc_insert_pannier"(in nom varchar(50), in coul varchar(50), in tail varchar(50),in prix integer)
BEGIN
  INSERT INTO tbPannier (nomVet, nomCouleur, nomTAil, shirtPrix)
  VALUES (nom, coul, tail, prix);
END
--------------------------------------------------------------------------------------------------------------------------------------------
