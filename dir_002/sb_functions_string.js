function getAlphaGroup(letter) {
	letter = letter.toLowerCase();
	switch(letter) {
		case "a":
		case "b":
		case "c":
		case "d":
		case "e":
			return "a_e";
			break;
		case "f":
		case "g":
		case "h":
		case "i":
		case "j":
			return "f_j";
			break;
		case "k":
		case "l":
		case "m":
		case "n":
		case "o":
			return "k_o";
			break;
		case "p":
		case "q":
		case "r":
		case "s":
		case "t":
			return "p_t";
			break;
		case "u":
		case "v":
		case "w":
		case "x":
		case "y":
		case "z":
			return "u_z";
			break;
		default:
			return "hashtag";
			break;
	}
}
function addslashes(string) {
    return string.replace(/\\/g, '\\\\').
        replace(/\u0008/g, '\\b').
        replace(/\t/g, '\\t').
        replace(/\n/g, '\\n').
        replace(/\f/g, '\\f').
        replace(/\r/g, '\\r').
        replace(/'/g, '\\\'').
	replace(/"/g, '*').
        replace(/"/g, '\\"');
}
//Function:     str_to_class()
//Arguments:    str (string)
//Description:  This function will return a sanitized string
//              based on the string passed
function str_to_class(str)
{
	//Remove commas, apostrophes and other special chars
	str = normalize(str);
	str = str.replace(/\&\#.*\;/g, "");
	str = str.replace(/,/g, "");
	str = str.replace(/\&/g, "and");
	str = str.replace(/\@/g, "at");
	str = str.replace(/:/g, "");
	str = str.replace(/\'/g, "");
	str = str.replace(/\(/g, "");
	str = str.replace(/\)/g, "");
	str = str.replace(/^([0-9])\./, "0$1");
	//Replace Spaces and dashes with underscores
	str = str.replace(/\./g, "_");
	str = str.replace(/\//g, "_");
	str = str.replace(/\ -\ /g, "_");
	str = str.replace(/-/g, "_");
	str = str.replace(/\ +/g, "_");
	str = str.replace(/__/g, "_");
	str = str.replace(/\+/g, "_plus");
	//Convert to lower case
	str = str.toLowerCase();
	return str;
}

function normalize(str) {
	table = {
		'Š':'S', 'š':'s', 'Đ':'Dj', 'đ':'dj', 'Ž':'Z', 'ž':'z', 'Č':'C', 'č':'c', 'Ć':'C', 'ć':'c',
		'À':'A', 'Á':'A', 'Â':'A', 'Ã':'A', 'Ä':'A', 'Å':'A', 'Æ':'A', 'Ç':'C', 'È':'E', 'É':'E',
		'Ê':'E', 'Ë':'E', 'Ì':'I', 'Í':'I', 'Î':'I', 'Ï':'I', 'Ñ':'N', 'Ò':'O', 'Ó':'O', 'Ô':'O',
		'Õ':'O', 'Ö':'O', 'Ø':'O', 'Ù':'U', 'Ú':'U', 'Û':'U', 'Ü':'U', 'Ý':'Y', 'Þ':'B', 'ß':'Ss',
		'à':'a', 'á':'a', 'â':'a', 'ã':'a', 'ä':'a', 'å':'a', 'æ':'a', 'ç':'c', 'è':'e', 'é':'e',
		'ê':'e', 'ë':'e', 'ì':'i', 'í':'i', 'î':'i', 'ï':'i', 'ð':'o', 'ñ':'n', 'ò':'o', 'ó':'o',
		'ô':'o', 'õ':'o', 'ö':'o', 'ø':'o', 'ù':'u', 'ú':'u', 'û':'u', 'ý':'y', 'ý':'y', 'þ':'b',
		'ÿ':'y', 'Ŕ':'R', 'ŕ':'r',
	};
    var html_entities = ["&apos;","&OElig;","&oelig;","&Scaron;","&scaron;","&Yuml;","&circ;","&tilde;","&ndash;","&mdash;","&lsquo;","&rsquo;","&sbquo;","&ldquo;","&rdquo;","&bdquo;","&dagger;","&Dagger;","&hellip;","&permil;","&lsaquo;","&rsaquo;","&euro;","&Agrave;","&Aacute;","&Acirc;","&Atilde;","&Auml;","&Aring;","&AElig;","&Ccedil;","&Egrave;","&Eacute;","&Ecirc;","&Euml;","&Igrave;","&Iacute;","&Icirc;","&Iuml;","&ETH;","&Ntilde;","&Ograve;","&Oacute;","&Ocirc;","&Otilde;","&Ouml;","&Oslash;","&Ugrave;","&Uacute;","&Ucirc;","&Uuml;","&Yacute;","&THORN;","&szlig;","&agrave;","&aacute;","&acirc;","&atilde;","&auml;","&aring;","&aelig;","&ccedil;","&egrave;","&eacute;","&ecirc;","&euml;","&igrave;","&iacute;","&icirc;","&iuml;","&eth;","&ntilde;","&ograve;","&oacute;","&ocirc;","&otilde;","&ouml;","&oslash;","&ugrave;","&uacute;","&ucirc;","&uuml;","&yacute;","&thorn;","&yuml;","&iexcl;","&curren;","&cent;","&pound;","&yen;","&brvbar;","&sect;","&uml;","&copy;","&ordf;","&laquo;","&not;","&reg;","&trade;","&macr;","&deg;","&plusmn;","&sup2;","&sup3;","&acute;","&micro;","&para;","&middot;","&cedil;","&sup1;","&ordm;","&raquo;","&frac14;","&frac12;","&frac34;","&iquest;","&times;","&divide;"];
    var invalid_characters = ["'","Œ","œ","Š","š","Ÿ","ˆ","˜","–","—","‘","’","‚","“","”","„","†","‡","…","‰","‹","›","€","À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","ø","ù","ú","û","ü","ý","þ","ÿ","¡","¤","¢","£","¥","¦","§","¨","©","ª","«","¬","®","™","¯","°","±","²","³","´","µ","¶","·","¸","¹","º","»","¼","½","¾","¿","×","÷"];
    // First, convert to an "invalid character"
    for (var i = 0; i < html_entities.length; i++) {
        str = str.replace(html_entities[i],invalid_characters[i]);
    }

    // Convert to normalized version
	for(var key in table) { 
		if (table.hasOwnProperty(key)) {
			str = str.replace(key, table[key]);
		}
	}
	return str;
}
function noitcejni(str) { var re = /^\"*\'*\s*\+*$/; return re.test(str); }
function valid_password(str) { var re = /^(?=.*\d)(?=.*[a-z]).{7,}$/; return re.test(str); }
function isInt(value) {
	return !isNaN(value) &&
		parseInt(Number(value)) == value &&
		!isNaN(parseInt(value, 10));
}
/**
 *  Base64 encode
 *  http://www.webtoolkit.info/
 */
var B64 = {
// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
		input = B64._utf8_encode(input);
		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
				this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
				this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}
		return output;
	},
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}
		return utftext;
	}
}