import React from "react";

function Head() {
  return (
    <div
      style={{ height: "calc(100vh - 28px)" }}
      className="bg-[url('/header-bg.png')] bg-cover flex items-center justify-between px-40"
    >
      {/* texts & reserve button*/}
      <div>
        {/* texts */}
        <div className="flex flex-col text-secondary mb-16">
          <span className="text-4xl font-bold mb-2">
            تخصص، دقت و زیبایی را با ما تجربه کنید
          </span>
          <span className="w-[500px] font-thin">
            تجربه‌ای متفاوت از زیبایی و سلامت را با روش‌های نوین و تخصصی ما
            داشته باشید. رضایت شما انگیزه ما برای بهتر شدن است.
          </span>
        </div>
        {/* reserve button */}
        <a
          href="https://doctor-yab.ir/Search/30965/%D8%AF%DA%A9%D8%AA%D8%B1-%D8%B3%D8%AC%D8%A7%D8%AF-%D8%B2%D8%B1%DB%8C%D9%86/"
          target="__blank"
          className="border-2 border-secondary rounded-md text-secondary px-4 py-1 text-xl hover:bg-secondary hover:text-primary-dark transition-all"
        >
          رزرو آنلاین نوبت
        </a>
      </div>
      {/* doctor image */}
      <img src="/person.png" alt="doctor image" />
    </div>
  );
}

export default Head;
