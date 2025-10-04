
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./src/app/**/*.{ts,tsx}",
		"./src/components/**/*.{ts,tsx}",
		"./src/pages/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'vazir': ['Vazirmatn', 'sans-serif'],
			},
			colors: {
				// Shadcn UI colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},

				// Extended color system
				text: {
					50: 'rgb(var(--text-50))',
					100: 'rgb(var(--text-100))',
					200: 'rgb(var(--text-200))',
					300: 'rgb(var(--text-300))',
					400: 'rgb(var(--text-400))',
					500: 'rgb(var(--text-500))',
					600: 'rgb(var(--text-600))',
					700: 'rgb(var(--text-700))',
					800: 'rgb(var(--text-800))',
					900: 'rgb(var(--text-900))',
					950: 'rgb(var(--text-950))',
				},
				brand: {
					50: 'rgb(var(--background-50))',
					100: 'rgb(var(--background-100))',
					200: 'rgb(var(--background-200))',
					300: 'rgb(var(--background-300))',
					400: 'rgb(var(--background-400))',
					500: 'rgb(var(--background-500))',
					600: 'rgb(var(--background-600))',
					700: 'rgb(var(--background-700))',
					800: 'rgb(var(--background-800))',
					900: 'rgb(var(--background-900))',
					950: 'rgb(var(--background-950))',
				},
				brand_primary: {
					50: 'rgb(var(--primary-50))',
					100: 'rgb(var(--primary-100))',
					200: 'rgb(var(--primary-200))',
					300: 'rgb(var(--primary-300))',
					400: 'rgb(var(--primary-400))',
					500: 'rgb(var(--primary-500))',
					600: 'rgb(var(--primary-600))',
					700: 'rgb(var(--primary-700))',
					800: 'rgb(var(--primary-800))',
					900: 'rgb(var(--primary-900))',
					950: 'rgb(var(--primary-950))',
				},
				brand_secondary: {
					50: 'rgb(var(--secondary-50))',
					100: 'rgb(var(--secondary-100))',
					200: 'rgb(var(--secondary-200))',
					300: 'rgb(var(--secondary-300))',
					400: 'rgb(var(--secondary-400))',
					500: 'rgb(var(--secondary-500))',
					600: 'rgb(var(--secondary-600))',
					700: 'rgb(var(--secondary-700))',
					800: 'rgb(var(--secondary-800))',
					900: 'rgb(var(--secondary-900))',
					950: 'rgb(var(--secondary-950))',
				},
				brand_accent: {
					50: 'rgb(var(--accent-50))',
					100: 'rgb(var(--accent-100))',
					200: 'rgb(var(--accent-200))',
					300: 'rgb(var(--accent-300))',
					400: 'rgb(var(--accent-400))',
					500: 'rgb(var(--accent-500))',
					600: 'rgb(var(--accent-600))',
					700: 'rgb(var(--accent-700))',
					800: 'rgb(var(--accent-800))',
					900: 'rgb(var(--accent-900))',
					950: 'rgb(var(--accent-950))',
				},

				// Legacy colors for compatibility
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(var(--primary-500), 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(var(--primary-500), 0.6)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require("tailwindcss-animate")
	],
} satisfies Config;
