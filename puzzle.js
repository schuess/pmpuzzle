/* TODO

fix firefox table inconsistency
fix hover color
make it possible to toggle knowledge area and process group rubrics
match the card sizes exactly
center cards on card stack
when cards are dropped, show that there are multiple cards (where appropriate)
be able to sort cards within a cell (where appropriate)
attach a hint to a card and have a hint toggle
figure out how to mark blank cells as blank
clean up row and column identifiers so I only have to specify them once

*/

var Puzzle = function() {

	init();

	function randOrd() {
	  return (Math.round(Math.random())-0.5);
	}

	function init() {
	  var I = 'B';
	  var P = 'C';
	  var E = 'D';
	  var M = 'E';
	  var C = 'F';

	  var INTEGRATION = 1;
	  var SCOPE = 2;
	  var TIME= 3;
	  var COST = 4;
	  var QUALITY = 5;
	  var HUMAN_RESOURCE = 6;
	  var COMMUNICATIONS = 7;
	  var RISK = 8;
	  var PROCUREMENT = 9;

	  var cards = {
		// heading cards
		"Initiating" : "B0",
		"Planning" : "C0",
		"Executing" : "D0",
		"Monitoring and Controlling" : "E0",
		"Closing" : "F0",
		"Integration" : "A1",
		"Scope" : "A2" ,
		"Time" : "A3" ,
		"Cost" : "A4" ,
		"Quality" : "A5",
		"Human Resource" : "A6",
		"Communications" : "A7",
		"Risk" : "A8",
		"Procurement" : "A9",

		// process cards
		"Develop Project Charter" : I+INTEGRATION, // 1
		"Identify Stakeholders" : I+COMMUNICATIONS,
		"Develop Project Management Plan" : P+INTEGRATION,
		"Collect Requirements" : P+SCOPE,
		"Define Scope" : P+SCOPE,
		"Create WBS" : P+SCOPE,
		"Define Activities" : P+TIME,
		"Sequence Activities" : P+TIME,
		"Estimate Activity Resources" : P+TIME,
		"Estimate Activity Durations" : P+TIME, // 10
		"Develop Schedule" : P+TIME,
		"Estimate Costs" : P+COST,
		"Determine Budget" : P+COST,
		"Plan Quality" : P+QUALITY,
		"Develop Human Resource Plan" : P+HUMAN_RESOURCE,
		"Plan Communications" : P+COMMUNICATIONS,
		"Plan Risk Management" : P+RISK,
		"Identify Risks" : P+RISK,
		"Perform Qualitative Risk Analysis" : P+RISK,
		"Perform Quantitative Risk Analysis" : P+RISK, // 20
		"Plan Risk Responses" : P+RISK,
		"Plan Procurements" : P+PROCUREMENT,
		"Direct and Manage Project Execution" : E+INTEGRATION,
		"Perform Quality Assurance" : E+QUALITY,
		"Acquire Project Team" : E+HUMAN_RESOURCE,
		"Develop Project Team" : E+HUMAN_RESOURCE,
		"Manage Project Team" : E+HUMAN_RESOURCE,
		"Distribute Information" : E+COMMUNICATIONS,
		"Manage Stakeholder Expectations" : E+COMMUNICATIONS,
		"Conduct Procurements" : E+PROCUREMENT, // 30
		"Monitor and Control Project Work" : M+INTEGRATION,
		"Perform Integrated Change Control" : M+INTEGRATION,
		"Verify Scope" : M+SCOPE,
		"Control Scope" : M+SCOPE,
		"Control Schedule" : M+TIME,
		"Control Costs" : M+COST,
		"Perform Quality Control" : M+QUALITY,
		"Report Performance" : M+COMMUNICATIONS,
		"Monitor and Control Risks" : M+RISK,
		"Administer Procurements" : M+PROCUREMENT, //40
		"Close Project or Phase" : C+INTEGRATION,
		"Close Procurements" : C+PROCUREMENT //42
	  };

	  // create the card stack, with randomly ordered cards
	  var randomCardKeys = Object.keys(cards).sort(randOrd).sort(randOrd);
	  for (var i in randomCardKeys) {
		var card = randomCardKeys[i];
		var stackId = cards[card];
		if (stackId.indexOf("A") == -1 && stackId.indexOf("0") == -1) {
		  $('<div>' + card + '</div>').data('matches', stackId).attr('id', "card" + stackId).appendTo('#stack').draggable({
			  containment: '#page',
			  stack: '#stack div',
			  cursor: 'move',
			  revert: true
		  });
		}
	  }

	  // add the card table and drop div
	  for (var i = 0; i < 10; i++) { // rows
		$('<tr></tr>').appendTo("#grid");
		for (var j = 0; j < 6; j++) { // columns
		  var id = String.fromCharCode(65 + j) + i; // e.g., B1
		  $('<td id="'+ id +'"><div></div></td>').data('accepts', id).appendTo("#grid tr:last").droppable({
			accept: '#stack div',
			hoverClass: 'hovering',
			drop: handleCardDrop
		  });
		}
	  }

	  // set the classes on the headings
	  var cardKeys = Object.keys(cards);
	  for (var i in cardKeys) {
		var card = cardKeys[i];
		var stackId = cards[card];
		if (i < 5) { // cards 0 - 4 = process groups
		  $('#' + stackId).empty().addClass('pg').removeClass('ui-droppable').append(card);
		}
		else if (i >= 5 && i < 14) { // cards 5 - 13 = knowledge areas
		  $('#' + stackId).empty().addClass('ka').removeClass('ui-droppable').append(card);
		}
	  }
	  $('#A0').addClass('blank'); // corner card is blank
	}

	function handleCardDrop(event, ui) {
	  var card = ui.draggable.data('matches');
	  var grid = $(this).data('accepts');

	  if (grid == card) {
		ui.draggable.draggable('disable');
		ui.draggable.position({ of: $(this), my: 'center', at: 'center' });
		ui.draggable.draggable('option', 'revert', false);
		ui.draggable.addClass('correct');
	  }
	}

};


