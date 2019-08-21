"use strict";
(() => {
    window.NYTimesAPILoadWindow = {
        init: () => {
            let leftResultContainer = $("#left-result-container");
            let rightResultContainer = $("#right-result-container");

            $(() => {
                loadTopNews(leftResultContainer, rightResultContainer);
                scrollToTop();
            });
            $("#top-news-button").click(() => loadTopNews(leftResultContainer, rightResultContainer));
            $(".section").click(function() { loadMostViewedFor($(this).text(), leftResultContainer, rightResultContainer); });
        }
    };

    let scrollToTop = () => {
        $('#back-to-top').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 700);
            return false;
        });
    };

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

    let createArticleBoxForSection = (article) => {
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
                        src: article.media[0]["media-metadata"][2].url,
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
            $("#current-section-name").remove();
            $("#top-news-button").attr('disabled', '');
            let newResults = result.results.filter(article => article.multimedia && article.multimedia.length >= 5);
            let leftHalf = newResults.filter((article, index) => index % 2 === 0);
            let rightHalf = newResults.filter((article, index) => index % 2 === 1);
            adjustColumnHeights(leftHalf, rightHalf);

            leftContainer.empty().append(
                leftHalf.map(article => createArticleBox(article))
            );
            rightContainer.empty().append(
                rightHalf.map(article => createArticleBox(article))
            );
        });
    };
    let loadMostViewedFor = (sectionName, leftContainer, rightContainer) => {
        return $.getJSON("https://api.nytimes.com/svc/mostpopular/v2/mostviewed/" + sectionName + "/7.json", {
            'api-key': "wATnxImilnJDgGS1WIU53luhVTAQQA5x",
        }).done(result => {
            $("#top-news-button").removeAttr("disabled");
            $("#current-section-name").remove();
            $("#news-button-group").append(
                $("<button></button>").attr({
                    id: "current-section-name",
                    class: "btn btn-secondary",
                    role: "button",
                    disabled: "",
                }).append(sectionName)
            );
            let newResults = result.results.filter(article => article.media && article.media[0]["media-metadata"].length >= 3);
            let leftHalf = newResults.filter((article, index) => index % 2 === 0);
            let rightHalf = newResults.filter((article, index) => index % 2 === 1);
            leftContainer.empty().append(
                leftHalf.map(article => createArticleBoxForSection(article))
            );
            rightContainer.empty().append(
                rightHalf.map(article => createArticleBoxForSection(article))
            );
        });
    };

    let getHeightOfArray = (a) => {
        let height = 0;
        a.forEach((article) => {
            height += article.multimedia[4].height;
        });
        return height;
    };

    let adjustColumnHeights = (left, right) => {
        let [leftHeight, rightHeight] = [getHeightOfArray(left), getHeightOfArray(right)];
        let [longerColumn, shorterColumn, longerHeight, shorterHeight] =
            leftHeight >= rightHeight ? [left, right, leftHeight, rightHeight] : [right, left, rightHeight, leftHeight];

        while (longerHeight > shorterHeight + 400) {
            shorterColumn.push(longerColumn.pop());
            [longerHeight, shorterHeight] = [getHeightOfArray(longerColumn), getHeightOfArray(shorterColumn)];
        }
    };
})();
