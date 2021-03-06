var cases;
var density;
var population;

$(document).ready(function () {

    $('#enchant-stage').hide(); //enchant.js部分を隠す
    $("#map").hide(); //mapを隠す

    $('#inner1').on('click', function () {
        $("#outer1").hide(); //コンテンツを隠す
        $("#map").show(); //mapを表示
    });

    $("#jmap").jmap({
        width: "100vw",
        height: "100vh",
        prefectureLineHoverColor: "#fff",
        fontSize: "0.8rem",
        fontColor: "#000",
        areas: [
            { code: 1, name: "北海道", color: "#7f7eda", hoverColor: "#b3b2ee" },
            { code: 2, name: "青森", color: "#759ef4", hoverColor: "#98b9ff" },
            { code: 3, name: "岩手", color: "#759ef4", hoverColor: "#98b9ff" },
            { code: 4, name: "宮城", color: "#759ef4", hoverColor: "#98b9ff" },
            { code: 5, name: "秋田", color: "#759ef4", hoverColor: "#98b9ff" },
            { code: 6, name: "山形", color: "#759ef4", hoverColor: "#98b9ff" },
            { code: 7, name: "福島", color: "#759ef4", hoverColor: "#98b9ff" },
            { code: 8, name: "茨城", color: "#7ecfea", hoverColor: "#b7e5f4" },
            { code: 9, name: "栃木", color: "#7ecfea", hoverColor: "#b7e5f4" },
            { code: 10, name: "群馬", color: "#7ecfea", hoverColor: "#b7e5f4" },
            { code: 11, name: "埼玉", color: "#7ecfea", hoverColor: "#b7e5f4" },
            { code: 12, name: "千葉", color: "#7ecfea", hoverColor: "#b7e5f4" },
            { code: 13, name: "東京", color: "#7ecfea", hoverColor: "#b7e5f4" },
            { code: 14, name: "神奈川", color: "#7ecfea", hoverColor: "#b7e5f4" },
            { code: 15, name: "新潟", color: "#7cdc92", hoverColor: "#aceebb" },
            { code: 16, name: "富山", color: "#7cdc92", hoverColor: "#aceebb" },
            { code: 17, name: "石川", color: "#7cdc92", hoverColor: "#aceebb" },
            { code: 18, name: "福井", color: "#7cdc92", hoverColor: "#aceebb" },
            { code: 19, name: "山梨", color: "#7cdc92", hoverColor: "#aceebb" },
            { code: 20, name: "長野", color: "#7cdc92", hoverColor: "#aceebb" },
            { code: 21, name: "岐阜", color: "#7cdc92", hoverColor: "#aceebb" },
            { code: 22, name: "静岡", color: "#7cdc92", hoverColor: "#aceebb" },
            { code: 23, name: "愛知", color: "#7cdc92", hoverColor: "#aceebb" },
            { code: 24, name: "三重", color: "#ffe966", hoverColor: "#fff19c" },
            { code: 25, name: "滋賀", color: "#ffe966", hoverColor: "#fff19c" },
            { code: 26, name: "京都", color: "#ffe966", hoverColor: "#fff19c" },
            { code: 27, name: "大阪", color: "#ffe966", hoverColor: "#fff19c" },
            { code: 28, name: "兵庫", color: "#ffe966", hoverColor: "#fff19c" },
            { code: 29, name: "奈良", color: "#ffe966", hoverColor: "#fff19c" },
            { code: 30, name: "和歌山", color: "#ffe966", hoverColor: "#fff19c" },
            { code: 31, name: "鳥取", color: "#ffcc66", hoverColor: "#ffe0a3" },
            { code: 32, name: "島根", color: "#ffcc66", hoverColor: "#ffe0a3" },
            { code: 33, name: "岡山", color: "#ffcc66", hoverColor: "#ffe0a3" },
            { code: 34, name: "広島", color: "#ffcc66", hoverColor: "#ffe0a3" },
            { code: 35, name: "山口", color: "#ffcc66", hoverColor: "#ffe0a3" },
            { code: 36, name: "徳島", color: "#fb9466", hoverColor: "#ffbb9c" },
            { code: 37, name: "香川", color: "#fb9466", hoverColor: "#ffbb9c" },
            { code: 38, name: "愛媛", color: "#fb9466", hoverColor: "#ffbb9c" },
            { code: 39, name: "高知", color: "#fb9466", hoverColor: "#ffbb9c" },
            { code: 40, name: "福岡", color: "#ff9999", hoverColor: "#ffbdbd" },
            { code: 41, name: "佐賀", color: "#ff9999", hoverColor: "#ffbdbd" },
            { code: 42, name: "長崎", color: "#ff9999", hoverColor: "#ffbdbd" },
            { code: 43, name: "熊本", color: "#ff9999", hoverColor: "#ffbdbd" },
            { code: 44, name: "大分", color: "#ff9999", hoverColor: "#ffbdbd" },
            { code: 45, name: "宮崎", color: "#ff9999", hoverColor: "#ffbdbd" },
            { code: 46, name: "鹿児島", color: "#ff9999", hoverColor: "#ffbdbd" },
            { code: 47, name: "沖縄", color: "#eb98ff", hoverColor: "#f5c9ff" },
        ],
        onSelect: function (e, data) {
            density = population_data[data.code - 1]["density"] * 0.1;
            population = population_data[data.code - 1]["population"];

            console.log("密度" + density);
            console.log("人口" + population);
            console.log(population_data[data.code - 1]);

            // コロナデータを取得
            $.ajaxSetup({ async: false }); // 同期通信にする
            $.getJSON({
                url: "https://covid19-japan-web-api.vercel.app/api/v1/prefectures",
            }).done(function (result, status, xhr) {
                cases = result[data.code - 1]['cases']; //感染者数
                console.log("感染者数" + cases);
                console.log(result[data.code - 1]);
            }).fail(function (xhr, status, error) {
                // 取得できなかった時
            });
            $.ajaxSetup({ async: true }); // 非同期通信に戻す

            // console.log(data.alphabet); //アルファベットを表示
            $("#map").hide(); //mapを隠す
            $('#enchant-stage').show(); //enchant.js部分を表示
            start_game();
        },
    });
});
