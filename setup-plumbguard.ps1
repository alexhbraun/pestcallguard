# PlumbGuard Site Cleanup Script
# This script converts the copied site into a standalone PlumbGuard site

Write-Host "Starting PlumbGuard site cleanup..." -ForegroundColor Green

# Navigate to plumbguard-site
cd C:\Users\alexa\plumbguard-site

Write-Host "`n1. Removing pest-specific components..." -ForegroundColor Yellow
Remove-Item components\Hero.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\RealitySection.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\CostSection.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\HowItWorks.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\TargetAudience.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\BusySeason.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\WhoThisIsFor.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\Pricing.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\FinalCTA.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\Header.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\Footer.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\PestCallGuardLogo.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\DemoPage.tsx -Force -ErrorAction SilentlyContinue
Remove-Item components\DemoPage2.tsx -Force -ErrorAction SilentlyContinue

Write-Host "2. Renaming plumber components (removing 'Plumber' prefix)..." -ForegroundColor Yellow
Rename-Item components\PlumberHero.tsx Hero.tsx -Force
Rename-Item components\PlumberRealitySection.tsx RealitySection.tsx -Force
Rename-Item components\PlumberCostSection.tsx CostSection.tsx -Force
Rename-Item components\PlumberHowItWorks.tsx HowItWorks.tsx -Force
Rename-Item components\PlumberTargetAudience.tsx TargetAudience.tsx -Force
Rename-Item components\PlumberBusySeason.tsx BusySeason.tsx -Force
Rename-Item components\PlumberWhoThisIsFor.tsx WhoThisIsFor.tsx -Force
Rename-Item components\PlumberPricing.tsx Pricing.tsx -Force
Rename-Item components\PlumberFinalCTA.tsx FinalCTA.tsx -Force
Rename-Item components\PlumberHeader.tsx Header.tsx -Force
Rename-Item components\PlumberFooter.tsx Footer.tsx -Force
Rename-Item components\PlumbGuardLogo.tsx Logo.tsx -Force

Write-Host "3. Updating color references in all component files..." -ForegroundColor Yellow
Get-ChildItem -Path components\*.tsx | ForEach-Object {
    (Get-Content $_.FullName) -replace 'plumber-primary', 'primary' -replace 'plumber-accent', 'accent' -replace 'plumber-secondary', 'secondary' | Set-Content $_.FullName
}

Write-Host "4. Removing unused demo images..." -ForegroundColor Yellow
Remove-Item public\hero-bg.jpg -Force -ErrorAction SilentlyContinue

Write-Host "`n✅ PlumbGuard site cleanup complete!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Update App.tsx (I'll do this next)"
Write-Host "2. Update package.json name to 'plumbguard-site'"
Write-Host "3. Update tailwind.config.js colors"
Write-Host "`nLocation: C:\Users\alexa\plumbguard-site" -ForegroundColor White
