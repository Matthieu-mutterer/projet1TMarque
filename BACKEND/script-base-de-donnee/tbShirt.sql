CREATE TABLE tbShirt(
	shirtId INTEGER NOT NULL, 
	nomId INT NOT NULL, 
	tailleId INT NOT NULL, 
	couleurId INT NOT NULL, 
    	connecId INT NOT NULL,
   	panniId INT NOT NULL,
	shirtPrix DECIMAL (4,2) NULL,
	constraint pk_tbShirt PRIMARY KEY (shirtId),
	CONSTRAINT fk_tbShirt_tbCouleur FOREIGN KEY (couleurId) REFERENCES tbCouleur (couleurId),
	CONSTRAINT fk_tbShirt_tbNom FOREIGN KEY (nomId) REFERENCES tbNom (nomId),
	CONSTRAINT fk_tbShirt_tbTaille FOREIGN KEY (tailleId) REFERENCES tbTaille (tailleId),
    	CONSTRAINT fk_tbShirt_tbConnect FOREIGN KEY (connecId) REFERENCES tbConnect (connecId),
    	CONSTRAINT fk_tbShirt_tbPannier FOREIGN KEY (panniId) REFERENCES tbPannier (panniId)
); 
