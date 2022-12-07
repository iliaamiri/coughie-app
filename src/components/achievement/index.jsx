import {Link} from 'preact-router'
import "./index.css";

export default function Achievements({title, description, img, locked}) {


    return (
        <>
        {locked}
        <div className='wrapper'>
        <img src={img} />
        <div className='text'>
        <strong>{title}</strong>
        <p>{description}</p>
        </div>
        </div>
        </>
    )
}
