CHORDs=chord:CHORD* { return chord.join(); }
CHORD=[A-G] { return "'ceg'"; }