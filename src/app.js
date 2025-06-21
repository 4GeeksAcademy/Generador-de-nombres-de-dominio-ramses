let pronombres = ['el', 'tu' , 'yo','nosotros', 'ellos'];
let adjetivos = ['grande', 'loco', 'triste', 'feliz', 'cansado'];
let sustantivos = ['libro', 'ciudad', 'justicia', 'libertad'];
let dominios= ['.com', '.cl', '.net', '.ve', '.ec'];

const combinaciones = () =>{
  for (let index = 0; index < pronombres.length; index++) {
    const elementos = pronombres[index];

    for (let indexAdjetivos = 0; indexAdjetivos < adjetivos.length; indexAdjetivos++){
      const eleAdjetivos = adjetivos[indexAdjetivos];

      for (let indexSustantivos = 0; indexSustantivos < sustantivos.length; indexSustantivos++){
        const susSustantivos = sustantivos[indexSustantivos];

        for (let indexDominios = 0; indexDominios < dominios.length; indexDominios++){
          const domDominios = dominios[indexDominios];

          let resultado = `${elementos}${eleAdjetivos}${susSustantivos}${domDominios}`;
          console.log(resultado);
        
        } 
      }
      
    }
    
  }
  
};
combinaciones();