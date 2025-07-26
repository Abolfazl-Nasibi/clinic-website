import React from "react";

function MainPage() {
  return (
    <div>
      {/* head */}
      <div
        style={{ height: "calc(100vh - 88px)" }}
        className="flex justify-center items-center gap-40 bg-secondary box-border "
      >
        {/* texts */}
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-primary text-4xl mb-8">کلینیک تخصصی زیبایی و لیزر سجاد زرین</h1>
          <p className="font-medium text-primary text-xl w-[400px] mb-1">
            خدمات لیزر پوست، جوانسازی، پاکسازی، بوتاکس و ... با دستگاه‌های
            مدرن و تیمی حرفه‌ای
          </p>
          <span className="font-light text-primary text-sm">ارائه نوبت آنلاین و مشاوره تخصصی رایگان</span>
          {/* button */}
          <a href="#" className="mt-20 border text-secondary bg-primary rounded-md px-8 py-3 transition-all hover:text-primary hover:bg-secondary hover:border-primary">ثبت نوبت آنلاین</a>
        </div>
        {/* image */}
        <img src="/clinic-image.webp" alt="" className="w-[500px] rounded-2xl shadow-2xl"/>
      </div>
    </div>
  );
}

export default MainPage;
