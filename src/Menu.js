import React, {Component}from 'react';
//import Search from './Search';
import './Menu.css';
import descarga from "./descarga.png";
import Apple from "./Apple.png";

class Menu extends Component{
    constructor(props){
        super(props)

        this.state = {
            scrolled: true,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 50
            if (isTop !== true){
                this.setState({ scrolled: false });
            }
            else {
                this.setState({ scrolled: true });
            }
        })
    }
    componentWillMount() {
        window.removeEventListener('scroll', ()=>{});
    }

    render(){
        return(
            <div>                
                <div className={this.state.scrolled ? 'top-page' : 'top-page scrolled'}>
                    <div className='manzana'>
                        <img src={Apple} width='20px' />
                    </div>
                    <div className='header-text'>
                        Mac
                    </div>
                    <div className='header-text'>
                        iPad
                    </div>
                    <div className='header-text'>
                        iPhone
                    </div>
                    <div className='header-text'>
                        Watch
                    </div>
                    <div className='header-text'>
                        TV
                    </div>
                    <div className='header-text'>
                        Music
                    </div>
                    <div className='header-text'>
                        Soporte
                    </div>
                    <div className='header-text'>
                        Dónde comprar
                    </div>
                    <div className='search'>
                        <img src={descarga} width='20px' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;