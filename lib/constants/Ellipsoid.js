var ellipsoids = {
  MERIT: {
    a: 6378137,
    rf: 298.257,
    ellipseName: 'MERIT 1983'
  },
  SGS85: {
    a: 6378136,
    rf: 298.257,
    ellipseName: 'Soviet Geodetic System 85'
  },
  GRS80: {
    a: 6378137,
    rf: 298.257222101,
    ellipseName: 'GRS 1980(IUGG, 1980)'
  },
  IAU76: {
    a: 6378140,
    rf: 298.257,
    ellipseName: 'IAU 1976'
  },
  airy: {
    a: 6377563.396,
    b: 6356256.91,
    ellipseName: 'Airy 1830'
  },
  APL4: {
    a: 6378137,
    rf: 298.25,
    ellipseName: 'Appl. Physics. 1965'
  },
  NWL9D: {
    a: 6378145,
    rf: 298.25,
    ellipseName: 'Naval Weapons Lab., 1965'
  },
  mod_airy: {
    a: 6377340.189,
    b: 6356034.446,
    ellipseName: 'Modified Airy'
  },
  andrae: {
    a: 6377104.43,
    rf: 300,
    ellipseName: 'Andrae 1876 (Den., Iclnd.)'
  },
  aust_SA: {
    a: 6378160,
    rf: 298.25,
    ellipseName: 'Australian Natl & S. Amer. 1969'
  },
  GRS67: {
    a: 6378160,
    rf: 298.247167427,
    ellipseName: 'GRS 67(IUGG 1967)'
  },
  bessel: {
    a: 6377397.155,
    rf: 299.1528128,
    ellipseName: 'Bessel 1841'
  },
  bess_nam: {
    a: 6377483.865,
    rf: 299.1528128,
    ellipseName: 'Bessel 1841 (Namibia)'
  },
  clrk66: {
    a: 6378206.4,
    b: 6356583.8,
    ellipseName: 'Clarke 1866'
  },
  clrk80: {
    a: 6378249.145,
    rf: 293.4663,
    ellipseName: 'Clarke 1880 mod.'
  },
  clrk80ign: {
    a: 6378249.2,
    b: 6356515,
    rf: 293.4660213,
    ellipseName: 'Clarke 1880 (IGN)'
  },
  clrk58: {
    a: 6378293.645208759,
    rf: 294.2606763692654,
    ellipseName: 'Clarke 1858'
  },
  CPM: {
    a: 6375738.7,
    rf: 334.29,
    ellipseName: 'Comm. des Poids et Mesures 1799'
  },
  delmbr: {
    a: 6376428,
    rf: 311.5,
    ellipseName: 'Delambre 1810 (Belgium)'
  },
  engelis: {
    a: 6378136.05,
    rf: 298.2566,
    ellipseName: 'Engelis 1985'
  },
  evrst30: {
    a: 6377276.345,
    rf: 300.8017,
    ellipseName: 'Everest 1830'
  },
  evrst48: {
    a: 6377304.063,
    rf: 300.8017,
    ellipseName: 'Everest 1948'
  },
  evrst56: {
    a: 6377301.243,
    rf: 300.8017,
    ellipseName: 'Everest 1956'
  },
  evrst69: {
    a: 6377295.664,
    rf: 300.8017,
    ellipseName: 'Everest 1969'
  },
  evrstSS: {
    a: 6377298.556,
    rf: 300.8017,
    ellipseName: 'Everest (Sabah & Sarawak)'
  },
  fschr60: {
    a: 6378166,
    rf: 298.3,
    ellipseName: 'Fischer (Mercury Datum) 1960'
  },
  fschr60m: {
    a: 6378155,
    rf: 298.3,
    ellipseName: 'Fischer 1960'
  },
  fschr68: {
    a: 6378150,
    rf: 298.3,
    ellipseName: 'Fischer 1968'
  },
  helmert: {
    a: 6378200,
    rf: 298.3,
    ellipseName: 'Helmert 1906'
  },
  hough: {
    a: 6378270,
    rf: 297,
    ellipseName: 'Hough'
  },
  intl: {
    a: 6378388,
    rf: 297,
    ellipseName: 'International 1909 (Hayford)'
  },
  kaula: {
    a: 6378163,
    rf: 298.24,
    ellipseName: 'Kaula 1961'
  },
  lerch: {
    a: 6378139,
    rf: 298.257,
    ellipseName: 'Lerch 1979'
  },
  mprts: {
    a: 6397300,
    rf: 191,
    ellipseName: 'Maupertius 1738'
  },
  new_intl: {
    a: 6378157.5,
    b: 6356772.2,
    ellipseName: 'New International 1967'
  },
  plessis: {
    a: 6376523,
    rf: 6355863,
    ellipseName: 'Plessis 1817 (France)'
  },
  krass: {
    a: 6378245,
    rf: 298.3,
    ellipseName: 'Krassovsky, 1942'
  },
  SEasia: {
    a: 6378155,
    b: 6356773.3205,
    ellipseName: 'Southeast Asia'
  },
  walbeck: {
    a: 6376896,
    b: 6355834.8467,
    ellipseName: 'Walbeck'
  },
  WGS60: {
    a: 6378165,
    rf: 298.3,
    ellipseName: 'WGS 60'
  },
  WGS66: {
    a: 6378145,
    rf: 298.25,
    ellipseName: 'WGS 66'
  },
  WGS7: {
    a: 6378135,
    rf: 298.26,
    ellipseName: 'WGS 72'
  },
  WGS84: {
    a: 6378137,
    rf: 298.257223563,
    ellipseName: 'WGS 84'
  },
  sphere: {
    a: 6370997,
    b: 6370997,
    ellipseName: 'Normal Sphere (r=6370997)'
  }
};

export default ellipsoids;
