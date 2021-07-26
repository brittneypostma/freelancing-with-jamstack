const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			heading: ['juicy-fruity'],
			subHeading: ['rammetto-one'],
			text: ['amatic-bold'],
			light: ['amatic-regular']
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			white: '#fff',
			peach: '#FB7550',
			basics: {
				DEFAULT: '#A6AAAF',
				10: '#F2F2F2',
				20: '#F3F3F3',
				30: '#D9DADC',
				40: '#BFC2CF',
				50: '#A6AAAF',
				60: '#8E9298',
				70: '#767b81',
				80: '#60646B',
				90: '#4A4E54',
				100: '#35383D'
			},
			primary: {
				DEFAULT: '#830FA3',
				10: '#FBEDFF',
				20: '#F2C3FF',
				30: '#E99AFF',
				40: '#E071FF',
				50: '#D748FF',
				60: '#C033E7',
				70: '#A11FC5',
				80: '#830FA3',
				90: '#660481',
				100: '#471D71'
			},
			secondary: {
				DEFAULT: '#FF3482',
				10: '#FFE6F0',
				20: '#FFB9D4',
				30: '#FF8DB9',
				40: '#FF609D',
				50: '#FF3482',
				60: '#F10761',
				70: '#C8004D',
				80: '#9F003D',
				90: '#77002E',
				100: '#4E001E'
			}
		},
		extend: {
			boxShadow: {
				outline: '0 0 0 3px #Fb755',
				highlight: '0px 4px 4px rgba(65, 6, 66, 0.5), 0px -2px 8px rgba(147, 131, 159, 0.5)',
				hover: '0px 2px 2px rgba(65, 6, 66, 0.5), 0px -2px 4px rgba(147, 131, 159, 0.5);'
			},
			flex: {
				full: '0 0 auto'
			},
			gridTemplateColumns: {
				admin: 'minmax(64px, auto) 1fr;',
				auto: 'auto',
				bleed: '10vw minmax(0, 1fr) 10vw',
				fit: 'repeat(auto-fit, minmax(300px, 1fr))',
				hero: '1.5fr 2fr',
				sidebar: '1fr minmax(200px, 25%)',
				search: '52px 1fr',
				settings: 'minmax(200px, 20%) 1fr'
			},
			gridTemplateRows: {
				admin: '100px auto auto',
				'auto-2': 'auto 1fr',
				sidebar: '100px 1fr 100px',
				search: '38px 1fr auto'
			},
			height: {
				35: '35px',
				500: '500px',
				610: '610px'
			},
			minHeight: {
				'1/2': '50%',
				65: '65px',
				300: '300px',
				1080: '1080px'
			},
			minWidth: {
				300: '300px'
			},
			maxWidth: {
				'text': '500px',
				'8xl': '2000px'
			},
			scale: {
				'-1': '-1'
			},
			screens: {
				'3xl': '2000px'
			},
			width: {
				35: '35px',
				80: '80vw'
			}
		}
	},
	plugins: []
}

module.exports = config
