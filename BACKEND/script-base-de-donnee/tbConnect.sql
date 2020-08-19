CREATE  TABLE tbConnect(
	connecId INT NOT NULL DEFAULT AUTOINCREMENT , 
	adresse VARCHAR(100) NOT NULL, 
	passw VARCHAR(25) NOT NULL,
   	panniId INT NOT NULL, 
	constraint pk_tbConnect PRIMARY KEY (connecId), 
   	CONSTRAINT fk_tbConnect_tbPannier FOREIGN KEY (panniId) REFERENCES tbPannier (panniId)
)
