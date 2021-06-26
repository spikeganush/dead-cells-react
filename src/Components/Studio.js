import team from '../images/motion-twin-equipe.jpg'

console.log(team)
export function Studio(props) {
    return (
        <main className="content">
            <h1>Motion twin</h1>
            <p><a href="https://motion-twin.com/fr/">Motion Twin</a> is an independent studio specializing in online video games. Founded in 2001, the company is a worker cooperative enterprise based in Bordeaux, France.</p>
            <p>The company initially gained notice through the release of games such as "Hammerfest", "My Brute", "Mush", "Die2Nite", "Alphabounce" and the social game platform, "Twinoid", and now has a community of 15 million registered users.</p>
            <p>All games developed by Motion Twin, with the exception of Dead Cells, can be accessed and played for free with some games including a premium option (subscriptions and items) which create revenue for the company. In 2009, the company had a turnover of 4 million euros.</p>
            <p>Source: <a href="https://en.wikipedia.org/wiki/Motion_Twin">Wikipedia.</a></p>
            <p><img src={team} alt="http://gamingway.fr/tag/motion-twin/" /></p>

    </main>
            )
}