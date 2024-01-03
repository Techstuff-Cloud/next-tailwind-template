import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const baseTheme: CustomThemeConfig = {
  name: 'baseTheme',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `system-ui`,
    '--theme-font-family-heading': `system-ui`,
    '--theme-font-color-base': '0 0 0',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '9999px',
    '--theme-rounded-container': '8px',
    '--theme-border-base': '1px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '0 0 0',
    '--on-secondary': '0 0 0',
    '--on-tertiary': '0 0 0',
    '--on-success': '255 255 255',
    '--on-warning': '0 0 0',
    '--on-error': '255 255 255',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #dfb250
    '--color-primary-50': '250 243 229', // #faf3e5
    '--color-primary-100': '249 240 220', // #f9f0dc
    '--color-primary-200': '247 236 211', // #f7ecd3
    '--color-primary-300': '242 224 185', // #f2e0b9
    '--color-primary-400': '233 201 133', // #e9c985
    '--color-primary-500': '223 178 80', // #dfb250
    '--color-primary-600': '201 160 72', // #c9a048
    '--color-primary-700': '167 134 60', // #a7863c
    '--color-primary-800': '134 107 48', // #866b30
    '--color-primary-900': '109 87 39', // #6d5727
    // secondary | #e9af35
    '--color-secondary-50': '252 243 225', // #fcf3e1
    '--color-secondary-100': '251 239 215', // #fbefd7
    '--color-secondary-200': '250 235 205', // #faebcd
    '--color-secondary-300': '246 223 174', // #f6dfae
    '--color-secondary-400': '240 199 114', // #f0c772
    '--color-secondary-500': '233 175 53', // #e9af35
    '--color-secondary-600': '210 158 48', // #d29e30
    '--color-secondary-700': '175 131 40', // #af8328
    '--color-secondary-800': '140 105 32', // #8c6920
    '--color-secondary-900': '114 86 26', // #72561a
    // tertiary | #a49814
    '--color-tertiary-50': '241 240 220', // #f1f0dc
    '--color-tertiary-100': '237 234 208', // #edead0
    '--color-tertiary-200': '232 229 196', // #e8e5c4
    '--color-tertiary-300': '219 214 161', // #dbd6a1
    '--color-tertiary-400': '191 183 91', // #bfb75b
    '--color-tertiary-500': '164 152 20', // #a49814
    '--color-tertiary-600': '148 137 18', // #948912
    '--color-tertiary-700': '123 114 15', // #7b720f
    '--color-tertiary-800': '98 91 12', // #625b0c
    '--color-tertiary-900': '80 74 10', // #504a0a
    // success | #1734a6
    '--color-success-50': '220 225 242', // #dce1f2
    '--color-success-100': '209 214 237', // #d1d6ed
    '--color-success-200': '197 204 233', // #c5cce9
    '--color-success-300': '162 174 219', // #a2aedb
    '--color-success-400': '93 113 193', // #5d71c1
    '--color-success-500': '23 52 166', // #1734a6
    '--color-success-600': '21 47 149', // #152f95
    '--color-success-700': '17 39 125', // #11277d
    '--color-success-800': '14 31 100', // #0e1f64
    '--color-success-900': '11 25 81', // #0b1951
    // warning | #49e1a5
    '--color-warning-50': '228 251 242', // #e4fbf2
    '--color-warning-100': '219 249 237', // #dbf9ed
    '--color-warning-200': '210 248 233', // #d2f8e9
    '--color-warning-300': '182 243 219', // #b6f3db
    '--color-warning-400': '128 234 192', // #80eac0
    '--color-warning-500': '73 225 165', // #49e1a5
    '--color-warning-600': '66 203 149', // #42cb95
    '--color-warning-700': '55 169 124', // #37a97c
    '--color-warning-800': '44 135 99', // #2c8763
    '--color-warning-900': '36 110 81', // #246e51
    // error | #047f3a
    '--color-error-50': '217 236 225', // #d9ece1
    '--color-error-100': '205 229 216', // #cde5d8
    '--color-error-200': '192 223 206', // #c0dfce
    '--color-error-300': '155 204 176', // #9bccb0
    '--color-error-400': '79 165 117', // #4fa575
    '--color-error-500': '4 127 58', // #047f3a
    '--color-error-600': '4 114 52', // #047234
    '--color-error-700': '3 95 44', // #035f2c
    '--color-error-800': '2 76 35', // #024c23
    '--color-error-900': '2 62 28', // #023e1c
    // surface | #4d3e23
    '--color-surface-50': '228 226 222', // #e4e2de
    '--color-surface-100': '219 216 211', // #dbd8d3
    '--color-surface-200': '211 207 200', // #d3cfc8
    '--color-surface-300': '184 178 167', // #b8b2a7
    '--color-surface-400': '130 120 101', // #827865
    '--color-surface-500': '77 62 35', // #4d3e23
    '--color-surface-600': '69 56 32', // #453820
    '--color-surface-700': '58 47 26', // #3a2f1a
    '--color-surface-800': '46 37 21', // #2e2515
    '--color-surface-900': '38 30 17', // #261e11
  },
};
