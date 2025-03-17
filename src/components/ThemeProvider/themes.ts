export type PresetThemeType = 'blue' | 'orange' | 'yellow' | 'red' | 'green' | 'purple';
export type ThemeType = PresetThemeType | ThemeColors;

export interface ThemeColors {
  main: string;
  bg: string;
  darkBg: string;
}

export const presetThemes: Record<PresetThemeType, ThemeColors> = {
  blue: {
    main: '#88AAEE',
    bg: '#DFE5F2',
    darkBg: '#272933'
  },
  orange: {
    main: '#FD9745',
    bg: '#FFF4E0',
    darkBg: '#272933'
  },
  yellow: {
    main: '#FFDC58',
    bg: '#FEF2E8',
    darkBg: '#374151'
  },
  red: {
    main: '#FF686B',
    bg: '#FCD7D7',
    darkBg: '#272933'
  },
  green: {
    main: '#A3E636',
    bg: '#E0E7F1',
    darkBg: '#2C312B'
  },
  purple: {
    main: '#A388EE',
    bg: '#E3DFF2',
    darkBg: '#272733'
  }
};