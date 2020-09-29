import React from 'react';
import { PanelGroup, Panel, Icon, SelectPicker, Loader } from "rsuite";
import './Pubs.css';
import { Servicio } from "../http-service/servicio";

class Pubs extends React.Component {
    servers = [
        { label: 'Servidor A', value: 'A' },
        { label: 'Servidor B', value: 'B' }
    ]
    constructor() {
        super();
        this.state = {
            pubs: [],
            server: 'A',
            ready: false
        };
        this.getData('A');
    }

    render() {
        return (
            <div className='Pubs'>
                <h1>Publicaciones:</h1>
                <SelectPicker data={this.servers} searchable={false} style={{ width: 224 }} cleanable={false} onChange={this.changeServer} value={this.state.server} />
                {
                    this.state.ready ?
                        <PanelGroup className='Paneles'> {this.setCards()} </PanelGroup> :
                        <Loader backdrop content="Ya casi lo tenemos listo..." vertical size="lg" />
                }

            </div>
        );
    }

    changeServer = (value) => {
        this.setState({
            server: value,
            ready: false
        })
        this.getData(value);
    }

    setCards = () => {
        let ret = [];
        let num = 0;
        this.state.pubs.forEach(element => {
            ret.push(
                (<Panel key={num++} className='Panel' shaded>
                    <div className='Name'>
                        <Icon className='Icono' icon="user-circle-o" size="2x" /><h4>{element.autor}</h4>
                    </div>
                    <blockquote>{element.nota}</blockquote>
                </Panel>)
            );
        });
        return ret;
    }

    getData = (data) => {
        Servicio.get_pubs(data).then(value=>
            this.setState({pubs:value,ready:true})
        )
    }

}
export default Pubs;