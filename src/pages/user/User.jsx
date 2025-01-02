import { useParams } from 'react-router-dom';

const User = () => {
	//const params = useParams();
	const { username } = useParams();
	return <h1>{username}</h1>;
};
export default User;
