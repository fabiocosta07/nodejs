import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}>BreadBottom</div>
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}> 
                    BreadTop                       
                        <div className={classes.Seeds1}>Seeds1</div>
                        <div className={classes.Seeds2}>Seeds2</div>                    
                    </div>
                )
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}>Meat</div>;            
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}>Cheese</div>;            
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}>Bacon</div>;            
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}>Salad</div>;            
                break;
            default:
                ingredient = null
        }
    
        return ingredient;
    }

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;