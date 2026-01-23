import videoHomePage from '../../assets/video-homepage.mp4';

const HomePage = (props) => {
    return (
        <div className="homepage-container">

            <video autoPlay muted loop>
                <source src={videoHomePage}
                    type="video/mp4"
                ></source>
            </video>

            <div className='homepage-content'>
                <div className='title-1'>heeeheeee to ask</div>
                <div className='title-2'>you dontttttt
                    tttt
                    ttttttt
                </div>
                <div className='title-3'>
                    <button>get's     gggggg</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage;