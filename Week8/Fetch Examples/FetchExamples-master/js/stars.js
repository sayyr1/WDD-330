document.getElementById('getStars').addEventListener('click', getStars);
document.getElementById('getGalaxies').addEventListener('click', getGalaxies);

//  the button was pushed. so make request for the Nearby Stars
function getStars() {
    fetch("https://en.wikipedia.org/wiki/List_of_nearest_stars_and_brown_dwarfs")
        .then(resp => resp.text())
        .then(html => {

            // Initialize the DOM parser
            let parser = new DOMParser();

            // Parse the text
            let doc = parser.parseFromString(html, "text/html");

            // You can now even select part of that html as you would in the regular DOM 
            // Example:
            let tbody =  doc.getElementsByTagName('tbody');
            let rows = Array.from(tbody[1].getElementsByTagName('tr'));
            //            rows.forEach(tr => console.log(tr))
            rows.shift();
            rows.shift();
            let thead =  document.getElementById('thead');
            thead.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Distance</th>
                <th>Discovery Year</th>
                <th>Description</th>
            </tr>
            `;

            let innerHtml = '';
            for ( let tr of rows) {
                let tds = Array.from(tr.children)
                // var rowOffset= tds[0].rowSpan-1;
                // if ( parentOffset > 0) {
                //     parentOffset--;
                // }

                let col1Span = (tds[0].colSpan === 2) ? -1 : 0;
                let desc = tds.length-1;
                let disc = tds.length-2;
                let mag  = 5  + col1Span;
                let dist = 2  + col1Span;

                let name = tds[0].innerText;
                if ( tds[0].colSpan === 1) {
                    name += tds[1].innerText;
                }
                
                innerHtml += buildStar(name, tds[dist].innerText, tds[disc].innerText, tds[desc].innerText);
            }
            let table = document.getElementById('stars');
            table.innerHTML = innerHtml;
        })
        .catch(err => console.error(err) );
}

function buildStar(name, dist, year, desc ) {
    if ( name.indexOf('[') >= 0) name = name.substring(0,name.indexOf('['));
    if ( dist.indexOf('[') >= 0) dist = dist.substring(0,dist.indexOf('['));
    if ( year.indexOf('[') >= 0) year = year.substring(0,year.indexOf('['));
    if ( desc.indexOf('[') >= 0) desc = desc.substring(0,desc.indexOf('['));
    return `
<tr id='${name}'>
    <td>${name}</td>
    <td>${dist}</td>
    <td>${year}</td>
    <td>${desc}</td>
</tr>`;
}

//  the button was pushed. so make request for the Nearby Galaxies
function getGalaxies() {
    fetch("https://en.wikipedia.org/wiki/List_of_nearest_galaxies")
        .then(resp => resp.text())
        .then(html => {

            // Initialize the DOM parser
            let parser = new DOMParser();

            // Parse the text
            let doc = parser.parseFromString(html, "text/html");

            // You can now even select part of that html as you would in the regular DOM 
            // Example:
            let tbody =  doc.getElementsByTagName('tbody');
            let rows = Array.from(tbody[0].getElementsByTagName('tr'));

            rows.shift();
            rows.shift();
            rows.pop();
            rows.pop();
            let thead =  document.getElementById('thead');
            thead.innerHTML = `
            <tr>
                <th></th>
                <th>Name</th>
                <th>Distance</th>
                <th>Description</th>
                <th>Diameter</th>
            </tr>
            `;

            let innerHtml = '';
            for ( let tr of rows) {
                let tds = Array.from(tr.children)
                let src = '';
                if (tds[1].childElementCount === 1) {
                    let img = tds[1].children[0];
                    src = 'https' + img.children[0].src.substring(4)
                }
                console.log(tds[2].innerText);
                innerHtml += buildGalaxy(src, tds[2].innerText, tds[4].innerText, tds[9].innerText, tds[10].innerText);
            }
            let table = document.getElementById('stars');
            table.innerHTML = innerHtml;
        })
        .catch(err => console.error(err) );
}

function buildGalaxy(img, name, dist, year, desc ) {
    if ( name.indexOf('[') >= 0) name = name.substring(0,name.indexOf('['));
    if ( dist.indexOf('[') >= 0) dist = dist.substring(0,dist.indexOf('['));
    if ( year.indexOf('[') >= 0) year = year.substring(0,year.indexOf('['));
    if ( desc.indexOf('[') >= 0) desc = desc.substring(0,desc.indexOf('['));
    return `
<tr>
    <td><img src=${img} alt=""></td>
    <td>${name}</td>
    <td>${dist}</td>
    <td>${year}</td>
    <td>${desc}</td>
</tr>`;
}
