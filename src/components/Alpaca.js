import classes from './Alpaca.module.css'

const Alpaca = (props) => {
    const getImage = (category, part) => {
        const obj = require(`../alpaca/${category}/${part}.png`);
        return obj.default;
    }
    
    return (
      <div id="alpaca" className={classes.alpaca}>
          <img src={getImage("backgrounds", props.alpacaAttr.backgrounds)} className={classes.backgrounds} />
          <img src={getImage("ears", props.alpacaAttr.ears)} className={classes.ears} />
          <img src={getImage("neck", props.alpacaAttr.neck)} className={classes.neck} />
          <img src={getImage("hair", props.alpacaAttr.hair)} className={classes.hair} />
          <img src={getImage("leg", props.alpacaAttr.leg)} className={classes.leg} />
          <img src={getImage("eyes", props.alpacaAttr.eyes)} className={classes.eyes} />
          <img src={getImage("accessories", props.alpacaAttr.accessories)} className={classes.accessories} />
          <img src={getImage("nose", props.alpacaAttr.nose)} className={classes.nose} />
          <img src={getImage("mouth", props.alpacaAttr.mouth)} className={classes.mouth} />
      </div>  
    );
}

export default Alpaca;