import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const DelivaFasta = definePreset(Aura, {
  semantic: {
    primary: {
      50: 'oklch(97% 0.01 255)',
      100: 'oklch(93% 0.03 255)',
      200: 'oklch(85% 0.06 255)',
      300: 'oklch(75% 0.09 255)',
      400: 'oklch(62% 0.12 255)',
      500: 'oklch(44% 0.13 255)', // #3D5EA8 — Logo Blue
      600: 'oklch(37% 0.11 255)',
      700: 'oklch(30% 0.09 255)',
      800: 'oklch(22% 0.06 255)',
      900: 'oklch(15% 0.04 255)',
      950: 'oklch(10% 0.02 255)',
    },
    colorScheme: {
      light: {
        primary: {
          color: 'oklch(44% 0.13 255)',
          hoverColor: 'oklch(37% 0.11 255)',
          activeColor: 'oklch(30% 0.09 255)',
        },
        highlight: {
          background: 'oklch(44% 0.13 255)',
          focusBackground: 'oklch(37% 0.11 255)',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
      dark: {
        primary: {
          color: 'oklch(62% 0.12 255)',
          hoverColor: 'oklch(75% 0.09 255)',
          activeColor: 'oklch(85% 0.06 255)',
        },
        highlight: {
          background: 'rgba(61, 94, 168, .16)',
          focusBackground: 'rgba(61, 94, 168, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
      },
    },
  },
});

export default DelivaFasta;
