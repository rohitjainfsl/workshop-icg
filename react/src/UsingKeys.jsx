import data from "./data.js";

function UsingKeys() {
  return (
    // <ul>
    //   {data.map((name, index) => {
    //     return <li key={index}>{name}</li>;
    //   })}
    // </ul>

    <div>
        <div>
            <h2>Question</h2>
            <div>
                <p>New Delhi</p>
                <p>Mumbai</p>
            </div>
        </div>
        <div>
            <h2>Question</h2>
            <div>
                <p>New Delhi</p>
                <p>Mumbai</p>
            </div>
        </div>
        <div>
            <h2>Question</h2>
            <div>
                <p>New Delhi</p>
                <p>Mumbai</p>
            </div>
        </div>
    </div>


  );
}
export default UsingKeys;
