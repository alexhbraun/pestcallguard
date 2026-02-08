/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
        "!./node_modules/**"
    ],
    theme: {
        extend: {
            colors: {
                // Pest Control Colors (Green)
                primary: '#1F4B26',    // Exact Logo Green
                secondary: '#111827',  // Deep Charcoal
                accent: '#FDCF52',     // Exact Logo Gold
                
                // Plumber Colors (Blue)
                'plumber-primary': '#1E3A5F',    // Deep Navy Blue
                'plumber-accent': '#F59E0B',     // Amber/Orange
                'plumber-secondary': '#111827',  // Deep Charcoal (same)
                
                neutral: {
                    light: '#FDFBF7',    // Warm Light Gray
                    medium: '#6B7280',  // Gray text
                    dark: '#111827',      // Dark Gray text
                },
                background: '#FDFBF7', // Warm Light Gray
                success: '#21C55D',
                error: '#FF4D4D',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            boxShadow: {
                'premium': '0 4px 25px rgba(0, 43, 92, 0.08)',
                'premium-hover': '0 8px 30px rgba(0, 43, 92, 0.12)',
                'premium-lg': '0 10px 40px rgba(0, 43, 92, 0.1)',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'pulse-slow': {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
                    '50%': { transform: 'scale(1.05)', opacity: '0.6' },
                },
                'wave': {
                    '0%, 100%': { transform: 'scaleY(0.5)', opacity: '0.5' },
                    '50%': { transform: 'scaleY(1.5)', opacity: '1' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'pulse-slow': 'pulse-slow 8s infinite ease-in-out',
                'wave': 'wave 1.2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
