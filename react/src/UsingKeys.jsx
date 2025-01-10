import data from "./data.js";

function UsingKeys() {
  return (
    // <ul>
    //   {data.map((name, index) => {
    //     return <li key={index}>{name}</li>;
    //   })}
    // </ul>

    <div>
      {data.map((obj, index) => {
        return (
          <div key={index}>
            <h3>{obj.q}</h3>
            <div>
              {obj.options.map((option, ind) => (
                <button key={ind}>{option}</button>
              ))}
            </div>
          </div>
        );
      })}
    </div>

    // <div>
    //     <div>
    //         <h2>What is the capital of India?</h2>
    //         <div>
    //             <p>New Delhi</p>
    //             <p>Mumbai</p>
    //         </div>
    //     </div>
    //     <div>
    //         <h2>Who is the president of India?</h2>
    //         <div>
    //             <p>Narendra Modi</p>
    //             <p>Draupadi Murmu</p>
    //         </div>
    //     </div>
    //     <div>
    //         <h2>Where is Taj Mahal located?</h2>
    //         <div>
    //             <p>Jaipur</p>
    //             <p>Agra</p>
    //         </div>
    //     </div>
    // </div>
  );
}
export default UsingKeys;
