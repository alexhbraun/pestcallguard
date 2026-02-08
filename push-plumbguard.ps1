# Push PlumbGuard to GitHub
# Initializes Git and pushes to https://github.com/alexhbraun/plumbguard.git

Write-Host "Pushing PlumbGuard to GitHub..." -ForegroundColor Green

cd C:\Users\alexa\plumbguard-site

Write-Host "`n1. Initializing Git repository..." -ForegroundColor Yellow
git init

Write-Host "2. Adding all files..." -ForegroundColor Yellow
git add .

Write-Host "3. Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit - PlumbGuard standalone site"

Write-Host "4. Adding remote origin..." -ForegroundColor Yellow
git remote add origin https://github.com/alexhbraun/plumbguard.git

Write-Host "5. Pushing to GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host "`n✅ PlumbGuard pushed to GitHub!" -ForegroundColor Green
Write-Host "Repository: https://github.com/alexhbraun/plumbguard" -ForegroundColor Cyan
