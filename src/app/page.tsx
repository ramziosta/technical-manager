import Hero from "../components/Hero/index";
import Who from "../components/who/index";
import What from "../components/whatIDo/index";
import Where from "../components/where/index";
import When from "../components/when/index";
import Contact from "../components/contact/index";


export default async function Home() {


    return (
        <>
            <Hero />
            <Who />
            <What />
            <Where />
            <When />
            <Contact />


        </>
    );
}