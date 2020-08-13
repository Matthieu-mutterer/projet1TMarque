CREATE PROCEDURE "DBA"."http_getJS"(in url char(255))
RESULT (js long varchar)
BEGIN 
    call sa_set_http_header('Content-Type', 'application/javascript'); /* header http */
    select xp_read_file(dba.getPath() || 'js\' || url); /* renvoyer fichier javascript */
END
---------------------------------------------------------------------------------------------
