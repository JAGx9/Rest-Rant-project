const React = require ('react')
const Def = require ('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't seem to find this page!</p>
                <img src="/images/404-error-ghost.jpg" alt=" 404 Error Ghost" />
            </main>
        </Def>
    )
}

module.exports = error404