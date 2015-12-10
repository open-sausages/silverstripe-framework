<?xml version="1.0" encoding="UTF-8"?>
<!--
Configuration to block web access to secure folders
-->
<configuration>
    <system.webServer>
        <security>
            <authorization>
                <remove users="*" roles="" verbs="" />
            </authorization>
        </security>
    </system.webServer>
</configuration>
