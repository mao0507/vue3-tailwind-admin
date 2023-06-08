/** @type {import('tailwindcss').Config} */
/* eslint-disable */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['autumn', 'dark'], // 如果設為 true，將包含所有主題。 反之，僅有亮色和暗色主題可用。 如果設為陣列，將包含陣列中的主題，並將首主題設為預設主題。
    darkTheme: 'dark', // 允許我們為系統的自動暗色模式選取其他主題。預設情況下，如果沒有指定主題，且使用者的系統啟用了暗色模式，預設主題將為dark
    base: true, // 如果設為 true，將新增數個基礎樣式
    styled: true, // 如果設為 true，元件將包含顏色及樣式，您無需做任何調整。 反之，元件將無任何顏色或樣式，以便您設計自己的風格。
    utils: true, //如果設為 true，將新增響應式和公用類別
    rtl: false, // 如果設為 true，您的主題將以右至左顯示。您需要新增dir='rtl'至 body 標籤。 如果您啟用了 RTL，建議使用 `tailwindcss-flip` 外掛程式，以自動翻轉所有 Tailwind 公用類別。
    prefix: '', // 為所有 daisyUI 類別名稱新增前綴 (包括元件類別、修改器類別以及響應式類別)
    logs: true, // 如果設為 true， daisyUI 在建置 CSS 時會將紀錄顯示於終端機
  },
};
