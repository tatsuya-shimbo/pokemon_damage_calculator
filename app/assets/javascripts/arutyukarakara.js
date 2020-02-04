$(function() {
  // 定義
  var baseAttack = $(".convey-attack-a").text()*1;
  var baseBlock = $(".convey-block-b").text()*1;
  attackCalculate(baseAttack);
  hpCalculate();
  blockCalculate(baseBlock);

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

  function groupChange(group){
    if (group == 1){
      return "物理"
    } else if (group == 2){
      return "特殊"
    } else {
      return ""
    }
  }

  // タイトルスクロール
  $(".title").click(function(){
    $("html, body").animate({
      "scrollTop" : "0px"
    },700)
  });

  // タイプ相性
  function typeCompatibility(category){
    var attackCategory = category
    var blockCategory1 = $(".convey-block-category1").text()*1;
    var blockCategory2 = $(".convey-block-category2").text()*1;
    var id1 = 19 * attackCategory + blockCategory1;
    var id2 = 19 * attackCategory + blockCategory2;

    $.ajax({
      type: 'GET',
      url: '/',
      data: { id1: id1, id2: id2 },
      dataType: 'json'
    })
    .done(function(data){
      $(".convey-compatibility").empty();
      data.forEach(function(com){
        $(".convey-compatibility").append(com.value);
      });
    })
    .fail(function(){
      alert("通信に失敗しました");
    })
  }

  // ポケモンモーダル
　$(".poke-name").click(function(){
    $(this).find(".label-left").css("color", "#2b86cc");
    $(this).find(".form-main").css("border-color", "#3097e6");
    $(this).next().fadeIn();
    $(".search-form").focus();
  });

  $(".btn-close").click(function(){
    $(".poke-name").find(".label-left").css("color", "#555555");
    $(".poke-name").find(".form-main").css("border-color", "#dddddd");
    $(".modal-wrapper").fadeOut();
  });

  $('.search-form').attr('autocomplete', 'off');

  $(".search-form").on("keyup", function(){
    var input = $(this).val();
    input = input.replace(/[ぁ-ん]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + 0x60);
    });

    $.ajax({
      type: 'GET',
      url: '/',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(data){
      $(".modal-select").empty();
      if (data.length !=0) {
        data.forEach(function(poke){
          $(".modal-select").append(`<li class="select-item">${poke.name}</li>`);
        })
      }
      else {
        $(".modal-select").append(`<li>検索結果0件</li>`);
      }
    })
    .fail(function(){
      alert('検索に失敗しました');
    })
  });


  $(document).on("click", ".select-item", function(){
    var text = $(this).text();
    var select = $(this).parent(".modal-select").prev().find(".search-form");
    $(select).val(text);
    $(select).parent("form").submit();
  });

  // わざパラメーター表示
  function skillParameter(){
    var select = $("#skill").children(" option:selected");
    var category = select.attr("data-category")*1;
    var categoryWord = categoryChange(category);
    var group = select.attr("data-group")*1;
    var groupWord = groupChange(group);
    var power = select.attr("data-power")*1;
    $(".skill-parameter").empty();
    if (category != 0){
      $(".skill-parameter").append('<span class="convey convey-skill-category">' + category + '</span>');
      $(".skill-parameter").append(categoryWord);
      $(".skill-parameter").append('- <span class="group-color">' + groupWord + '</span>');
      $(".skill-parameter").append('<span class="convey convey-skill-group">' + group + '</span>');
      $(".skill-parameter").append('- <span class="power">' + power + '</span>');
      typeCompatibility(category);
      if (group == 1){
        var baseAttack = $(".convey-attack-a").text()*1;
        var baseBlock = $(".convey-block-b").text()*1;
        attackCalculate(baseAttack);
        blockCalculate(baseBlock);
        $(".attack-group").text("攻撃");
        $(".block-group").text("防御");
        $(".group-color").css("color", "#1da37b");
        $(".group-color-a").css("color", "#1da37b");
        $(".group-color-c").css("color", "#555555");
      }
      else if (group == 2){
        var baseAttack = $(".convey-attack-c").text()*1;
        var baseBlock = $(".convey-block-d").text()*1;
        attackCalculate(baseAttack);
        blockCalculate(baseBlock);
        $(".attack-group").text("特攻");
        $(".block-group").text("特防");
        $(".group-color").css("color", "#8890db");
        $(".group-color-a").css("color", "#555555");
        $(".group-color-c").css("color", "#8890db");
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
      $(".group-color-c").css("color", "#555555");
    }
  }

  // 数字フォーム
  $(".poke-effort, .poke-individual").click(function(){
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
    $(this).parent(".form-main").css("border-bottom", "solid 1px #dddddd");
    $(this).parent().parent().css("color", "#555555");
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

  function hpCalculate() {
    var effort = $("#effort-hp").val()*1;
    var base = $(".convey-block-h").text()*1;
    var hp = base + 31/2 + effort/8 + 60;
    var hpInt = parseInt(hp);
    $(".real-hp").empty();
    $(".real-hp").append(hpInt);
  }

  function blockCalculate(baseBlock) {
    var effort = $("#effort-block").val()*1;
    var correction = $("#correction-block").val()*1;
    var block = (baseBlock + 31/2 + effort/8 + 5) * correction;
    var blockInt = parseInt(block);
    $(".real-block").empty();
    $(".real-block").append(blockInt);
  }

  $("#individual, #effort-attack, #effort-block").on("change",function(){
    skillParameter();
    setTimeout(damageCalculate,170);
  });

  $("#effort-hp").on("change", function(){
    hpCalculate();
    setTimeout(damageCalculate,170);
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
    // タイプ
    var attackCategory1 = $(".convey-attack-category1").text()*1;
    var attackCategory2 = $(".convey-attack-category2").text()*1;
    var blockCategory1 = $(".convey-block-category1").text()*1;
    var blockCategory2 = $(".convey-block-category2").text()*1;
    var skillCategory = $(".convey-skill-category").text()*1;
    var group = $(".convey-skill-group").text()*1;
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
    // 特性
    var attackChara = $("#characteristic-attack").val()*1;
    var blockChara = $("#characteristic-block").val()*1;
    //　条件
    var format = $("#format").val()*1;
    var weather = $("#weather").val()*1;
    var field = $("#field").val()*1;

    // hp
    var hp = $(".real-hp").text()*1;

    // 攻撃
    var attack = $(".real-attack").text()*1;
    var attackRank = $("#rank-attack").val()*1;
    attack = attack * attackRank;
    attack = Math.floor(attack);
    // 攻撃補正
    var attackCorrection = 4096;
    // こだわりアイテム
    if ((attackItem == 1 && group == 1) || (attackItem == 2 && group == 2)) {
      attackCorrection = attackCorrection * attackItemValue / 4096;
      attackCorrection = Math.round(attackCorrection);
    }
    // 攻撃補正計算
    attack = attack * attackCorrection / 4096;
    attack = Math.ceil(attack - 0.5);

    // 防御
    var block = $(".real-block").text()*1;
    var blockRank = $("#rank-block").val()*1;
    block = block * blockRank;
    block = Math.floor(block);

    // 威力
    var power = $(".power").text()*1;
    // 威力補正
    var powerCorrection = 4096;
    // ちからのハチマキ　ものしりメガネ　ノーマルジュエル　タイプ強化アイテム
    if ((attackItem == 4 && skillCategory == 1) || (attackItem == 6) || (attackItem == 7 && group == 1) || (attackItem == 8 && group == 2)){
      powerCorrection = powerCorrection * attackItemValue / 4096;
      powerCorrection = Math.round(powerCorrection);
    }
    // 威力補正計算
    power = power * powerCorrection / 4096;
    power = Math.ceil(power- 0.5);

    // 基本ダメージ
    var damage = 22 *  power * attack / block;
    damage = Math.floor(damage);
    damage = damage / 50 + 2;
    damage = Math.floor(damage);

    // 天気弱化
    if ((weather == 1 && skillCategory == 3) || (weather == 2 && skillCategory == 2)) {
      damage = damage * 0.5;
      damage = Math.ceil(damage - 0.5);
    }

    // 天気強化
    if ((weather == 1 && skillCategory == 2) || (weather == 2 && skillCategory == 3)) {
      damage = damage * 1.5;
      damage = Math.ceil(damage - 0.5);
    }

    // 急所
    var damageC = damage * 1.5;
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

    // タイプ一致
    if (attackCategory1 == skillCategory || attackCategory2 == skillCategory) {
      for (var i=0; i<damageArray.length; i++) {
        if (attackChara == 99999){
          var damage = damageArray[i]*2;
          var damageC = damageArrayC[i]*2;
        } else {
          var damage = damageArray[i]*1.5;
          var damageC = damageArrayC[i]*1.5;
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

    // ダメージ補正
    var damageCorrection = 4096;
    // たつじんのおび　いのちのたま
    if ((attackItem == 3) || (attackItem == 5 && compatibility >= 2)) {
      damageCorrection = damageCorrection * attackItemValue / 4096;
      damageCorrection = Math.round(damageCorrection);
    }
    // ダメージ補正計算
    for (var i=0; i<damageArray.length; i++) {
      var damage = damageArray[i] * damageCorrection / 4096;
      var damageC = damageArrayC[i] * damageCorrection / 4096;
      damage = Math.ceil(damage - 0.5);
      damageC = Math.ceil(damageC - 0.5);
      damageArray[i] = damage;
      damageArrayC[i] = damageC;
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
  $(".parent-dropdown").click(function(){
    if ($(".parent-dropdown").hasClass("active")){
      $(this).removeClass("active");
      $(this).find(".dropdown-icon").removeClass("fa-sort-up")
      $(this).find(".dropdown-icon").addClass("fa-sort-down");
      $(this).find(".dropdown").slideUp();
      $(this).find(".form-main").css("border-color", "#dddddd");
      $(this).find(".form-label").css("color", "#555555");
    }
    else {
      $(this).addClass("active");
      $(this).find(".dropdown-icon").removeClass("fa-sort-down")
      $(this).find(".dropdown-icon").addClass("fa-sort-up");
      $(this).find(".dropdown").slideDown();
      $(this).find(".form-main").css("border-color", "#3097e6");
      $(this).find(".form-label").css("color", "#2b86cc");
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

  $(document).on("click", ".dropdown-item", function(){
    var dropdown = $(this).parent(".dropdown");
    var num = dropdown.find("div").index($(this));
    var select = dropdown.prev().find(".input-select");
    var val = select.find("option").eq(num).val();
    select.val(val);
    skillParameter();
    setTimeout(damageCalculate,170);
  });


});
