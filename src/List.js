import React, { Component } from 'react';
import './List.css'
import iphone12 from "./iphone12.png"
import iphonepro from "./iphonepro.png"
import ipad from "./ipad.png"
import evento from "./evento.jpeg"
import watch from "./watch.jpg"
import watchs from "./watchs.jpg"
import call from "./call.png"
import one from "./one.jpg"
import airpods from "./airpods.png"
import cuadro from "./cuadro.png"

class List extends Component{
    constructor(props){
        super(props);        
    }

    render(){
        return(
            <div>                
                    <div className='imagen1'>
                        iPhone12
                    </div>
                    <div className='imagen2'>
                        Súper.Mega.Rápido
                    </div>
                    <div className='imagen3'>
                        Más información 
                    </div>
                    <div className='imagen4'>
                        <img src={iphone12} width='1400px' height='500px' />
                    </div>
                    <div className='imagen5'>
                        <img src={iphonepro} width='1400px' height='500px' /> 
                        <div className='imagen6'>
                            iPhone12 Pro
                        </div>
                        <div className='imagen7'>
                            Un salto al siguiente nivel.
                        </div>
                        <div className='imagen8'>
                            Más información
                        </div>
                    </div>
                    <div className='imagen9'>
                        <img src={ipad} width='1400px' height='500px' />
                        <div className='imagen10'>
                            iPad Air
                        </div>
                        <div className='imagen11'>
                            Lleno de potencia, color y posibilidades.
                        </div>
                        <div className='imagen12'>
                            Más información
                        </div>
                    </div>
                    <div className='imagen13'>
                        <img src={evento} width='700px' height='500px' />
                        <div className='imagen14'>
                            Evento de Apple
                        </div>
                        <div className='imagen15'>
                            Mira la presentación en vivo en el sitio de
                        </div>
                        <div className='imagen16'>
                            EE.UU. el 20 de abril a las 10 a.m. (PDT).
                        </div>
                        <div className='imagen17'>
                            Más información
                        </div>
                    </div>
                    <div className='imagen18'>
                        <img src={watch} width='640px' height='500px' />
                        <div className='imagen19'>
                            WATCH
                        </div>
                        <div className='imagen20'>
                            SERIES 6
                        </div>
                        <div className='imagen21'>
                            Un futuro más saludable en tu muñeca
                        </div>
                        <div className='imagen22'>
                            Más información
                        </div>
                    </div>
                    <div className='imagen23'>
                        <img src={watchs} width='700px' height='500px' />
                        <div className='imagen24'>
                            WATCH
                        </div>
                        <div className='imagen25'>
                            SE
                        </div>
                        <div className='imagen26'>
                            Te ayuda a ser más.
                        </div>
                        <div className='imagen27'>
                            Por menos de lo que crees.
                        </div>
                        <div className='imagen28'>
                            Más información
                        </div>
                    </div>
                    <div className='imagen29'>
                        <img src={call} width='640px' height='700px' />
                        <div className='imagen30'>
                            9 Llamadas envolventes.
                        </div>
                        <div className='imagen31'>
                            1 conexión.
                        </div>
                        <div className='imagen32'>
                            Ver ahora
                        </div>
                    </div>
                    <div className='imagen33'>
                        <img src={one} width='700px' height='500px' />
                        <div className='imagen34'>
                            One
                        </div>
                        <div className='imagen35'>
                            Disfruta cuatro servivios de
                        </div>
                        <div className='imagen36'>
                            Apple en uno. Y aprovecha más por menos
                        </div>
                        <div className='imagen37'>
                            Más información       Prueba gratis
                        </div>
                    </div>
                    <div className='imagen38'>
                        <img src={airpods} width='500px' height='450px' />
                        <div className='imagen39'>
                            AirPods Max
                        </div>
                        <div className='imagen40'>
                            Más información
                        </div>
                    </div>
                    <div className='imagen41'>
                        <img src={cuadro} width='1400px' height='650px' />
                        <div className='imagen42'>
                            1. La prueba gratis de Apple One incluye sólo los servicios que no estés usando actualmente mediante una prueba gratis o suscripción. 
                            El plan se renovará automáticamente hasta que se cancele. Sujeto a restricciones y otros términos.
                        </div>
                        <div className='imagen43'>
                            Apple TV+ cuesta $4.99 al mes al finalizar el periodo de prueba gratis. Una suscripción por grupo de Compartir en Familia. Promoción válida durante 3 meses después de la 
                            activación de un dispositivo elegible. El plan se renovará automáticamente hasta que se cancele. Sujeto a restricciones y otros términos. Los precios están expresados en 
                            dólares estadounidenses y pueden variar por país. Se requiere una tarjeta de crédito internacional para completar la suscripción.
                        </div>
                        <div className='imagen44'>
                            _______________________________________________________________________________________________________________________________________________________________________________
                        </div>
                        <div className='imagen45'>
                            Descubrir
                        <div className='imagen46'>
                            Mac 
                        </div>
                        <div className='imagen47'>
                            iPad
                        </div>
                        <div className='imagen48'>
                            iPhone
                        </div>
                        <div className='imagen49'>
                            Watch
                        </div>
                        <div className='imagen50'>
                            Tv
                        </div>
                        <div className='imagen51'>
                            Music 
                        </div>
                        <div className='imagen52'>
                            AirPods 
                        </div>
                        <div className='imagen53'>
                            iPod Touch
                        </div>
                        <div className='imagen54'>
                            Servicios
                        </div>
                        <div className='imagen55'>
                            Apple Music
                        </div>
                        <div className='imagen56'>
                            Apple Tv+
                        </div>
                        <div className='imagen57'>
                            Apple Arcade
                        </div>
                        <div className='imagen58'>
                            iCloud
                        </div>
                        <div className='imagen59'>
                            Apple one
                        </div>
                        <div className='imagen60'>
                            Apple Books
                        </div>
                        <div className='imagen61'>
                            App Store
                        </div>
                        <div className='imagen62'>
                            Cuenta
                        </div>
                        <div className='imagen63'>
                            Administrador tu Apple ID
                        </div>
                        <div className='imagen64'>
                            iCloud.com
                        </div>
                        <div className='imagen65'>
                            Para la empresa
                        </div>
                        <div className='imagen66'>
                            Apple y la empresa
                        </div>
                        <div className='imagen67'>
                           Valores de Apple
                        </div>
                        <div className='imagen68'>
                            Accesibilidad
                        </div>
                        <div className='imagen69'>
                            Medio ambiente
                        </div>
                        <div className='imagen70'>
                            Privacidad
                        </div>
                        <div className='imagen71'>
                            Acerca de Apple
                        </div>
                        <div className='imagen72'>
                            Newsroom
                        </div>
                        <div className='imagen73'>
                            Directivos de Apple
                        </div>
                        <div className='imagen74'>
                            Oportunidades de empleo
                        </div>
                        <div className='imagen75'>
                            Inversionistas
                        </div>
                        <div className='imagen76'>
                            Eventos
                        </div>
                        <div className='imagen77'>
                            Contactar a Apple
                        </div>
                        <div className='imagen78'>
                            Buscar un distribuidor cerca de ti.
                        </div>
                        <div className='imagen79'>
                            _______________________________________________________________________________________________________________________________________________________________________________
                        </div>
                        <div className='imagen80'>
                            Copyright © 2021 Apple Inc. Todos los derechos reservados.
                        </div>
                        <div className='imagen81'>
                            Política de privacidad │ Aviso legal │ Mapa del sitio
                        </div>
                        <div className='imagen82'>
                            América Latina y el Caribe │ English
                        </div>



                        </div>
                        
                    </div>

                </div>
            
        )
    }
}

export default List;

