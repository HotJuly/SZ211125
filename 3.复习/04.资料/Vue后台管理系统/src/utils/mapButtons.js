export default function mapButtons(buttons){
    const mapButtonsObj = {};
    buttons.forEach((buttonStr)=>{
        const key = buttonStr.replace('btn.','');
        mapButtonsObj[key]= true;
    })
    return mapButtonsObj;
}