function Real_time(){
    var now = new Date();
    var currenthour = now.getHours(); 
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var tm = now.getTime();
    var date = now.getDate();
    var month = now.getMonth();
    var yr = now.getFullYear();
    return <h4>This is a current date and time: <span id = 'color'>{currenthour}:{min}:{sec},  {date}-{month}-{yr}.</span> </h4>

}

export default Real_time;