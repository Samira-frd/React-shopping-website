const shorten = title => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
}


const isInCart = (state, id) => {
    const result = !!state.selectedItem.find(item => item.id === id);
    return result;
}


const quantityCount = (state, id) => {
    const index = state.selectedItem.findIndex(item => item.id === id);
    if (index === -1){
        return false;
    } else {
        return state.selectedItem[index].quantity;
    }
}

export {shorten, isInCart, quantityCount};

