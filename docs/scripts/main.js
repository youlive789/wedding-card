// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
d = new Date();
$(document).ready(function () {
    $(".grm_account_bank").html("KB국민");
    $(".brd_account_bank").html("NH농협");
    $(".grm_account_num").text("208401 04 273636");
    $(".brd_account_num").text("811091 52 0822 56");
    $(".GroomAccountName").text("박종국");
    $(".BrideAccountName").text("임헌호");
    $(".GroomAccountRelation").text("혼주");
    $(".BrideAccountRelation").text("혼주");

    $(".grm_account_bank2").html("우리");
    $(".brd_account_bank2").html("NH농협");
    $(".grm_account_num2").text("1002 741 237704");
    $(".brd_account_num2").text("312 0204 6512 61");
    $(".GroomAccountName2").text("박현준");
    $(".BrideAccountName2").text("임은민");
    $(".GroomAccountRelation2").text("신랑");
    $(".BrideAccountRelation2").text("신부");


    if ($.trim("혼주") != "") {
        $(".GroomAccountRelationArea").show();
    } else {
        $(".GroomAccountRelationArea").hide();
    }

    if ($.trim("혼주") != "") {
        $(".GroomAccountRelationArea2").show();
    } else {
        $(".GroomAccountRelationArea2").hide();
    }

    if ($.trim("혼주") != "") {
        $(".BrideAccountRelationArea").show();
    } else {
        $(".BrideAccountRelationArea").hide();
    }

    if ($.trim("신부") != "") {
        $(".BrideAccountRelationArea2").show();
    } else {
        $(".BrideAccountRelationArea2").hide();
    }


    if ($.trim("박종국") != "") {
        $(".GroomAccountNameArea").show();
    } else {
        $(".GroomAccountNameArea").hide();
    }

    if ($.trim("박현준") != "") {
        $(".GroomAccountNameArea2").show();
    } else {
        $(".GroomAccountNameArea2").hide();
    }

    if ($.trim("임헌호") != "") {
        $(".BrideAccountNameArea").show();
    } else {
        $(".BrideAccountNameArea").hide();
    }

    if ($.trim("임은민") != "") {
        $(".BrideAccountNameArea2").show();
    } else {
        $(".BrideAccountNameArea2").hide();
    }


    if ("Y" == "Y" || "Y" == "Y" || "Y" == "Y" || "Y" == "Y") {
        $(".remittance").show();
        $("#remittance").show();
    } else {
        $(".remittance").hide();
        $("#remittance").hide();
    }

    if ("Y" == "Y" || "Y" == "Y") {
        $(".btn_bx_1").show();
        $("#btn_bx_1").show();

        if ("Y" == "Y") {
            $(".re_grm_1").show();
        } else {
            $(".re_grm_1").hide();
        }
        if ("Y" == "Y") {
            $(".re_grm_2").show();
        } else {
            $(".re_grm_2").hide();
        }
    } else {
        $(".btn_bx_1").hide();
        $("#btn_bx_1").hide();
    }

    if ("Y" == "Y" || "Y" == "Y") {
        $(".btn_bx_2").show();
        $("#btn_bx_2").show();

        if ("Y" == "Y") {
            $(".re_brd_1").show();
        } else {
            $(".re_brd_1").hide();
        }
        if ("Y" == "Y") {
            $(".re_brd_2").show();
        } else {
            $(".re_brd_2").hide();
        }

    } else {
        $(".btn_bx_2").hide();
        $("#btn_bx_2").hide();
    }
});

//초기화
$('#remittance_pop_h').hide();
$('#remittance_pop_w').hide();

// 팝업
$(function () {
    $('.h_btn').click(function () {
        $('#remittance_pop_h').show();
        //$('.remittance_pop_h').show();
    });
    $('.w_btn').click(function () {
        $('#remittance_pop_w').show();
        //$('.remittance_pop_w').show();
    });
    $('.close_btn').click(function () {
        $('#remittance_pop_h, #remittance_pop_w').hide();
        //$('.remittance_pop_h, .remittance_pop_w').hide();
    });
});

//복사
function copyToClipboard(elementId) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("복사되었습니다.");
}

// 네이버 맵
var elluce = new naver.maps.LatLng(37.471108, 126.629816)
var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.471108, 126.629816),
    zoom: 17,
    minZoom: 8, //지도의 최소 줌 레벨
    zoomControl: true, //줌 컨트롤의 표시 여부
    zoomControlOptions: { //줌 컨트롤의 옵션
        position: naver.maps.Position.TOP_RIGHT
}});
var marker = new naver.maps.Marker({
    icon: {
        url: "./heart-icon.png",
        scaledSize: new naver.maps.Size(30, 37),
        origin: new naver.maps.Point(0, 0),
    },
    position: elluce,
    map: map
});

var contentString = [
'<div class="iw_inner gsap-opacity" style="padding:5px; margin: 5px 0px 5px 0px; width: 155px; height: 55px; text-align: center; ">',
'   <p style="foint-size: 2rem; margin: 0;">주교좌 답동성당</p>',
'   <p style="font-size: 0.8rem; margin: 0;">인천 중구 우현로50번길 2</p>',
'</div>'
].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString,
    maxWidth: 200,
    height: 50,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    disableAnchor: true,
    textAlign: "center",
    margin: "auto",

    pixelOffset: new naver.maps.Point(0, -5)
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
});

infowindow.open(map, marker);

// floating button
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}