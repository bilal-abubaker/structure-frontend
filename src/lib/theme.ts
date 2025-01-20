export const themes = {
    colors: {
      primary: {
        DEFAULT: '#2563eb', // Blue-600
        foreground: '#ffffff',
        hover: '#1d4ed8', // Blue-700
      },
      secondary: {
        DEFAULT: '#f97316', // Orange-500
        foreground: '#ffffff',
        hover: '#ea580c', // Orange-600
      },
      sidebar: {
        DEFAULT: '#1e40af', // Blue-800
        hover: '#1e3a8a', // Blue-900
        text: '#ffffff',
        activeText: '#ffffff',
        activeBg: '#2563eb', // Blue-600
      },
      background: '#f3f4f6', // Gray-100
      surface: {
        DEFAULT: '#ffffff',
        secondary: '#f8fafc',
        drawer: '#f1f5f9', // Slate-100
      },
      border: '#e2e8f0',
      text: {
        primary: '#1e293b',
        secondary: '#64748b',
      }
    },
    gradients: {
      primary: 'from-blue-600 to-blue-700',
      secondary: 'from-orange-500 to-orange-600',
    }
  } as const;