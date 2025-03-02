function SecondRow() {
    let fist_task = "meeting";
     let second_task = "client reach";
     let date = "02/03/2025"

  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">{fist_task}</div>
        <div class="col">{date}</div>
        <div class="col"><button type="button" class="btn btn-danger">Danger</button></div>
      </div>
    </div>
  );
}

export default SecondRow;
