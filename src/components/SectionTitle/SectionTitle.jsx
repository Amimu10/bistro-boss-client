

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className=" text-center container mx-auto md:px-6 px-4 mb-8 w-5/12">
            <p className="text-secondary md:text-[20px] text-base italic border-b-2 pb-3 border-[#E8E8E8]  "> --- {subHeading} --- </p>
            <h3 className="lg:text-[48px] md:text-[28px] font-cinzel uppercase border-b-2 mt-2 pb-2 border-[#E8E8E8]">{heading}</h3>
        </div>
    );
};

export default SectionTitle;