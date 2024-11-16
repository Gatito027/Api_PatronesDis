// factory.js
const db = require('../database.js');

function Descargas() {
    this.descargas = async function(accion, id) {
        if (accion === 'verDescargas') {
            return await verDescargas();
        } else if (accion === 'verDescarga') {
            return await verDescarga(id);
        } else if (accion === 'Entregada') {
            return await Entregada(id);
        } else if (accion === 'enCamino') {
            return await enCamino(id);
        } else if (accion === 'pendiente') {
            return await pendiente(id);
        }
    }

    async function descargaStatus(query, params = []) {
        try {
            const result = await db.one(query, params);
            return { result };
        } catch (err) {
            return { err };
        }
    }

    async function verDescargas() {
        return await descargaStatus('SELECT * FROM public.plataforma_descarga');
    }

    async function verDescarga(id) {
        return await descargaStatus('SELECT * FROM public.plataforma_descarga WHERE id = $1', [id]);
    }

    async function Entregada(id) {
        return await descargaStatus('UPDATE public.plataforma_descarga SET status = $1 WHERE id = $2', ['Entregada', id]);
    }

    async function enCamino(id) {
        return await descargaStatus('UPDATE public.plataforma_descarga SET status = $1 WHERE id = $2', ['En_camino', id]);
    }

    async function pendiente(id) {
        return await descargaStatus('UPDATE public.plataforma_descarga SET status = $1 WHERE id = $2', ['Pendiente', id]);
    }
}

module.exports = { Descargas };
