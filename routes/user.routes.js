const express = require("express")
const router = express.Router()
const axios = require("axios")
//axios necesario?

const eventsList = {

    _links: {
        self: {
            href: "/discovery/v2/suggest.json"
        }
    },
    _embedded: {
        venues: [
            {
                name: "Madison Square Garden",
                type: "venue",
                id: "KovZpZA7AAEA",
                url: "https://www.ticketmaster.com/madison-square-garden-tickets-new-york/venue/483329",
                locale: "en-us",
                aliases: [
                    "msg",
                    "madison square garden"
                ],
                images: [
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dbimages/15646v.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    }
                ],
                timezone: "America/New_York",
                city: {
                    name: "New York"
                },
                state: {
                    name: "New York",
                    stateCode: "NY"
                },
                country: {
                    name: "United States Of America",
                    countryCode: "US"
                },
                address: {},
                location: {
                    longitude: "-73.9916006",
                    latitude: "40.7497062"
                },
                upcomingEvents: {
                    _total: 163,
                    tmr: 1,
                    veeps: 1,
                    ticketmaster: 161,
                    _filtered: 0
                },
                _links: {
                    self: {
                        href: "/discovery/v2/venues/KovZpZA7AAEA?locale=en-us"
                    }
                }
            },
            {
                name: "Kia Forum",
                type: "venue",
                id: "KovZpZAEkn6A",
                url: "https://www.ticketmaster.com/kia-forum-tickets-inglewood/venue/73750",
                locale: "en-us",
                aliases: [
                    "the forum",
                    "forum"
                ],
                images: [
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dbimages/22354v.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    }
                ],
                timezone: "America/Los_Angeles",
                city: {
                    name: "Inglewood"
                },
                state: {
                    name: "California",
                    stateCode: "CA"
                },
                country: {
                    name: "United States Of America",
                    countryCode: "US"
                },
                address: {},
                location: {
                    longitude: "-118.341868",
                    latitude: "33.9583"
                },
                upcomingEvents: {
                    _total: 60,
                    ticketmaster: 60,
                    _filtered: 0
                },
                _links: {
                    self: {
                        href: "/discovery/v2/venues/KovZpZAEkn6A?locale=en-us"
                    }
                }
            },
            {
                name: "Augusta National Golf Course",
                type: "venue",
                id: "KovZpZAFnlEA",
                url: "https://www.ticketmaster.com/augusta-national-golf-course-tickets-augusta/venue/115592",
                locale: "en-us",
                timezone: "America/New_York",
                city: {
                    name: "Augusta"
                },
                state: {
                    name: "Georgia",
                    stateCode: "GA"
                },
                country: {
                    name: "United States Of America",
                    countryCode: "US"
                },
                address: {},
                location: {
                    longitude: "-82.0187325",
                    latitude: "33.5062091"
                },
                upcomingEvents: {
                    _total: 9,
                    tmr: 9,
                    _filtered: 0
                },
                _links: {
                    self: {
                        href: "/discovery/v2/venues/KovZpZAFnlEA?locale=en-us"
                    }
                }
            },
            {
                name: "SoFi Stadium",
                type: "venue",
                id: "KovZ917ACh0",
                url: "https://www.ticketmaster.com/sofi-stadium-tickets-inglewood/venue/82789",
                locale: "en-us",
                images: [
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dbimages/21790v.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    }
                ],
                timezone: "America/Los_Angeles",
                city: {
                    name: "Inglewood"
                },
                state: {
                    name: "California",
                    stateCode: "CA"
                },
                country: {
                    name: "United States Of America",
                    countryCode: "US"
                },
                address: {},
                location: {
                    longitude: "-118.343767",
                    latitude: "33.950529"
                },
                upcomingEvents: {
                    _total: 26,
                    tmr: 1,
                    ticketmaster: 25,
                    _filtered: 0
                },
                _links: {
                    self: {
                        href: "/discovery/v2/venues/KovZ917ACh0?locale=en-us"
                    }
                }
            },
            {
                name: "United Center",
                type: "venue",
                id: "KovZpa2M7e",
                url: "https://www.ticketmaster.com/united-center-tickets-chicago/venue/32882",
                locale: "en-us",
                images: [
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dbimages/21833v.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    }
                ],
                timezone: "America/Chicago",
                city: {
                    name: "Chicago"
                },
                state: {
                    name: "Illinois",
                    stateCode: "IL"
                },
                country: {
                    name: "United States Of America",
                    countryCode: "US"
                },
                address: {},
                location: {
                    longitude: "-87.67427375",
                    latitude: "41.88124412"
                },
                upcomingEvents: {
                    _total: 102,
                    tmr: 5,
                    ticketmaster: 97,
                    _filtered: 0
                },
                _links: {
                    self: {
                        href: "/discovery/v2/venues/KovZpa2M7e?locale=en-us"
                    }
                }
            }
        ],
        attractions: [
            {
                name: "Trevor Noah",
                type: "attraction",
                id: "K8vZ9172yh7",
                url: "https://www.ticketmaster.com/trevor-noah-tickets/artist/1741923",
                locale: "en-us",
                externalLinks: {
                    musicbrainz: [
                        {
                            id: "c27296f1-857c-4555-9e81-2c6f1cb1baf4"
                        }
                    ]
                },
                images: [
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/369/42e3c665-8395-482b-9c35-185b65af7369_1839731_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/369/42e3c665-8395-482b-9c35-185b65af7369_1839731_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/369/42e3c665-8395-482b-9c35-185b65af7369_1839731_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/369/42e3c665-8395-482b-9c35-185b65af7369_1839731_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/369/42e3c665-8395-482b-9c35-185b65af7369_1839731_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/369/42e3c665-8395-482b-9c35-185b65af7369_1839731_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/369/42e3c665-8395-482b-9c35-185b65af7369_1839731_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/369/42e3c665-8395-482b-9c35-185b65af7369_SOURCE",
                        width: 2426,
                        height: 1365,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/369/42e3c665-8395-482b-9c35-185b65af7369_1839731_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/369/42e3c665-8395-482b-9c35-185b65af7369_1839731_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/369/42e3c665-8395-482b-9c35-185b65af7369_1839731_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    }
                ],
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7na",
                            name: "Arts & Theatre"
                        },
                        genre: {
                            id: "KnvZfZ7vAe1",
                            name: "Comedy"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vF17",
                            name: "Comedy"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7nI",
                            name: "Undefined"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7v7lJ",
                            name: "Undefined"
                        },
                        family: false
                    }
                ],
                upcomingEvents: {
                    _total: 78,
                    tmr: 11,
                    ticketmaster: 67,
                    _filtered: 0
                },
                _links: {
                    self: {
                        href: "/discovery/v2/attractions/K8vZ9172yh7?locale=en-us"
                    }
                }
            },
            {
                name: "PBR: Professional Bull Riders",
                type: "attraction",
                id: "K8vZ9171l00",
                url: "https://www.ticketmaster.com/pbr-professional-bull-riders-tickets/artist/821993",
                locale: "en-us",
                aliases: [
                    "professional bull riders",
                    "pro bull rider",
                    "pro bulls rider",
                    "professional bul riders",
                    "professional bull ride",
                    "professional bull riding",
                    "proffessional",
                    "pbr",
                    "pro bull riding"
                ],
                images: [
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/f4a/af305e82-5c92-4ea2-a6b7-bceff6ccbf4a_668551_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/f4a/af305e82-5c92-4ea2-a6b7-bceff6ccbf4a_668551_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/f4a/af305e82-5c92-4ea2-a6b7-bceff6ccbf4a_668551_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/f4a/af305e82-5c92-4ea2-a6b7-bceff6ccbf4a_668551_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/f4a/af305e82-5c92-4ea2-a6b7-bceff6ccbf4a_668551_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/f4a/af305e82-5c92-4ea2-a6b7-bceff6ccbf4a_668551_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/f4a/af305e82-5c92-4ea2-a6b7-bceff6ccbf4a_668551_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/f4a/af305e82-5c92-4ea2-a6b7-bceff6ccbf4a_668551_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/f4a/af305e82-5c92-4ea2-a6b7-bceff6ccbf4a_668551_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/f4a/af305e82-5c92-4ea2-a6b7-bceff6ccbf4a_668551_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    }
                ],
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nE",
                            name: "Sports"
                        },
                        genre: {
                            id: "KnvZfZ7vAea",
                            name: "Rodeo"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vFtk",
                            name: "Bullriding"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7nI",
                            name: "Undefined"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7v7lJ",
                            name: "Undefined"
                        },
                        family: false
                    }
                ],
                upcomingEvents: {
                    _total: 94,
                    tmr: 15,
                    ticketmaster: 79,
                    _filtered: 0
                },
                _links: {
                    self: {
                        href: "/discovery/v2/attractions/K8vZ9171l00?locale=en-us"
                    }
                }
            },
            {
                name: "Osees",
                type: "attraction",
                id: "K8vZ917Gt8f",
                url: "https://www.ticketmaster.com/osees-tickets/artist/1294937",
                locale: "en-us",
                externalLinks: {
                    itunes: [
                        {
                            url: "https://music.apple.com/us/artist/thee-oh-sees/275013806"
                        }
                    ],
                    lastfm: [
                        {
                            url: "http://www.last.fm/music/Thee%20Oh%20Sees"
                        }
                    ],
                    facebook: [
                        {
                            url: "https://www.facebook.com/TheeOhSees"
                        }
                    ],
                    wiki: [
                        {
                            url: "https://en.wikipedia.org/wiki/Thee_Oh_Sees"
                        }
                    ],
                    spotify: [
                        {
                            url: "https://open.spotify.com/artist/3qYfqdVwX0fil71onLpLkh?autoplay=true"
                        }
                    ],
                    musicbrainz: [
                        {
                            id: "194272cc-dcc8-4640-a4a6-66da7d250d5c"
                        }
                    ],
                    homepage: [
                        {
                            url: "http://www.theeohsees.com/"
                        }
                    ]
                },
                images: [
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/437/b9e91a1d-a2d7-4517-b1e0-d6b64b54e437_1422141_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/437/b9e91a1d-a2d7-4517-b1e0-d6b64b54e437_1422141_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/437/b9e91a1d-a2d7-4517-b1e0-d6b64b54e437_1422141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/437/b9e91a1d-a2d7-4517-b1e0-d6b64b54e437_1422141_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/437/b9e91a1d-a2d7-4517-b1e0-d6b64b54e437_1422141_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/437/b9e91a1d-a2d7-4517-b1e0-d6b64b54e437_1422141_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/437/b9e91a1d-a2d7-4517-b1e0-d6b64b54e437_1422141_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/437/b9e91a1d-a2d7-4517-b1e0-d6b64b54e437_1422141_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/437/b9e91a1d-a2d7-4517-b1e0-d6b64b54e437_1422141_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/437/b9e91a1d-a2d7-4517-b1e0-d6b64b54e437_1422141_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    }
                ],
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nJ",
                            name: "Music"
                        },
                        genre: {
                            id: "KnvZfZ7vAeA",
                            name: "Rock"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7v6F1",
                            name: "Pop"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7nI",
                            name: "Undefined"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7v7lJ",
                            name: "Undefined"
                        },
                        family: false
                    }
                ],
                upcomingEvents: {
                    _total: 8,
                    tmr: 1,
                    ticketmaster: 7,
                    _filtered: 0
                },
                _links: {
                    self: {
                        href: "/discovery/v2/attractions/K8vZ917Gt8f?locale=en-us"
                    }
                }
            },
            {
                name: "Niko Moon",
                type: "attraction",
                id: "K8vZ917bKif",
                url: "https://www.ticketmaster.com/niko-moon-tickets/artist/2669154",
                locale: "en-us",
                externalLinks: {
                    youtube: [
                        {
                            url: "https://www.youtube.com/channel/UCkvuzYWjJF5XDA9P_PMPV6Q"
                        }
                    ],
                    twitter: [
                        {
                            url: "https://twitter.com/nikomoon"
                        }
                    ],
                    itunes: [
                        {
                            url: "https://music.apple.com/us/artist/niko-moon/901457932"
                        }
                    ],
                    facebook: [
                        {
                            url: "https://www.facebook.com/nikomoonmusic/"
                        }
                    ],
                    spotify: [
                        {
                            url: "https://open.spotify.com/artist/6Rw7DRa1dzChBvxGPCpOxU"
                        }
                    ],
                    instagram: [
                        {
                            url: "https://www.instagram.com/nikomoon/"
                        }
                    ],
                    homepage: [
                        {
                            url: "https://www.nikomoon.com/"
                        }
                    ]
                },
                images: [
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/741/f8daa514-f7cc-4813-be92-8c47f7240741_1833341_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/741/f8daa514-f7cc-4813-be92-8c47f7240741_1833341_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/741/f8daa514-f7cc-4813-be92-8c47f7240741_1833341_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/741/f8daa514-f7cc-4813-be92-8c47f7240741_1833341_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/741/f8daa514-f7cc-4813-be92-8c47f7240741_1833341_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/741/f8daa514-f7cc-4813-be92-8c47f7240741_1833341_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/741/f8daa514-f7cc-4813-be92-8c47f7240741_1833341_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/741/f8daa514-f7cc-4813-be92-8c47f7240741_1833341_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/741/f8daa514-f7cc-4813-be92-8c47f7240741_1833341_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/741/f8daa514-f7cc-4813-be92-8c47f7240741_1833341_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    }
                ],
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nJ",
                            name: "Music"
                        },
                        genre: {
                            id: "KnvZfZ7vAv6",
                            name: "Country"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vAFa",
                            name: "Country"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7la",
                            name: "Individual"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7vAd7",
                            name: "Musician"
                        },
                        family: false
                    }
                ],
                upcomingEvents: {
                    _total: 28,
                    tmr: 10,
                    ticketweb: 3,
                    ticketmaster: 15,
                    _filtered: 0
                },
                _links: {
                    self: {
                        href: "/discovery/v2/attractions/K8vZ917bKif?locale=en-us"
                    }
                }
            },
            {
                name: "The Winery Dogs",
                type: "attraction",
                id: "K8vZ917o3HV",
                url: "https://www.ticketmaster.com/the-winery-dogs-tickets/artist/1874739",
                locale: "en-us",
                externalLinks: {
                    youtube: [
                        {
                            url: "https://www.youtube.com/user/thewinerydogs"
                        }
                    ],
                    twitter: [
                        {
                            url: "https://twitter.com/thewinerydogs"
                        }
                    ],
                    facebook: [
                        {
                            url: "https://www.facebook.com/TheWineryDogs"
                        }
                    ],
                    wiki: [
                        {
                            url: "https://en.wikipedia.org/wiki/The_Winery_Dogs"
                        }
                    ],
                    musicbrainz: [
                        {
                            id: "cd59e6bf-9720-4c9e-bac8-bf77db63824c"
                        }
                    ],
                    homepage: [
                        {
                            url: "http://www.thewinerydogs.com/"
                        }
                    ]
                },
                images: [
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dbimages/156370a.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: true
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: true
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/6e5/d67cfad8-3437-45ee-8122-e816798f56e5_67171_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/6e5/d67cfad8-3437-45ee-8122-e816798f56e5_67171_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dbimages/156372a.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: true
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/6e5/d67cfad8-3437-45ee-8122-e816798f56e5_67171_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: true
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: true
                    }
                ],
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nJ",
                            name: "Music"
                        },
                        genre: {
                            id: "KnvZfZ7vAeA",
                            name: "Rock"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7v6F1",
                            name: "Pop"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7nI",
                            name: "Undefined"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7v7lJ",
                            name: "Undefined"
                        },
                        family: false
                    }
                ],
                upcomingEvents: {
                    _total: 10,
                    tmr: 2,
                    ticketweb: 4,
                    ticketmaster: 4,
                    _filtered: 0
                },
                _links: {
                    self: {
                        href: "/discovery/v2/attractions/K8vZ917o3HV?locale=en-us"
                    }
                }
            }
        ],
        events: [
            {
                name: "Phoenix Suns vs. Utah Jazz",
                type: "event",
                id: "G5v0Z98m2no4F",
                url: "https://www.ticketmaster.com/phoenix-suns-vs-utah-jazz-phoenix-arizona-11-26-2022/event/19005D0B8FA91548",
                locale: "en-us",
                images: [
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    }
                ],
                dates: {
                    start: {
                        localDate: "2022-11-26",
                        localTime: "19:00:00",
                        dateTime: "2022-11-27T02:00:00Z",
                        dateTBD: false,
                        dateTBA: false,
                        timeTBA: false,
                        noSpecificTime: false
                    },
                    timezone: "America/Phoenix",
                    status: {
                        code: "onsale"
                    },
                    spanMultipleDays: false
                },
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nE",
                            name: "Sports"
                        },
                        genre: {
                            id: "KnvZfZ7vAde",
                            name: "Basketball"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vFJA",
                            name: "NBA"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7l1",
                            name: "Group"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7vA7d",
                            name: "Team"
                        },
                        family: false
                    }
                ],
                location: {
                    longitude: "-112.071313",
                    latitude: "33.445899"
                },
                _links: {
                    self: {
                        href: "/discovery/v2/events/G5v0Z98m2no4F?locale=en-us"
                    },
                    attractions: [
                        {
                            href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        },
                        {
                            href: "/discovery/v2/attractions/K8vZ9171o5V?locale=en-us"
                        }
                    ],
                    venues: [
                        {
                            href: "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                        }
                    ]
                },
                _embedded: {
                    venues: [
                        {
                            name: "Footprint Center",
                            type: "venue",
                            id: "KovZpZAE617A",
                            url: "https://www.ticketmaster.com/footprint-center-tickets-phoenix/venue/205079",
                            locale: "en-us",
                            images: [
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dbimages/22218v.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                }
                            ],
                            timezone: "America/Phoenix",
                            city: {
                                name: "Phoenix"
                            },
                            state: {
                                name: "Arizona",
                                stateCode: "AZ"
                            },
                            country: {
                                name: "United States Of America",
                                countryCode: "US"
                            },
                            address: {},
                            location: {
                                longitude: "-112.071313",
                                latitude: "33.445899"
                            },
                            parkingDetail: "Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of Footprint Center. Prices vary by event. Parking and Direction hotline (602)514-8472",
                            accessibleSeatingDetail: "PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7867 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call Footprint Center at (602)379-7800 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call Footprint Center at (602)252-9622 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7800 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.",
                            upcomingEvents: {
                                _total: 55,
                                ticketmaster: 55,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                                }
                            }
                        }
                    ],
                    attractions: [
                        {
                            name: "Phoenix Suns",
                            type: "attraction",
                            id: "K8vZ9171oZf",
                            url: "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/Suns"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/suns/"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/suns/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            aliases: [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 65,
                                tmr: 7,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        },
                        {
                            name: "Utah Jazz",
                            type: "attraction",
                            id: "K8vZ9171o5V",
                            url: "https://www.ticketmaster.com/utah-jazz-tickets/artist/806035",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/utahjazz"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Utah_Jazz"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/utahjazz"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/utahjazz/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/jazz/"
                                    }
                                ]
                            },
                            images: [
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 63,
                                tmr: 4,
                                ticketmaster: 59,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171o5V?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                name: "Memphis Grizzlies vs. Phoenix Suns",
                type: "event",
                id: "G5viZ983ugpCP",
                url: "https://www.ticketmaster.com/memphis-grizzlies-vs-phoenix-suns-memphis-tennessee-12-27-2022/event/1B005D048DD563A5",
                locale: "en-us",
                images: [
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    }
                ],
                dates: {
                    start: {
                        localDate: "2022-12-27",
                        localTime: "19:00:00",
                        dateTime: "2022-12-28T01:00:00Z",
                        dateTBD: false,
                        dateTBA: false,
                        timeTBA: false,
                        noSpecificTime: false
                    },
                    timezone: "America/Chicago",
                    status: {
                        code: "onsale"
                    },
                    spanMultipleDays: false
                },
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nE",
                            name: "Sports"
                        },
                        genre: {
                            id: "KnvZfZ7vAde",
                            name: "Basketball"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vFJA",
                            name: "NBA"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7l1",
                            name: "Group"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7vA7d",
                            name: "Team"
                        },
                        family: false
                    }
                ],
                location: {
                    longitude: "-90.0514933",
                    latitude: "35.1394709"
                },
                _links: {
                    self: {
                        href: "/discovery/v2/events/G5viZ983ugpCP?locale=en-us"
                    },
                    attractions: [
                        {
                            href: "/discovery/v2/attractions/K8vZ9171Kg7?locale=en-us"
                        },
                        {
                            href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        }
                    ],
                    venues: [
                        {
                            href: "/discovery/v2/venues/KovZpZAE6vlA?locale=en-us"
                        }
                    ]
                },
                _embedded: {
                    venues: [
                        {
                            name: "FedExForum",
                            type: "venue",
                            id: "KovZpZAE6vlA",
                            url: "https://www.ticketmaster.com/fedexforum-tickets-memphis/venue/222094",
                            locale: "en-us",
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dbimages/12624v.gif",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                }
                            ],
                            timezone: "America/Chicago",
                            city: {
                                name: "Memphis"
                            },
                            state: {
                                name: "Tennessee",
                                stateCode: "TN"
                            },
                            country: {
                                name: "United States Of America",
                                countryCode: "US"
                            },
                            address: {},
                            location: {
                                longitude: "-90.0514933",
                                latitude: "35.1394709"
                            },
                            parkingDetail: "Parking is available onsite or at the other garages and lots in the surrounding area.",
                            accessibleSeatingDetail: "This is an accessible venue.",
                            upcomingEvents: {
                                _total: 43,
                                ticketmaster: 43,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/venues/KovZpZAE6vlA?locale=en-us"
                                }
                            }
                        }
                    ],
                    attractions: [
                        {
                            name: "Memphis Grizzlies",
                            type: "attraction",
                            id: "K8vZ9171Kg7",
                            url: "https://www.ticketmaster.com/memphis-grizzlies-tickets/artist/806038",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/memgrizz"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Memphis_Grizzlies"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/MemphisGrizzlies"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://instagram.com/memgrizz"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/grizzlies/"
                                    }
                                ]
                            },
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 64,
                                tmr: 6,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171Kg7?locale=en-us"
                                }
                            }
                        },
                        {
                            name: "Phoenix Suns",
                            type: "attraction",
                            id: "K8vZ9171oZf",
                            url: "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/Suns"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/suns/"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/suns/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            aliases: [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 65,
                                tmr: 7,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                name: "Golden State Warriors vs. Phoenix Suns",
                type: "event",
                id: "G5vYZ98wrHxhM",
                url: "https://www.ticketmaster.com/golden-state-warriors-vs-phoenix-suns-san-francisco-california-01-10-2023/event/1C005D0C9EF226F7",
                locale: "en-us",
                images: [
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    }
                ],
                dates: {
                    start: {
                        localDate: "2023-01-10",
                        localTime: "19:00:00",
                        dateTime: "2023-01-11T03:00:00Z",
                        dateTBD: false,
                        dateTBA: false,
                        timeTBA: false,
                        noSpecificTime: false
                    },
                    timezone: "America/Los_Angeles",
                    status: {
                        code: "onsale"
                    },
                    spanMultipleDays: false
                },
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nE",
                            name: "Sports"
                        },
                        genre: {
                            id: "KnvZfZ7vAde",
                            name: "Basketball"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vFJA",
                            name: "NBA"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7l1",
                            name: "Group"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7vA7d",
                            name: "Team"
                        },
                        family: false
                    }
                ],
                location: {
                    longitude: "-122.387464",
                    latitude: "37.76797"
                },
                _links: {
                    self: {
                        href: "/discovery/v2/events/G5vYZ98wrHxhM?locale=en-us"
                    },
                    attractions: [
                        {
                            href: "/discovery/v2/attractions/K8vZ9171oa0?locale=en-us"
                        },
                        {
                            href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        }
                    ],
                    venues: [
                        {
                            href: "/discovery/v2/venues/KovZ917Ah1H?locale=en-us"
                        }
                    ]
                },
                _embedded: {
                    venues: [
                        {
                            name: "Chase Center",
                            type: "venue",
                            id: "KovZ917Ah1H",
                            url: "https://www.ticketmaster.com/chase-center-tickets-san-francisco/venue/230012",
                            locale: "en-us",
                            images: [
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dbimages/21707v.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                }
                            ],
                            timezone: "America/Los_Angeles",
                            city: {
                                name: "San Francisco"
                            },
                            state: {
                                name: "California",
                                stateCode: "CA"
                            },
                            country: {
                                name: "United States Of America",
                                countryCode: "US"
                            },
                            address: {},
                            location: {
                                longitude: "-122.387464",
                                latitude: "37.76797"
                            },
                            accessibleSeatingDetail: "Accessible seating is available online through Ticketmaster.com, by calling Ticketmaster phone agents or coming to the Chase Center Box Office. Interpreters are available by request and are dependent upon availability. Please call the Chase Center for further information. Interpreters need to be reserved a minimum of 10 days in advance of the show. Service dogs are allowed at the Chase Center.",
                            upcomingEvents: {
                                _total: 76,
                                ticketmaster: 76,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/venues/KovZ917Ah1H?locale=en-us"
                                }
                            }
                        }
                    ],
                    attractions: [
                        {
                            name: "Golden State Warriors",
                            type: "attraction",
                            id: "K8vZ9171oa0",
                            url: "https://www.ticketmaster.com/golden-state-warriors-tickets/artist/805946",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/warriors"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Golden_State_Warriors"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/warriors"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/warriors"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/warriors/"
                                    }
                                ]
                            },
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 64,
                                tmr: 7,
                                ticketmaster: 57,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171oa0?locale=en-us"
                                }
                            }
                        },
                        {
                            name: "Phoenix Suns",
                            type: "attraction",
                            id: "K8vZ9171oZf",
                            url: "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/Suns"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/suns/"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/suns/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            aliases: [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 65,
                                tmr: 7,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                name: "Phoenix Suns vs. Memphis Grizzlies",
                type: "event",
                id: "G5v0Z98m2Ro4N",
                url: "https://www.ticketmaster.com/phoenix-suns-vs-memphis-grizzlies-phoenix-arizona-12-23-2022/event/19005D0B8FBD1563",
                locale: "en-us",
                images: [
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    }
                ],
                dates: {
                    start: {
                        localDate: "2022-12-23",
                        localTime: "20:00:00",
                        dateTime: "2022-12-24T03:00:00Z",
                        dateTBD: false,
                        dateTBA: false,
                        timeTBA: false,
                        noSpecificTime: false
                    },
                    timezone: "America/Phoenix",
                    status: {
                        code: "onsale"
                    },
                    spanMultipleDays: false
                },
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nE",
                            name: "Sports"
                        },
                        genre: {
                            id: "KnvZfZ7vAde",
                            name: "Basketball"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vFJA",
                            name: "NBA"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7l1",
                            name: "Group"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7vA7d",
                            name: "Team"
                        },
                        family: false
                    }
                ],
                location: {
                    longitude: "-112.071313",
                    latitude: "33.445899"
                },
                _links: {
                    self: {
                        href: "/discovery/v2/events/G5v0Z98m2Ro4N?locale=en-us"
                    },
                    attractions: [
                        {
                            href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        },
                        {
                            href: "/discovery/v2/attractions/K8vZ9171Kg7?locale=en-us"
                        }
                    ],
                    venues: [
                        {
                            href: "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                        }
                    ]
                },
                _embedded: {
                    venues: [
                        {
                            name: "Footprint Center",
                            type: "venue",
                            id: "KovZpZAE617A",
                            url: "https://www.ticketmaster.com/footprint-center-tickets-phoenix/venue/205079",
                            locale: "en-us",
                            images: [
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dbimages/22218v.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                }
                            ],
                            timezone: "America/Phoenix",
                            city: {
                                name: "Phoenix"
                            },
                            state: {
                                name: "Arizona",
                                stateCode: "AZ"
                            },
                            country: {
                                name: "United States Of America",
                                countryCode: "US"
                            },
                            address: {},
                            location: {
                                longitude: "-112.071313",
                                latitude: "33.445899"
                            },
                            parkingDetail: "Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of Footprint Center. Prices vary by event. Parking and Direction hotline (602)514-8472",
                            accessibleSeatingDetail: "PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7867 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call Footprint Center at (602)379-7800 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call Footprint Center at (602)252-9622 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7800 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.",
                            upcomingEvents: {
                                _total: 55,
                                ticketmaster: 55,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                                }
                            }
                        }
                    ],
                    attractions: [
                        {
                            name: "Phoenix Suns",
                            type: "attraction",
                            id: "K8vZ9171oZf",
                            url: "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/Suns"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/suns/"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/suns/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            aliases: [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 65,
                                tmr: 7,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        },
                        {
                            name: "Memphis Grizzlies",
                            type: "attraction",
                            id: "K8vZ9171Kg7",
                            url: "https://www.ticketmaster.com/memphis-grizzlies-tickets/artist/806038",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/memgrizz"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Memphis_Grizzlies"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/MemphisGrizzlies"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://instagram.com/memgrizz"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/grizzlies/"
                                    }
                                ]
                            },
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 64,
                                tmr: 6,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171Kg7?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                name: "Sacramento Kings vs. Phoenix Suns",
                type: "event",
                id: "G5vYZ98Kigakg",
                url: "https://www.ticketmaster.com/sacramento-kings-vs-phoenix-suns-sacramento-california-11-28-2022/event/1C005D04ECD491B5",
                locale: "en-us",
                images: [
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    }
                ],
                dates: {
                    start: {
                        localDate: "2022-11-28",
                        localTime: "19:00:00",
                        dateTime: "2022-11-29T03:00:00Z",
                        dateTBD: false,
                        dateTBA: false,
                        timeTBA: false,
                        noSpecificTime: false
                    },
                    timezone: "America/Los_Angeles",
                    status: {
                        code: "onsale"
                    },
                    spanMultipleDays: false
                },
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nE",
                            name: "Sports"
                        },
                        genre: {
                            id: "KnvZfZ7vAde",
                            name: "Basketball"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vFJA",
                            name: "NBA"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7l1",
                            name: "Group"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7vA7d",
                            name: "Team"
                        },
                        family: false
                    }
                ],
                location: {
                    longitude: "-121.500231",
                    latitude: "38.580372"
                },
                _links: {
                    self: {
                        href: "/discovery/v2/events/G5vYZ98Kigakg?locale=en-us"
                    },
                    attractions: [
                        {
                            href: "/discovery/v2/attractions/K8vZ9171o50?locale=en-us"
                        },
                        {
                            href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        }
                    ],
                    venues: [
                        {
                            href: "/discovery/v2/venues/KovZpZAEF76A?locale=en-us"
                        }
                    ]
                },
                _embedded: {
                    venues: [
                        {
                            name: "Golden 1 Center",
                            type: "venue",
                            id: "KovZpZAEF76A",
                            url: "https://www.ticketmaster.com/golden-1-center-tickets-sacramento/venue/229976",
                            locale: "en-us",
                            images: [
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dbimages/18013v.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                }
                            ],
                            timezone: "America/Los_Angeles",
                            city: {
                                name: "Sacramento"
                            },
                            state: {
                                name: "California",
                                stateCode: "CA"
                            },
                            country: {
                                name: "United States Of America",
                                countryCode: "US"
                            },
                            address: {},
                            location: {
                                longitude: "-121.500231",
                                latitude: "38.580372"
                            },
                            parkingDetail: "Parking available in downtown parking lots and surface street parking. Please visit https://reserve.sacpark.org/ for additional information.",
                            accessibleSeatingDetail: "Accessible seating is available online through Ticketmaster.com, by calling Ticketmaster phone agents or coming to the Golden 1 Center Box Office. Interpreters are available by request and are dependent upon availability. Please e-mail ADAservices@kings.com for assistance with any ADA related questions. Interpreters need to be reserved a minimum of 10 days in advance of the show. Service dogs are allowed at the Golden 1 Center.",
                            upcomingEvents: {
                                _total: 73,
                                tmr: 1,
                                ticketmaster: 72,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/venues/KovZpZAEF76A?locale=en-us"
                                }
                            }
                        }
                    ],
                    attractions: [
                        {
                            name: "Sacramento Kings",
                            type: "attraction",
                            id: "K8vZ9171o50",
                            url: "https://www.ticketmaster.com/sacramento-kings-tickets/artist/806010",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/SacramentoKings"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Sacramento_Kings"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/sacramentokings/"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/sacramentokings/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/kings/"
                                    }
                                ]
                            },
                            images: [
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 66,
                                tmr: 10,
                                ticketmaster: 56,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171o50?locale=en-us"
                                }
                            }
                        },
                        {
                            name: "Phoenix Suns",
                            type: "attraction",
                            id: "K8vZ9171oZf",
                            url: "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/Suns"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/suns/"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/suns/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            aliases: [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 65,
                                tmr: 7,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            }
        ],
        products: [
            {
                name: "Phoenix Suns vs. Utah Jazz",
                type: "event",
                id: "G5v0Z98m2no4F",
                url: "https://www.ticketmaster.com/phoenix-suns-vs-utah-jazz-phoenix-arizona-11-26-2022/event/19005D0B8FA91548",
                locale: "en-us",
                images: [
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    }
                ],
                dates: {
                    start: {
                        localDate: "2022-11-26",
                        localTime: "19:00:00",
                        dateTime: "2022-11-27T02:00:00Z",
                        dateTBD: false,
                        dateTBA: false,
                        timeTBA: false,
                        noSpecificTime: false
                    },
                    timezone: "America/Phoenix",
                    status: {
                        code: "onsale"
                    },
                    spanMultipleDays: false
                },
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nE",
                            name: "Sports"
                        },
                        genre: {
                            id: "KnvZfZ7vAde",
                            name: "Basketball"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vFJA",
                            name: "NBA"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7l1",
                            name: "Group"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7vA7d",
                            name: "Team"
                        },
                        family: false
                    }
                ],
                location: {
                    longitude: "-112.071313",
                    latitude: "33.445899"
                },
                _links: {
                    self: {
                        href: "/discovery/v2/products/G5v0Z98m2no4F?locale=en-us"
                    },
                    attractions: [
                        {
                            href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        },
                        {
                            href: "/discovery/v2/attractions/K8vZ9171o5V?locale=en-us"
                        }
                    ],
                    venues: [
                        {
                            href: "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                        }
                    ]
                },
                _embedded: {
                    venues: [
                        {
                            name: "Footprint Center",
                            type: "venue",
                            id: "KovZpZAE617A",
                            url: "https://www.ticketmaster.com/footprint-center-tickets-phoenix/venue/205079",
                            locale: "en-us",
                            images: [
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dbimages/22218v.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                }
                            ],
                            timezone: "America/Phoenix",
                            city: {
                                name: "Phoenix"
                            },
                            state: {
                                name: "Arizona",
                                stateCode: "AZ"
                            },
                            country: {
                                name: "United States Of America",
                                countryCode: "US"
                            },
                            address: {},
                            location: {
                                longitude: "-112.071313",
                                latitude: "33.445899"
                            },
                            parkingDetail: "Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of Footprint Center. Prices vary by event. Parking and Direction hotline (602)514-8472",
                            accessibleSeatingDetail: "PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7867 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call Footprint Center at (602)379-7800 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call Footprint Center at (602)252-9622 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7800 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.",
                            upcomingEvents: {
                                _total: 55,
                                ticketmaster: 55,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                                }
                            }
                        }
                    ],
                    attractions: [
                        {
                            name: "Phoenix Suns",
                            type: "attraction",
                            id: "K8vZ9171oZf",
                            url: "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/Suns"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/suns/"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/suns/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            aliases: [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 65,
                                tmr: 7,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        },
                        {
                            name: "Utah Jazz",
                            type: "attraction",
                            id: "K8vZ9171o5V",
                            url: "https://www.ticketmaster.com/utah-jazz-tickets/artist/806035",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/utahjazz"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Utah_Jazz"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/utahjazz"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/utahjazz/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/jazz/"
                                    }
                                ]
                            },
                            images: [
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 63,
                                tmr: 4,
                                ticketmaster: 59,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171o5V?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                name: "Memphis Grizzlies vs. Phoenix Suns",
                type: "event",
                id: "G5viZ983ugpCP",
                url: "https://www.ticketmaster.com/memphis-grizzlies-vs-phoenix-suns-memphis-tennessee-12-27-2022/event/1B005D048DD563A5",
                locale: "en-us",
                images: [
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    }
                ],
                dates: {
                    start: {
                        localDate: "2022-12-27",
                        localTime: "19:00:00",
                        dateTime: "2022-12-28T01:00:00Z",
                        dateTBD: false,
                        dateTBA: false,
                        timeTBA: false,
                        noSpecificTime: false
                    },
                    timezone: "America/Chicago",
                    status: {
                        code: "onsale"
                    },
                    spanMultipleDays: false
                },
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nE",
                            name: "Sports"
                        },
                        genre: {
                            id: "KnvZfZ7vAde",
                            name: "Basketball"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vFJA",
                            name: "NBA"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7l1",
                            name: "Group"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7vA7d",
                            name: "Team"
                        },
                        family: false
                    }
                ],
                location: {
                    longitude: "-90.0514933",
                    latitude: "35.1394709"
                },
                _links: {
                    self: {
                        href: "/discovery/v2/products/G5viZ983ugpCP?locale=en-us"
                    },
                    attractions: [
                        {
                            href: "/discovery/v2/attractions/K8vZ9171Kg7?locale=en-us"
                        },
                        {
                            href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        }
                    ],
                    venues: [
                        {
                            href: "/discovery/v2/venues/KovZpZAE6vlA?locale=en-us"
                        }
                    ]
                },
                _embedded: {
                    venues: [
                        {
                            name: "FedExForum",
                            type: "venue",
                            id: "KovZpZAE6vlA",
                            url: "https://www.ticketmaster.com/fedexforum-tickets-memphis/venue/222094",
                            locale: "en-us",
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dbimages/12624v.gif",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                }
                            ],
                            timezone: "America/Chicago",
                            city: {
                                name: "Memphis"
                            },
                            state: {
                                name: "Tennessee",
                                stateCode: "TN"
                            },
                            country: {
                                name: "United States Of America",
                                countryCode: "US"
                            },
                            address: {},
                            location: {
                                longitude: "-90.0514933",
                                latitude: "35.1394709"
                            },
                            parkingDetail: "Parking is available onsite or at the other garages and lots in the surrounding area.",
                            accessibleSeatingDetail: "This is an accessible venue.",
                            upcomingEvents: {
                                _total: 43,
                                ticketmaster: 43,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/venues/KovZpZAE6vlA?locale=en-us"
                                }
                            }
                        }
                    ],
                    attractions: [
                        {
                            name: "Memphis Grizzlies",
                            type: "attraction",
                            id: "K8vZ9171Kg7",
                            url: "https://www.ticketmaster.com/memphis-grizzlies-tickets/artist/806038",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/memgrizz"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Memphis_Grizzlies"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/MemphisGrizzlies"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://instagram.com/memgrizz"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/grizzlies/"
                                    }
                                ]
                            },
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 64,
                                tmr: 6,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171Kg7?locale=en-us"
                                }
                            }
                        },
                        {
                            name: "Phoenix Suns",
                            type: "attraction",
                            id: "K8vZ9171oZf",
                            url: "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/Suns"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/suns/"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/suns/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            aliases: [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 65,
                                tmr: 7,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                name: "Golden State Warriors vs. Phoenix Suns",
                type: "event",
                id: "G5vYZ98wrHxhM",
                url: "https://www.ticketmaster.com/golden-state-warriors-vs-phoenix-suns-san-francisco-california-01-10-2023/event/1C005D0C9EF226F7",
                locale: "en-us",
                images: [
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    }
                ],
                dates: {
                    start: {
                        localDate: "2023-01-10",
                        localTime: "19:00:00",
                        dateTime: "2023-01-11T03:00:00Z",
                        dateTBD: false,
                        dateTBA: false,
                        timeTBA: false,
                        noSpecificTime: false
                    },
                    timezone: "America/Los_Angeles",
                    status: {
                        code: "onsale"
                    },
                    spanMultipleDays: false
                },
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nE",
                            name: "Sports"
                        },
                        genre: {
                            id: "KnvZfZ7vAde",
                            name: "Basketball"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vFJA",
                            name: "NBA"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7l1",
                            name: "Group"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7vA7d",
                            name: "Team"
                        },
                        family: false
                    }
                ],
                location: {
                    longitude: "-122.387464",
                    latitude: "37.76797"
                },
                _links: {
                    self: {
                        href: "/discovery/v2/products/G5vYZ98wrHxhM?locale=en-us"
                    },
                    attractions: [
                        {
                            href: "/discovery/v2/attractions/K8vZ9171oa0?locale=en-us"
                        },
                        {
                            href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        }
                    ],
                    venues: [
                        {
                            href: "/discovery/v2/venues/KovZ917Ah1H?locale=en-us"
                        }
                    ]
                },
                _embedded: {
                    venues: [
                        {
                            name: "Chase Center",
                            type: "venue",
                            id: "KovZ917Ah1H",
                            url: "https://www.ticketmaster.com/chase-center-tickets-san-francisco/venue/230012",
                            locale: "en-us",
                            images: [
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dbimages/21707v.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                }
                            ],
                            timezone: "America/Los_Angeles",
                            city: {
                                name: "San Francisco"
                            },
                            state: {
                                name: "California",
                                stateCode: "CA"
                            },
                            country: {
                                name: "United States Of America",
                                countryCode: "US"
                            },
                            address: {},
                            location: {
                                longitude: "-122.387464",
                                latitude: "37.76797"
                            },
                            accessibleSeatingDetail: "Accessible seating is available online through Ticketmaster.com, by calling Ticketmaster phone agents or coming to the Chase Center Box Office. Interpreters are available by request and are dependent upon availability. Please call the Chase Center for further information. Interpreters need to be reserved a minimum of 10 days in advance of the show. Service dogs are allowed at the Chase Center.",
                            upcomingEvents: {
                                _total: 76,
                                ticketmaster: 76,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/venues/KovZ917Ah1H?locale=en-us"
                                }
                            }
                        }
                    ],
                    attractions: [
                        {
                            name: "Golden State Warriors",
                            type: "attraction",
                            id: "K8vZ9171oa0",
                            url: "https://www.ticketmaster.com/golden-state-warriors-tickets/artist/805946",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/warriors"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Golden_State_Warriors"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/warriors"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/warriors"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/warriors/"
                                    }
                                ]
                            },
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 64,
                                tmr: 7,
                                ticketmaster: 57,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171oa0?locale=en-us"
                                }
                            }
                        },
                        {
                            name: "Phoenix Suns",
                            type: "attraction",
                            id: "K8vZ9171oZf",
                            url: "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/Suns"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/suns/"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/suns/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            aliases: [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 65,
                                tmr: 7,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                name: "Phoenix Suns vs. Memphis Grizzlies",
                type: "event",
                id: "G5v0Z98m2Ro4N",
                url: "https://www.ticketmaster.com/phoenix-suns-vs-memphis-grizzlies-phoenix-arizona-12-23-2022/event/19005D0B8FBD1563",
                locale: "en-us",
                images: [
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    }
                ],
                dates: {
                    start: {
                        localDate: "2022-12-23",
                        localTime: "20:00:00",
                        dateTime: "2022-12-24T03:00:00Z",
                        dateTBD: false,
                        dateTBA: false,
                        timeTBA: false,
                        noSpecificTime: false
                    },
                    timezone: "America/Phoenix",
                    status: {
                        code: "onsale"
                    },
                    spanMultipleDays: false
                },
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nE",
                            name: "Sports"
                        },
                        genre: {
                            id: "KnvZfZ7vAde",
                            name: "Basketball"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vFJA",
                            name: "NBA"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7l1",
                            name: "Group"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7vA7d",
                            name: "Team"
                        },
                        family: false
                    }
                ],
                location: {
                    longitude: "-112.071313",
                    latitude: "33.445899"
                },
                _links: {
                    self: {
                        href: "/discovery/v2/products/G5v0Z98m2Ro4N?locale=en-us"
                    },
                    attractions: [
                        {
                            href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        },
                        {
                            href: "/discovery/v2/attractions/K8vZ9171Kg7?locale=en-us"
                        }
                    ],
                    venues: [
                        {
                            href: "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                        }
                    ]
                },
                _embedded: {
                    venues: [
                        {
                            name: "Footprint Center",
                            type: "venue",
                            id: "KovZpZAE617A",
                            url: "https://www.ticketmaster.com/footprint-center-tickets-phoenix/venue/205079",
                            locale: "en-us",
                            images: [
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dbimages/22218v.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                }
                            ],
                            timezone: "America/Phoenix",
                            city: {
                                name: "Phoenix"
                            },
                            state: {
                                name: "Arizona",
                                stateCode: "AZ"
                            },
                            country: {
                                name: "United States Of America",
                                countryCode: "US"
                            },
                            address: {},
                            location: {
                                longitude: "-112.071313",
                                latitude: "33.445899"
                            },
                            parkingDetail: "Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of Footprint Center. Prices vary by event. Parking and Direction hotline (602)514-8472",
                            accessibleSeatingDetail: "PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7867 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call Footprint Center at (602)379-7800 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call Footprint Center at (602)252-9622 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7800 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.",
                            upcomingEvents: {
                                _total: 55,
                                ticketmaster: 55,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                                }
                            }
                        }
                    ],
                    attractions: [
                        {
                            name: "Phoenix Suns",
                            type: "attraction",
                            id: "K8vZ9171oZf",
                            url: "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/Suns"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/suns/"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/suns/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            aliases: [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 65,
                                tmr: 7,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        },
                        {
                            name: "Memphis Grizzlies",
                            type: "attraction",
                            id: "K8vZ9171Kg7",
                            url: "https://www.ticketmaster.com/memphis-grizzlies-tickets/artist/806038",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/memgrizz"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Memphis_Grizzlies"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/MemphisGrizzlies"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://instagram.com/memgrizz"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/grizzlies/"
                                    }
                                ]
                            },
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 64,
                                tmr: 6,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171Kg7?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                name: "Sacramento Kings vs. Phoenix Suns",
                type: "event",
                id: "G5vYZ98Kigakg",
                url: "https://www.ticketmaster.com/sacramento-kings-vs-phoenix-suns-sacramento-california-11-28-2022/event/1C005D04ECD491B5",
                locale: "en-us",
                images: [
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_3_2.jpg",
                        width: 640,
                        height: 427,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_3_2.jpg",
                        width: 1024,
                        height: 683,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RECOMENDATION_16_9.jpg",
                        width: 100,
                        height: 56,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_EVENT_DETAIL_PAGE_16_9.jpg",
                        width: 205,
                        height: 115,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                        height: 576,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_LANDSCAPE_16_9.jpg",
                        width: 1136,
                        height: 639,
                        fallback: false
                    },
                    {
                        ratio: "3_2",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_ARTIST_PAGE_3_2.jpg",
                        width: 305,
                        height: 203,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        width: 2048,
                        height: 1152,
                        fallback: false
                    },
                    {
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_16_9.jpg",
                        width: 640,
                        height: 360,
                        fallback: false
                    },
                    {
                        ratio: "4_3",
                        url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_CUSTOM.jpg",
                        width: 305,
                        height: 225,
                        fallback: false
                    }
                ],
                dates: {
                    start: {
                        localDate: "2022-11-28",
                        localTime: "19:00:00",
                        dateTime: "2022-11-29T03:00:00Z",
                        dateTBD: false,
                        dateTBA: false,
                        timeTBA: false,
                        noSpecificTime: false
                    },
                    timezone: "America/Los_Angeles",
                    status: {
                        code: "onsale"
                    },
                    spanMultipleDays: false
                },
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: "KZFzniwnSyZfZ7v7nE",
                            name: "Sports"
                        },
                        genre: {
                            id: "KnvZfZ7vAde",
                            name: "Basketball"
                        },
                        subGenre: {
                            id: "KZazBEonSMnZfZ7vFJA",
                            name: "NBA"
                        },
                        type: {
                            id: "KZAyXgnZfZ7v7l1",
                            name: "Group"
                        },
                        subType: {
                            id: "KZFzBErXgnZfZ7vA7d",
                            name: "Team"
                        },
                        family: false
                    }
                ],
                location: {
                    longitude: "-121.500231",
                    latitude: "38.580372"
                },
                _links: {
                    self: {
                        href: "/discovery/v2/products/G5vYZ98Kigakg?locale=en-us"
                    },
                    attractions: [
                        {
                            href: "/discovery/v2/attractions/K8vZ9171o50?locale=en-us"
                        },
                        {
                            href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        }
                    ],
                    venues: [
                        {
                            href: "/discovery/v2/venues/KovZpZAEF76A?locale=en-us"
                        }
                    ]
                },
                _embedded: {
                    venues: [
                        {
                            name: "Golden 1 Center",
                            type: "venue",
                            id: "KovZpZAEF76A",
                            url: "https://www.ticketmaster.com/golden-1-center-tickets-sacramento/venue/229976",
                            locale: "en-us",
                            images: [
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dbimages/18013v.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                }
                            ],
                            timezone: "America/Los_Angeles",
                            city: {
                                name: "Sacramento"
                            },
                            state: {
                                name: "California",
                                stateCode: "CA"
                            },
                            country: {
                                name: "United States Of America",
                                countryCode: "US"
                            },
                            address: {},
                            location: {
                                longitude: "-121.500231",
                                latitude: "38.580372"
                            },
                            parkingDetail: "Parking available in downtown parking lots and surface street parking. Please visit https://reserve.sacpark.org/ for additional information.",
                            accessibleSeatingDetail: "Accessible seating is available online through Ticketmaster.com, by calling Ticketmaster phone agents or coming to the Golden 1 Center Box Office. Interpreters are available by request and are dependent upon availability. Please e-mail ADAservices@kings.com for assistance with any ADA related questions. Interpreters need to be reserved a minimum of 10 days in advance of the show. Service dogs are allowed at the Golden 1 Center.",
                            upcomingEvents: {
                                _total: 73,
                                tmr: 1,
                                ticketmaster: 72,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/venues/KovZpZAEF76A?locale=en-us"
                                }
                            }
                        }
                    ],
                    attractions: [
                        {
                            name: "Sacramento Kings",
                            type: "attraction",
                            id: "K8vZ9171o50",
                            url: "https://www.ticketmaster.com/sacramento-kings-tickets/artist/806010",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/SacramentoKings"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Sacramento_Kings"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/sacramentokings/"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/sacramentokings/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/kings/"
                                    }
                                ]
                            },
                            images: [
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 66,
                                tmr: 10,
                                ticketmaster: 56,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171o50?locale=en-us"
                                }
                            }
                        },
                        {
                            name: "Phoenix Suns",
                            type: "attraction",
                            id: "K8vZ9171oZf",
                            url: "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            locale: "en-us",
                            externalLinks: {
                                twitter: [
                                    {
                                        url: "https://twitter.com/Suns"
                                    }
                                ],
                                wiki: [
                                    {
                                        url: "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                facebook: [
                                    {
                                        url: "https://www.facebook.com/suns/"
                                    }
                                ],
                                instagram: [
                                    {
                                        url: "https://www.instagram.com/suns/"
                                    }
                                ],
                                homepage: [
                                    {
                                        url: "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            aliases: [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            images: [
                                {
                                    ratio: "4_3",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    width: 305,
                                    height: 225,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    width: 640,
                                    height: 360,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    width: 2048,
                                    height: 1152,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    width: 205,
                                    height: 115,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    width: 305,
                                    height: 203,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    width: 1024,
                                    height: 576,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    width: 640,
                                    height: 427,
                                    fallback: false
                                },
                                {
                                    ratio: "3_2",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    width: 1024,
                                    height: 683,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    width: 1136,
                                    height: 639,
                                    fallback: false
                                },
                                {
                                    ratio: "16_9",
                                    url: "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    width: 100,
                                    height: 56,
                                    fallback: false
                                }
                            ],
                            classifications: [
                                {
                                    primary: true,
                                    segment: {
                                        id: "KZFzniwnSyZfZ7v7nE",
                                        name: "Sports"
                                    },
                                    genre: {
                                        id: "KnvZfZ7vAde",
                                        name: "Basketball"
                                    },
                                    subGenre: {
                                        id: "KZazBEonSMnZfZ7vFJA",
                                        name: "NBA"
                                    },
                                    type: {
                                        id: "KZAyXgnZfZ7v7l1",
                                        name: "Group"
                                    },
                                    subType: {
                                        id: "KZFzBErXgnZfZ7vA7d",
                                        name: "Team"
                                    },
                                    family: false
                                }
                            ],
                            upcomingEvents: {
                                _total: 65,
                                tmr: 7,
                                ticketmaster: 58,
                                _filtered: 0
                            },
                            _links: {
                                self: {
                                    href: "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            }
        ]
    }

}



const ApiService = require('../services/api-service');
const ticketApi = new ApiService()

// ----GET----
router.get('/api-service', (req, res, next) => {

    ticketApi
        .getAllEvents
        .then()
        .catch()
    console.log('hola mundo')
})

// events info
router.get("/events/:id", (req, res, next) => {

    const { id: events_id } = req.params

    ticketApi
        .getAllEvents(events_id)
        .then(events => res.render('events/main', { events }))
        .catch(err => console.log(err))
})

module.exports = router