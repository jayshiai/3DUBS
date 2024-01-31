
import React from 'react'
import "./nav.css"
const SimpleMarquee = () => {
    return (
        <main className='w-screen bg-[#f8ecde] overflow-hidden'>
            <nav class="menu">
                <div class="menu__item">
                    <a class="menu__item-link">Home</a>
                    <img class="menu__item-img" src="img/1.jpg" alt="Some image" />
                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>Home</span>
                            <span>Home</span>
                            <span>Home</span>
                            <span>Home</span>
                        </div>
                    </div>
                </div>
                <div class="menu__item">
                    <a class="menu__item-link">Projects</a>
                    <img class="menu__item-img" src="img/2.jpg" alt="Some image" />
                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>Projects</span>
                            <span>Projects</span>
                            <span>Projects</span>
                            <span>Projects</span>
                        </div>
                    </div>
                </div>
                <div class="menu__item">
                    <a class="menu__item-link">About</a>
                    <img class="menu__item-img" src="img/3.jpg" alt="Some image" />
                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>About</span>
                            <span>About</span>
                            <span>About</span>
                            <span>About</span>
                        </div>
                    </div>
                </div>
                <div class="menu__item">
                    <a class="menu__item-link">Our Crew</a>
                    <img class="menu__item-img" src="img/4.jpg" alt="Some image" />
                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>The Crew</span>
                            <span>The Crew</span>
                            <span>The Crew</span>
                            <span>The Crew</span>
                        </div>
                    </div>
                </div>
                <div class="menu__item">
                    <a class="menu__item-link">Contact</a>
                    <img class="menu__item-img" src="img/5.jpg" alt="Some image" />
                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>Contact</span>
                            <span>Contact</span>
                            <span>Contact</span>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
            </nav>

        </main>
    )
}

export default SimpleMarquee