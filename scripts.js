 /*global $ */
 var steps = [];
 var reqTypes = [];
 reqTypes["SLE"] = [];
 reqTypes["SLE"]["Name"] = "Select Type";
 if (true) {
  reqTypes["QIC"] = [];
  reqTypes["QNC"] = [];
  reqTypes["QIL"] = [];
  reqTypes["QNL"] = [];
  reqTypes["QIF"] = [];
  reqTypes["QNF"] = [];
  reqTypes["QOF"] = [];
  reqTypes["QON"] = [];
  reqTypes["PLL"] = [];
  reqTypes["PLE"] = [];
  reqTypes["PLG"] = [];
  reqTypes["PEL"] = [];
  reqTypes["PEG"] = [];
  reqTypes["INI"] = [];
  reqTypes["III"] = [];
  reqTypes["IAE"] = [];
  reqTypes["IAG"] = [];
  reqTypes["IAL"] = [];
  reqTypes["IEG"] = [];
  reqTypes["IEL"] = [];
  reqTypes["IIE"] = [];
  reqTypes["INE"] = [];
  reqTypes["LIA"] = [];
  reqTypes["LNA"] = [];
  reqTypes["LSZ"] = [];
  reqTypes["LNS"] = [];
  reqTypes["LIZ"] = [];
  reqTypes["LNZ"] = [];
  reqTypes["PHP"] = [];
  reqTypes["PNP"] = [];
  reqTypes["PSG"] = [];
  reqTypes["PSE"] = [];
  reqTypes["PSL"] = [];
  reqTypes["PES"] = [];
  reqTypes["PGE"] = [];
  reqTypes["PCE"] = [];
  reqTypes["MVE"] = [];
  reqTypes["MVL"] = [];
  reqTypes["MVG"] = [];
  reqTypes["MGE"] = [];
  reqTypes["MLE"] = [];
  reqTypes["MIB"] = [];
  reqTypes["PIA"] = [];
  reqTypes["PID"] = [];
  reqTypes["HSL"] = [];
  reqTypes["HOC"] = [];
  reqTypes["HCD"] = [];
  reqTypes["XPG"] = [];
  reqTypes["XGE"] = [];
  reqTypes["XPE"] = [];
  reqTypes["XLE"] = [];
  reqTypes["XPL"] = [];
  reqTypes["XEP"] = [];
  reqTypes["XLP"] = [];
  reqTypes["XGP"] = [];
  reqTypes["XEG"] = [];
  reqTypes["XEL"] = [];
  reqTypes["QIC"]["Name"] = "Quest is Complete";
  reqTypes["QNC"]["Name"] = "Quest not Complete";
  reqTypes["QIL"]["Name"] = "Quest in Log";
  reqTypes["QNL"]["Name"] = "Quest not in Log";
  reqTypes["QIF"]["Name"] = "Quest is Finished";
  reqTypes["QNF"]["Name"] = "Quest not finished";
  reqTypes["QOF"]["Name"] = "Quest objective Finished";
  reqTypes["QON"]["Name"] = "Quest Objective Not finished";
  reqTypes["PLL"]["Name"] = "Player level strictly less than";
  reqTypes["PLE"]["Name"] = "Player level equal to";
  reqTypes["PLG"]["Name"] = "Player level strictly greater than";
  reqTypes["PEL"]["Name"] = "Player level less than or equal to";
  reqTypes["PEG"]["Name"] = "Player level greater than or equal to";
  reqTypes["INI"]["Name"] = "Item not in inventory";
  reqTypes["III"]["Name"] = "Item is inventory";
  reqTypes["IAE"]["Name"] = "Item Quantity Equals";
  reqTypes["IAG"]["Name"] = "Item quantity strictly Greater than";
  reqTypes["IAL"]["Name"] = "Item quantity strictly less than";
  reqTypes["IEG"]["Name"] = "Item quantity greater than or equal to";
  reqTypes["IEL"]["Name"] = "Item quantity less than or equal to";
  reqTypes["IIE"]["Name"] = "Item is equipped";
  reqTypes["INE"]["Name"] = "Item is not equipped";
  reqTypes["LIA"]["Name"] = "Player in area";
  reqTypes["LNA"]["Name"] = "Player not in Area";
  reqTypes["LSZ"]["Name"] = "Player in subzone";
  reqTypes["LNS"]["Name"] = "Player not in subzone";
  reqTypes["LIZ"]["Name"] = "Player in zone";
  reqTypes["LNZ"]["Name"] = "Player not in zone";
  reqTypes["PHP"]["Name"] = "Player has profession";
  reqTypes["PNP"]["Name"] = "Player does not have profession";
  reqTypes["PSG"]["Name"] = "Player profession skill level strictly greater";
  reqTypes["PSE"]["Name"] = "Profession skill equal to";
  reqTypes["PSL"]["Name"] = "Profession skill strictly less than";
  reqTypes["PES"]["Name"] = "Profession skill less than or equal to";
  reqTypes["PGE"]["Name"] = "Profession skill greater than or equal to";
  reqTypes["PCE"]["Name"] = "Player primary profession count equals";
  reqTypes["MVE"]["Name"] = "Money value equal to";
  reqTypes["MVL"]["Name"] = "Money value strictly less than";
  reqTypes["MVG"]["Name"] = "Money value strictly greater than";
  reqTypes["MGE"]["Name"] = "Money value greater than or equal to";
  reqTypes["MLE"]["Name"] = "Money value less than or equal to";
  reqTypes["MIB"]["Name"] = "Money in bags (not counting junk you could sell)";
  reqTypes["PIA"]["Name"] = "Player is Alive";
  reqTypes["PID"]["Name"] = "Player is Dead";
  reqTypes["HSL"]["Name"] = "Hearthstone location";
  reqTypes["HOC"]["Name"] = "Hearthstone off cooldown";
  reqTypes["HCD"]["Name"] = "Hearthstone on cooldown";
  reqTypes["XPG"]["Name"] = "experience strictly greater than";
  reqTypes["XGE"]["Name"] = "experience greater than or equal to";
  reqTypes["XPE"]["Name"] = "experience equal to";
  reqTypes["XLE"]["Name"] = "experience less than or equal to";
  reqTypes["XPL"]["Name"] = "experience strictly less than";
  reqTypes["XEP"]["Name"] = "experience to level equal";
  reqTypes["XLP"]["Name"] = "experience to level strictly less than";
  reqTypes["XGP"]["Name"] = "experience to level strictly greater than";
  reqTypes["XEG"]["Name"] = "experience to level greater than or equal to";
  reqTypes["XEL"]["Name"] = "experience to level less than or equal to";
  reqTypes["MVE"][0] = "Copper";
  reqTypes["MVL"][0] = "Copper";
  reqTypes["MVG"][0] = "Copper";
  reqTypes["MGE"][0] = "Copper";
  reqTypes["MLE"][0] = "Copper";
  reqTypes["MIB"][0] = "Copper";
  reqTypes["PCE"][0] = "Count";
  reqTypes["INI"][0] = "Item Id";
  reqTypes["III"][0] = "Item Id";
  reqTypes["IAE"][0] = "Item Id";
  reqTypes["IAG"][0] = "Item Id";
  reqTypes["IAL"][0] = "Item Id";
  reqTypes["IEG"][0] = "Item Id";
  reqTypes["IEL"][0] = "Item Id";
  reqTypes["IIE"][0] = "Item Id";
  reqTypes["INE"][0] = "Item Id";
  reqTypes["PLL"][0] = "Level";
  reqTypes["PLE"][0] = "Level";
  reqTypes["PLG"][0] = "Level";
  reqTypes["PEL"][0] = "Level";
  reqTypes["PEG"][0] = "Level";
  reqTypes["HSL"][0] = "Location";
  reqTypes["PHP"][0] = "Profession Name";
  reqTypes["PNP"][0] = "Profession Name";
  reqTypes["PSG"][0] = "Profession Name";
  reqTypes["PSE"][0] = "Profession Name";
  reqTypes["PSL"][0] = "Profession Name";
  reqTypes["PES"][0] = "Profession Name";
  reqTypes["PGE"][0] = "Profession Name";
  reqTypes["QIC"][0] = "Quest Id";
  reqTypes["QNC"][0] = "Quest Id";
  reqTypes["QIL"][0] = "Quest Id";
  reqTypes["QNL"][0] = "Quest Id";
  reqTypes["QIF"][0] = "Quest Id";
  reqTypes["QNF"][0] = "Quest Id";
  reqTypes["QOF"][0] = "Quest Id";
  reqTypes["QON"][0] = "Quest Id";
  reqTypes["LSZ"][0] = "SubZone";
  reqTypes["LNS"][0] = "SubZone";
  reqTypes["LIA"][0] = "X";
  reqTypes["LNA"][0] = "X";
  reqTypes["XPG"][0] = "XP Value";
  reqTypes["XGE"][0] = "XP Value";
  reqTypes["XPE"][0] = "XP Value";
  reqTypes["XLE"][0] = "XP Value";
  reqTypes["XPL"][0] = "XP Value";
  reqTypes["XEP"][0] = "XP Value";
  reqTypes["XLP"][0] = "XP Value";
  reqTypes["XGP"][0] = "XP Value";
  reqTypes["XEG"][0] = "XP Value";
  reqTypes["XEL"][0] = "XP Value";
  reqTypes["LIZ"][0] = "Zone";
  reqTypes["LNZ"][0] = "Zone";
  reqTypes["LIA"][1] = "Y";
  reqTypes["LNA"][1] = "Y";
  reqTypes["PSG"][1] = "Skill";
  reqTypes["PSE"][1] = "Skill";
  reqTypes["PSL"][1] = "Skill";
  reqTypes["PES"][1] = "Skill";
  reqTypes["PGE"][1] = "Skill";
  reqTypes["IAE"][1] = "Quanity";
  reqTypes["IAG"][1] = "Quanity";
  reqTypes["IAL"][1] = "Quanity";
  reqTypes["IEG"][1] = "Quanity";
  reqTypes["IEL"][1] = "Quanity";
  reqTypes["QOF"][1] = "Objective Index";
  reqTypes["QON"][1] = "Objective Index";
  reqTypes["LIA"][2] = "Range";
  reqTypes["LNA"][2] = "Range";
  reqTypes["PLC"] = [];
  reqTypes["PLC"]["Name"] = "Player Class equals";
  reqTypes["PLC"][0] = "Class";
  reqTypes["PCN"] = [];
  reqTypes["PCN"]["Name"] = "Player Class is not";
  reqTypes["PCN"][0] = "Class";
  reqTypes["PLF"] = [];
  reqTypes["PLF"]["Name"] = "Player Faction equals";
  reqTypes["PLF"][0] = "Faction";
  reqTypes["PRN"] = [];
  reqTypes["PRN"]["Name"] = "Player Race is not";
  reqTypes["PRN"][0] = "Race";
  reqTypes["PLR"] = [];
  reqTypes["PLR"]["Name"] = "Player Race is";
  reqTypes["PLR"][0] = "Race";
  reqTypes["SPL"] = [];
  reqTypes["SPL"]["Name"] = "Spell Learned";
  reqTypes["SPL"][0] = "Spell Id";
  reqTypes["SPN"] = [];
  reqTypes["SPN"]["Name"] = "Spell not Learned";
  reqTypes["SPN"][0] = "Spell Id";
  reqTypes["IHJ"] = [];
  reqTypes["IHJ"]["Name"] = "Inventory has junk";
  reqTypes["IHU"] = [];
  reqTypes["IHU"]["Name"] = " Inventory has non-whitelisted item";
  reqTypes["IHF"] = [];
  reqTypes["IHF"]["Name"] = "Inventory is more than half full";
  reqTypes["IFF"] = [];
  reqTypes["IFF"]["Name"] = "Inventory is Full";
 }

 var stepTypes = [];
 stepTypes["SL"] = "Select Type";
 stepTypes["AQ"] = "Acquire Quest";
 stepTypes["FQ"] = "Finish Quest";
 stepTypes["PQ"] = "Partial Finish Quest";
 stepTypes["CQ"] = "Turn-in Quest";
 stepTypes["GT"] = "Go To";
 stepTypes["FT"] = "Fast Travel";
 stepTypes["IT"] = "Interact";
 stepTypes["GR"] = "Grind";
 stepTypes["NO"] = "Note";

 var subTypes = [];
 subTypes["TR"] = "Train";
 subTypes["SH"] = "Set Hearth";
 subTypes["IR"] = "Generic Interact";
 subTypes["VB"] = "Vendor Buy";
 subTypes["DT"] = "Death";
 subTypes["FP"] = "Flight Path";
 subTypes["HR"] = "Use Hearthstone";
 subTypes["TA"] = "Take Transport";
 subTypes["GL"] = "Grind Level";
 subTypes["GX"] = "Grind Exp";
 subTypes["GP"] = "Grind Profession";
 subTypes["GM"] = "Grind Money";

 //Buttons
 $("#stringDecodeBtn").on("click", function() {
  StringToArray();
 });

 $("#stringEncodeBtn").on("click", function() {
  ArrayToString();
 });
 $("#addStepBtn").on("click", function() {
  AddStep();
 });
 $("#insertStepBtn").on("click", function() {
  InsertStep(parseInt($("#insertStep").val(), 10) - 1);
 });
 $("#collapseAll").on("click", function() {
  CollapseAll();
 });
 $("#openAll").on("click", function() {
  ShowAll();
 });
 $(document).on('click', '.addReq', function() {
  AddReq(parseInt($(this).attr("id").replace("addReqStep", ""), 10));

 });
 $(document).on('click', '.removeReqBtn', function() {
  RemoveReq($(this).attr("id"));

 });
 $(document).on('click', '.removeStepBtn', function() {
  RemoveStep(parseInt($(this).attr("id").replace("removeStep", ""), 10));
 });
 $(document).on('click', '.upStepBtn', function() {
  UpStep(parseInt($(this).attr("id").replace("upStep", ""), 10));
 });
 $(document).on('click', '.downStepBtn', function() {
  DownStep(parseInt($(this).attr("id").replace("downStep", ""), 10));
 });
 $(document).on('change', '.reqSelect', function() {
  AddValueFields($(this).attr("id"));
 });
 $(document).on('change', '.stepTypeSelect', function() {
  HandleDataType($(this).attr("id"));
  ChangeCardColor($(this).attr("id"));
  ChangeCardHeader($(this).attr("id").replace("step", "").replace("TypeSelect", ""));
 });
 $(document).on('change', '.subtypeSelect', function() {
  HandleSubDataType($(this).attr("id"));
  ChangeCardHeader($(this).attr("id").replace("step", "").replace("TypeSelectSub", ""));
 });

 /*
 <div class="card mx-auto text-white bg-primary mb-3">
   <div class="card-header"><button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample">Open</button>Step 1</div>
   <div class="collapse card-body" id="collapseExample">
     <h5 class="card-title">Accept Quest</h5>
     <p class="card-text">some reqs</p>
   </div>
 </div>
 */
 //Functions
 function AddStep() {
  StoreSteps();
  var step = new Object();
  step.show = true;
  steps[steps.length] = step;
  DisplaySteps();
 }

 function RemoveStep(index) {
  StoreSteps();
  steps.splice(index, 1);
  DisplaySteps();
 }

 function UpStep(index) {
  StoreSteps();
  var temp = steps[index];
  steps[index] = steps[index - 1];
  steps[index - 1] = temp;
  DisplaySteps();
 }

 function DownStep(index) {
  StoreSteps();
  var temp = steps[index];
  steps[index] = steps[index + 1];
  steps[index + 1] = temp;
  DisplaySteps();
 }

 function InsertStep(index) {
  StoreSteps();
  var step = new Object();
  steps.splice(index, 0, step);
  DisplaySteps();
 }

 function AddReq(index) {
  var reqCount = $("#step" + index + "ReqCount").html();
  var reqContainer = $("<step" + index + "req" + reqCount + " />", {

  });
  var removebtn = $("<button />", {
   type: "button",
   id: "step" + index + "req" + reqCount + "removeReqBtn",
   "class": "btn btn-danger removeReqBtn btn-md",
   html: "-"
  });
  var dropdown = $("<select />", {
   "class": "reqSelect",
   id: "step" + index + "req" + reqCount + "Select",
  });
  $(reqContainer).append(removebtn);
  $(reqContainer).append(dropdown);
  $("step" + index + "ReqContainer").append(reqContainer);
  $("#step" + index + "req" + reqCount + "removeReqBtn").before("<br>");
  populateReqSelect();
  $("#step" + index + "ReqCount").html(parseInt(reqCount, 10) + 1);
 }

 function RemoveReq(id) {
  StoreSteps();
  var pattern = /step(\d*)req(\d*)removeReqBtn/gm;
  var values = [];
  var m;
  while ((m = pattern.exec(id)) !== null) {
   if (m.index === pattern.lastIndex) {
    pattern.lastIndex++;
   }
   values.push(m);
  }
  var step = values[0][1];
  var req = values[0][2];
  var array = steps[step].reqs;
  array.splice(req, 1);
  steps[step].reqCount--;
  steps[step].reqs = array;
  DisplaySteps();
 }

 function ChangeCardColor(index) {
  index = index.replace("step", "").replace("TypeSelect", "");
  var type = $("#step" + index + "TypeSelect").val();
  var classes = "card mx-auto text-white bg-primary mb-3";

  $("#Card" + index).removeClass();
  $("#Card" + index).addClass(classes);

  if (type == "AQ" || type == "FQ" || type == "CQ" || type == "PQ") {
   $("#Card" + index).addClass("quest");
  }
  else if (type == "IT") {
   $("#Card" + index).addClass("interact");
  }
  else if (type == "FT") {
   $("#Card" + index).addClass("fasttravel");
  }
  else if (type == "GT") {
   $("#Card" + index).addClass("goto");
  }
  else if (type == "GR") {
   $("#Card" + index).addClass("grind");
  }
  else if (type == "NO") {
   $("#Card" + index).addClass("note");
  }
  else {
   $("#Card" + index).addClass("default-color");
  }
 }

 function populateReqSelect() {
  $(".reqSelect").each(function() {
   if ($(this).children('option').length == 0) {
    for (var key in reqTypes) {
     if (key.length == 3) {
      $(this).append(`<option value="` + key + `">` + reqTypes[key]["Name"] + `</option>`);
     }
    }
   }
  });

 }

 function PopulateTypeSelect() {
  $(".stepTypeSelect").each(function() {
   if ($(this).children('option').length == 0) {
    for (var key in stepTypes) {
     $(this).append(`<option value="` + key + `">` + stepTypes[key] + `</option>`);
    }
   }
  });
 }

 function AddValueFields(id) {
  var parent = id.replace("Select", "");
  $(parent + "vals").remove();
  $(parent).append("<" + parent + "vals></" + parent + "vals>");
  for (var key in reqTypes[$("#" + id + " :selected").val()]) {
   if (key != "Name") {
    $(parent + "vals").append(`<label for="` + parent + `val` + key + `"> ` + reqTypes[$("#" + id + " :selected").val()][key] + `: </label><input type='text' id="` + parent + `val` + key + `">`);
   }
  }
 }

 function HandleSubDataType(id) {
  var stepNum = id.replace("step", "").replace("TypeSelectSub", "");
  $("subDataContainer" + stepNum).remove();
  $("dataContainer" + stepNum).append("<subDataContainer" + stepNum + "/>");
  $("subDataContainer" + stepNum).append("<br>");
  var selectedType = $("#" + id + " :selected").val();
  if (selectedType == "GL") {
   $("subDataContainer" + stepNum).append("<label for='lvl" + stepNum + "'> Level </label><input type='number' style='width:100px' id='lvl" + stepNum + "'><br>");
  }
  else if (selectedType == "GM") {
   $("subDataContainer" + stepNum).append("<label for='mon" + stepNum + "'> Money(c) </label><input type='number' style='width:100px' id='mon" + stepNum + "'><br>");
  }
  else if (selectedType == "GX") {
   $("subDataContainer" + stepNum).append("<label for='xp" + stepNum + "'> Experience Value </label><input type='number' style='width:100px' id='xp" + stepNum + "'><br>");
  }
  else if (selectedType == "GP") {
   $("subDataContainer" + stepNum).append("<label for='prof" + stepNum + "'> Profession </label><input type='text' style='width:100px' id='prof" + stepNum + "'><br>");
   $("subDataContainer" + stepNum).append("<label for='skill" + stepNum + "'> Skill </label><input type='number' style='width:100px' id='skill" + stepNum + "'><br>");
  }
  else if (selectedType == "TR") {
   $("subDataContainer" + stepNum).append("<label for='locX" + stepNum + "'> Location x: </label><input type='number' style='width:40px' id='locX" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='locY" + stepNum + "'> y: </label><input type='number' style='width:40px' id='locY" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='range" + stepNum + "'> Range </label><input type='number' style='width:40px' id='range" + stepNum + "'><br>");
   $("subDataContainer" + stepNum).append("<label for='npc" + stepNum + "'> Trainer Name: </label><input type='text' id='npc" + stepNum + "'><br>");
   $("subDataContainer" + stepNum).append("<label for='list" + stepNum + "'> Spell Id List(comma): </label><input type='text' id='list" + stepNum + "'><br>");
  }
  else if (selectedType == "SH") {
   $("subDataContainer" + stepNum).append("<label for='locX" + stepNum + "'> Location x: </label><input type='number' style='width:40px' id='locX" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='locY" + stepNum + "'> y: </label><input type='number' style='width:40px' id='locY" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='range" + stepNum + "'> Range </label><input type='number' style='width:40px' id='range" + stepNum + "'><br>");
   $("subDataContainer" + stepNum).append("<label for='npc" + stepNum + "'>Innkeeper Name: </label><input type='text' id='npc" + stepNum + "'><br>");
  }
  else if (selectedType == "VB") {
   $("subDataContainer" + stepNum).append("<label for='locX" + stepNum + "'> Location x: </label><input type='number' style='width:40px' id='locX" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='locY" + stepNum + "'> y: </label><input type='number' style='width:40px' id='locY" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='range" + stepNum + "'> Range </label><input type='number' style='width:40px' id='range" + stepNum + "'><br>");
   $("subDataContainer" + stepNum).append("<label for='npc" + stepNum + "'>Vendor Name: </label><input type='text' id='npc" + stepNum + "'><br>");
   $("subDataContainer" + stepNum).append("<label for='list" + stepNum + "'> Buy List(ItemID,Quanity): </label><input type='text' id='list" + stepNum + "'><br>");
  }
  else if (selectedType == "IR") {
   $("subDataContainer" + stepNum).append("<label for='locX" + stepNum + "'> Location x: </label><input type='number' style='width:40px' id='locX" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='locY" + stepNum + "'> y: </label><input type='number' style='width:40px' id='locY" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='range" + stepNum + "'> Range </label><input type='number' style='width:40px' id='range" + stepNum + "'><br>");
   $("subDataContainer" + stepNum).append("<label for='npc" + stepNum + "'>NPC Name: </label><input type='text' id='npc" + stepNum + "'><br>");
   $("subDataContainer" + stepNum).append("<label for='txt" + stepNum + "'>Text: </label><input type='text' id='txt" + stepNum + "'><br>");
  }
  else if (selectedType == "DT") {
   $("subDataContainer" + stepNum).append("<label for='locX" + stepNum + "'> Location x: </label><input type='number' style='width:40px' id='locX" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='locY" + stepNum + "'> y: </label><input type='number' style='width:40px' id='locY" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='range" + stepNum + "'> Range </label><input type='number' style='width:40px' id='range" + stepNum + "'><br>");
  }
  else if (selectedType == "FP") {
   $("subDataContainer" + stepNum).append("<label for='locX" + stepNum + "'> Location x: </label><input type='number' style='width:40px' id='locX" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='locY" + stepNum + "'> y: </label><input type='number' style='width:40px' id='locY" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='range" + stepNum + "'> Range </label><input type='number' style='width:40px' id='range" + stepNum + "'><br>");
   $("subDataContainer" + stepNum).append("<label for='npc" + stepNum + "'> Flight Master Name: </label><input type='text' id='npc" + stepNum + "'><br>");
   $("subDataContainer" + stepNum).append("<label for='dest" + stepNum + "'>Destination: </label><input type='text' id='dest" + stepNum + "'>");
  }
  else if (selectedType == "TA") {
   $("subDataContainer" + stepNum).append("<label for='locX" + stepNum + "'> Location x: </label><input type='number' style='width:40px' id='locX" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='locY" + stepNum + "'> y: </label><input type='number' style='width:40px' id='locY" + stepNum + "'>");
   $("subDataContainer" + stepNum).append("<label for='range" + stepNum + "'> Range </label><input type='number' style='width:40px' id='range" + stepNum + "'><br>");
   $("subDataContainer" + stepNum).append("<label for='npc" + stepNum + "'> Transport Name/Type: </label><input type='text' id='npc" + stepNum + "'>");
  }
 }

 function HandleDataType(id) {
  var stepNum = id.replace("step", "").replace("TypeSelect", "");
  $("dataContainer" + stepNum).remove();
  $("stepdata" + stepNum).append("<dataContainer" + stepNum + "/>");
  var selectedType = $("#" + id + " :selected").val();
  if (selectedType == "IT" || selectedType == "FT" || selectedType == "GR") {
   $("dataContainer" + stepNum).append("<label for='" + id + "Sub' id='" + id + "SubLabel'>SubType </label>");
   $("dataContainer" + stepNum).append("<select class='subtypeSelect' id='" + id + "Sub'></select>");
   PopulateSubTypeSelect(id + "Sub", $("#" + id + " :selected").val());
  }
  else {
   if (selectedType == "AQ" || selectedType == "CQ") {
    $("dataContainer" + stepNum).append("<label for='qId" + stepNum + "'> QuestId </label><input type='number' style='width:100px' id='qId" + stepNum + "'><br>");
    $("dataContainer" + stepNum).append("<label for='locX" + stepNum + "'> Location x: </label><input type='number' style='width:40px' id='locX" + stepNum + "'>");
    $("dataContainer" + stepNum).append("<label for='locY" + stepNum + "'> y: </label><input type='number' style='width:40px' id='locY" + stepNum + "'>");
    $("dataContainer" + stepNum).append("<label for='range" + stepNum + "'> Range </label><input type='number' style='width:40px' id='range" + stepNum + "'><br>");
    $("dataContainer" + stepNum).append("<label for='npc" + stepNum + "'> Quest Giver: </label><input type='text' id='npc" + stepNum + "'>");
   }
   else if (selectedType == "FQ") {
    $("dataContainer" + stepNum).append("<label for='qId" + stepNum + "'> QuestId </label><input type='number' style='width:100px' id='qId" + stepNum + "'><br>");
    $("dataContainer" + stepNum).append("<label for='locX" + stepNum + "'> Location x: </label><input type='number' style='width:40px' id='locX" + stepNum + "'>");
    $("dataContainer" + stepNum).append("<label for='locY" + stepNum + "'> y: </label><input type='number' style='width:40px' id='locY" + stepNum + "'>");
    $("dataContainer" + stepNum).append("<label for='range" + stepNum + "'> Range </label><input type='number' style='width:40px' id='range" + stepNum + "'><br>");

   }
   else if (selectedType == "PQ") {
    $("dataContainer" + stepNum).append("<label for='qId" + stepNum + "'> QuestId </label><input type='number' style='width:100px' id='qId" + stepNum + "'><br>");
    $("dataContainer" + stepNum).append("<label for='locX" + stepNum + "'> Location x: </label><input type='number' style='width:40px' id='locX" + stepNum + "'>");
    $("dataContainer" + stepNum).append("<label for='locY" + stepNum + "'> y: </label><input type='number' style='width:40px' id='locY" + stepNum + "'>");
    $("dataContainer" + stepNum).append("<label for='range" + stepNum + "'> Range </label><input type='number' style='width:40px' id='range" + stepNum + "'><br>");
    $("dataContainer" + stepNum).append("<label for='list" + stepNum + "'> Objectives: </label><input type='text' id='list" + stepNum + "'>");
   }
   else if (selectedType == "GT") {
    $("dataContainer" + stepNum).append("<label for='locX" + stepNum + "'> Location x: </label><input type='number' style='width:40px' id='locX" + stepNum + "'>");
    $("dataContainer" + stepNum).append("<label for='locY" + stepNum + "'> y: </label><input type='number' style='width:40px' id='locY" + stepNum + "'>");
    $("dataContainer" + stepNum).append("<label for='range" + stepNum + "'> Range </label><input type='number' style='width:40px' id='range" + stepNum + "'><br>");
   }
   else if (selectedType == "NO") {
    $("dataContainer" + stepNum).append("<label for='txt" + stepNum + "'> Note: </label><input type='text' id='txt" + stepNum + "'><br>");
   }
  }
 }

 function PopulateSubTypeSelect(id, selectedType) {
  if (selectedType == "IT") {
   $("#" + id).append(`
        <option value="SL">Select SubType</option>
        <option value="TR">Train</option>
        <option value="SH">Set Hearth</option>
        <option value="IR">Generic Interact</option>
        <option value="VB">Vendor Buy</option>
        `);
  }
  else if (selectedType == "FT") {
   $("#" + id).append(`
        <option value="SL">Select SubType</option>
        <option value="DT">Death</option>
        <option value="FP">Flight Path</option>
        <option value="HR">Hearthstone</option>
        <option value="TA">Transport</option>
        `);
  }
  else if (selectedType == "GR") {
   $("#" + id).append(`<option value="SL">Select SubType</option><option value="GL">Grind to Level</option><option value="GM">Grind Money Amount</option><option value="GX">Grind to Experience</option><option value="GP">Grind to Profession Skill</option>`);
  }
 }

 function StoreSteps() {
  for (var s in steps) {
   var step = new Object();
   steps[s] = step;
   if ($("#Card" + s + "Body").hasClass("show")) {
    steps[s].show = true;
   }
   else {
    steps[s].show = false;
   }
   steps[s].type = $("#step" + s + "TypeSelect :selected").val();
   if (steps[s].type == "AQ" || steps[s].type == "CQ") {
    steps[s].qId = $("#qId" + s).val();
    steps[s].locX = $("#locX" + s).val();
    steps[s].locY = $("#locY" + s).val();
    steps[s].range = $("#range" + s).val();
    steps[s].npc = $("#npc" + s).val();
   }
   else if (steps[s].type == "FQ") {
    steps[s].qId = $("#qId" + s).val();
    steps[s].locX = $("#locX" + s).val();
    steps[s].locY = $("#locY" + s).val();
    steps[s].range = $("#range" + s).val();
   }
   else if (steps[s].type == "PQ") {
    steps[s].qId = $("#qId" + s).val();
    steps[s].locX = $("#locX" + s).val();
    steps[s].locY = $("#locY" + s).val();
    steps[s].range = $("#range" + s).val();
    steps[s].list = $("#list" + s).val();
   }
   else if (steps[s].type == "GT") {
    steps[s].locX = $("#locX" + s).val();
    steps[s].locY = $("#locY" + s).val();
    steps[s].range = $("#range" + s).val();
   }
   else if (steps[s].type == "NO") {
    steps[s].text = $("#txt" + s).val();
   }
   else if (steps[s].type == "IT") {
    steps[s].subType = $("#step" + s + "TypeSelectSub :selected").val();
    if (steps[s].subType == "TR") {
     steps[s].locX = $("#locX" + s).val();
     steps[s].locY = $("#locY" + s).val();
     steps[s].range = $("#range" + s).val();
     steps[s].npc = $("#npc" + s).val();
     steps[s].list = $("#list" + s).val();
    }
    else if (steps[s].subType == "SH") {
     steps[s].locX = $("#locX" + s).val();
     steps[s].locY = $("#locY" + s).val();
     steps[s].range = $("#range" + s).val();
     steps[s].npc = $("#npc" + s).val();
    }
    else if (steps[s].subType == "IR") {
     steps[s].locX = $("#locX" + s).val();
     steps[s].locY = $("#locY" + s).val();
     steps[s].range = $("#range" + s).val();
     steps[s].npc = $("#npc" + s).val();
     steps[s].text = $("#txt" + s).val();
    }
    else if (steps[s].subType == "VB") {
     steps[s].locX = $("#locX" + s).val();
     steps[s].locY = $("#locY" + s).val();
     steps[s].range = $("#range" + s).val();
     steps[s].npc = $("#npc" + s).val();
     steps[s].list = $("#list" + s).val();
    }
   }
   else if (steps[s].type == "FT") {
    steps[s].subType = $("#step" + s + "TypeSelectSub :selected").val();
    if (steps[s].subType == "FP") {
     steps[s].locX = $("#locX" + s).val();
     steps[s].locY = $("#locY" + s).val();
     steps[s].range = $("#range" + s).val();
     steps[s].npc = $("#npc" + s).val();
     steps[s].dest = $("#dest" + s).val();
    }
    else if (steps[s].subType == "DT") {
     steps[s].locX = $("#locX" + s).val();
     steps[s].locY = $("#locY" + s).val();
     steps[s].range = $("#range" + s).val();
    }
    else if (steps[s].subType == "TA") {
     steps[s].locX = $("#locX" + s).val();
     steps[s].locY = $("#locY" + s).val();
     steps[s].range = $("#range" + s).val();
     steps[s].npc = $("#npc" + s).val();
    }
   }
   else if (steps[s].type == "GR") {
    steps[s].subType = $("#step" + s + "TypeSelectSub :selected").val();
    if (steps[s].subType == "GL") {
     steps[s].level = $("#lvl" + s).val();
    }
    else if (steps[s].subType == "GM") {
     steps[s].money = $("#mon" + s).val();
    }
    else if (steps[s].subType == "GX") {
     steps[s].xp = $("#xp" + s).val();
    }
    else if (steps[s].subType == "GP") {
     steps[s].prof = $("#prof" + s).val();
     steps[s].skill = $("#skill" + s).val();
    }
   }
   steps[s].reqCount = $("#step" + s + "ReqCount").html();
   steps[s].reqs = [];
   for (var i = 0; i < steps[s].reqCount; i++) {
    var reqtype = $("#step" + s + "req" + i + "Select :selected").val();
    steps[s].reqs[i] = [];
    var valCount = reqTypes[reqtype].length;
    steps[s].reqs[i]["type"] = reqtype;
    for (var j = 0; j < valCount; j++) {
     steps[s].reqs[i][j] = $("#step" + s + "req" + i + "val" + j).val();
    }
   }
  }
 }

 function LoadStepData(index) {
  if (steps[index] == undefined) {
   steps[index] = new Object();
  }
  if (steps[index].type != undefined) {
   $("#step" + index + "TypeSelect").val(steps[index].type).change();
  }
  else {
   steps[index].type == "SLE";

  }
  if (steps[index].type == "AQ" || steps[index].type == "CQ") {
   $("#qId" + index).val(steps[index].qId);
   $("#locX" + index).val(steps[index].locX);
   $("#locY" + index).val(steps[index].locY);
   $("#range" + index).val(steps[index].range);
   $("#npc" + index).val(steps[index].npc);
  }
  else if (steps[index].type == "FQ") {
   $("#qId" + index).val(steps[index].qId);
   $("#locX" + index).val(steps[index].locX);
   $("#locY" + index).val(steps[index].locY);
   $("#range" + index).val(steps[index].range);
  }
  else if (steps[index].type == "PQ") {
   $("#qId" + index).val(steps[index].qId);
   $("#locX" + index).val(steps[index].locX);
   $("#locY" + index).val(steps[index].locY);
   $("#range" + index).val(steps[index].range);
   $("#list" + index).val(steps[index].list);
  }
  else if (steps[index].type == "GT") {
   $("#locX" + index).val(steps[index].locX);
   $("#locY" + index).val(steps[index].locY);
   $("#range" + index).val(steps[index].range);
  }
  else if (steps[index].type == "NO") {
   $("#txt" + index).val(steps[index].text);
  }
  else if (steps[index].type == "IT") {
   $("#step" + index + "TypeSelectSub").val(steps[index].subType).change();
   if (steps[index].subType == "TR") {
    $("#locX" + index).val(steps[index].locX);
    $("#locY" + index).val(steps[index].locY);
    $("#range" + index).val(steps[index].range);
    $("#npc" + index).val(steps[index].npc);
    $("#list" + index).val(steps[index].list);
   }
   else if (steps[index].subType == "SH") {
    $("#locX" + index).val(steps[index].locX);
    $("#locY" + index).val(steps[index].locY);
    $("#range" + index).val(steps[index].range);
    $("#npc" + index).val(steps[index].npc);
   }
   else if (steps[index].subType == "IR") {
    $("#locX" + index).val(steps[index].locX);
    $("#locY" + index).val(steps[index].locY);
    $("#range" + index).val(steps[index].range);
    $("#npc" + index).val(steps[index].npc);
    $("#txt" + index).val(steps[index].text);
   }
   else if (steps[index].subType == "VB") {
    $("#locX" + index).val(steps[index].locX);
    $("#locY" + index).val(steps[index].locY);
    $("#range" + index).val(steps[index].range);
    $("#npc" + index).val(steps[index].npc);
    $("#list" + index).val(steps[index].list);
   }
  }
  else if (steps[index].type == "FT") {
   $("#step" + index + "TypeSelectSub").val(steps[index].subType).change();
   if (steps[index].subType == "FP") {
    $("#locX" + index).val(steps[index].locX);
    $("#locY" + index).val(steps[index].locY);
    $("#range" + index).val(steps[index].range);
    $("#npc" + index).val(steps[index].npc);
    $("#dest" + index).val(steps[index].dest);
   }
   else if (steps[index].subType == "DT") {
    $("#locX" + index).val(steps[index].locX);
    $("#locY" + index).val(steps[index].locY);
    $("#range" + index).val(steps[index].range);
   }
   else if (steps[index].subType == "TA") {
    $("#locX" + index).val(steps[index].locX);
    $("#locY" + index).val(steps[index].locY);
    $("#range" + index).val(steps[index].range);
    $("#npc" + index).val(steps[index].npc);
   }
  }
  else if (steps[index].type == "GR") {
   $("#step" + index + "TypeSelectSub").val(steps[index].subType).change();
   if (steps[index].subType == "GL") {
    $("#lvl" + index).val(steps[index].level);
   }
   else if (steps[index].subType == "GM") {
    $("#mon" + index).val(steps[index].money);
   }
   else if (steps[index].subType == "GX") {
    $("#xp" + index).val(steps[index].xp);
   }
   else if (steps[index].subType == "GP") {
    $("#prof" + index).val(steps[index].prof);
    $("#skill" + index).val(steps[index].skill);
   }
  }

  for (var i = 0; i < steps[index].reqCount; i++) {
   AddReq(index);
   $("#step" + index + "req" + i + "Select").val(steps[index].reqs[i]["type"]).change();
   if (reqTypes[steps[index].reqs[i]["type"]] == undefined) {
    console.log("Unknown Req Type: " + steps[index].reqs[i]["type"]);
   }
   for (var v in reqTypes[steps[index].reqs[i]["type"]]) {
    if (v != "Name") {
     $("#step" + index + "req" + i + "val" + v).val(steps[index].reqs[i][v]);
    }
   }
  }
 }

 function DisplaySteps() {
  $("steps").empty();
  for (var i = 0; i < steps.length; i++) {
   var card = $("<div />", {
    id: "Card" + i,
    "class": "card mx-auto text-white default-color bg-primary mb-3",
   });
   var cardHeader = $("<div />", {
    id: "Card" + i + "Header",
    "class": "card-header",
    html: `<span>
          <button class='btn btn-success' type='button' data-toggle='collapse' data-target='#Card` + i + `Body'>Open</button>  
          Step ` + (i + 1) +
     `</span><span id='step` + i + `info'></span><span><button class='upStepBtn btn btn-secondary' type='button' id='upStep` + i + `'>Up</button>
          <button class='downStepBtn btn btn-secondary' type='button' id='downStep` + i + `'>Down</button>
          <button class='removeStepBtn btn btn-danger' type='button' id='removeStep` + i + `'>Remove</button></span>`
   });
   var cardBody = $("<div />", {
    id: "Card" + i + "Body",
    "class": "collapse card-body",
   });
   var reqs = $("<step" + i + "ReqContainer/>", {
    html: "<button class='btn btn-primary addReq' id='addReqStep" + i + "'>Add Req</button><span class='hidden' id='step" + i + "ReqCount'>" + 0 + "</span>",
   });
   var data = $("<stepData" + i + "/>", {
    html: "<label for='step" + i + "TypeSelect'>Step Type</label><select class='stepTypeSelect' id='step" + i + "TypeSelect'></select><br>",
   });
   $("steps").append(card);
   $("#Card" + i).append(cardHeader);
   $("#Card" + i).append(cardBody);
   $("#Card" + i + "Body").append(reqs);
   $("#Card" + i + "Body").append(data);
   PopulateTypeSelect();
   LoadStepData(i);
   if (steps[i].show == true) {
    $("#Card" + i + "Body").addClass("show");
   }
  }
  $("#upStep0").remove();
  $("#downStep" + (steps.length - 1)).remove();
 }

 function ArrayToString() {
  StoreSteps();
  var outputString = "";
  for (var i = 0; i < steps.length; i++) {
   var stepString = "";
   if (steps[i].type == "AQ" || steps[i].type == "CQ") {
    //qId,npc,locX,locY,range
    stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].qId + `","` + steps[i].locX + `","` + steps[i].locY + `","` + steps[i].range + `","` + steps[i].npc + `",`;
   }
   else if (steps[i].type == "FQ") {
    stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].qId + `","` + steps[i].locX + `","` + steps[i].locY + `","` + steps[i].range + `",`;
   }
   else if (steps[i].type == "PQ") {
    stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].qId + `","` + steps[i].locX + `","` + steps[i].locY + `","` + steps[i].range + `","` + steps[i].list + `",`;
   }
   else if (steps[i].type == "GT") {
    //locX,locY,range
    stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].locX + `","` + steps[i].locY + `","` + steps[i].range + `",`;
   }
   else if (steps[i].type == "NO") {
    //text
    stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].text + `",`;
   }
   else if (steps[i].type == "FT" || steps[i].type == "IT" || steps[i].type == "GR") {
    if (steps[i].subType == "DT") {
     //locX,locY,range
     stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].subType + `","` + steps[i].locX + `","` + steps[i].locY + `","` + steps[i].range + `",`;
    }
    else if (steps[i].subType == "FP") {
     //locX,locY,range,npc,dest
     stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].subType + `","` + steps[i].locX + `","` + steps[i].locY + `","` + steps[i].range + `","` + steps[i].npc + `","` + steps[i].dest + `",`;
    }
    else if (steps[i].subType == "HR") {
     //none
     stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].subType + `",`;
    }
    else if (steps[i].subType == "TA") {
     //locX,locY,range,npc
     stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].subType + `","` + steps[i].locX + `","` + steps[i].locY + `","` + steps[i].range + `","` + steps[i].npc + `",`;
    }
    else if (steps[i].subType == "TR") {
     //locX,locY,range,npc,list
     stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].subType + `","` + steps[i].locX + `","` + steps[i].locY + `","` + steps[i].range + `","` + steps[i].npc + `","` + steps[i].list + `",`;
    }
    else if (steps[i].subType == "SH") {
     //locX,locY,range,npc
     stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].subType + `","` + steps[i].locX + `","` + steps[i].locY + `","` + steps[i].range + `","` + steps[i].npc + `",`;
    }
    else if (steps[i].subType == "IR") {
     //locX,locY,range,npc,text
     stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].subType + `","` + steps[i].locX + `","` + steps[i].locY + `","` + steps[i].range + `","` + steps[i].npc + `","` + steps[i].text + `",`;
    }
    else if (steps[i].subType == "VB") {
     //locX,locY,range,npc,list
     stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].subType + `","` + steps[i].locX + `","` + steps[i].locY + `","` + steps[i].range + `","` + steps[i].npc + `","` + steps[i].list + `",`;
    }
    else if (steps[i].subType == "GL") {
     //lvl
     stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].subType + `","` + steps[i].level + `",`;
    }
    else if (steps[i].subType == "GM") {
     //mon
     stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].subType + `","` + steps[i].money + `",`;
    }
    else if (steps[i].subType == "GX") {
     //mon
     stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].subType + `","` + steps[i].xp + `",`;
    }
    else if (steps[i].subType == "GP") {
     //mon
     stepString = `[` + i + `]=[{"` + steps[i].type + `","` + steps[i].subType + `","` + steps[i].prof + `","` + steps[i].skill + `",`;
    }
   }
   else {
    //its select and should be discarded
   }
   var reqString = "{";
   for (var r in steps[i].reqs) {
    var capsule = `("` + steps[i].reqs[r]["type"] + `",`;
    for (var j = 0; j < steps[i].reqs[r].length - 1; j++) {
     capsule += steps[i].reqs[r][j] + `,`;
    }
    capsule += steps[i].reqs[r][steps[i].reqs[r].length - 1] + `),`;
    reqString += capsule;
   }
   reqString = reqString.slice(0, -1) + "}";
   stepString = stepString.slice(0, -1) + `},`;
   outputString += stepString + reqString + `],`;

  }
  outputString = outputString.slice(0, -1);
  $("#stringInput").val(outputString);
 }

 function StringToArray() {
  var stepPattern = /\[(\d*)\]=\[{(.*?)},{(.*?)}\]/gm;
  var inputString = $("#stringInput").val();
  var matches = [];
  var m;
  while ((m = stepPattern.exec(inputString)) !== null) {
   if (m.index === stepPattern.lastIndex) {
    stepPattern.lastIndex++;
   }
   matches.push(m);
  }
  matches.forEach(function(m) {
   ExtractStepData(m[1], m[2]);
   ExtractStepReqs(m[1], m[3]);
  });
  DisplaySteps();
 }

 function ExtractStepData(index, str) {
  var stepPattern = /\"(.*?)\"/gm;
  var values = [];
  var m;
  while ((m = stepPattern.exec(str)) !== null) {
   if (m.index === stepPattern.lastIndex) {
    stepPattern.lastIndex++;
   }
   //console.log(m);
   values.push(m[1]);
  }
  if (steps[index] == undefined) {
   var step = new Object();
   steps[index] = step;
  }
  steps[index].type = values[0];
  if (steps[index].type == "AQ" || steps[index].type == "CQ") {
   steps[index].qId = values[1];
   steps[index].locX = values[2];
   steps[index].locY = values[3];
   steps[index].range = values[4];
   steps[index].npc = values[5];
  }
  else if (steps[index].type == "FQ") {
   steps[index].qId = values[1];
   steps[index].locX = values[2];
   steps[index].locY = values[3];
   steps[index].range = values[4];
  }
  else if (steps[index].type == "PQ") {
   steps[index].qId = values[1];
   steps[index].locX = values[2];
   steps[index].locY = values[3];
   steps[index].range = values[4];
   steps[index].list = values[5];
  }
  else if (steps[index].type == "GT") {
   steps[index].locX = values[1];
   steps[index].locY = values[2];
   steps[index].range = values[3];
  }
  else if (steps[index].type == "NO") {
   steps[index].text = values[1];
  }
  else if (steps[index].type == "IT") {
   steps[index].subType = values[1];
   if (steps[index].subType == "TR") {
    steps[index].locX = values[2];
    steps[index].locY = values[3];
    steps[index].range = values[4];
    steps[index].npc = values[5];
    steps[index].list = values[6];
   }
   else if (steps[index].subType == "SH") {
    steps[index].locX = values[2];
    steps[index].locY = values[3];
    steps[index].range = values[4];
    steps[index].npc = values[5];
   }
   else if (steps[index].subType == "IR") {
    steps[index].locX = values[2];
    steps[index].locY = values[3];
    steps[index].range = values[4];
    steps[index].npc = values[5];
    steps[index].text = values[6];
   }
   else if (steps[index].subType == "VB") {
    steps[index].locX = values[2];
    steps[index].locY = values[3];
    steps[index].range = values[4];
    steps[index].npc = values[5];
    steps[index].list = values[6];
   }
  }
  else if (steps[index].type == "FT") {
   steps[index].subType = values[1];
   if (steps[index].subType == "FP") {
    steps[index].locX = values[2];
    steps[index].locY = values[3];
    steps[index].range = values[4];
    steps[index].npc = values[5];
    steps[index].dest = values[6];
   }
   else if (steps[index].subType == "DT") {
    steps[index].locX = values[2];
    steps[index].locY = values[3];
    steps[index].range = values[4];
   }
   else if (steps[index].subType == "TA") {
    steps[index].locX = values[2];
    steps[index].locY = values[3];
    steps[index].range = values[4];
    steps[index].npc = values[5];
   }
  }
  else if (steps[index].type == "GR") {
   steps[index].subType = values[1];
   if (steps[index].subType == "GL") {
    steps[index].level = values[2];
   }
   else if (steps[index].subType == "GM") {
    steps[index].money = values[2];
   }
   else if (steps[index].subType == "GX") {
    steps[index].xp = values[2];
   }
   else if (steps[index].subType == "GP") {
    steps[index].prof = values[2];
    steps[index].skill = values[3];
   }
  }

 }

 function ExtractStepReqs(index, str) {
  var pattern = /\(\"(.*?)\",(.*?)\)/gm;

  var m;
  if (steps[index] == undefined) {
   var step = new Object();
   steps[index] = step;
  }
  steps[index].reqs = [];
  steps[index].reqCount = 0;
  while ((m = pattern.exec(str)) !== null) {
   if (m.index === pattern.lastIndex) {
    pattern.lastIndex++;
   }
   steps[index].reqs[steps[index].reqCount] = [];
   steps[index].reqs[steps[index].reqCount]["type"] = m[1];
   var vals = m[2].split(`,`);
   for (var i = 0; i < vals.length; i++) {
    steps[index].reqs[steps[index].reqCount][i] = vals[i];
   }
   steps[index].reqCount++;
   //console.log(m);
  }
 }

 function CollapseAll() {

  $(".card-body").removeClass("show");

 }

 function ShowAll() {
  $(".card-body").addClass("show");
 }

 function ChangeCardHeader(index) {
  var headerString = "";
  var steptype = $("#step" + index + "TypeSelect :selected").val();

  if (steptype == "IT" || steptype == "FT" || steptype == "GR") {
   var subtype = $("#step" + index + "TypeSelectSub :selected").val();
   if (subtype == "SL") {
    headerString += stepTypes[steptype];
   }
   else {
    headerString += subTypes[subtype];
   }
  }
  else {
   headerString += stepTypes[steptype];
  }

  $("#step" + index + "info").html(headerString);
 }
 