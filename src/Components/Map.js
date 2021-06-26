import map from '../images/Map.png'

export function Map(props) {
    return (
        <main className="content">
            <p>In that game different paths are possibles, this is a map made by Ray G. Quit. You can saw the runes you need to access at the different levels. </p>
            <img src={map} />
        </main>
    )
}