const Pins = require('../Models/Pins');

module.exports = {

    async create(req, res) {

        const { nomeEC, endereco, latitude, longitude, potencialTPV, segmento } = req.body;

        try {

            const pin = await Pins.create({
                nomeEC,
                endereco,
                latitude,
                longitude,
                potencialTPV,
                segmento,
            });

            return res.status(200).json(pin);

        } catch(err) {

            return res.status(500).json(err)

        }

    },

    async index(req, res) {
        
        try {

            const pins = await Pins.findAll();

            return res.status(200).json(pins)

        } catch(err) {
            
            return res.status(500).json(err)

        }

    },

    async update(req, res) {
        
        const { pinId } = req.params;
        const { tipo, visitaRecente, proposta } = req.body;

        try {

            const pin = await Pins.findByPk(pinId);

            if (!pin) {
                return res.status(404).json({error: "Pin not found!"})
            }
            
            if (visitaRecente && pin.visitaRecente && !tipo && !proposta) {
                pin.ultimaVisita = pin.visitaRecente;
                pin.visitaRecente = visitaRecente;
                pin.qtdVisitas += 1;
            }
            if (visitaRecente && !tipo && !pin.visitaRecente && !pin.ultimaVisita) 
                pin.visitaRecente = visitaRecente;

            if (pin.tipo !== 'cliente' && !visitaRecente && !proposta) 
                pin.tipo = tipo;

            if (proposta && !tipo && !visitaRecente)
                pin.proposta = proposta

            pin.save();

            res.status(200).json(pin)

        } catch(err) {

            return res.status(500).json(err)

        }

    },

    async delete(req, res) {

        const { pinId } = req.params;

        try {

            const pin = await Pins.findByPk(pinId);

            if (!pin) {
                return res.status(404).json({error: "Pin not found!"})
            }

            pin.destroy();

            return res.json({message: "Pin successfull deleted!"});

        } catch(err) {
            return res.status(500).json(err)
        }

    }

}