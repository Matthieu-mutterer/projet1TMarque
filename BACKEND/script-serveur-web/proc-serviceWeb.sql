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
END; 

CREATE PROCEDURE "DBA"."http_getPage"(in url char(255))/* renvoie le contenu de la page html dont le nom est le parametre url */
RESULT(html long varchar)
BEGIN  
    call sa_set_http_header('Content-Type','text/html');
    select xp_read_file(dba.getPath() || url || '.html'); /* renvoyer page */ 
END;  

CREATE PROCEDURE "DBA"."http_getIMG"(in url char(255)) /* renvoie le contenu de l image dont le nom (+ extension) est le paramètre url */
BEGIN 
    call sa_set_http_header('Content-Type', 'image/png'); 
    select xp_read_file(dba.getPath() || 'IMG\' || url); // revoyer image 
END; 

CREATE PROCEDURE "DBA"."http_getJS"(in url char(255))
RESULT (js long varchar)
BEGIN 
    call sa_set_http_header('Content-Type', 'application/javascript'); /* header http */
    select xp_read_file(dba.getPath() || 'js\' || url); /* renvoyer fichier javascript */
END; 
    
