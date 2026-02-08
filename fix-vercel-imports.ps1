# Fix Logo Import Paths for Vercel
# Updates import statements to use correct paths

Write-Host "Fixing Logo import paths..." -ForegroundColor Green

cd C:\Users\alexa\plumbguard-site

Write-Host "`nUpdating Header.tsx import..." -ForegroundColor Yellow
$headerContent = Get-Content components\Header.tsx -Raw
$headerContent = $headerContent -replace "import \{ Logo \} from '\./Logo';", "import { Logo } from './Logo';"
$headerContent = $headerContent -replace "import \{ Logo \} from 'Logo';", "import { Logo } from './Logo';"
$headerContent | Set-Content components\Header.tsx -NoNewline

Write-Host "Checking Logo.tsx exists..." -ForegroundColor Yellow
if (Test-Path components\Logo.tsx) {
    Write-Host "✓ Logo.tsx found" -ForegroundColor Green
} else {
    Write-Host "✗ Logo.tsx not found - checking for PlumbGuardLogo.tsx" -ForegroundColor Red
    if (Test-Path components\PlumbGuardLogo.tsx) {
        Write-Host "Found PlumbGuardLogo.tsx - renaming to Logo.tsx" -ForegroundColor Yellow
        Rename-Item components\PlumbGuardLogo.tsx Logo.tsx -Force
    }
}

Write-Host "`nCommitting fix..." -ForegroundColor Yellow
git add .
git commit -m "Fix: Update Logo import paths for Vercel build"
git push

Write-Host "`n✅ Logo import paths fixed and pushed!" -ForegroundColor Green
