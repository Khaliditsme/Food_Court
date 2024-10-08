
import svg from '../asset/about.svg'
import '../css/About.css'
const About = ()=>{
    return (
      <div className='about_container'>
        <h1>About Us</h1>
        <div className="svg_container">
          <img src={svg} alt="" className='about_svg' />
        </div>
        <h1>Get your food delivery without the hassle!</h1>
        <p>
          Go Foods was founded with a simple mission: to make it easier for
          people to get their food delivered. With a food delivery app in India,
          they make it easy for people to order food from their favorite
          restaurants and have it delivered right to their door. They work with
          some of the best restaurants in the area, so people can always get the
          food they want, when they want it. Whether they're in the mood for
          Indian food, Italian food, or something else, Go Foods has them
          covered. Plus, they offer great discounts on food delivery when people
          order through the app. With Go Foods, there's no need to go out to
          eat; they can bring the restaurant to you.
        </p>
      </div>
    );
}

export default About