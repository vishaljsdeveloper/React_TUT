import './style.css';
import style from './Custom.module.css';
function Stylecss29(){
    return(
        <div>
            <h1 className='primary'>style type 1 with normal css</h1>
            <h1 style={{backgroundColor:'black' ,color:'red'}}>style type 2 with inline css</h1>
            <h1 className={style.success}>style type 3 with custom module css</h1>
        </div>
    )
}
export default Stylecss29;