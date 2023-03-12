export default function Card(props) {
   return (
      <div style={{
            border: '4px solid red',
            borderRadius: 10,
            margin: 'auto'
            }}>
         <button onClick={props.onClose}>X</button>
         {/*console.log(props)*/}
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img src={props.image} alt="Imagen" />
      </div>
   );
}
