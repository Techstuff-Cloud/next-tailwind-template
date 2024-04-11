'use client';
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomThemeOne: CustomThemeConfig = {
  name: 'my-custom-theme-one',
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
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '0 0 0',
    '--on-surface': '0 0 0',
    // =~= Theme Colors  =~=
    // primary | #b0ad49
    '--color-primary-50': '243 243 228', // #f3f3e4
    '--color-primary-100': '239 239 219', // #efefdb
    '--color-primary-200': '235 235 210', // #ebebd2
    '--color-primary-300': '223 222 182', // #dfdeb6
    '--color-primary-400': '200 198 128', // #c8c680
    '--color-primary-500': '176 173 73', // #b0ad49
    '--color-primary-600': '158 156 66', // #9e9c42
    '--color-primary-700': '132 130 55', // #848237
    '--color-primary-800': '106 104 44', // #6a682c
    '--color-primary-900': '86 85 36', // #565524
    // secondary | #e08efb
    '--color-secondary-50': '250 238 254', // #faeefe
    '--color-secondary-100': '249 232 254', // #f9e8fe
    '--color-secondary-200': '247 227 254', // #f7e3fe
    '--color-secondary-300': '243 210 253', // #f3d2fd
    '--color-secondary-400': '233 176 252', // #e9b0fc
    '--color-secondary-500': '224 142 251', // #e08efb
    '--color-secondary-600': '202 128 226', // #ca80e2
    '--color-secondary-700': '168 107 188', // #a86bbc
    '--color-secondary-800': '134 85 151', // #865597
    '--color-secondary-900': '110 70 123', // #6e467b
    // tertiary | #fb7bcc
    '--color-tertiary-50': '254 235 247', // #feebf7
    '--color-tertiary-100': '254 229 245', // #fee5f5
    '--color-tertiary-200': '254 222 242', // #fedef2
    '--color-tertiary-300': '253 202 235', // #fdcaeb
    '--color-tertiary-400': '252 163 219', // #fca3db
    '--color-tertiary-500': '251 123 204', // #fb7bcc
    '--color-tertiary-600': '226 111 184', // #e26fb8
    '--color-tertiary-700': '188 92 153', // #bc5c99
    '--color-tertiary-800': '151 74 122', // #974a7a
    '--color-tertiary-900': '123 60 100', // #7b3c64
    // success | #b3db9e
    '--color-success-50': '244 250 240', // #f4faf0
    '--color-success-100': '240 248 236', // #f0f8ec
    '--color-success-200': '236 246 231', // #ecf6e7
    '--color-success-300': '225 241 216', // #e1f1d8
    '--color-success-400': '202 230 187', // #cae6bb
    '--color-success-500': '179 219 158', // #b3db9e
    '--color-success-600': '161 197 142', // #a1c58e
    '--color-success-700': '134 164 119', // #86a477
    '--color-success-800': '107 131 95', // #6b835f
    '--color-success-900': '88 107 77', // #586b4d
    // warning | #b8912b
    '--color-warning-50': '244 239 223', // #f4efdf
    '--color-warning-100': '241 233 213', // #f1e9d5
    '--color-warning-200': '237 228 202', // #ede4ca
    '--color-warning-300': '227 211 170', // #e3d3aa
    '--color-warning-400': '205 178 107', // #cdb26b
    '--color-warning-500': '184 145 43', // #b8912b
    '--color-warning-600': '166 131 39', // #a68327
    '--color-warning-700': '138 109 32', // #8a6d20
    '--color-warning-800': '110 87 26', // #6e571a
    '--color-warning-900': '90 71 21', // #5a4715
    // error | #7fc9e4
    '--color-error-50': '236 247 251', // #ecf7fb
    '--color-error-100': '229 244 250', // #e5f4fa
    '--color-error-200': '223 242 248', // #dff2f8
    '--color-error-300': '204 233 244', // #cce9f4
    '--color-error-400': '165 217 236', // #a5d9ec
    '--color-error-500': '127 201 228', // #7fc9e4
    '--color-error-600': '114 181 205', // #72b5cd
    '--color-error-700': '95 151 171', // #5f97ab
    '--color-error-800': '76 121 137', // #4c7989
    '--color-error-900': '62 98 112', // #3e6270
    // surface | #a8adf6
    '--color-surface-50': '242 243 254', // #f2f3fe
    '--color-surface-100': '238 239 253', // #eeeffd
    '--color-surface-200': '233 235 253', // #e9ebfd
    '--color-surface-300': '220 222 251', // #dcdefb
    '--color-surface-400': '194 198 249', // #c2c6f9
    '--color-surface-500': '168 173 246', // #a8adf6
    '--color-surface-600': '151 156 221', // #979cdd
    '--color-surface-700': '126 130 185', // #7e82b9
    '--color-surface-800': '101 104 148', // #656894
    '--color-surface-900': '82 85 121', // #525579
  },
};

export const myCustomThemeTwo: CustomThemeConfig = {
  name: 'my-custom-theme-two',
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
    '--on-tertiary': '255 255 255',
    '--on-success': '255 255 255',
    '--on-warning': '0 0 0',
    '--on-error': '255 255 255',
    '--on-surface': '0 0 0',
    // =~= Theme Colors  =~=
    // primary | #b5f3ae
    '--color-primary-50': '244 253 243', // #f4fdf3
    '--color-primary-100': '240 253 239', // #f0fdef
    '--color-primary-200': '237 252 235', // #edfceb
    '--color-primary-300': '225 250 223', // #e1fadf
    '--color-primary-400': '203 247 198', // #cbf7c6
    '--color-primary-500': '181 243 174', // #b5f3ae
    '--color-primary-600': '163 219 157', // #a3db9d
    '--color-primary-700': '136 182 131', // #88b683
    '--color-primary-800': '109 146 104', // #6d9268
    '--color-primary-900': '89 119 85', // #597755
    // secondary | #ea14bf
    '--color-secondary-50': '252 220 245', // #fcdcf5
    '--color-secondary-100': '251 208 242', // #fbd0f2
    '--color-secondary-200': '250 196 239', // #fac4ef
    '--color-secondary-300': '247 161 229', // #f7a1e5
    '--color-secondary-400': '240 91 210', // #f05bd2
    '--color-secondary-500': '234 20 191', // #ea14bf
    '--color-secondary-600': '211 18 172', // #d312ac
    '--color-secondary-700': '176 15 143', // #b00f8f
    '--color-secondary-800': '140 12 115', // #8c0c73
    '--color-secondary-900': '115 10 94', // #730a5e
    // tertiary | #955183
    '--color-tertiary-50': '239 229 236', // #efe5ec
    '--color-tertiary-100': '234 220 230', // #eadce6
    '--color-tertiary-200': '229 212 224', // #e5d4e0
    '--color-tertiary-300': '213 185 205', // #d5b9cd
    '--color-tertiary-400': '181 133 168', // #b585a8
    '--color-tertiary-500': '149 81 131', // #955183
    '--color-tertiary-600': '134 73 118', // #864976
    '--color-tertiary-700': '112 61 98', // #703d62
    '--color-tertiary-800': '89 49 79', // #59314f
    '--color-tertiary-900': '73 40 64', // #492840
    // success | #b84b0e
    '--color-success-50': '244 228 219', // #f4e4db
    '--color-success-100': '241 219 207', // #f1dbcf
    '--color-success-200': '237 210 195', // #edd2c3
    '--color-success-300': '227 183 159', // #e3b79f
    '--color-success-400': '205 129 86', // #cd8156
    '--color-success-500': '184 75 14', // #b84b0e
    '--color-success-600': '166 68 13', // #a6440d
    '--color-success-700': '138 56 11', // #8a380b
    '--color-success-800': '110 45 8', // #6e2d08
    '--color-success-900': '90 37 7', // #5a2507
    // warning | #eab08c
    '--color-warning-50': '252 243 238', // #fcf3ee
    '--color-warning-100': '251 239 232', // #fbefe8
    '--color-warning-200': '250 235 226', // #faebe2
    '--color-warning-300': '247 223 209', // #f7dfd1
    '--color-warning-400': '240 200 175', // #f0c8af
    '--color-warning-500': '234 176 140', // #eab08c
    '--color-warning-600': '211 158 126', // #d39e7e
    '--color-warning-700': '176 132 105', // #b08469
    '--color-warning-800': '140 106 84', // #8c6a54
    '--color-warning-900': '115 86 69', // #735645
    // error | #ac074f
    '--color-error-50': '243 218 229', // #f3dae5
    '--color-error-100': '238 205 220', // #eecddc
    '--color-error-200': '234 193 211', // #eac1d3
    '--color-error-300': '222 156 185', // #de9cb9
    '--color-error-400': '197 81 132', // #c55184
    '--color-error-500': '172 7 79', // #ac074f
    '--color-error-600': '155 6 71', // #9b0647
    '--color-error-700': '129 5 59', // #81053b
    '--color-error-800': '103 4 47', // #67042f
    '--color-error-900': '84 3 39', // #540327
    // surface | #a6b5bb
    '--color-surface-50': '242 244 245', // #f2f4f5
    '--color-surface-100': '237 240 241', // #edf0f1
    '--color-surface-200': '233 237 238', // #e9edee
    '--color-surface-300': '219 225 228', // #dbe1e4
    '--color-surface-400': '193 203 207', // #c1cbcf
    '--color-surface-500': '166 181 187', // #a6b5bb
    '--color-surface-600': '149 163 168', // #95a3a8
    '--color-surface-700': '125 136 140', // #7d888c
    '--color-surface-800': '100 109 112', // #646d70
    '--color-surface-900': '81 89 92', // #51595c
  },
};

export const myCustomThemeThree: CustomThemeConfig = {
  name: 'my-custom-theme-three',
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
    '--on-primary': '255 255 255',
    '--on-secondary': '0 0 0',
    '--on-tertiary': '0 0 0',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '0 0 0',
    '--on-surface': '0 0 0',
    // =~= Theme Colors  =~=
    // primary | #4a667d
    '--color-primary-50': '228 232 236', // #e4e8ec
    '--color-primary-100': '219 224 229', // #dbe0e5
    '--color-primary-200': '210 217 223', // #d2d9df
    '--color-primary-300': '183 194 203', // #b7c2cb
    '--color-primary-400': '128 148 164', // #8094a4
    '--color-primary-500': '74 102 125', // #4a667d
    '--color-primary-600': '67 92 113', // #435c71
    '--color-primary-700': '56 77 94', // #384d5e
    '--color-primary-800': '44 61 75', // #2c3d4b
    '--color-primary-900': '36 50 61', // #24323d
    // secondary | #c6ca58
    '--color-secondary-50': '246 247 230', // #f6f7e6
    '--color-secondary-100': '244 244 222', // #f4f4de
    '--color-secondary-200': '241 242 213', // #f1f2d5
    '--color-secondary-300': '232 234 188', // #e8eabc
    '--color-secondary-400': '215 218 138', // #d7da8a
    '--color-secondary-500': '198 202 88', // #c6ca58
    '--color-secondary-600': '178 182 79', // #b2b64f
    '--color-secondary-700': '149 152 66', // #959842
    '--color-secondary-800': '119 121 53', // #777935
    '--color-secondary-900': '97 99 43', // #61632b
    // tertiary | #fcd2df
    '--color-tertiary-50': '255 248 250', // #fff8fa
    '--color-tertiary-100': '254 246 249', // #fef6f9
    '--color-tertiary-200': '254 244 247', // #fef4f7
    '--color-tertiary-300': '254 237 242', // #feedf2
    '--color-tertiary-400': '253 224 233', // #fde0e9
    '--color-tertiary-500': '252 210 223', // #fcd2df
    '--color-tertiary-600': '227 189 201', // #e3bdc9
    '--color-tertiary-700': '189 158 167', // #bd9ea7
    '--color-tertiary-800': '151 126 134', // #977e86
    '--color-tertiary-900': '123 103 109', // #7b676d
    // success | #87cacc
    '--color-success-50': '237 247 247', // #edf7f7
    '--color-success-100': '231 244 245', // #e7f4f5
    '--color-success-200': '225 242 242', // #e1f2f2
    '--color-success-300': '207 234 235', // #cfeaeb
    '--color-success-400': '171 218 219', // #abdadb
    '--color-success-500': '135 202 204', // #87cacc
    '--color-success-600': '122 182 184', // #7ab6b8
    '--color-success-700': '101 152 153', // #659899
    '--color-success-800': '81 121 122', // #51797a
    '--color-success-900': '66 99 100', // #426364
    // warning | #6fd52b
    '--color-warning-50': '233 249 223', // #e9f9df
    '--color-warning-100': '226 247 213', // #e2f7d5
    '--color-warning-200': '219 245 202', // #dbf5ca
    '--color-warning-300': '197 238 170', // #c5eeaa
    '--color-warning-400': '154 226 107', // #9ae26b
    '--color-warning-500': '111 213 43', // #6fd52b
    '--color-warning-600': '100 192 39', // #64c027
    '--color-warning-700': '83 160 32', // #53a020
    '--color-warning-800': '67 128 26', // #43801a
    '--color-warning-900': '54 104 21', // #366815
    // error | #d45eb3
    '--color-error-50': '249 231 244', // #f9e7f4
    '--color-error-100': '246 223 240', // #f6dff0
    '--color-error-200': '244 215 236', // #f4d7ec
    '--color-error-300': '238 191 225', // #eebfe1
    '--color-error-400': '225 142 202', // #e18eca
    '--color-error-500': '212 94 179', // #d45eb3
    '--color-error-600': '191 85 161', // #bf55a1
    '--color-error-700': '159 71 134', // #9f4786
    '--color-error-800': '127 56 107', // #7f386b
    '--color-error-900': '104 46 88', // #682e58
    // surface | #8180a5
    '--color-surface-50': '236 236 242', // #ececf2
    '--color-surface-100': '230 230 237', // #e6e6ed
    '--color-surface-200': '224 223 233', // #e0dfe9
    '--color-surface-300': '205 204 219', // #cdccdb
    '--color-surface-400': '167 166 192', // #a7a6c0
    '--color-surface-500': '129 128 165', // #8180a5
    '--color-surface-600': '116 115 149', // #747395
    '--color-surface-700': '97 96 124', // #61607c
    '--color-surface-800': '77 77 99', // #4d4d63
    '--color-surface-900': '63 63 81', // #3f3f51
  },
};

export const myCustomThemeFour: CustomThemeConfig = {
  name: 'my-custom-theme-four',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': 'system-ui',
    '--theme-font-family-heading': 'system-ui',
    '--theme-font-color-base': '29 32 35',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '12px',
    '--theme-rounded-container': '8px',
    '--theme-border-base': '1px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '0 0 0',
    '--on-secondary': '255 255 255',
    '--on-tertiary': '0 0 0',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '255 255 255',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #0FBA81
    '--color-primary-50': '248 243 233', // #f8f3e9
    '--color-primary-100': '246 239 226', // #f6efe2
    '--color-primary-200': '243 235 218', // #f3ebda
    '--color-primary-300': '236 223 196', // #ecdfc4
    '--color-primary-400': '222 199 152', // #dec798
    '--color-primary-500': '208 175 108', // #D0AF6C
    '--color-primary-600': '187 158 97', // #bb9e61
    '--color-primary-700': '156 131 81', // #9c8351
    '--color-primary-800': '125 105 65', // #7d6941
    '--color-primary-900': '102 86 53', // #665635
    // secondary | #4F46E5
    '--color-secondary-50': '229 227 251', // #e5e3fb
    '--color-secondary-100': '220 218 250', // #dcdafa
    '--color-secondary-200': '211 209 249', // #d3d1f9
    '--color-secondary-300': '185 181 245', // #b9b5f5
    '--color-secondary-400': '132 126 237', // #847eed
    '--color-secondary-500': '79 70 229', // #4F46E5
    '--color-secondary-600': '71 63 206', // #473fce
    '--color-secondary-700': '59 53 172', // #3b35ac
    '--color-secondary-800': '47 42 137', // #2f2a89
    '--color-secondary-900': '39 34 112', // #272270
    // tertiary | #0EA5E9
    '--color-tertiary-50': '219 242 252', // #dbf2fc
    '--color-tertiary-100': '207 237 251', // #cfedfb
    '--color-tertiary-200': '195 233 250', // #c3e9fa
    '--color-tertiary-300': '159 219 246', // #9fdbf6
    '--color-tertiary-400': '86 192 240', // #56c0f0
    '--color-tertiary-500': '14 165 233', // #0EA5E9
    '--color-tertiary-600': '13 149 210', // #0d95d2
    '--color-tertiary-700': '11 124 175', // #0b7caf
    '--color-tertiary-800': '8 99 140', // #08638c
    '--color-tertiary-900': '7 81 114', // #075172
    // success | #84cc16
    '--color-success-50': '237 247 220', // #edf7dc
    '--color-success-100': '230 245 208', // #e6f5d0
    '--color-success-200': '224 242 197', // #e0f2c5
    '--color-success-300': '206 235 162', // #ceeba2
    '--color-success-400': '169 219 92', // #a9db5c
    '--color-success-500': '132 204 22', // #84cc16
    '--color-success-600': '119 184 20', // #77b814
    '--color-success-700': '99 153 17', // #639911
    '--color-success-800': '79 122 13', // #4f7a0d
    '--color-success-900': '65 100 11', // #41640b
    // warning | #EAB308
    '--color-warning-50': '252 244 218', // #fcf4da
    '--color-warning-100': '251 240 206', // #fbf0ce
    '--color-warning-200': '250 236 193', // #faecc1
    '--color-warning-300': '247 225 156', // #f7e19c
    '--color-warning-400': '240 202 82', // #f0ca52
    '--color-warning-500': '234 179 8', // #EAB308
    '--color-warning-600': '211 161 7', // #d3a107
    '--color-warning-700': '176 134 6', // #b08606
    '--color-warning-800': '140 107 5', // #8c6b05
    '--color-warning-900': '115 88 4', // #735804
    // error | #D41976
    '--color-error-50': '249 221 234', // #f9ddea
    '--color-error-100': '246 209 228', // #f6d1e4
    '--color-error-200': '244 198 221', // #f4c6dd
    '--color-error-300': '238 163 200', // #eea3c8
    '--color-error-400': '225 94 159', // #e15e9f
    '--color-error-500': '212 25 118', // #D41976
    '--color-error-600': '191 23 106', // #bf176a
    '--color-error-700': '159 19 89', // #9f1359
    '--color-error-800': '127 15 71', // #7f0f47
    '--color-error-900': '104 12 58', // #680c3a
    // surface | #495a8f
    '--color-surface-50': '255 255 255', // #FFFFFF
    '--color-surface-100': '246 247 249', // #F6F7F9
    '--color-surface-200': '232 235 238', // #E6EAEF
    '--color-surface-300': '202 209 216', // #CAD1D8
    '--color-surface-400': '153 162 174', // #99A2AE
    '--color-surface-500': '122 133 148', // #7A8594
    '--color-surface-600': '85 94 106', // #555E6A
    '--color-surface-700': '58 65 73', // #3A4149
    '--color-surface-800': '49 54 60', // #31363C
    '--color-surface-900': '29 32 35', // #1D2023
  },
};
