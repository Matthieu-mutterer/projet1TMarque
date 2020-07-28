CREATE TABLE tbConnect(
	connecId INT NOT NULL, 
	adresse VARCHAR(100) NOT NULL, 
	passw VARCHAR(25) NOT NULL,
	constraint pk_tbConnect PRIMARY KEY (connecId), 
   	CONSTRAINT fk_tbConnect_tbPannier FOREIGN KEY (connecId) REFERENCE tbPannier (panniId)
);
