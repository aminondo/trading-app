import { useParams } from 'react-router-dom';

interface RouteParams {
    stock?: string
};

const Details = () => {
    const { stock } = useParams<RouteParams>();

    return (
        <p>Details {stock}</p>
    )
}

export default Details;