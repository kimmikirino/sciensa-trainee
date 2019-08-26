import React from "react";
import Item from "./ItemLista";

const Lista = props => {
  const { data } = props;

  const gerarItems = () => {
    const items = data.map(dataItem => <Item>{dataItem}</Item>);

    return items;
  };

  return <ul>{gerarItems()}</ul>;
};

export default Lista;
