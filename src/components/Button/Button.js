import "./Button.css"
//import Api from "../../api/swapi"

function Button() {

    const GetName = () => {
    
        console.log('oba!')
        
    }

    return(
        <div>
            <button className="Button-Basic"
                type="submit"
                onClick={GetName}
            >
                May the force be with you
            </button>
        </div>
    );
}

export default Button;




