export const officeRegions = [
  {
    code: 'zar',
    location: { city: 'Arlington', state: 'VA' },
    regions: [
      'Alabama',
      'Georgia',
      'Maryland',
      'North Carolina',
      'Pennsylvania (26 western counties)',
      'South Carolina',
      'Virginia',
      'West Virginia',
    ],
  },
  {
    code: 'zbo',
    location: { city: 'Boston', state: 'MA' },
    regions: ['Maine', 'Massachusetts', 'New Hampshire', 'Rhode Island'],
  },
  {
    code: 'zch',
    location: { city: 'Chicago', state: 'IL' },
    regions: [
      'Illinois',
      'Indiana',
      'Ohio',
      'Michigan',
      'Wisconsin',
      'Minnesota',
      'North Dakota',
      'South Dakota',
      'Montana',
      'Idaho',
      'Nebraska',
      'Kansas',
      'Iowa',
      'Missouri',
      'Kentucky',
    ],
  },
  {
    code: 'zhn',
    location: { city: 'Houston', state: 'TX' },
    regions: ['Colorado', 'Oklahoma', 'New Mexico', 'Texas', 'Utah', 'Wyoming'],
  },
  {
    code: 'zla',
    location: { city: 'Los Angeles', state: 'CA' },
    regions: [
      'Arizona',
      'California (9 southern counties)',
      'Guam',
      'Hawaii',
      'Nevada (4 southern counties)',
    ],
  },
  {
    code: 'zmi',
    location: { city: 'Miami', state: 'FL' },
    regions: ['Florida', 'Puerto Rico', 'US Virgin Islands'],
  },
  {
    code: 'znk',
    location: { city: 'Newark', state: 'NJ' },
    regions: [
      'Connecticut',
      'Delaware',
      'New Jersey',
      'New York (Manhattan + 50 northern counties)',
      'Pennsylvania(41 eastern counties)',
      'Vermont',
    ],
  },
  {
    code: 'zny',
    location: { city: 'Bethpage', state: 'NY' },
    regions: ['New York (12 southern counties, excluding Manhattan)'],
  },
  {
    code: 'zol',
    location: { city: 'New Orleans', state: 'LA' },
    regions: ['Louisiana', 'Arkansas', 'Mississippi', 'Tennessee'],
  },
  {
    code: 'zsf',
    location: { city: 'San Francisco', state: 'CA' },
    regions: [
      'Alaska',
      'California (49 northern counties)',
      'Nevada (13 northern counties)',
      'Oregon',
      'Washington',
    ],
  },
];

export const continentEnum = Object.freeze({
  africa: 'Africa',
  asia: 'Asia',
  europe: 'Europe',
  northAmerica: 'North America',
  oceania: 'Oceania',
  southAmerica: 'South America',
  unknown: 'Unknown',
});

export const regions = [
  { territory: 'AFGHANISTAN', continent: continentEnum.asia },
  { territory: 'ALBANIA', continent: continentEnum.europe },
  { territory: 'ALGERIA', continent: continentEnum.africa },
  { territory: 'ANGOLA', continent: continentEnum.africa },
  { territory: 'ANTIGUA-BARBUDA', continent: continentEnum.northAmerica },
  { territory: 'ARGENTINA', continent: continentEnum.southAmerica },
  { territory: 'ARMENIA', continent: continentEnum.asia },
  { territory: 'AUSTRALIA', continent: continentEnum.oceania },
  { territory: 'AUSTRIA', continent: continentEnum.europe },
  { territory: 'AZERBAIJAN', continent: continentEnum.asia },
  { territory: 'BAHAMAS', continent: continentEnum.northAmerica },
  { territory: 'BAHRAIN', continent: continentEnum.asia },
  { territory: 'BANGLADESH', continent: continentEnum.asia },
  { territory: 'BARBADOS', continent: continentEnum.northAmerica },
  { territory: 'BELARUS', continent: continentEnum.europe },
  { territory: 'BELGIUM', continent: continentEnum.europe },
  { territory: 'BELIZE', continent: continentEnum.northAmerica },
  { territory: 'BENIN', continent: continentEnum.africa },
  { territory: 'BHUTAN', continent: continentEnum.asia },
  { territory: 'BOLIVIA', continent: continentEnum.southAmerica },
  { territory: 'BOSNIA-HERZEGOVINA', continent: continentEnum.europe },
  { territory: 'BOTSWANA', continent: continentEnum.africa },
  { territory: 'BRAZIL', continent: continentEnum.southAmerica },
  { territory: 'BRUNEI', continent: continentEnum.asia },
  { territory: 'BULGARIA', continent: continentEnum.europe },
  { territory: 'BURKINA FASO', continent: continentEnum.africa },
  { territory: 'BURMA', continent: continentEnum.asia }, //Now Myanmar
  { territory: 'BURUNDI', continent: continentEnum.africa },
  { territory: 'CAMBODIA', continent: continentEnum.asia },
  { territory: 'CAMEROON', continent: continentEnum.africa },
  { territory: 'CANADA', continent: continentEnum.northAmerica },
  { territory: 'CAPE VERDE', continent: continentEnum.africa },
  { territory: 'CENTRAL AFRICAN REPUBLIC', continent: continentEnum.africa },
  { territory: 'CHAD', continent: continentEnum.africa },
  { territory: 'CHILE', continent: continentEnum.southAmerica },
  { territory: "CHINA, PEOPLE'S REPUBLIC OF", continent: continentEnum.asia },
  { territory: 'COLOMBIA', continent: continentEnum.southAmerica },
  { territory: 'COMOROS', continent: continentEnum.africa },
  { territory: 'CONGO', continent: continentEnum.africa },
  { territory: 'COSTA RICA', continent: continentEnum.northAmerica },
  { territory: 'CROATIA', continent: continentEnum.europe },
  { territory: 'CUBA', continent: continentEnum.northAmerica },
  { territory: 'CYPRUS', continent: continentEnum.europe },
  { territory: 'CZECH REPUBLIC', continent: continentEnum.europe }, // Czechia is the official name since 1993
  { territory: 'CZECHOSLOVAKIA', continent: continentEnum.europe }, // Deprecated since 1993 (see Czechia/Czech Republic)
  { territory: "CÃ”TE D'IVOIRE", continent: continentEnum.africa }, //sic -- the name is Côte d'Ivoire, alternately Ivory Coast
  { territory: 'DEM REP OF THE CONGO', continent: continentEnum.africa },
  { territory: 'DENMARK', continent: continentEnum.europe },
  { territory: 'DJIBOUTI', continent: continentEnum.africa },
  { territory: 'DOMINICA', continent: continentEnum.northAmerica },
  { territory: 'DOMINICAN REPUBLIC', continent: continentEnum.northAmerica },
  { territory: 'ECUADOR', continent: continentEnum.southAmerica },
  { territory: 'EGYPT', continent: continentEnum.africa }, //Can be considered part of Asia
  { territory: 'EL SALVADOR', continent: continentEnum.northAmerica },
  { territory: 'EQUATORIAL GUINEA', continent: continentEnum.africa },
  { territory: 'ERITREA', continent: continentEnum.africa },
  { territory: 'ESTONIA', continent: continentEnum.europe },
  { territory: 'ESWATINI', continent: continentEnum.africa }, //Not yet included, formerly Swaziland
  { territory: 'ETHIOPIA', continent: continentEnum.africa },
  { territory: 'FIJI', continent: continentEnum.oceania },
  { territory: 'FINLAND', continent: continentEnum.europe }, //Not included in the data
  { territory: 'FRANCE', continent: continentEnum.europe },
  { territory: 'GABON', continent: continentEnum.africa },
  { territory: 'GEORGIA', continent: continentEnum.asia },
  { territory: 'GERMANY', continent: continentEnum.europe },
  { territory: 'GHANA', continent: continentEnum.africa },
  { territory: 'GREECE', continent: continentEnum.europe },
  { territory: 'GRENADA', continent: continentEnum.northAmerica },
  { territory: 'GUATEMALA', continent: continentEnum.northAmerica },
  { territory: 'GUINEA', continent: continentEnum.africa },
  { territory: 'GUINEA-BISSAU', continent: continentEnum.africa },
  { territory: 'GUYANA', continent: continentEnum.southAmerica },
  { territory: 'HAITI', continent: continentEnum.northAmerica },
  { territory: 'HONDURAS', continent: continentEnum.northAmerica },
  { territory: 'HONG KONG', continent: continentEnum.asia },
  { territory: 'HUNGARY', continent: continentEnum.europe },
  { territory: 'ICELAND', continent: continentEnum.europe },
  { territory: 'INDIA', continent: continentEnum.asia },
  { territory: 'INDONESIA', continent: continentEnum.asia },
  { territory: 'IRAN', continent: continentEnum.asia },
  { territory: 'IRAQ', continent: continentEnum.asia },
  { territory: 'IRELAND', continent: continentEnum.europe },
  { territory: 'ISRAEL', continent: continentEnum.asia },
  { territory: 'ITALY', continent: continentEnum.europe },
  { territory: 'JAMAICA', continent: continentEnum.northAmerica },
  { territory: 'JAPAN', continent: continentEnum.asia },
  { territory: 'JORDAN', continent: continentEnum.asia },
  { territory: 'KAZAKHSTAN', continent: continentEnum.asia },
  { territory: 'KENYA', continent: continentEnum.africa },
  { territory: 'KOREA', continent: continentEnum.asia },
  { territory: 'KOSOVO', continent: continentEnum.europe },
  { territory: 'KUWAIT', continent: continentEnum.asia },
  { territory: 'KYRGYZSTAN', continent: continentEnum.asia },
  { territory: 'LAOS', continent: continentEnum.asia },
  { territory: 'LATVIA', continent: continentEnum.europe },
  { territory: 'LEBANON', continent: continentEnum.asia },
  { territory: 'LESOTHO', continent: continentEnum.africa },
  { territory: 'LIBERIA', continent: continentEnum.africa },
  { territory: 'LIBYA', continent: continentEnum.africa },
  { territory: 'LITHUANIA', continent: continentEnum.europe },
  { territory: 'MACAO', continent: continentEnum.asia }, //Not included in current data but is similar to Hong Kong in its political standing
  { territory: 'MADAGASCAR', continent: continentEnum.africa },
  { territory: 'MALAWI', continent: continentEnum.africa },
  { territory: 'MALAYSIA', continent: continentEnum.asia },
  { territory: 'MALDIVES', continent: continentEnum.asia },
  { territory: 'MALI', continent: continentEnum.africa },
  { territory: 'MALTA', continent: continentEnum.europe },
  { territory: 'MAURITANIA', continent: continentEnum.africa },
  { territory: 'MAURITIUS', continent: continentEnum.africa },
  { territory: 'MEXICO', continent: continentEnum.northAmerica },
  { territory: 'MOLDOVA', continent: continentEnum.europe },
  { territory: 'MONGOLIA', continent: continentEnum.asia },
  { territory: 'MONTENEGRO', continent: continentEnum.europe }, // See Serbia
  { territory: 'MOROCCO', continent: continentEnum.africa },
  { territory: 'MOZAMBIQUE', continent: continentEnum.africa },
  { territory: 'MYANMAR', continent: continentEnum.asia }, //Not yet in the data -- formerly Burma
  { territory: 'NAMIBIA', continent: continentEnum.africa },
  { territory: 'NEPAL', continent: continentEnum.asia },
  { territory: 'NETHERLANDS', continent: continentEnum.europe },
  { territory: 'NEW ZEALAND', continent: continentEnum.oceania },
  { territory: 'NICARAGUA', continent: continentEnum.northAmerica },
  { territory: 'NIGER', continent: continentEnum.africa },
  { territory: 'NIGERIA', continent: continentEnum.africa },
  { territory: 'NORTH KOREA', continent: continentEnum.asia },
  { territory: 'NORTH MACEDONIA', continent: continentEnum.europe },
  { territory: 'NORWAY', continent: continentEnum.europe },
  { territory: 'OMAN', continent: continentEnum.asia },
  { territory: 'PAKISTAN', continent: continentEnum.asia },
  { territory: 'PALAU', continent: continentEnum.oceania },
  { territory: 'PANAMA', continent: continentEnum.northAmerica },
  { territory: 'PARAGUAY', continent: continentEnum.southAmerica },
  { territory: 'PERU', continent: continentEnum.southAmerica },
  { territory: 'PHILIPPINES', continent: continentEnum.asia },
  { territory: 'POLAND', continent: continentEnum.europe },
  { territory: 'PORTUGAL', continent: continentEnum.europe },
  { territory: 'QATAR', continent: continentEnum.asia },
  { territory: 'ROMANIA', continent: continentEnum.europe },
  { territory: 'RUSSIA', continent: continentEnum.europe }, //By population, 2/3 in Europe. Partially Asia.
  { territory: 'RWANDA', continent: continentEnum.africa },
  { territory: 'SAO TOME AND PRINCIPE', continent: continentEnum.africa },
  { territory: 'SAUDI ARABIA', continent: continentEnum.asia },
  { territory: 'SENEGAL', continent: continentEnum.africa },
  { territory: 'SERBIA', continent: continentEnum.europe }, // 2006+, formerly Yugoslavia/Serbia and Montenegro
  { territory: 'SERBIA AND MONTENEGRO', continent: continentEnum.europe }, //2003-2006, formerly YugoSlavia
  { territory: 'SEYCHELLES', continent: continentEnum.africa },
  { territory: 'SIERRA LEONE', continent: continentEnum.africa },
  { territory: 'SINGAPORE', continent: continentEnum.asia },
  { territory: 'SLOVAKIA', continent: continentEnum.europe },
  { territory: 'SLOVENIA', continent: continentEnum.europe },
  { territory: 'SOMALIA', continent: continentEnum.africa },
  { territory: 'SOUTH AFRICA', continent: continentEnum.africa },
  { territory: 'SOUTH KOREA', continent: continentEnum.asia },
  { territory: 'SOUTH SUDAN', continent: continentEnum.africa },
  { territory: 'SPAIN', continent: continentEnum.europe },
  { territory: 'SRI LANKA', continent: continentEnum.asia },
  { territory: 'ST. KITTS-NEVIS', continent: continentEnum.northAmerica },
  { territory: 'ST. LUCIA', continent: continentEnum.northAmerica },
  {
    territory: 'ST. VINCENT-GRENADINES',
    continent: continentEnum.northAmerica,
  },
  { territory: 'STATELESS', continent: continentEnum.unknown },
  { territory: 'SUDAN', continent: continentEnum.africa },
  { territory: 'SURINAME', continent: continentEnum.southAmerica },
  { territory: 'SWAZILAND', continent: continentEnum.africa }, //Now called Eswatini
  { territory: 'SWEDEN', continent: continentEnum.europe },
  { territory: 'SWITZERLAND', continent: continentEnum.europe },
  { territory: 'SYRIA', continent: continentEnum.asia },
  { territory: 'TAIWAN', continent: continentEnum.asia }, //Compare with Macao and Hong Kong for geopolitical standing
  { territory: 'TAJIKISTAN', continent: continentEnum.asia },
  { territory: 'TANZANIA', continent: continentEnum.africa },
  { territory: 'THAILAND', continent: continentEnum.asia },
  { territory: 'THE GAMBIA', continent: continentEnum.africa }, //Check with new data dumps for GAMBIA, THE
  { territory: 'TOGO', continent: continentEnum.africa },
  { territory: 'TONGA', continent: continentEnum.oceania },
  { territory: 'TRINIDAD AND TOBAGO', continent: continentEnum.northAmerica },
  { territory: 'TUNISIA', continent: continentEnum.africa },
  { territory: 'TURKEY', continent: continentEnum.europe },
  { territory: 'TURKMENISTAN', continent: continentEnum.asia },
  { territory: 'UGANDA', continent: continentEnum.africa },
  { territory: 'UKRAINE', continent: continentEnum.europe },
  { territory: 'UNITED ARAB EMIRATES', continent: continentEnum.asia },
  { territory: 'UNITED KINGDOM', continent: continentEnum.europe },
  { territory: 'UNKNOWN', continent: continentEnum.unknown },
  { territory: 'URUGUAY', continent: continentEnum.southAmerica },
  { territory: 'USSR', continent: continentEnum.europe }, //Partly in Asia, see Russia
  { territory: 'UZBEKISTAN', continent: continentEnum.asia },
  { territory: 'VENEZUELA', continent: continentEnum.southAmerica },
  { territory: 'VIETNAM', continent: continentEnum.asia },
  { territory: 'YEMEN', continent: continentEnum.asia },
  { territory: 'YUGOSLAVIA', continent: continentEnum.europe }, //Deprecated, now Serbia
  { territory: 'ZAMBIA', continent: continentEnum.africa },
  { territory: 'ZIMBABWE', continent: continentEnum.africa },
];
