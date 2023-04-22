
import react from 'react'

const Welcome = (props) => {

    alert("Hello World!");

    return <div>
        {props.name}
        <h1>Hello World!</h1>
        <button>
            Hello World!
        </button>

        <input type='text' value='HelloWorld'></input>

        <select>
            <option>HelloWorld</option>
            <option>HelloWorld</option>
            <option>HelloWorld</option>
        </select>
    
        <div className='img01'>
            <h2>
            HelloWorld Image
            </h2>
        </div>
    </div>
    
}

export default Welcome;