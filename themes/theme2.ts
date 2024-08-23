import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const muiTheme2: CustomThemeConfig = {
  name: "mui-2",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `system-ui`,
    "--theme-font-family-heading": `system-ui`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "255 255 255",
    "--on-secondary": "255 255 255",
    "--on-tertiary": "0 0 0",
    "--on-success": "255 255 255",
    "--on-warning": "0 0 0",
    "--on-error": "255 255 255",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #3B82F6
    "--color-primary-50": "226 236 254", // #e2ecfe
    "--color-primary-100": "216 230 253", // #d8e6fd
    "--color-primary-200": "206 224 253", // #cee0fd
    "--color-primary-300": "177 205 251", // #b1cdfb
    "--color-primary-400": "118 168 249", // #76a8f9
    "--color-primary-500": "59 130 246", // #3B82F6
    "--color-primary-600": "53 117 221", // #3575dd
    "--color-primary-700": "44 98 185", // #2c62b9
    "--color-primary-800": "35 78 148", // #234e94
    "--color-primary-900": "29 64 121", // #1d4079
    // secondary | #9c27b0
    "--color-secondary-50": "240 223 243", // #f0dff3
    "--color-secondary-100": "235 212 239", // #ebd4ef
    "--color-secondary-200": "230 201 235", // #e6c9eb
    "--color-secondary-300": "215 169 223", // #d7a9df
    "--color-secondary-400": "186 104 200", // #ba68c8
    "--color-secondary-500": "156 39 176", // #9c27b0
    "--color-secondary-600": "140 35 158", // #8c239e
    "--color-secondary-700": "117 29 132", // #751d84
    "--color-secondary-800": "94 23 106", // #5e176a
    "--color-secondary-900": "76 19 86", // #4c1356
    // tertiary | #0288d1
    "--color-tertiary-50": "217 237 248", // #d9edf8
    "--color-tertiary-100": "204 231 246", // #cce7f6
    "--color-tertiary-200": "192 225 244", // #c0e1f4
    "--color-tertiary-300": "154 207 237", // #9acfed
    "--color-tertiary-400": "78 172 223", // #4eacdf
    "--color-tertiary-500": "2 136 209", // #0288d1
    "--color-tertiary-600": "2 122 188", // #027abc
    "--color-tertiary-700": "2 102 157", // #02669d
    "--color-tertiary-800": "1 82 125", // #01527d
    "--color-tertiary-900": "1 67 102", // #014366
    // success | #2e7d32
    "--color-success-50": "224 236 224", // #e0ece0
    "--color-success-100": "213 229 214", // #d5e5d6
    "--color-success-200": "203 223 204", // #cbdfcc
    "--color-success-300": "171 203 173", // #abcbad
    "--color-success-400": "109 164 112", // #6da470
    "--color-success-500": "46 125 50", // #2e7d32
    "--color-success-600": "41 113 45", // #29712d
    "--color-success-700": "35 94 38", // #235e26
    "--color-success-800": "28 75 30", // #1c4b1e
    "--color-success-900": "23 61 25", // #173d19
    // warning | #ed6c02
    "--color-warning-50": "252 233 217", // #fce9d9
    "--color-warning-100": "251 226 204", // #fbe2cc
    "--color-warning-200": "251 218 192", // #fbdac0
    "--color-warning-300": "248 196 154", // #f8c49a
    "--color-warning-400": "242 152 78", // #f2984e
    "--color-warning-500": "237 108 2", // #ed6c02
    "--color-warning-600": "213 97 2", // #d56102
    "--color-warning-700": "178 81 2", // #b25102
    "--color-warning-800": "142 65 1", // #8e4101
    "--color-warning-900": "116 53 1", // #743501
    // error | #d32f2f
    "--color-error-50": "248 224 224", // #f8e0e0
    "--color-error-100": "246 213 213", // #f6d5d5
    "--color-error-200": "244 203 203", // #f4cbcb
    "--color-error-300": "237 172 172", // #edacac
    "--color-error-400": "224 109 109", // #e06d6d
    "--color-error-500": "211 47 47", // #d32f2f
    "--color-error-600": "190 42 42", // #be2a2a
    "--color-error-700": "158 35 35", // #9e2323
    "--color-error-800": "127 28 28", // #7f1c1c
    "--color-error-900": "103 23 23", // #671717

    // light to dark | shades of gray
    "--color-surface-50": "255 255 255", // #ffffff (white)
    "--color-surface-100": "240 240 240", // #f0f0f0
    "--color-surface-200": "220 220 220", // #dcdcdc
    "--color-surface-300": "200 200 200", // #c8c8c8
    "--color-surface-400": "160 160 160", // #a0a0a0
    "--color-surface-500": "120 120 120", // #787878
    "--color-surface-600": "90 90 90", // #5a5a5a
    "--color-surface-700": "60 60 60", // #3c3c3c
    "--color-surface-800": "35 35 35", // #232323
    "--color-surface-900": "29 33 37", // #1d2125
  },
};
