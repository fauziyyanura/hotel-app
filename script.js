document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const closeMenu = document.getElementById('closeMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.style.display = 'block'; // Show the menu
    });

    closeMenu.addEventListener('click', () => {
        navMenu.style.display = 'none'; // Hide the menu
    });
});

/*document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
});*/

const sections = [
    {
        title: "Why choose us",
        text: "The main reason is because our <br> competitors have disgusting <br>sites, but we can't write that<br> here, so the text here will be<br> different",
        image1: "asset/Ellipse.svg",
        image2: "asset/payment.svg",
        alt1: "Ellipse",
        alt2: "Payment",
    },
    {
        title: "Payment Method",
        text: "We have a lot of them, from <br> cryptocurrencies to barter for potatoes",
        image1: "asset/Ellipse.svg",
        image2: "asset/process.svg",
        alt1: "Ellipse",
        alt2: "Process",
    },
    {
    title: "Simple search process",
    text: "We checked it out,even the kid did it<br> but it was my mom's friend's son",
    image1: "asset/Ellipse.svg",
    image2: "asset/support.svg",
    alt1: "Ellipse",
    alt2: "Support",
    },
    {
    title: "24/7 Support",
    text: "Is there something you don't <br> understand? Feel free to call us.<br> Phone number in the footer",
    image1: "asset/Ellipse.svg",
    image2: "asset/nice.svg",
    alt1: "Ellipse",
    alt2: "Nice",
    },
    {
    title: "We are nice",
    text: "Fantasy is over, there wiil be something<br> really convincing here",
    image1: "asset/Ellipse.svg",
    image2: "asset/nice.svg",
    alt1: "Ellipse",
    alt2: "Nice",
    }
];

const renderSections = sections => {
    const container = document.getElementById('sectionContainer');
    sections.forEach(section => {
    const sectionHTML = `
        <div class="section-content">
            <h1>${section.title}</h1>
            <p>${section.text}</p>
        <div class="container1">
            <img src="${section.image1}" class="Ellipse" alt="${section.alt1}">
            <img src="${section.image2}" class="Support2" alt="${section.alt2}">
        </div>
        </div>
    `;
    container.innerHTML += sectionHTML;
    });
};

//document.addEventListener('DOMContentLoaded', () => renderSections(sections));//
renderSections(sections);

const specialOffers = [
    {
        roomImage: "asset/room1.svg",
        roomAlt: "Room 1",
        ratingImage: "asset/rating.svg",
        favoriteImage: "asset/favorite.svg",
        roomName: "Wilderness Club at Big Ceddar",
        dateRange: "28 october - 1 november",
        price: "$2016",
        nights: "6 nights",
    },
    {
        roomImage: "asset/room2.svg",
        roomAlt: "Room 2",
        ratingImage: "asset/rating.svg",
        favoriteImage: "asset/favorite.svg",
        roomName: "Wilderness Club at Big Ceddar",
        dateRange: "28 october - 1 november",
        price: "$2016",
        nights: "6 nights",
    },
    {
        roomImage: "asset/room3.svg",
        roomAlt: "Room 3",
        ratingImage: "asset/rating.svg",
        favoriteImage: "asset/favorite.svg",
        roomName: "Wilderness Club at Big Ceddar",
        dateRange: "28 october - 1 november",
        price: "$2016",
        nights: "6 nights",
    }
];

const renderSpecialOffers = offers => {
    const container = document.getElementById('specialContainer');
    offers.forEach(offer => {
        const offerHTML = `
            <div class="card">
                <div class="room1">
                    <img src="${offer.roomImage}" alt="${offer.roomAlt}">
                </div>
                <div class="rate">
                    <img src="${offer.ratingImage}" class="vote" alt="Rating">
                    <img src="${offer.favoriteImage}" class="heart" alt="Favorite">
                </div>
                <div class="room-details">
                    <h3>${offer.roomName}</h3>
                    <h4>${offer.dateRange}</h4>
                    <h5><span>${offer.price}</span> / ${offer.nights}</h5>
                </div>
            </div>
        `;
        container.innerHTML += offerHTML;
    });
};


renderSpecialOffers(specialOffers);

const reviews = [
    {
        image: "asset/reviewer1.svg",
        altText: "Reviewer 1",
        reviewText: "I quickly found the right tour for me, but I had a few questions about the hotel. I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        reviewer: "Jonnike Borg",
        profession: "Publisher"
    },
    {
        image: "asset/reviewer2.svg",
        altText: "Reviewer 2",
        reviewText: "I quickly found the right tour for me, but I had a few questions about the hotel. I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        reviewer: "lebron durant",
        profession: "Flight Attendant"
    },
    {
        image: "asset/reviewer3.svg",
        altText: "Reviewer 3",
        reviewText: "I quickly found the right tour for me, but I had a few questions about the hotel. I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        reviewer: "kaarel piho",
        profession: "Chiropodist" 
    }
];

const renderReviews = reviews => {
const container = document.getElementById('reviewContainer');

container.innerHTML = `<h1>Reviews</h1>`;

reviews.forEach(review => {
const reviewHTML = `
    <div class="container2">
        <img src="${review.image}" alt="${review.alt}">
    </div>
    <div class="description">
        <p>${review.reviewText}</p>
    </div>
    <div class="jane"><span>${review.reviewer}</span>, ${review.profession}</div>
    `;
container.innerHTML += reviewHTML;
});

container.innerHTML += `
        <div>
            <img src="asset/btn.svg" class="click" alt="click">
        </div>
    `;
}

renderReviews(reviews);

const posts = [
    {  imgSrc: "asset/post 1.svg",
        date: "May 23, 2022",
        time: "5 minutes",
        title: "My trip to Athens",
        description: "It would seem that in a city where Theseus, Plato, and Epicurus once walked, the very idea of the subway is alien to the city, but already..."
    },
    {
        imgSrc: "asset/post 2.svg",
        date: "May 22, 2022",
        time: "1 minute",
        title: "Vilnius resorts",
        description: "I haven't seen any resort in Vilnius, but there are wonderful people and pubs."
    },
    {
        imgSrc: "asset/post 3.svg",
        date: "May 20, 2022",
        time: "15 minutes",
        title: "Tips for flying on a plane",
        description: "If you have the fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while they steer the plane for you."
    }
];

const renderPosts = (posts) => {
    const recentContainer = document.getElementById('recentContainer');
    posts.forEach(post => {
        
        const postHTML = `
            <div class="recent">
                <img src="${post.imgSrc}" class="pic-recent" alt="Recent Image">
                <div class="conn">
                    <div class="top-content">
                        <h4 class="date">${post.date}</h4>
                        <div class="right-content">
                            <div class="clock">
                                <div class="vector-container">
                                    <img src="asset/clock.svg"  alt="Clock Icon">
                                </div>
                                <h4 class="time">${post.time}</></h4>
                            </div>
                        </div>
                    </div>
                    <div class="trip">
                        <h1>${post.title}</h1>
                    </div>
                    <div class="city">
                        <p>${post.description}</p>
                    </div>
                </div>
            </div>
        `;
        
        recentContainer.innerHTML += postHTML;
    });
};


renderPosts(posts);