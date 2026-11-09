// server.js - Hotel Pousada Beira-Mar
require('dotenv').config();

const express = require('express');
const supabase = require('./config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// 1. GET: Listar todas as acomodações
app.get('/quartos', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('quartos_pousada')
            .select('*');

        if (error) {
            return res.status(500).json({
                erro: 'Erro no banco de dados',
                detalhe: error.message
            });
        }

        return res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({
            erro: 'Falha interna no servidor'
        });
    }
});

// 2. GET: Listar somente quartos disponíveis
app.get('/quartos/disponiveis', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('quartos_pousada')
            .select('*')
            .eq('disponivel', true);

        if (error) {
            return res.status(500).json({
                erro: 'Erro ao buscar quartos disponíveis',
                detalhe: error.message
            });
        }

        return res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({
            erro: 'Falha interna no servidor'
        });
    }
});

// 3. GET: Buscar quarto específico pelo ID
app.get('/quartos/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const { data, error } = await supabase
            .from('quartos_pousada')
            .select('*')
            .eq('id', id)
            .single();

        if (error || !data) {
            return res.status(404).json({
                erro: 'Quarto não encontrado'
            });
        }

        return res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({
            erro: 'Falha interna no servidor'
        });
    }
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Quartos: http://localhost:${PORT}/quartos`);
});