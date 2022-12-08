import "./index.css";

export default function Plant() {

    const data = localStorage.getItem("vapedToday");
    console.log(data)

    //  <img id="plantProgress" src="/src/assets/SVG/SVG/half-flowered.svg" alt="" />
  // <img id="plantProgress" src="/src/assets/SVG/SVG/maxFlower.svg" />
  //smallest /least progress 
  // <img id="plantProgress" src="/src/assets/SVG/SVG/plantProgress.svg" />
    return (
    <div className="">
        <h2 className={'daily-checkin-title'}>Day 1</h2>
      <img id="plantProgress" src="/src/assets/SVG/SVG/plantProgress.svg" />
    </div>
  );
}
