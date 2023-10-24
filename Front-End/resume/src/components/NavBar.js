import resume from "./resumelogo.jpg";


export function NavBar(){

    return(
        //Logo on the left 
        <div className="NavBar">
            <img className='resumeLogo' src={resume} alt='No Logo'></img>
            <div className='rightBar'>
                    <div className="rightBarItems">
                        <a href='dummy'>
                            About
                        </a>
                    </div>
                    <div className="rightBarItems">
                        <a href='dummy'>
                            Resume Cloud
                        </a>
                    </div>
                    <div className="rightBarItems">
                        <a href='dummy'>
                            Sign-Out
                        </a>
                    </div>
                
            </div>
        </div>
    )
}