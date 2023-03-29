import './About.css';

export default function About(){
    return(
        <div className="container-about">
            <h1>About the Team</h1>
            <div className='team-members'>
                <img className="img" src="https://simg.nicepng.com/png/small/933-9332131_profile-picture-default-png.png" 
                    alt="Profile"
                />
                <div className="description-txt">
                    <h3>Maximillian Chalitsios</h3>
                    <p>[Description]
                    </p>
                </div>
            </div>
            <div className='team-members'>
                <img className="img" src="https://simg.nicepng.com/png/small/933-9332131_profile-picture-default-png.png" 
                    alt="Profile"
                />
                <div className="description-txt">
                    <h3>Noah Morton</h3>
                    <p>[Description]</p>
                </div>
            </div> 
            <div className='team-members'>
                <img className="img" src="https://simg.nicepng.com/png/small/933-9332131_profile-picture-default-png.png" 
                    alt="Profile"
                />
                <div className="description-txt">
                    <h3>Anh Nhu Nhan Nguyen</h3>
                    <p>[Description]</p>
                </div>
            </div> 
            <div className='team-members'>
                <img className="img" src="https://simg.nicepng.com/png/small/933-9332131_profile-picture-default-png.png" 
                    alt="Profile"
                />
                <div className="description-txt">
                    <h3>Nicole Phan</h3>
                    <p>[Description]</p>
                </div>
            </div>      
        </div>
    );
}