import React from 'react';
import classes from './Burger.css';
import BurgerIngrident from './BurgerIngredient/BurgerIngrident';
const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngrident key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Insert Some ingredients into the burger</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngrident type="bread-top" />
      {transformedIngredients}
      <BurgerIngrident type="bread-bottom" />
    </div>
  );
};
export default burger;
