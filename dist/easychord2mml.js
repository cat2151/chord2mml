const easychord = {};
easychord.chordId = "chord-notation";
easychord.mmlId = "mml";

easychord.init = function() {
  easychord.chord = document.querySelector("#" + easychord.chordId);
  easychord.chord.addEventListener("input", easychord.play);

  easychord.mml = document.querySelector("#" + easychord.mmlId);

  easyabcjs6.play = easychord.play;
  easyabcjs6.init();
}

easychord.play = function() {
  const chord = easychord.chord.value;
  let mml = "";
  let abc = "";

  try {
    mml = window.chord2mml.parse(chord);
    easychord.mml.value = mml;
    abc = window.mml2abc.parse(mml);
  } catch (error) {
    console.error(error);
  }

  easyabcjs6.abcNotation.value = abc;
  easyabcjs6.playSub(abc, ABCJS, easyabcjs6.musicScoreId);
}

easychord.init();
