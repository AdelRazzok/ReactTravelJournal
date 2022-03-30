import logo from '../img/logo.svg'

export default function Header() {
	return (
		<div className='Header'>
			<img src={logo} alt='Travel Journal logo' />
			<h1 className='Header-title'>my travel journal.</h1>
		</div>
	)
}