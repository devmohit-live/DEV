let Modal = (props) => {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>This is Modal</p>
              <h2>{props.weatherData.timepoint}</h2>
              <p>Cloudcover {props.weatherData.cloudcover}</p>
              <p>Visibility {props.weatherData.seeing}</p>
              <p>Transparency {props.weatherData.transparency}</p>
              <p>Lifted Index {props.weatherData.lifted_index}</p>
              <p>RH2M {props.weatherData.rh2m}</p>
              <p>Wind Direction {props.weatherData.wind10m.direction}</p>
              <p>Wind Speed {props.weatherData.wind10m.speed}</p>
              <p>Temperature {props.weatherData.temp2m}</p>
              <p>Precision Type {props.weatherData.prec_type}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
