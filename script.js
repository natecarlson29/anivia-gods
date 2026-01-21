// Fetch items, runes, and summoner spells from external CDN
let itemsJson = [];
let runesJson = [];
let summonerSpells = [];

// Fetch items from Community Dragon CDN
async function fetchItems() {
    try {
        const response = await fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json');
        const data = await response.json();
        itemsJson = data;
        console.log('Items loaded:', itemsJson.length);
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

// Fetch runes from Community Dragon CDN
async function fetchRunes() {
    try {
        const response = await fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json');
        const data = await response.json();
        runesJson = data;
        console.log('Runes loaded:', runesJson.length);
    } catch (error) {
        console.error('Error fetching runes:', error);
    }
}

// Fetch summoner spells from Community Dragon CDN
async function fetchSummonerSpells() {
    try {
        const response = await fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-spells.json');
        const data = await response.json();
        summonerSpells = data;
        console.log('Summoner Spells loaded:', summonerSpells.length);
    } catch (error) {
        console.error('Error fetching summoner spells:', error);
    }
}

// Initialize data
async function initializeData() {
    await Promise.all([fetchItems(), fetchRunes(), fetchSummonerSpells()]);
    // Once data is loaded, fetch summoners
    fetchSummoners();
}

var allSummonerData = [];

// Helper function to convert local paths or iconPaths to Community Dragon CDN URLs
function getCDNImageUrl(path) {
    const cdnBase = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default';

    // If it's already a CDN URL, return as is
    if (path.startsWith('http')) {
        return path;
    }

    // If it starts with /, it's an iconPath from the API - use it directly
    if (path.startsWith('/')) {
        // The path already has the correct structure from the API
        return cdnBase + path;
    }

    // Convert local paths to CDN paths
    if (path.startsWith('img/item/')) {
        const itemId = path.replace('img/item/', '').replace('.png', '');
        // Community Dragon items path structure
        return `https://raw.communitydragon.org/latest/game/assets/items/icons2d/${itemId.toLowerCase()}.png`;
    }

    if (path.startsWith('img/lanes/')) {
        const role = path.replace('img/lanes/', '').replace('.png', '');
        // Community Dragon position icons
        return `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${role.toLowerCase()}.png`;
    }

    if (path.startsWith('img/tier/')) {
        const tier = path.replace('img/tier/', '').replace('.png', '');
        // Community Dragon ranked emblems
        return `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/ranked-emblem-${tier.toLowerCase()}.png`;
    }

    // Fallback for profile icons
    if (path.startsWith('img/profileicon/')) {
        return 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/0.jpg';
    }

    return path;
}

function collapseBlob(e) {
    e.stopPropagation();
    let info = document.getElementById('info-blob');
    info.classList.add('collapsed');
}

function expandBlob(e) {
    if (e.classList.contains('collapsed')) {
        e.classList.toggle('collapsed');
    }
}

function getCheckedRadioValue(radios) {
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}

function profPicError(e) {
    e.src = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/0.jpg';
}

function toggleItems() {
    var timelineElement = document.getElementById('timeline-row');
    if (timelineElement.style.display === 'block') {
        timelineElement.style.display = 'none';
    } else {
        timelineElement.style.display = 'block';
    }
}

function combineAllRunes(allRunes) {
    const grandchildMap = {};
    allRunes.forEach(child => {
        if (child[4] > child[5]) {
            let temp = child[4];
            child[4] = child[5];
            child[5] = temp;
        }
        const grandchildKey = `${child[0]}_${child[1]}_${child[2]}_${child[3]}_${child[4]}_${child[5]}`;
        if (!grandchildMap[grandchildKey]) {
            let wins = 0;
            let losses = 0;
            child[11] ? wins++ : losses++;
            grandchildMap[grandchildKey] = { grandchild: child, wins: wins, losses: losses };
        } else {
            child[11] ? grandchildMap[grandchildKey].wins++ : grandchildMap[grandchildKey].losses++;
        }
    });
    return grandchildMap;
}

function groupByTimestamp(arr) {
    const result = [];
    let currentGroup = [];

    arr.forEach((obj, index) => {
        if (index === 0) {
            // If it's the first object, add it to the current group
            currentGroup.push(obj);
        } else {
            const prevTimestamp = arr[index - 1].timestamp;
            const currentTimestamp = obj.timestamp;

            if (currentTimestamp - prevTimestamp <= 3000) {
                // If within 3000 milliseconds, add to the current group
                currentGroup.push(obj);
            } else {
                // If not within 3000 milliseconds, start a new group
                result.push([...currentGroup]);
                currentGroup = [obj];
            }
        }
    });

    // Add the last group
    if (currentGroup.length > 0) {
        result.push([...currentGroup]);
    }

    return result;
}

function convertTimestampToMinutesAndSeconds(timestamp) {
    const date = new Date(timestamp);

    // Extract minutes and seconds
    const minutes = date.getUTCMinutes();
    const seconds = date.getSeconds();

    // Format the result
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    return formattedTime;
}

function findMostCommonValue(array, existingItems) {
    const occurrences = {};
    array.forEach(value => {
        if (!existingItems.includes(value)) {
            occurrences[value] = (occurrences[value] || 0) + 1;
        }
    });
    let mostCommonValue = null;
    let highestCount = 0;
    for (const [value, count] of Object.entries(occurrences)) {
        if (count > highestCount) {
            mostCommonValue = Number(value);
            highestCount = count;
        }
    }
    return mostCommonValue;
}

function calculatePercentage(array) {
    const occurrences = {};
    const totalValues = array.length;

    array.forEach(value => {
        occurrences[value] = (occurrences[value] || 0) + 1;
    });

    const percentages = {};
    for (const [value, count] of Object.entries(occurrences)) {
        percentages[value] = Math.round((count / totalValues) * 100);
    }

    return percentages;
}

function convertSkillSlot(skillSlot) {
    switch (skillSlot) {
        case 1:
            return 'Q';
        case 2:
            return 'W';
        case 3:
            return 'E';
        case 4:
            return 'R';
    }
}

function toggleBlizzard() {
    const blizzard = document.getElementById('blizzard');
    blizzard.classList.toggle('hidden');
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'r') {
        toggleBlizzard();
    }
});

function dropdownCard(clickedCard) {

    const dropdownContent = clickedCard.nextElementSibling;

    clickedCard.classList.toggle('summoner-card-active');

    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'flex';
    } else {
        dropdownContent.style.display = 'none';
    }
    dropdownContent.classList.toggle('dropdown-info-active');
    // dropdownContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


/* Summoners */

function customSort(obj1, obj2) {

    if (obj1.tier === 'd1' && obj2.tier === 'd1') {
        return obj2.leaguePoints - obj1.leaguePoints;
    } else if (obj1.tier === 'd1') {
        return 1;
    } else if (obj2.tier === 'd1') {
        return -1;
    } else {
        return obj2.leaguePoints - obj1.leaguePoints;
    }
}

function winrateSort(obj1, obj2) {
    const winrate1 = obj1.wins / obj1.losses;
    const winrate2 = obj2.wins / obj2.losses;
    if (winrate1 < winrate2) {
        return 1;
    } else if (winrate1 > winrate2) {
        return -1;
    } else {
        return 0;
    }
}

function finalPlayerStats(summoners) {
    summoners.forEach(summoner => {
        //Boots
        let boots = [];
        summoner.allItems.forEach((itemSet) => {
            itemSet.forEach(item => {
                if (item != 0 && item != 1001) {
                    let itemInfo = itemsJson.find(x => x.id == item);
                    if (itemInfo && itemInfo.categories && itemInfo.categories.includes('Boots')) {
                        boots.push(item);
                    }
                }
            });
        });
        summoner.boots = calculatePercentage(boots);

        //Winrate
        summoner.winrate = Math.round((summoner.wins / (summoner.wins + summoner.losses)) * 100);
    })

    return summoners;
}

function createPlayerList(summoners) {
    console.log('hit');

    console.log({ Summoners: summoners });
    summoners = summoners.filter(x => x.wins > 3);

    //Sort by LP / Winrate
    let radios = document.getElementsByName('option');
    let checkedValue = getCheckedRadioValue(radios);
    console.log(checkedValue);
    if (checkedValue == 'lp') {
        console.log('sort by lp');
        summoners = summoners.sort(customSort);
    } else {
        console.log('sort by winrate');
        summoners = summoners.sort(winrateSort);
    }

    //Filter out Regions unchecked
    const checkboxes = ['NA', 'EUW', 'KR'];
    checkboxes.forEach(id => {
        const checkbox = document.getElementById(id);
        if (!checkbox.checked) {
            summoners = summoners.filter(obj => obj.region != id);
        }
    });

    //Filter to selected roles
    const selectedRole = document.getElementById('role-dropdown').value;
    if (selectedRole !== 'ALL') {
        summoners = summoners.filter(obj => obj.role === selectedRole);
    }

    let playerCountSpan = document.getElementById('player-count');
    playerCountSpan.textContent = summoners.length;

    let summonerListHtml = '';

    summoners.forEach(summoner => {
        summonerListHtml += '<div class="flex-row summoner-card" onclick="dropdownCard(this)">';

        summonerListHtml += '<div class="flex-row">';

        /* Dropdown Arrow */
        summonerListHtml += '<svg class="side-arrow" fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.146 12.354l-5.792 5.792a.5.5 0 01-.854-.353V6.207a.5.5 0 01.854-.353l5.792 5.792a.5.5 0 010 .708z"/></svg>';

        /* Profile Image */
        summonerListHtml += '<img onerror=profPicError(this) class="med-img" src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/' + summoner.profileIconId + '.jpg"/>';

        /* MatchId */
        // summonerListHtml += '<p class="bottom-right-text">' + summoner.matchId + '</p>';

        /* Summoner Name */
        summonerListHtml += '<div class="flex-column"><div class="summoner-name">' + summoner.summonerName + '<span class="riot-tag">#' + summoner.riotTag + '</span></div>';
        summonerListHtml += '<div class="summoner-region"><span class="wins">' + summoner.wins + '</span>-<span class="losses">' + summoner.losses + '</span> (<span' + (summoner.winrate > 54 ? ' class="high-wr"' : '') + '>' + summoner.winrate + '%</span>)<br/>' + summoner.region + '</div></div></div>';

        /* Rank */
        summonerListHtml += '<div class="tier"><img class="large-img" src="' + getCDNImageUrl('img/tier/' + summoner.tier + '.png') + '"/>' + summoner.leaguePoints + ' LP</div>';

        /* Summoner Spells */
        summonerListHtml += '<div class="flex-column summoner-spells">';
        let summoner1 = summonerSpells.find(x => x.id == summoner.summoner1Id);
        let summoner2 = summonerSpells.find(x => x.id == summoner.summoner2Id);
        if (summoner1 && summoner2) {
            summonerListHtml += '<div class="summoner-spell"><img src="' + getCDNImageUrl(summoner1.iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + summoner1.name + '</span><hr/>' + summoner1.description + '</div></div>';
            summonerListHtml += '<div class="summoner-spell"><img src="' + getCDNImageUrl(summoner2.iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + summoner2.name + '</span><hr/>' + summoner2.description + '</div></div>';
        }
        summonerListHtml += '</div>'

        /* Role */
        summonerListHtml += '<img class="med-img" src="' + getCDNImageUrl('img/lanes/' + summoner.role.toLowerCase() + '.png') + '"/>';

        /* Runes */
        let combinedRunes = combineAllRunes(summoner.allRunes);
        let games = 0;
        let mostUsedRunes = null;
        for (const runeSet in combinedRunes) {
            if (combinedRunes[runeSet].wins + combinedRunes[runeSet].losses > games) {
                games = combinedRunes[runeSet].wins + combinedRunes[runeSet].losses;
                mostUsedRunes = combinedRunes[runeSet];
            }
        }
        summonerListHtml += '<div class="flex-column most-used-runes">';
        try {
            summonerListHtml += '<div class="dropdown-title">Most Common Runes</div>';

            summonerListHtml += '<div class="flex-row runes">';

            summonerListHtml += '<div class="rune main-rune"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == mostUsedRunes.grandchild[0]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[0]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[0]).longDesc + '</div></div>';

            summonerListHtml += '<div class="flex-column">'
            summonerListHtml += '<div class="flex-row">'
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == mostUsedRunes.grandchild[1]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[1]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[1]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == mostUsedRunes.grandchild[2]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[2]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[2]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == mostUsedRunes.grandchild[3]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[3]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[3]).longDesc + '</div></div>';
            summonerListHtml += '</div>'

            summonerListHtml += '<div class="flex-row">'
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == mostUsedRunes.grandchild[4]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[4]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[4]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == mostUsedRunes.grandchild[5]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[5]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[5]).longDesc + '</div></div>';
            summonerListHtml += '</div>'
            summonerListHtml += '</div>'

            summonerListHtml += '<div class="flex-column">'
            summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == mostUsedRunes.grandchild[6]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[6]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[6]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == mostUsedRunes.grandchild[7]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[7]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[7]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == mostUsedRunes.grandchild[8]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[8]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[8]).longDesc + '</div></div>';
            summonerListHtml += '</div></div>';
        } catch (error) {
            console.log({ Runesv1Error: error });
            summonerListHtml += '<div>No rune data</div></div>';
        }
        summonerListHtml += '</div>';


        /* Items */
        summonerListHtml += '<div class="flex-column most-used-runes">';
        summonerListHtml += '<div class="dropdown-title">Most Common Build</div>';
        summonerListHtml += '<div class="flex-row items">';
        let itemsFound = [];
        summoner.items.forEach(itemArray => {
            let item = findMostCommonValue(itemArray, itemsFound);
            itemsFound.push(item);
            let itemInfo = itemsJson.find(x => x.id == item);
            if (itemInfo) {
                if (summoner.items.indexOf(itemArray) != 0) {
                    summonerListHtml += '<div>></div>';
                }
                summonerListHtml += '<div class="item-img"><img src="' + getCDNImageUrl('img/item/' + item + '.png') + '"/>';
                summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + itemInfo.name + '</span><hr/>' + itemInfo.description + '</div>'
                summonerListHtml += '</div>';
                // console.log({ IndexOf: summoner.items.indexOf(itemArray) });
            } else {
                console.log({ ItemError: item });
                // summonerListHtml += '<div>' + item + '</div>';
            }
        })
        summonerListHtml += '</div>';
        summonerListHtml += '</div></div>';


        /* Drop down section */
        summonerListHtml += '<div class="dropdown-info flex-column">';

        /* Itemization */
        summonerListHtml += '<div class="timeline-item flex-row">';
        summonerListHtml += '<div class="dropdown-title">Boots</div>';
        summonerListHtml += '<div class="flex-row boots">';
        for (const [key, value] of Object.entries(summoner.boots)) {
            let itemInfo = itemsJson.find(x => x.id == key);
            summonerListHtml += `<div class="item-img"><img src="${getCDNImageUrl('img/item/' + key + '.png')}"/>`;
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + itemInfo.name + '</span><hr/>' + itemInfo.description + `</div><div style="text-align: center;"><b>${value}%</b></div></div><div class="spacer"></div>`;
        }
        summonerListHtml += '</div></div>';

        /* Skills */
        summonerListHtml += '<div class="timeline-item flex-row">';
        summonerListHtml += '<div class="dropdown-title">Skill Order</div>';
        summoner.skillEvents.forEach((levelUp, index) => {
            if (index > 0) {
                summonerListHtml += '&#8594;';
            }
            summonerListHtml += '<span class="skill-letter' + convertSkillSlot(levelUp.skillSlot) + '">' + convertSkillSlot(levelUp.skillSlot) + '</span>';
        })
        summonerListHtml += '</div>';

        /* All Runes */
        summonerListHtml += '<div class="timeline-item flex-row">';
        summonerListHtml += '<div class="dropdown-title">All Runes</div>';
        // combinedRunes = combinedRunes.sort((a, b) => (b.wins / b.losses) - (a.wins / b.losses));
        for (const runeSet in combinedRunes) {
            /* Runes */
            let classes = combinedRunes[runeSet].wins > combinedRunes[runeSet].losses ? "flex-row runes winner" : "flex-row runes loser";
            summonerListHtml += '<div class="' + classes + '">';
            summonerListHtml += '<div class="summoner-region runes-winrate"><span class="wins">' + combinedRunes[runeSet].wins + '</span> - <span class="losses">' + combinedRunes[runeSet].losses + '</span></div>';
            summonerListHtml += '<div class="rune main-rune"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[0]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[0]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[0]).longDesc + '</div></div>';

            summonerListHtml += '<div class="flex-column">'
            summonerListHtml += '<div class="flex-row">'
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[1]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[1]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[1]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[2]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[2]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[2]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[3]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[3]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[3]).longDesc + '</div></div>';
            summonerListHtml += '</div>'

            summonerListHtml += '<div class="flex-row">'
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[4]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[4]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[4]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[5]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[5]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[5]).longDesc + '</div></div>';
            summonerListHtml += '</div>'
            summonerListHtml += '</div>'

            summonerListHtml += '<div class="flex-column">'
            summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[6]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[6]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[6]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[7]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[7]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[7]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + getCDNImageUrl(runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[8]).iconPath) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[8]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[8]).longDesc + '</div></div>';
            summonerListHtml += '</div>';
            summonerListHtml += '</div>';
        }
        summonerListHtml += '</div>';

        /* Items Timeline */
        let sortedItemEvents = groupByTimestamp(summoner.itemEvents);
        summonerListHtml += '<div class="timeline-item flex-row">';
        summonerListHtml += '<div class="dropdown-title">Example Item Timeline</div>';
        sortedItemEvents.forEach((e, index, array) => {
            summonerListHtml += '<div class="item-timeline-item">';
            e.forEach(item => {
                let itemInfo = itemsJson.find(x => x.id == item.itemId);
                if (itemInfo) {
                    summonerListHtml += '<div class="item-img"><img class="item-img" src="' + getCDNImageUrl('img/item/' + item.itemId + '.png') + '"/>';
                    summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + itemInfo.name + '</span><hr/>' + itemInfo.description + '</div></div>';
                } else {
                    console.log({ ItemInfo: item.itemId });
                }
            })
            summonerListHtml += '<div class="item-timeline-time">' + convertTimestampToMinutesAndSeconds(e[0].timestamp) + '</div>';
            summonerListHtml += '</div>';
            if (index !== array.length - 1) {
                summonerListHtml += '<div>&#8594;</div>';
            }
        })
        summonerListHtml += '</div>';

        /* Drop down end */
        summonerListHtml += '</div>';

    })
    document.getElementById('players-list').innerHTML = summonerListHtml;
}

function fetchSummoners() {

    let spinner = `<svg width="64" height="64" fill="cyan" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_zWVm{animation:spinner_5QiW 1.2s linear infinite,spinner_PnZo 1.2s linear infinite}.spinner_gfyD{animation:spinner_5QiW 1.2s linear infinite,spinner_4j7o 1.2s linear infinite;animation-delay:.1s}.spinner_T5JJ{animation:spinner_5QiW 1.2s linear infinite,spinner_fLK4 1.2s linear infinite;animation-delay:.1s}.spinner_E3Wz{animation:spinner_5QiW 1.2s linear infinite,spinner_tDji 1.2s linear infinite;animation-delay:.2s}.spinner_g2vs{animation:spinner_5QiW 1.2s linear infinite,spinner_CMiT 1.2s linear infinite;animation-delay:.2s}.spinner_ctYB{animation:spinner_5QiW 1.2s linear infinite,spinner_cHKR 1.2s linear infinite;animation-delay:.2s}.spinner_BDNj{animation:spinner_5QiW 1.2s linear infinite,spinner_Re6e 1.2s linear infinite;animation-delay:.3s}.spinner_rCw3{animation:spinner_5QiW 1.2s linear infinite,spinner_EJmJ 1.2s linear infinite;animation-delay:.3s}.spinner_Rszm{animation:spinner_5QiW 1.2s linear infinite,spinner_YJOP 1.2s linear infinite;animation-delay:.4s}@keyframes spinner_5QiW{0%,50%{width:7.33px;height:7.33px}25%{width:1.33px;height:1.33px}}@keyframes spinner_PnZo{0%,50%{x:1px;y:1px}25%{x:4px;y:4px}}@keyframes spinner_4j7o{0%,50%{x:8.33px;y:1px}25%{x:11.33px;y:4px}}@keyframes spinner_fLK4{0%,50%{x:1px;y:8.33px}25%{x:4px;y:11.33px}}@keyframes spinner_tDji{0%,50%{x:15.66px;y:1px}25%{x:18.66px;y:4px}}@keyframes spinner_CMiT{0%,50%{x:8.33px;y:8.33px}25%{x:11.33px;y:11.33px}}@keyframes spinner_cHKR{0%,50%{x:1px;y:15.66px}25%{x:4px;y:18.66px}}@keyframes spinner_Re6e{0%,50%{x:15.66px;y:8.33px}25%{x:18.66px;y:11.33px}}@keyframes spinner_EJmJ{0%,50%{x:8.33px;y:15.66px}25%{x:11.33px;y:18.66px}}@keyframes spinner_YJOP{0%,50%{x:15.66px;y:15.66px}25%{x:18.66px;y:18.66px}}</style><rect class="spinner_zWVm" x="1" y="1" width="7.33" height="7.33"/><rect class="spinner_gfyD" x="8.33" y="1" width="7.33" height="7.33"/><rect class="spinner_T5JJ" x="1" y="8.33" width="7.33" height="7.33"/><rect class="spinner_E3Wz" x="15.66" y="1" width="7.33" height="7.33"/><rect class="spinner_g2vs" x="8.33" y="8.33" width="7.33" height="7.33"/><rect class="spinner_ctYB" x="1" y="15.66" width="7.33" height="7.33"/><rect class="spinner_BDNj" x="15.66" y="8.33" width="7.33" height="7.33"/><rect class="spinner_rCw3" x="8.33" y="15.66" width="7.33" height="7.33"/><rect class="spinner_Rszm" x="15.66" y="15.66" width="7.33" height="7.33"/></svg>`;
    document.getElementById('players-list').innerHTML = '<div><div class="loader">' + spinner + '</div><h2>Fetching Players<span class="loading-dots"></span></h2></div>';


    // const apiUrl = `http://localhost:3000/summoners`;
    const apiUrl = 'https://getsummoners.azurewebsites.net/api/HttpTrigger1?code=pwBP6CP0m7dXL-Jr5z355I0O9XN3mHvsTy3MJUiMwXvwAzFu8PeHcw==';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log({ ResponseData: data });
            data = finalPlayerStats(data);
            allSummonerData = data;

            // Starting list
            createPlayerList(data);
            // Set date aquired
            document.getElementById('date-ran').innerHTML = data[0].dateAquired;

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

}

// Checkbox / Radio buttons
document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        createPlayerList(allSummonerData);
    });
});

// Event listener for radio button
document.querySelectorAll('input[name="option"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
        createPlayerList(allSummonerData);
    });
});

// Even listener drop down
const roleDropdown = document.getElementById('role-dropdown');
roleDropdown.addEventListener('change', () => {
    createPlayerList(allSummonerData);
});

// Initialize with external data first, then fetch summoners
initializeData();