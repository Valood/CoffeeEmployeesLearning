import {Link, useParams} from "react-router-dom";

const Lecture = () => {
    const {id} = useParams()
    return (
        <div>
            {id}
            <Link to='/lectures'>К лекциям</Link>
        </div>
    );
};

export default Lecture;
