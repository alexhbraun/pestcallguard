# PlumbGuard Configuration Update Script
# Updates package.json and tailwind.config.js for standalone PlumbGuard site

Write-Host "Updating PlumbGuard configuration files..." -ForegroundColor Green

cd C:\Users\alexa\plumbguard-site

Write-Host "`n1. Copying new App.tsx..." -ForegroundColor Yellow
Copy-Item C:\Users\alexa\Pest\plumbguard-app.tsx App.tsx -Force

Write-Host "2. Updating package.json..." -ForegroundColor Yellow
$packageJson = Get-Content package.json | ConvertFrom-Json
$packageJson.name = "plumbguard-site"
$packageJson | ConvertTo-Json -Depth 10 | Set-Content package.json

Write-Host "3. Updating tailwind.config.js colors..." -ForegroundColor Yellow
$tailwindContent = @'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A5F',      // Navy Blue
        secondary: '#111827',    // Charcoal
        accent: '#F59E0B',       // Amber
        'neutral-light': '#F9FAFB',
        'neutral-medium': '#6B7280',
        'neutral-dark': '#1F2937',
        success: '#10B981',
        error: '#EF4444',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
'@
$tailwindContent | Set-Content tailwind.config.js

Write-Host "`n✅ Configuration update complete!" -ForegroundColor Green
Write-Host "`nPlumbGuard site is now standalone and ready!" -ForegroundColor Cyan
Write-Host "Location: C:\Users\alexa\plumbguard-site" -ForegroundColor White
Write-Host "`nTo test it:" -ForegroundColor Yellow
Write-Host "  cd C:\Users\alexa\plumbguard-site"
Write-Host "  npm run dev"
