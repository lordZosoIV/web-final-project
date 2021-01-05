    // document.getElementById('btn').addEventListener('click', function(e) {
    //     alert("givi magaria")
    // })


    const days = [];

    const teamSites = ["https://www.arsenal.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "https://www.avfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "https://www.brightonandhovealbion.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "http://www.burnleyfootballclub.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "https://www.chelseafc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "http://www.cpfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "http://www.evertonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "http://www.fulhamfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "http://www.leedsunited.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "http://www.lcfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "http://www.liverpoolfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "https://www.mancity.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "http://www.manutd.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "https://www.nufc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "https://www.sufc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "https://www.southamptonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "http://www.tottenhamhotspur.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "http://www.wba.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "http://www.whufc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
        "https://www.wolves.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
    ]

    async function loadTeamLogos() {
        const url = 'http://localhost:8080/getAllTeams';
        let resp = await getTeams(url);
        let elem = document.getElementById("logosBar")
        let html = '';
        for (i = 0; i < resp.length; i++) {
            html += '<a href=' + teamSites[i] + ' target="_blank"><img class="logo" src="../data/logo/' + resp[i].teamName + '.png"></img></a>'
        }
        elem.innerHTML = html
    }

    loadTeamLogos();



    // var request = new XMLHttpRequest();
    // request.open('GET', 'http://localhost:8080/getAllTeams', true);

    function get(url) {
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = function() {
                if (req.status == 200) {
                    resolve(req.response);
                } else {
                    reject(Error(req.statusText));
                }
            };
            req.onerror = function() {
                reject(Error("Network Error"));
            };
            req.send();
        });
    }

    async function getTeams(url) {
        return await get(url).then(function(response) {
            response = JSON.parse(response)
            return response;
        }, function(error) {
            console.error("fetch teams failed!", error);
            return error;
        })
    }


    async function loadTeamsDropDown() {
        const url = 'http://localhost:8080/getAllTeams';
        let elem = document.getElementById("dropdown-content-clubs")
        let resp = await getTeams(url);
        let html = '';
        for (i = 0; i < resp.length; i++) {
            html += '<a href="s" id=menuTeamIndex' + resp[i].id + ' style="font-size: small;">' + resp[i].teamName + '</a><br>';
        }
        elem.innerHTML = html
    }


    loadTeamsDropDown();




    async function loadMatchDaysDropDown() {
        for (i = 1; i < 18; i++) {
            days.push("matchDay " + i);
        }
        let elem = document.getElementById("dropdown-content-matchDays")
        let html = '';
        for (i = 0; i < days.length; i++) {
            html += '<a href="s" id=menu' + days[i] + ' style="font-size: small;">' + days[i] + '</a><br>';
        }
        elem.innerHTML = html
    }



    loadMatchDaysDropDown();