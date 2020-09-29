import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import './Graphs.css';
import { Servicio } from "../http-service/servicio";

class Graphs extends React.Component {
    constructor() {
        super();
        this.state = {
            server1: [
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
            ],
            server2: [
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
                { name: '00:00:00', ram: 0, cpu: 0 },
            ]
        }
        this.intervalo = setInterval(this.getData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalo);
    }

    render() {
        return (
            <div className='Graphs'>
                <h1>Graficas</h1>
                <h3>Servidor A</h3>
                <LineChart width={600} height={300} data={this.state.server1} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="ram" stroke="#8884d8" isAnimationActive={false} />
                    <Line type="monotone" dataKey="cpu" stroke="#ffffff" isAnimationActive={false} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Legend />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                <h3>Servidor B</h3>
                <LineChart width={600} height={300} data={this.state.server2} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="ram" stroke="#8884d8" isAnimationActive={false} />
                    <Line type="monotone" dataKey="cpu" stroke="#ffffff" isAnimationActive={false} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Legend />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        );
    }

    getData = () => {
        let datos1 = this.state.server1;
        let datos2 = this.state.server2;
        datos1 = datos1.slice(1);
        datos2 = datos2.slice(1);

        Servicio.watch(1).then(value => {
            datos1.push(value);
            this.setState({ server1: datos1 })
        });
        Servicio.watch(2).then(value => {
            datos2.push(value);
            this.setState({ server2: datos2 })
        });
    }

}
export default Graphs;