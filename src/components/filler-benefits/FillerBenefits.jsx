import BenefitBox from "./BenefitBox";
import { CiTimer } from "react-icons/ci";
import { GrTechnology } from "react-icons/gr";
import { PiInfinity } from "react-icons/pi";


export default function FillerBenefits() {
  const benefits = [
    {
      icon: CiTimer,
      text: "نتیجه فوری",
      description: "نتایج درمان بلافاصله پس از انجام قابل مشاهده است.",
    },
    {
      icon: GrTechnology,
      text: "بروز ترین تکنولوژی ها",
      description: "استفاده از جدیدترین دستگاه‌ها و روش‌های روز دنیا.",
    },
    {
      icon: PiInfinity,
      text: "ماندگاری بالا",
      description: "حفظ اثرات درمان برای مدت طولانی بدون نیاز به ترمیم مکرر.",
    },
  ];

  return (
    <div className="bg-secondary flex flex-col justify-center items-center gap-16 py-10">
      <span className="font-bold text-4xl text-primary-dark">مزایای فیلر</span>
      <div className="flex justify-between items-center w-full px-40">
        {benefits.map((benefit)=>(
        <BenefitBox key={benefit.text} {...benefit} />
      ))}
      </div>
    </div>
  );
}
