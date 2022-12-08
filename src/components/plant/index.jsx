import "./index.css";

export default function Plant() {
    const vapedToday = localStorage.getItem("vapedToday?");
    const moneySpent = Number(localStorage.getItem("moneySpent?"));
    const hoursWithoutVaping = Number(
        localStorage.getItem("hoursWithoutVaping")
    );
    let dayNum = Number(localStorage.getItem("day"));
    let oxygen = Number(localStorage.getItem("oxygen"));
  
    let plantProgress = (
        <img id="plantProgress" src="/src/assets/SVG/SVG/plantProgress.svg" />
    );

    if (!vapedToday) {
        console.log("no progress made yet!");
        plantProgress = (
            <img
                id="plantProgress"
                src="/src/assets/SVG/SVG/plantProgress.svg"
            />
        );
    }

    if (vapedToday == "no" && moneySpent == 0) {
        plantProgress = (
            <img id="plantProgress" src="/src/assets/SVG/SVG/maxFlower.svg" />
        );
       
    }

    if (vapedToday == "yes" && hoursWithoutVaping > 14) {
        plantProgress = (
            <img
                id="plantProgress"
                src="/src/assets/SVG/SVG/half-flowered.svg"
            />
        );
    } else {
        if (vapedToday == "yes" && hoursWithoutVaping >= 9) {
            plantProgress = (
                <img
                    id="plantProgress"
                    src="/src/assets/SVG/SVG/one-flower.svg"
                />
            );
        } else {
            if (vapedToday == "yes" && hoursWithoutVaping < 9) {
                plantProgress = (
                    <img
                        id="plantProgress"
                        src="/src/assets/SVG/SVG/plantProgress.svg"
                    />
                );
            }
        }
    }

    return (
        <>
            <div className="oxygenLevels">
                <img src="/assets/coca-leaves.png" alt="" />
                <span>{oxygen} O2</span>
              
            </div>
            <div>
                <h2 className={"daily-checkin-title"}>Day {dayNum}</h2>
                {plantProgress}
            </div>
        </>
    );
}
