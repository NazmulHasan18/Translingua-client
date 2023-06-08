import Banner from "../Banner/Banner";
import useAuth from "../../../hooks/useAuth";

const Home = () => {
   const { user } = useAuth();
   console.log(user);
   return (
      <div>
         <Banner></Banner>
         <h2 className="font-exo text-4xl uppercase font-bold">This is home</h2>
      </div>
   );
};

export default Home;
