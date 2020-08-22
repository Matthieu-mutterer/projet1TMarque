CREATE  TABLE tbConnect(
	connecId INT NOT NULL DEFAULT AUTOINCREMENT , 
	adresse VARCHAR (100) NOT NULL, 
	passw VARCHAR(8) NOT NULL,
   	panniId INT NOT NULL, 
	constraint pk_tbConnect PRIMARY KEY (connecId)
)
