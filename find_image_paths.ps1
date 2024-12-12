Get-ChildItem -Path "c:/Project/58 Potfolio/portfolio/src" -Recurse -Include *.tsx,*.ts | 
    Select-String -Pattern 'src="/' | 
    Select-Object Path, Line
