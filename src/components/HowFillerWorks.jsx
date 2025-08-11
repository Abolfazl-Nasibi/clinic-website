export default function HowFillerWorks() {
  return (
    <div className="flex justify-between items-center gap-16 px-40 py-10 bg-primary-dark">
      {/* texts */}
      <div className="flex flex-col items-start justify-center text-secondary">
        <span className="font-bold text-2xl mb-2">فیلر چطوری کار میکنه</span>
        <span>
          فیلرها با تزریق مواد خاص به لایه‌های مختلف پوست، حجم از دست رفته را
          بازمی‌گردانند، خطوط و چین‌وچروک‌ها را کاهش می‌دهند و ظاهری جوان‌تر و
          شاداب‌تر ایجاد می‌کنند. این روش غیرجراحی و سریع، نتایج قابل مشاهده‌ای
          بلافاصله پس از انجام دارد.
        </span>
        <span className="font-bold text-2xl mb-2 mt-8">ماندگاری فیلر چقدر است؟</span>
        <span>
          بسته به نوع فیلر، محل تزریق و شرایط بدن، ماندگاری آن می‌تواند بین ۶
          ماه تا ۲ سال باشد. انتخاب مواد با کیفیت و انجام توسط پزشک مجرب، تأثیر
          زیادی در طول عمر نتیجه خواهد داشت.
        </span>
        <span className="font-bold text-2xl mb-2 mt-8">تفاوت فیلر و بوتاکس</span>
        <span>فیلر برای پر کردن حجم از دست‌رفته و فرم‌دهی صورت استفاده می‌شود، در حالی که بوتاکس با شل کردن عضلات، خطوط و چین‌وچروک‌های پویا را کاهش می‌دهد. هر دو روش مکمل هم بوده و می‌توانند برای نتایج بهتر ترکیب شوند.</span>
      </div>

      {/* image */}
      <img src={`${import.meta.env.BASE_URL}/filler.webp`} className="w-[720px] rounded-md" />
    </div>
  );
}
