import cocktail from "./assets/whiterussian.jpg";
import styled from "styled-components";
import "./App.css";

const Block = styled.div`
display:flex;
justify-content:center;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  width: 45vw;
  color: white;
  border-radius: 13px;
  margin-top: 10vh;
  font-family: "Courier New", Courier;
  padding: 5vh 0;
`;

const Img = styled.img`
width: 15vw;
`

function App() {
  return (
    <Block>
    <Card className="card">
      <h1>White Russian</h1>
      <Img src={cocktail} alt="white_russian" />
      <h2>Recette</h2>
      <ul>
        <li>4 cl de vodka</li>
        <li>4 cl de liqueur de café (kahlua, marie brizard)</li>
        <li>2 cl de lait</li>
        <li>2 cl de crème fraîche liquide</li>
      </ul>
      <h2>Préparation</h2>
      <ol>
        <li>Réalisez la recette "White Russian" directement dans le verre.</li>
        <li>
          Dans le verre, sur des glaçons, verser les ingrédients. Servir avec un
          batônnet mélangeur.Pour un peu plus de légèreté, préférez du lait
          entier à la crème liquide.
        </li>
        <li>Servir dans un verre de type "old fashioned".</li>
        <li>Aucune décoration.</li>
      </ol>
    </Card>
    </Block>
  );
}

export default App;
