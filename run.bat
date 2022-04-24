::@echo off
::if "%1" == "h" goto begin
::mshta vbscript:createobject("wscript.shell").run("""%~nx0"" h",0)(window.close)&&exit
:::begin
cd note_react_server
e:
python main.py