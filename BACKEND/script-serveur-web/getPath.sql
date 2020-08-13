CREATE PROCEDURE "DBA"."http_getPage"(in url char(255))/* renvoie le contenu de la page html dont le nom est le parametre url */
RESULT(html long varchar)
BEGIN  
    call sa_set_http_header('Content-Type','text/html');
    select xp_read_file(dba.getPath() || url || '.html'); /* renvoyer page */ 
END
