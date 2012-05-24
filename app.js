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

var PMPuzzle = PMPuzzle || {};

PMPuzzle.App = function() {

  // For debugging... outputs destination coordinates in card title
  var cheatMode = true;

  init();

  function randOrd() {
    return (Math.round(Math.random())-0.5);
  }

  function init() {

    // create the card stack, with randomly ordered cards
    var randomCardKeys = Object.keys(PMPuzzle.CARDS).sort(randOrd).sort(randOrd);

    $.each(randomCardKeys, function(i, card){
      var stackId = PMPuzzle.CARDS[card];
      if(cheatMode) {
        card = stackId + ' ' + card;
      }
      $('<div>' + card + '</div>').data('matches', stackId).attr('id', "card" + stackId).appendTo('#stack').draggable({
        containment: '#page',
        stack: '#stack div',
        cursor: 'move',
        revert: true
      });
    });

    // add the card table and drop div
    // TODO: could count headers instead of hard coded 10, but objects don't have .length
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
    $('#grid tr:first td').addClass('pg');
    $('#grid td:first-child').addClass('ka');
    $('#grid tr:first td:first-child').addClass('blank');

    // Insert header text (this could be disabled if we want headers to become cards to drop too
    $.each(PMPuzzle.COLUMN_HEADERS, function(headerText, coord){
      $('#grid #'+coord).text(headerText);
    });
    $.each(PMPuzzle.ROW_HEADERS, function(headerText, coord){
      $('#grid #'+coord).text(headerText);
    });
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


