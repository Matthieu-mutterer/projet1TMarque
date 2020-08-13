CREATE PROCEDURE "DBA"."http_getIMG"(in url char(255)) /* renvoie le contenu de l image dont le nom (+ extension) est le paramètre url */
BEGIN 
    call sa_set_http_header('Content-Type', 'image/png'); 
    select xp_read_file(dba.getPath() || 'IMG\' || url); // revoyer image 
END
---------------------------------------------------------------------------------------------------------------------------------------------
CREATE SERVICE "img" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getIMG(:url);
