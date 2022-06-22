const opgave1 = require('../opgave-1.js')
const opgave2 = require('../opgave-2.js')
const opgave3 = require('../opgave-3.js')
const opgave4 = require('../opgave-4.js')
const opgave5 = require('../opgave-5.js')
const opgave6 = require('../opgave-6.js')
const opgave7 = require('../opgave-7.js')
const opgave8 = require('../opgave-8.js')
const opgave9 = require('../opgave-9.js')
const opgave10 = require('../opgave-10.js')
const opgave11 = require('../opgave-11.js')
const opgave12 = require('../opgave-12.js')
const opgave13 = require('../opgave-13.js')
const opgave14 = require('../opgave-14.js')
const opgave15 = require('../opgave-15.js')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert
const addContext = require('mochawesome/addContext');



/* ******************* */
/* **** Opgave 1  **** */
/* ******************* */
describe('Opgave 1', function() {
  describe('isPositief(getal) ...', function() {
    it('...geeft true terug bij een positief getal', function() {
      expect(opgave1.isPositief(9)).to.equal(true, "isPositief(9) zou true terug moeten geven");
    });
    it('...geeft false terug bij een negatief getal', function() {
      expect(opgave1.isPositief(-9)).to.equal(false, "isPositief(-9) zou false terug moeten geven");
    });
    it('...geeft true terug bij 0', function() {
      expect(opgave1.isPositief(0)).to.equal(true, "isPositief(0) zou true terug moeten geven");
    });
  });
});


/* ******************* */
/* **** Opgave 2  **** */
/* ******************* */
describe('Opgave 2', function() {
  describe('som(a, b) ...', function() {
    it('...moet de som van twee positieve getallen correct berekenen', function() {
      expect(opgave2.som(3, 4)).to.equal(7, "som(3, 4) moet 7 als uitkomst hebben");
    });
    it('...moet de som van twee negatieve getallen correct berekenen', function() {
      expect(opgave2.som(-3, -4)).to.equal(-7, "som(-3, -4) moet -7 als uitkomst hebben");
    });
    it('...moet de som van een positief en negatief getal correct berekenen', function() {
      expect(opgave2.som(3, -4)).to.equal(-1, "som(3, -4) moet -1 als uitkomst hebben");
      expect(opgave2.som(-3, 4)).to.equal(1, "som(-3, 4) moet 1 als uitkomst hebben");
    });
    it('...moet sommen met 0 correct berekenen', function() {
      expect(opgave2.som(3, 0)).to.equal(3, "som(3, 0) moet 3 als uitkomst hebben");
      expect(opgave2.som(0, 3)).to.equal(3, "som(0, 3) moet 3 als uitkomst hebben");
      expect(opgave2.som(0, 0)).to.equal(0, "som(0, 0) moet 0 als uitkomst hebben");
    });
    it('...moet sommen met kommagetallen correct berekenen', function() {
      expect(opgave2.som(1.3, 4.8)).to.equal(6.1, "som(1.3, 4.8) moet 6.1 als uitkomst hebben");
      expect(opgave2.som(1.3, -4.8)).to.equal(-3.5, "som(1.3, -4.8) moet -3.5 als uitkomst hebben");
      expect(opgave2.som(-1.3, -4.8)).to.equal(-6.1, "som(-1.3, -4.8) moet -6.1 als uitkomst hebben");
      expect(opgave2.som(1.3, 0)).to.equal(1.3, "som(1.3, 0) moet 1.3 als uitkomst hebben");
    });
  });
});


/* ******************* */
/* **** Opgave 3  **** */
/* ******************* */
describe('Opgave 3', function() {
  describe('grootsteGetal(a, b) ...', function() {
    it('...geeft getal a terug als deze groter is dan getal b', function() {
      expect(opgave3.grootsteGetal(7, 4)).to.equal(7, "grootsteGetal(7, 4) zou 7 terug moeten geven");
    });
    it('...geeft getal b terug als deze groter is dan getal a', function() {
      expect(opgave3.grootsteGetal(2, 9)).to.equal(9, "grootsteGetal(2,9) zou 9 terug moeten geven");
    });
    it('...geeft getal a of getal b terug als deze even groot zijn', function() {
      expect(opgave3.grootsteGetal(6, 6)).to.equal(6, "grootsteGetal(6, 6) zou 6 terug moeten geven");
    });
    it('...werkt ook met 0 of negatieve getallen', function() {
      expect(opgave3.grootsteGetal(-6, 6)).to.equal(6, "grootsteGetal(-6, 6) zou 6 terug moeten geven");
      expect(opgave3.grootsteGetal(-6, -6)).to.equal(-6, "grootsteGetal(-6, -6) zou -6 terug moeten geven");
      expect(opgave3.grootsteGetal(-6, -4)).to.equal(-4, "grootsteGetal(-6, -4) zou -4 terug moeten geven");
      expect(opgave3.grootsteGetal(-6, 0)).to.equal(0, "grootsteGetal(-6, 0) zou 0 true terug moeten geven");
      expect(opgave3.grootsteGetal(0, -4)).to.equal(0, "grootsteGetal(0, -4) zou 0 terug moeten geven");
      expect(opgave3.grootsteGetal(6, 0)).to.equal(6, "grootsteGetal(6, 0) zou 6 terug moeten geven");
      expect(opgave3.grootsteGetal(0, 4)).to.equal(4, "grootsteGetal(0, 4) zou 4 terug moeten geven");
      expect(opgave3.grootsteGetal(0, 0)).to.equal(0, "grootsteGetal(0, 0) zou 0 terug moeten geven");
      expect(opgave3.grootsteGetal(-6, -8)).to.equal(-6, "grootsteGetal(-6, -8) zou -6 terug moeten geven");
    });
  });
});


/* ******************* */
/* **** Opgave 4  **** */
/* ******************* */
describe('Opgave 4', function() {
  describe('alleCijfers() ...', function() {
    it('...geeft de string "0123456789"', function() {
      expect(opgave4.alleCijfers()).to.equal("0123456789", 'alleCijfers() zou "0123456789" terug moeten geven');
    });
  });
});


/* ******************* */
/* **** Opgave 5  **** */
/* ******************* */
describe('Opgave 5', function() {
  describe('rijtje()...', function() {
    it('...geeft een lege string', function() {
      expect(opgave5.rijtje(0)).to.equal("", 'rijtje() zou "" terug moeten geven');
    });
  });
  describe('rijtje(0)...', function() {
    it('...geeft de string "0"', function() {
      expect(opgave5.rijtje(0)).to.equal("0", 'rijtje(0) zou "0" terug moeten geven');
    });
  });
  describe('rijtje( positief eindgetal )...', function() {
    it('...geeft string met aan elkaar geplakte getal van 0 t/m het gegeven eindgetal', function() {
      expect(opgave5.rijtje(1)).to.equal("01", 'rijtje(1) zou "01" terug moeten geven');
      expect(opgave5.rijtje(9)).to.equal("0123456789", 'rijtje(9) zou "0123456789" terug moeten geven');
      expect(opgave5.rijtje(20)).to.equal("01234567891011121314151617181920", 'rijtje(20) zou "01234567891011121314151617181920" terug moeten geven');
    });
  });
  describe('rijtje( ongeldige waarde )...', function() {
    it('...geeft een lege string', function() {
      expect(opgave5.rijtje(-4)).to.equal("", 'rijtje(-4) zou "" terug moeten geven');
      expect(opgave5.rijtje("een string")).to.equal("", 'rijtje("een string") zou "" terug moeten geven');
    });
  });
});


/* ******************* */
/* **** Opgave 6  **** */
/* ******************* */
describe('Opgave 6', function() {
  describe('mooiRijtje()...', function() {
    it('...geeft een lege string', function() {
      expect(opgave6.mooiRijtje()).to.equal("", 'rijtje() zou "" terug moeten geven');
    });
  });
  describe('rijtje(0)...', function() {
    it('...geeft de string "0"', function() {
      expect(opgave6.mooiRijtje(0)).to.equal("0", 'rijtje(0) zou "0" terug moeten geven');
    });
  });
  describe('rijtje( positief eindgetal )...', function() {
    it('...geeft string met aan elkaar geplakte getal van 0 t/m het gegeven eindgetal', function() {
      expect(opgave6.mooiRijtje(1)).to.equal("0 1", 'rijtje(1) zou "0 1" terug moeten geven');
      expect(opgave6.mooiRijtje(9)).to.equal("0 1 2 3 4 5 6 7 8 9", 'rijtje(9) zou "0 1 2 3 4 5 6 7 8 9" terug moeten geven');
      expect(opgave6.mooiRijtje(20)).to.equal("0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
                                          'rijtje(20) zou "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20" terug moeten geven');
    });
  });
  describe('rijtje( ongeldige waarde )...', function() {
    it('...geeft een lege string', function() {
      expect(opgave6.mooiRijtje(-4)).to.equal("", 'rijtje(-4) zou "" terug moeten geven');
      expect(opgave6.mooiRijtje("een string")).to.equal("", 'rijtje("een string") zou "" terug moeten geven');
    });
  });
});


/* ******************* */
/* **** Opgave 7  **** */
/* ******************* */
describe('Opgave 7', function() {
  describe('gemiddelde( array met numbers )...', function() {
    it('...geeft het juiste gemiddelde terug', function() {
      expect(opgave7.gemiddelde([0, 1])).to.equal(0.5, 'gemiddelde([0, 1]) zou 0.5 terug moeten geven');
      expect(opgave7.gemiddelde([1, 5, 10, 19])).to.equal(8.75, 'gemiddelde([1, 5, 10, 19]) zou 8.75 terug moeten geven');
      expect(opgave7.gemiddelde([1.2, 5.9, 10.0, 19.5])).to.equal(9.15, 'gemiddelde([1.2, 5.9, 10.0, 19.5]) zou 9.15 terug moeten geven');
      expect(opgave7.gemiddelde([1.2, -5.9, 10.0, 19.5])).to.equal(6.2, 'gemiddelde([1.2, -5.9, 10.0, 19.5]) zou 6.2 terug moeten geven');
    });
  });
  describe('gemiddelde( lege array )...', function() {
    it('...geeft undefined terug', function() {
      expect(opgave7.gemiddelde([])).to.equal(undefined, 'gemiddelde([]) zou undefined terug moeten geven');
    });
  });
});


/* ******************* */
/* **** Opgave 8  **** */
/* ******************* */
describe('Opgave 8', function() {
  describe('minimum( array met numbers )...', function() {
    it('...geeft het laagste terug', function() {
      expect(opgave8.minimum([0, 1])).to.equal(0, 'minimum([0, 1]) zou 0 terug moeten geven');
      expect(opgave8.minimum([10, 5, 1, 19])).to.equal(1, 'minimum([10, 5, 1, 19]) zou 1 terug moeten geven');
      expect(opgave8.minimum([19.2, 5.9, 10.0, 1.5])).to.equal(1.5, 'minimum([19.2, 5.9, 10.0, 1.5]) zou 1.5 terug moeten geven');
      expect(opgave8.minimum([1.2, -5.9, 10.0, 19.5])).to.equal(-5.9, 'minimum([1.2, -5.9, 10.0, 19.5]) zou -5.9 terug moeten geven');
    });
  });
  describe('gemiddelde( lege array )...', function() {
    it('...geeft undefined terug', function() {
      expect(opgave8.minimum([])).to.equal(undefined, 'minimum([]) zou undefined terug moeten geven');
    });
  });
});


/* ******************* */
/* **** Opgave 9  **** */
/* ******************* */
describe('Opgave 9', function() {
  describe('minimum( array met numbers )...', function() {
    it('...geeft het aantal negatieve getallen terug', function() {
      expect(opgave9.aantalNegatieveGetallen([0, 1])).to.equal(0, 'minimum([0, 1]) zou 0 terug moeten geven');
      expect(opgave9.aantalNegatieveGetallen([10, -5, 1, -19])).to.equal(2, 'minimum([10, -5, 1, -19]) zou 2 terug moeten geven');
      expect(opgave9.aantalNegatieveGetallen([19.2, 5.9, 10.0, 1.5])).to.equal(0, 'minimum([19.2, 5.9, 10.0, 1.5]) zou 0 terug moeten geven');
      expect(opgave9.aantalNegatieveGetallen([1.2, -5.9, -10.0, -19.5])).to.equal(3, 'minimum([1.2, -5.9, -10.0, -19.5]) zou 3 terug moeten geven');
    });
  });
  describe('minimum( lege array )...', function() {
    it('...geeft 0 terug', function() {
      expect(opgave9.aantalNegatieveGetallen([])).to.equal(0, 'minimum([]) zou 0 terug moeten geven');
    });
  });
});


/* ******************* */
/* **** Opgave 10 **** */
/* ******************* */
describe('Opgave 10', function() {
  describe('aantalKeerA( "string zonder a\'s" )...', function() {
    it('...geeft 0 terug', function() {
      expect(opgave10.aantalKeerA("hoi")).to.equal(0, 'aantalKeerA("hoi") zou 0 terug moeten geven');
      expect(opgave10.aantalKeerA("vis")).to.equal(0, 'aantalKeerA("vis") zou 2 terug moeten geven');
      expect(opgave10.aantalKeerA("dessert")).to.equal(0, 'aantalKeerA("dessert") zou 0 terug moeten geven');
      expect(opgave10.aantalKeerA("doktersopleiding")).to.equal(0, 'aantalKeerA("doktersopleiding") zou 3 terug moeten geven');
    });
  });
  describe('aantalKeerA( string met a\'s )...', function() {
    it('...geeft het correcte aantal a\'s  terug', function() {
      expect(opgave10.aantalKeerA("hallo")).to.equal(1, 'aantalKeerA("hallo") zou 1 terug moeten geven');
      expect(opgave10.aantalKeerA("aas")).to.equal(2, 'aantalKeerA("aas") zou 2 terug moeten geven');
      expect(opgave10.aantalKeerA("vlaai")).to.equal(2, 'aantalKeerA("vlaai") zou 2 terug moeten geven');
      expect(opgave10.aantalKeerA("anja")).to.equal(2, 'aantalKeerA("anja") zou 2 terug moeten geven');
      expect(opgave10.aantalKeerA("brandweercommandantenacademie")).to.equal(5, 'aantalKeerA("brandweercommandantenacademie") zou 3 terug moeten geven');
    });
  });
  describe('minimum( lege string )...', function() {
    it('...geeft 0 terug', function() {
      expect(opgave10.aantalKeerA("")).to.equal(0, 'aantalKeerA("") zou 0 terug moeten geven');
    });
  });
});


/* ******************* */
/* **** Opgave 11 **** */
/* ******************* */
describe('Opgave 11', function() {
  describe('isPalindroom(x)...', function() {
    it('...geeft false terug als x geen palindroom is.', function() {
      expect(opgave11.isPalindroom("hoi")).to.equal(false, 'isPalindroom("hoi") zou false terug moeten geven');
      expect(opgave11.isPalindroom("doktersopleiding")).to.equal(false, 'isPalindroom("doktersopleiding") zou false terug moeten geven');expect(opgave11.isPalindroom("vis")).to.equal(false, 'isPalindroom("vis") zou false terug moeten geven');
      expect(opgave11.isPalindroom("123456")).to.equal(false, 'isPalindroom("123456") zou false terug moeten geven');
    });
    it('...geeft true terug als x een palindroom is.', function() {
      expect(opgave11.isPalindroom("lepel")).to.equal(true, 'isPalindroom("lepel") zou true terug moeten geven');
      expect(opgave11.isPalindroom("partyboobytrap")).to.equal(true, 'isPalindroom("partyboobytrap") zou true terug moeten geven');
      expect(opgave11.isPalindroom("129858921")).to.equal(true, 'isPalindroom("129858921") zou true terug moeten geven');
    });
    it('...geeft true terug als x één teken lang is.', function() {
      expect(opgave11.isPalindroom("l")).to.equal(true, 'isPalindroom("l") zou true terug moeten geven');
      expect(opgave11.isPalindroom("9")).to.equal(true, 'isPalindroom("9") zou true terug moeten geven');
      expect(opgave11.isPalindroom("%")).to.equal(true, 'isPalindroom("%") zou true terug moeten geven');
    });
    it('...geeft true terug als x een lege string is.', function() {
      expect(opgave11.isPalindroom("")).to.equal(true, 'isPalindroom("") zou true terug moeten geven');
    });
  });
});


/* ******************* */
/* **** Opgave 12 **** */
/* ******************* */
describe('Opgave 12', function() {
  describe('isPalindroom(x)...', function() {
    it('...geeft true terug als x een palindroom is.', function() {
      expect(opgave12.isPalindroom("lepel")).to.equal(true, 'isPalindroom("lepel") zou true terug moeten geven');
      expect(opgave12.isPalindroom("partyboobytrap")).to.equal(true, 'isPalindroom("partyboobytrap") zou true terug moeten geven');
    });
    it('...geeft false terug als x geen palindroom is.', function() {
      expect(opgave12.isPalindroom("hoi")).to.equal(false, 'isPalindroom("hoi") zou false terug moeten geven');
      expect(opgave12.isPalindroom("doktersopleiding")).to.equal(false, 'isPalindroom("doktersopleiding") zou false terug moeten geven');
    });
    it('...geeft false terug als x cijfers bevat.', function() {
      expect(opgave12.isPalindroom("dokters0pl3iding")).to.equal(false, 'isPalindroom("doktersopleiding") zou false terug moeten geven');
      expect(opgave12.isPalindroom("123456")).to.equal(false, 'isPalindroom("123456") zou false terug moeten geven');
      expect(opgave12.isPalindroom("129858921")).to.equal(false, 'isPalindroom("129858921") zou false terug moeten geven');
    });
    it('...geeft false terug als x één teken lang is.', function() {
      expect(opgave12.isPalindroom("l")).to.equal(false, 'isPalindroom("l") zou false terug moeten geven');
      expect(opgave12.isPalindroom("9")).to.equal(false, 'isPalindroom("9") zou false terug moeten geven');
      expect(opgave12.isPalindroom("%")).to.equal(false, 'isPalindroom("%") zou false terug moeten geven');
    });
    it('...geeft false terug als x een lege string is.', function() {
      expect(opgave12.isPalindroom("")).to.equal(false, 'isPalindroom("") zou false terug moeten geven');
    });
  });
});


/* ******************* */
/* **** Opgave 13 **** */
/* ******************* */
describe('Opgave 13', function() {
  describe('isPalindroom(x)...', function() {
    it('...geeft true terug als x een palindroom met alleen kleine letters is.', function() {
      expect(opgave13.isPalindroom("lepel")).to.equal(true, 'isPalindroom("lepel") zou true terug moeten geven');
      expect(opgave13.isPalindroom("partyboobytrap")).to.equal(true, 'isPalindroom("partyboobytrap") zou true terug moeten geven');
    });
    it('...geeft true terug als x een palindroom met alleen hoofdletters is.', function() {
      expect(opgave13.isPalindroom("LEPEL")).to.equal(true, 'isPalindroom("LEPEL") zou true terug moeten geven');
      expect(opgave13.isPalindroom("PARTYBOOBYTRAP")).to.equal(true, 'isPalindroom("PARTYBOOBYTRAP") zou true terug moeten geven');
    });
    it('...geeft true terug als x een palindroom met symmetrische hoofdletters en kleine letters', function() {
      expect(opgave13.isPalindroom("lEpEl")).to.equal(true, 'isPalindroom("lEpEl") zou true terug moeten geven');
      expect(opgave13.isPalindroom("paRtyBooBytRap")).to.equal(true, 'isPalindroom("paRtyBooBytRap") zou true terug moeten geven');
    });
    it('...geeft true terug als x een palindroom met asymmetrische hoofdletters en kleine letters', function() {
      expect(opgave13.isPalindroom("LepEl")).to.equal(true, 'isPalindroom("LepEl") zou true terug moeten geven');
      expect(opgave13.isPalindroom("pArtYboObyTrap")).to.equal(true, 'isPalindroom("pArtYboObyTrap") zou true terug moeten geven');
    });
    it('...geeft false terug als x geen palindroom is.', function() {
      expect(opgave13.isPalindroom("hoi")).to.equal(false, 'isPalindroom("hoi") zou false terug moeten geven');
      expect(opgave13.isPalindroom("doktersopleiding")).to.equal(false, 'isPalindroom("doktersopleiding") zou false terug moeten geven');
    });
    it('...geeft false terug als x cijfers bevat.', function() {
      expect(opgave13.isPalindroom("dokters0pl3iding")).to.equal(false, 'isPalindroom("doktersopleiding") zou false terug moeten geven');
      expect(opgave13.isPalindroom("123456")).to.equal(false, 'isPalindroom("123456") zou false terug moeten geven');
      expect(opgave13.isPalindroom("129858921")).to.equal(false, 'isPalindroom("129858921") zou false terug moeten geven');
    });
    it('...geeft false terug als x één teken lang is.', function() {
      expect(opgave13.isPalindroom("l")).to.equal(false, 'isPalindroom("l") zou false terug moeten geven');
      expect(opgave13.isPalindroom("9")).to.equal(false, 'isPalindroom("9") zou false terug moeten geven');
      expect(opgave13.isPalindroom("%")).to.equal(false, 'isPalindroom("%") zou false terug moeten geven');
    });
    it('...geeft false terug als x een lege string is.', function() {
      expect(opgave13.isPalindroom("")).to.equal(false, 'isPalindroom("") zou false terug moeten geven');
    });
  });
});


/* ******************* */
/* **** Opgave 14 **** */
/* ******************* */
describe('Opgave 14', function() {
  describe('keerOm(x)...', function() {
    it('...geeft een omgekeerde string terug bij meerdere letters.', function() {
      expect(opgave14.keerOm("woord")).to.equal("droow", 'keerOm("woord") zou "droow" terug moeten geven');
      expect(opgave14.keerOm("computer")).to.equal("retupmoc", 'keerOm("computer") zou "retupmoc" terug moeten geven');
      expect(opgave14.keerOm("Hoofdletter")).to.equal("retteldfooH", 'keerOm("Hoofdletter") zou "retteldfooH" terug moeten geven');
    });
    it('...geeft een omgekeerde string terug bij letter, cijfers, spaties en leestekens.', function() {
      expect(opgave14.keerOm("woord")).to.equal("droow", 'keerOm("woord") zou "droow" terug moeten geven');
      expect(opgave14.keerOm("computer")).to.equal("retupmoc", 'keerOm("computer") zou "retupmoc" terug moeten geven');
      expect(opgave14.keerOm("Hoofdletter")).to.equal("retteldfooH", 'keerOm("Hoofdletter") zou "retteldfooH" terug moeten geven');
    });
    it('...geeft een lege string terug als de input een lege string is', function() {
      expect(opgave14.keerOm("")).to.equal("", 'keerOm("") zou "" terug moeten geven');
    });
  });
});


/* ******************* */
/* **** Opgave 15 **** */
/* ******************* */
describe('Opgave 15', function() {
  describe('isAnagram(x, y)...', function() {
    it('...geeft true terug als x en y uit dezelfde kleine letters bestaan.', function() {
      expect(opgave15.isAnagram("woord", "oordw")).to.equal(true, 'isAnagram("woord", "oordw") zou true terug moeten geven');
      expect(opgave15.isAnagram("computer", "uercmotp")).to.equal(true, 'isAnagram("computer", "uercmotp") zou true terug moeten geven');
    });
    it('...geeft false terug als x en y niet uit dezelfde kleine letters bestaan.', function() {
      expect(opgave15.isAnagram("woord", "hallo")).to.equal(false, 'isAnagram("woord", "hallo") zou false terug moeten geven');
      expect(opgave15.isAnagram("computer", "testwoord")).to.equal(false, 'isAnagram("computer", "testwoord") zou false terug moeten geven');
    });
    it('...werkt ook correct met hoofdletters, cijfers, spaties en leestekens.', function() {
      expect(opgave15.isAnagram("wOOrd", "oordw")).to.equal(true, 'isAnagram("woord", "oordw") zou true terug moeten geven');
      expect(opgave15.isAnagram("computer", "uErCmotP")).to.equal(true, 'isAnagram("computer", "uercmotp") zou true terug moeten geven');
      expect(opgave15.isAnagram("Hoofdl3tt3r!", "OOdfL33tt!rh")).to.equal(true, 'isAnagram("Hoofdl3tt3r!", "OOdfL33tt!rh") zou true terug moeten geven');
      expect(opgave15.isAnagram("Hoofdl3tt3r!", "dfL33tt!rh")).to.equal(false, 'isAnagram("Hoofdl3tt3r!", "dfL33tt!rh") zou false terug moeten geven');
    });
    it('...werkt ook als één of beide parameters een lege string is', function() {
      expect(opgave15.isAnagram("", "")).to.equal(true, 'isAnagram("", "") zou true terug moeten geven');
      expect(opgave15.isAnagram("", "anders")).to.equal(false, 'isAnagram("", "anders") zou false terug moeten geven');
      expect(opgave15.isAnagram("anders", "")).to.equal(false, 'isAnagram("anders", "") zou false terug moeten geven');
    });
  });
});


delete require.cache[require.resolve('../opgave-1.js')]
delete require.cache[require.resolve('../opgave-2.js')]
delete require.cache[require.resolve('../opgave-3.js')]
delete require.cache[require.resolve('../opgave-4.js')]
delete require.cache[require.resolve('../opgave-5.js')]
delete require.cache[require.resolve('../opgave-6.js')]
delete require.cache[require.resolve('../opgave-7.js')]
delete require.cache[require.resolve('../opgave-8.js')]
delete require.cache[require.resolve('../opgave-9.js')]
delete require.cache[require.resolve('../opgave-10.js')]
delete require.cache[require.resolve('../opgave-11.js')]
delete require.cache[require.resolve('../opgave-12.js')]
delete require.cache[require.resolve('../opgave-13.js')]
delete require.cache[require.resolve('../opgave-14.js')]
delete require.cache[require.resolve('../opgave-15.js')]
