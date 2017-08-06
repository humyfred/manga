export const initLoadingState = (props) => {
    if (props.CartoonCards.length === 0) {
        return {
            loadState: 'show',
        }
    } else {
        return {
            loadState: 'hide',
        }
    }
}

export const loadData = (obj) => {
    if (obj.props.CartoonCards.length === 0) {
        obj.props.loadData(obj);
    } else {
        Object.assign(obj, initLoadingState(obj.props));
    }
}


export const loadCartoon = () => {
    pull_refresh.classList.add("refreshing");


    var i = 0,
        len = 3;
    for (; i < len; i++) {
        var li = document.createElement("li");
        li.innerHTML = "new row " + index++;
        list.insertBefore(li, list.firstChild);
    }
    arrow.classList.remove("arrow_up");
    pull_refresh.classList.remove("refreshing");
    at.to(at.initialValue);
    at.min -= 40 * 3;
}