import './Radio.css';

function Radio() {
    return(
        <div className='button-menu'>
            <h3>Choose your colour</h3>
            <article>
                <div>
                    <button id='redBtn'></button>
                </div>
                <div>
                    <button id='blueBtn'></button>
                </div>
                <div>
                    <button id='blackBtn'></button>
                </div>
            </article>
        </div>
    )
}

export default Radio;