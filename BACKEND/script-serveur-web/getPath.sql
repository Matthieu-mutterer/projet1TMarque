CREATE FUNCTION "DBA"."getPath"()/* renvoie le chemin (path) de la racine du site */
returns long VARCHAR 
deterministic
BEGIN  
    DECLARE dbPath long varchar; /* chemin de la db */
    declare dbName long varchar; /* nom de la db */
    
    set dbPath = (select db_property ('file'));
    set dbName = (select db_property ('name')) + '.db'; 
    set dbPath = left(dbPath, length(dbPath)-length(dbName));

    return dbPath; /* renvoyer path */
END
-------------------------------------------------------------------------------------------
