const LayOut = () => {
  return (
    <div className='layout'>
        <div className='header'>
            <div className='logo'>
                 <h3>Lorem ipsum</h3>                 
            </div>
            <div className='links'>
                 <h3>Link1</h3>  
            </div>
        </div>
        <div className="main">
            <div className="text1">
                <h3>This is some content alligned in center vertically and horizontally</h3>
            </div>
            <div className="text2">
                {/* <h3>This is some content alligned in center vertically and horizontally</h3> */}
            </div>
        </div>
        <footer>
            <h3>This is the content which is aligned left</h3>
        </footer>
    </div>
  )
}
export default LayOut;

