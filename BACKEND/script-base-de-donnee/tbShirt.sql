CREATE TABLE tbShirt(
	shirtId INTEGER NOT NULL, 
	nomId INT NOT NULL, 
	tailleId INT NOT NULL, 
	couleurId INT NOT NULL, 
	shirtPrix DECIMAL (4,2) NULL,
	constraint pk_tbShirt PRIMARY KEY (shirtId),
	CONSTRAINT fk_tbShirt_tbCouleur FOREIGN KEY (couleurId) REFERENCES tbCouleur (couleurId),
	CONSTRAINT fk_tbShirt_tbNom FOREIGN KEY (nomId) REFERENCES tbAlcool (nomId),
	CONSTRAINT fk_tbShirt_tbTaille FOREIGN KEY (tailleId) REFERENCES tbAlcool (tailleId)
); 


