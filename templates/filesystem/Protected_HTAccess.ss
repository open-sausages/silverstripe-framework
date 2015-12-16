Deny from all

# Disable PHP handler
AddHandler default-handler php phtml php3 php4 php5 inc
<IfModule mod_php5.c>
	php_flag engine off
</IfModule>