import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div dir="rtl" className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {/* Main Title */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800 text-center">
            تسجيل الحقول باستخدام رمز
            <br />
            الاستجابة السريعة
          </h1>
        </div>

        {/* QR Code Section */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-2"></div>
          <p className="text-center text-sm text-gray-600">امسح رمز الاستجابة السريعة</p>
        </div>

        {/* Divider with Text */}
        <div className="mb-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">أو ______</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Text Login Section */}
        <div className="space-y-4">
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-2">الدبل النص</h2>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="المعرفة"
            />
          </div>

          <div>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="الفقر"
            />
          </div>

        <Link to='/chats'>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            تسجيل الحقول
          </button>
        </Link>
        </div>

        {/* Social Connections */}
        <div className="mt-8 space-y-3">
          <button className="w-full text-sm py-2 px-4 border rounded-lg hover:bg-gray-50">
            تواصل مع الفلسوف
          </button>
          <button className="w-full text-sm py-2 px-4 border rounded-lg hover:bg-gray-50">
            تواصل مع جودل
          </button>
          <button className="w-full text-sm py-2 px-4 border rounded-lg hover:bg-gray-50">
            تواصل مع أبل
          </button>
        </div>
      </div>
    </div>
  );
}