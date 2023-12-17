CHORDs=chord:CHORD* { return chord.join(); }
CHORD=C /D /E
C=_ "C" _ { return "'ceg'"; }
D=_ "D" _ { return "'df+a'"; }
E=_ "E" _ { return "'eg+b'"; }
_ "whitespace"= [ \t\n\r]*