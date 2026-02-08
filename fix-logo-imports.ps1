# Fix PlumbGuard Logo Imports
# Updates Header and Footer to use renamed Logo component

Write-Host "Fixing logo imports in PlumbGuard site..." -ForegroundColor Green

cd C:\Users\alexa\plumbguard-site\components

Write-Host "`nUpdating Header.tsx..." -ForegroundColor Yellow
(Get-Content Header.tsx) -replace 'PlumbGuardLogo', 'Logo' | Set-Content Header.tsx

Write-Host "Updating Footer.tsx..." -ForegroundColor Yellow  
(Get-Content Footer.tsx) -replace 'PlumbGuard', 'Logo' -replace 'plumbguard', 'logo' | Set-Content Footer.tsx

Write-Host "`n✅ Logo imports fixed!" -ForegroundColor Green
Write-Host "`nPlumbGuard site is ready to test!" -ForegroundColor Cyan
