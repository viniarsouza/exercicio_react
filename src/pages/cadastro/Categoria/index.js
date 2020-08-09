import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import TemplateBase from '../../../components/TemplateBase';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

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
    });
  };

  const handleChange = (info) => {
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  };

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <TemplateBase>
      <h1>
        Cadastro de categoria:
        {values.nome}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">Home</Link>
    </TemplateBase>
  );
}

export default CadastroCategoria;
