const Cats = ({getCat, cat }) => {
    return(
        <div>
            <h2 id="cat_header">You ever seen Oliver and company? </h2>
            <button id="cat_btn" onClick={getCat}>Generate a cat picture</button>
            <div className="cat-display">
                {cat !== '' ? <img className="cat-img" src={cat} alt="issa cat" /> : ''}
            </div>
        </div>
    )
};

export default Cats;