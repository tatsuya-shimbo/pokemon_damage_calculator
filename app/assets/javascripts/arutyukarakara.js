$(function() {
  // 定義
  mineParameter(0);
  var baseAttack = $(".convey-attack-a").text()*1;
  var baseBlock = $(".convey-block-b").text()*1;
  attackCalculate(baseAttack);
  hpCalculate();
  blockCalculate(baseBlock);

  // .poke　高さ変更
  function heightChange() {
    var cssHeightA = $("#left-poke").find(".poke-form").css("height");
    var cssHeightB = $("#right-poke").find(".poke-form").css("height");
    cssHeightA = parseInt(cssHeightA);
    cssHeightB = parseInt(cssHeightB);
    var size = $("body").css("width");
    if (size >= 500) {
      if (cssHeightA > 640) {
        $("#left-poke").css("height", "auto");
      } else {
        $("#left-poke").css("height", "716px");
      }
    }
  }

  // ウィンドウズサイズによるレイアウト
  function layout() {
    var size = $("body").css("width");
    size = parseInt(size);
    if ($(".kougeki").text() == "攻撃") {
      if (size <= 500) {
        $("#center").before($("#right-poke"));
        $(".condition-center").before($(".condition-right"));
      }
      else if (size <= 1000) {
        $(".condition-center").after($(".condition-right"));
        $("#center").before($("#right-poke"));
      }
      else {
        $(".condition-center").after($(".condition-right"));
        $("#center").after($("#right-poke"));
      }
    }
  }

  layout();
  $(window).resize(layout);

  // 交代ボタン
  $(".btn-change-box").hover(function(){
    $(this).animate({
      "font-size": "18px",
      "margin-left": "4px",
      "margin-top": "1px"
    },300);
  },function(){
    $(this).animate({
      "font-size": "14px",
      "margin-left": "7px",
      "margin-top": "5px"
    },200);
  });

  // ナビモーダル
  $(".btn-menu").click(function(){
    if ($(this).hasClass("nav-open")) {
      $(this).removeClass("nav-open");
      $(".nav-modal").hide();
    }
    else {
      $(this).addClass("nav-open");
      $(".nav-modal").show();
    }
  });


  // タイプ変換
  function categoryChange(category){
    if (category == 0){
      return ""
    } else if (category == 1){
      return "ノーマル"
    } else if (category == 2){
      return "ほのお"
    } else if (category == 3){
      return "みず"
    } else if (category == 4){
      return "でんき"
    } else if (category == 5){
      return "くさ"
    } else if (category == 6){
      return "こおり"
    } else if (category == 7){
      return "かくとう"
    } else if (category == 8){
      return "どく"
    } else if (category == 9){
      return "じめん"
    } else if (category == 10){
      return "ひこう"
    } else if (category == 11){
      return "エスパー"
    } else if (category == 12){
      return "むし"
    } else if (category == 13){
      return "いわ"
    } else if (category == 14){
      return "ゴースト"
    } else if (category == 15){
      return "ドラゴン"
    } else if (category == 16){
      return "あく"
    } else if (category == 17){
      return "はがね"
    } else if (category == 18){
      return "フェアリー"
    }
  }

  // グループ変換
  function groupChange(group){
    if (group == 1){
      return "物理"
    } else if (group == 2){
      return "特殊"
    } else {
      return ""
    }
  }

  // ダイマックス威力変換
  function dynamaxPower(power, category, skill){
    if (skill == 12){
      return 130
    } else if (skill == 174){
      return 130
    } else if (skill == 25){
      return 130
    } else if (skill == 163){
      return 140
    } else if (skill == 309){
      return 95
    } else if (skill == 176){
      return 70
    } else if (skill == 203){
      return 80
    } else if (skill == 225){
      return 80
    } else if (skill == 311){
      return 90
    } else if (skill == 316){
      return 100
    } else if (skill == 265){
      return 100
    } else if (skill == 167){
      return 120
    } else if (skill == 310){
      return 130
    } else if (skill == 296){
      return 130
    } else if (skill == 159){
      return 130
    } else if (skill == 182){
      return 130
    } else if (skill == 136){
      return 130
    } else if (skill == 168){
      return 130
    } else if (skill == 69){
      return 130
    } else if (skill == 210){
      return 130
    } else if (skill == 169){
      return 140
    } else if (skill == 64){
      return 100
    } else if (skill == 83){
      return 100
    } else if (skill == 64){
      return 100
    } else if (skill == 282){
      return 100
    } else if (skill == 239){
      return 100
    } else if (skill == 222){
      return 100
    } else if (skill == 127){
      return 130
    } else if (skill == 73){
      return 130
    } else if (skill == 131){
      return 130
    } else if (skill == 359){
      return 130
    } else if (skill == 131){
      return 130
    } else if (skill == 286){
      return 130
    } else if (skill == 258){
      return 130
    } else if (skill == 360){
      return 75
    } else if (skill == 361){
      return 75
    } else if (skill == 362){
      return 100
    } else if (skill == 363){
      return 100
    } else if (skill == 364){
      return 100
    } else if (skill == 365){
      return 100
    } else if (skill == 366){
      return 100
    } else if (skill == 367){
      return 130
    } else if (skill == 368){
      return 130
    } else if (skill == 369){
      return 130
    } else if (skill == 370){
      return 130
    } else if (skill == 371){
      return 130
    } else {
      if (category != 7 && category != 8){
        if (power == 0){
          return 0
        } else if (10 <= power && power <= 40){
          return 90
        } else if (power <= 50){
          return 100
        } else if (power <= 60){
          return 110
        } else if (power <= 70){
          return 120
        } else if (power <= 100){
          return 130
        } else if (power <= 140){
          return 140
        } else if (power <= 250){
          return 150
        }
      } else if (category == 7 || category == 8){
        if (power == 0){
          return 0
        } else if (10 <= power && power <= 40){
          return 70
        } else if (power <= 50){
          return 75
        } else if (power <= 60){
          return 80
        } else if (power <= 70){
          return 85
        } else if (power <= 100){
          return 90
        } else if (power <= 140){
          return 95
        } else if (power <= 250){
          return 100
        }
      }
    }
  }

  // タイトルスクロール
  $(".title").click(function(){
    $("html, body").animate({
      "scrollTop" : "0px"
    },700)
  });

  // スイッチ
  $(".swich-box").click(function(){
    var swich = $(this).find(".convey").text()*1;
    if (swich == 0){
      $(this).find(".convey").text(1);
      $(this).find(".swich").removeClass("swich-off");
      $(this).find(".swich").addClass("swich-on");
    } else if (swich == 1){
      $(this).find(".convey").text(0);
      $(this).find(".swich").removeClass("swich-on");
      $(this).find(".swich").addClass("swich-off");
    }
    skillParameter();
    damageCalculate();
  });

  // 技　発動条件
  function skillSwich(){
    var skill = $("#skill").val()*1;
    $(".skill-power").hide();
    $(".skill-on").hide();
    $(".skill-times").hide();
    $(".skill-detail").hide();
    $(".skill-double").hide();
    $(".skill-double").find(".swich").removeClass("swich-on");
    $(".skill-double").find(".swich").addClass("swich-off");
    $(".skill-double").find(".convey").text(0);
    $(".skill-on").find(".swich").removeClass("swich-on");
    $(".skill-on").find(".swich").addClass("swich-off");
    $(".skill-on").find(".convey").text(0);
    if (skill != 3) {
      $("#skill-detail").val(0);
    }
    // 複数対象攻撃
    var format = $("#format").val()*1;
    var doubleArray = [23, 38, 93, 31, 37 , 94, 109, 144, 138, 95, 157, 165, 172, 201, 229, 236, 244, 249, 266, 273, 323, 303, 332, 336, 27, 126, 129, 130, 161, 223, 247, 255, 251, 272, 279, 283, 288]
    if (doubleArray.includes(skill) && format == 1) {
      $(".skill-double").css("display", "block");
    }
    // アシストパワー
    if (skill == 12) {
      $("#skill-power").val(20);
      $(".skill-power").css("display", "block");
    } // うずしお
    else if (skill == 26) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("相手がダイビング");
    } //エラがみ
    else if (skill == 36) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("先制攻撃");
    } // オーラぐるま
    else if (skill == 40) {
      $(".skill-detail").css("display", "block");
    } // かぜおこし
    else if (skill == 50) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("相手がそらをとぶ");
    } // かたきうち
    else if (skill == 51) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("味方が倒される");
    } // からげんき
    else if (skill == 58) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("状態異常");
    } // きしかいせい
    else if (skill == 64) {
      $("#skill-power").val(200);
      $(".skill-power").css("display", "block");
    } // ギアソーサー
    else if (skill == 65) {
      $(".skill-times").css("display", "block");
      skillTimes(2);
    } // くさのちかい
    else if (skill == 72) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("みず,ほのおのちかい");
    } // くさむすび
    else if (skill == 73) {
      $("#skill-power").val(120);
      $(".skill-power").css("display", "block");
    } // クロスサンダー
    else if (skill == 77) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("クロスフレイム");
    } // クロスフレイム
    else if (skill == 79) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("クロスサンダー");
    } // けたぐり
    else if (skill == 83) {
      $("#skill-power").val(120);
      $(".skill-power").css("display", "block");
    } // ころがる
    else if (skill == 98) {
      $("#skill-power").val(30);
      $(".skill-power").css("display", "block");
    } // しおみず
    else if (skill == 110) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("相手のHPが半分以下");
    } // しっぺがえし
    else if (skill == 113) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("後攻");
    } // じしん
    else if (skill == 126) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("相手があなをほる");
    } // じたばた
    else if (skill == 127) {
      $("#skill-power").val(200);
      $(".skill-power").css("display", "block");
    } // じだんだ
    else if (skill == 128) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("前ターンに技が失敗");
    } // ジャイロボール
    else if (skill == 131) {
      $("#skill-power").val(150);
      $(".skill-power").css("display", "block");
    } // スイープビンタ
    else if (skill == 136) {
      $(".skill-times").css("display", "block");
      skillTimes(5);
    } // たたりめ
    else if (skill == 156) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("相手が異常状態");
    } // たつまき
    else if (skill == 157) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("相手がそらをとぶ");
    } // タネマシンガン
    else if (skill == 159) {
      $(".skill-times").css("display", "block");
      skillTimes(5);
    } // ダブルアタック
    else if (skill == 167) {
      $(".skill-times").css("display", "block");
      skillTimes(2);
    } // ダブルチョップ
    else if (skill == 168) {
      $(".skill-times").css("display", "block");
      skillTimes(2);
    } // ダブルパンツァー
    else if (skill == 169) {
      $(".skill-times").css("display", "block");
      skillTimes(2);
    } // ダメおし
    else if (skill == 170) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("ダメージを受けている");
    } // つけあがる
    else if (skill == 174) {
      $("#skill-power").val(20);
      $(".skill-power").css("display", "block");
    } // つっぱり
    else if (skill == 176) {
      $(".skill-times").css("display", "block");
      skillTimes(5);
    } // つららばり
    else if (skill == 182) {
      $(".skill-times").css("display", "block");
      skillTimes(5);
    } // でんげきくちばし
    else if (skill == 189) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("先制攻撃");
    } // トリプルキック
    else if (skill == 203) {
      $("#skill-power").val(10);
      $(".skill-power").css("display", "block");
    } // ドラゴンアロー
    else if (skill == 210) {
      $(".skill-times").css("display", "block");
      skillTimes(2);
    } // ドラゴンダイブ
    else if (skill == 212) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("相手がちいさくなる");
    } // なげつける
    else if (skill == 222) {
      $("#skill-power").val(130);
      $(".skill-power").css("display", "block");
    } // なみのり
    else if (skill == 223) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("相手がダイビング");
    } // にどげり
    else if (skill == 225) {
      $(".skill-times").css("display", "block");
      skillTimes(2);
    } // のしかかり
    else if (skill == 232) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("相手がちいさくなる");
    } // はきだす
    else if (skill == 239) {
      $("#skill-power").val(300);
      $(".skill-power").css("display", "block");
    } // はたきおとす
    else if (skill == 241) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("相手が道具をもってる");
    } // ヒートスタンプ
    else if (skill == 258) {
      $("#skill-power").val(120);
      $(".skill-power").css("display", "block");
    } // ふくろだたき
    else if (skill == 265) {
      $("#skill-power").val(0);
      $(".skill-power").css("display", "block");
    } // ふくろだたき
    else if (skill == 267) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("相手がちいさくなる");
    } // プレゼント
    else if (skill == 282) {
      $("#skill-power").val(120);
      $(".skill-power").css("display", "block");
    } // ヘビーボンバー
    else if (skill == 286) {
      $("#skill-power").val(120);
      $(".skill-power").css("display", "block");
    } // ベノムショック
    else if (skill == 287) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("相手がどく状態");
    } // ほのおのちかい
    else if (skill == 293) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("くさ,みずのちかい");
    } // ボーンラッシュ
    else if (skill == 296) {
      $(".skill-times").css("display", "block");
      skillTimes(5);
    } // ミサイルばり
    else if (skill == 310) {
      $(".skill-times").css("display", "block");
      skillTimes(5);
    } // みずしゅりけん
    else if (skill == 311) {
      $(".skill-times").css("display", "block");
      skillTimes(5);
    } // みずのちかい
    else if (skill == 313) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("くさ,ほのおのちかい");
    } // みだれづき
    else if (skill == 315) {
      $(".skill-times").css("display", "block");
      skillTimes(5);
    } // みだれひっかき
    else if (skill == 316) {
      $(".skill-times").css("display", "block");
      skillTimes(5);
    } // ゆきなだれ
    else if (skill == 334) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("ダメージを受けている");
    } // リベンジ
    else if (skill == 342) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("ダメージを受けている");
    } // りんしょう
    else if (skill == 347) {
      $(".skill-on").css("display", "block");
      $(".attack-skill-explain").text("2回目以降");
    } // れんぞくぎり
    else if (skill == 351) {
      $("#skill-power").val(40);
      $(".skill-power").css("display", "block");
    } // ロックブラスト
    else if (skill == 354) {
      $(".skill-times").css("display", "block");
      skillTimes(5);
    } // エレキボール
    else if (skill == 359) {
      $("#skill-power").val(150);
      $(".skill-power").css("display", "block");
    }
  }

  // 複数回攻撃　表示変更
  function skillTimes(times) {
    $("#skill-times").empty();
    for (var i=1; i<times; i++) {
      $("#skill-times").append("<option value=" + i + " hidden>" + i + "回</option>");
    }
    $("#skill-times").append("<option value=" + times + " hidden selected>" + times + "回</option>");

  }


  // 特性　発動条件
  function charaSwich(){
    var attackChara = $("#characteristic-attack").val();
    var blockChara = $("#characteristic-block").val();
    if (attackChara != 136) {
      $("#chara-detail").val(0);
    }
    $(".chara-detail").hide();
    $(".chara-on").hide();
    $(".chara-on").find(".swich").removeClass("swich-on");
    $(".chara-on").find(".swich").addClass("swich-off");
    $(".chara-on").find(".convey").text(0);
    // しんりょく
    if (attackChara == 80){
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("HPが1/3以下");
    } // アナライズ
    else if (attackChara == 7) {
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("最後に攻撃");
    } // かたいツメ
    else if (attackChara == 38) {
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("直接攻撃");
    } // げきりゅう
    else if (attackChara == 63) {
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("HPが1/3以下");
    } // もうか
    else if (attackChara == 237) {
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("HPが1/3以下");
    } // ちからずく
    else if (attackChara == 120) {
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("追加効果あり");
    } // とうそうしん
    else if (attackChara == 136) {
      $(".chara-detail").css("display", "block");
    } // どくぼうそう
    else if (attackChara == 141) {
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("どく, もうどく");
    } // はりこみ
    else if (attackChara == 165) {
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("相手が交代");
    } // むしのしらせ
    else if (attackChara == 231) {
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("HPが1/3以下");
    } //もらいび(攻撃)
    else if (attackChara == 240) {
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("炎技をうける");
    } // こんじょう
    else if (attackChara == 65) {
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("状態異常");
    } // スロースタート
    else if (attackChara == 104) {
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("最初の5ターン");
    } // よわき
    else if (attackChara == 250) {
      $(".attack-on").css("display", "block");
      $(".attack-chara-explain").text("HPが半分以下");
    }
    // ふしぎなうろこ
    if (blockChara == 188) {
      $(".block-on").css("display", "block");
      $(".block-chara-explain").text("状態異常");
    } // もふもふ
    else if (blockChara == 239) {
      $(".block-on").css("display", "block");
      $(".block-chara-explain").text("直接攻撃");
    }
  }

  // 対戦形式
  var formatBox = $(".format").find(".dropdown");
  $(document).on("click", formatBox, function(){
    var format = $("#format").val()*1;
    if (format == 0) {
      $(".swich-double").css("display", "none");
      $(".swich-double").find(".convey").text(0);
      $(".swich-double").find(".swich").removeClass("swich-on");
      $(".swich-double").find(".swich").addClass("swich-off");
    } else if (format == 1) {
      $(".swich-double").css("display", "block");
    }
  });

  // タイプ相性
  function typeCompatibility(category){
    var attackCategory = category
    var blockCategory1 = $(".convey-block-category1").text()*1;
    var blockCategory2 = $(".convey-block-category2").text()*1;
    var id1 = 19 * attackCategory + blockCategory1;
    var id2 = 19 * attackCategory + blockCategory2;
    var attackChara = $("#characteristic-attack").val()*1;
    var compatibilityArray = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 2, 2, 1, 2, 2, 2, 1, 1, 2, 4, 4, 2, 2, 2, 2, 2, 4, 1, 2, 1, 2, 4, 2, 2, 2, 4, 1, 2, 1, 2, 2, 2, 4, 2, 2, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 4, 1, 1, 2, 2, 2, 0, 4, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 4, 2, 1, 2, 2, 1, 4, 1, 2, 1, 4, 2, 1, 2, 1, 2, 2, 2, 1, 1, 2, 4, 1, 2, 2, 4, 4, 2, 2, 2, 2, 4, 2, 1, 2, 2, 4, 2, 2, 2, 2, 4, 2, 1, 2, 1, 1, 1, 4, 0, 2, 4, 4, 1, 2, 2, 2, 2, 2, 4, 2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 0, 4, 2, 2, 4, 2, 4, 1, 2, 2, 4, 2, 0, 2, 1, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 1, 4, 2, 4, 2, 2, 2, 2, 4, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 1, 2, 2, 2, 2, 0, 1, 2, 2, 2, 1, 2, 2, 4, 2, 1, 1, 2, 1, 4, 2, 2, 1, 2, 4, 1, 1, 2, 2, 4, 2, 2, 2, 4, 1, 2, 1, 4, 2, 4, 2, 2, 2, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 0, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 4, 2, 2, 4, 2, 1, 2, 1, 2, 2, 1, 1, 1, 2, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 1, 4, 2, 2, 1, 2, 2, 2, 2, 4, 1, 2, 2, 2, 2, 2, 2, 4, 1, 2]

    $(".convey-compatibility").empty();
    // きもったま
    if (attackChara == 50 && (id1 == 33 || id1 == 147 || id2 == 33 || id2 == 147)){
      if (id1 == 33 || id1 == 147) {
        $(".convey-compatibility").append("2");
        $(".convey-compatibility").append(compatibilityArray[id2]);
      } else if (id2 == 33 || id2 == 147) {
        $(".convey-compatibility").append(compatibility[id1])
        $(".convey-compatibility").append("2");
      }
    } else {
      $(".convey-compatibility").append(compatibilityArray[id1]);
      $(".convey-compatibility").append(compatibilityArray[id2]);
    }
    setTimeout(damageCalculate, 50);
  }

  // ログインモーダル
  $(".login").click(function(){
    $(".login-modal").fadeIn();
    $(".login-close").fadeIn();
    $(".login-modal").find(".login-first").focus();
  });

  $(".login-box").click(function(){
    $(this).find(".input-login").focus();
  });

  $(".login-modal, .new-form, .mine-form").find(".input-login").focus(function(){
    $(this).parents(".login-main").css("border-bottom", "solid 1px #3097e6");
    $(this).parents(".login-box").css("color", "#2b86cc")
  });

  $(".login-modal").find(".input-login").blur(function(){
    $(this).parents(".login-main").css("border-bottom", "solid 1px #dddddd");
    $(this).parents(".login-box").css("color", "#555555");
  });

  $(".new-form, .mine-form").find(".input-login").blur(function(){
    $(this).parents(".login-main").css("border-bottom", "solid 1px #555555");
    $(this).parents(".login-box").css("color", "#555555");
  });

  $(".login-close").click(function(){
    $(".login-modal").fadeOut();
    $(".login-close").fadeOut();
  });

  // ログイン
  function hideFlash() {
    $(".flash").fadeOut("slow");
  }

  setTimeout(hideFlash,2000);

  // アカウント登録(マイン, ユーザ)
  $(".user-btn").click(function(){
    $("#user-form").submit();
    $("#mine-form").submit();
  });

  // ログインボタン
  $(".login-btn").click(function(){
    $("#login-form").submit();
  });

  // マイン登録
  $(".parameter-effort").click(function(){
    $(this).find(".effort-form").focus();
  });

  $(".effort-form").focus(function(){
    $(this).parent(".parameter-effort").css("border-bottom", "solid 1px #2b86cc")
  });

  $(".effort-form").blur(function(){
    $(this).parent(".parameter-effort").css("border-bottom", "solid 1px #555555")
  });



  // ポケモンモーダル
　$(".poke-name, .mine-pokemon, .mine-nature").click(function(){
    $(this).find(".label-left").css("color", "#2b86cc");
    $(this).find(".form-main").css("border-color", "#3097e6");
    $(this).next().fadeIn();
    $(this).parents(".poke-form").find(".modal-btn-close").fadeIn();
    $(this).next().next().fadeIn();
    $(".search-form").focus();
  });

  $(".btn-close").click(function(){
    var dynamaxId = $(this).parents(".poke").find(".convey-dynamax").text()*1;
    if (dynamaxId == 0){
      $(this).parents(".poke-form").find(".poke-name").find(".label-left").css("color", "#555555");
      $(this).parents(".poke-form").find(".poke-name").find(".form-main").css("border-color", "#dddddd");
    } else if (dynamaxId == 1){
      $(this).parents(".poke-form").find(".poke-name").find(".label-left").css("color", "#333333");
      $(this).parents(".poke-form").find(".poke-name").find(".form-main").css("border-color", "#333333");
    }
    $(".modal").fadeOut();
    $(".modal-btn-close").fadeOut();

  });

  //自動入力カット
  $('.search-form').attr('autocomplete', 'off');
  $(".input-number").attr("autocomplete", "off");
  $(".input-login").attr("autocomplete", "off");
  $(".mine-search").attr("autocomplete", "off");
  $(".effort-form").attr("autocomplete", "off");

  $(".search-form").on("keyup", function(){
    var input = $(this).val();
    input = input.replace(/[ぁ-ん]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + 0x60);
    });

    $.ajax({
      type: 'GET',
      url: '/',
      data: { keyword: input, mine: "`*OP`?SK?`O`" },
      dataType: 'json'
    })
    .done(function(data){
      $(".modal-select").empty();
      if (data.length !=0) {
        data.forEach(function(poke){
          $(".modal-select").append('<li class="select-item">' + poke.name + '</li>');
        })
      }
      else {
        $(".modal-select").append('<li>検索結果0件</li>');
      }
    })
    .fail(function(){
      alert('検索に失敗しました');
    })
  });

  // 種族値表示
  function pokemonBase(text) {
    $.ajax({
      type: 'GET',
      url: '/',
      data: { pokemon: text, mine: "9erhfos809" },
      dataType: 'json'
    })
    .done(function(data){
      $(".pokemon-id-form").val("");
      data.forEach(function(pokemon){
        $(".pokemon-id-form").val(pokemon.id);
        $(".pokemon-value").text(text);
        $(".mine-hp").find(".parameter-base").text(pokemon.hit_point);
        $(".mine-attack").find(".parameter-base").text(pokemon.attack);
        $(".mine-block").find(".parameter-base").text(pokemon.block);
        $(".mine-contact").find(".parameter-base").text(pokemon.contact);
        $(".mine-defense").find(".parameter-base").text(pokemon.defense);
        $(".mine-speed").find(".parameter-base").text(pokemon.speed);
      })
      if ($(".convey-show").text()*1 == 0) {
        $(".mine-name").find(".input-login").val(text);
      }
      for (var i = 0; i < realArray.length; i++) {
        realCalculate(realArray[i], i);
      }
    })
    .fail(function(){
      alert('通信に失敗しました');
    })
  }

  // 最初の選択
  var text = $(".convey-mine-pokemon").text().replace(/\r?\n/g, '').trim();
  pokemonBase(text);

  // 選択
  $(document).on("click", ".select-item", function(){
    var text = $(this).text();
    var select = $(this).parent(".modal-select").prev().find(".search-form");
    $(select).val(text);
    $(select).parent("form").submit();

    $(".modal").fadeOut();
    $(".mine-modal-close").fadeOut();

    var modal = $(this).parents(".modal");
    if (modal.hasClass("pokebase")) {
      pokemonBase(text);
    }
  });

  // 実数値計算(マイン)
  var realArray = [".mine-hp", ".mine-attack", ".mine-block", ".mine-contact", ".mine-defense", ".mine-speed"]
  $(".effort-form").change(function(){
    for (var i = 0; i < realArray.length; i++) {
      realCalculate(realArray[i], i);
    }
  });

  function realCalculate(mine, num) {
    var base = $(mine).find(".parameter-base").text()*1;
    if (base != 0) {
      var nature = $(".nature-correction").text().replace(/\r?\n/g, '').trim();
      if (nature == 1) {
        nature = "000000";
      }
      natureArray = nature.split("");
      var correction = natureArray[num];
      if (correction == 0) {
        correction = 1.0;
        $(".parameter-label").eq(num*1 + 1).css("color", "#555555");
      } else if (correction == 1) {
        correction = 1.1;
        $(".parameter-label").eq(num*1 + 1).css("color", "#d91a40");
      } else if (correction == 2) {
        correction = 0.9;
        $(".parameter-label").eq(num*1 + 1).css("color", "#24d3ff");
      }
      var effort = $(mine).find(".effort-form").val()*1;
      if (mine == ".mine-hp") {
        var real = (base + 31/2 + effort/8 + 60);
      } else {
        var real = (base + 31/2 + effort/8 + 5) * correction;
      }
      real = Math.floor(real);
      $(mine).find(".parameter-real").text(real);
    }
  }

  // 性格(マイン)
  $(document).on("click", ".tab-i", function(){
    var text = $(this).text();
    pokemonNature(text);
  });

  function pokemonNature(text){


    $(".modal").fadeOut();
    $(".mine-modal-close").fadeOut();

    $.ajax({
      type: 'GET',
      url: '/',
      data: { nature: text, mine: "J0)*M?S`#@tぽ" },
      dataType: 'json'
    })
    .done(function(data){
      $(".nature-id-form").val("");
      data.forEach(function(nature){
        $(".nature-id-form").val(nature.id);
        $(".nature-value").text(text);
        $(".nature-correction").text(nature.value);
      })
      for (var i = 0; i < realArray.length; i++) {
        realCalculate(realArray[i], i);
      }
    })
    .fail(function(){
      alert('通信に失敗しました');
    })
  }

  // マインモーダル
  $(".btn-use").click(function(){
    $(this).next().fadeIn();
    $(this).next().next().fadeIn();
    $(".mine-search").focus();
  });

  $(".mine-search").focus(function(){
    $(this).parents(".mine-search-form").css("border-bottom", "solid 1px #555555");
  });

  $(".mine-search").blur(function(){
    $(this).parents(".mine-search-form").css("border-bottom", "solid 1px #dddddd");
  });

  $(".mine-close").click(function(){
    $(".mine-modal").fadeOut();
    $(".mine-close-btn").fadeOut();
  });

  $(".mine-search").on("keyup", function(){
    var text = $(this).val();

    $.ajax({
      type: 'GET',
      url: '/',
      data: { mine: text, keyword: "0" },
      dataType: 'json'
    })
    .done(function(data){
      $(".mine-select").empty();
      if (data.length !=0) {
        data.forEach(function(mine){
          $(".mine-select").append('<li class="mine-item">' + mine.name + '<span>' + mine.id + '</span></li>');
        })
      }
      else {
        $(".mine-select").append("<li>検索結果0件</li>");
      }
    })
    .fail(function(){
      alert('検索に失敗しました');
    })
  });

  //マインモーダルクリック
  $(document).on("click", ".mine-item", function(){
    var form = $(this).parents(".poke-btns").find("form");
    var id = $(this).find("span").text();
    form.find(".mine-id-form").val(id);
    form.submit();
  });

  //マイン努力値
  function mineParameter(group, skill) {
    var attackMine = $(".convey-attack-mine").text()*1;
    var blockMine = $(".convey-block-mine").text()*1;
    var mineHp = $(".convey-block-hp").text()*1;
    var mineAttack = $(".convey-mine-attack").text()*1;
    var mineBlockA = $(".convey-mine-block-a").text()*1;
    var mineBlockB = $(".convey-mine-block-b").text()*1;
    var mineContact = $(".convey-mine-contact").text()*1;
    var mineDefense = $(".convey-mine-condefense").text()*1;
    var attackNature = $(".convey-attack-nature").text().replace(/\r?\n/g, '').trim();
    var attackArray = attackNature.split("");
    var blockNature = $(".convey-block-nature").text().replace(/\r?\n/g, '').trim();
    var blockArray = blockNature.split("");

    if (attackMine == 1) {
      if (group == 0 || group == 1 && skill != 298) {
        $("#effort-attack").val(mineAttack);
        if (attackArray[1] == 0){
          $("#correction-attack").val("1");
        } else if (attackArray[1] == 1){
          $("#correction-attack").val("1.1");
        } else if (attackArray[1] == 2) {
          $("#correction-attack").val("0.9");
        }
      }
      else if (group == 2) {
        $("#effort-attack").val(mineContact);
        if (attackArray[3] == 0){
          $("#correction-attack").val("1");
        } else if (attackArray[3] == 1){
          $("#correction-attack").val("1.1");
        } else if (attackArray[3] == 2) {
          $("#correction-attack").val("0.9");
        }
      }
      else if (skill == 298){
        $("#effort-attack").val(mineBlockA);
        if (attackArray[2] == 0){
          $("#correction-attack").val("1");
        } else if (attackArray[2] == 1){
          $("#correction-attack").val("1.1");
        } else if (attackArray[2] == 2) {
          $("#correction-attack").val("0.9");
        }
      }
    }
    if (blockMine == 1) {
      $("#effort-hp").val(mineHp)
      if (skill == 104 || skill == 106 || skill == 123) {
        $("#effort-block").val(mineBlockB);
        if (attackArray[2] == 0){
          $("#correction-block").val("1");
        } else if (attackArray[2] == 1){
          $("#correction-attack").val("1.1");
        } else if (attackArray[2] == 2) {
          $("#correction-attack").val("0.9");
        }
      }
      else if (group == 0 || 1) {
        $("#effort-block").val(mineBlockB);
        if (blockArray[2] == 0){
          $("#correction-block").val("1");
        } else if (blockArray[2] == 1){
          $("#correction-block").val("1.1");
        } else if (blockArray[2] == 2) {
          $("#correction-block").val("0.9");
        }
      }
      else if (group == 2){
        $("#effort-block").val(mineDefense);
        if (blockArray[4] == 0){
          $("#correction-block").val("1");
        } else if (blockArray[4] == 1){
          $("#correction-block").val("1.1");
        } else if (blockArray[4] == 2) {
          $("#correction-block").val("0.9");
        }
      }
    }
  }







  // ダイマックス
  $(".kougeki, .bougyo").click(function(){
    var dynamax = $(this).parents(".poke");
    var attackPoke = dynamax.find(".convey-attack-poke").text()*1;
    var blockPoke = dynamax.find(".convey-block-poke").text()*1;
    var dynamaxId = dynamax.find(".convey-dynamax").text()*1;
    var pokeArray = [417, 418, 419, 420, 421];
    if (pokeArray.includes(attackPoke) || pokeArray.includes(blockPoke)){

    } else {
      if (dynamaxId == 0) {
        dynamax.find(".convey-dynamax").text("1");
        dynamax.css("background", "linear-gradient(to bottom right, #eeeeee, #ff9999");
        $(this).parent(".poke-title").css("border-bottom", "solid 2px #333333");
        dynamax.css("border", "solid 3px #fa16a7");
        dynamax.find("input").css("color", "#333333");
        dynamax.find("select").css("color", "#333333");
        dynamax.find(".form-box").css("color", "#222222");
        dynamax.find(".form-main").css("border-bottom", "solid 1px #333333");
        dynamax.find(".btn").css("border", "solid 1px #333333");
        dynamax.find(".btn").css("color", "#333333");
        dynamax.find(".swich").css("border", "solid 1px #333333");
        $(this).css("color", "transparent");
        $(this).css("background","linear-gradient(to bottom right, #e60505, #111111)");
        $(this).css("-webkit-background-clip", "text");
        $(this).animate({
          "font-size": "30px"
        }, 400);
      } else if (dynamaxId == 1) {
        dynamax.find(".convey-dynamax").text("0");
        dynamax.css("background", "#ffffff");
        $(this).parent(".poke-title").css("border-bottom", "solid 2px #dddddd");
        dynamax.css("border", "solid 1px #dddddd");
        dynamax.find("input").css("color", "#555555");
        dynamax.find("select").css("color", "#555555");
        dynamax.find(".form-box").css("color", "#555555");
        dynamax.find(".form-main").css("border-bottom", "solid 1px #dddddd");
        dynamax.find(".btn").css("border", "solid 1px #dddddd");
        dynamax.find(".btn").css("color", "#555555");
        dynamax.find(".swich").css("border", "solid 1px #dddddd");
        $(this).css("color", "#555555");
        $(this).css("background","null");
        $(this).css("-webkit-background-clip", "text");
        $(this).animate({
          "font-size": "25px"
        }, 400);
      }
      skillParameter();
      damageCalculate();
    }
  });

  // わざパラメーター表示
  function skillParameter(no){
    var select = $("#skill").children(" option:selected");
    var skill = $("#skill").val()*1;
    var attackChara = $("#characteristic-attack").val()*1;
    var category = select.attr("data-category")*1;
    var categoryWord = categoryChange(category);
    var group = select.attr("data-group")*1;
    var groupWord = groupChange(group);
    var power = select.attr("data-power")*1;
    var dynamaxAttack = $(".convey-attack-dynamax").text()*1;
    var dynamaxBlock = $(".convey-block-dynamax").text()*1;
    var maxPower = dynamaxPower(power, category, skill);
    var attackItem = $("#item-attack").val()*1;
    var skillOn = $(".convey-attack-skill").text()*1;
    // スカイスキン
    var skinArray = [91, 184, 196, 24];
    if (skinArray.includes(attackChara)) {
      if (attackChara == 91 && category == 1) {
        category = 10;
        $(".convey-attack-chara").text(1);
      } // フェアリースキン
      else if (attackChara == 184 && category == 1) {
        category = 18;
        $(".convey-attack-chara").text(1);
      } // フリーズスキン
      else if (attackChara == 196 && category == 1) {
        category = 6;
        $(".convey-attack-chara").text(1);
      } // エレキスキン
      else if (attackChara == 24 && category == 1) {
        category = 4;
        $(".convey-attack-chara").text(1);
      }
      else {
        $(".convey-attack-chara").text(0);
      }
    }
    // アクロバット
    if (skill == 11 && attackItem == 0) {
      power = power * 2;
    }
    // アシストパワー きしかいせい くさむすび けたぐり ころがる じたばた つけあがる トリプルキック なげつける はきだす ヒートスタンプ ふくろだたき プレゼント ヘビーボンバー れんぞくぎり エレキボール
    var skillArray =　[12, 64, 73, 83, 98, 127, 131, 174, 203, 222, 239, 258, 265, 282, 286, 351, 359];
    var skillPower = $("#skill-power").val()*1;
    if (skillArray.includes(skill) && skillPower != 0) {
      power = skillPower;
    }
    // くさのちかい　ほのおのちかい　みずのちかい
    var skillArray = [72, 293, 313]
    if (skillArray.includes(skill) && skillOn == 1) {
      power = 150;
    }
    // しっぺがえし じだんだ たたりめ タメおし ゆきなだれ　リベンジ りんしょう
    var skillArray = [113, 128, 156, 170, 334, 342, 347];
    if (skillArray.includes(skill) && skillOn == 1) {
      power = power * 2;
    }
    // オーラぐるま
    var oraCategory = $("#skill-detail").val()*1;
    if (skill == 40) {
      category = oraCategory;
      categoryWord = categoryChange(category);
    }
    // 対象が複数
    var skillDouble = $(".convey-skill-double").text()*1;
    if (skillDouble == 1) {
      power = power * 3 / 4;
      power = Math.round(power);
    }





    mineParameter(group, skill);
    hpCalculate(dynamaxBlock);
    heightChange();
    $(".skill-parameter").empty();
    if (category != 0){
      $(".skill-parameter").append('<span class="convey convey-skill-category">' + category + '</span>');
      if (dynamaxAttack == 0) {
        $(".skill-parameter").append(categoryWord);
        $(".skill-parameter").append(' - <span class="group-color">' + groupWord + '</span>');
        $(".skill-parameter").append('<span class="convey convey-skill-group">' + group + '</span>');
        $(".skill-parameter").append(' - <span class="power">' + power + '</span>');
      } else if (dynamaxAttack == 1) {
        $(".skill-parameter").append(categoryWord);
        $(".skill-parameter").append("(ダイマ)");
        $(".skill-parameter").append(' - <span class="group-color">' + groupWord + '</span>');
        $(".skill-parameter").append('<span class="convey convey-skill-group">' + group + '</span>');
        $(".skill-parameter").append(' - <span class="power">' + maxPower + '</span>');
        $(".skill-parameter").css("color", "#333333");
      }
      if (no == 1) {
        typeCompatibility(category);
      }

      if (group == 1){
        if (skill == 298) {
          var baseAttack = $(".convey-attack-b").text()*1;
          var baseBlock = $(".convey-block-b").text()*1;
          attackCalculate(baseAttack);
          blockCalculate(baseBlock);
          $(".attack-group").text("防御");
          $(".block-group").text("防御");
          $(".group-color").css("color", "#1da37b");
          $(".group-color-a").css("color", "#555555");
          $(".group-color-c").css("color", "#555555");
          $(".group-color-b").css("color", "#1da37b");
          $("#right-poke").find(".group-color-a").css("color", "#1da37b");
          $("#right-poke").find(".group-color-c").css("color", "#555555");
        } else {
          var baseAttack = $(".convey-attack-a").text()*1;
          var baseBlock = $(".convey-block-b").text()*1;
          attackCalculate(baseAttack);
          blockCalculate(baseBlock);
          $(".attack-group").text("攻撃");
          $(".block-group").text("防御");
          $(".group-color").css("color", "#1da37b");
          $(".group-color-a").css("color", "#1da37b");
          $(".group-color-b").css("color", "#555555");
          $(".group-color-c").css("color", "#555555");
        }
      }
      else if (group == 2){
        // サイコショック　サイコブレイク　しんぴのつるぎ
        if (skill == 104 || skill == 106 || skill == 123) {
          var baseAttack = $(".convey-attack-c").text()*1;
          var baseBlock = $(".convey-block-b").text()*1;
          attackCalculate(baseAttack);
          blockCalculate(baseBlock);
          $(".attack-group").text("特功");
          $(".block-group").text("防御");
          $(".attack-group").css("color", "#8890db");
          $(".group-color-a").css("color", "#555555");
          $(".group-color-b").css("color", "#555555");
          $(".group-color-c").css("color", "#8890db");
          $(".block-group").css("color", "#1da37b");
          $(".skill-parameter").find(".group-color").css("color", "#8890db");
          $("#right-poke").find(".group-color-a").css("color", "#1da37b");
          $("#right-poke").find(".group-color-c").css("color", "#555555");
        } else {
        var baseAttack = $(".convey-attack-c").text()*1;
        var baseBlock = $(".convey-block-d").text()*1;
        attackCalculate(baseAttack);
        blockCalculate(baseBlock);
        $(".attack-group").text("特攻");
        $(".block-group").text("特防");
        $(".group-color").css("color", "#8890db");
        $(".group-color-a").css("color", "#555555");
        $(".group-color-b").css("color", "#555555");
        $(".group-color-c").css("color", "#8890db");
        }
      }
    }
    else {
      $(".convey-compatibility").empty();
      var baseAttack = $(".convey-attack-a").text()*1;
      var baseBlock = $(".convey-block-b").text()*1;
      attackCalculate(baseAttack);
      blockCalculate(baseBlock);
      $(".attack-group").text("攻撃");
      $(".block-group").text("防御");
      $(".group-color").css("color", "#1da37b");
      $(".group-color-a").css("color", "#1da37b");
      $(".group-color-b").css("color", "#555555");
      $(".group-color-c").css("color", "#555555");
    }
  }

  // 数字フォーム
  $(".poke-effort, .poke-individual, .skill-power").click(function(){
    var focus = $(this).find(".input-number");
    var val = focus.val();
    focus.val("");
    focus.focus().val(val);
  });

  $(".input-number").focus(function(){
    $(this).parent(".form-main").css("border-bottom", "solid 1px #3097e6");
    $(this).parent().parent().css("color", "#2b86cc");
  });

  $(".input-number").blur(function(){
    var dynamaxId = $(this).parents(".poke").find(".convey-dynamax").text()*1;
    if (dynamaxId == 0){
      $(this).parent(".form-main").css("border-bottom", "solid 1px #dddddd");
      $(this).parents().css("color", "#555555");
    } else if (dynamaxId == 1){
      $(this).parent(".form-main").css("border-bottom", "solid 1px #333333");
      $(this).parents().css("color", "#333333");
    }
  });

  // 実数値計算
  function attackCalculate(baseAttack) {
    var effort = $("#effort-attack").val()*1;
    var individual = $("#individual").val()*1;
    var correction = $("#correction-attack").val()*1;
    var attack = (baseAttack + individual/2 + effort/8 + 5) * correction;
    var attackInt = parseInt(attack);
    $(".real-attack").empty();
    $(".real-attack").append(attackInt);
  }

  function hpCalculate(dynamaxBlock) {
    var effort = $("#effort-hp").val()*1;
    var base = $(".convey-block-h").text()*1;
    var hp = base + 31/2 + effort/8 + 60;
    hp = parseInt(hp);
    // ダイマックス
    if (dynamaxBlock == 1){
      hp = hp * 2
      hp = parseInt(hp);
    }
    // ヌケニン
    if (base == 1){
      hp = 1;
    }
    $(".real-hp").text(hp);
  }

  function blockCalculate(baseBlock) {
    var effort = $("#effort-block").val()*1;
    var correction = $("#correction-block").val()*1;
    var block = (baseBlock + 31/2 + effort/8 + 5) * correction;
    var blockInt = parseInt(block);
    $(".real-block").empty();
    $(".real-block").append(blockInt);
  }

  $("#individual, #effort-attack, #effort-block, #skill-power").on("change", function(){
    skillParameter();
    damageCalculate();
  });

  $("#effort-hp").on("change", function(){
    skillParameter();
    damageCalculate();
  });



  // ダメージ計算
  function damageCalculate() {
    $(".damage").empty();
    $(".percentage").empty();
    $(".confirm").empty();
    $(".random").empty();
    $(".detail-left").empty();
    $(".detail-right").empty();

    // 定義
    // 特性
    var attackChara = $("#characteristic-attack").val()*1;
    var attackCharaOn = $(".convey-attack-chara").text()*1;
    var attackCharaDetail = $("#chara-detail").val()*1;
    var blockChara = $("#characteristic-block").val()*1;
    var blockCharaOn = $(".convey-block-chara").text()*1;
    // かがくへんかガス
    if (attackChara == 35 || blockChara == 35) {
      attackChara = 0;
      blockChara = 0;
    }
    // かたやぶり
    if (attackChara == 39) {
      blockChara = 0;
    }

    // タイプ
    var attackCategory1 = $(".convey-attack-category1").text()*1;
    var attackCategory2 = $(".convey-attack-category2").text()*1;
    var blockCategory1 = $(".convey-block-category1").text()*1;
    var blockCategory2 = $(".convey-block-category2").text()*1;
    var skillCategory = $(".convey-skill-category").text()*1;
    var skill = $("#skill").val()*1;
    var skillOn = $(".convey-attack-skill").text()*1;
    var group = $(".convey-skill-group").text()*1;
    // へんげんじざい　リベロ
    if (attackChara == 204 || attackChara == 253) {
      attackCategory1 = skillCategory;
      attackCategory2 = 0;
    }

    // アイテム
    var attackItem = $("#item-attack").val()*1;
    var attackItemValue = $("#item-attack").children("option:selected").attr("data-value")*1;
    var blockItem = $("#item-block").val()*1;
    var blockItemValue = $("#item-block").children("option:selected").attr("data-value")*1;

    // タイプ相性
    var com = $(".convey-compatibility").text()*1;
    var com1 = Math.floor(com/10);
    var com2 = com - Math.floor(com/10)*10;
    var compatibility = com1 * com2 / 4;

    //　条件
    var format = $("#format").val()*1;
    var weather = $("#weather").val()*1;
    // ノーてんき エアロック
    if (attackChara == 151 || blockChara == 151 ||
    attackChara == 23 || blockChara == 23) {
      weather = 0
    }
    var field = $("#field").val()*1;
    var gravity = $(".convey-gravity").text()*1;

    // 攻撃条件
    var yakedo = $(".convey-attack-yakedo").text()*1;
    var tedasuke = $(".convey-attack-tedasuke").text()*1;
    var haganenoseisin = $(".convey-attack-haganenoseisin").text()*1;
    var battery = $(".convey-attack-battery").text()*1;
    var powerspot = $(".convey-attack-powerspot").text()*1;
    var attackFlowergift = $(".convey-attack-flowergift").text()*1;

    // 防御条件
    var rifureku = $(".convey-block-rifureku").text()*1;
    var hikarinokabe = $(".convey-block-hikarinokabe").text()*1;
    var mamoru = $(".convey-block-mamoru").text()*1;
    var blockFlowergift = $(".convey-block-flowergift").text()*1;
    var friendgard = $(".convey-block-friendgard").text()*1;

    // ダイマックス
    var dynamaxAttack = $(".convey-attack-dynamax").text()*1;
    var dynamaxBlock = $(".convey-block-dynamax").text()*1;

    // hp
    var hp = $(".real-hp").text()*1;

    // 攻撃
    var attack = $(".real-attack").text()*1;
    var attackRank = $("#rank-attack").val()*1;
    // てんねん
    if (blockChara == 132) {
      attackRank = 1;
    }
    var attackRankC = attackRank;
    if (attackRank < 1) {
      attackRankC = 1;
    }
    var attackC = attack * attackRankC;
    attack = attack * attackRank;
    attack = Math.floor(attack);
    attackC = Math.floor(attackC);
    // はりきり
    if (attackChara == 164 && group == 1) {
      attack = attack * 6144 / 4096;
      attack = Math.floor(attack);
      attackC = attackC * 6144 / 4096;
      attackC = Math.floor(attackC);
    }
    // 攻撃補正
    var attackCorrection = 4096;
    //　スロースタート
    if (attackChara == 104 && attackCharaOn == 1 && group == 1) {
      attackCorrection = attackCorrection * 2048 / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // よわき
    if (attackChara == 250 && attackCharaOn) {
      attackCorrection = attackCorrection * 2048 / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // フラワーギフト(攻撃)
    if (attackFlowergift == 1 && group == 1) {
      attackCorrection = attackCorrection * 6144 / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // こんじょう
    if (attackChara == 65 && group == 1 &&
    (yakedo == 1 || attackCharaOn == 1)){
      attackCorrection = attackCorrection * 6144 / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // しんりょく げきりゅう もうか　むしのしらせ
    if (((attackChara == 80 && skillCategory == 5) ||
    (attackChara == 63 && skillCategory == 3) ||
    (attackChara == 237 && skillCategory == 2) ||
    (attackChara ==231 && skillCategory == 12)) && attackCharaOn == 1) {
      attackCorrection = attackCorrection * 6144 / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // もらいび
    if (attackChara == 240 && attackCharaOn == 1 && skillCategory == 2) {
      attackCorrection = attackCorrection * 6144 / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // サンパワー
    if (weather == 1 && attackChara == 72 && group == 2) {
      attackCorrection = attackCorrection * 6144 / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // はがねつかい　ごりむちゅう
    if ((attackChara == 155 && skillCategory == 17) ||
    (attackChara == 66)) {
      attackCorrection = attackCorrection * 6144 / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // ちからもち　すいほう(水)　はりこみ
    if ((attackChara == 121 && group == 1) ||
    (attackChara == 90 && skillCategory == 3) ||
    (attackChara == 165 && attackCharaOn == 1)) {
      attackCorrection = attackCorrection * 8192 / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // あついしぼう
    if (blockChara == 5 && (skillCategory == 2 || skillCategory == 6)) {
      attackCorrection = attackCorrection * 2048 / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // すいほう(炎)
    if (attackChara == 90 && skillCategory == 2) {
      attackCorrection = attackCorrection * 2048 / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // こだわりアイテム
    if ((attackItem == 1 && group == 1) || (attackItem == 2 && group == 2) && (dynamaxAttack == 0)) {
      attackCorrection = attackCorrection * attackItemValue / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // 攻撃補正計算
    attack = attack * attackCorrection / 4096;
    attack = Math.ceil(attack - 0.5);
    attackC = attackC * attackCorrection / 4096;
    attackC = Math.ceil(attackC - 0.5);
    if (attack < 1) {
      attack = 1;
    }
    if (attackC < 1) {
      attackC = 1;
    }

    // 防御
    var block = $(".real-block").text()*1;
    var blockRank = $("#rank-block").val()*1;
    // てんねん
    if (attackRank == 132 || skill == 148) {
      blockRank = 1;
    }
    var blockRankC = blockRank;
    if (blockRankC > 1) {
      blockRankC = 1;
    }
    var blockC = block * blockRankC;
    block = block * blockRank;
    block = Math.floor(block);
    blockC = Math.floor(blockC);
    // すなあらし(いわ)
    if (weather == 4 && group == 2 && (blockCategory1 == 13 || blockCategory2 == 13)){
      block = block * 6144 / 4096;
      block = Math.floor(block);
      blockC = blockC * 6144 / 4096;
      blockC = Math.floor(blockC);
    }
    // 防御補正
    var blockCorrection = 4096;
    // フラワーギフト(防御)
    if (blockFlowergift == 1 && group == 2) {
      blockCorrection = blockCorrection * 6144 / 4096;
      blockCorrection = Math.round(blockCorrection);
    }
    // ふしぎなうろこ
    if (blockChara == 188 && group == 1 && blockCharaOn == 1) {
      blockCorrection = blockCorrection * 6144 / 4096;
      blockCorrection = Math.round(blockCorrection);
    }
    // くさのけがわ
    if (blockChara == 59 && field == 2) {
      blockCorrection = blockCorrection * 6144 / 4096;
      blockCorrection = Math.round(blockCorrection);
    }
    // ファーコート
    if (blockChara == 180 && group == 1) {
      blockCorrection = blockCorrection * 8192 / 4096;
      blockCorrection = Math.round(blockCorrection);
    }
    // しんかのきせき
    if (blockItem == 1){
      blockCorrection = blockCorrection * blockItemValue / 4096;
      blockCorrection = Math.round(blockCorrection);
    }
    // とつげきチョッキ
    if (blockItem == 2 && group == 2) {
      blockCorrection = blockCorrection * blockItemValue / 4096;
      blockCorrection = Math.round(blockCorrection);
    }
    // 防御補正計算
    block = block * blockCorrection / 4096;
    block = Math.ceil(block - 0.5);
    blockC = blockC * blockCorrection / 4096;
    blockC = Math.ceil(blockC - 0.5);
    if (block < 1) {
      block = 1;
    }
    if (blockC < 1) {
      blockC = 1;
    }

    // 威力
    var power = $(".power").text()*1;
    // 威力補正
    var powerCorrection = 4096;
    // とうそうしん(弱化)
    if (attackChara == 136 && attackCharaDetail == 2) {
      powerCorrection = powerCorrection * 3072 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // スカイスキン フェアリースキン フリーズスキン エレキスキン
    var confirmArray = [91, 184, 196, 24];
    if (dynamaxAttack == 0 && attackCharaOn == 1 && confirmArray.includes(attackChara)) {
      powerCorrection = powerCorrection * 4915 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // てつのこぶし
    var confirmArray = [63 ,82 ,218 ,97 ,118 ,252 ,280 ,294 ,348 ,325 ,254 ,307 ,169 ,2 ,57];
    if (attackChara == 127 && confirmArray.includes(skill)) {
      powerCorrection = powerCorrection * 4915 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // すてみ
    var confirmArray = [124, 140, 193, 331, 198, 29, 299, 356, 278, 271];
    if (attackChara == 95 && confirmArray.includes(skill)) {
      powerCorrection = powerCorrection * 4915 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // とうそうしん(強化)
    if (attackChara == 136 && attackCharaDetail == 1) {
      powerCorrection = powerCorrection * 5120 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // バッテリー
    if (battery == 1 && group == 2) {
      powerCorrection = powerCorrection * 5345 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // ちからずく
    if (attackChara == 120 && attackCharaOn == 1) {
      powerCorrection = powerCorrection * 5325 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // すなのちから
    if (attackChara == 100 && weather == 4 && (skillCategory == 9 || skillCategory == 13 || skillCategory == 17)) {
      powerCorrection = powerCorrection * 5325 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // アナライズ
    if (attackChara == 7 && attackCharaOn == 1) {
      powerCorrection = powerCorrection * 5325 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // かたいツメ
    if (attackChara == 38 && attackCharaOn) {
      powerCorrection = powerCorrection * 5325 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // パンクロック(攻撃)
    var confirmArray = [20, 33, 138, 107, 27, 172, 236, 251, 347, 38, 322, 249];
    if (attackChara == 172 && confirmArray.includes(skill)) {
      powerCorrection = powerCorrection * 5325 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // パワースポット
    if (powerspot == 1) {
      powerCorrection = powerCorrection * 5325 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // フェアリーオーラ
    if ((attackChara == 183 || blockChara == 183) && skillCategory == 18) {
      powerCorrection = powerCorrection * 5448 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // テクニシャン
    if (attackChara == 126 && power <= 60) {
      powerCorrection = powerCorrection * 6144 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // どくぼうそう
    if (attackChara == 141 && group == 1 && attackCharaOn == 1) {
      powerCorrection = powerCorrection * 6144 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // ねつぼうそう
    if (attackChara == 148 && group == 2 && yakedo == 1) {
      powerCorrection = powerCorrection * 6144 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // がんじょうあご
    var confirmArray = [54, 53, 292, 56, 207, 91, 105, 36]
    if (attackChara == 46 && confirmArray.includes(skill)) {
      powerCorrection = powerCorrection * 6144 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // メガランチャー
    var confirmArray = [314, 10, 345, 245]
    if (attackChara == 233 && confirmArray.includes(skill)) {
      powerCorrection = powerCorrection * 6144 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // はがねのせいしん
    if (haganenoseisin == 1 && skillCategory == 17) {
      powerCorrection = powerCorrection * 6144 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // たいねつ
    if (blockChara == 113 && skillCategory == 2) {
      powerCorrection = powerCorrection * 2048 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // かんそうはだ
    if (blockChara == 44 && skillCategory == 2) {
      powerCorrection = powerCorrection * 5120 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // ノーマルジュエル　タイプ強化アイテム　ちからのハチマキ　ものしりメガネ
    if ((attackItem == 4 && skillCategory == 1) ||
    (attackItem == 6) ||
    (attackItem == 7 && group == 1) ||
    (attackItem == 8 && group == 2)) {
      powerCorrection = powerCorrection * attackItemValue / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // ソーラービーム(悪天候)
    if (skill == 149 && (weather == 2 || weather == 3 || weather == 4)) {
      powerCorrection = powerCorrection * 2048 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // ソーラーブレード(悪天候)
    if (skill == 150 && (weather == 2 || weather == 3 || weather == 4)) {
      powerCorrection = powerCorrection * 2048 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // はたきおとす
    if (skill == 241 && skillOn) {
      powerCorrection = powerCorrection * 6144 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    //てだすけ
    if (tedasuke == 1) {
      powerCorrection = powerCorrection * 6144 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // Gのちから&重力
    if (skill == 1 && gravity == 1) {
      powerCorrection = powerCorrection * 6144 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // からげんき
    if (skill == 58 && (skillOn == 1 || yakedo == 1)) {
      powerCorrection = powerCorrection * 8192 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // しおみず
    if (skill == 110 && skillOn == 1) {
      powerCorrection = powerCorrection * 8192 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // ベノムショック
    if (skill == 287 && skillOn == 1) {
      powerCorrection = powerCorrection * 8192 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // かたきうち
    if (skill == 51 && skillOn == 1) {
      powerCorrection = powerCorrection * 8192 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // クロスサンダー クロスフレイム
    if ((skill == 77 || skill == 79) && skillOn == 1) {
      powerCorrection = powerCorrection * 8192 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // エラがみ でんげきくちばし
    if ((skill == 36 || skill == 189) && skillOn == 1) {
      powerCorrection = powerCorrection * 8192 / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // フィールド
    if ((attackCategory1 != 10) && (attackCategory2 !=10) && (attackChara != 193)) {
      // エレキ サイコ　グラス
      if ((field == 1 && skillCategory == 4) || (field == 2 && skillCategory == 5) || (field  == 4 && skillCategory == 11)) {
        powerCorrection = powerCorrection * 5325 / 4096;
        powerCorrection = Math.round(powerCorrection);
      } //ミスト
      else if (field == 3 && skillCategory == 15) {
        powerCorrection = powerCorrection * 2048 / 4096;
        powerCorrection = Math.round(powerCorrection);
      }
    }
    // 威力補正計算
    power = power * powerCorrection / 4096;
    power = Math.ceil(power - 0.5);
    if (power < 1) {
      power = 1;
    }

    // 基本ダメージ
    var damage = 22 *  power * attack / block;
    damage = Math.floor(damage);
    damage = damage / 50 + 2;
    damage = Math.floor(damage);
    var damageC = 22 * power * attackC / blockC;
    damageC = Math.floor(damageC);
    damageC = damageC / 50 + 2;
    damageC = Math.floor(damageC);

    // 天気弱化
    if ((weather == 1 && skillCategory == 3) || (weather == 2 && skillCategory == 2)) {
      damage = damage * 0.5;
      damage = Math.ceil(damage - 0.5);
      damageC = damageC * 0.5;
      damageC = Math.ceil(damageC - 0.5);
    }

    // 天気強化
    if ((weather == 1 && skillCategory == 2) || (weather == 2 && skillCategory == 3)) {
      damage = damage * 1.5;
      damage = Math.ceil(damage - 0.5);
      damageC = damageC * 1.5;
      damageC = Math.ceil(damageC - 0.5);
    }

    // 急所
    damageC = damageC * 1.5;
    damageC = Math.ceil(damageC - 0.5);

    // 乱数
    var damageArray = Array(16);
    var damageArrayC = Array(16);
    damageArray.fill(0);
    damageArrayC.fill(0);
    for (var i=0; i<damageArray.length; i++) {
      var damageF = damage * (85 + i)/100;
      var damageCF = damageC * (85 + i)/100;
      damageF = Math.floor(damageF);
      damageCF = Math.floor(damageCF);
      damageArray[i] = damageF;
      damageArrayC[i] = damageCF;
    }

    // タイプ一致　てきおうりょく
    if (attackCategory1 == skillCategory || attackCategory2 == skillCategory) {
      for (var i=0; i<damageArray.length; i++) {
        if (attackChara == 125){
          var damage = damageArray[i] * 2;
          var damageC = damageArrayC[i ]* 2;
        } else {
          var damage = damageArray[i] * 1.5;
          var damageC = damageArrayC[i] * 1.5;
        }
        damage = Math.ceil(damage - 0.5);
        damageC = Math.ceil(damageC - 0.5);
        damageArray[i] = damage;
        damageArrayC[i] = damageC;
      }
    }

    // タイプ相性
    for (var i=0; i<damageArray.length; i++) {
      var damage = damageArray[i] * compatibility;
      var damageC = damageArrayC[i] * compatibility;
      damage = Math.floor(damage);
      damageC = Math.floor(damageC);
      damageArray[i] = damage;
      damageArrayC[i] = damageC;
    }

    // やけど こんじょう　からげんき
    if (yakedo == 1 && group == 1 && attackChara !=65 && skill != 58){
      for (var i=0; i<damageArray.length; i++) {
        var damage = damageArray[i] / 2;
        var damageC = damageArrayC[i] / 2;
        damage = Math.ceil(damage - 0.5);
        damageC = Math.ceil(damageC - 0.5);
        damageArray[i] = damage;
        damageArrayC[i] = damageC;
      }
    }

    // ダメージ補正
    var damageCorrection = 4096;
    // かべ　すりぬけ　バリアフリー　かわらわり サイコファング
    if (attackChara != 102 &&
    attackChara != 169 &&
    blockChara != 169 &&
    skill != 59 &&
    skill != 105 &&
    ((rifureku == 1 && group == 1) ||
    (hikarinokabe == 1 && group == 2))) {
      if (format == 0) {
        damageCorrection = damageCorrection * 2048 / 4096;
        damageCorrection = Math.round(damageCorrection);
      } else if (format == 1) {
        damageCorrection = damageCorrection * 2732 / 4096;
        damageCorrection = Math.round(damageCorrection);
      }
    }
    // ブレインフォース
    if (attackChara == 199 && compatibility >= 2) {
      damageCorrection = damageCorrection * 5120 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // いろめがね
    if (attackChara == 19 && compatibility <= 0.5) {
      damageCorrection = damageCorrection * 8192 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // もふもふ(炎)
    if (blockChara == 239 && skillCategory == 2) {
      damageCorrection = damageCorrection * 8192 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // ファントムガード　マルチスケイル
    if (blockChara == 181 || blockChara == 222) {
      damageCorrection = damageCorrection * 2048 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // もふもふ(直接攻撃)
    if (blockChara == 239 && blockCharaOn == 1) {
      damageCorrection = damageCorrection * 2048 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // パンクロック(防御)
    var confirmArray = [20, 33, 138, 107, 27, 172, 236, 251, 347, 38, 322, 249];
    if (blockChara == 172 && confirmArray.includes(skill)) {
      damageCorrection = damageCorrection * 2048 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // こおりのりんぷん
    if (blockChara == 64 && group == 2) {
      damageCorrection = damageCorrection * 2048 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // フレンドガード
    if (friendgard == 1) {
      damageCorrection = damageCorrection * 3072 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // ハードロック フィルター プリズムアーマー
    if ((blockChara == 154 && compatibility >= 2) ||
    (blockChara == 182 && compatibility >= 2) ||
    (blockChara == 201 && compatibility >= 2)) {
      damageCorrection = damageCorrection * 3072 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // いのちのたま　たつじんのおび
    if ((attackItem == 3) ||
    (attackItem == 5 && compatibility >= 2)) {
      damageCorrection = damageCorrection * attackItemValue / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // 半減きのみ
    if (blockItem == 3 && compatibility >=2) {
      damageCorrection = damageCorrection * blockItemValue / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // ちいさくなる&ドラゴンダイブ &のしかかり &ふみつけ
    var confirmArray = [212, 232, 267];
    if (confirmArray.includes(skill) && skillOn) {
      damageCorrection = damageCorrection * 8192 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // うずしお&ダイビング かぜおこし&そらをとぶ じしん&あなをほる たつまき&そらをとぶ なみのり&ダイビング
    var confirmArray = [26, 50, 126, 157, 223];
    if (confirmArray.includes(skill) && skillOn == 1) {
      damageCorrection = damageCorrection * 8192 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // きょうじゅうざん　きょじゅうだん ダイマックスほう
    if (dynamaxBlock == 1 && (skill == 66 || skill == 67 || skill == 163)) {
      damageCorrection = damageCorrection * 8192 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // ダメージ補正計算
    for (var i=0; i<damageArray.length; i++) {
      var damage = damageArray[i] * damageCorrection / 4096;
      damage = Math.ceil(damage - 0.5);
      damageArray[i] = damage;
    }
    // かべ　すりぬけ　バリアフリー　かわらわり サイコファング(無効)
    if (attackChara != 102 &&
    attackChara != 169 &&
    blockChara != 169 &&
    skill != 59 &&
    skill != 105 &&
    ((rifureku == 1 && group == 1) ||
    (hikarinokabe == 1 && group == 2))) {
      if (format == 0) {
        damageCorrection = damageCorrection * 8192 / 4096;
        damageCorrection = Math.round(damageCorrection);
      } else if (format == 1) {
        damageCorrection = damageCorrection * 6144 / 4096;
        damageCorrection = Math.round(damageCorrection);
      }
    }
    // スナイパー
    if (attackChara == 96) {
      damageCorrection = damageCorrection * 6144 / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // ダメージ補正計算 (急所)
    for (var i=0; i<damageArrayC.length; i++) {
      var damageC = damageArrayC[i] * damageCorrection / 4096;
      damageC = Math.ceil(damageC - 0.5);
      damageArrayC[i] = damageC;
    }

    // まもる フェイント
    if (mamoru == 1 && skill != 263 && dynamaxAttack == 1 && dynamaxBlock == 0){
      for (var i=0; i<damageArray.length; i++) {
        var damage = damageArray[i] * 1024 / 4096;
        var damageC = damageArrayC[i] * 1024 / 4096;
        damage = Math.ceil(damage - 0.5);
        damageC = Math.ceil(damageC - 0.5);
        damageArray[i] = damage;
        damageArrayC[i] = damageC;
      }
    }

    // 最低ダメージ
    for (var i=0; i<damageArray.length; i++) {
      if (damageArray[i] < 1) {
        damageArray[i] = 1;
      }
      if (damageArrayC[i] < 1) {
        damageArrayC[i] = 1;
      }
    }

    // ダメージ無効
    var voiceArray = [20, 33, 138, 107, 27, 172, 236, 251, 347, 38, 322, 249];
    var ballArray = [25, 359, 13, 35, 42, 52, 354, 61, 131, 119, 62, 158, 192, 159, 47, 245, 285];
    var bombArray = [130, 161];
    var nukeninArray = [1, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 17, 18];
    var nodynamax = [360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371];
    var weightArray = [73, 83, 258, 286];
    // かんそうはだ
    if ((blockChara == 44 && skillCategory == 3) ||
    // そうしょく
    (blockChara == 110 && skillCategory == 5) ||
    // ちくでん
    (blockChara == 122 && skillCategory == 4) ||
    // ちょすい
    (blockChara == 124 && skillCategory == 3) ||
    // でんきエンジン
    (blockChara == 135 && skillCategory == 4) ||
    // ひらいしん
    (blockChara == 176 && skillCategory == 4) ||
    // ふゆう
    (blockChara == 193 && skillCategory == 9) ||
    // ぼうおん
    (blockChara == 211 && voiceArray.includes(skill)) ||
    // ぼうだん
    (blockChara == 213 && ballArray.includes(skill)) ||
    // よびみず
    (blockChara == 249 && skillCategory == 3) ||
    // しめりけ
    (blockChara == 75 && bombArray.includes(skill)) ||
    // ふしぎなまもり
    (blockChara == 189 && nukeninArray.includes(skillCategory)) ||
    // もらいび
    (blockChara == 240 && skillCategory == 2) ||
    // 特殊なわざ
    (nodynamax.includes(skill) && dynamaxAttack == 0) ||
    // ダイマックス&体重が関係する技
    (dynamaxBlock == 1 && dynamaxAttack == 0 && weightArray.includes(skill)) ||
    // 技選択なし
    (skill == 0) ||
    // まもる
    (mamoru == 1 && skill !=  263 && ((dynamaxAttack == 0 && dynamaxBlock == 0) || (dynamaxBlock == 1))) ||
    // タイプ相性
    (compatibility == 0)) {
      for (var i=0; i<damageArray.length; i++) {
        damageArray[i] = 0;
        if (attackChara != 175) {
          damageArrayC[i] = 0;
        }
      }
    }

    // 複数回攻撃
    var timesArray = [65, 136, 159, 167, 168, 169, 176, 182, 210, 225, 296, 310, 311, 315, 316, 354]
    var times = $("#skill-times").val()*1;
    if (timesArray.includes(skill)) {
      damageArray[0] = damageArray[0] * times;
      damageArray[15] = damageArray[15] * times;
      damageArrayC[0] = damageArrayC[0] * times;
      damageArrayC[15] = damageArrayC[15] * times;

    }

    // 結果表示(通常)
    $(".result-nomal").find(".damage").append(damageArray[0] + " 〜 " + damageArray[15]);

    var percentageLow = damageArray[0] / hp;
    var percentageLowP = Math.round(percentageLow * 1000)/10;
    var percentageHigh = damageArray[15] / hp;
    var percentageHighP = Math.round(percentageHigh * 1000)/10;
    $(".result-nomal").find(".percentage").append(percentageLowP + " 〜 " + percentageHighP + "％");

    if (percentageHigh != 0){
      var confirm = Math.ceil(1/percentageLow);
      $(".result-nomal").find(".confirm").append(confirm + "発");

      var random = Math.ceil(1/percentageHigh);
      $(".result-nomal").find(".random").append(random + "発");
    }

    if (percentageLowP > 100) {
      $(".nomal-graph").find(".graph-confirm").css("width", "0%");
    } else {
      $(".nomal-graph").find(".graph-confirm").css("width",100-percentageLowP + "%");
    }

    if (percentageHighP > 100) {
      $(".nomal-graph").find(".graph-random").css("width", "0%");
    } else {
      $(".nomal-graph").find(".graph-random").css("width",100-percentageHighP + "%");
    }

    for (var i=0; i<8; i++) {
      $(".nomal-detail").find(".detail-left").append('<div class="detail-item">' + damageArray[i] + '</div>');
    }
    for (var i=8; i<16; i++) {
      $(".nomal-detail").find(".detail-right").append('<div class="detail-item">' + damageArray[i] + '</div>');
    }

    // 乱数割合
    if (timesArray.includes(skill)) {}
    else {
      if (confirm != 1 && random == 1) {
        var randomArray = Array(16);
        randomArray.fill(0);
        for (var i=0; i<damageArray.length; i++) {
          if (damageArray[i] >= hp) {
            randomArray[i] = 1;
          }
        }
        var sum = 0;
        for (var i=0; i<damageArray.length; i++) {
          sum = sum + randomArray[i];
        }
        var rannsuu = sum / 16;
        rannsuu = Math.round(rannsuu * 1000) / 10;
        $(".result-nomal").find(".random").append("(" + rannsuu + "％)");
      }
      else if (confirm != 2 && random == 2) {
        var randomArray = Array(256);
        randomArray.fill(0);
        for (var i=0; i<damageArray.length; i++) {
          for (var j=0; j<damageArray.length; j++) {
            var damageArrayJ = Array(16);
            damageArrayJ.fill(0);
            damageArrayJ[j] = damageArray[j] + damageArray[i];
            if (damageArrayJ[j] >= hp) {
             randomArray[16 * i + j] = 1;
            }
          }
        }
        var sum = 0;
        for (var i=0; i<256; i++) {
          sum = sum + randomArray[i];
        }
        var rannsuu = sum / 256;
        rannsuu = Math.round(rannsuu * 1000) / 10;
        $(".result-nomal").find(".random").append("(" + rannsuu + "％)");
      }
    }


    // 計算結果表示(急所)
    $(".result-critical").find(".damage").append(damageArrayC[0] + " 〜 " + damageArrayC[15]);

    var percentageLow = damageArrayC[0] / hp;
    var percentageLowP = Math.round(percentageLow * 1000)/10;
    var percentageHigh = damageArrayC[15] / hp;
    var percentageHighP = Math.round(percentageHigh * 1000)/10;
    $(".result-critical").find(".percentage").append(percentageLowP + " 〜 " + percentageHighP + "％");

    if (percentageHigh != 0){
      var confirm = Math.ceil(1/percentageLow);
      $(".result-critical").find(".confirm").append(confirm + "発");

      var random = Math.ceil(1/percentageHigh);
      $(".result-critical").find(".random").append(random + "発");
    }


    if (percentageLowP > 100) {
      $(".critical-graph").find(".graph-confirm").css("width", "0%");
    } else {
      $(".critical-graph").find(".graph-confirm").css("width",100-percentageLowP + "%");
    }

    if (percentageHighP > 100) {
      $(".critical-graph").find(".graph-random").css("width", "0%");
    } else {
      $(".critical-graph").find(".graph-random").css("width",100-percentageHighP + "%");
    }

    for (var i=0; i<8; i++) {
      $(".critical-detail").find(".detail-left").append('<div class="detail-item">' + damageArrayC[i] + '</div>');
    }
    for (var i=8; i<16; i++) {
      $(".critical-detail").find(".detail-right").append('<div class="detail-item">' + damageArrayC[i] + '</div>');
    }



  }


  // 計算結果詳細

  $(".result-main").click(function(){
    if ($(this).hasClass("open")){
      $(this).removeClass("open");
      $(this).find(".detail-main").slideUp();
      $(this).find(".dropdown-icon").removeClass("fa-sort-up")
      $(this).find(".dropdown-icon").addClass("fa-sort-down");
    } else {
      $(this).addClass("open");
      $(this).find(".detail-main").slideDown();
      $(this).find(".dropdown-icon").removeClass("fa-sort-down")
      $(this).find(".dropdown-icon").addClass("fa-sort-up");
    }
  });

  // セレクトプルダウン
  $(".modal-close, .parent-dropdown").click(function(){
    var dynamaxId = $(this).parents(".poke").find(".convey-dynamax").text()*1;
    if ($(".parent-dropdown").hasClass("active")){
      var active = $(".active");
      active.removeClass("active");
      active.find(".dropdown-icon").removeClass("fa-sort-up")
      active.find(".dropdown-icon").addClass("fa-sort-down");
      active.find(".dropdown").slideUp();
      $(".modal-close").hide();
      if (dynamaxId == 0){
        active.find(".form-main").css("border-color", "#dddddd");
        active.find(".form-label").css("color", "#555555");
      } else if (dynamaxId == 1){
        active.find(".form-main").css("border-color", "#333333");
        active.find(".form-label").css("color", "#333333");
      }
    }
    else {
      $(this).addClass("active");
      $(this).find(".dropdown-icon").removeClass("fa-sort-down")
      $(this).find(".dropdown-icon").addClass("fa-sort-up");
      $(this).find(".dropdown").slideDown();
      $(this).find(".form-main").css("border-color", "#3097e6");
      $(this).find(".form-label").css("color", "#2b86cc");
      $(this).parents(".modal-box").find(".modal-close").css("display", "block");
      $(".dropdown").empty();
      var select = $(this).find(".input-select");
      var items = select.children();
      for (var i=0; i<items.length; i++) {
        var text = items.eq(i).text();
        $(".dropdown").append('<div class="dropdown-item">'+text+'</div>');
      }
      $(".rank-dropdown").scrollTop(140);
    }
  });

  $("#center").find(".form-title").click(function(){
    damageCalculate();
  });


  $(document).on("click", ".dropdown-item", function(){
    var dropdown = $(this).parent(".dropdown");
    var num = dropdown.find("div").index($(this));
    var select = dropdown.prev().find(".input-select");
    var val = select.find("option").eq(num).val();
    select.val(val);
    if (dropdown.hasClass("skill-times-dropdown")) {
      setTimeout(damageCalculate,200);
    } else if (dropdown.hasClass("characteristic-dropdown")) {
      charaSwich();
      var no = 1;
      skillParameter(no);
    } else if (dropdown.hasClass("skill-dropdown")) {
      skillSwich();
      var no = 1;
      skillParameter(no);
    } else if (dropdown.hasClass("format-dropdown")) {
      skillSwich();
      skillParameter();
      damageCalculate();
    }
    else {
      skillParameter();

      damageCalculate();


    }
  });


});
