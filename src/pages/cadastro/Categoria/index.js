import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TemplateBase from '../../../components/TemplateBase';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };

    const [categorias, setCategorias] = useState([]);

    const [values, setValues] = useState(valoresIniciais);

    const setValue = (key, value) => {
        setValues({
            ...values,
            [key]: value,
        })
    }

    const handleChange = (info) => {
        setValue(
            info.target.getAttribute('name'), 
            info.target.value
        );
    }
    
    return (
        <TemplateBase>
            <h1>Cadastro de categoria: {values.nome}</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
            }}> 

            <FormField 
                label='Nome da Categoria'
                type='text'
                value={values.nome}
                name="nome" 
                onChange={handleChange}
            />

            <FormField 
                label='Descrição: '
                type='text' 
                name='descricao'
                value={values.descricao}
                onChange={handleChange}
            />

            <FormField 
                label='Cor: '
                type='color'
                name='cor'
                value={values.cor}
                onChange={handleChange}                
            />
 
                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">Home</Link>
        </TemplateBase>
    );
}

export default CadastroCategoria;