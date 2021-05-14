let canvas, logo, index, fontSize, container;

let myFonts = [
  'Alfa Slab One',
  'Anton',
  'Bangers',
  'Caveat',
  'Codystar',
  'Cormorant Garamond',
  'Creepster',
  'Dancing Script',
  'Faster One',
  'Frijole',
  'Goblin One',
  'Major Mono Display',
  'Monoton',
  'Montserrat Subrayada',
  'Mountains of Christmas',
  'Nosifer',
  'Orbitron',
  'Pacifico',
  'Press Start 2P',
  'Russo One',
  'Shojumaru',
  'Train One',
  'Vampiro One',
  'Vast Shadow',
  'Bungee Shade'
]



function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(255, 255, 255);

  fontSize = 60;

  logo = select('.logo');
  logo.style('font-size', fontSize);
  logo.style('font-family', myFonts[0]);
  logo.style('padding', '1%');
  logo.style('margin', '1%');

  // container = select('.container').hide();

  index = 0;

  frameRate(5);
}

function draw() {
  // put drawing code here

  logo.style('font-family', myFonts[index]);
  logo.style('font-size', `${fontSize}px`);
  index += 1;

  // if (index > 30){
  //   fontSize -= 5;
  //   logo.style('display', 'block');
  // }
  // if (fontSize < 60) {
  //   fontSize = 60;
  //   logo.style('font-family', myFonts[24]);
  //   // container.show();
  // }

}