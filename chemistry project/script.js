const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultContainer = document.getElementById('result-container');
const elementName = document.getElementById('element-name');
const atomicNumber = document.getElementById('atomic-number');
const atomicMass = document.getElementById('atomic-mass');
const symbol = document.getElementById('symbol');
const group = document.getElementById('group');
const period = document.getElementById('period');

const elementsData = [
    { name: 'Hydrogen', atomicNumber: 1, atomicMass: 1.00794, symbol: 'H', group: 1, period: 1 },
    { name: 'Helium', atomicNumber: 2, atomicMass: 4.002602, symbol: 'He', group: 18, period: 1 },
    { name: 'Lithium', atomicNumber: 3, atomicMass: 6.939, symbol: 'Li', group: 1, period: 2 },
    { name: 'Beryllium', atomicNumber: 4, atomicMass: 9.0122, symbol: 'Be', group: 2, period: 2 },
    { name: 'Boron', atomicNumber: 5, atomicMass: 10.81, symbol: 'B', group: 13, period:2  },
    { name: 'Carbon', atomicNumber: 6, atomicMass: 12.011, symbol: 'C', group: 14, period: 2 },
    { name: 'Nitrogen', atomicNumber: 7, atomicMass: 14.007, symbol: 'N', group: 15, period: 2 },
    { name: 'Oxygen', atomicNumber: 8, atomicMass: 15.999, symbol: 'O', group: 16, period: 2 },
    { name: 'Fluorine', atomicNumber:9, atomicMass:18.998403, symbol:'F', group:17, period:2},
    { name: 'Neon', atomicNumber:10, atomicMass:20.1797, symbol:'Ne', group:18, period:2},
    { name: 'Sodium', atomicNumber:11, atomicMass:22.990, symbol:'Na', group:1, period:3},
    { name: 'Magnesium', atomicNumber:12, atomicMass:24.305, symbol:'Mg', group:2, period:3},
    { name: 'Aluminium', atomicNumber:13, atomicMass:26.982, symbol:'Al', group:13, period:3},
    { name: 'Silicon', atomicNumber:14, atomicMass:28.085, symbol:'Si', group:14, period:3},
    { name: 'phosphorous', atomicNumber:15, atomicMass:30.974, symbol:'P', group:15, period:3},
    { name: 'Sulphur', atomicNumber:16, atomicMass:32.06, symbol:'S', group:16, period:3},
    { name: 'chlorine', atomicNumber:17, atomicMass:35.45, symbol:'Cl', group:17, period:3},
    { name: 'argon', atomicNumber:18, atomicMass:39.948, symbol:'Ar', group:18, period:3},
    { name: 'Potassium', atomicNumber:19, atomicMass:39.098, symbol:'K', group:1, period:4},
    { name: 'Calcium', atomicNumber:20, atomicMass:40.078, symbol:'Ca', group:2, period:4},
    { name: 'Scandium', atomicNumber:21, atomicMass:44.956, symbol:'Sc', group:3, period:4},
    { name: 'Titanium', atomicNumber:22, atomicMass:47.867, symbol:'Ti', group:4, period:4},
    { name: 'Vanadium', atomicNumber:23, atomicMass:50.942, symbol:'V', group:5, period:4},
    { name: 'Chromium', atomicNumber:24, atomicMass:51.996, symbol:'Cr', group:6, period:4},
    { name: 'Manganese', atomicNumber:25, atomicMass:54.938, symbol:'Mn', group:7, period:4},
    { name: 'Iron', atomicNumber:26, atomicMass:55.845, symbol:'Fe', group:8, period:4},
    { name: 'Cobalt', atomicNumber:27, atomicMass:58.933, symbol:'Co', group:9, period:4},
    { name: 'Nickel', atomicNumber:28, atomicMass:58.693, symbol:'Ni', group:10, period:4},
    { name: 'Copper', atomicNumber:29, atomicMass:63.546, symbol:'Cu', group:11, period:4},
    { name: 'Zinc', atomicNumber:30, atomicMass:65.38, symbol:'Zn', group:12, period:4},
    { name: 'Gallium', atomicNumber:31, atomicMass:69.723 , symbol:'Ga', group:13, period:4},
    { name: 'Germanium', atomicNumber:32, atomicMass:72.64 , symbol:'Ge', group:14, period:4},
    { name: 'Arsenic', atomicNumber:33, atomicMass:74.9216 , symbol:'As', group:15, period:4},
    { name: 'Selenium', atomicNumber:34, atomicMass:78.96 , symbol:'Se', group:16, period:4},
    { name: 'Bromine', atomicNumber:35, atomicMass:79.904 , symbol:'Br', group:17, period:4},
    { name: 'krypton', atomicNumber:36, atomicMass:83.798 , symbol:'Kr', group:18, period:4},
    { name: 'Rubidium', atomicNumber: 37, atomicMass: 85.4678, symbol: 'Rb', group: 1, period: 5 },
    { name: 'Strontium', atomicNumber: 38, atomicMass: 87.62, symbol: 'Sr', group: 2, period: 5 },
    { name: 'Yttrium', atomicNumber: 39, atomicMass: 88.905, symbol: 'Y', group: 3, period: 5 },
    { name: 'Zirconium', atomicNumber: 40, atomicMass: 91.224, symbol: 'Zr', group: 4, period: 5 },
    { name: 'Niobium', atomicNumber: 41, atomicMass: 92.906, symbol: 'Nb', group: 5, period: 5 },
    { name: 'Molybdenum', atomicNumber: 42, atomicMass: 95.95, symbol: 'Mo', group: 6, period: 5 },
    { name: 'Technetium', atomicNumber: 43, atomicMass: 98, symbol: 'Tc', group: 7, period: 5 },
    { name: 'Ruthenium', atomicNumber: 44, atomicMass: 101.07, symbol: 'Ru', group: 8, period: 5 },
    { name: 'Rhodium', atomicNumber: 45, atomicMass: 102.91, symbol: 'Rh', group: 9, period: 5 },
    { name: 'Palladium', atomicNumber: 46, atomicMass: 106.42, symbol: 'Pd', group: 10, period: 5 },
    { name: 'Silver', atomicNumber: 47, atomicMass: 107.87, symbol: 'Ag', group: 11, period: 5 },
    { name: 'Cadmium', atomicNumber: 48, atomicMass: 112.41, symbol: 'Cd', group: 12, period: 5 },
    { name: 'Indium', atomicNumber: 49, atomicMass: 114.82, symbol: 'In', group: 13, period: 5 },
    { name: 'Tin', atomicNumber: 50, atomicMass: 118.71, symbol: 'Sn', group: 14, period: 5 },
    { name: 'Antimony', atomicNumber: 51, atomicMass: 121.76, symbol: 'Sb', group: 15, period: 5 },
    { name: 'Tellurium', atomicNumber: 52, atomicMass: 127.6, symbol: 'Te', group: 16, period: 5 },
    { name: 'Iodine', atomicNumber: 53, atomicMass: 126.9, symbol: 'I', group: 17, period: 5 },
    { name: 'Xenon', atomicNumber: 54, atomicMass: 131.29, symbol: 'Xe', group: 18, period: 5 },
    { name: 'Cesium', atomicNumber: 55, atomicMass: 132.91, symbol: 'Cs', group: 1, period: 6 },
    { name: 'Barium', atomicNumber: 56, atomicMass: 137.33, symbol: 'Ba', group: 2, period: 6 },
    { name: 'Lanthanum', atomicNumber: 57, atomicMass: 138.91, symbol: 'La', group: 3, period: 6 },
    { name: 'Cerium', atomicNumber: 58, atomicMass: 140.12, symbol: 'Ce', group: 0, period: 6 },
    { name: 'Praseodymium', atomicNumber: 59, atomicMass: 140.91, symbol: 'Pr', group: 0, period: 6 },
    { name: 'Neodymium', atomicNumber: 60, atomicMass: 144.24, symbol: 'Nd', group: 0, period: 6 },
    { name: 'Promethium', atomicNumber: 61, atomicMass: 145, symbol: 'Pm', group: 0, period: 6 },
    { name: 'Samarium', atomicNumber: 62, atomicMass: 150.36, symbol: 'Sm', group: 0, period: 6 },
    { name: 'Europium', atomicNumber: 63, atomicMass: 151.96, symbol: 'Eu', group: 0, period: 6 },
    { name: 'Gadolinium', atomicNumber: 64, atomicMass: 157.25, symbol: 'Gd', group: 0, period: 6 },
    { name: 'Terbium', atomicNumber: 65, atomicMass: 158.93, symbol: 'Tb', group: 0, period: 6 },
    { name: 'Dysprosium', atomicNumber: 66, atomicMass: 162.5, symbol: 'Dy', group: 0, period: 6 },
    { name: 'Holmium', atomicNumber: 67, atomicMass: 164.93, symbol: 'Ho', group: 0, period: 6 },
    { name: 'Erbium', atomicNumber: 68, atomicMass: 167.26, symbol: 'Er', group: 0, period: 6 },
    { name: 'Thulium', atomicNumber: 69, atomicMass: 168.93, symbol: 'Tm', group: 0, period: 6 },
    { name: 'Ytterbium', atomicNumber: 70, atomicMass: 173.05, symbol: 'Yb', group: 0, period: 6 },
    { name: 'Lutetium', atomicNumber: 71, atomicMass: 174.97, symbol: 'Lu', group: 3, period: 6 },
    { name: 'Hafnium', atomicNumber: 72, atomicMass: 178.49, symbol: 'Hf', group: 4, period: 6 },
    { name: 'Tantalum', atomicNumber: 73, atomicMass: 180.95, symbol: 'Ta', group: 5, period: 6 },
    { name: 'Tungsten', atomicNumber: 74, atomicMass: 183.84, symbol: 'W', group: 6, period: 6 },
    { name: 'Rhenium', atomicNumber: 75, atomicMass: 186.21, symbol: 'Re', group: 7, period: 6 },
    { name: 'Osmium', atomicNumber: 76, atomicMass: 190.23, symbol: 'Os', group: 8, period: 6 },
    { name: 'Iridium', atomicNumber: 77, atomicMass: 192.22, symbol: 'Ir', group: 9, period: 6 },
    { name: 'Platinum', atomicNumber: 78, atomicMass: 195.08, symbol: 'Pt', group: 10, period: 6 },
    { name: 'Gold', atomicNumber: 79, atomicMass: 196.97, symbol: 'Au', group: 11, period: 6 },
    { name: 'Mercury', atomicNumber: 80, atomicMass: 200.59, symbol: 'Hg', group: 12, period: 6 },
    { name: 'Thallium', atomicNumber: 81, atomicMass: 204.38, symbol: 'Tl', group: 13, period: 6 },
    { name: 'Lead', atomicNumber: 82, atomicMass: 207.2, symbol: 'Pb', group: 14, period: 6 },
    { name: 'Bismuth', atomicNumber: 83, atomicMass: 208.98, symbol: 'Bi', group: 15, period: 6 },
    { name: 'Polonium', atomicNumber: 84, atomicMass: 209, symbol: 'Po', group: 16, period: 6 },
    { name: 'Astatine', atomicNumber: 85, atomicMass: 210, symbol: 'At', group: 17, period: 6 },
    { name: 'Radon', atomicNumber: 86, atomicMass: 222, symbol: 'Rn', group: 18, period: 6 },
    { name: 'Francium', atomicNumber: 87, atomicMass: 223, symbol: 'Fr', group: 1, period: 7 },
    { name: 'Radium', atomicNumber: 88, atomicMass: 226, symbol: 'Ra', group: 2, period: 7 },
    { name: 'Actinium', atomicNumber: 89, atomicMass: 227, symbol: 'Ac', group: 3, period: 7 },
    { name: 'Thorium', atomicNumber: 90, atomicMass: 232.04, symbol: 'Th', group: 0, period: 7 },
    { name: 'Protactinium', atomicNumber: 91, atomicMass: 231.04, symbol: 'Pa', group: 0, period: 7 },
    { name: 'Uranium', atomicNumber: 92, atomicMass: 238.03, symbol: 'U', group: 0, period: 7 },
    { name: 'Neptunium', atomicNumber: 93, atomicMass: 237, symbol: 'Np', group: 0, period: 7 },
    { name: 'Plutonium', atomicNumber: 94, atomicMass: 244, symbol: 'Pu', group: 0, period: 7 },
    { name: 'Americium', atomicNumber: 95, atomicMass: 243, symbol: 'Am', group: 0, period: 7 },
    { name: 'Curium', atomicNumber: 96, atomicMass: 247, symbol: 'Cm', group: 0, period: 7 },
    { name: 'Berkelium', atomicNumber: 97, atomicMass: 247, symbol: 'Bk', group: 0, period: 7 },
    { name: 'Californium', atomicNumber: 98, atomicMass: 251, symbol: 'Cf', group: 0, period: 7 },
    { name: 'Einsteinium', atomicNumber: 99, atomicMass: 252, symbol: 'Es', group: 0, period: 7 },
    { name: 'Fermium', atomicNumber: 100, atomicMass: 257, symbol: 'Fm', group: 0, period: 7 },
    { name: 'Mendelevium', atomicNumber: 101, atomicMass: 258, symbol: 'Md', group: 0, period: 7 },
    { name: 'Nobelium', atomicNumber: 102, atomicMass: 259, symbol: 'No', group: 0, period: 7 },
    { name: 'Lawrencium', atomicNumber: 103, atomicMass: 266, symbol: 'Lr', group: 3, period: 7 },
    { name: 'Rutherfordium', atomicNumber: 104, atomicMass: 267, symbol: 'Rf', group: 4, period: 7 },
    { name: 'Dubnium', atomicNumber: 105, atomicMass: 268, symbol: 'Db', group: 5, period: 7 },
    { name: 'Seaborgium', atomicNumber: 106, atomicMass: 269, symbol: 'Sg', group: 6, period: 7 },
    { name: 'Bohrium', atomicNumber: 107, atomicMass: 270, symbol: 'Bh', group: 7, period: 7 },
    { name: 'Hassium', atomicNumber: 108, atomicMass: 277, symbol: 'Hs', group: 8, period: 7 },
    { name: 'Meitnerium', atomicNumber: 109, atomicMass: 278, symbol: 'Mt', group: 9, period: 7 },
    { name: 'Darmstadtium', atomicNumber: 110, atomicMass: 281, symbol: 'Ds', group: 10, period: 7 },
    { name: 'Roentgenium', atomicNumber: 111, atomicMass: 282, symbol: 'Rg', group: 11, period: 7 },
    { name: 'Copernicium', atomicNumber: 112, atomicMass: 285, symbol: 'Cn', group: 12, period: 7 },
    { name: 'Nihonium', atomicNumber: 113, atomicMass: 286, symbol: 'Nh', group: 13, period: 7 },
    { name: 'Flerovium', atomicNumber: 114, atomicMass: 289, symbol: 'Fl', group: 14, period: 7 },
    { name: 'Moscovium', atomicNumber: 115, atomicMass: 290, symbol: 'Mc', group: 15, period: 7 },
    { name: 'Livermorium', atomicNumber: 116, atomicMass: 293, symbol: 'Lv', group: 16, period: 7 },
    { name: 'Tennessine', atomicNumber: 117, atomicMass: 294, symbol: 'Ts', group: 17, period: 7 },
    { name: 'Oganesson', atomicNumber: 118, atomicMass: 294, symbol: 'Og', group: 18, period: 7 }
];

searchBtn.addEventListener('click', searchElement);

function searchElement() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const foundElement = elementsData.find(element => element.name.toLowerCase().includes(searchTerm));

    if (foundElement) {
        elementName.textContent = foundElement.name;
        atomicNumber.textContent = foundElement.atomicNumber;
        atomicMass.textContent = foundElement.atomicMass;
        symbol.textContent = foundElement.symbol;
        group.textContent = foundElement.group;
        period.textContent = foundElement.period;
        resultContainer.classList.add('show');
    } else {
        resultContainer.classList.remove('show');
    }
}