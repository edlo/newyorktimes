describe("New York Times News API tests:", () => {
    beforeEach(() => {
        fixture.setBase("test");
        fixture.load("nyt-fixture.html");
        window.NYTimesAPILoadWindow.init();
    });

    afterEach(() => {
        fixture.cleanup();
    });

    describe("NYT on load", () => {
        let request;

        beforeEach(() => {
            jasmine.Ajax.install();

            let leftResultContainer = $("#left-result-container");
            let rightResultContainer = $("#right-result-container");
            loadTopNews(leftResultContainer, rightResultContainer);

            request = jasmine.Ajax.requests.mostRecent();
        });

        afterEach(() => {
            jasmine.Ajax.uninstall();
        });

        it("should call the NYT top news api.", () => {
            expect(request.url).
                toBe("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=abcf51e76459403795e31aeac8016017");
        });

        it("should load divs into both the left and right container, with one anchor " +
        "element in each div, and within the anchor tag, a div, an image, and another div.", () => {
            expect($("#left-result-container").children().length).toBe(0);
            expect($("#right-result-container").children().length).toBe(0);

            request.respondWith({
                status: 200,
                responseText: JSON.stringify({
                    results: [{
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, " +
                        "his publicist said the actor was taking time to “seek evaluation and treatment.”",
                        multimedia: [{}, {}, {}, {}, {
                            url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-medi" +
                            "umThreeByTwo440.jpg",
                        }]
                    },
                    {
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, his pub" +
                        "licist said the actor was taking time to “seek evaluation and treatment.”",
                        multimedia: [{}, {}, {}, {}, {
                            url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-mediumThr" +
                            "eeByTwo440.jpg",
                        }]
                    }]
                })
            });

            expect($("#left-result-container").children().length).toBe(1);
            expect($("#left-result-container").children(0).children(0).children(0).children().length).toBe(3);
            expect($("#right-result-container").children().length).toBe(1);
            expect($("#right-result-container").children(0).children(0).children(0).children().length).toBe(3);
        });

        it("should have a disabled Top News Button once the page has loaded.", () => {
            expect($("#top-news-button").attr("disabled")).toBe(undefined);

            request.respondWith({
                status: 200,
                responseText: JSON.stringify({
                    results: [{
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, his publ" +
                        "icist said the actor was taking time to “seek evaluation and treatment.”",
                        multimedia: [{}, {}, {}, {}, {
                            url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-mediumThre" +
                            "eByTwo440.jpg",
                        }]
                    },
                    {
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, his publ" +
                        "icist said the actor was taking time to “seek evaluation and treatment.”",
                        multimedia: [{}, {}, {}, {}, {
                            url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-mediumThreeBy" +
                            "Two440.jpg",
                        }]
                    }]
                })
            });

            expect($("#top-news-button").attr("disabled")).toBe("disabled");
        });
    });

    describe("NYT on load", () => {
        let request;

        beforeEach(() => {
            jasmine.Ajax.install();

            let leftResultContainer = $("#left-result-container");
            let rightResultContainer = $("#right-result-container");
            loadTopNews(leftResultContainer, rightResultContainer);

            request = jasmine.Ajax.requests.mostRecent();
        });

        afterEach(() => {
            jasmine.Ajax.uninstall();
        });

        it("should call the NYT top news api.", () => {
            expect(request.url).toBe("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=wATnxImilnJDgGS1WIU53luhVTAQQA5x");
        });

        it("should load divs into both the left and right container, with one anchor element in each div, and within " +
        "the anchor tag, a div, an image, and another div.", () => {
            expect($("#left-result-container").children().length).toBe(0);
            expect($("#right-result-container").children().length).toBe(0);

            request.respondWith({
                status: 200,
                responseText: JSON.stringify({
                    results: [{
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, his " +
                        "publicist said the actor was taking time to “seek evaluation and treatment.”",
                        multimedia: [{}, {}, {}, {}, {
                            url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-medium" +
                            "ThreeByTwo440.jpg",
                        }]
                    },
                    {
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, his pu" +
                        "blicist said the actor was taking time to “seek evaluation and treatment.”",
                        multimedia: [{}, {}, {}, {}, {
                            url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-mediumThree" +
                            "ByTwo440.jpg",
                        }]
                    }]
                })
            });

            expect($("#left-result-container").children().length).toBe(1);
            expect($("#left-result-container").children(0).children(0).children(0).children().length).toBe(3);
            expect($("#right-result-container").children().length).toBe(1);
            expect($("#right-result-container").children(0).children(0).children(0).children().length).toBe(3);
        });

        it("should have a disabled Top News Button once the page has loaded.", () => {
            expect($("#top-news-button").attr("disabled")).toBe(undefined);

            request.respondWith({
                status: 200,
                responseText: JSON.stringify({
                    results: [{
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, his " +
                        "publicist said the actor was taking time to “seek evaluation and treatment.”",
                        multimedia: [{}, {}, {}, {}, {
                            url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-mediumThr" +
                            "eeByTwo440.jpg",
                        }]
                    },
                    {
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, his " +
                        "publicist said the actor was taking time to “seek evaluation and treatment.”",
                        multimedia: [{}, {}, {}, {}, {
                            url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-mediumTh" +
                            "reeByTwo440.jpg",
                        }]
                    }]
                })
            });

            expect($("#top-news-button").attr("disabled")).toBe("disabled");
        });
    });

    describe("Upon clicking on a section, the site", () => {
        let request;

        beforeEach(() => {
            jasmine.Ajax.install();

            $(".section").click();

            request = jasmine.Ajax.requests.mostRecent();
        });

        afterEach(() => {
            jasmine.Ajax.uninstall();
        });

        it("should call the NYT top news api.", () => {
            expect(request.url).toBe("https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Style/7.json?api-key=wATnxImilnJDgGS1WIU53luhVTAQQA5x");
        });

        it("should load divs into both the left and right container, with one anchor element in each div, and within " +
        "the anchor tag, a div, an image, and another div.", () => {
            expect($("#left-result-container").children().length).toBe(0);
            expect($("#right-result-container").children().length).toBe(0);

            request.respondWith({
                status: 200,
                responseText: JSON.stringify({
                    results: [{
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, his " +
                        "publicist said the actor was taking time to “seek evaluation and treatment.”",
                        media: [{
                            "media-metadata": [{}, {}, {
                                url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-" +
                                "mediumThreeByTwo440.jpg",
                            }]
                        }]
                    },
                    {
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, his " +
                        "publicist said the actor was taking time to “seek evaluation and treatment.”",
                        media: [{
                            "media-metadata": [{}, {}, {
                                url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item" +
                                "-mediumThreeByTwo440.jpg",
                            }]
                        }]
                    }]
                })
            });

            expect($("#left-result-container").children().length).toBe(1);
            expect($("#left-result-container").children(0).children(0).children(0).children().length).toBe(3);
            expect($("#right-result-container").children().length).toBe(1);
            expect($("#right-result-container").children(0).children(0).children(0).children().length).toBe(3);
        });

        it("should have an enabled Top News Button once the page has loaded.", () => {
            expect($("#top-news-button").attr("disabled")).toBe(undefined);

            request.respondWith({
                status: 200,
                responseText: JSON.stringify({
                    results: [{
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, " +
                        "his publicist said the actor was taking time to “seek evaluation and treatment.”",
                        media: [{
                            "media-metadata": [{}, {}, {
                                url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-" +
                                "mediumThreeByTwo440.jpg",
                            }]
                        }]
                    },
                    {
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, " +
                        "his publicist said the actor was taking time to “seek evaluation and treatment.”",
                        media: [{
                            "media-metadata": [{}, {}, {
                                url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-" +
                                "mediumThreeByTwo440.jpg",
                            }]
                        }]
                    }]
                })
            });

            expect($("#top-news-button").attr("disabled")).toBe(undefined);
        });

        it("should have a Style dead-button to the right of the 'Most Viewed by Section' button group", () => {
            expect($("#news-button-group").children().length).toBe(2);

            request.respondWith({
                status: 200,
                responseText: JSON.stringify({
                    results: [{
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Sexual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, his " +
                        "publicist said the actor was taking time to “seek evaluation and treatment.”",
                        media: [{
                            "media-metadata": [{}, {}, {
                                url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-" +
                                "mediumThreeByTwo440.jpg",
                            }]
                        }]
                    },
                    {
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, " +
                        "his publicist said the actor was taking time to “seek evaluation and treatment.”",
                        media: [{
                            "media-metadata": [{}, {}, {
                                url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-" +
                                "item-mediumThreeByTwo440.jpg",
                            }]
                        }]
                    }]
                })
            });

            expect($("#news-button-group").children().length).toBe(3);
            expect($("#current-section-name").attr("disabled")).toBe("disabled");
        });
    });

    describe("NYT after clicking the Top News button after being on a specific section", () => {
        let request;

        beforeEach(() => {
            jasmine.Ajax.install();
            $(".section").click();
            $("#top-news-button").click();
            request = jasmine.Ajax.requests.mostRecent();
        });

        afterEach(() => {
            jasmine.Ajax.uninstall();
        });

        it("should call the NYT top news api.", () => {
            expect(request.url).toBe("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=wATnxImilnJDgGS1WIU53luhVTAQQA5x");
        });

        it("should load divs into both the left and right container, with one anchor element in each div, " +
        "and within the anchor tag, a div, an image, and another div.", () => {
            expect($("#left-result-container").children().length).toBe(0);
            expect($("#right-result-container").children().length).toBe(0);

            request.respondWith({
                status: 200,
                responseText: JSON.stringify({
                    results: [{
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, " +
                        "his publicist said the actor was taking time to “seek evaluation and treatment.”",
                        multimedia: [{}, {}, {}, {}, {
                            url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item" +
                            "-mediumThreeByTwo440.jpg",
                        }]
                    },
                    {
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, " +
                        "his publicist said the actor was taking time to “seek evaluation and treatment.”",
                        multimedia: [{}, {}, {}, {}, {
                            url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-m" +
                            "ediumThreeByTwo440.jpg",
                        }]
                    }]
                })
            });

            expect($("#left-result-container").children().length).toBe(1);
            expect($("#left-result-container").children(0).children(0).children(0).children().length).toBe(3);
            expect($("#right-result-container").children().length).toBe(1);
            expect($("#right-result-container").children(0).children(0).children(0).children().length).toBe(3);
        });

        it("should have a disabled Top News Button once the page has loaded.", () => {
            expect($("#top-news-button").attr("disabled")).toBe(undefined);

            request.respondWith({
                status: 200,
                responseText: JSON.stringify({
                    results: [{
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, " +
                        "his publicist said the actor was taking time to “seek evaluation and treatment.”",
                        multimedia: [{}, {}, {}, {}, {
                            url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-" +
                            "mediumThreeByTwo440.jpg",
                        }]
                    },
                    {
                        url: "https://www.nytimes.com/2017/11/02/arts/kevin-spacey-treatment-old-vic.html",
                        title: "Kevin Spacey to Seek Treatment as Secual Accusations Grow",
                        abstract: "As more men have come forward to accuse Mr. Spacey of inappropriate behavior, " +
                        "his publicist said the actor was taking time to “seek evaluation and treatment.”",
                        multimedia: [{}, {}, {}, {}, {
                            url: "https://static01.nyt.com/images/2017/11/03/world/03Spacey-item/03Spacey-item-" +
                            "mediumThreeByTwo440.jpg",
                        }]
                    }]
                })
            });

            expect($("#top-news-button").attr("disabled")).toBe("disabled");
        });
    });
});

// I need these because I am loading an API call upon loading the page
let createArticleBox = (article) => {
    return $("<div></div>").append(
        $("<a></a>").attr({
            style: "display: block;",
            href: article.url
        }).append(
            $("<div></div>").addClass("article").append(
                $("<div></div>").addClass("gradient-overlay").append(
                    $("<h1></h1>").addClass("lead overlay-head").append(
                        article.title
                    )
                ),
                $("<img/>").addClass("article-image").attr({
                    src: article.multimedia[4].url,
                }),
                $("<div></div>").addClass("overlay").append(
                    $("<p></p>").addClass("lead text-justify overlay-body").append(
                        article.abstract
                    )
                )
            )
        )
    );
};

let loadTopNews = (leftContainer, rightContainer) => {
    return $.getJSON("https://api.nytimes.com/svc/topstories/v2/home.json", {
        'api-key': "wATnxImilnJDgGS1WIU53luhVTAQQA5x",
    }).done(result => {
        let leftHalf = result.results.filter((article, index) => index % 2 === 0);
        let rightHalf = result.results.filter((article, index) => index % 2 === 1);
        $("#current-section-name").remove();
        $("#top-news-button").attr('disabled', '');
        leftContainer.empty().append(
            leftHalf.map(article => {
                if (article.multimedia.length >= 5) {
                    return createArticleBox(article);
                }
            })
        );
        rightContainer.empty().append(
            rightHalf.map(article => {
                if (article.multimedia.length >= 5) {
                    return createArticleBox(article);
                }
            })
        );
    });
};
