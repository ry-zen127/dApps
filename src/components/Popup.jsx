function Popup({Title, detogglePopup}) {
  return (
    <>,
      <div className="popup">
        <span>{Title}</span>
        <div className="popup__btns">
          <button className="popup__btn" onClick={(event) => {
        console.log("Confirm")
      }}>Confirm</button>
          <button className="popup__btn popup__btn--cancel" onClick={(event) => {
            detogglePopup(false)
          }}>Cancel</button>
        </div>
      </div>
      <div onClick= {() => detogglePopup()} className="backdrop"></div>
    </>
  );
}

export default Popup;
