CREATE TABLE tbPannier(
	panniId INT NOT NULL, 
	nomVet VARCHAR(50) NOT NULL, 
	nomCouleur VARCHAR(50) NOT NULL,
	nomTAil varchar(50) NOT NULL,
	shirtPrix INT NOT NULL, 
	constraint pk_tbConnect PRIMARY KEY (connecId), 
   	CONSTRAINT fk_tbConnect_tbPannier FOREIGN KEY (connecId) REFERENCE tbPannier (panniId)
);
