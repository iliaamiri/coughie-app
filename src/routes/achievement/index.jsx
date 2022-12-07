import DisplayBar from "../../components/displayBar";
import Achievements from "../../components/achievement";
const Achievement = () => {
  const achievements = [
    {
      img: "/src/assets/SVG/floweredPlant.svg", 
      title: "starting day one!", 
      description: "you have started your vape free journey with Coughie!", 
      locked: false
    }, 
    {
      img: "/src/assets/note.png", 
      title: "Daily-check in", 
      description: "First day checking in on your progress!", 
      locked: false
    }, 
    {
      img: "/src/assets/SVG/community.svg", 
      title: "Join a community", 
      description: "Join your first community!", 
      locked: false
    },
    {
      img: "/src/assets/money.png", 
      title: "Saved Money", 
      description: "spend no money on vaping for one day", 
      locked: true
    }
  ]
    return (
        <div>
            <DisplayBar name="Achievements" />
      {
        achievements.map((achieve)=>(
          <Achievements key={achieve.img} img={achieve.img} title={achieve.title} description={achieve.description}/>
        ))
      }
          
        </div>
    );
};

export default Achievement;
