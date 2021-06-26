import gears from '../images/gears_gif.gif'

export function Stuff(props) {
    return (
        <main className="content">
            <p>Dead Cells provides players with multiple Gear in the form of:</p>
            <ul>
                <li>Weapons, which have limited but different movesets</li>
                <li>Skills, which cause a variety of effects but must cool down between uses</li>
                <li>And Amulets, passive items which can grant powerful offensive or defensive benefits.</li>
            </ul>
            <p>Gear items, like Pickups, are not automatically collected — they must be picked up with the Interact key. Gear can usually be recycled into gold instead if the Recycle upgrades have been unlocked.</p>
            <p>Most Gear appear with one or more Affixes which add effects or situational benefits. Only non-starter, Level 1 Gear and unique talismans lack affixes of any kind. (Starter Gear always generates with the affix "Cannot be sold.")

                If you're looking for one missing item, but you have all stuff that are listed below, you might be missing Merchandise Category general improvement (blueprint found in the Graveyard).</p>
            <p> Source: <a href="https://deadcells.gamepedia.com/Gear">Gamedia.</a></p>
            <p><img src={gears} alt="https://www.kontrolfreek.com/blogs/blogofficial/3-reasons-to-go-into-dead-cells-completely-blind" /></p>
        </main>
    )
}