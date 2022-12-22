import { useNavigate } from 'react-router-dom';
import CardOffCanvas from './CardOffCanvas';

export default function Header(props) {
	const navigate = useNavigate();

	const navigateToHome = () => {
		// 👇️ navigate to /products
		navigate('/');
	};

	return (
		<div className='app-header'>
			<p className='gradient-text-header'> Phone Collect </p>
			<img onClick={navigateToHome} alt="" src="/logo/phone-collect-logo.png" style={{ cursor: "pointer", width: "15rem", position: "absolute", top: "0%", left: "0%", }} />
			<CardOffCanvas />
		</div>
	)
}