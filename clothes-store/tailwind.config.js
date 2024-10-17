/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // hoặc bất kỳ tệp HTML nào của bạn
    "./src/**/*.{js,jsx,ts,tsx}", // Đảm bảo rằng Tailwind tìm kiếm trong tất cả các tệp JS/JSX/TS/TSX trong thư mục src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
