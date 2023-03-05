export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         {/*console.log(props.onSearch)*/}
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
