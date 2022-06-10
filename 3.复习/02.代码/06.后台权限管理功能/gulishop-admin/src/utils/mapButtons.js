function mapButtons(buttons){
    const obj = {};

    buttons.forEach((name)=>{
        obj[name] = true;
    })

    return obj;
}

export default mapButtons