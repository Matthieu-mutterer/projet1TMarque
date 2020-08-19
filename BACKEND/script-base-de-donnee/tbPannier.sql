CREATE TABLE tbPannier(
	panniId INT NOT NULL,
   connecId INT NOT NULL,  
	nomVet VARCHAR(50) NOT NULL, 
	nomCouleur VARCHAR(50) NOT NULL,
	nomTAil varchar(50) NOT NULL,
	shirtPrix INT NOT NULL, 
	constraint pk_tbConnect PRIMARY KEY (panniId), 
    CONSTRAINT fk_tbPannier_tbConnect FOREIGN KEY (connecId) REFERENCES tbConnect (connecId),
);
