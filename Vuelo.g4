grammar Vuelo;

vuelo:
    codigo_vuelo aeropuerto_salida GUION aeropuerto_llegada hora COMA estado COMA GATE_LABEL puerta EOF
    ;

codigo_vuelo: LETRA LETRA DIGITO DIGITO DIGITO;

aeropuerto_salida: aeropuerto;
aeropuerto_llegada: aeropuerto;
aeropuerto: LETRA LETRA LETRA;

hora: DIGITO DIGITO ':' DIGITO DIGITO
    | NOW
    ;

estado: ON_TIME | DELAYED | CANCELLED;

puerta: LETRA DIGITO+ ;

GATE_LABEL: 'Gate:';

GUION: '-';
COMA: ',';
DOS_PUNTOS: ':';
ON_TIME: 'ON_TIME';
DELAYED: 'DELAYED';
CANCELLED: 'CANCELLED';
NOW: 'NOW';

LETRA: [A-Z];
DIGITO: [0-9];

WS: [ \t\r\n]+ -> skip;