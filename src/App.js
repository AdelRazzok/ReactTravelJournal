import Header from './components/Header'
import Card from './components/Card'
import CardInfo from './CardInfo'

export default function App() {
	const cards = CardInfo.map(card => <Card id={card.id} infos={card} />)

	return (
		<div className="App">
			<Header />
			{cards}
		</div>
	)
}