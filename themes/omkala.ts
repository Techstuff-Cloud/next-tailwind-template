import { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const omkalaTheme = {
  name: 'omkala-theme',
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
    '--on-primary': '110 98 229',
    '--on-secondary': '31 185 108',
    '--on-tertiary': '16 161 231',
    '--on-success': '34 197 94',
    '--on-gray': '107 114 128',
    '--on-warning': '245 158 11',
    '--on-error': '239 68 68',
    '--on-surface': '124 124 124',
    // =~= Theme Colors  =~=
    // primary | #b5f3ae
    '--color-primary-50': '239 241 254', // #EFF1FE
    '--color-primary-100': '226 229 253', // #E2E5FD
    '--color-primary-200': '203 207 250', // #CBCFFA
    '--color-primary-300': '171 176 246', // #ABB0F6
    '--color-primary-400': '140 138 239', // #8C8AEF
    '--color-primary-500': '110 98 229', // #6E62E5
    '--color-primary-600': '104 81 218', // #6851DA
    '--color-primary-700': '90 66 192', // #5A42C0
    '--color-primary-800': '73 56 155', // #49389B
    '--color-primary-900': '63 52 123', // #3F347B
    // secondary | #ea14bf
    '--color-secondary-50': '237 252 242', // #EDFCF2
    '--color-secondary-100': '212 247 223', // #D4F7DF
    '--color-secondary-200': '173 237 197', // #ADEDC5
    '--color-secondary-300': '119 222 164', // #77DEA4
    '--color-secondary-400': '64 199 127', // #40C77F
    '--color-secondary-500': '31 185 108', // #1FB96C
    '--color-secondary-600': '16 139 80', // #108B50
    '--color-secondary-700': '13 111 66', // #0D6F42
    '--color-secondary-800': '13 88 54', // #0D5836
    '--color-secondary-900': '11 73 46', // #0B492E
    // gray | #ea14bf
    '--color-gray-50': '247 248 248', // #F7F8F8
    '--color-gray-100': '237 238 241', // #EDEEF1
    '--color-gray-200': '216 219 223', // #D8DBDF
    '--color-gray-300': '182 186 195', // #B6BAC3
    '--color-gray-400': '142 149 162', // #8E95A2
    '--color-gray-500': '107 114 128', // #6B7280
    '--color-gray-600': '91 97 110', // #5B616E
    '--color-gray-700': '74 78 90', // #4A4E5A
    '--color-gray-800': '64 68 76', // #40444C
    '--color-gray-900': '56 58 66', // #383A42
    // tertiary | #955183
    '--color-tertiary-50': '240 249 255', // #F0F9FF
    '--color-tertiary-100': '224 242 254', // #E0F2FE
    '--color-tertiary-200': '187 229 252', // #BBE5FC
    '--color-tertiary-300': '108 202 250', // #6CCAFA
    '--color-tertiary-400': '58 185 246', // #3AB9F6
    '--color-tertiary-500': '16 161 231', // #10A1E7
    '--color-tertiary-600': '4 128 197', // #0480C5
    '--color-tertiary-700': '5 103 159', // #05679F
    '--color-tertiary-800': '8 87 132', // #085784
    '--color-tertiary-900': '13 73 109', // #0D496D
    // success | #b84b0e
    '--color-success-50': '240 253 245', // #F0FDF5
    '--color-success-100': '220 252 232', // #DCFCE8
    '--color-success-200': '187 247 209', // #BBF7D1
    '--color-success-300': '134 239 173', // #86EFAD
    '--color-success-400': '74 222 128', // #4ADE80
    '--color-success-500': '34 197 94', // #22C55E
    '--color-success-600': '22 163 74', // #16A34A
    '--color-success-700': '21 128 60', // #15803C
    '--color-success-800': '22 101 51', // #166533
    '--color-success-900': '20 83 43', // #14532B
    // warning | #eab08c
    '--color-warning-50': '255 248 235', // #FFF8EB
    '--color-warning-100': '254 234 199', // #FEEAC7
    '--color-warning-200': '253 210 138', // #FDD28A
    '--color-warning-300': '252 187 77', // #FCBB4D
    '--color-warning-400': '251 171 36', // #FBAB24
    '--color-warning-500': '245 158 11', // #F59E0B
    '--color-warning-600': '217 139 6', // #D98B06
    '--color-warning-700': '180 116 9', // #B47409
    '--color-warning-800': '146 97 14', // #92610E
    '--color-warning-900': '120 81 15', // #78510F
    // error | #ac074f
    '--color-error-50': '254 242 242', // #FEF2F2
    '--color-error-100': '254 226 226', // #FEE2E2
    '--color-error-200': '254 202 202', // #FECACA
    '--color-error-300': '252 165 165', // #FCA5A5
    '--color-error-400': '248 113 113', // #F87171
    '--color-error-500': '239 68 68', // #EF4444
    '--color-error-600': '220 38 38', // #DC2626
    '--color-error-700': '185 28 28', // #B91C1C
    '--color-error-800': '153 27 27', // #991B1B
    '--color-error-900': '127 29 29', // #7F1D1D
    // surface | #a6b5bb
    '--color-surface-50': '255 255 255', // #FFFFFF
    '--color-surface-100': '239 239 239', // #EFEFEF
    '--color-surface-200': '220 220 220', // #DCDCDC
    '--color-surface-300': '189 189 189', // #BDBDBD
    '--color-surface-400': '152 152 152', // #989898
    '--color-surface-500': '124 124 124', // #7C7C7C
    '--color-surface-600': '101 101 101', // #656565
    '--color-surface-700': '82 82 82', // #525252
    '--color-surface-800': '70 70 70', // #464646
    '--color-surface-900': '61 61 61', // #3D3D3D
  },
};
