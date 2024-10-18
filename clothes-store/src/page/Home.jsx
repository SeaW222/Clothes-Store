import React from "react";

const Home = (props) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {/* Tiêu đề */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Chào mừng đến với trang chủ!
      </h1>

      {/* Mô tả */}
      <p className="text-lg text-gray-600 mb-8 text-center px-4">
        Đây là nơi bạn có thể tìm thấy những sản phẩm tốt nhất cho nhu cầu của
        bạn. Khám phá các danh mục và ưu đãi đặc biệt ngay hôm nay!
      </p>

      {/* Nút kêu gọi hành động */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
        Khám Phá Ngay
      </button>
    </div>
  );
};

export default Home;
