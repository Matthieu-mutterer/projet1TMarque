CREATE PROCEDURE "DBA"."http_getCSS"(in url char(255))
RESULT (css long varchar)
BEGIN
	call sa_set_http_header('Content-Type', 'text/css');
	select xp_read_file(dba.getPath() || 'css\' || url);
END
-------------------------------------------------------------
