import { useQuery } from "react-query";
import PageCover from "../shared/PageCover/PageCover";
import { fetchClasses } from "../../API/api";
import ClassCard from "../shared/ClassCard/ClassCard";
import SectionTitle from "../shared/SectionTitle/SectionTitle";

const Classes = () => {
   const { data: classes, isLoading } = useQuery("classes", fetchClasses);
   if (isLoading) {
      return (
         <>
            <span className="loading-lg loading loading-spinner text-primary"></span>
            <span className="loading-lg loading loading-spinner text-secondary"></span>
            <span className="loading-lg loading loading-spinner text-accent"></span>
            <span className="loading-lg loading loading-spinner text-neutral"></span>
            <span className="loading-lg loading loading-spinner text-info"></span>
            <span className="loading-lg loading loading-spinner text-success"></span>
            <span className="loading-lg loading loading-spinner text-warning"></span>
            <span className="loading-lg loading loading-spinner text-error"></span>
         </>
      );
   }

   return (
      <div className="">
         <PageCover title="Classes" subTitle="All The Classes Are In A page"></PageCover>
         <SectionTitle
            title="All Classes"
            subTitle="Don't Stop Learning. Learning enlarge your thinking."
         ></SectionTitle>
         <div className="grid gap-8 grid-cols-1 mb-28 lg:grid-cols-2">
            {classes.map((classs, index) => (
               <ClassCard classs={classs} index={index} key={classs._id}></ClassCard>
            ))}
         </div>
      </div>
   );
};

export default Classes;
