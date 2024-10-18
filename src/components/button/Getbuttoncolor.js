function getStyleBtn(styleType){
    if(styleType === 'primary'){
        return "bg-blue-500";
    }else if(styleType === "secondary"){
        return "bg-pink-500";
    }else if(styleType ==="error"){
        return "bg-red-500";
    }else{
        return "bg-green-500";
    }
}
export default getStyleBtn;