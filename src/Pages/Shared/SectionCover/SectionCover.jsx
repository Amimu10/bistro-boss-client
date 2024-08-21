import { Parallax } from 'react-parallax';

const SectionCover = ({img, title}) => {
    return (
        <Parallax className="mb-14"
        blur={{ min: -50, max: 50 }}
        bgImage={img} 
        bgImageAlt="the dog"
        strength={-200}
    >
      <div className="hero ">
  <div className="hero-content text-neutral-content text-center font-cinzel ">
  <div className="bg-[#151515] bg-opacity-60 text-white md:px-24 md:py-24 px-12 py-12 mt-40">
        <h3 className="lg:text-[45px] mdZ:text-[32px] text-[24px] font-semibold ">{title}</h3>
        <p className="lg:text-[24px] text-lg ">Would you like to try a dish?</p>
      </div>
  </div>
</div>
<div style={{ height: '200px' }} />
    </Parallax>

    );
};

export default SectionCover;