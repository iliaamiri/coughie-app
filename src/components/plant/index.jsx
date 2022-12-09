import "./index.css";
import RememberDialogue from "../rememberDialogue";

export default function Plant() {
    const vapedToday = localStorage.getItem("vapedToday?");
    const moneySpent = Number(localStorage.getItem("moneySpent?"));
    const hoursWithoutVaping = Number(
        localStorage.getItem("hoursWithoutVaping")
    );
    let dayNum = Number(localStorage.getItem("day"));
    let oxygen = Number(localStorage.getItem("oxygen"));

    let isProgress = true;
    let isOneFlower = false;
    let plantProgress = (
        <img id="plantProgress" src="/assets/SVG/SVG/plantProgress.svg" alt={'progress of the plant'}/>
    );

    if (!vapedToday) {
        console.log("no progress made yet!");
        plantProgress = (
            <img
                id="plantProgress"
                src="/assets/SVG/SVG/plantProgress.svg"
                alt={'progress of the plant'}
            />
        );


    }

    if (vapedToday == "no" && moneySpent == 0) {
        isProgress = false;
        plantProgress = (<>
                <img id="plantProgress" src="/assets/SVG/SVG/maxFlower.svg"/>
                <p className="plant-notif"> 🌿🌿🌿 Your Oxygen has increased by 20 ! Amazing! ✨🌿🌿🌿 </p>
            </>
        );
    }

    if (vapedToday == "no" && moneySpent != 0) {
        isProgress = false;
        plantProgress = (<>
                <img id="plantProgress" src="/assets/SVG/SVG/half-flowered.svg"/>
                <p className="plant-notif"> 🌿🌿🌿 Your Oxygen has increased by 15 ! 🌿🌿🌿 </p>
            </>
        );

    }

    if (vapedToday == "yes" && hoursWithoutVaping > 14) {
        isProgress = false;
        plantProgress = (
            <>
                <img
                    id="plantProgress"
                    src="/assets/SVG/SVG/half-flowered.svg"
                />
                <p className="plant-notif"> 🌿🌿🌿 Your Oxygen has increased by 15 ! 🌿🌿🌿 </p>
            </>
        );
    } else {
        if (vapedToday == "yes" && hoursWithoutVaping >= 9) {
            isProgress = false;
            isOneFlower = true;
            plantProgress = (
                <>
                    <img
                        id="plantProgress"
                        src="/assets/SVG/SVG/one-flower.svg"
                    />
                    <p className="plant-notif"> 🌿🌿 Your Oxygen has increased by 10 ! Good Job! 🌿🌿 </p>
                </>
            );
        } else {
            if (vapedToday == "yes" && hoursWithoutVaping < 9) {
                isProgress = true;
                plantProgress = (<>
                        <img
                            id="plantProgress"
                            src="/assets/SVG/SVG/plantProgress.svg"
                        />
                        <p className="plant-notif"> 🌿 Your Oxygen has increased by 2... You will get there!🌿 </p>
                    </>
                );
            }
        }
    }

    return (
        <>
            <div className="oxygenLevels">
                <img src="/assets/coca-leaves.png" alt=""/>
                <span>{oxygen} O2</span>

            </div>
            <div className={'daily-checkin-container'}>
                <h2 className={`daily-checkin-title ${isProgress ? 'is-progress' : (isOneFlower ? 'one-flower' : '')}`}>Day {dayNum}</h2>
                {plantProgress}
            </div>

        </>
    );
}
