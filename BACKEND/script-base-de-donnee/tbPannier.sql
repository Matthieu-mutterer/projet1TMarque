CREATE TABLE tbPannier(
	panniId INT NOT NULL, 
	nomVet VARCHAR(50) NOT NULL, 
	constraint pk_tbPannier PRIMARY KEY (panniId),
   	CONSTRAINT fk_tbPannier_tbNom FOREIGN KEY (panniId) REFERENCE tbNom (nomId)
);
