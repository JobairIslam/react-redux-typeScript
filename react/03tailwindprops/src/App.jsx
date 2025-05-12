import Card from "./components/Card"
import cardData from "../data/cards.json"

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      {cardData.cards.map((card)=>(
        <Card 
          key={card.id}
          title={card.title} 
          pra={card.pra} 
          tag1={card.tag1} 
          tag2={card.tag2} 
          tag3={card.tag3}
        />
      ))}
    </div>
  )
}