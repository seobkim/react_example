import Header from "./Header"

let divStyle = {    
    width: "85%",
    margin: "0 auto",
    marginTop: "3%",
    fontSize: "20px"
}

let shingoStyle = {    
    width: "85%",
    margin: "0 auto",
    marginTop: "3%",
    fontSize: "15px",
    fontWeight:"bold"
}

let userInfoStyle={
    float:"right"
}

function MainPage(props){

    const todayTime = () =>{

        let now = new Date();
        let todayYear = now.getFullYear();
        let todayMonth = now.getMonth();
        let todayDate = now.getDate();
        

        return "("+todayYear+"."+todayMonth+"."+todayDate+")";
    }

    return (
        <>
        <Header></Header>

        <div style={divStyle}>
            
            <span>π λμλ³΄λ{todayTime()}</span>
            <span style={userInfoStyle}>π¨βπ¦² {props.userInfo}</span>
        </div>
        

        <div style={shingoStyle}>
            μ κ³  μν©
            <hr/>
        </div>
        

        <div style={shingoStyle}>
            λ΄ μΌκ°
            <hr/>
        </div>

        <div style={shingoStyle}>
            λκΈ° μΌκ°
            <hr/>
        </div>
        </>
    )


}

export default MainPage