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
            
            <span>📋 대시보드{todayTime()}</span>
            <span style={userInfoStyle}>👨‍🦲 {props.userInfo}</span>
        </div>
        

        <div style={shingoStyle}>
            신고 상황
            <hr/>
        </div>
        

        <div style={shingoStyle}>
            내 일감
            <hr/>
        </div>

        <div style={shingoStyle}>
            대기 일감
            <hr/>
        </div>
        </>
    )


}

export default MainPage