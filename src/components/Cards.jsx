import Card from './Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   const dCards = characters.map(aChar => Card(
      {
      ...aChar,
      onClose:() => window.alert('Emulamos que se cierra la card')
      }));
   return <div style={{
         display: 'flex',
         border: '4px solid lime',
         borderRadius: 10
         }}>
         {dCards}
         </div>;
}
