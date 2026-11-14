import { Fragment, useState, useEffect } from "react"
import { Navbar, QuestionAndOptions } from "../../component"


export const Quiz = () => {


    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        (async () =>{
            try{
                const { data } = await axios.get("http://localhost:3000/categories");
                setQuiz(data)
            }catch(err){
                console.log(err);
            }
        }) ();
    }, [])

    return(

        <Fragment>

            <Navbar />
            <QuestionAndOptions />
        </Fragment>
    )
}