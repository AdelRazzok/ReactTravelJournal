import position from '../img/position.svg'

export default function Card(props) {
	return (
		<>
			<div className='Card'>
				<img src={props.infos.img} alt='Card photo' className='Card-image' />
				<div className="Card-wrapper">
					<div className='Card-localisation'>
						<span className='Card-country text'>
							<img src={position} alt='Position icon svg' /> 
							{props.infos.country}
						</span>
						<a href={props.infos.maps} className='Card-maps'>View on Google Maps</a>
					</div>
					<h2 className='Card-title text'>{props.infos.title}</h2>
					<p className="Card-duration text">{`${props.infos.start} - ${props.infos.end}`}</p>
					<p className="text">{props.infos.description}</p>
				</div>
			</div>
			<div className="Card-separator"></div>
		</>
	)
}