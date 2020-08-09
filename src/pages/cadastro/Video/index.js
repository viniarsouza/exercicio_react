import React from 'react';
import { Link } from 'react-router-dom';

import TemplateBase from '../../../components/TemplateBase';

function CadastroVideo() {
    return (
        <TemplateBase>
            <h1>Cadastro de videos</h1>

            <Link to='/cadastro/categoria'>Cadastro de categoria</Link>
        </TemplateBase>
    );
}

export default CadastroVideo;