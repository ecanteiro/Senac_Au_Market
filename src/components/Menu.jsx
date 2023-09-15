
function Menu() {


    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

    return (
        <>
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation"
            style={{background: '#f59f18'}}>
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={'/assets/logo-navbar.png'}
                            alt="Logo do Au Market"
                        />
                    </a>
                </div>
            </nav>
        </>
    )
}
export default Menu