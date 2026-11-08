import { Navbar, QuizCard } from "../../component/index"
import { Fragment, useEffect, useState } from "react";
import  axios  from "axios";
import "./Home.css"

export const Home = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () =>{
            try{
                const { data } = await axios.get("http://localhost:3000/categories");
                setCategories(data)
            }catch(err){
                console.log(err);
            }
        }) ();
    }, []);

    return(
        <Fragment>
            <Navbar />

            <main className="d-flex gap-md align-center justify-center">
                {
                    categories.length > 0 && categories.map(category => <QuizCard  category={category} key={category.id}/>)
                }
            </main>
        </Fragment>
    )
}