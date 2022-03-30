import position from '../img/position.svg'

export default function Card() {
	return (
		<div className='Card'>
			<img src='' alt='Card photo' />
			<div className="Card-wrapper">
				<div className='Card-localisation'>
					<img src={position} alt='Position icon svg' />
					<span>Japan</span>
					<a href='#'>View on Google Maps</a>
				</div>
			</div>
		</div>
	)
}