import {Button} from "@material-ui/core";
import {useState} from "react";

const AlpacaButton = (props) => {
    return (
      <div>
          <hr />
          <div>
              <h2>Category</h2>
              {props.button.map((m, idx) => {
                  return (
                      <Button variant={m.category === props.category ? "contained" : "outlined"} key={idx} onClick={() => props.showOption(m.category)} style={{marginRight: "8px", marginTop: "8px"}}>{m.category}</Button>
                  );  
              })}
          </div>
          <hr />
          <div>
              <h2>Options</h2>
              {props.buttonOption.option.map((m, idx) => {
                  return (
                      <Button variant={props.categoryOpt === m ? "contained" : "outlined"} key={idx} onClick={() => props.chgImage(m, props.category)} style={{marginRight: "8px", marginTop: "8px"}}>{m}</Button>
                  );
              })}
          </div>
      </div>
    );
}
export default AlpacaButton;