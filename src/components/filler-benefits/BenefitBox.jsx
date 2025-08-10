

export default function BenefitBox({icon : Icon , text ,description}) {

  return <div className="flex flex-col justify-center items-center w-92 px-10 py-10 rounded-lg shadow-2xl border border-primary-dark bg-secondary-dark/20 text-primary-dark">
      <Icon size={60} />
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold text-2xl mb-12">{text}</span>
        <span>{description}</span>
      </div>
  </div>;
}
