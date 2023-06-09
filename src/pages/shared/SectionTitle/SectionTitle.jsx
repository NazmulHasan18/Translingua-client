const SectionTitle = ({ title, subTitle }) => {
   return (
      <div className="text-center mt-20 mb-10 space-y-6">
         <h2 className="text-3xl lg:text-5xl uppercase font-semibold text-orange-600">{title}</h2>
         <hr className="border border-orange-400 border-double w-[300px] lg:w-1/3 mx-auto" />

         <p className="font-mont lg:text-xl">{subTitle}</p>
      </div>
   );
};

export default SectionTitle;
