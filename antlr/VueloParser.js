// Generated from Vuelo.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import VueloListener from './VueloListener.js';
const serializedATN = [4,1,11,59,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,
1,5,1,5,3,5,49,8,5,1,6,1,6,1,7,1,7,4,7,55,8,7,11,7,12,7,56,1,7,0,0,8,0,2,
4,6,8,10,12,14,0,1,1,0,5,7,52,0,16,1,0,0,0,2,28,1,0,0,0,4,34,1,0,0,0,6,36,
1,0,0,0,8,38,1,0,0,0,10,48,1,0,0,0,12,50,1,0,0,0,14,52,1,0,0,0,16,17,3,2,
1,0,17,18,3,4,2,0,18,19,5,3,0,0,19,20,3,6,3,0,20,21,3,10,5,0,21,22,5,4,0,
0,22,23,3,12,6,0,23,24,5,4,0,0,24,25,5,2,0,0,25,26,3,14,7,0,26,27,5,0,0,
1,27,1,1,0,0,0,28,29,5,9,0,0,29,30,5,9,0,0,30,31,5,10,0,0,31,32,5,10,0,0,
32,33,5,10,0,0,33,3,1,0,0,0,34,35,3,8,4,0,35,5,1,0,0,0,36,37,3,8,4,0,37,
7,1,0,0,0,38,39,5,9,0,0,39,40,5,9,0,0,40,41,5,9,0,0,41,9,1,0,0,0,42,43,5,
10,0,0,43,44,5,10,0,0,44,45,5,1,0,0,45,46,5,10,0,0,46,49,5,10,0,0,47,49,
5,8,0,0,48,42,1,0,0,0,48,47,1,0,0,0,49,11,1,0,0,0,50,51,7,0,0,0,51,13,1,
0,0,0,52,54,5,9,0,0,53,55,5,10,0,0,54,53,1,0,0,0,55,56,1,0,0,0,56,54,1,0,
0,0,56,57,1,0,0,0,57,15,1,0,0,0,2,48,56];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class VueloParser extends antlr4.Parser {

    static grammarFileName = "Vuelo.g4";
    static literalNames = [ null, "':'", "'Gate:'", "'-'", "','", "'ON_TIME'", 
                            "'DELAYED'", "'CANCELLED'", "'NOW'" ];
    static symbolicNames = [ null, null, "GATE_LABEL", "GUION", "COMA", 
                             "ON_TIME", "DELAYED", "CANCELLED", "NOW", "LETRA", 
                             "DIGITO", "WS" ];
    static ruleNames = [ "vuelo", "codigo_vuelo", "aeropuerto_salida", "aeropuerto_llegada", 
                         "aeropuerto", "hora", "estado", "puerta" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = VueloParser.ruleNames;
        this.literalNames = VueloParser.literalNames;
        this.symbolicNames = VueloParser.symbolicNames;
    }



	vuelo() {
	    let localctx = new VueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, VueloParser.RULE_vuelo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.codigo_vuelo();
	        this.state = 17;
	        this.aeropuerto_salida();
	        this.state = 18;
	        this.match(VueloParser.GUION);
	        this.state = 19;
	        this.aeropuerto_llegada();
	        this.state = 20;
	        this.hora();
	        this.state = 21;
	        this.match(VueloParser.COMA);
	        this.state = 22;
	        this.estado();
	        this.state = 23;
	        this.match(VueloParser.COMA);
	        this.state = 24;
	        this.match(VueloParser.GATE_LABEL);
	        this.state = 25;
	        this.puerta();
	        this.state = 26;
	        this.match(VueloParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	codigo_vuelo() {
	    let localctx = new Codigo_vueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, VueloParser.RULE_codigo_vuelo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(VueloParser.LETRA);
	        this.state = 29;
	        this.match(VueloParser.LETRA);
	        this.state = 30;
	        this.match(VueloParser.DIGITO);
	        this.state = 31;
	        this.match(VueloParser.DIGITO);
	        this.state = 32;
	        this.match(VueloParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aeropuerto_salida() {
	    let localctx = new Aeropuerto_salidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, VueloParser.RULE_aeropuerto_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.aeropuerto();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aeropuerto_llegada() {
	    let localctx = new Aeropuerto_llegadaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, VueloParser.RULE_aeropuerto_llegada);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.aeropuerto();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aeropuerto() {
	    let localctx = new AeropuertoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, VueloParser.RULE_aeropuerto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(VueloParser.LETRA);
	        this.state = 39;
	        this.match(VueloParser.LETRA);
	        this.state = 40;
	        this.match(VueloParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hora() {
	    let localctx = new HoraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, VueloParser.RULE_hora);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.match(VueloParser.DIGITO);
	            this.state = 43;
	            this.match(VueloParser.DIGITO);
	            this.state = 44;
	            this.match(VueloParser.T__0);
	            this.state = 45;
	            this.match(VueloParser.DIGITO);
	            this.state = 46;
	            this.match(VueloParser.DIGITO);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.match(VueloParser.NOW);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, VueloParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	puerta() {
	    let localctx = new PuertaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, VueloParser.RULE_puerta);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(VueloParser.LETRA);
	        this.state = 54; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 53;
	            this.match(VueloParser.DIGITO);
	            this.state = 56; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

VueloParser.EOF = antlr4.Token.EOF;
VueloParser.T__0 = 1;
VueloParser.GATE_LABEL = 2;
VueloParser.GUION = 3;
VueloParser.COMA = 4;
VueloParser.ON_TIME = 5;
VueloParser.DELAYED = 6;
VueloParser.CANCELLED = 7;
VueloParser.NOW = 8;
VueloParser.LETRA = 9;
VueloParser.DIGITO = 10;
VueloParser.WS = 11;

VueloParser.RULE_vuelo = 0;
VueloParser.RULE_codigo_vuelo = 1;
VueloParser.RULE_aeropuerto_salida = 2;
VueloParser.RULE_aeropuerto_llegada = 3;
VueloParser.RULE_aeropuerto = 4;
VueloParser.RULE_hora = 5;
VueloParser.RULE_estado = 6;
VueloParser.RULE_puerta = 7;

class VueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_vuelo;
    }

	codigo_vuelo() {
	    return this.getTypedRuleContext(Codigo_vueloContext,0);
	};

	aeropuerto_salida() {
	    return this.getTypedRuleContext(Aeropuerto_salidaContext,0);
	};

	GUION() {
	    return this.getToken(VueloParser.GUION, 0);
	};

	aeropuerto_llegada() {
	    return this.getTypedRuleContext(Aeropuerto_llegadaContext,0);
	};

	hora() {
	    return this.getTypedRuleContext(HoraContext,0);
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.COMA);
	    } else {
	        return this.getToken(VueloParser.COMA, i);
	    }
	};


	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	GATE_LABEL() {
	    return this.getToken(VueloParser.GATE_LABEL, 0);
	};

	puerta() {
	    return this.getTypedRuleContext(PuertaContext,0);
	};

	EOF() {
	    return this.getToken(VueloParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterVuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitVuelo(this);
		}
	}


}



class Codigo_vueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_codigo_vuelo;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.LETRA);
	    } else {
	        return this.getToken(VueloParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.DIGITO);
	    } else {
	        return this.getToken(VueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterCodigo_vuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitCodigo_vuelo(this);
		}
	}


}



class Aeropuerto_salidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_aeropuerto_salida;
    }

	aeropuerto() {
	    return this.getTypedRuleContext(AeropuertoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterAeropuerto_salida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitAeropuerto_salida(this);
		}
	}


}



class Aeropuerto_llegadaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_aeropuerto_llegada;
    }

	aeropuerto() {
	    return this.getTypedRuleContext(AeropuertoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterAeropuerto_llegada(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitAeropuerto_llegada(this);
		}
	}


}



class AeropuertoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_aeropuerto;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.LETRA);
	    } else {
	        return this.getToken(VueloParser.LETRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterAeropuerto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitAeropuerto(this);
		}
	}


}



class HoraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_hora;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.DIGITO);
	    } else {
	        return this.getToken(VueloParser.DIGITO, i);
	    }
	};


	NOW() {
	    return this.getToken(VueloParser.NOW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterHora(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitHora(this);
		}
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_estado;
    }

	ON_TIME() {
	    return this.getToken(VueloParser.ON_TIME, 0);
	};

	DELAYED() {
	    return this.getToken(VueloParser.DELAYED, 0);
	};

	CANCELLED() {
	    return this.getToken(VueloParser.CANCELLED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitEstado(this);
		}
	}


}



class PuertaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_puerta;
    }

	LETRA() {
	    return this.getToken(VueloParser.LETRA, 0);
	};

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.DIGITO);
	    } else {
	        return this.getToken(VueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterPuerta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitPuerta(this);
		}
	}


}




VueloParser.VueloContext = VueloContext; 
VueloParser.Codigo_vueloContext = Codigo_vueloContext; 
VueloParser.Aeropuerto_salidaContext = Aeropuerto_salidaContext; 
VueloParser.Aeropuerto_llegadaContext = Aeropuerto_llegadaContext; 
VueloParser.AeropuertoContext = AeropuertoContext; 
VueloParser.HoraContext = HoraContext; 
VueloParser.EstadoContext = EstadoContext; 
VueloParser.PuertaContext = PuertaContext; 
