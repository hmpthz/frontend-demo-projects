import styles from "@/styles";

interface NewFeatureProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const NewFeatures = ({ imgUrl, title, subtitle }: NewFeatureProps) => (
  <div className="flex-1 min-w-[210px] sm:max-w-[250px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}>
      <img src={imgUrl} alt='icon' className="w-1/2 h-1/2" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">{title}</h1>
    <p className="mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
