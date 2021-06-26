import Action from '../images/action.gif'

export function Purchase(props) {
    return (
        <main className="content">
            <h1>Different place to purchase the game</h1>
            <p><i className="fab fa-windows"></i>&nbsp;On Pc:</p>
            <ul>
                <li><a href="https://store.steampowered.com/app/588650/Dead_Cells/">Steam.com</a></li>
                <li><a href="https://www.gog.com/game/dead_cells">Gog.com</a></li>
            </ul>
            <p>
                <i className="fab fa-nintendo-switch"></i>&nbsp;On Switch:</p>
            <ul>
                <li><a href="https://www.nintendo.com/games/detail/dead-cells-switch/">Nintendo eShop</a></li>
            </ul>

            <p><i className="fab fa-playstation"></i>&nbsp;On Ps4:</p>
            <ul>
                <li><a href="https://store.playstation.com/en-us/search/dead%20cells">Playstation Store</a></li>
            </ul>
            <p><i className="fab fa-xbox"></i>&nbsp;On Xbox:</p>
            <ul>
                <li><a href="https://www.microsoft.com/en-au/p/dead-cells/bqscns1t8phq?rtc=1&activetab=pivot:overviewtab">Xbox store</a></li>
            </ul>
            <p><img src={Action} alt="https://gfycat.com/fr/@superjump" /></p>
        </main >
    )
}