const content = [
    {
        title: 'Konflikte zwischen Römern und Juden',
        paragraphs: [
            'Die Konflikte zwischen Römern und Juden waren tief verwurzelt und vielschichtig, wobei die Religion eine zentrale Rolle spielte. Die Zeloten, eine Gruppe radikaler jüdischer Widerstandskämpfer, strebten nach der Wiederherstellung der Unabhängigkeit Judäas und wurden durch Endzeitvisionen angetrieben, die das baldige Erscheinen des Messias und die Wiedererrichtung des Reiches von David und Salomo prophezeiten.',
            imgToHTML('img-1'),
            'Ihr Kampf richtete sich nicht nur gegen die Römer, sondern auch gegen die jüdischen Eliten, die mit den Römern zusammenarbeiteten. Diese “Kollaborateure” wurden ebenso gewaltsam bekämpft. Im Laufe des ersten nachchristlichen Jahrhunderts eskalierten die religiös motivierten Konflikte, was schließlich zum ersten römisch-jüdischen Krieg führte.',
            'Die Römer zeigten zeitweise wenig Respekt vor den Juden und ihren heiligen Traditionen. Um Unruhen zu verhindern, ließen sie an hohen jüdischen Feiertagen Truppen aufmarschieren, was jedoch oft zu weiteren Unruhen führte. Wirtschaftliche Schwierigkeiten verschärften die Beziehungen zusätzlich. Die Juden mussten sowohl für den Tempel und das Kultpersonal als auch für die Römer Steuern zahlen, was zu hoher Verschuldung und Armut führte.',
            'Insgesamt war die Beziehung zwischen Römern und Juden von tiefgreifenden Konflikten geprägt, die sowohl religiöse, politische als auch wirtschaftliche Ursachen hatten. Diese Konflikte führten zu einer angespannten und oft gewalttätigen Atmosphäre, die das Leben in dieser Zeit stark prägte.',
        ]
    },
    {
        title: 'Beginn der römischen Herrschaft',
        paragraphs: [
            'Die Herrschaftsgeschichte des Nahen Ostens begann nicht erst mit den Römern, doch ihre Eroberung des westlichen Vorderasiens im Jahr 63 v. Chr. prägte die Region etwa 700 Jahre lang. Besonders das unruhige Judäa mit Jerusalem stellte für das Römische Reich eine Herausforderung dar. Pompeius ordnete den gesamten Osten neu und gründete die Provinz Syrien, was das Ende der Unabhängigkeit des jüdischen Staates bedeutete.',
            'Innere Konflikte innerhalb der Hasmonäer-Dynastie erleichterten die römische Herrschaft, und nach dem Tod von Salome Alexandra kam es zu Machtkämpfen zwischen ihren Söhnen Aristobul II. und Hyrkan II. Pompeius intervenierte militärisch, eroberte Jerusalem nach einer dreimonatigen Belagerung und betrat das Allerheiligste des Tempels, was Empörung in der jüdischen Bevölkerung auslöste. Dies markierte den Beginn der römischen Herrschaft in Judäa, begleitet von einem antijüdischen Akt, der religiöse Gefühle verletzte.',
        ]
    },
    {
        title: 'Römisch-jüdische Kriege',
        paragraphs: [
            '66 n.Chr. besiegten religiös motivierte, radikale Juden die römische Besatzung. Da es aber einen Machtkampf innerhalb der Juden gab, entstand ein Bürgerkrieg. Durch diesen geschwächt verloren die jüdischen Kämpfer 70 n.Chr. nach langen, beidseitig verlustreichen Kämpfen Jerusalem an die römischen Besatzer. Diese eroberten nicht nur Jerusalem, sondern plünderten und zerstörten den dortigen Tempel, der damals die zentrale jüdische Kulturstätte darstellte. Einzig eine Mauer verblieb: Die heutige Klagemauer.',
            imgToHTML('img-2'),
            'Der jüdische Widerstand wurde erst 74 n.Chr. entgültig niedergeschlagen. Bei dem Kampf um die Festung Massada begingen die knapp tausend Verteidiger Selbstmord, um der römischen Gefangenschaft zu entgehen. 132-135 n.Chr. gab es einen zweiten jüdisch-römischen Krieg, der ebenfalls wieder in der Rückeroberung der jüdischen Gebiete durch die Römer endete.',
            imgToHTML('img-0')
        ]
    }
];

function imgToHTML(... src) {
    return `
        <div class="img-selection">
            ${
                src.map(s => `
                    <img class="image" src="img/${s}.webp"></img>
                `)
            }
        </div>
    `;
}

function load() {
    for (const x of document.getElementById('main-content').children) {
        if (x.classList.contains('bubble')) {
            const c = content[Number.parseInt(x.id[1])];

            x.innerHTML += `
                <div class="bubble-title-label">${c.title}</div>
                <div class="bubble-text">${c.paragraphs[0]}</div>
            `;
        }
    }
}

function showContent(sender) {
    const c = content[sender.id[1]];

    const ctbc = document.getElementById('content-textbox-content');
    ctbc.innerHTML = `
        <div class="content-title-label">${c.title}</div>
    `;

    for (const p of c.paragraphs) {
        ctbc.innerHTML += `
            <div class="content-paragraph">${p}</div>
        `;
    }

    document.getElementById('content-box-container').hidden = false;
}

function hideContent() {


    document.getElementById('content-box-container').hidden = true;
}